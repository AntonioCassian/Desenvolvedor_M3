/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Checkbox } from '../../CheckBox'
import { Title } from '../../Title'
import './styles.scss'
import { Product } from '../../../provider/Product';


export const Precos = ({onPrice}: any) => {
    const [precoFilter, setprecoFilter] = useState<Product[]>([])
    const [select, setSelect] = useState<{ [key: string]: boolean }>({
        opt1: false,
        Azul: false,
        Branco: false,
        Cinza: false,
        Laranja: false,
        Verde: false,
        Vermelho: false,
        Preto: false,
        Rosa: false,
        Vinho: false,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');
                const data: Product[] = await response.json();
    
                const filtered = data.filter((data) => {
                    if (
                        (select.opt1 && data.price < 50)||
                        (select.opt2 && data.price >=  51 && data.price <= 150 )||
                        (select.opt3 && data.price >= 151 && data.price <= 300 )||
                        (select.opt4 && data.price >= 301 && data.price <= 500)||
                        (select.opt5 && data.price >= 500)
                    ) {
                        return true;
                    }
                    return false;
                });
    
                setprecoFilter(filtered);
                onPrice(filtered);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [select]);

    const handleChange = (event: any) => {
        const { name, checked } = event.target;

        setSelect((prevSelect) => ({
            ...prevSelect,
            [name]: checked,
        }));
        console.log({name, checked})
    }

    return (
        <div className="precos">
            <Title name='Faixa de Preço' />
            <Checkbox
                label='de R$0 até R$50'
                name='opt1'
                checked={select.opt1}
                onChange={handleChange}
            />
            <Checkbox
                label='de R$51 até R$150'
                name='opt2'
                checked={select.opt2}
                onChange={handleChange}
            />
            <Checkbox
                label='de R$151 até R$300'
                name='opt3'
                checked={select.opt3}
                onChange={handleChange}
            />
            <Checkbox
                label='de R$301 até R$500'
                name='opt4'
                value='Cinza'
                checked={select.opt4}
                onChange={handleChange}
            />
            <Checkbox
                label='a partir de R$ 500'
                name='opt5'
                checked={select.opt5}
                onChange={handleChange}
            />
        </div>
    )
}