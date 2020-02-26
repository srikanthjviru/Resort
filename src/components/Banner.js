import React from "react";

export default function Banner({ title, subtitle, children }) {
	return (
		<div className="banner">
			<h1>{title}</h1>
			<div />
			{/* <p>Test</p> */}
			<p>{subtitle}</p>
			{children}
		</div>
	);
}
