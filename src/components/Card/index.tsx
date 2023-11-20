import { useState, useEffect } from 'react';

import { api } from '../../provider/api';
import { Product } from '../../provider/Product';

import './styles.scss';

type Props = {
    produtos?: []
}
export const Card = ({ produtos }: Props) => {
    //const [produtos] = useState<Product[]>([])
    //const [visible, setVisible] = useState(9)


    return (
        <>
            <div className="card" key={produtos.id}>
                <div className="card-img">
                    <img src={produtos.image} />
                </div>
                <div className="description">
                    <p className="name">{produtos.name}</p>

                    <div className="valor">
                        <p className="value">R$ {produtos.price}</p>
                        <span className="parcela">até {produtos.parcelamento[0]} de R${produtos.parcelamento[1]}</span>
                    </div>
                </div>
                <button className="btn">comprar</button>
            </div >

        </>

    );
}