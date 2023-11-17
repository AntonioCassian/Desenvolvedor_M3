import { Checkbox } from '../CheckBox'
import { Tamanho } from '../Tamanho'
import { Title } from '../Title'
import './styles.scss'

export const cores =[
        {"id": 1, "color": "Amarelo"},
        {"id": 2, "color": "Azul"},
        {"id": 3, "color": "Branco"},
        {"id": 4, "color": "Cinza"},
        {"id": 5, "color": "Laranja"},
        {"id": 6, "color": "Verde"},
        {"id": 7, "color": "Vermelho"},
        {"id": 8, "color": "Preto"},
        {"id": 9, "color": "Rosa"},
        {"id": 10, "color": "Vinho"},
]

export const preco =[
    
        'de R$0 até R$50',
        'de R$51 até R$150',
        'de R$151 até R$300',
        'de R$301 até R$500',
        'a partir de R$ 500'
    ]

export const Filter = () => {
    return(
        <div className='filter'>
            <div className="cores">
                <Title name='Cores' />
                <Checkbox />
            </div>
            <div className="tamanhos">
                <Title name='Tamanhos' />
                <Tamanho />
            </div>
            
        </div>
    )
}