import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Box, Button, Input, FormControl, FormLabel, VStack} from '@chakra-ui/react';

const AlignForm = () => {
    return (
        <Box maxW='600px' mx='auto' p={4}>
            <VStack>
                <FormControl>
                    <FormLabel>
                        <Input/>
                    </FormLabel>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        <Input/>
                    </FormLabel>
                </FormControl>
                <Button>Выравнить</Button>
            </VStack>
        </Box>
    );
};

export default AlignForm;