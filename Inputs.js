const Contribution = document.getElementById("contirbution");
const Age = document.getElementById("Age");
console.log(Age.value);

const Contribution_cont = document.getElementById("contirbution_Cont");
const Age_cont = document.getElementById("Age_cont");

function AgeFunc() {
  const selectedValue = Age.value;
  Age_cont.innerText = selectedValue;
}
Age.addEventListener("input", AgeFunc);
function cont_Func() {
  const selectedValue = Contribution.value;

  Contribution_cont.innerText = selectedValue;
}
Contribution.addEventListener("input", cont_Func);
