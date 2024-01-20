
import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eEquals, eIsSubtype, eIsSupertype } from './examples';

export const metadata = {
  title: 'Readable Types - Type Comparison Utils',
  description: 'Discover utilities for comparing types in TypeScript with Readable Types. Learn about functions like `equals`, `isSupertype`, and `isSubtype` to enhance your type comparison operations.',
  keywords: 'Readable Types, TypeScript, type comparison, equals, isSupertype, isSubtype',
};

export default () => {
  return <article>
    <h1>Type Comparison - Utils</h1>
    <p>Utilities for comparing types in TypeScript.</p>
    <hr />

    <UtilArticle name="equals" example={eEquals}>
      Determines if two types are equal.
    </UtilArticle>

    <UtilArticle name="isSupertype" example={eIsSupertype}>
      Determines if type A is a supertype of type B.
    </UtilArticle>

    <UtilArticle name="isSubtype" example={eIsSubtype}>
      Determines if type A is a subtype of type B.
    </UtilArticle>

    <ArticleRecommendations links={[
      'booleans',
      'conditions',
      'hkt',
      'math',
      'numbers',
      'utils-description',
    ]} />
  </article>;
};