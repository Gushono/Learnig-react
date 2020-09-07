import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default (props) => {

    const ProdutosTr = produtos.map((produto, i) => {
        return (
            <tr className={i % 2 == 0 ? 'Par' : 'Impar'} key={produto.id}>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco} </td>
            </tr>
        )

    });

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {ProdutosTr}
                </tbody>

            </table>
        </div>
    );


}