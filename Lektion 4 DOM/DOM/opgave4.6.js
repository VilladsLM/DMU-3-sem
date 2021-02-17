const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

let overskrift = document.body.appendChild(document.createElement("h1"));
overskrift.style.color = "red";
overskrift.innerText = "Mountains";

let table = document.createElement("table");
table.style.border = "thick solid blue";
table.style.borderSpacing = "0";

function createRows(parent) {
  let firstRow = document.createElement("tr");
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");

  th1.innerHTML = "name";
  th2.innerHTML = "height";
  th3.innerHTML = "place";

  firstRow.append(th1);
  firstRow.append(th2);
  firstRow.append(th3);
  parent.append(firstRow);

  for (let index = 0; index < MOUNTAINS.length; index++) {
    let row = document.createElement("tr");
    let thName = document.createElement("th");
    thName.style.border = " solid blue";
    thName.style.borderLeft = "hidden";
    thName.style.borderBottom = "hidden";
    thName.style.fontWeight = "normal";
    thName.style.textAlign = "Left";

    let thHeight = document.createElement("th");
    thHeight.style.border = "  solid blue";
    thHeight.style.borderLeft = "hidden";
    thHeight.style.borderBottom = "hidden";
    thHeight.style.fontWeight = "normal";
    thHeight.style.textAlign = "right";

    let thPlace = document.createElement("th");
    thPlace.style.border = "solid blue";
    thPlace.style.borderLeft = "hidden";
    thPlace.style.borderBottom = "hidden";
    thPlace.style.borderRight = "hidden";
    thPlace.style.fontWeight = "normal";
    thPlace.style.textAlign = "left";

    thName.innerHTML = MOUNTAINS[index].name;
    thHeight.innerHTML = MOUNTAINS[index].height;
    thPlace.innerHTML = MOUNTAINS[index].place;

    row.append(thName, thHeight, thPlace);
    parent.append(row);
  }
}

createRows(table);
document.body.appendChild(table);
