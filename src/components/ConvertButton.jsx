import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ConvertButton = ({ onClick }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            onClick={onClick}
            style={{ marginTop: '16px' }}
        >
            Converter para Binário
        </Button>
    );
};

export default ConvertButton;
