import React from "react";
import styled from "styled-components";
import abel_font from "../assets/fonts/Abel-Regular.ttf";

export const GlobalFontStyle = styled.div`
	@font-face {
		font-family: "abel";
		font-weight: 400;
		src: url(${abel_font}) format("truetype");
	}
`;
