import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ResultDisplay = ({ binaryText }) => {
    return (
        <Box mt={4}>
            <Typography variant="body1" style={{ wordWrap: 'break-word' }}>
                {binaryText}
            </Typography>
        </Box>
    );
};

export default ResultDisplay;
