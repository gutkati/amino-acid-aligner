import React, {useState} from 'react';
import AlignForm from "./components/AlignForm";
import AlignmentDisplay from "./components/AlignmentDisplay";
import {Container, Heading} from '@chakra-ui/react';

function App() {
    const [seq1, setSeq1] = useState('');
    const [seq2, setSeq2] = useState('');
    return (
        <Container maxW='container.md' p={4}>
            <Heading textAlign='center' mb={6}>
                Анализ аминокислотных последовательностей
            </Heading>
            <AlignForm/>
            <AlignmentDisplay/>
        </Container>
    );
}

export default App;
