import React from 'react'

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado';

    const notaInt = props.nota
    return (
        <div>
            <h1>{props.titulo}</h1>
            <h3><strong>{props.aluno}</strong> tem nota <strong>{notaInt}</strong> e está <strong>{status}</strong></h3>
        </div>
    )
}