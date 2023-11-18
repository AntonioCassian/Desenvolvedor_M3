import { useState, useEffect } from 'react';

import { api } from '../../provider/api';
import { Product } from '../../provider/Product';

import './styles.scss';

export const Card = () => {
    const [produtos, setProdutos] = useState<Product []>([])

    const getData = async () => {
         await api.get('/products')
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
        {produtos.map((data) => (

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
        </>

    );
}