import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useCurrentUser } from "../providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/signupSchema";
import { Container } from "@mui/material";
import SignupForm from "../components/SignupForm";

const handleSignup = (userDetails) => {
    console.log(userDetails);
};

/* מחבר את כל העמודים יחד */
export default function SignupPage() {

    const {
        /* מושך את כל המידע מבפנים */
        data,
        errors,
        handleChange,
        handleReset,
        validateForm,
        onSubmit,
        handleChangeCheckBox,
    } = useForm(initialSignupForm, signupSchema, handleSignup); /* קורא לפונקציה של הפורם */

    const { user } = useCurrentUser();

    if (user) return <Navigate to={ROUTES.ROOT} replace />;

    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <SignupForm
                onSubmit={onSubmit}
                onReset={handleReset}
                validateForm={validateForm}
                title={"register form"}
                errors={errors}
                data={data}
                onInputChange={handleChange}
                handleChangeCheckBox={handleChangeCheckBox}
            />
        </Container>
    );
}
