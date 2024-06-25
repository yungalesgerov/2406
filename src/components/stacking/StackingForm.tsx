import styled from "@emotion/styled";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import logo from "./sol-icon.svg";
import { use, useState } from "react";
import InvestmentForm from "../InvestForm/InvestForm";
const FormContainer = styled("div")({
    width: "466px",
    height: "283px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "0",
    color: "white",
    backgroundColor: "rgb(55, 72, 80)",
    borderRadius: "12px",
    margin: "0 auto",
});

const Wrapper = styled("div")({
    width: "92%",
    height: "92%",
});

const FlexRowDiv = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid black",
});

const WhiteBorderDiv = styled("div")({
    border: "1px solid white",
    display: "border-box",
    padding: "10px 14px",
    height: "89px",
    borderRadius: "8px",
});
const ModalBackground = styled("div")({
    position: "fixed",
    // top: 0,
    // left: 0,
    width: "100%",
    height: "100%",
    border: "1px solid white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const ModalContainer = styled("div")({
    width: "400px",
    maxHeight: "200px",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    textAlign: "center",
    overflow: "auto",
});

const MOdalButton = styled("button")({});

export const StackingForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [amount, setAmount] = useState(0);
    const [interestPerDay, setInterestPerDay] = useState(0);
    const [interestPerMonth, setInterestPerMonth] = useState(0);
    const [interestPerYear, setInterestPerYear] = useState(0);
    const [rate, setRate] = useState(6, 91);
    const handleRoiClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const amountChange = ({ target }: any) => {
        setAmount(target.value);
    };

    return (
        <FormContainer>
            <Wrapper>
                <FlexRowDiv style={{ width: "100%", height: "39px" }}>
                    <div>Balance 0 sol</div>
                    <div>
                        <select>
                            <option value="jpool">Jpool rpc</option>
                            <option value="fable">TestNet</option>
                        </select>
                        <button>connect wallet</button>
                    </div>
                </FlexRowDiv>
                <div
                    style={{
                        width: "100%",
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "8px",
                    }}
                >
                    <FlexRowDiv>
                        <div>value</div>
                        <FlexRowDiv>
                            <button>max</button>
                            <img
                                src={logo}
                                style={{ width: "36px", height: "36px" }}
                                alt=""
                            />
                            <div>SOL</div>
                        </FlexRowDiv>
                    </FlexRowDiv>
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "176px",
                    }}
                >
                    <FlexRowDiv style={{ width: "100%", height: "53px" }}>
                        <div>total staked</div>
                        <div>validator fee</div>
                        <div>please connect wallet</div>
                    </FlexRowDiv>
                    <FlexRowDiv style={{ width: "100%", height: "107px" }}>
                        <WhiteBorderDiv>
                            stake accout & more details
                            <a
                                href="https://staking.kiwi/app/GJ3z7fJnAekf2LmGMe2gYdrxjqUrDQiqzcb7hgQLFc7X?cluster=mainnet-beta"
                                style={{
                                    display: "block",
                                    borderRadius: "8px",
                                    border: "1px solid black",
                                    textDecoration: "none",
                                    color: "white",
                                    boxShadow: "0 0 0 1px black",
                                }}
                            >
                                STAKING.KIWI
                            </a>
                        </WhiteBorderDiv>
                        <WhiteBorderDiv>epoch</WhiteBorderDiv>
                        <WhiteBorderDiv>
                            <div>
                                avarage <br />
                                <button onClick={handleRoiClick}>roi</button>
                            </div>
                            <div>network fee</div>
                        </WhiteBorderDiv>
                    </FlexRowDiv>
                </div>
            </Wrapper>
            {isModalOpen && (
                <ModalBackground onClick={closeModal}>
                    <ModalContainer onClick={(e) => e.stopPropagation()}>
                        <div>
                            <h1>solana apy interest calculator </h1>
                            <button
                                style={{ background: "none", border: "none" }}
                                onClick={closeModal}
                            >
                                &times;
                            </button>
                        </div>
                        <div style={{ color: "black" }}>
                            current APY Interest Rate<h1>≈7.27%</h1>
                            <div>
                                <input onChange={amountChange} type="number" />
                                <div>
                                    <InvestmentForm />
                                </div>
                            </div>
                            <button>calculate</button>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell
                                                size="small"
                                                sx={{ whiteSpace: "nowrap" }}
                                            >
                                                Total return, SOL
                                            </TableCell>
                                            <TableCell>{amount}</TableCell>
                                            <TableCell>
                                                ${amount * 137}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Interest per Day
                                            </TableCell>
                                            <TableCell>
                                                {interestPerDay}
                                            </TableCell>
                                            <TableCell>
                                                ${interestPerDay * 137}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Interest per Month
                                            </TableCell>
                                            <TableCell>
                                                {interestPerMonth}
                                            </TableCell>
                                            <TableCell>
                                                ${interestPerMonth * 137}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Interest per Year
                                            </TableCell>
                                            <TableCell>
                                                {interestPerYear}
                                            </TableCell>
                                            <TableCell>
                                                ${interestPerYear * 137}
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            </TableContainer>
                        </div>
                        <h2>ROI Information</h2>
                        <h2>ROI Information</h2>
                        <p>Details about ROI go here.</p>
                        <h2>ROI Information</h2>
                        <p>Details about ROI go here.</p>
                        <h2>ROI Information</h2>
                        <p>Details about ROI go here.</p>
                        <h2>ROI Information</h2>
                        <p>Details about ROI go here.</p>
                        <h2>ROI Information</h2>
                        <p>Details about ROI go here.</p>
                        <h2>ROI Information</h2>
                        <p>Details about ROI go here.</p>
                        <h2>ROI Information</h2>
                        <p>Details about ROI go here.</p>
                        <h2>ROI Information</h2>
                        <p>Details about ROI go here.</p>
                        <p>Details about ROI go here.</p>
                    </ModalContainer>
                </ModalBackground>
            )}
        </FormContainer>
    );
};
