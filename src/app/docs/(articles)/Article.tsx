import Link from 'next/link';

interface group {
  title: string;
  route: string;
  articles: Array<group | article>;
}

interface article {
  title: string;
  route: string;
}

export const Group = ({ title, route, articles }: group) => {
  return <details>
    <summary>{title}</summary>
    <nav>
      <ul>
        {
          articles.map((article) => {
            return <Article
              key={article.route}
              route={route + '/' + article.route}
              title={article.title}
            />;
          })
        }
      </ul>
    </nav>
  </details>;
};

export const Article = ({ title, route }: article) => {
  return <li>
    <Link href={`/docs/${route}`}>{title}</Link>
  </li>;
};