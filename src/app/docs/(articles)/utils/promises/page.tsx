import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eIsPromise } from './examples';

export const metadata = {
  title: 'Type Utilities - Handling Promise Types',
  description: 'Utility for evaluating if a specified type is a Promise in TypeScript. Learn about the `isPromise` function, which determines if the specified type is a Promise, returning true for Promise types and false otherwise.',
  keywords: 'Type Utilities, TypeScript, Promise types, type evaluation, isPromise, type utilities description',
};

export default () => {
  return <article>
    <h1>Type Utilities - Handling Promise Types</h1>
    <p>Utility for evaluating if a specified type is a Promise in TypeScript</p>
    <hr />

    <UtilArticle name="isPromise" example={eIsPromise}>
      Evaluates if the specified type is a Promise. Returns true for Promise types, false otherwise.
    </UtilArticle>

    <ArticleRecommendations links={[
      'numbers',
      'objects',
      'arrays',
      'hkt',
      'generals',
      'utils-description',
    ]} />
  </article>;
};