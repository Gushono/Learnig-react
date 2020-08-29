import React from 'react'
import './App.css'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'


export default () =>
    (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#4 - Desafio Aleatório">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#3 - Fragmento">
                    <Fragmento />
                </Card>

                <Card titulo="#2 - Com Parâmetro">
                    <ComParametro
                        titulo="Situação do aluno"
                        aluno="Marina"
                        nota={8.7}
                    />
                </Card>

                <Card titulo="#1 - Primeiro componente">
                    <Primeiro></Primeiro>
                </Card>
            </div>





        </div>
    );

