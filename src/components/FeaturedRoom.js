import React, { Component } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import Room from "./Room";
import Loading from "./Loading";
export default class FeaturedRoom extends Component {
	static contextType = RoomContext;
	render() {
		let { featuredRooms: rooms, loading } = this.context;
		rooms = rooms.map((room, index) => {
			return <Room room={room} />;
		});
		return (
			<section className="featured-rooms">
				<Title title="featured rooms" />
				<div className="featured-rooms-center">
					{/* <p>test</p> */}
					{loading ? <Loading /> : rooms}
				</div>
			</section>
		);
	}
}
