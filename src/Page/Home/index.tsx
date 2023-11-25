import './styles.scss'
import { useState, useEffect } from 'react';
//import { Card } from "../../components/Card"
//import { Filter } from "../../components/Filter"
import { Header } from "../../components/Header"
import { Order } from '../../components/Order'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer';
import { Product } from '../../provider/Product';
import { api } from '../../provider/api';
import { Modal } from '../../components/Modal';
import { Cores } from '../../components/Filter/Cores';
import { Tamanho } from '../../components/Filter/Tamanho';
import { Precos } from '../../components/Filter/Precos';


export const Home = () => {
    const [visible, setVisible] = useState(9)
    const [modal, setModal] = useState(false);
    const [produtos, setProdutos] = useState<Product[]>([])
    const [filt, setFilt] = useState<Product[]>([])
    const [count, setCount] = useState(0)

    const handleCarrinho = () => {
        setCount(count + 1)
    }

    const carregaMais = () => {
        setVisible(visible + 3)
    }
    const carregaMenos = () => {
        setVisible(9)
    }

    const handleRecent = () => {
        const NewProd = [...produtos]
        NewProd.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        }
        );
        setProdutos(NewProd);
        if (NewProd) setModal(false)


    }

    const handleMenorPreco = () => {
        const NewProd = [...produtos]
        NewProd.sort((a, b) => {
            return a.price < b.price ? -1 : 0;
        }
        );
        setProdutos(NewProd);
        if (NewProd) setModal(false)

    }

    const handleMaiorPreco = () => {
        const NewProd = [...produtos]
        NewProd.sort((a, b) => {
            return b.price < a.price ? -1 : 0;
        }
        );
        setProdutos(NewProd);
        if (NewProd) setModal(false)
    }

    const getData = async () => {
        await api.get(`/products`)
            .then((response) => {
                setProdutos(response.data)
                setFilt(response.data)
            })
            .catch((err) => {
                alert(err)
            })
    }
    useEffect(() => {
        getData();
    }, []);

    //Filtrando pela cor 
    const handleFilter = (corFiltrated: Product[], sizFiltrated: Product[]) => {
        setFilt(corFiltrated)
        if(corFiltrated) {
            setFilt([...sizFiltrated])
        }
    }

    //Filtrando pelo tamanho
    const handleSiz = (sizFiltrated: Product[]) => {
        setFilt(sizFiltrated)
    }

    //Filtrando pelo preço
    const handlePrice = (priceFilter: Product[]) => {
        setFilt(priceFilter)
    }

    return (
        <>
            <Header count={count}/>
            <div className="container">
                {modal &&
                    <Modal
                        recent={handleRecent}
                        precomenor={handleMenorPreco}
                        precomaior={handleMaiorPreco} />
                }
                <Order
                    recent={handleRecent}
                    precomenor={handleMenorPreco}
                    precomaior={handleMaiorPreco}
                />
                <div className='fit-cont'>
                    <div className='ft-ct'>Filtrar</div>
                    <div className="vrt"></div>
                    <div className='ft-ct' onClick={() => setModal(!modal)}>Ordenar</div>
                </div>
                <div className="home-div">
                    <aside>
                        <Cores onCorFilter={handleFilter} />
                        <Tamanho onSizeFilter={handleSiz} />
                        <Precos onPrice={handlePrice} />
                    </aside>
                    <main>
                        {filt.length > 0 ? (
                            <>
                            <section className='main-container'>
                                {filt.map((data) => (
                                    <div className="card" key={data.id}>
                                        <div className="card-img">
                                            <img src={data.image} />
                                        </div>
                                        <div className="description">
                                            <p className="name">{data.name}</p>

                                            <div className="valor">
                                                <p className="value">R$ {data.price.toFixed(2).replace('.',',')}</p>
                                                <span className="parcela">até {data.parcelamento[0]} de R${data.parcelamento[1].toFixed(2).replace('.',',')}</span>
                                            </div>
                                        </div>
                                        <button className="btn" onClick={handleCarrinho}>comprar</button>
                                    </div>
                                ))}
                            </section>
                                <div className='main-btn'>
                                    {visible < 14 ? (
                                        <Button text="Carregar Mais" onClick={carregaMais} />
                                    ) : (
                                        <Button text="Carregar Menos" onClick={carregaMenos} />
                                    )}
                                </div>
                            </>
                        ) : (
                            <section className='main-container'>
                                {produtos.slice(0, visible).map((data) => (
                                    <div className="card" key={data.id}>
                                        <div className="card-img">
                                            <img src={data.image} />
                                        </div>
                                        <div className="description">
                                            <p className="name">{data.name}</p>

                                            <div className="valor">
                                                <p className="value">R$ {data.price.toFixed(2).replace('.',',')}</p>
                                                <span className="parcela">até {data.parcelamento[0]} de R${data.parcelamento[1].toFixed(2).replace('.',',')}</span>
                                            </div>
                                        </div>
                                        <button className="btn" onClick={handleCarrinho} id={data.id}>comprar</button>
                                    </div >
                                ))
                                }

                            </section >
                        )
                        }
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}