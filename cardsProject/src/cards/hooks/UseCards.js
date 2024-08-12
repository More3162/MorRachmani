import { useCallback, useState } from 'react';
import axios from 'axios';
import { useSnack } from '../../providers/SnackBarProvider';

export default function UseCards() {

    const [cards, setCards] = useState([]);
    /* מכיל לי את פרטי הכרטיס על מנת שאוכל למשוך לתצוגה */
    const [card, setCard] = useState();

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState();

    const setSnack = useSnack();

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

    return {
        cards,
        card,
        isLoading,
        error,
        getCardById,
        getAllCards,
        handleDelete,
        handleLike,
    };

}