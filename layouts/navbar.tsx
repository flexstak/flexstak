import React from 'react';
import NextLink from 'next/link';

import { Container, Text, Link, Grid, useTheme } from '@nextui-org/react';
import { ThemeToggle, Flexstak } from '@/components';

export interface IProps {
  //
}

const Navbar: React.FC<React.PropsWithChildren<IProps>> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <nav className="navbar">
      <Container
        lg
        css={{
          paddingTop: '$8',
          paddingBottom: '$8',
          position: 'relative',
          zIndex: '9',
        }}
      >
        <Grid.Container justify="space-between" alignItems="center">
          <Grid>
            <NextLink href="/" passHref>
              <Link>
                <Grid.Container>
                  <Flexstak size={32} />
                  <Text
                    h3
                    weight="bold"
                    color={theme?.colors.accents8.value}
                    css={{ marginLeft: 12, lineHeight: 1.4 }}
                  >
                    Flexstak
                  </Text>
                </Grid.Container>
              </Link>
            </NextLink>
          </Grid>
          <Grid>
            <Grid.Container>
              <Grid css={{ margin: '0 0 0 16px' }}>
                <ThemeToggle />
              </Grid>
            </Grid.Container>
          </Grid>
        </Grid.Container>
      </Container>
    </nav>
  );
};

export default Navbar;
