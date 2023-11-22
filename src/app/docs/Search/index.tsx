import { useState } from 'react';

import { Input } from '../../../components/Input';
import articles from '../(articles)/articles.json';
import Link from 'next/link';

import styles from './index.module.css';

interface Data {
  url: string;
  label: string;
  subContent: string[];
}

const getDataFromHtml = async (route: string): Promise<Data> => {
  const url = 'http://localhost:3000' + '/docs/' + route ;
  try {
    const response = await fetch(url);
    const html = await response.text();
    const mainHtml = html.slice(html.indexOf('<main'), html.lastIndexOf('</main>'));

    return {
      url: '/docs/' + route,
      label: mainHtml.match(/<h1(.*?)<\/h1>/g)?.[0].replaceAll(/<\/?h1(.*?)>/g, '') || '',
      subContent: (mainHtml.match(/<h2(.*?)<\/h2>/g) || []).map((v) => v.replaceAll(/<\/?h2(.*?)>/g, '')),
    };
  } catch (e) {
    console.error(e);
    return {
      url: '/docs/' + route,
      label: '',
      subContent: [],
    };
  }
};

const fetchData = async () => {
  const promises: ReturnType<typeof getDataFromHtml>[] = [];

  articles.forEach((group) => {
    group.articles.forEach((article) => {
      promises.push(getDataFromHtml(group.route + '/' + article.route));
    });
  });

  return await Promise.all(promises);
};

export const SearchOnDocumentation = () => {
  const [searched, setSearched] = useState('');
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Data[]>([]);

  const onSearch = (value: string) => {
    setSearched(value);
  };

  const openModal = async () => {
    setOpen(true);
    if (!data.length) {
      setData(await fetchData());
    }
  };

  const closeModal = () => {
    setOpen(false);
  };

  return <div>
    <Input type="search" placeholder="🔍 Search" onClick={openModal}/>
    {open && <div className={styles.backdrop} onClick={closeModal}/>}
    <dialog className={styles.modal} open={open}>
      <Input type="search" value={searched} onChange={onSearch} placeholder="🔍 Search"/>
      <div>
        {data.map(({ label: title, subContent, url }) => {
          return <div>
            <Link
              onClick={closeModal}
              href={url}
              className={styles.mainTitle}
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div className={styles.anchors}>
              {subContent.map((label) => {
                return <Link
                  onClick={closeModal}
                  href={url + '#' + label}
                  dangerouslySetInnerHTML={{ __html: label }}
                />;
              })}
            </div>
          </div>;
        })}
      </div>
    </dialog>
  </div>;
};