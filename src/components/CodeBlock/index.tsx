import CopyButton from './CopyButton';
import hljs from 'highlight.js';

import styles from './index.module.scss';

interface Props {
  language?: 'typescript' | 'bash' | 'json';
  code: string;
}

export default ({ language = 'typescript', code }: Props) => {
  const formatedCode = code.startsWith('\n') ? code.slice(1) : code;
  const highlightedCode = hljs.highlight(formatedCode, { language }).value;

  return <pre className={styles.codeContainer}>
    <CopyButton text={formatedCode}/>
    <div className={styles.scroll}>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }}/>
    </div>
  </pre>;
};

