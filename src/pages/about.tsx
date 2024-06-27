import Head from "next/head";
import { styled } from "@mui/material";

const Main = styled("div")({
    minHeight: "80vh",
});

const ZagMain = styled("div")({
    font: "small-caps 50px/1 sans-serif",
    marginLeft: "15%",
});
const PodZagMain = styled("div")({
    font: "small-caps 35px/1 sans-serif",
    marginTop: "5%",
    marginLeft: "20%",
    maxWidth: "700px",
    textAlign: "justify",
    marginRight: "10%",
    color: "rgb(211, 211, 211)",
    textIndent: "20px",
});
const MainText = styled("div")({
    font: "small-caps 25px/1 sans-serif",
    maxWidth: "500px",
    marginTop: "1%",
    textIndent: "20px",
    textAlign: "justify",
    marginLeft: "25%",
    marginRight: "15%",
    marginBottom: "10%",
    color: "rgb(168, 168, 168)",
});
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
            <Main>
                <ZagMain>О нас</ZagMain>
                <PodZagMain>
                    OurCompany – это ведущая компания в области индустрия или
                    сфера деятельности, предлагающая инновационные решения для
                    ваша целевая аудитория. Мы гордимся тем, что предоставляем
                    высококачественные продукты и услуги, соответствующие самым
                    высоким стандартам индустрии.
                </PodZagMain>
                <ZagMain>Наши ценности</ZagMain>
                <PodZagMain>Качество</PodZagMain>
                <MainText>
                    Мы стремимся к превосходству в каждом аспекте нашей работы,
                    гарантируя, что наши клиенты получают только лучшие продукты
                    и услуги.
                </MainText>
                <PodZagMain>Инновации</PodZagMain>
                <MainText>
                    Мы постоянно ищем новые способы улучшить наши предложения и
                    внедряем передовые технологии, чтобы оставаться на шаг
                    впереди.
                </MainText>
                <PodZagMain>Надежность</PodZagMain>
                <MainText>
                    Наши клиенты могут рассчитывать на нас в любой ситуации. Мы
                    поддерживаем тесные и долгосрочные отношения, основанные на
                    доверии и уважении.
                </MainText>
                <PodZagMain>Устойчивое развитие</PodZagMain>
                <MainText>
                    Мы заботимся о будущем нашей планеты и стремимся к
                    устойчивому развитию, минимизируя наш экологический след и
                    поддерживая экологические инициативы.
                </MainText>
            </Main>
        </div>
    );
}
