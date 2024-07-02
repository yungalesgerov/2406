import { StackingForm } from "@/components/stacking/StackingForm";
import { styled } from "@mui/material";
import Head from "next/head";
import { useMediaQuery, useTheme } from "@mui/material";
// import WalletContext from "./components/stacking/WalletContext";
// import Validator from "./components/stacking/Validator";

const Main = styled("div")<any>(({ isMobile }) => ({
    width: "100%",
    minHeight: "80vh",
    // backgroundColor: "rgb(37, 37, 37)",
    // boxShadow: "0px 30px 35px 80px rgba(37, 37, 37, 1)",
    display: "flex",
    alignItems: "center",
    flexDirection: isMobile ? "column" : "row",
}));
const ZagMain = styled("div")<any>({
    minWidth: "500px",
    font: "small-caps 30px/1 sans-serif",
    marginTop: "3%",
    marginBottom: "10%",
    flex: "1",
});
const PodZagMain = styled("div")({
    display: "border-box",
    font: "small-caps 25px/1 sans-serif",
    maxWidth: "700px",
    minWidth: "500px",
    padding: "20px",
    paddingTop: "40px",
    textAlign: "justify",
    textIndent: "20px",
    backgroundColor: "rgb(37, 37, 37)",
    borderRadius: "40px",
    boxShadow: "5px 5px 10px 1px rgba(0, 0, 0, 1)",
    margin: "auto",
});
const MainText = styled("div")({
    font: "small-caps 20px/1 sans-serif",
    marginTop: "2%",
    textIndent: "20px",
    textAlign: "justify",
    marginLeft: "2.5%",
    marginRight: "15%",
    marginBottom: "5%",
});

const StackBox = styled("div")({
    flex: "1",
});
export default function Home() {
    const isMobile = useMediaQuery("(max-width:1000px)");
    return (
        <div>
            <Head>
                <title>Главная - My Company</title>
                <meta name="description" content="Описание услуг компании" />
            </Head>
            <Main isMobile={isMobile}>
                <ZagMain>
                    <PodZagMain>
                        Добро пожаловать в My Company
                        <p>Наши Услуги</p>
                        <MainText>1. Стейкинг SOL</MainText>
                        <MainText>2. Управление Портфелем</MainText>
                        <MainText>3. Аналитика и Отчеты</MainText>
                        <MainText>4. Обучение и Консультации</MainText>
                        <MainText>5. Техническая Поддержка</MainText>
                        <MainText>6. Безопасность Активов</MainText>
                    </PodZagMain>
                </ZagMain>
                <StackBox>
                    <StackingForm />
                </StackBox>
            </Main>
        </div>
    );
}
