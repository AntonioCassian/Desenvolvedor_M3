import './styles.scss'
import { useState } from 'react';
import { Card } from "../../components/Card"
import { Filter } from "../../components/Filter"
import { Header } from "../../components/Header"
import { Order } from '../../components/Order'
import { Button } from '../../components/Button'

export const Home = () => {
    const [visible, setVisible] = useState(9)

    const carregaMais = () => {
        setVisible(visible + 3)
    }
    const carregaMenos = () => {
        setVisible(9)
    }
    return (
        <>
            <Header />
            <div className="container">
                <Order />
                <div className="home-div">
                    <aside>
                        <Filter />
                    </aside>
                    <main>
                        <section className='main-container'>
                            <Card visible={visible} />
                        </section>
                        <div className='main-btn'>
                            {visible < 14 ? (
                                <Button text="Carregar Mais" onClick={carregaMais} />
                            ) : (
                                <Button text="Carregar Menos" onClick={carregaMenos} />
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}