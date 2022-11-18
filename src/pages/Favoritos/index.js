import React from "react";
import {
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Divider,
    Button,
    Typography,
    IconButton
} from "@mui/material";

import "./styles.css";

import { Favorite } from "@mui/icons-material";

export default function Favoritos(){
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
        fetch('http://localhost:8000/favoritos')
        .then(res => res.json())
        .then(dados => {
        setItems(dados);
    });
    }, []);
    return(
        <div>
            <h1>Favoritos</h1>
            <Divider/>
            { items.map(cadaItem => {
                return (
                    <div>
                        <span>{cadaItem.nome}</span>

                        <span>R$ {cadaItem.valor}</span>
                    </div>
                )
            }) }
        </div>

    )
}
