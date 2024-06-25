import styled from "@emotion/styled";

const FormContainer = styled("div")({
    width: "30%",
    minWidth: "300px",
    height: "20vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    margin: "0",
    padding: "0",
    color: "white",
    border: "1px solid white",
});

const Wrapper = styled("div")({
    width: "92%",
    height: "92%",
    border: "1px solid red ",
});
export const StackingForm = () => {
    return (
        <FormContainer>
            <Wrapper>
                <div>
                    <select>
                        <option value="jpool"></option>
                        <option value="fable"></option>
                    </select>
                    <button>connect wallet</button>
                </div>
                <input type="text" />
            </Wrapper>
        </FormContainer>
    );
};
