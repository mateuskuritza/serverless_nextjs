import React from "react";
import { Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/core";
import customTheme from "../styles/theme";

const Input: React.FC<ChakraInputProps> = (props) => {
	return (
		<ChakraInput
			height={customTheme.space[48]}
			backgroundColor={customTheme.colors.gray[800]}
			focusBorderColor={customTheme.colors.purple[500]}
			borderRadius={customTheme.radii.sm}
			{...props}
		/>
	);
};

export default Input;
