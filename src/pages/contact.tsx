import Head from "next/head";
import { ContactForm } from "../components/ContactForm";
import { styled } from "@mui/material";

const Main = styled("div")({
    minHeight: "80vh",
});
export default function Contact() {
    return (
        <div>
            <Head>
                <title>Контакты - My Company</title>
                <meta name="description" content="Форма для обратной связи" />
            </Head>
            <Main>
                <h1>Контакты</h1>
                <ContactForm />
            </Main>
        </div>
    );
}
