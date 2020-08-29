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
                <Card titulo="#4 - Desafio Aleatório" color="#242038">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#3 - Fragmento" color="#725AC1">
                    <Fragmento />
                </Card>

                <Card titulo="#2 - Com Parâmetro" color="#8D86C9">
                    <ComParametro
                        titulo="Situação do aluno"
                        aluno="Marina"
                        nota={8.7}
                    />
                </Card>

                <Card titulo="#1 - Primeiro componente" color="#CAC4CE">
                    <Primeiro></Primeiro>
                </Card>
            </div>





        </div>
    );

