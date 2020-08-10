// const a = document.querySelector("div");
// const a = document.querySelectorAll("div"); //same

// //from d3.js select method
// //select method wraps div in d3 wrapper
// //which gives us access to different method etc.
// const b = d3.select("div");
// const b = d3.selectAll("div"); //same

// console.log(a, b);

const canvas = d3.select(".canvas"); //selected canvas
const svg = canvas.append("svg").attr("height", 600).attr("width", 600); // now append svg element to canvas and attaching attributes to it

// svg.attr("height", 600);
// svg.attr("width", 600);

// now appending shapes to svg container
svg
  .append("rect")
  .attr("width", 200)
  .attr("height", 100)
  .attr("fill", "blue")
  .attr("x", 20)
  .attr("y", 20);

svg
  .append("circle")
  .attr("r", 50)
  .attr("cx", 300)
  .attr("cy", 70)
  .attr("fill", "pink");

svg
  .append("line")
  .attr("x1", 370)
  .attr("x2", 400)
  .attr("y1", 20)
  .attr("y2", 120)
  .attr("stroke", "red");
