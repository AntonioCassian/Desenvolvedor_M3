import { useState} from 'react';
import { Icon } from '@iconify/react';
import "./styles.scss"

type Props = {
    recent?: () => void;
    precomenor?: () => void;
    precomaior?: () => void;
}
export const Order = ({recent, precomenor, precomaior}: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="tit-order">
            <div className="tit">Blusas</div>
            <div className="order">
                <div 
                onClick={() => setOpen(!open)}
                className="selected">
                    <span>Ordenar por: </span>
                    <Icon icon="prime:angle-down" className='icon-select' />
                </div>
                {open && (
                    <div className="content">
                        <ul className="options">
                            <li className="opt" onClick={recent}>Mais recentes</li>
                            <li className="opt" onClick={precomenor}>Menor preço</li>
                            <li className="opt" onClick={precomaior}>Maior preço</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}