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

window.addEventListener("resize", updateInnerWidth);
let windowWidth = window.innerWidth;

function updateInnerWidth() {
  windowWidth = window.innerWidth;
}

let ObjStirng = "";

for (let index = staticData.length - 1; index >= 0; index--) {
  ObjStirng =
    ObjStirng +
    ` <div class="barDiv relative">

    <div class="bar TotalIntrest_bar" style="height: ${staticData[index].ti}%;">
    </div>
    <div class="bar employee_bar" style="height:  ${
      staticData[index].Employee
    }%;">
    </div>
    <div class="bar employer_bar" style="height:  ${
      staticData[index].Employer
    }%;"></div> 

    ${
      staticData[index].ti == 100
        ? ` <img class="IconImage  tickIcon border_50"   src="./Images/tick.png" alt=""></img>`
        : ""
    }

   

</div>`;
}
ObjStirng =
  ObjStirng +
  ` <div class="dotted-hr hr1"></div>
<div class="dotted-hr hr2"></div>
<div class="dotted-hr hr3"></div>
<div class="dotted-hr hr4"></div>`;

document.getElementById("barsDiv").innerHTML = ObjStirng;
const statergye = document.getElementById("statergy");
const reviewPeers = document.getElementById("reviewPeers");
const peers = document.getElementById("peers");

if (innerWidth <= 900) {
  reviewPeers.innerHTML = `<a href="./retirement_mobile.html" class="displayBlock span_Op_10 primary AnchorDefaults textCenter">How do I compaire my peers? ></a>`;
} else {
  fetch("peers.html")
    .then((response) => response.text())
    .then((data) => {
      peers.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error fetching the file:", error);
    });

  fetch("retirement_desk.html")
    .then((response) => response.text())
    .then((data) => {
      statergye.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error fetching the file:", error);
    });
}
