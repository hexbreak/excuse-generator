/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = ["The neighbor", "My cousin", "His dog", "My car"];
  let action = [" spied", " mowed", " destroyed", " crashed"];
  let what = [" my computer", " the  yard", " into the house"];
  let when = [
    " before the instructions from the professor.",
    " on point with the schedule.",
    " when the assignment was finished.",
    " during my break time.",
    " while I was doing the dishes."
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    "" +
    action[actionIndex] +
    "" +
    what[whatIndex] +
    "" +
    when[whenIndex]
  );
};
