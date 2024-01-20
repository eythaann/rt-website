import { ArticleRecommendations } from '../../../../../components/Recomendations';

export const metadata = {
  title: 'Readable Types - Know more about the Utils',
  description: 'Explore a diverse set of utilities in Readable Types optimized for developing larger and more complex types. These utilities have undergone exhaustive testing to ensure high-quality performance across various edge cases.',
  keywords: 'Readable Types, TypeScript, utilities, development, testing, larger types, complex types',
};

export default () => {
  return <article>
    <h1 id="main-content-heading">Know more about the Utils</h1>
    <p>
      The diverse set of utilities included in this library is optimized for use in the development
      of larger and more complex types. Additionally, they have undergone exhaustive testing,
      ensuring high-quality performance across various edge cases.
    </p>

    <ArticleRecommendations links={[
      'hkt',
      'objects',
      'math',
      'unknown',
      'strings',
      'numbers',
    ]} />
  </article>;
};