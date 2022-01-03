import ThemeContainer from "../contexts/ThemeContainer";

function MyApp({ Component, pageProps }: { Component: React.FunctionComponent; pageProps: any }) {
	return (
		<ThemeContainer>
			<Component {...pageProps} />
		</ThemeContainer>
	);
}

export default MyApp;
