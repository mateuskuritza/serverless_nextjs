import React, { useState, FormEvent, useEffect, useCallback } from "react";
import { Flex, Image, Button, Text } from "@chakra-ui/core";
import Input from "../components/Input";
import axios from "axios";
import customTheme from "../styles/theme";
import FavoriteCard from "../components/Card";

export default function Home() {
	const [newUrl, setNewUrl] = useState("");
	const [urlInfos, setUrlInfos] = useState({
		url: "",
		createdAt: "",
	});

	const handleFavoriteImageUrl = useCallback(
		(event: FormEvent) => {
			event.preventDefault();
			axios.post("/api/saveUrl", { newUrl }).then(() => getFavoriteImage());
		},
		[newUrl]
	);

	function handleUrlValue(event: FormEvent) {
		// @ts-ignore:next-line
		const url = event.target.value;
		setNewUrl(url);
	}

	const getFavoriteImage = useCallback(() => {
		axios.get("/api/getUrl").then((response) => setUrlInfos({ ...response.data }));
	}, []);

	useEffect(() => {
		getFavoriteImage();
	}, [getFavoriteImage]);

	return (
		<Flex as="main" height="100vh" justifyContent="space-evenly" alignItems="center" flexDirection={{ sm: "column", md: "row" }}>
			<Flex
				as="form"
				onSubmit={handleFavoriteImageUrl}
				backgroundColor="gray.700"
				borderRadius="md"
				flexDir="column"
				alignItems="stretch"
				padding={8}
				marginTop={4}
				width="100%"
				maxW="400px"
			>
				<Image marginBottom={8} src="/869923.gif" alt="lo-fi gif" />

				<Text textAlign="center" fontSize="sm" color={customTheme.colors.pink[200]} marginBottom={2}>
					Salve a sua URL de imagem favorita! :)
				</Text>

				<Input
					placeholder="Sua melhor URL"
					color={customTheme.colors.pink[100]}
					maxH="60px"
					marginTop={2}
					value={newUrl}
					_focus={{ borderColor: customTheme.colors.pink[300] }}
					onChange={handleUrlValue}
				/>

				<Button
					type="submit"
					backgroundColor={customTheme.colors.pink[600]}
					height="50px"
					borderRadius="sm"
					marginTop={6}
					_hover={{ backgroundColor: customTheme.colors.pink[700] }}
				>
					SALVAR
				</Button>
			</Flex>
			<FavoriteCard urlInfos={urlInfos} />
		</Flex>
	);
}
