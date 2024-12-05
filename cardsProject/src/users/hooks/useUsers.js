import { useCallback, useState } from 'react';
import { useCurrentUser } from '../providers/UserProvider';
import { login } from '../services/useresApiServices';
import ROUTES from '../../routes/routesModel';
import { getUser, setTokenInLocalStorage } from '../services/localStorageService';
import { useNavigate } from 'react-router-dom';
import { useSnack } from '../../providers/SnackBarProvider';



export default function useUsers() {

    const [isLoasding, setIsLoading] = useState();
    const [error, setError] = useState();
    const { setUser, setToken } = useCurrentUser();
    const navigate = useNavigate();
    const setSnack = useSnack();

    const handleLogin = useCallback(async (userLogin) => {
        /* הגדרת מצב טעינה */
        setIsLoading(true);
        try {
            /* שליחת בקשה */
            const token = await login(userLogin);
            /* הגדרת טוקן */
            setTokenInLocalStorage(token);
            setToken(token);
            /* הגדרת המשתמש בעזרת פונקציה נוספת */
            setUser(getUser());
            navigate(ROUTES.CARDS);
        }
        catch (err) {
            setError(err.message);
            setSnack("error", err.message);
        }
        /* הסיום של מצב הטעינה */
        setIsLoading(false);
    }, []);

    return {
        handleLogin,
        isLoasding,
        error
    };
}