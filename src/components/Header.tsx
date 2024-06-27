import styled from "@emotion/styled";
import Link from "next/link";
import React, { FC } from "react";
const HeaderContainer = styled("div")({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "80px",
    width: "100%",
    border: "1px solid white",
});

export const Header: FC = () => {
    return (
        <HeaderContainer>
            <Link href={"/"}>
                <span>Header</span>
            </Link>

            <Link href={"/about"}>
                <span>About</span>
            </Link>

            <Link href={"/services"}>
                <span>Services</span>
            </Link>

            <Link href={"/contact"}>
                <span>Contact</span>
            </Link>
        </HeaderContainer>
    );
};
