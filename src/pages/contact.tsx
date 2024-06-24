import Head from "next/head";
import { ContactForm } from "../components/ContactForm";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Контакты - My Company</title>
                <meta name="description" content="Форма для обратной связи" />
            </Head>
            <main>
                <h1>Контакты</h1>
                <ContactForm />
            </main>
        </div>
    );
}
