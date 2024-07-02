import Head from "next/head";
import { ContactForm } from "../components/ContactForm";
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
    minHeight: "150px",
});
export default function Contact() {
    return (
        <div>
            <Head>
                <title>Контакты - My Company</title>
                <meta name="description" content="Форма для обратной связи" />
            </Head>
            <Main>
                <ZagMain>
                    <h1>Контакты</h1>
                    <ContactForm />
                </ZagMain>
            </Main>
        </div>
    );
}
