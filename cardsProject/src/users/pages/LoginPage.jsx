import React, { useCallback, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useCurrentUser } from "../providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/loginSchema";
import { Button, Container, Grid } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useSnack } from "../../providers/SnackBarProvider";
import useUsers from "../hooks/useUsers";


export default function LoginPage() {
    const { isLoasding, error, handleLogin } = useUsers();

    const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
        useForm(initialLoginForm, loginSchema, handleLogin);

    const { user } = useCurrentUser();

    /* אם יוזר מחובר הוא ינווט ישירות לעמוד כרטיסים */
    if (user) return <Navigate to={ROUTES.ROOT} replace />;

    return (
        <Container>
            <PageHeader
                title="Welcome to Login page"
                subtitle="here you can log in"
            />
            <Container
                sx={{
                    paddingTop: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Form
                    title="login"
                    styles={{ maxWidth: "450px" }}
                    to={ROUTES.ROOT}
                    onSubmit={onSubmit}
                    onReset={handleReset}
                    validateForm={validateForm}
                >
                    <Input
                        label="email"
                        name="email"
                        type="email"
                        error={errors.email}
                        onChange={handleChange}
                        data={data}
                    />
                    <Input
                        label="password"
                        name="password"
                        type="password"
                        error={errors.password}
                        onChange={handleChange}
                        data={data}
                    />
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            component={Link}
                            to={ROUTES.SIGNUP}
                            startIcon={<AccountBoxIcon />}
                            sx={{ width: "100%" }}
                        >
                            Sign Up
                        </Button>
                    </Grid>
                </Form>
            </Container>
        </Container>
    );
}


/*  - שליחת בקשה לטוקן התחברות*/
/* const handleLogin = async (userLogin) => {
    const response = await axios.post(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login",
        userLogin
    ); */
/* קיבלנו טוקן */
/*    const token = response.data;
   console.log(token); */
/* שמירת טוקן בלוקאל */
/*     localStorage.setItem("my token", token); */
/* פיענוח הטוקן מהלוקאל */
/*     console.log(jwtDecode(token)); */
/* }; */