const form = document.querySelector('form');
const results = document.querySelector('#results');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Please provide a valid height.";
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please provide a valid weight.";
    } else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        results.innerHTML = `Your BMI is ${bmi}`;
    }
});
