import Head from "next/head";
import { styled } from "@mui/material";

const Main = styled("div")({
    minHeight: "80vh",
    // backgroundColor: "rgb(37, 37, 37)",
    // boxShadow: "0px 30px 35px 80px rgba(37, 37, 37, 1)",
});

const ZagMain = styled("div")<any>({
    font: "small-caps 30px/1 sans-serif",
    margin: "auto",
    marginTop: "5%",
    textAlign: "center",
    backgroundColor: "rgb(37, 37, 37)",
    paddingTop: "20px",
    paddingBottom: "20px",
    display: "border-box",
    maxWidth: "700px",
    minWidth: "500px",
    padding: "20px",
    textIndent: "20px",
    borderRadius: "40px",
    boxShadow: "5px 5px 10px 1px rgba(0, 0, 0, 1)",
    marginBottom: "2%",
    minHeight: "150px",
});
const PodZagMain = styled("div")({
    display: "border-box",
    font: "small-caps 25px/1 sans-serif",
    textAlign: "justify",
    textIndent: "20px",
    margin: "auto",
    marginBottom: "1%",
    marginTop: "1%",
});
const MainText = styled("div")({
    font: "small-caps 20px/1 sans-serif",
    marginTop: "2%",
    textIndent: "20px",
    textAlign: "justify",
    marginLeft: "10%",
    marginRight: "15%",
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
                    1.Стейкинг SOL
                    <PodZagMain>
                        <MainText>
                            Мы предлагаем услуги стейкинга криптовалюты Solana
                            (SOL), которые позволяют вам получать пассивный
                            доход. Наши безопасные и эффективные решения
                            обеспечат максимальную доходность при минимальных
                            рисках.
                        </MainText>
                    </PodZagMain>
                </ZagMain>
                <ZagMain>
                    2.Управление Портфелем
                    <PodZagMain>
                        <MainText>
                            Наши эксперты помогут вам разработать и управлять
                            портфелем криптовалют, чтобы обеспечить максимальную
                            доходность. Мы предлагаем персонализированные
                            стратегии, учитывающие ваши цели и уровень риска.
                        </MainText>
                    </PodZagMain>
                </ZagMain>
                <ZagMain>
                    3.Аналитика и Отчеты
                    <PodZagMain>
                        <MainText>
                            Мы предоставляем подробные аналитические отчеты по
                            вашему стейкингу и другим криптовалютным активам.
                            Наши отчеты помогут вам принимать обоснованные
                            решения и следить за эффективностью ваших
                            инвестиций.
                        </MainText>
                    </PodZagMain>
                </ZagMain>
                <ZagMain>
                    4.Обучение и Консультации
                    <PodZagMain>
                        <MainText>
                            Мы предлагаем обучающие программы и консультации,
                            которые помогут вам лучше понять процессы стейкинга
                            и особенности рынка криптовалют. Наши эксперты
                            ответят на все ваши вопросы и поделятся своими
                            знаниями.
                        </MainText>
                    </PodZagMain>
                </ZagMain>
                <ZagMain>
                    5.Техническая Поддержка
                    <PodZagMain>
                        <MainText>
                            Наша команда техподдержки готова оказать помощь по
                            любым вопросам, связанным с вашим стейкингом и
                            управлением криптовалютными активами. Мы
                            обеспечиваем быстрое и профессиональное решение
                            любых проблем.
                        </MainText>
                    </PodZagMain>
                </ZagMain>
                <ZagMain>
                    6.Безопасность Активов
                    <PodZagMain>
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
