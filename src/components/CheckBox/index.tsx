import './styles.scss'
import { Icon } from '@iconify/react';



import { cores } from '../Filter';


export const Checkbox = () => {
    return (
        <>
            {cores.map((cor) => (
                <div className='check-fiel' key={cor.id}>
                    <input id='chec' type="checkbox" />
                    <label htmlFor="chec">{cor.color}</label>
                </div>
            ))}
            <div className='btn-filt'>
                <span>Ver todas as cores</span><Icon icon="prime:angle-down" className='ibtn' />
            </div>
        </>
    )
}