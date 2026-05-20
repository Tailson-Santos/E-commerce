import logo from '../logo.JPG'
import {Nav} from '../componentes/Nav'
import {Filtro} from '../componentes/Filtro'

export function Header(){
    return(
        <header className='flex justify-between items-center p-2 bg-[var(--color-secondary)]'>
            <div>
                <img src={logo} alt="logo-img" width={80}/>
            </div>
            <Filtro/>
            <Nav/>
            
        </header>
    )
}