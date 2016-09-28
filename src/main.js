'use strict';

import BlackTriangle from "./components/BlackTriangle";
import Backbone from "backbone";
import htmlContent from "./index.html";

const triangle = new BlackTriangle('#triangle');

window.setInterval(
  () => {

    triangle.rotate(1);
    triangle.render();
  },
  20
);
console.log(htmlContent);
Backbone.history.start();
