import { FC, PropsWithChildren } from 'react';
import Header, { HeaderProps } from './header';
import Navbar from './navbar';

export interface Props extends HeaderProps {
  //
}

const DefaultLayout: FC<PropsWithChildren<Props>> = ({
  children,
  ...props
}) => (
  <>
    <Header {...props} />
    <Navbar />
    {children}
  </>
);

export default DefaultLayout;
