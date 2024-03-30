// document.addEventListener('DOMContentLoaded', function() {
//   const questions = [
//     " Do you enjoy solving complex mathematical problems?"
//     ,

//     "  Are you curious about how things work and enjoy conducting experiments?"
//     ,

//     "  Do you have a keen interest in understanding human behavior and society?"
//     ,

//     " Are you passionate about working with computers and technology?"
//     ,

//     " Do you feel fulfilled when helping others and making a positive impact?"
//     ,

//     " Are you drawn to exploring different cultures and languages?"
//     ,

//     " 7. Do you have a knack for managing finances and budgeting?"
//     ,

//     "  Are you fascinated by historical events and their significance?"
//     ,

//     " Do you enjoy working independently and setting your own pace?"
//     ,

//     " Are you interested in pursuing a career in healthcare or medicine?"
//     ,

//     "  Are you skilled at analyzing and interpreting data?"
//     ,

//     " Do you have a creative mind and enjoy expressing yourself through art or design?"
//     ,

//     " Are you a natural leader who enjoys taking charge of projects?"
//     ,

//     "  Do you thrive in fast-paced environments and enjoy handling pressure?"
//     ,

//     "  Are you interested in environmental conservation and sustainability?"
//     ,

//     " Are you passionate about advocating for social justice and equality?"
//     ,

//     " Do you enjoy planning and organizing events or projects?"
//     ,

//     " Are you skilled at communicating effectively with others?"
//     ,
//     " Do you have a strong interest in literature and storytelling?"
//     ,

//     "  Are you fascinated by the principles of physics and how things move?"
//     ,

//     " Do you enjoy analyzing economic trends and market dynamics?"
//     ,

//     "  Are you interested in exploring the mysteries of the natural world and biology?"
//     ,

//     "  Do you have a passion for culinary arts and experimenting with flavors?"
//     ,

//     " Are you skilled at problem-solving and finding innovative solutions?"
//     ,

//     "  Do you have an interest in law and justice?"
//     ,

//     " Are you fascinated by the intricacies of technology and software development?"
//     ,

//     " Are you drawn to the world of business and entrepreneurship?"
//     ,

//     " Do you enjoy conducting research and exploring new ideas?"
//     ,

//     " Are you interested in exploring the wonders of the universe and astronomy?"
//     ,

//     " Do you have a passion for music, dance, or performing arts?"

//   ];

//   const form = document.getElementById('questionnaireForm');

//   questions.forEach((question, index) => {
//     const questionDiv = document.createElement('div');
//     questionDiv.classList.add('question');

//     const questionP = document.createElement('p');
//     questionP.textContent = `${index + 1}. ${question}`;

//     const yesInput = document.createElement('input');
//     yesInput.setAttribute('type', 'radio');
//     yesInput.setAttribute('id', `q${index + 1}a1`);
//     yesInput.setAttribute('name', `q${index + 1}`);
//     yesInput.setAttribute('value', 'Yes');

//     const yesLabel = document.createElement('label');
//     yesLabel.setAttribute('for', `q${index + 1}a1`);
//     yesLabel.textContent = 'Yes';

//     const noInput = document.createElement('input');
//     noInput.setAttribute('type', 'radio');
//     noInput.setAttribute('id', `q${index + 1}a2`);
//     noInput.setAttribute('name', `q${index + 1}`);
//     noInput.setAttribute('value', 'No');

//     const noLabel = document.createElement('label');
//     noLabel.setAttribute('for', `q${index + 1}a2`);
//     noLabel.textContent = 'No';

//     questionDiv.appendChild(questionP);
//     questionDiv.appendChild(yesInput);
//     questionDiv.appendChild(yesLabel);
//     questionDiv.appendChild(document.createElement('br'));
//     questionDiv.appendChild(noInput);
//     questionDiv.appendChild(noLabel);

//     form.insertBefore(questionDiv, form.lastElementChild);
//   });

