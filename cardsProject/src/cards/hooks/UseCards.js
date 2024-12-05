import { useCallback, useState } from 'react';
import axios from 'axios';
import { useSnack } from '../../providers/SnackBarProvider';
import { useNavigate } from "react-router-dom";
import useAxios from '../../hooks/useAxios';



export default function UseCards() {

    const [cards, setCards] = useState([]);
    /* מכיל לי את פרטי הכרטיס על מנת שאוכל למשוך לתצוגה */
    const [card, setCard] = useState();

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState();

    const navigate = useNavigate();

    const setSnack = useSnack();

    useAxios(); // קריאה לפונקציה שמגדירה את הטוקן בהדרס של אקסיוס


    const getCardById = useCallback(async (id) => {
        try {
            const response = await axios.get(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`
            );
            const data = response.data;
            setCard(data);
        }
        catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }, []);

    const getAllCards = useCallback(async () => {
        try {
            /* שימוש באקסיוס */
            let response = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards");
            /* מקבע את הדאטה בסט */
            setCards(response.data);
        }
        /* אם יש טעות תשלח את זה */
        catch (err) {
            setError(err.message);
        }
        /* אם אין טעות הצג את זה */
        setIsLoading(false);
    }, []);

    const handleDelete = useCallback((id) => {
        console.log("Card " + id + " deleted");
    }, []);

    const handleLike = useCallback((id) => {
        console.log("Card " + id + " has been liked");
    }, []);


    /* פונקציה הוספת כרטיס חדש ברגע שאתה מחובר */
    const handleCreateCard = useCallback(
        async (cardFromClient) => {
            setError(null);
            setIsLoading(true);
            try {
                const { data } = await axios.post(
                    `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards`,
                    cardFromClient,
                    { "x-auth-token": localStorage.getItem("my token") }
                );
                const card = data;
                setCard(card);
                setSnack("success", "A new business card has been created");
                setTimeout(() => {
                    navigate(ROUTES.ROOT);
                }, 1000);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        },
        [setSnack, navigate]
    );

    return {
        cards,
        card,
        isLoading,
        error,
        getCardById,
        getAllCards,
        handleDelete,
        handleLike,
        handleCreateCard,
    };

}