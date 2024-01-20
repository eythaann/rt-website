
import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eEquals, eIsSubtype, eIsSupertype } from './examples';

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