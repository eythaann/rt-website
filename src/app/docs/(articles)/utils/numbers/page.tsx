import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eIsNumber, eStrToNumber } from './examples';

export const metadata = {
  title: 'Readable Types - Number & Number Literals Utilities',
  description: 'Discover utilities for manipulating or validating number types in TypeScript with Readable Types. Learn about functions like `isNumber` and `strToNumber` to streamline your number-related type manipulations.',
  keywords: 'Readable Types, TypeScript, number utilities, number literals, isNumber, strToNumber',
};

export default () => {
  return <article>
    <h1>Number & Number Literals - Utils</h1>
    <p>Utils for manipulate or validate number types</p>
    <hr />

    <UtilArticle name="isNumber" example={eIsNumber}>
      Evaluates if the specified type is a string, any other type returns false.
    </UtilArticle>

    <UtilArticle name="strToNumber" example={eStrToNumber}>
      Converts a string representation of a number to a number type.
      If the input isn't a string representation of a number, the result is `never`.
    </UtilArticle>

    <ArticleRecommendations links={[
      'strings',
      'objects',
      'arrays',
      'hkt',
      'generals',
      'utils-description',
    ]} />
  </article>;
};