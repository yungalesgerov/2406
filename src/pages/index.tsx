import { StackingForm } from "@/components/stacking/StackingForm";
import { styled } from "@mui/material";
import Head from "next/head";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import "../../i18n";
const Main = styled("div")({
    minHeight: "80vh",
});

export default function Home() {
    const { t, i18n } = useTranslation();
    useEffect(() => {
        if (typeof window !== "undefined") {
            const lng = navigator.language;
            i18n.changeLanguage(lng);
        }
    }, [i18n]);
    return (
        <div>
            <Head>
                <title>Главная - My Company</title>
                <meta name="description" content="Описание услуг компании" />
            </Head>
            <Main>
                <h1>Добро пожаловать в My Company</h1>
                <h2>
                    {t("language_is", {
                        lng:
                            typeof window !== "undefined"
                                ? navigator.language
                                : "unknown",
                    })}
                </h2>
                <span>{t("Welcome_to_React")}</span>

                <p>Мы предлагаем лучшие стейкинг услуги на рынке.</p>
                <StackingForm />
            </Main>
        </div>
    );
}
