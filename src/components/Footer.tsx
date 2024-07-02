import styled from "@emotion/styled";
import vk from "./icon/vk.png";
import dis from "./icon/dis.png";
import tl from "./icon/tl.png";
import Image from "next/image";

const FooterContainer = styled("div")({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: "10vh",
    width: "100%",
    backgroundColor: "rgb(37, 37, 37)",
    boxShadow: "0px 0px 35px 30px rgba(37, 37, 37, 1)",
});
const Wrapper = styled("div")({
    width: "20%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    span: {
        color: "white",
    },
});

const FooterLink = styled("a")({
    textDecoration: "none",
    color: "white",
    font: "small-caps 20px/1 sans-serif",
    marginRight: "10%",
    filter: "grayscale(1)",
    transition: "1s",
    "&: hover": {
        filter: "grayscale(0)",
    },
});
const FooterInfo = styled("a")({
    textDecoration: "none",
    color: "white",
    font: "small-caps 20px/1 sans-serif",
    transition: "0.5s",
    "&: hover": {
        color: "red",
    },
});

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterInfo href={"/about"}>
                <span>Узнать больше о OurCompany</span>
            </FooterInfo>
            <Wrapper>
                <FooterLink href={"/about"}>
                    <Image
                        style={{ width: "60%", height: "60%" }}
                        src={vk}
                        alt="vk"
                    ></Image>
                </FooterLink>

                <FooterLink href={"/services"}>
                    <Image
                        style={{ width: "60%", height: "60%" }}
                        src={dis}
                        alt="dis"
                    ></Image>
                </FooterLink>

                <FooterLink href={"/contact"}>
                    <Image
                        style={{ width: "60%", height: "60%" }}
                        src={tl}
                        alt="tg"
                    ></Image>
                </FooterLink>
            </Wrapper>
        </FooterContainer>
    );
};
