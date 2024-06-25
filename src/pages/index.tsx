import { StackingForm } from "@/components/stacking/StackingForm";
import WalletContext from "@/components/stacking/WalletContext";
import Validator from "@/components/stacking/Validator";
import Head from "next/head";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import WalletContext from "./components/stacking/WalletContext";
// import Validator from "./components/stacking/Validator";
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
                <WalletContext>
                    <Validator />
                    <WalletMultiButton />
                </WalletContext>
                <StackingForm />
            </main>
        </div>
    );
}
