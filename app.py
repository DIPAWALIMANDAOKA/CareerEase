

from flask import Flask, request, jsonify, render_template
import pandas as pd
from sklearn.preprocessing import StandardScaler
from imblearn.over_sampling import SMOTE
from sklearn.ensemble import GradientBoostingClassifier, RandomForestClassifier, VotingClassifier
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split

app = Flask(__name__, template_folder='templates', static_url_path='/static')

# Load the dataset
data = pd.read_csv('CAPSTONE_DATASET.csv')

# Split features and target variable
X = data.drop('Choice', axis=1)
y = data['Choice']

# Feature scaling
scaler = StandardScaler(copy=True)  # Pass copy=True to ensure no changes to original data
X_scaled = scaler.fit_transform(X)

# Handle class imbalance
smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_scaled, y)

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_resampled, y_resampled, test_size=0.2, random_state=42)

# Initialize models
best_gb = GradientBoostingClassifier(n_estimators=100, learning_rate=0.1, max_depth=5, random_state=42)
best_rf = RandomForestClassifier(n_estimators=200, max_depth=None, min_samples_split=2, random_state=42)
best_svm = SVC(C=1, gamma='scale', kernel='rbf', random_state=42)
best_ensemble_model = VotingClassifier(estimators=[('best_gb', best_gb), ('best_rf', best_rf), ('best_svm', best_svm)], voting='hard')

# Fit the ensemble model
best_ensemble_model.fit(X_train, y_train)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if request.method=='POST':
        try:
            # Get answers from the request
            answers = [int(request.form[f'Q{i}']) for i in range(1, 31)]
            
            # Scale the answers
            answers_scaled = scaler.transform([answers])
            
            # Make prediction
            prediction = best_ensemble_model.predict(answers_scaled)
            
            # Map the predicted label to the career stream
            career_mapping = {2: 'Science', 3: 'Commerce', 4: 'Arts', 5: 'Engineering', 6: 'Vocational Courses'}
            predicted_stream = career_mapping[prediction[0]]
            
            # Return the predicted stream
            return jsonify({"prediction": predicted_stream})
        except Exception as e:
            return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
