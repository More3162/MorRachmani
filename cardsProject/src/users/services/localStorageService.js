/* כל הדברים שמדברים עם הלוקאל יקרו פה */
/* תפקידו לעבוד מול הלוקאל בנושא המשתמשים */
import { jwtDecode } from "jwt-decode";

/* זה הKEY שלי */
const TOKEN = "myToken";

/* הגדר את הטוקן בלוקאל */
export const setTokenInLocalStorage = (jwtToken) => {
    localStorage.setItem(TOKEN, jwtToken);
}

/* הסר את הטוקן מהלוקאל */
export const removeToken = () => localStorage.removeItem(TOKEN);

/* קבל את הטוקן מהלוקאל */
export const getToken = () => localStorage.getItem(TOKEN);

/* קבל את המשתמש מהלוקאל */
export const getUser = () => {
    try {
        const myToken = getToken(); /* קבל את הטוקן */
        return jwtDecode(myToken); /* פענח את הטוקן */
    }
    catch (err) {
        return null;
    }
}

