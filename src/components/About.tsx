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

const AboutPage = () => {
    return (
        <Main>
            <ZagMain>ourCompany.select_period</ZagMain>
            <PodZagMain>select_period</PodZagMain>
            <ZagMain>Наши ценности</ZagMain>
            <PodZagMain>Качество</PodZagMain>
            <MainText>ourCompany.description2</MainText>
            <PodZagMain>Инновации</PodZagMain>
            <MainText>ourCompany.description3</MainText>
            <PodZagMain>Надежность</PodZagMain>
            <MainText>ourCompany.description4</MainText>
            <PodZagMain>Устойчивое развитие</PodZagMain>
            <MainText>ourCompany.description5</MainText>
        </Main>
    );
};

export default AboutPage;
