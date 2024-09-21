import React from 'react';
import TextField from '@mui/material/TextField';

const InputField = ({ onChange }) => {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <TextField
            label="Digite o texto para converter"
            variant="outlined"
            fullWidth
            onChange={handleChange}
        />
    );
};

export default InputField;
