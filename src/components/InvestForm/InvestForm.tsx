import {
    Select,
    MenuItem,
    TextField,
    FormControl,
    InputLabel,
    SelectChangeEvent,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import React, { FC } from "react";
import styled from "@emotion/styled";
interface InvestmentFormProps {
    selectedPeriod: string;
    setSelectedPeriod: (period: string) => void;
    inputValue: number | string;
    setInputValue: (value: number) => void;
    amountChange: (value: number) => void;
    amount: number;
}

const periods: Record<string, { max: number; label: string }> = {
    year: { max: 20, label: "Year" },
    month: { max: 12, label: "Month" },
    epoch: { max: 365, label: "Epoch" },
};

const InvestFormContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    width: "100%",
});
const FlexRowDiv = styled("div")({
    display: "flex",
    alignItems: "center",
    width: "100%",
    gap: "10px",
});
const WhiteTextField = styled(TextField)({
    backgroundColor: "white",
});
const InvestmentForm: FC<InvestmentFormProps> = ({
    selectedPeriod,
    setSelectedPeriod,
    inputValue,
    setInputValue,
    amountChange,
    amount,
}) => {
    const { t } = useTranslation();

    const handlePeriodChange = (event: SelectChangeEvent<string>) => {
        setSelectedPeriod(event.target.value as string);
        setInputValue(0);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (
            value === "0" ||
            (parseFloat(value) > 0 &&
                parseFloat(value) <= periods[selectedPeriod].max)
        ) {
            setInputValue(Number(value));
        }
    };

    return (
        <InvestFormContainer>
            <WhiteTextField
                fullWidth
                label={t("Enter Amount")}
                onChange={amountChange}
                value={amount}
                // type="number"
            />
            <FlexRowDiv>
                <WhiteTextField
                    sx={{ marginTop: "8px" }}
                    fullWidth
                    type="number"
                    label={`Enter ${periods[selectedPeriod].label}`}
                    value={inputValue}
                    onChange={handleInputChange}
                    margin="normal"
                    inputProps={{
                        min: 1,
                        max: periods[selectedPeriod].max,
                    }}
                />
                <FormControl sx={{ width: "33%", backgroundColor: "white" }}>
                    <InputLabel id="period-select-label">
                        {t("Select Period")}
                    </InputLabel>
                    <Select
                        labelId="period-select-label"
                        id="period-select"
                        value={selectedPeriod}
                        label="Select Period"
                        onChange={handlePeriodChange}
                    >
                        <MenuItem value="year">{periods.year.label}</MenuItem>
                        <MenuItem value="month">{periods.month.label}</MenuItem>
                        <MenuItem value="epoch">{periods.epoch.label}</MenuItem>
                    </Select>
                </FormControl>
            </FlexRowDiv>
        </InvestFormContainer>
    );
};

export default InvestmentForm;
