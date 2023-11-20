import { useState } from 'react'
import { Checkbox } from '../../CheckBox'
import { Title } from '../../Title'
import { Icon } from '@iconify/react';
import './styles.scss'
import { Product } from '../../../provider/Product';

export const Cores = () => {
    const [corSelec, setCorSelec] = useState<Product[]>([])
    const [check, setChek] = useState(null)
    //const filterItem = products.filter(data => data.color)


/**useEffect (() => {
}, []) */
const [visb, setVisb] = useState(false)
const [amarelo, setAmarelo] = useState(false);
const [azul, setAzul] = useState(false);
const [branco, setBranco] = useState(false);
const [cinza, setCinza] = useState(false);
const [laranja, setLaranja] = useState(false);
const [verde, setVerde] = useState(false);
const [vermelho, setVermelho] = useState(false);
const [preto, setPreto] = useState(false);
const [rosa, setRosa] = useState(false);
const [vinho, setVinho] = useState(false);

const handleVisb = () => {
    setVisb(!visb)
}

return (
    <div className="cores">
        <Title name='Cores' />
        <Checkbox
            label='Amarelo'
            name='cor1'
            select={amarelo}
            onChange={(event) => setAmarelo(event.target.checked)}
        />
        <Checkbox
            label='Azul'
            name='cor2'
            select={azul}
            onChange={(event) => setAzul(event.target.checked)}
        />
        <Checkbox
            label='Branco'
            name='cor3'
            select={branco}
            onChange={(event) => setBranco(event.target.checked)}
        />
        <Checkbox
            label='Cinza'
            name='cor4'
            select={cinza}
            onChange={(event) => setCinza(event.target.checked)}
        />
        <Checkbox
            label='Laranja'
            name='cor5'
            select={laranja}
            onChange={(event) => setLaranja(event.target.checked)}
        />
        {visb && (
            <>
                <Checkbox
                    label='Verde'
                    name='cor6'
                    select={verde}
                    onChange={(event) => setVerde(event.target.checked)}
                />

                <Checkbox
                    label='Vermelho'
                    name='cor7'
                    select={vermelho}
                    onChange={(event) => setVermelho(event.target.checked)}
                />
                <Checkbox
                    label='Preto'
                    name='cor8'
                    select={preto}
                    onChange={(event) => setPreto(event.target.checked)}
                />
                <Checkbox
                    label='Rosa'
                    name='cor9'
                    select={rosa}
                    onChange={(event) => setRosa(event.target.checked)}
                />
                <Checkbox
                    label='Vinho'
                    name='cor10'
                    select={vinho}
                    onChange={(event) => setVinho(event.target.checked)}
                />
            </>
        )}
        {visb ? (
            <div className='btn-filt' onClick={handleVisb}>
                <span>Ver todas as cores</span><Icon icon="prime:angle-up" className='ibtn' />
            </div>
        ) : (
            <div className='btn-filt' onClick={handleVisb}>
                <span>Ver todas as cores</span><Icon icon="prime:angle-down" className='ibtn' />
            </div>

        )}
    </div>
)
}