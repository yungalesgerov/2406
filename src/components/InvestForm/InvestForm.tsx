import {
    Select,
    MenuItem,
    TextField,
    FormControl,
    InputLabel,
} from "@mui/material";
import { useState } from "react";
const periods = {
    year: { max: 20, label: "Year" },
    month: { max: 12, label: "Month" },
    epoch: { max: 365, label: "Epoch" },
};

const InvestmentForm = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("year");
    const [inputValue, setInputValue] = useState("");

    const handlePeriodChange = (event) => {
        setSelectedPeriod(event.target.value);
        setInputValue(""); // Reset input value when period changes
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (
            value === "" ||
            (value > 0 && value <= periods[selectedPeriod].max)
        ) {
            setInputValue(value);
        }
    };

    return (
        <div
            style={{
                padding: "20px",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                maxWidth: "300px",
                margin: "0 auto",
            }}
        >
            <FormControl fullWidth>
                <InputLabel id="period-select-label">Select Period</InputLabel>
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
            <TextField
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
        </div>
    );
};

export default InvestmentForm;