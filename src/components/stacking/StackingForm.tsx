import {
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";
import logo from "./solana24.svg";
import calc from "./calc.svg";
import graph from "./graph.svg";
import React, { FC, useState } from "react";
import InvestmentForm from "../InvestForm/InvestForm";
import Image from "next/image";
import styled from "@emotion/styled";
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

export const StackingForm: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [amount, setAmount] = useState<number>(0);
    const [interestPerDay, setInterestPerDay] = useState<number>(0);
    const [interestPerMonth, setInterestPerMonth] = useState<number>(0);
    const [interestPerYear, setInterestPerYear] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [rate, setRate] = useState<string>("6.91");
    const [selectedPeriod, setSelectedPeriod] = useState<string>("month");
    const [inputValue, setInputValue] = useState<number>(1);
    // :TODO wrong interest in month and day
    const handleCalculate = (): void => {
        const rateDecimal = parseFloat(rate) / 100;
        const period = selectedPeriod;
        let factor = 0;
        let dailyInterest = 0,
            monthlyInterest = 0,
            yearlyInterest = 0;
        let n = 0;
        let value = 0;
        let currentSavings = amount;
        const yearlyContribution = 1;
        const expectedReturn = rateDecimal;
        const duration = inputValue;

        switch (period) {
            case "epoch":
                value =
                    amount *
                    Math.pow(1 + rateDecimal / 365, duration * 365 * 0.00655);
                setTotal(value);
                break;
            case "month":
                value = amount * Math.pow(1 + rateDecimal / 12, duration * 12);
                setTotal(value);
                break;
            case "year":
            default:
                value = amount * Math.pow(1 + rateDecimal, duration);
                setTotal(value);
                break;
        }

        const yearlyData = [];

        switch (period) {
            case "day":
                for (let i = 0; i < duration; i++) {
                    dailyInterest = currentSavings * (expectedReturn / 365);
                    currentSavings += dailyInterest + yearlyContribution / 365;
                    yearlyData.push({
                        day: i + 1,
                        dailyInterest: dailyInterest,
                        savingsEndOfDay: currentSavings,
                        dailyContribution: yearlyContribution / 365,
                    });
                }
                setInterestPerDay(dailyInterest);
                setInterestPerMonth(currentSavings * (expectedReturn / 12));
                setInterestPerYear(currentSavings * expectedReturn);
                break;
            case "month":
                for (let i = 0; i < duration; i++) {
                    monthlyInterest = currentSavings * (expectedReturn / 12);
                    currentSavings += monthlyInterest + yearlyContribution / 12;
                    yearlyData.push({
                        month: i + 1,
                        monthlyInterest: monthlyInterest,
                        savingsEndOfMonth: currentSavings,
                        monthlyContribution: yearlyContribution / 12,
                    });
                }
                setInterestPerDay((currentSavings * expectedReturn) / 365);
                setInterestPerMonth(monthlyInterest);
                setInterestPerYear(currentSavings * expectedReturn);
                break;
            case "year":
            default:
                for (let i = 0; i < duration; i++) {
                    yearlyInterest = currentSavings * expectedReturn;
                    currentSavings += yearlyInterest + yearlyContribution;
                    yearlyData.push({
                        year: i + 1,
                        yearlyInterest: yearlyInterest,
                        savingsEndOfYear: currentSavings,
                        yearlyContribution: yearlyContribution,
                    });
                }
                setInterestPerDay((currentSavings * expectedReturn) / 365);
                setInterestPerMonth((currentSavings * expectedReturn) / 12);
                setInterestPerYear(yearlyInterest);
                break;
        }
    };
    const formatNumber = (number: number) => {
        return new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
        }).format(number);
    };
    const closeModal = (event: React.MouseEvent): void => {
        event.preventDefault();
        setIsModalOpen(false);
    };
    const handleRoiClick = (): void => {
        setIsModalOpen(true);
    };
    const amountChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = parseFloat(event.target.value);
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
                    <ModalContainer
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <FlexRowDiv style={{ backgroundColor: "#374850" }}>
                            <Title>Solana APY Interest Calculator</Title>
                            <ValidatorButton onClick={closeModal}>
                                &times;
                            </ValidatorButton>
                        </FlexRowDiv>
                        <div>
                            current APY Interest Rate<Title>≈{rate}%</Title>
                            <div>
                                <InvestmentForm
                                    amountChange={amountChange}
                                    amount={amount}
                                    selectedPeriod={selectedPeriod}
                                    setSelectedPeriod={setSelectedPeriod}
                                    inputValue={inputValue}
                                    setInputValue={setInputValue}
                                />
                            </div>
                            <ValidatorButton
                                style={{ width: "100%", marginTop: "8px" }}
                                color="#FFCD29"
                                onClick={handleCalculate}
                            >
                                calculate
                            </ValidatorButton>
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
                                            <TableCell>
                                                {formatNumber(total)}
                                            </TableCell>
                                            <TableCell>
                                                ${formatNumber(total * 137)}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Interest per Day
                                            </TableCell>
                                            <TableCell>
                                                {formatNumber(interestPerDay)}
                                            </TableCell>
                                            <TableCell>
                                                $
                                                {formatNumber(
                                                    interestPerDay * 137,
                                                )}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Interest per Month
                                            </TableCell>
                                            <TableCell>
                                                {formatNumber(interestPerMonth)}
                                            </TableCell>
                                            <TableCell>
                                                $
                                                {formatNumber(
                                                    interestPerMonth * 137,
                                                )}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Interest per Year
                                            </TableCell>
                                            <TableCell>
                                                {formatNumber(interestPerYear)}
                                            </TableCell>
                                            <TableCell>
                                                $
                                                {formatNumber(
                                                    interestPerYear * 137,
                                                )}
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
