import { NextPage } from 'next'

const SecondaryLayout: NextPage = ({ children }) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default SecondaryLayout