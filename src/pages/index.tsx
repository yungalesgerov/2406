import { StackingForm } from "@/components/stacking/StackingForm";
import { styled } from "@mui/material";
import Head from "next/head";
// import WalletContext from "./components/stacking/WalletContext";
// import Validator from "./components/stacking/Validator";

const Main = styled("div")({
    minHeight: "80vh",
});

export default function Home() {
    return (
        <div>
            <Head>
                <title>Главная - My Company</title>
                <meta name="description" content="Описание услуг компании" />
            </Head>
            <Main>
                <h1>Добро пожаловать в My Company</h1>
                <p>Мы предлагаем лучшие стейкинг услуги на рынке.</p>
                <StackingForm />
            </Main>
        </div>
    );
}
