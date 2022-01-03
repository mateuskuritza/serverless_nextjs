import { Box, Image, Link, Text } from "@chakra-ui/core";
import customTheme from "../styles/theme";
import dayjs from "dayjs";

export default function FavoriteCard({ urlInfos: { url, createdAt } }: { urlInfos: { url: string; createdAt: string } }) {
	return (
		<Box padding={8} marginTop={4} maxW="sm" borderWidth="3px" borderRadius="lg" overflow="hidden" width="100%">
			<Image src={url} alt="last favorite image" />
			<Box p="6">
				<Text>A última URL adicionada em {dayjs(createdAt).format("DD/MM/YYYY")} foi:</Text>
				<Link color={customTheme.colors.blue[200]} wordBreak="break-all" overflow="hidden" isExternal href={url}>
					{url}
				</Link>
			</Box>
		</Box>
	);
}
