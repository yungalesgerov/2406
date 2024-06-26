import styled from "@emotion/styled";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
} from "@mui/material";
import logo from "./solana24.svg";
import calc from "./calc.svg";
import graph from "./graph.svg";
import { useState } from "react";
import InvestmentForm from "../InvestForm/InvestForm";
import Image from "next/image";
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
    alignItems: "center",
});

const WhiteBorderDiv = styled("div")({
    border: "1px solid white",
    display: "border-box",
    padding: "10px 14px",
    height: "69px",
    borderRadius: "8px",
    textAlign: "center",
});
const ModalBackground = styled("div")({
    position: "fixed",
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
    borderRadius: "8px",
    textAlign: "center",
    overflow: "auto",
    backgroundColor: "#455a64",
    color: "white",
});

const ValidatorButton = styled("button")(({ color }) => ({
    fontSize: "11px",
    border: "none",
    padding: "5px 16px 3px",
    minWidth: "0px",
    minHeight: "0px",
    height: "27px",
    borderRadius: "28px",
    textAlign: "center",
    color: color ? "#455A64" : "white",
    backgroundColor: color ? color : "#455A64",
    textTransform: "uppercase",
    cursor: "pointer",
    lineHeight: "1.715em",
    boxShadow: "0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f",
}));
const Select = styled("select")({
    height: "27px",
    borderRadius: "28px",
    textTransform: "uppercase",
    textAlign: "center",
    cursor: "pointer",
    padding: "5px 16px 3px",
    boxShadow: "0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f",
});
const LinkItem = styled("a")({
    color: "white",
    textDecoration: "none",
});
const Title = styled("h1")({
    margin: "0",
    padding: "0",
    width: "100%",
    minHeight: "20",
});
export const StackingForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [amount, setAmount] = useState(0);
    const [interestPerDay, setInterestPerDay] = useState(0);
    const [interestPerMonth, setInterestPerMonth] = useState(0);
    const [interestPerYear, setInterestPerYear] = useState(0);
    const [total, setTotal] = useState(0);
    const [rate, setRate] = useState("6.91");
    const [selectedPeriod, setSelectedPeriod] = useState("year");
    const [inputValue, setInputValue] = useState(1);
    const handleRoiClick = () => {
        setIsModalOpen(true);
    };
    const handleCalculate = () => {
        const rateDecimal = parseFloat(rate) / 100;
        const period = selectedPeriod;
        let dailyInterest, monthlyInterest, yearlyInterest;

        switch (period) {
            case "epoch":
                dailyInterest = (amount * rateDecimal) / 365;
                monthlyInterest = dailyInterest * 30;
                yearlyInterest = dailyInterest * 365;
                setTotal(amount * Math.pow(1 + rateDecimal / 365, inputValue));
                break;
            case "month":
                monthlyInterest = (amount * rateDecimal) / 12;
                dailyInterest = monthlyInterest / 30;
                yearlyInterest = monthlyInterest * 12;
                setTotal(amount * Math.pow(1 + rateDecimal / 12, inputValue));
                break;
            case "year":
            default:
                yearlyInterest = amount * rateDecimal;
                dailyInterest = yearlyInterest / 365;
                monthlyInterest = yearlyInterest / 12;
                setTotal(amount * Math.pow(1 + rateDecimal, inputValue));
                break;
        }

        setInterestPerDay(dailyInterest);
        setInterestPerMonth(monthlyInterest);
        setInterestPerYear(yearlyInterest);
        setTotal(amount + yearlyInterest);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const amountChange = ({ target }: any) => {
        const value = parseFloat(target.value);
        if (value >= 1) {
            setAmount(value);
        } else {
            setAmount(0);
        }
    };

    return (
        <FormContainer>
            <Wrapper>
                <FlexRowDiv
                    style={{
                        width: "100%",
                        height: "39px",
                        justifyContent: "space-between",
                    }}
                >
                    <div>Balance: 0 SOL</div>
                    <FlexRowDiv style={{ gap: "8px" }}>
                        <Select>
                            <option value="jpool">Jpool rpc</option>
                            <option value="fable">TestNet</option>
                        </Select>
                        <ValidatorButton color="#FFCD29">
                            connect wallet
                        </ValidatorButton>
                    </FlexRowDiv>
                </FlexRowDiv>
                <FlexRowDiv
                    style={{
                        width: "100%",
                        backgroundColor: "white",
                        color: "black",
                        height: "56px",
                        borderRadius: "8px",
                    }}
                >
                    <FlexRowDiv>
                        <div>
                            <TextField sx={{ width: "280px" }} />
                        </div>
                        <FlexRowDiv style={{ gap: "8px" }}>
                            <ValidatorButton>max</ValidatorButton>
                            <Image
                                src={logo}
                                style={{ width: "36px", height: "36px" }}
                                alt=""
                            />
                            <div style={{ color: "#4a4a4a" }}>SOL</div>
                        </FlexRowDiv>
                    </FlexRowDiv>
                </FlexRowDiv>
                <div
                    style={{
                        width: "100%",
                        height: "176px",
                    }}
                >
                    <FlexRowDiv
                        style={{
                            width: "100%",
                            height: "53px",
                            fontSize: "14px",
                            fontStyle: "bold",
                            justifyContent: "space-between",
                            textTransform: "uppercase",
                        }}
                    >
                        <div>
                            total staked <div>≈ 96.649K</div>
                        </div>
                        <div>
                            validator fee <div>0.00%</div>
                        </div>
                        <div>please connect wallet</div>
                    </FlexRowDiv>
                    <FlexRowDiv
                        style={{
                            width: "100%",
                            height: "107px",
                            gap: "8px",
                            fontSize: "11px",
                        }}
                    >
                        <WhiteBorderDiv>
                            <div>STAKE ACCOUNTS</div>
                            <div>& more details</div>
                            <ValidatorButton style={{ marginTop: "18px" }}>
                                <LinkItem href="https://staking.kiwi/app/GJ3z7fJnAekf2LmGMe2gYdrxjqUrDQiqzcb7hgQLFc7X?cluster=mainnet-beta">
                                    <span>STAKING.KIWI</span>
                                </LinkItem>
                            </ValidatorButton>
                        </WhiteBorderDiv>
                        <WhiteBorderDiv>
                            EPOCH 634
                            <Image
                                src={graph}
                                style={{ width: "51px", height: "51px" }}
                                alt=""
                            />
                        </WhiteBorderDiv>
                        <WhiteBorderDiv>
                            <FlexRowDiv style={{ gap: "8px" }}>
                                <div
                                    style={{ cursor: "pointer" }}
                                    onClick={handleRoiClick}
                                >
                                    <Image
                                        src={calc}
                                        style={{
                                            width: "46px",
                                            height: "46px",
                                        }}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    AVERAGE APY
                                    <div style={{ fontSize: "26px" }}>
                                        ≈{rate}%
                                    </div>
                                </div>
                            </FlexRowDiv>
                            <div
                                style={{
                                    fontSize: "11px",
                                    marginTop: "8px",
                                }}
                            >
                                Network Fee: 0.000005 SOL
                            </div>
                        </WhiteBorderDiv>
                    </FlexRowDiv>
                </div>
            </Wrapper>
            {isModalOpen && (
                <ModalBackground onClick={closeModal}>
                    <ModalContainer onClick={(e) => e.stopPropagation()}>
                        <FlexRowDiv style={{ backgroundColor: "#374850" }}>
                            <Title>Solana APY Interest Calculator</Title>
                            <ValidatorButton onClick={closeModal}>
                                &times;
                            </ValidatorButton>
                        </FlexRowDiv>
                        <div>
                            current APY Interest Rate<Title>≈{rate}%</Title>
                            <div>
                                <input
                                    onChange={amountChange}
                                    value={amount}
                                    type="number"
                                />
                                <div>
                                    <InvestmentForm
                                        selectedPeriod={selectedPeriod}
                                        setSelectedPeriod={setSelectedPeriod}
                                        inputValue={inputValue}
                                        setInputValue={setInputValue}
                                    />
                                </div>
                            </div>
                            <button onClick={handleCalculate}>calculate</button>
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
                                            <TableCell>{total}</TableCell>
                                            <TableCell>
                                                ${total * 137}
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
