import { ReactNode } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import '../styles/global.css';
import '../styles/reset.css';
import '../styles/variables.css';

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => {
  return <html lang="en">
    <body>
      <Header/>
      <div className="content">
        {children}
      </div>
      <Footer/>
    </body>
  </html>;
};