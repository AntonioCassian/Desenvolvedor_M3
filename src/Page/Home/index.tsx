import './styles.scss'
import { Card } from "../../components/Card"
import { Filter } from "../../components/Filter"
import { Header } from "../../components/Header"
import { Order } from '../../components/Order'
import { Button } from '../../components/Button'

export const Home = () => {
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
                        <div className='main-container' >
                            <Card />
                        </div>
                        <Button />
                    </main>
                </div>
            </div>
        </>
    )
}