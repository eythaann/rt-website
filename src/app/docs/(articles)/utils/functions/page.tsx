import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eIsFunction } from './examples';

export const metadata = {
  title: 'Readable Types - Function Type Check Utils',
  description: 'Discover utilities for checking if a type is a function in TypeScript with Readable Types. Learn about functions like `isFunction` to streamline your type checks for functions.',
  keywords: 'Readable Types, TypeScript, function type utilities, isFunction',
};

export default () => {
  return <article>
    <h1>Function Type Check - Utils</h1>
    <p>Utilities for checking if a type is a function in TypeScript.</p>
    <hr />

    <UtilArticle name="isFunction" example={eIsFunction}>
      Evaluates if the specified type is a function.
    </UtilArticle>

    <ArticleRecommendations links={[
      'booleans',
      'iterators',
      'comparison',
      'hkt',
      'generals',
      'utils-description',
    ]} />
  </article>;
};