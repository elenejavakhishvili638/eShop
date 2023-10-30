import { ReactNode } from 'react'
import Navbar from './Navbar'
import "./Layout.css"

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className='main'>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout