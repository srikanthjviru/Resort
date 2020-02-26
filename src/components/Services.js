import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: "free cocktails",
				info:
					"Some randome tetfjksdhfkjs,d sd fks d sdfkbjns dfj,sd nfksj k sdhf lsipwoelkhfj,b sd,f sd,fbm sdnfk.js "
			},
			{
				icon: <FaHiking />,
				title: "endless hiking",
				info:
					"Some randome tetfjksdhfkjs,d sd fks d sdfkbjns dfj,sd nfksj k sdhf lsipwoelkhfj,b sd,f sd,fbm sdnfk.js "
			},
			{
				icon: <FaShuttleVan />,
				title: "free shuttle",
				info:
					"Some randome tetfjksdhfkjs,d sd fks d sdfkbjns dfj,sd nfksj k sdhf lsipwoelkhfj,b sd,f sd,fbm sdnfk.js "
			},
			{
				icon: <FaBeer />,
				title: "strongest beers",
				info:
					"Some randome tetfjksdhfkjs,d sd fks d sdfkbjns dfj,sd nfksj k sdhf lsipwoelkhfj,b sd,f sd,fbm sdnfk.js "
			}
		]
	};
	render() {
		return (
			<section className="services">
				<Title title="services" />
				<div className="services-center">
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
