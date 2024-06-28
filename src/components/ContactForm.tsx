import styled from "@emotion/styled";
import { TextField, TextareaAutosize, Button } from "@mui/material";
import { FC } from "react";
const FormContainer = styled("form")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "60vw",
    minHeight: "40vh",
    gap: "24px",
    margin: "0 auto",
    color: "white",
    border: "1px solid white",
    borderRadius: "28px",
    padding: "20px 0",
});
const Label = styled("label")({
    width: "80%",
    color: "white",
    // border: "1px solid white",
});
const ContactButton = styled(Button)({
    color: "white",
    width: "80%",
    borderRadius: "28px",
    border: "1px solid white",
});
const TextArea = styled(TextareaAutosize)({
    width: "92.6%",
    minHeight: "40px",
    backgroundColor: "inherit",
    color: "white",
    margin: "0",
    padding: "20px",
    border: "1px solid white",
});
const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiFilledInput-root": {
        color: "#ffffff",
        border: "1px solid #ffffff",
        "&::placeholder": {
            color: "#ffffff",
        },
    },
    "& .MuiInputLabel-root": {
        color: "#ffffff",
    },
}));

export const ContactForm: FC = () => {
    return (
        <FormContainer>
            <Label>
                <StyledTextField
                    fullWidth
                    type="text"
                    label="Name"
                    placeholder="Name"
                    variant="filled"
                />
            </Label>
            <Label>
                <StyledTextField
                    fullWidth
                    label="Email"
                    type="email"
                    placeholder="Email"
                    variant="filled"
                />
            </Label>
            <Label>
                <TextArea placeholder="Message" />
            </Label>
            <ContactButton type="submit">send</ContactButton>
        </FormContainer>
    );
};
