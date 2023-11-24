import { useState } from 'react';
import { Checkbox } from '../../CheckBox'
import './styles.scss'

export const Precos = () => {
    const [select, setSelect] = useState(false)
    return (
        <Checkbox
            label='de R$0 até R$150'
            
            onChange={(event) => setSelect(event.target.checked)}
        />
    )
}