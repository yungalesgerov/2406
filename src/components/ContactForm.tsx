import styled from "@emotion/styled";
import { TextField, TextareaAutosize } from "@mui/material";
import { FC } from "react";
const FormContainer = styled("form")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    gap: "10px",
    margin: "0",
    padding: "0",
    color: "white",
});

export const ContactForm: FC = () => {
    return (
        <FormContainer>
            <h1>Contact with us</h1>
            <label>
                <TextField
                    type="text"
                    name="name"
                    placeholder="Name"
                    variant="outlined"
                />
            </label>
            <label>
                <TextField
                    type="email"
                    name="email"
                    placeholder="Email"
                    variant="outlined"
                />
            </label>
            <label>
                <TextareaAutosize name="message" placeholder="Message" />
            </label>
            <button type="submit">send</button>
        </FormContainer>
    );
};
