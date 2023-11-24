import { useState, useEffect } from 'react';
import { Title } from '../../Title'
import './styles.scss'
import { Product } from '../../../provider/Product';

export const Tamanho = ({onSizeFilter}: any) => {
    const [tamanho, setTamanho] = useState<Product[]>([])
    const [select, setSelect] = useState<{ [key: string]: boolean }>({
        P: false,
        M: false,
        G: false,
        GG: false,
        U: false,
        N36: false,
        N38: false,
        N40: false
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');
                const data: Product[] = await response.json();

                const filtered = data.filter((data) => {
                    if (
                        (select.P && data.size[0] === "P") ||
                        (select.M && data.size[0 | 1] === "M") ||
                        (select.G && data.size[0 | 1] === "G") ||
                        (select.GG && data.size[0 | 1] === "GG") ||
                        (select.U && data.size[0 | 1] === "U") ||
                        (select.N36 && data.size[0 | 1] === "36") ||
                        (select.N38 && data.size[0 | 1] === "38") ||
                        (select.N40 && data.size[0 | 1] === "40")
                    ) {
                        return true;
                    }
                    return false;
                });

                setTamanho(filtered);
                console.log(filtered)
                onSizeFilter(filtered);
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
        console.log({ name, checked })
    }



    return (
        <div className='tm-f'>
            <Title name='Tamanhos' />
            <div className='tamanho-filter'>
                <div className='tamanho'>
                    <input
                        type='checkbox'
                        id='check'
                        name='P'
                        checked={select.P}
                        onChange={handleChange}
                    />
                    <label htmlFor="check">P</label>
                </div>
                <div className='tamanho'>
                    <input
                        type='checkbox'
                        id='checkM'
                        name='M'
                        checked={select.M}
                        onChange={handleChange}
                    />
                    <label htmlFor="checkM">M</label>
                </div>
                <div className='tamanho'>
                    <input
                        type='checkbox'
                        id='checkG'
                        name='G'
                        checked={select.G}
                        onChange={handleChange}
                    />
                    <label htmlFor="checkG">G</label>
                </div>
                <div className='tamanho'>
                    <input
                        type='checkbox'
                        id='checkGG'
                        name='GG'
                        checked={select.GG}
                        onChange={handleChange}
                    />
                    <label htmlFor="checkGG">GG</label>
                </div>
                <div className='tamanho'>
                    <input
                        type='checkbox'
                        id='checkU'
                        name='U'
                        checked={select.U}
                        onChange={handleChange}
                    />
                    <label htmlFor="checkU">U</label>
                </div>
                <div className='tamanho'>
                    <input
                        type='checkbox'
                        id='checknt'
                        name='N36'
                        checked={select.N36}
                        onChange={handleChange}
                    />
                    <label htmlFor="checknt">36</label>
                </div>
                <div className='tamanho'>
                    <input
                        type='checkbox'
                        id='checknh'
                        name='N38'
                        checked={select.N38}
                        onChange={handleChange}
                    />
                    <label htmlFor="checknh">38</label>
                </div>
                <div className='tamanho'>
                    <input
                        type='checkbox'
                        id='checknf'
                        name='N40'
                        checked={select.N40}
                        onChange={handleChange}
                    />
                    <label htmlFor="checkf">40</label>
                </div>
            </div>
        </div>
    )
}