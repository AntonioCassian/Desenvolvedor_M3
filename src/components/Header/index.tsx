import './styles.scss'
import Logo from '../../assets/img/logo-m3.png'
import { Icon } from '@iconify/react';

export function Header({count}: any) {
    return (
        <header className='header'>
            <div className='container-nav'>
                <img src={Logo} alt="Desenvolvedor-M3" />

                <div className='bagde'>
                    <Icon icon="game-icons:shopping-bag" className='icon' />
                    <div>
                        <span>{count}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}