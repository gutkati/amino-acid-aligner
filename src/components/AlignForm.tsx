import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Box, Button, Input, FormControl, FormLabel, FormErrorMessage, VStack} from '@chakra-ui/react';

type FormData = {
    seq1: string;
    seq2: string;
}

interface AlignFormProps {
    seq1: string;
    seq2: string;
    onSubmitAlign: (seq1: string, seq2: string) => void;
}

const AlignForm: React.FC<AlignFormProps> = ({seq1, seq2, onSubmitAlign}) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<FormData>({
        defaultValues: {
            seq1: seq1 || '',
            seq2: seq2 || '',
        }
    })

    const onSubmit = (data: FormData) => {
        onSubmitAlign(data.seq1.toUpperCase(), data.seq2.toUpperCase());
    };

    const validateSequence = (value: string) =>
        /^[ARNDCEQGHILKMFPSTWYV-]+$/i.test(value) || 'Только допустимые символы (A, R, N, ...)'


    const validateLengthMatch = (value: string) => {
        const other = watch('seq1');
        return value.length === other.length || 'Последовательности должны быть одинаковой длины';
    }

    return (
        <Box
            as='form'
            onSubmit={handleSubmit(onSubmit)}
            maxW='600px'
            mx='auto'
            p={4}>

            <VStack spacing={4}>
                <FormControl isInvalid={!!errors.seq1}>
                    <FormLabel>Последовательность 1</FormLabel>
                    <Input
                        placeholder='VLSPADKTNIKASWEKIGSHG'
                        {...register('seq1', {
                            required: 'Обязательное поле',
                            validate: {
                                format: validateSequence,
                            }
                        })}
                    />
                    <FormErrorMessage>{errors.seq1?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.seq2}>
                    <FormLabel>Последовательность 2</FormLabel>
                    <Input
                        placeholder='VLSPADKTNIKASWEKIGSHG'
                        {...register('seq2', {
                            required: 'Обязательное поле',
                            validate: {
                                format: validateSequence,
                                length: validateLengthMatch,
                            },
                        })}
                    />
                    <FormErrorMessage>{errors.seq2?.message}</FormErrorMessage>
                </FormControl>
                <Button colorScheme="teal" type="submit" w="full">Выравнить</Button>
            </VStack>
        </Box>
    );
};

export default AlignForm;