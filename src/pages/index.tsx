import { StackingForm } from "@/components/stacking/StackingForm";

import Head from "next/head";
export default function Home() {
    return (
        <div>
            <Head>
                <title>Главная - My Company</title>
                <meta name="description" content="Описание услуг компании" />
            </Head>
            <main>
                <h1>Добро пожаловать в My Company</h1>
                <p>Мы предлагаем лучшие стейкинг услуги на рынке.</p>
                <StackingForm />
            </main>
        </div>
    );
}
