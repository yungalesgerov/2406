import styled from "@emotion/styled";
import Link from "next/link";

const HeaderContainer = styled("div")({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "120px",
    width: "100%",
});

export const Header = () => {
    return (
        <HeaderContainer>
            <Link href={"/"}>
                <h1>Header</h1>
            </Link>

            <Link href={"/about"}>
                <h1>About</h1>
            </Link>

            <Link href={"/services"}>
                <h1>Services</h1>
            </Link>

            <Link href={"/contact"}>
                <h1>Contact</h1>
            </Link>
        </HeaderContainer>
    );
};
