import articles from '../../app/docs/(articles)/articles.json';

interface PromotionLink {
  route: string;
  title: string;
  description: string;
}

const getUtilLink = (util: string) => ({
  title: `${util} type utils`,
  description: 'Useful utilities for manipulating certain types.',
  route: `/docs/utils/${util}`,
});

const _links = [
  {
    title: 'What is Readable-Types',
    description: 'Know more about the library.',
    route: '/docs',
  },
  {
    title: 'Getting Started',
    description: 'Learn how use Readable-types utils.',
    route: '/docs/introduction/getting-started',
  },
  {
    title: 'Start Testing',
    description: 'Learn how test your utils with Readable Tests for Types.',
    route: '/docs/introduction/testing',
  },
  {
    title: 'Config File',
    description: 'Configure the library using rt.config.ts file.',
    route: '/docs/api/config',
  },
  {
    title: 'Enable inline errors',
    description: 'Enable inline editor errors using a typescript plugin.',
    route: '/docs/api/plugin',
  },
  {
    title: 'Using utils',
    description: 'Start using a exautive tested library for make your types.',
    route: '/docs/features/utils-description',
  },
  {
    title: 'High Order Types',
    description: 'Learn a easy way to work with HKT in typescript!.',
    route: '/docs/features/hkt',
  },

  //utils
  ...articles.find((group) => group.route === 'utils')!.articles.map((article) => getUtilLink(article.route)),
] as const satisfies PromotionLink[];

export const RecommendedLinksObj = _links.reduce((obj, link) => {
  obj[link.route.split('/').at(-1)!] = link;
  return obj;
}, {} as Record<string, PromotionLink>);

type getLastPath<T> = T extends `${string}/${infer X}` ? getLastPath<X> : T;
export type RecommendedLinks = getLastPath<typeof _links[number]['route']>;