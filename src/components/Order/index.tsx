import React, { useState} from 'react';
import { Icon } from '@iconify/react';
import "./styles.scss"
export const Order = () => {
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
                            <li className="opt">Mais recentes</li>
                            <li className="opt">Menor preço</li>
                            <li className="opt">Maior preço</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}