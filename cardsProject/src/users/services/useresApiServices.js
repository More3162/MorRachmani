/* בקובץ הזה נגדיר את הבקשות API בנושא המשתמשים */
/* תפקידו לעבוד מול הAPI בנושא המשתמשים */
import axios from "axios";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";	// כתובת השרת

/* התחברות */
export const login = async (userLogin) => {
    try {
        /* תוספת הלוגאין היא בגלל הדוקומנטציה */
        const response = await axios.post(apiUrl + "/login", userLogin);
        const data = response.data;
        return data;
    }
    catch (err) {
        throw new Error(err.message);
    }
};

/* הרשמה */
export const signup = async (normalizeUser) => {
    try {
        const { data } = await axios.post(apiUrl, normalizeUser);
        return data;
    }
    catch (error) {
        throw new Error(error.message);
    }
};