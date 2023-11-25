import { useState } from 'react';
import './styles.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Cores } from '../../Filter/Cores';
import { Tamanho } from '../../Filter/Tamanho';
import { Precos } from '../../Filter/Precos';

export const Filter = () => {
    const [close, setClose] = useState(true)
    const handleClose = () => {
        return setClose(!close)
    }
    return (
        <>
            {close &&
                <div className="modal">
                    <div className="header-modal">
                        <div className="resp">
                            <p>Filtrar</p>
                            <Icon icon="material-symbols:close" className='clos' onClick={handleClose} />
                        </div>
                    </div>
                    <ul className="list-ord">
                        <li className='it-ord'><Cores /></li>
                        <li className="it-ord"><Tamanho /></li>
                        <li className="it-ord"><Precos /></li>
                    </ul>
                    <div className='bts'>
                        <button className='btn1'>Aplicar</button>
                        <button className='btn2'>Limpar</button>
                    </div>
                </div>

            }
        </>
    )
}