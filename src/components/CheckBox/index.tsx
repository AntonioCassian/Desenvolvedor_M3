import './styles.scss'

type Props = {
    label?: string;
    value?: string;
    select?: boolean;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox= ({select, onChange, label, value, name} :Props)  => {
    return (
        <>
                <div className='check-fiel' >
                    <input 
                    value={value}
                    name={name}
                    checked={select}
                    onChange={onChange}
                    id='chec' type="checkbox" />
                    <label htmlFor="chec">{label}</label>
                </div>
           
            
        </>
    )
}