import React from "react";
import "./MainWindow.css";
import IHeader from "./IHeader";
import CheckUser from "./CheckUser"
import Chart from "./Chart";
import IButton from "./IButton"
import Info from "./Info"

function MainWindow() {
	return(
		<div className="gridMainWindow">
			<div className="gridIHeader"><IHeader/></div>
			<div className="gridCheckUser"><CheckUser/></div>
			<div className="gridChart"><Chart/></div>
			<div className="gridIButton"><IButton/></div>
			<div className="gridInfo"><Info/></div>
		</div>
	);
}
export default MainWindow;
