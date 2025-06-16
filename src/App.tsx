import React, {useState} from 'react';
import AlignForm from "./components/AlignForm";
import AlignmentDisplay from "./components/AlignmentDisplay";
import {Container, Heading} from '@chakra-ui/react';

function App() {
    const [seq1, setSeq1] = useState('');
    const [seq2, setSeq2] = useState('');
    
    function changeSubmitAlign(s1: string, s2: string) {
        setSeq1(s1)
        setSeq2(s2)
    }
    return (
        <Container maxW='container.md' p={4}>
            <Heading textAlign='center' mb={6}>
                Анализ аминокислотных последовательностей
            </Heading>
            <AlignForm
                seq1={seq1}
                seq2={seq2}
                onSubmitAlign={changeSubmitAlign}
            />
            <AlignmentDisplay
                seq1={seq1}
                seq2={seq2}/>
        </Container>
    );
}

export default App;