import { ReactNode } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import '../styles/variables.css';
import '../styles/reset.css';
import '../styles/global.css';
import 'highlight.js/styles/github-dark.css';

interface Props {
  children: ReactNode;
}

export default (props: Props) => {
  return <html lang="en">
    <body>
      <Header />
      {props.children}
      <Footer/>
    </body>
  </html>;
};