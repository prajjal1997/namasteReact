/**
 * <div id="parent">
 *    <div id= "child">
 *      <h1>I'm h1 tag</h1>
 *    </div>
 * </div>
 */
import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id: "heading"}, "Namaste React")
// React element
const heading = (<h1 className="head" tabIndex="5">Namaste React using JSX</h1>)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [
//       React.createElement("h1", { key: "h1" }, "I'm h1 tag"),
//       React.createElement("h2", { key: "h2" }, "I'm h2 tag")
//     ]
//   ))

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);+
// root.render(parent);


