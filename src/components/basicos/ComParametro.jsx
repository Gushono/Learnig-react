import React from 'react'

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'

    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h1>{props.titulo}</h1>
            <h3>{props.aluno} tem nota {notaInt} e está {status}</h3>
        </div>
    )
}