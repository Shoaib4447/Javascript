const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please enter valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please enter valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show Results
    results.innerHTML = `<span>Your BMI is ${bmi} </span>`;
    if (bmi > 0 && bmi < 18.6) {
      results.innerHTML += `</br><span>You are underweight</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML += `</br><span>You are normal weight</span>`;
    } else if (bmi > 24.9 && bmi < 29.9) {
        results.innerHTML += `</br><span>You are overweight</span>`;
    }
  }
});
