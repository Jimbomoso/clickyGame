//sets up the reusable Jumbotron component
import React from "react";
// import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Clicky Car Game!</h1>
		<h2>Click on any car to earn a point, but don't click on the same car more than once or you lose. Click all 12 pics, and you win.</h2>
	</header>
);
export default Jumbotron;