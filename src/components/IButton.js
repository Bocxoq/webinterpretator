import React from "react"
import {Button} from "@mui/material";
import "./IButton.css"
function IButton(){
	return(
		<div className="IButton">
			<div><Button className="button" variant="contained" size="small">.to Excel</Button></div>
			<div><Button className="button" variant="contained" size="small">Close</Button></div>
		</div>
	)
}
export default IButton;
