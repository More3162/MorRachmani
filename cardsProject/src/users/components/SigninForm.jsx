import React from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import { Button } from "@mui/material";


export default function SinginForm({
    onSubmit,
    onReset,
    validateForm,
    title,
    errors,
    data,
    onInputChange,
}) {
    console.log(validateForm);
    return (
        /* איך נראה הטופס עם המון אינפוטים */
        <Form
            onSubmit={onSubmit}
            onReset={onReset}
            validateForm={validateForm}
            title={title}
            styles={{ maxWidth: "800px" }}
        >
            <Input
                name="email"
                label="email"
                type="email"
                error={errors.email}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="password"
                label="password"
                type="password"
                error={errors.password}
                onChange={onInputChange}
                data={data}
                sm={6}
            />

        </Form>
    );
}