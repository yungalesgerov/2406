import styled from "@emotion/styled";
import { FC } from "react";
import { useTranslation } from "next-i18next";
const HeaderContainer = styled("div")({
    width: "100%",
    height: "10vh",
});
const Wrapper = styled("div")({
    width: "90%",
    height: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
});
const HeaderLink = styled("a")({
    textDecoration: "none",
    color: "white",
    font: "small-caps 20px/1 sans-serif",
    transition: "1s",
    "&:hover": {
        color: "white",
    },
});

export const Header: FC = () => {
    return (
        <HeaderContainer>
            <Wrapper>
                <HeaderLink href={"/"}>
                    <span>Главная</span>
                </HeaderLink>

                <HeaderLink href={"/about"}>
                    <span>О нас</span>
                </HeaderLink>

                <HeaderLink href={"/services"}>
                    <span>Услуги</span>
                </HeaderLink>

                <HeaderLink href={"/contact"}>
                    <span>Обратная связь</span>
                </HeaderLink>
            </Wrapper>
        </HeaderContainer>
    );
};
