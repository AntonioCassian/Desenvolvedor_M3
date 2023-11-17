import './styles.scss'
interface title {
    name: string;
}

export const Title = (prop: title) => {
    return(
        <div className='title'>
            {prop.name}
        </div>
    )
}