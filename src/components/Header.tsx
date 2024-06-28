import styled from "@emotion/styled";
// import Link from "next/link";

const HeaderContainer = styled("div")({
    display: "flex",
    marginLeft: "20%",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: "10vh",
    width: "30%",
});

const HeaderLink = styled("a")({
    textDecoration: "none",
    color: "white",
    font: "small-caps 20px/1 sans-serif",
    marginRight: "10%",
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
