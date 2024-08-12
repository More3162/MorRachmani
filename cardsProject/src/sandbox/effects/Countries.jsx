import { Button, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react'
import Paper from '@mui/material/Paper';


export default function Countries() {

    const [allCountries, setAllCountries] = useState([]);
    const [filteredAllCountries, setFilteredAllCountries] = useState([]);
    const [searchText, setSearchText] = useState("");

    /* מביא את הנתונים פעם אחת */
    useEffect(() => {
        const getCountries = async () => {
            let response = await fetch("https://restcountries.com/v3.1/all");
            let data = await response.json();
            setAllCountries(data);
            setFilteredAllCountries(data);
        };
        getCountries();
    }, []);

    /* מבצע את החיפוש ומחזיר את המערך מעודכן */
    useEffect(() => {
        setFilteredAllCountries(
            allCountries.filter((c) =>
                c.name.common.toLowerCase().includes(searchText.toLowerCase())
            )
        );
    }, [searchText]);

    /* עיגול טעינה */
    if (allCountries.length === 0) {
        return <CircularProgress />;
    }


    return (
        <div>
            <TextField
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            {filteredAllCountries.map((country) => (
                <Paper key={country.cca3} elevation={3} style={{ padding: "10px", margin: "10px" }}>

                    <Typography variant="h6" key={country.name.common}>{country.name.common} </Typography>

                    <img style={{ maxWidth: "50px" }} src={country.flags.png} alt={country.flags.alt} />

                    <Typography variant="body1">Region: {country.region}</Typography>

                    <Typography variant="body1">Capital: {country.capital}</Typography>

                    {/* add if un member */}
                    {country.unMember && <Button variant="contained" color="success">UN Member</Button>}
                    {/* add if not un member */}
                    {!country.unMember && <Button variant="contained" color="error">Not a UN Member</Button>}
                    <br />

                    <Button variant="" color="secondary">Add to fav</Button>

                </Paper>
            ))}
        </div>
    )
}
