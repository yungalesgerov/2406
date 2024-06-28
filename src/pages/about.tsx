import Head from "next/head";
import AboutPage from "@/components/About";
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
            <AboutPage />
        </div>
    );
}
