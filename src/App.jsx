import React from 'react'
import './App.css'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'


export default () =>
    (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#7 - Repetição exercicio" color="#10A038">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#6 - Repetição" color="#21A038">
                    <ListaAlunos></ListaAlunos>
                </Card>


                <Card titulo="#5 - Componente com filhos" color="#220038">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="João" />
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>

                <Card titulo="#4 - Desafio Aleatório" color="#242038">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#3 - Fragmento" color="#725AC1">
                    <Fragmento />
                </Card>

                <Card titulo="#2 - Com Parâmetro" color="#8D86C9">
                    <ComParametro
                        titulo="Situação do aluno"
                        aluno="Eduardo"
                        nota={5.3}
                    />
                </Card>

                <Card titulo="#1 - Primeiro componente" color="#CAC4CE">
                    <Primeiro></Primeiro>
                </Card>
            </div>




        </div >
    );

