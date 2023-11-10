import CopyButton from './CopyButton';
import hljs from 'highlight.js';

import styles from './index.module.css';

interface Props {
  language?: 'typescript' | 'bash';
  code: string;
}

export default ({ language = 'typescript', code }: Props) => {
  const formatedCode = code.startsWith('\n') ? code.slice(1) : code;
  const highlightedCode = hljs.highlight(formatedCode, { language }).value;

  return <pre className={styles.codeContainer}>
    <CopyButton text={formatedCode}/>
    <code dangerouslySetInnerHTML={{ __html: highlightedCode }}/>
  </pre>;
};

