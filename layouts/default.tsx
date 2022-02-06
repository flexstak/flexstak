import { FC, PropsWithChildren } from 'react';
import Header, { HeaderProps } from './header';

export interface Props extends HeaderProps {
  //
}

const DefaultLayout: FC<PropsWithChildren<Props>> = ({
  children,
  ...props
}) => (
  <>
    <Header {...props} />
    {children}
  </>
);

export default DefaultLayout;
