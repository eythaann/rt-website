import { ChangeEvent } from 'react';

import styles from './index.module.css';

interface Props {
  value?: string;
  type?: 'text' | 'search';
  placeholder?: string;
  onChange?: (v: string) => void;
  onClick?: () => void;
}

export function Input({
  value,
  type = 'text',
  onChange: onExternalChange,
  placeholder = 'Write here...',
  onClick,
}: Props) {
  const onInternalChange = (e: ChangeEvent<HTMLInputElement>) => {
    onExternalChange?.(e.target.value || '');
  };

  return <input
    type={type}
    onChange={onInternalChange}
    className={styles.input}
    value={value}
    placeholder={placeholder}
    onClick={onClick}
  />;
}