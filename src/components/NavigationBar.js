import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/logo.png";
import font from "../assets/fonts/Abel-Regular.ttf";
import { GlobalFontStyle } from "../components/GlobalFontStyle";

const Styles = styled.div`
	.navbar {
		height: 108px;

		background-color: #2e2e2e !important;
	}

	.nav-item {
		padding: 10px 16px;
	}
	.navbar .nav-link.active {
		color: #ffc123 !important;
		border: 2px solid #ffc123;
		border-radius: 25px;
		width: 157px;
		height: 54px;
		text-align: center;
	}
	.navbar-toggler-icon {
		width: 1.5em;
		height: 1.5em;
		color: #fff;
		background: #fff;
		border: 2px solid #000;
	}
	.nav-item > .nav-link {
		color: #ffffff !important;
		font-size: 20px;
		font-weight: 400;

		text-transform: uppercase;
		font-family: ${GlobalFontStyle};

		&:hover {
			color: #fff;
		}
	}
`;
export const NavigationBar = () => (
	<Styles>
		<Navbar collapseOnSelect expand="lg" variant="light" bg="light" fixed="top">
			<Container>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mx-auto d-flex align-items-center">
						<Nav.Item>
							<Nav.Link className="active" href="#home">
								Home
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#about">About</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							{" "}
							<Nav.Link href="#flavours">Flavours</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#index.html">
								<img src={logo} className="img-fluid" alt="LOGO" />
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#event">Event</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#gallery">Gallery</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#contact">Contact</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	</Styles>
);
