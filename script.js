const wholeInputForm = document.querySelector(`.whole-input-box`);
const standard = document.querySelector(`.standards`);
const heightFeet = document.querySelector(`.height-feet`);
const heightInches = document.querySelector(`.height-inches`);
const weight = document.querySelector(`.weight`);
const BMIoutput = document.querySelector(`.BMIoutput`);
const notPositive = document.querySelector(`.notPositive`);
const inputMeasurement = document.querySelector(`.input-measurement`);

const heightUnit1 = document.querySelector(`#height-unit1`);
const heightUnit2 = document.querySelector(`#height-unit2`);
const weightUnit = document.querySelector(`#weight-unit`);

let heightConversion;
let weightConversion;

wholeInputForm.addEventListener(`click`, function (e) {
  e.preventDefault();
  const btn = e.target.closest(`.compute-btn`);
  if (!btn) return;

  const theWholeForm = btn.parentElement;

  //   If STANDARD if active then update the BMI calculation formula STANDARD one
  if (standard.querySelector(`.standard-real`).classList.contains(`active`)) {
    heightConversion =
      (+heightFeet.value * 30.48 + +heightInches.value * 2.54) / 100;
    weightConversion = +weight.value * 0.453592;
  }

  //   If METRICS if active then update the BMI calculation formula METRICS one
  if (
    standard.querySelector(`.standard-metrics`).classList.contains(`active`)
  ) {
    const heightCm = standard.parentElement.querySelector(`.height-cm`).value;
    const weightkgs = standard.parentElement.querySelector(`.weight-kg`).value;

    heightConversion = +heightCm / 100;
    weightConversion = +weightkgs;
  }

  //   BMI to be diplayed
  const bmi = +(
    weightConversion /
    (heightConversion * heightConversion)
  ).toFixed(1);

  //   If not a number or 0 display error and return immediately
  if (!bmi) {
    notPositive.textContent = `Acceptable values only`;
    return;
  }

  //   Display final BMI to screen
  BMIoutput.textContent = `${bmi}`;
  notPositive.textContent = ``;
});

// For changing of BMI formula
standard.addEventListener(`click`, function (e) {
  const btn = e.target;

  //   Change BMI formula to STANDARD ONE
  if (btn.classList.contains(`standard-real`)) {
    // Activating the metric class and deactivating the standard one
    btn.classList.add(`active`);
    btn.nextElementSibling.classList.remove(`active`);

    // Updating the output and error if there is and measurement area
    notPositive.textContent = BMIoutput.textContent = ``;
    inputMeasurement.innerHTML = `
    Your height: <input type="text" value="5" autofocus
            class="measurements height-feet"/>
          <i id="height-unit1"> (feet)</i>
          <i id="height-unit2"> <input type="text" value="10" class="measurements height-inches" /> (inches) </i>
          <br /><br /><br />
          Your weight:
          <input type="text" value="160" class="measurements weight" /> <i id="weight-unit"> (pound)</i>
   `;
  }

  // Change BMI formula to METRIC ONE
  if (btn.classList.contains(`standard-metrics`)) {
    // Activating the metric class and deactivating the standard one
    btn.classList.add(`active`);
    btn.previousElementSibling.classList.remove(`active`);

    // Updating the output and error if there is and measurement area
    notPositive.textContent = BMIoutput.textContent = ``;
    inputMeasurement.innerHTML = `
    Your height: <input type="text" value="180" autofocus
            class="measurements height-cm"/>
          <i id="height-unit1"> (cm)</i>
          <br /><br /><br />
          Your weight:
          <input type="text" value="65" class="measurements weight-kg" /> <i id="weight-unit"> (kg)</i>
   `;
  }
});
