import { useState } from 'react';
import './styles.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
import { FilterAside } from '../../Filter';

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
                    <div className="list-ord">
                    <FilterAside  />
                    <div className='bts'>
                        <button className='btn1' onClick={() => alert('Não funciona 😢')}>Aplicar</button>
                        <button className='btn1 btn2' onClick={() => alert('Não funciona 😢')}>Limpar</button>
                    </div>
                    </div>
                </div>

            }
        </>
    )
}