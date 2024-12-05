import { useEffect } from "react";
import axios from "axios";
import { useCurrentUser } from "../../src/users/providers/UserProvider";

/* המטרה שלה היא בכל פעם שהטוקן משתנה הוא מגדיר אותו בערך דיפולטיבי */
export default function useAxios() {
    const { token } = useCurrentUser();

    useEffect(() => {
        axios.defaults.headers.common['x-auth-token'] = token;
    }, [token]);
}