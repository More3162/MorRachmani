import { Container } from '@mui/material'
import React from 'react'
import CardForm from '../components/CardForm';
import useForm from '../../forms/hooks/useForm';
import initialCardForm from '../helpers/initialForms/initialCardForm';
import cardSchema from '../models/cardSchema';

const handleSignup = (userDetails) => {
    console.log(userDetails);
};

export default function AddCardPage() {
    /*     const { user } = useCurrentUser();
    
        if (!user) return <Navigate to={ROUTES.ROOT} replace />; */

    const {
        data,
        errors,
        handleChange,
        handleReset,
        validateForm,
        onSubmit,
    } = useForm(initialCardForm, cardSchema, handleSignup);

    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <CardForm
                onSubmit={onSubmit}
                onReset={handleReset}
                validateForm={validateForm}
                title={"register form"}
                errors={errors}
                data={data}
                onInputChange={handleChange}
            />
        </ Container>
    )
};
