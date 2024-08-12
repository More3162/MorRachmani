import React from "react";
import CardComponent from "./card/CardComponent";
import { Container } from "@mui/material";


/* מקבל בפרופס את הכרטיס ששלחנו */
export default function Cards({ cards, handleDelete, handleLike }) {

    const handleEdit = (id) => {
        console.log(`Edit the Card with the id: ` + id);
    }
    const handelCall = (id) => {
        console.log(`Call the Card with the id: ` + id);
    }


    return (
        <>
            <Container sx={{ display: "flex", flexWrap: "wrap" }}>
                {cards.map((card) => (
                    <CardComponent
                        card={card}
                        key={card._id}
                        handleDelete={handleDelete}
                        handleLike={handleLike}
                        handleEdit={handleEdit}
                        handelCall={handelCall}
                    />
                ))}
            </Container>
        </>
    );
}