import { CardActionArea } from '@mui/material';
import Card from "@mui/material/Card";
import React from 'react';
import CardActionBar from './CardActionBar';
import CardBody from './CardBody';
import CardHeaderComponent from './CardHeaderComponent';
import ROUTES from '../../../routes/routesModel';
import { Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function CardComponent({ card, handleDelete, handleEdit, handelCall, handleLike }) {

    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`${ROUTES.CARD_INFO}/${card._id}`);
        /*         console.log(`Navigate to the Card with the id: ` + card._id); */
    }


    return (
        <Card sx={{ width: 250, margin: 3 }}>
            <CardActionArea onClick={handleCardClick} >
                <CardHeaderComponent
                    image={card.image.url}
                    alt={card.image.alt}
                    title={card.title}
                    subtitle={card.subtitle}
                />

                <CardBody
                    phone={card.phone}
                    address={card.address}
                    bizNumber={card.bizNumber}
                />

            </CardActionArea>
            <CardActionBar cardId={card._id}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handelCall={handelCall}
                handleLike={handleLike} />

        </Card>
    );
}
