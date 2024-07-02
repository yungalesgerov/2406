import styled from "@emotion/styled";
// import Link from "next/link";

const HeaderContainer = styled("div")({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    minHeight: "10vh",
    width: "100%",
    backgroundColor: "rgb(37, 37, 37)",
    boxShadow: "0px 30px 35px 30px rgba(37, 37, 37, 1)",
});

const HeaderLink = styled("a")({
    textDecoration: "none",
    color: "white",
    font: "small-caps 20px/1 sans-serif",
    transition: "1s",
    minWidth: "80px",
    "&: hover": {
        color: "red",
    },
});

export const Header = () => {
    return (
        <HeaderContainer>
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
        </HeaderContainer>
    );
};