//   document.getElementById('questionnaireForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const resultDiv = document.getElementById('result');
//     resultDiv.innerHTML = '<p>Thank you for completing the questionnaire. Our counselors will review your answers and get back to you with advice.</p>';
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  const questions = [
    "Do you enjoy solving complex mathematical problems?",
    "Are you curious about how things work and enjoy conducting experiments?",
    "Do you have a keen interest in understanding human behavior and society?",
    "Are you passionate about working with computers and technology?",
    "Do you feel fulfilled when helping others and making a positive impact?",
    "Are you drawn to exploring different cultures and languages?",
    "Do you have a knack for managing finances and budgeting?",
    "Are you fascinated by historical events and their significance?",
    "Do you enjoy working independently and setting your own pace?",
    "Are you interested in pursuing a career in healthcare or medicine?",
    "Are you skilled at analyzing and interpreting data?",
    "Do you have a creative mind and enjoy expressing yourself through art or design?",
    "Are you a natural leader who enjoys taking charge of projects?",
    "Do you thrive in fast-paced environments and enjoy handling pressure?",
    "Are you interested in environmental conservation and sustainability?",
    "Are you passionate about advocating for social justice and equality?",
    "Do you enjoy planning and organizing events or projects?",
    "Are you skilled at communicating effectively with others?",
    "Do you have a strong interest in literature and storytelling?",
    "Are you fascinated by the principles of physics and how things move?",
    "Do you enjoy analyzing economic trends and market dynamics?",
    "Are you interested in exploring the mysteries of the natural world and biology?",
    "Do you have a passion for culinary arts and experimenting with flavors?",
    "Are you skilled at problem-solving and finding innovative solutions?",
    "Do you have an interest in law and justice?",
    "Are you fascinated by the intricacies of technology and software development?",
    "Are you drawn to the world of business and entrepreneurship?",
    "Do you enjoy conducting research and exploring new ideas?",
    "Are you interested in exploring the wonders of the universe and astronomy?",
    "Do you have a passion for music, dance, or performing arts?"
  ];

  const form = document.getElementById('questionnaireForm');

  questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionP = document.createElement('p');
    questionP.textContent = `${index + 1}. ${question}`;

    const yesInput = document.createElement('input');
    yesInput.setAttribute('type', 'radio');
    yesInput.setAttribute('id', `q${index + 1}a1`);
    yesInput.setAttribute('name', `q${index + 1}`);
    yesInput.setAttribute('value', 'Yes');

    const yesLabel = document.createElement('label');
    yesLabel.setAttribute('for', `q${index + 1}a1`);
    yesLabel.textContent = 'Yes';

    const noInput = document.createElement('input');
    noInput.setAttribute('type', 'radio');
    noInput.setAttribute('id', `q${index + 1}a2`);
    noInput.setAttribute('name', `q${index + 1}`);
    noInput.setAttribute('value', 'No');

    const noLabel = document.createElement('label');
    noLabel.setAttribute('for', `q${index + 1}a2`);
    noLabel.textContent = 'No';

    questionDiv.appendChild(questionP);
    questionDiv.appendChild(yesInput);
    questionDiv.appendChild(yesLabel);
    questionDiv.appendChild(document.createElement('br'));
    questionDiv.appendChild(noInput);
    questionDiv.appendChild(noLabel);

    form.insertBefore(questionDiv, form.lastElementChild);
  });

  document.getElementById('questionnaireForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const resultDiv = document.getElementById('result');
    const formData = new FormData(this);
    const answers = {};
    formData.forEach((value, key) => {
      answers[key] = value;
    });

    // Send the answers to the backend for prediction
    fetch('/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(answers)
    })
    .then(response => response.json())
    .then(data => {
      // Check if the prediction key exists
      if (data.hasOwnProperty('prediction')) {
        // Display the predicted career stream
        resultDiv.innerHTML = `<p>Your suitable stream would be ${data.prediction}</p>`;
      } else {
        resultDiv.innerHTML = '<p>An error occurred. Please try again later.</p>';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      resultDiv.innerHTML = '<p>An error occurred. Please try again later.</p>';
    });
  });
});
