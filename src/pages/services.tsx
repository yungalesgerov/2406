import Head from "next/head";

export default function Services() {
    return (
        <div>
            <Head>
                <title>Услуги - My Company</title>
                <meta
                    name="description"
                    content="Детальное описание предлагаемых стейкинг услуг"
                />
            </Head>
            <main>
                <h1>Услуги</h1>
                <p>
                    Мы предлагаем различные стейкинг услуги для удовлетворения
                    ваших нужд.
                </p>
                <ul>
                    <li>Услуга 1: Описание услуги 1</li>
                    <li>Услуга 2: Описание услуги 2</li>
                    <li>Услуга 3: Описание услуги 3</li>
                </ul>
            </main>
        </div>
    );
}
