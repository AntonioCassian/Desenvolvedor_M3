import { useEffect, useState } from 'react'
import { Checkbox } from '../../CheckBox'
import { Tamanho } from '../../Tamanho'
import { Title } from '../../Title'
import { Icon } from '@iconify/react';
import './styles.scss'
import { Cores } from '../Cores';
import { Precos } from '../Precos';
import { Product } from '../../../provider/Product';


export const preco = [

    'de R$0 até R$50',
    'de R$51 até R$150',
    'de R$151 até R$300',
    'de R$301 até R$500',
    'a partir de R$ 500'
]


export const Filter = () => {
    const [produtos, setProdutos] = useState<Product []>([])
    const Filtrar = () => {
        produtos.filter((produt) => produt.color)
    }
    console.log(Filtrar())

    return (
        <div className='filter'>
            <Cores />

            <div className="precos">
                <Title name='Tamanhos' />
                <Tamanho />
            </div>

            <div className="precos">
                <Title name='Faixa de Preço' />
                <Precos />
            </div>
        </div>
    )
}