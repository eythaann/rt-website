import { PropsWithChildren } from 'react';

import CodeBlock from '../CodeBlock';

interface Props {
  name: string;
  example: string;
}

export const UtilArticle = ({ children, example, name }: PropsWithChildren<Props>) => {
  return <article id={name}>
    <h2>{name}</h2>
    <p>{children}</p>
    <CodeBlock code={example} />
  </article>;
};