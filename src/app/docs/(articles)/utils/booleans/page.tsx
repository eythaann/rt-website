
import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eAnd, eIsBoolean, eIsFalse, eIsTrue, eNot, eOr, eXor } from './examples';

export default () => {
  return <article>
    <h1>Boolean Operations - Utils</h1>
    <p>Utilities for working with boolean types in TypeScript.</p>
    <hr />

    <UtilArticle name="isBoolean" example={eIsBoolean}>
      Evaluates if the specified type is a boolean.
    </UtilArticle>

    <UtilArticle name="isTrue" example={eIsTrue}>
      Evaluates if the specified type is `true`.
    </UtilArticle>

    <UtilArticle name="isFalse" example={eIsFalse}>
      Evaluates if the specified type is `false`.
    </UtilArticle>

    <UtilArticle name="And" example={eAnd}>
      Performs a logical AND operation on a tuple of boolean values.
    </UtilArticle>

    <UtilArticle name="Or" example={eOr}>
      Performs a logical OR operation on a tuple of boolean values.
    </UtilArticle>

    <UtilArticle name="Xor" example={eXor}>
      Performs a logical XOR operation on boolean values conditionally.
    </UtilArticle>

    <UtilArticle name="not" example={eNot}>
      Performs a logical NOT operation on a boolean value.
    </UtilArticle>

    <ArticleRecommendations links={[
      'comparison',
      'conditions',
      'hkt',
      'math',
      'numbers',
      'utils-description',
    ]} />
  </article>;
};