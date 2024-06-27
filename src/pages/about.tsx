import Head from "next/head";
import { styled } from "@mui/material";

const Main = styled("div")({
    minHeight: "80vh",
    backgroundColor: "rgb(37, 37, 37)",
    boxShadow: "0px 0px 33px 32px rgba(37, 37, 37, 1)",
});

const ZagMain = styled("div")({
    font: "small-caps 50px/1 sans-serif",
    marginLeft: "15%",
    marginTop: "3%",
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
    marginTop: "1%",
    textIndent: "20px",
    textAlign: "justify",
    marginLeft: "10%",
    marginRight: "15%",
    marginBottom: "10%",
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
                <ZagMain>
                    О нас
                    <PodZagMain>
                        <MainText>
                            OurCompany – это ведущая компания в области
                            индустрия или сфера деятельности, предлагающая
                            инновационные решения для ваша целевая аудитория. Мы
                            гордимся тем, что предоставляем высококачественные
                            продукты и услуги, соответствующие самым высоким
                            стандартам индустрии.
                        </MainText>
                    </PodZagMain>
                </ZagMain>

                <ZagMain>
                    Наши ценности
                    <PodZagMain>
                        Качество
                        <MainText>
                            Мы стремимся к превосходству в каждом аспекте нашей
                            работы, гарантируя, что наши клиенты получают только
                            лучшие продукты и услуги.
                        </MainText>
                    </PodZagMain>
                    <PodZagMain>
                        Инновации
                        <MainText>
                            Мы постоянно ищем новые способы улучшить наши
                            предложения и внедряем передовые технологии, чтобы
                            оставаться на шаг впереди.
                        </MainText>
                    </PodZagMain>
                    <PodZagMain>
                        Надежность
                        <MainText>
                            Наши клиенты могут рассчитывать на нас в любой
                            ситуации. Мы поддерживаем тесные и долгосрочные
                            отношения, основанные на доверии и уважении.
                        </MainText>
                    </PodZagMain>
                    <PodZagMain>
                        Устойчивое развитие
                        <MainText>
                            Мы заботимся о будущем нашей планеты и стремимся к
                            устойчивому развитию, минимизируя наш экологический
                            след и поддерживая экологические инициативы.
                        </MainText>
                    </PodZagMain>
                </ZagMain>
            </Main>
        </div>
    );
}
