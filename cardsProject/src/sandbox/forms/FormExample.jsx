import { Button, Container, TextField } from "@mui/material";
import Joi from "joi";
import React, { useState } from "react";

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

export default function FormExample() {

    const [data, setData] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        /* כל תו שמקליד נכנס לערך */
        let value = e.target.value;
        let name = e.target.name;

        /* זה בודק לי כל ערך שמשתנה - כלומר כל אות */
        const errorMessage = validateProperty(name, value);

        /* מחיקת שגיאות במידה ויש תקלת שגיאה - זה יבצע מחיקה עד שנכניס את הקלט הנכון */
        if (errorMessage) {
            setErrors(prev => ({ ...prev, [name]: errorMessage }));
        } else {
            setErrors((prev => {
                let obj = { ...prev };/* יקח את ההודעה שגיאה שהופיעה */
                delete obj[name]; /* ימחק אותה ויהפוך אובייקט ריק  */
                return obj; /* יחזיר אובייקט ריק  }{} */
            }));
        }

        setData((prev) => ({ ...prev, [name]: value }));
    };

    /* בדיקת שדה שדה */
    const validateProperty = (name, value) => {
        let joiSchema = Joi.object({ [name]: schema[name] }); //{firstName: Joi.string().min(2)} אובייקט שמגדיר איך נראים נתונים תקינים
        let { error } = joiSchema.validate({ [name]: value }); //{firstName: "a"} - מקבלים את הערך שהוקלד ועליו נעשית הבדיקה ג'וי סכמה וולידאיטי זה מתודות מובנות של ג'וי
        return error ? error.details[0].message : null;
    };

    /* בדיקת כל הטופס */
    const validateForm = () => {
        let joiSchema = Joi.object(schema);
        const { error } = joiSchema.validate(data);
        if (error) return false;
    }

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
            <Button disabled={!validateForm}>Submit</Button>
        </Container>
    );
}
