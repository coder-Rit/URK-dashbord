const staticData = [
  {
    ti: 100,
    Employee: 80,
    Employer: 60,
  },
  {
    ti: 90,
    Employee: 70,
    Employer: 50,
  },
  {
    ti: 80,
    Employee: 60,
    Employer: 40,
  },
  {
    ti: 75,
    Employee: 55,
    Employer: 35,
  },
  {
    ti: 70,
    Employee: 50,
    Employer: 30,
  },
  {
    ti: 65,
    Employee: 49,
    Employer: 32,
  },
  {
    ti: 63,
    Employee: 47,
    Employer: 28,
  },

  {
    ti: 40,
    Employee: 20,
    Employer: 9,
  },
  {
    ti: 30,
    Employee: 10,
    Employer: 8,
  },
  {
    ti: 20,
    Employee: 9,
    Employer: 7,
  },

  {
    ti: 20,
    Employee: 9,
    Employer: 7,
  },
];

let ObjStirng = "";

for (let index = staticData.length - 1; index >= 0; index--) {
  ObjStirng =
    ObjStirng +
    ` <div class="barDiv">
    <div class="bar TotalIntrest_bar" style="height: ${staticData[index].ti}%;">
    </div>
    <div class="bar employee_bar" style="height:  ${staticData[index].Employee}%;">
    </div>
    <div class="bar employer_bar" style="height:  ${staticData[index].Employer}%;"></div> 
</div>`;
}
ObjStirng = ObjStirng +` <div class="dotted-hr hr1"></div>
<div class="dotted-hr hr2"></div>
<div class="dotted-hr hr3"></div>
<div class="dotted-hr hr4"></div>`
console.log(ObjStirng);

document.getElementById("barsDiv").innerHTML = ObjStirng;




 