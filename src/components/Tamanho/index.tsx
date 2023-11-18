import './styles.scss'
const Tam = [
    { 'id': 1, 'sel': 'P' },
    { 'id': 2, 'sel': 'M' },
    { 'id': 3, 'sel': 'G' },
    { 'id': 4, 'sel': 'GG' },
    { 'id': 5, 'sel': 'U' },
    { 'id': 6, 'sel': 36 },
    { 'id': 7, 'sel': 38 },
    { 'id': 8, 'sel': 40 },
]
export const Tamanho = () => {
    return (
        <div className='tamanho-filter'>
            {Tam.map((sel) => (
                <div key={sel.id} className='tamanho'>
                    <p>{sel.sel}</p>
                </div>
            ))
            }
        </div>
    )
}