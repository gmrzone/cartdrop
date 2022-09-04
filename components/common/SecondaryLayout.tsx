import { NextPage } from 'next';
import { ReactNode } from 'react';

type SecondaryLayoutProps = {
    children: ReactNode;
};
const SecondaryLayout: NextPage<SecondaryLayoutProps> = ({ children }) => {
    return <main className="h-full">{children}</main>;
};

export default SecondaryLayout;
