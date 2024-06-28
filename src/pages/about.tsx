import Head from "next/head";
import { styled } from "@mui/material";

const Main = styled("div")({
    minHeight: "80vh",
    backgroundColor: "rgb(37, 37, 37)",
    boxShadow: "0px 30px 35px 80px rgba(37, 37, 37, 1)",
});

const ZagMain = styled("div")<any>({
    minWidth: "500px",
    font: "small-caps 30px/1 sans-serif",
    margin: "auto",
    marginBottom: "10%",
    marginTop: "3%",
});
const PodZagMain = styled("div")({
    display: "border-box",
    font: "small-caps 25px/1 sans-serif",
    marginTop: "3%",
    maxWidth: "700px",
    minWidth: "500px",
    padding: "20px",
    textAlign: "justify",
    textIndent: "20px",
    backgroundColor: "rgb(25, 25, 25)",
    borderRadius: "40px",
    boxShadow: "15px 10px 20px 1px rgba(255, 255, 255, 1)",
    margin: "auto",
    marginBottom: "1%",
    minHeight: "100px",
});
const MainText = styled("div")({
    font: "small-caps 20px/1 sans-serif",
    marginTop: "2%",
    textIndent: "20px",
    textAlign: "justify",
    marginLeft: "10%",
    marginRight: "15%",
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
                        Добро пожаловать в My Company!
                        <MainText>
                            Мы являемся ведущими специалистами в области
                            стейкинга криптовалюты Solana (SOL). Наша цель —
                            помочь вам максимально эффективно использовать ваши
                            криптовалютные активы, обеспечивая стабильный и
                            высокий доход от стейкинга.
                        </MainText>
                    </PodZagMain>
                </ZagMain>
                <ZagMain>
                    Кто мы
                    <PodZagMain>
                        <MainText>
                            My Company была основана группой экспертов в области
                            блокчейн-технологий и финансов, объединённых общей
                            целью — сделать стейкинг доступным и выгодным для
                            всех. Мы верим в потенциал блокчейн-технологий и
                            стремимся внедрять их в повседневную жизнь,
                            обеспечивая прозрачные и надежные решения для наших
                            клиентов.
                        </MainText>
                    </PodZagMain>
                </ZagMain>
                <ZagMain>
                    Наши Принципы
                    <PodZagMain>
                        <MainText>
                            Безопасность: Мы применяем самые современные
                            технологии для защиты ваших активов, гарантируя их
                            сохранность и безопасность.
                        </MainText>
                    </PodZagMain>
                    <PodZagMain>
                        <MainText>
                            Прозрачность: Вся информация о наших услугах и
                            комиссиях всегда доступна и понятна, чтобы вы могли
                            принимать обоснованные решения.
                        </MainText>
                    </PodZagMain>
                    <PodZagMain>
                        <MainText>
                            Инновации: Мы постоянно совершенствуем наши
                            технологии и сервисы, предлагая лучшие решения на
                            рынке.
                        </MainText>
                    </PodZagMain>
                </ZagMain>
                <ZagMain>
                    Команда Профессионалов
                    <PodZagMain>
                        <MainText>
                            Наша команда состоит из высококвалифицированных
                            специалистов с многолетним опытом в области
                            блокчейна и финансов. Мы гордимся своим
                            профессионализмом и стремимся к постоянному обучению
                            и развитию, чтобы предлагать нашим клиентам самые
                            эффективные решения.
                        </MainText>
                    </PodZagMain>
                </ZagMain>
                <ZagMain>
                    Почему стоит выбрать нас
                    <PodZagMain>
                        <MainText>
                            Максимальная доходность: Мы предлагаем решения,
                            которые обеспечивают максимальную прибыль от
                            стейкинга SOL.
                        </MainText>
                    </PodZagMain>
                    <PodZagMain>
                        <MainText>
                            Надёжность: Мы используем передовые технологии и
                            методы для обеспечения безопасности ваших
                            инвестиций.
                        </MainText>
                    </PodZagMain>
                    <PodZagMain>
                        <MainText>
                            Поддержка клиентов: Наша служба поддержки всегда
                            готова помочь вам с любыми вопросами, связанными с
                            нашими услугами.
                        </MainText>
                    </PodZagMain>
                </ZagMain>
            </Main>
        </div>
    );
}
