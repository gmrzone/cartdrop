import { NextPage } from 'next'
import { ReactNode } from 'react'

type MainLayoutProps = {
    children: ReactNode
}

const MainLayout: NextPage<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <header>

            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </>
    )
}

export default MainLayout