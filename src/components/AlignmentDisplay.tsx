import React from 'react';
import {Box, Text, SimpleGrid} from '@chakra-ui/react';
import {AMINO_COLORS} from '../constants/colors';

interface AlignDisplayProps {
    seq1: string;
    seq2: string;
}

const AlignmentDisplay: React.FC<AlignDisplayProps> = ({seq1, seq2}) => {
    const length = Math.min(seq1.length, seq2.length)
    const items = []

    for (let i = 0; i < length; i++) {
        items.push(
            <Box key={`pair-${i}`} textAlign="center" >
                <Text
                    bg={AMINO_COLORS[seq1[i]] || 'transparent'}
                    px={1}
                    borderRadius="sm"
                    fontFamily="mono"
                    mx={0.5}
                    mt={3}
                >
                    {seq1[i]}
                </Text>
                <Text
                    bg={seq1[i] !== seq2[i] ? AMINO_COLORS[seq2[i]] : 'transparent'}
                    px={1}
                    borderRadius="sm"
                    fontFamily="mono"
                    mx={0.5}
                    mt={3}
                >
                    {seq2[i]}
                </Text>
            </Box>
        );
    }

    return (
        <Box
            fontFamily="mono"
            px={2}
            py={4}
            overflowWrap="break-word"
            mb={2}
            maxW='600px'
            mx='auto'
            p={4}
        >
            <SimpleGrid
                columns={{base: 10, sm: 16, md: 20}}
                spacing={1}
                justifyItems="center"
                overflowWrap="break-word"
            >
                {items}
            </SimpleGrid>
            {/*<Wrap mt={4} maxW="100%">*/}
            {/*    <WrapItem display="flex" flexWrap="wrap">*/}
            {/*        {*/}
            {/*            seq1.split('').map((char, i) => (*/}
            {/*                <Text*/}
            {/*                    as='span'*/}
            {/*                    key={i}*/}
            {/*                    bg={AMINO_COLORS[char] || 'transparent'}*/}
            {/*                    px={1}*/}
            {/*                    mx={0.5}*/}
            {/*                    borderRadius='sm'*/}
            {/*                    minW="ch" // ширина символа*/}
            {/*                    textAlign="center"*/}
            {/*                    display="inline-block"*/}
            {/*                >{char}</Text>*/}
            {/*            ))*/}
            {/*        }*/}

            {/*    </WrapItem>*/}
            {/*</Wrap>*/}

            {/*<Wrap mt={4} maxW="100%">*/}
            {/*    <WrapItem display="flex" flexWrap="wrap">*/}
            {/*        {seq2.split('').map((char, i) => (*/}
            {/*            <Text*/}
            {/*                as='span'*/}
            {/*                key={i}*/}
            {/*                bg={char !== seq1[i] ? AMINO_COLORS[char] : "transparent"}*/}
            {/*                px={1}*/}
            {/*                mx={0.5}*/}
            {/*                borderRadius='sm'*/}
            {/*                minW="ch" // ширина символа*/}
            {/*                textAlign="center"*/}
            {/*                display="inline-block"*/}
            {/*            >{char}</Text>*/}
            {/*        ))}*/}

            {/*    </WrapItem>*/}
            {/*</Wrap>*/}
        </Box>
    );
};

export default AlignmentDisplay;