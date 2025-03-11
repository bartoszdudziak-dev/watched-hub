import { ReactNode } from 'react';
import Container from './Container';

type MainProps = { children: ReactNode };

function Main({ children }: MainProps) {
  return (
    <main className="py-10">
      <Container>{children}</Container>
    </main>
  );
}

export default Main;
