import './styles.scss';
import Camisa from '../../assets/img/img_2.png'

export const Card = () => {
    return (
        <div className="card">
            <div className="card-img">
                <img src={Camisa} />
            </div>
            <div className="description">
                <p className="name">Camiseta Mescla</p>

                <div className="valor">
                    <p className="value">R$ 28,00</p>
                    <span className="parcela">até 3x de R$9,33</span>
                </div>
            </div>
            <button className="btn">comprar</button>
        </div>

    );
}