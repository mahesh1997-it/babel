"use strict";

var other = function other(a, b) {
  return console.log(a.concat(b));
};

other([1, 2, 3], [4, 5, 6]);

var othertwo = function othertwo(a) {
  return console.log(a.reverse());
};

othertwo(['e', 'n', 'o']);

var otherthree = function otherthree(a) {
  return console.log(a.join(""));
};

otherthree(['o', 'n', 'e']);

var otherfour = function otherfour(a) {
  return console.log(Math.floor(a));
};

otherfour(3.14);

var otherfive = function otherfive(a) {
  return console.log(Math.ceil(a));
};

otherfive(3.94);