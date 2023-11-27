import { useState } from 'react';
import './styles.scss';
import { Icon } from '@iconify/react/dist/iconify.js';

type Props = {
    recent: () => void;
    precomenor: () => void;
    precomaior: () => void;
}

export const Ord = ({ recent, precomenor, precomaior }: Props) => {
    const [close, setClose] = useState(true)
    const handleClose = () => {
        return setClose(!close)
    }
    return (
        <>
            {close && (
                <div className='modal'>
                    <div className="header-modal">
                        <div className="resp">
                            <p>Ordenar</p>
                            <Icon icon="material-symbols:close" className='clos' onClick={handleClose} />
                        </div>
                    </div>
                    <ul className="list-ord">
                        <li className="it-ord" onClick={recent}>Mais recentes</li>
                        <li className="it-ord" onClick={precomenor}>Menor preço</li>
                        <li className="it-ord" onClick={precomaior}>Maior preço</li>
                    </ul>
                </div>
            )}
        </>
    )
}