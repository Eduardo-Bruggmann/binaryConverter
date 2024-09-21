import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from './components/Header';
import InputField from './components/InputField';
import ConvertButton from './components/ConvertButton';
import ResultDisplay from './components/ResultDisplay';

const App = () => {
    const [inputText, setInputText] = useState('');
    const [binaryText, setBinaryText] = useState('');

    const convertToBinary = (text) => {
        return text
            .split('')
            .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
            .join(' ');
    };

    const handleConvert = () => {
        setBinaryText(convertToBinary(inputText));
    };

    return (
        <Container maxWidth="sm">
            <Header />
            <Box mt={4}>
                <InputField onChange={setInputText} />
            </Box>
            <Box mt={2} display="flex" justifyContent="center">
                <ConvertButton onClick={handleConvert} />
            </Box>
            <Box mt={4}>
                <ResultDisplay binaryText={binaryText} />
            </Box>
        </Container>
    );
};

export default App;
