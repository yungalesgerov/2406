import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import * as React from "react";
import styled from "@emotion/styled";
import { AppProps } from "next/app";
const AppContent = styled("div")({
    width: "100%",
    height: "100%",
    margin: "0",
    padding: "0",
    color: "white",
    backgroundImage: "url(/bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppContent>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </AppContent>
    );
}

export default MyApp;
