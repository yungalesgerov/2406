import Head from "next/head";
import { styled } from "@mui/material";

const Main = styled("div")({
    minHeight: "80vh",
    backgroundColor: "rgb(37, 37, 37)",
    boxShadow: "0px 30px 35px 80px rgba(37, 37, 37, 1)",
});

const ZagMain = styled("div")({
    font: "small-caps 50px/1 sans-serif",
    marginLeft: "15%",
    marginTop: "3%",
    marginBottom: "10%",
});
const PodZagMain = styled("div")({
    font: "small-caps 35px/1 sans-serif",
    marginTop: "3%",
    marginLeft: "5%",
    maxWidth: "700px",
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlign: "justify",
    marginRight: "10%",
    textIndent: "20px",
    backgroundColor: "rgb(25, 25, 25)",
    borderRadius: "40px",
    boxShadow: "15px 10px 20px 1px rgba(231, 0, 0, 1)",
});
const MainText = styled("div")({
    font: "small-caps 25px/1 sans-serif",
    marginTop: "2%",
    textIndent: "20px",
    textAlign: "justify",
    marginLeft: "10%",
    marginRight: "15%",
    marginBottom: "10%",
});
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
            <Main>
                <ZagMain>
                    Наши Услуги
                    <PodZagMain>
                        1.Стейкинг SOL
                        <MainText>
                            Мы предлагаем услуги стейкинга криптовалюты Solana
                            (SOL), которые позволяют вам получать пассивный
                            доход. Наши безопасные и эффективные решения
                            обеспечат максимальную доходность при минимальных
                            рисках.
                        </MainText>
                    </PodZagMain>
                    <PodZagMain>
                        2.Управление Портфелем
                        <MainText>
                            Наши эксперты помогут вам разработать и управлять
                            портфелем криптовалют, чтобы обеспечить максимальную
                            доходность. Мы предлагаем персонализированные
                            стратегии, учитывающие ваши цели и уровень риска.
                        </MainText>
                    </PodZagMain>
                    <PodZagMain>
                        3.Аналитика и Отчеты
                        <MainText>
                            Мы предоставляем подробные аналитические отчеты по
                            вашему стейкингу и другим криптовалютным активам.
                            Наши отчеты помогут вам принимать обоснованные
                            решения и следить за эффективностью ваших
                            инвестиций.
                        </MainText>
                    </PodZagMain>
                    <PodZagMain>
                        4.Обучение и Консультации
                        <MainText>
                            Мы предлагаем обучающие программы и консультации,
                            которые помогут вам лучше понять процессы стейкинга
                            и особенности рынка криптовалют. Наши эксперты
                            ответят на все ваши вопросы и поделятся своими
                            знаниями.
                        </MainText>
                    </PodZagMain>
                    <PodZagMain>
                        5.Техническая Поддержка
                        <MainText>
                            Наша команда техподдержки готова оказать помощь по
                            любым вопросам, связанным с вашим стейкингом и
                            управлением криптовалютными активами. Мы
                            обеспечиваем быстрое и профессиональное решение
                            любых проблем.
                        </MainText>
                    </PodZagMain>
                    <PodZagMain>
                        6.Безопасность Активов
                        <MainText>
                            Мы используем передовые технологии и лучшие практики
                            для обеспечения безопасности ваших криптовалютных
                            активов. Наши решения гарантируют защиту ваших
                            инвестиций от мошенничества и кибератак.
                        </MainText>
                    </PodZagMain>
                </ZagMain>
            </Main>
        </div>
    );
}
