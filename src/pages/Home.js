import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRoom";
const Home = () => {
	return (
		<React.Fragment>
			<Hero>
				<Banner
					subtitle="Deluxe rooms starting at $299"
					title="Luxurious rooms"
				>
					<Link to="/rooms" className="btn-primary">
						Our rooms
					</Link>
				</Banner>
			</Hero>
			<Services />
			<FeaturedRooms />
		</React.Fragment>
	);
};
export default Home;
