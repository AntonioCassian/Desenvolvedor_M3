import './styles.scss'
import { useState, useEffect } from 'react';
//import { Card } from "../../components/Card"
import { Filter } from "../../components/Filter"
import { Header } from "../../components/Header"
import { Order } from '../../components/Order'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer';
import { Product } from '../../provider/Product';
import { api } from '../../provider/api';

export const Home = () => {
    const [visible, setVisible] = useState(9)
    const [produtos, setProdutos] = useState<Product[]>([])
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
    }
    
    const handleMenorPreco = () => {
        const NewProd = [...produtos]
        NewProd.sort((a, b) => {
            return a.price < b.price ? -1 : 0;
        }
        );
        setProdutos(NewProd);
    }

    const handleMaiorPreco = () => {
        const NewProd = [...produtos]
        NewProd.sort((a, b) => {
            return b.price < a.price ? -1 : 0;
        }
        );
        setProdutos(NewProd);
    }


    const getData = async () => {
        await api.get(`/products`)
            .then((response) => {
                setProdutos(response.data)
            })
            .catch((err) => {
                alert(err)
            })
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <Header />
            <div className="container">
                <Order 
                recent={handleRecent} 
                precomenor={handleMenorPreco}
                precomaior={handleMaiorPreco}
                />
                <div className="home-div">
                    <aside>
                        <Filter />
                    </aside>
                    <main>
                        <section className='main-container'>
                            {produtos.slice(0, visible).map((data) => (
                                <div className="card" key={data.id}>
                                    <div className="card-img">
                                        <img src={data.image} />
                                    </div>
                                    <div className="description">
                                        <p className="name">{data.name}</p>

                                        <div className="valor">
                                            <p className="value">R$ {data.price}</p>
                                            <span className="parcela">até {data.parcelamento[0]} de R${data.parcelamento[1]}</span>
                                        </div>
                                    </div>
                                    <button className="btn">comprar</button>
                                </div >
                            ))}
                        </section >
                        <div className='main-btn'>
                            {visible < 14 ? (
                                <Button text="Carregar Mais" onClick={carregaMais} />
                            ) : (
                                <Button text="Carregar Menos" onClick={carregaMenos} />
                            )}
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}