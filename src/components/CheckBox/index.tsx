import './styles.scss'

type Props = {
    label?: string;
    value?: string;
    checked?: boolean;
    name: string;
    onChange: (event: any) => void;
}

export const Checkbox= ({checked, onChange, label, value, name} :Props)  => {
    return (
        <>
                <div className='check-fiel' >
                    <input 
                    value={value}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    id='chec' type="checkbox" />
                    <label htmlFor="chec">{label}</label>
                </div>
           
            
        </>
    )
}