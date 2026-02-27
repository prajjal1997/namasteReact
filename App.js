/**
 * <div id="parent">
 *    <div id= "child">
 *      <h1>I'm h1 tag</h1>
 *    </div>
 * </div>
 */
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
   return (
     <div className="header">
        <div className="logo-container">
            
        </div>
     </div>
   )
}

const AppLayout = () => {
    return (
        <div className="app">
           <Header />
           <Body/> 
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)

