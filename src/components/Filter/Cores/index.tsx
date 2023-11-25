/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Checkbox } from '../../CheckBox'
import { Title } from '../../Title'
import { Icon } from '@iconify/react';
import './styles.scss'
import { Product } from '../../../provider/Product';


export const Cores = ({ onCorFilter }: any) => {
    const [visb, setVisb] = useState(false)
    const [modal, setModal] = useState(false)
    const [corFiltrated, setCorFiltrated] = useState<Product[]>([])
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
    });

    const handleResize = () => {
        if (window.innerWidth >= 375) {
            setVisb(true);
            setModal(true)
        } else {
            setVisb(false);
            setModal(false)
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');
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
                        (select.Vinho && data.color === "Vinho")
                    ) {
                        return true;
                    }
                    return false;
                });

                setCorFiltrated(filtered);
                onCorFilter(filtered);


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
        console.log({ name, checked })
    }

    const handleVisb = () => {
        setVisb(!visb)
    }

    return (
        <div className="cores">
            <div className="tit">
                <Title name='Cores' />
                <Icon icon="prime:angle-down" height={30} style={{ color: "#666" }}  onClick={() => setModal(!modal)}/>
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
    )
}