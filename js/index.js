console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const firstName = event.target.firstName.value;
  const ageBadnessSum =
    Number(event.target.age.value) + Number(event.target.badness.value);

  console.log("The age-badness-sum of", firstName, "is", ageBadnessSum);

  console.log(data);
  event.target.reset();
  event.target.elements.firstName.focus();
});
