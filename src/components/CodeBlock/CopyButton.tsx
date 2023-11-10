'use client';
import { useState } from 'react';

import styles from './index.module.css';

export default ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const onCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };
  return <button className={styles.copy} onClick={onCopy}>{isCopied ? 'Copied' : 'Copy'}</button>;
};