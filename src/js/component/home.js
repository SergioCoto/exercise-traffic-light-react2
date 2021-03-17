import React, { useState } from "react";

//create your first component
export function Home() {
	const [color, setColor] = useState(null);

	return (
		<div id="app">
			<div className="trafficTop">
				<div className="container">
					<div
						onClick={() => setColor("red")}
						className={
							color == "red" ? "light red-selected" : "light red"
						}></div>
					<div
						onClick={() => setColor("yellow")}
						className={
							color == "yellow"
								? "light yellow-selected"
								: "light yellow"
						}></div>
					<div
						onClick={() => setColor("green")}
						className={
							color == "green"
								? "light green-selected"
								: "light green"
						}></div>
				</div>
			</div>
		</div>
	);
}
