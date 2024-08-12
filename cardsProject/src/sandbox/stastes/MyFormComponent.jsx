import { Phone } from "@mui/icons-material";
import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

export default function MyFormExample() {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: ""
    });

    const handleChange = (e) => {
        let targetName = e.target.name;
        setData((prev) => ({ ...prev, [targetName]: e.target.value }));
    }

    let x = {};

    let something = "name";

    x = { [something]: "Mor" };

    console.log(x);


    return (
        <div>
            <Container sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField
                    label="First Name"
                    name="firstName"
                    vairant="outlined"
                    value={data.firstName}
                    onChange={handleChange
                    }
                />

                <TextField
                    label="Last Name"
                    name="lastName"
                    vairant="outlined"
                    value={data.lastName}
                    onChange={handleChange
                    }
                />
                <TextField
                    label="phone"
                    name="phone"
                    vairant="outlined"
                    value={data.phone}
                    onChange={handleChange
                    }
                />
                <TextField
                    label="email"
                    name="email"
                    vairant="outlined"
                    value={data.email}
                    onChange={handleChange
                    }
                />
                <TextField
                    label="address"
                    name="address"
                    vairant="outlined"
                    value={data.address}
                    onChange={handleChange
                    }
                />

                <Button variant="contained">Send</Button>

            </Container>
        </div>
    );
}