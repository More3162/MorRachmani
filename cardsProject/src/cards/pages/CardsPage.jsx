import React, { useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import CardsFeedback from '../components/CardsFeedback';
import UseCards from '../hooks/UseCards';


export default function CardsPage() {
    /* https://documenter.getpostman.com/view/25008645/2s9YXcd5BE */

    const { cards, isLoading, error, getAllCards, handleDelete, handleLike } = UseCards();

    useEffect(() => {
        getAllCards();
    }, []);

    return (
        <>
            <PageHeader
                title="Cards"
                subtitle=" On this page you can find all bussines cards from all categories"
            />
            {/* שולח את זה בפרופס לכרטיס */}
            <CardsFeedback
                cards={cards}
                isLoading={isLoading}
                error={error}
                handleDelete={handleDelete}
                handleLike={handleLike} />
        </>
    )
}
