import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import * as React from "react";
import styled from "@emotion/styled";
import { AppProps } from "next/app";
import "./index.css";
const AppContent = styled("div")({});
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
