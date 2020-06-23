let positions = [
  { top: 5.5, left: 24 },
  { top: 5.5, left: 51 },
  { top: 14.4, left: 71 },
  { top: 14.4, left: 44 },
  { top: 14.4, left: 9 },
  { top: 38.5, left: 16 },
  { top: 38.5, left: 44 },
  { top: 30.5, left: 50 },
  { top: 30.5, left: 23 },
];

let students = [
  "Razack",
  "Eddy",
  "Greg",
  "Elysé",
  "Tibo",
  "Quentin",
  "Jeremy",
  "Kevin",
  "Baptiste",
];

let studentContainerDOM = document.querySelector(".layout__container");

function generateStudents() {
  students.forEach((element) => {
    let div = `<p class="student__name">${element}</p>`;
    let newDiv = document.createElement("div");
    newDiv.innerHTML = div;
    newDiv.classList.add("layout__student");
    newDiv.style.left = 0 + "%";
    newDiv.style.top = 0 + "%";
    updateListDisplay(element);
    setTimeout(() => {
      let position = getRandCord(positions);
      newDiv.style.left = position.left + "%";
      newDiv.style.top = position.top + "%";
    }, 500);

    studentContainerDOM.appendChild(newDiv);

    console.log(positions);
  });
}

function getRandCord(positions) {
  let index = Math.floor(Math.random() * positions.length);
  let pos = positions[index];
  removeFromArr(index);

  return pos;
}

function removeFromArr(index) {
  positions.splice(index, 1);
}

function updateListDisplay(name) {
  let list = document.querySelector(".list__container");
  let div = document.createElement("div");
  div.textContent = name;

  list.appendChild(div);
}

generateStudents();
