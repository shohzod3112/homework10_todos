const API = "https://jsonplaceholder.typicode.com/todos";

let forForm = document.querySelector(".forForm");
const one = document.getElementById("onediv");
const two = document.getElementById("twodiv");
const three = document.getElementById("threediv");
const four = document.getElementById("fourdiv");
const five = document.getElementById("fivediv");

const getData = async () => {
  const request = await fetch(API);
  const data = await request.json();
  return data;
};
