import { Button, Container, TextField } from "@mui/material";
import Joi from "joi";
import React from "react";
import useForm from "../../forms/hooks/useForm";


/* מצב ראשוני של המידע */
const initialForm = {
    firstName: "",
    lastName: "",
};

/* כללי תקינות לסכמה */
const schema = {
    firstName: Joi.string().min(2),
    lastName: Joi.string().min(2).max(12),
};

const printSomething = (something) => {
    console.log(something);
};

export default function FormExample() {
    const { data, errors, handleChange, validateForm, onSubmit } = useForm
        (initialForm,
            schema,
            printSomething
        );

    return (
        <Container
            sx={{
                pt: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TextField
                label="first name"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}/* יציג הודעת שגיאה */
            />
            <TextField
                label="last name"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
            />
            {/* במידה והטופס לא תקין הכפתור לא יהיה לחיץ */}
            <Button disabled={!validateForm} onClick={onSubmit}>Submit</Button>
        </Container>
    );
}