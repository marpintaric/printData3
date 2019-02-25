import React from 'react'

const ListItem = (props) => (
    <li key={props.user.id}>
        <p>Ime: {props.user.name}</p>
        <p>Prezime: {props.user.lastName}</p>
        <p>Adresa: {props.user.address}</p> <br />
    </li>
);

export default ListItem;