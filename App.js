/**
 * <div id="parent">
 *    <div id= "child">
 *      <h1>I'm h1 tag</h1>
 *    </div>
 * </div>
 */
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("aside"
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },[
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag")]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);+
root.render(parent);
