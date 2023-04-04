import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

export default function About() {
	return (
		<>
			<Hero backgroundImage="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1728&q=80" />
			;
			<Container />
		</>
	);
}
