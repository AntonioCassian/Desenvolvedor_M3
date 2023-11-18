import './styles.scss'
import { Card } from "../../components/Card"
import { Filter } from "../../components/Filter"
import { Header } from "../../components/Header"

export const Home = () => {
    return (
        <>
            <Header />
            <div className="container home-div">
                <aside>
                    <Filter />
                </aside>
                <main>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </main>
            </div>
        </>
    )
}