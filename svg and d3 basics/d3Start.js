// const a = document.querySelector("div");
// const a = document.querySelectorAll("div"); //same

// //from d3.js select method
// //select method wraps div in d3 wrapper
// //which gives us access to different method etc.
// const b = d3.select("div");
// const b = d3.selectAll("div"); //same

// console.log(a, b);

const canvas = d3.select(".canvas"); //selected canvas
const svg = canvas
  .append("svg")
  .attr("height", 600)
  .attr("width", 600)
  .attr("style", "outline: thin solid red;");
// now append svg element to canvas and attaching attributes to it

const group = svg.append("g").attr("transform", "translate(50, 100)"); //put all three items in a group

// now appending shapes to svg container
//svg old element
group
  .append("rect")
  .attr("width", 200)
  .attr("height", 100)
  .attr("fill", "blue")
  .attr("x", 20)
  .attr("y", 20);
//svg old element
group
  .append("circle")
  .attr("r", 50)
  .attr("cx", 300)
  .attr("cy", 70)
  .attr("fill", "pink");
//svg old element
group
  .append("line")
  .attr("x1", 370)
  .attr("x2", 400)
  .attr("y1", 20)
  .attr("y2", 120)
  .attr("stroke", "red");

//text svg element
svg
  .append("text")
  .attr("x", 20)
  .attr("y", 200)
  .attr("fill", "grey")
  .text("Hello world")
  .style("font-family", "arial");
