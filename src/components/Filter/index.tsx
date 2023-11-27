/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react'
import { Product } from "../../provider/Product"
import { Title } from '../Title'
import { Checkbox } from '../CheckBox';
import { Icon } from '@iconify/react';
import './styles.scss'

export const FilterAside = ({ onFilter }: any) => {
    const [visb, setVisb] = useState(false)
    const [modal, setModal] = useState(false)
    const [modalTam, setModalTam] = useState(false)
    const [modalPrecos, setModalPrecos] = useState(false)
 
    // @ts-expect-error
    const [filter, setFilter] = useState<Product[]>([])
    const [select, setSelect] = useState<{ [key: string]: boolean }>({
        Amarelo: false,
        Azul: false,
        Branco: false,
        Cinza: false,
        Laranja: false,
        Verde: false,
        Vermelho: false,
        Preto: false,
        Rosa: false,
        Vinho: false,
        P: false,
        M: false,
        G: false,
        GG: false,
        U: false,
        N36: false,
        N38: false,
        N40: false,
        opt1: false,
        opt2: false,
        opt3: false,
        opt4: false,
        opt5: false
    });

    const handleResize = () => {
        if (window.innerWidth >= 400) {
            setVisb(true);
            setModal(true)
        } else {
            setVisb(true);
            setModal(false)
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://desenvolvedor-m3-serve.vercel.app/products');
                const data: Product[] = await response.json();

                const filtered = data.filter((data) => {
                    if (
                        (select.Amarelo && data.color === "Amarelo") ||
                        (select.Azul && data.color === "Azul") ||
                        (select.Branco && data.color === "Branco") ||
                        (select.Cinza && data.color === "Cinza") ||
                        (select.Laranja && data.color === "Laranja") ||
                        (select.Verde && data.color === "Verde") ||
                        (select.Vermelho && data.color === "Vermelho") ||
                        (select.Preto && data.color === "Preto") ||
                        (select.Rosa && data.color === "Rosa") ||
                        (select.Vinho && data.color === "Vinho") ||
                        (select.P && data.size[0] === "P") ||
                        (select.M && data.size[0 | 1] === "M") ||
                        (select.G && data.size[0 | 1] === "G") ||
                        (select.GG && data.size[0 | 1] === "GG") ||
                        (select.U && data.size[0 | 1] === "U") ||
                        (select.N36 && data.size[0 | 1] === "36") ||
                        (select.N38 && data.size[0 | 1] === "38") ||
                        (select.N40 && data.size[0 | 1] === "40") ||
                        (select.opt1 && data.price < 50) ||
                        (select.opt2 && data.price >= 51 && data.price <= 150) ||
                        (select.opt3 && data.price >= 151 && data.price <= 300) ||
                        (select.opt4 && data.price >= 301 && data.price <= 500) ||
                        (select.opt5 && data.price >= 500)
                    ) {
                        return true;
                    }
                    return false;
                });
                
                setFilter(filtered);
                onFilter(filtered);


            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
        handleResize();
    }, [select]);

    const handleChange = (event: any) => {
        const { name, checked } = event.target;

        setSelect((prevSelect) => ({
            ...prevSelect,
            [name]: checked,
        }));
    }

    const handleVisb = () => {
        setVisb(!visb)
    }

    return (
        <>
            <div className="cores">
                <div className="tit">
                    <Title name='Cores' />
                    <Icon icon="prime:angle-down" height={30} style={{ color: "#666" }} onClick={() => setModal(!modal)} />
                </div>
                {modal &&
                    <div className="list">
                        <Checkbox
                            label='Amarelo'
                            name='Amarelo'
                            value='Amarelo'
                            checked={select.Amarelo}
                            onChange={handleChange}
                        />
                        <Checkbox
                            label='Azul'
                            name='Azul'
                            value='Azul'
                            checked={select.Azul}
                            onChange={handleChange}
                        />
                        <Checkbox
                            label='Branco'
                            name='Branco'
                            value='Branco'
                            checked={select.Branco}
                            onChange={handleChange}
                        />
                        <Checkbox
                            label='Cinza'
                            name='Cinza'
                            value='Cinza'
                            checked={select.Cinza}
                            onChange={handleChange}
                        />
                        <Checkbox
                            label='Laranja'
                            name='Laranja'
                            value='Laranja'
                            checked={select.Laranja}
                            onChange={handleChange}
                        />

                        {visb && (
                            <>
                                <Checkbox
                                    label='Verde'
                                    name='Verde'
                                    value='Verde'
                                    checked={select.Verde}
                                    onChange={handleChange}
                                />

                                <Checkbox
                                    label='Vermelho'
                                    name='Vermelho'
                                    value='Vermelho'
                                    checked={select.Vermelho}
                                    onChange={handleChange}
                                />
                                <Checkbox
                                    label='Preto'
                                    name='Preto'
                                    value='Preto'
                                    checked={select.Preto}
                                    onChange={handleChange}
                                />
                                <Checkbox
                                    label='Rosa'
                                    name='Rosa'
                                    value='Rosa'
                                    checked={select.Rosa}
                                    onChange={handleChange}
                                />
                                <Checkbox
                                    label='Vinho'
                                    name='Vinho'
                                    value='Vinho'
                                    checked={select.Vinho}
                                    onChange={handleChange}
                                />
                            </>

                        )}
                    </div>
                }
                {visb ? (
                    <div className='btn-filt' onClick={handleVisb}>
                        <span>Ver menos cores</span><Icon icon="prime:angle-up" className='ibtn' />
                    </div>
                ) : (
                    <div className='btn-filt' onClick={handleVisb}>
                        <span>Ver todas as cores</span><Icon icon="prime:angle-down" className='ibtn' />
                    </div>

                )}
            </div>

            <div className='tam'>
                <div className="tit">
                    <Title name='Tamanhos' />
                    <Icon icon="prime:angle-down" height={30} style={{ color: "#666" }} onClick={() => setModalTam(!modalTam)} />
                </div>
                {modalTam &&
                    <div className='tamanho-filter tm-f'>
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
                    </div>}
            </div>

            <div className="precos">
                <div className="tit">
                    <Title name='Faixa de Preço' />
                    <Icon icon="prime:angle-down" height={30} style={{ color: "#666" }} onClick={() => setModalPrecos(!modalPrecos)} />
                </div>
                {modalPrecos &&
                    <>
                        <Checkbox
                            label='de R$0 até R$50'
                            name='opt1'
                            checked={select.opt1}
                            onChange={handleChange} />
                        <Checkbox
                            label='de R$51 até R$150'
                            name='opt2'
                            checked={select.opt2}
                            onChange={handleChange} />
                        <Checkbox
                            label='de R$151 até R$300'
                            name='opt3'
                            checked={select.opt3}
                            onChange={handleChange} />
                        <Checkbox
                            label='de R$301 até R$500'
                            name='opt4'
                            value='Cinza'
                            checked={select.opt4}
                            onChange={handleChange} />
                        <Checkbox
                            label='a partir de R$ 500'
                            name='opt5'
                            checked={select.opt5}
                            onChange={handleChange} />
                    </>
                }
            </div>
        </>
    )
}