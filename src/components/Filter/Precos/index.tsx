import { useState } from 'react';
import { Checkbox } from '../../CheckBox'
import './styles.scss'

export const Precos = () => {
    const [select, setSelect] = useState(false)
    return (
        <Checkbox
            label='Vinho'
            select={select}
            onChange={(event) => setSelect(event.target.checked)}
        />
    )
}