import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const [colorSelect, setColorSelect] = useState("")
	return (
		<>
			<div className="todo container-fluid justify-content-center">
			<div className="poste"></div>
				<div className="semaforo container col p-5 bg-black rounded-5">
					<div onClick={() => setColorSelect("bg-danger")} 
					className={"luz bg-danger rounded-circle " + (colorSelect === "bg-danger" ? " selectedRed" : "")}>
					</div>

					<div onClick={() => setColorSelect("bg-warning")} 
					className={"luz bg-warning rounded-circle " + (colorSelect === "bg-warning" ? " selectedYellow" : "")}>
					</div>

					<div onClick={() => setColorSelect("bg-success")} 
					className={"luz bg-success rounded-circle " + (colorSelect === "bg-success" ? " selectedGreen" : "")}>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
