import Head from "next/head";

export default function About() {
    return (
        <div>
            <Head>
                <title>О нас - My Company</title>
                <meta
                    name="description"
                    content="Информация о команде и миссии компании"
                />
            </Head>
            <main>
                <h1>О нас</h1>
                <p>
                    Наша команда состоит из опытных профессионалов, готовых
                    помочь вам.
                </p>
                <p>
                    Наша миссия - предоставить высококачественные стейкинг
                    услуги.
                </p>
            </main>
        </div>
    );
}
