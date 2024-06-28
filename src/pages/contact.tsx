import Head from "next/head";
import { ContactForm } from "../components/ContactForm";
import { styled } from "@mui/material";
import { useTranslation } from "next-i18next";

const Main = styled("div")({
    minHeight: "80vh",
});

export default function Contact() {
    const { t } = useTranslation();
    return (
        <div>
            <Head>
                <title>Контакты - My Company</title>
                <meta name="description" content="Форма для обратной связи" />
            </Head>
            <Main>
                <h1>{t("Свяжитесь с нами")}</h1>
                <div>{t("contact.description")}</div>
                <ContactForm />
            </Main>
        </div>
    );
}
