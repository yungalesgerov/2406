import styled from "@emotion/styled";
import Link from "@mui/material/Link";
import { FC } from "react";
const FooterContainer = styled("div")({
    display: "flex",
    // justifyContent: "space-around",
    alignItems: "center",
    height: "80px",
    width: "100%",
    border: "1px solid white",
});
const Wrapper = styled("div")({
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    span: {
        color: "white",
    },
});

export const Footer: FC = () => {
    return (
        <FooterContainer>
            <Wrapper>
                <Link href={"/about"}>
                    <span>vk</span>
                </Link>

                <Link href={"/services"}>
                    <span>dis</span>
                </Link>

                <Link href={"/contact"}>
                    <span>tg</span>
                </Link>
            </Wrapper>
        </FooterContainer>
    );
};
