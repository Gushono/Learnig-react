import React from 'react'

export default function Primeiro() {
    const msg = 'Seja bem vindo!'
    return (
        <div id = "app">
            <h1>Primeiro componente </h1>
            <p>{msg}</p>
        </div>
    )
}