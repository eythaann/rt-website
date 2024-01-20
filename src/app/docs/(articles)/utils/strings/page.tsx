import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eIsString, eJoin, eSplit, eSplitReverse, eStartsWith, eStringtify } from './examples';

export const metadata = {
  title: 'String & String Literals - Utils',
  description: 'Utilities for manipulating or validating string types in TypeScript. Learn about functions like `isString`, `stringtify`, `join`, `split`, `startsWith`, and more.',
  keywords: 'String utilities, TypeScript, string manipulation, string validation, isString, stringtify, join, split, startsWith, type utilities description',
};

export default () => {
  return <article>
    <h1>String & String Literals - Utils</h1>
    <p>Utils for manipulate or validate string types</p>
    <hr/>

    <UtilArticle name="isString" example={eIsString}>
      Evaluates if the specified type is a string, any other type returns false.
    </UtilArticle>

    <UtilArticle name="stringtify" example={eStringtify}>
      Is a TypeScript utility type that takes a value (T) and transforms it into a string representation.
      The input type T can be one of the following: string, number, bigint, boolean, null, or undefined.
      For object types, the result is always '[object Object]'.
    </UtilArticle>

    <UtilArticle name="join" example={eJoin}>
      Is a TypeScript utility type that takes a tuple (T) and transforms it into a string representation.
      The elements of the tuple can be any of the types accepted by `stringtify`. The result is a string
      that concatenates the stringified versions of the tuple elements.
    </UtilArticle>

    <UtilArticle name="split" example={eSplit}>
      Is a TypeScript utility type that takes a string (T) and transforms it into a tuple,
      where each element of the tuple is a character of the original string. The characters in the
      resulting tuple are in the same order as in the original string.
    </UtilArticle>

    <UtilArticle name="splitReverce" example={eSplitReverse}>
      Is a TypeScript utility type similar to `Split`, but the characters in the
      resulting tuple are in reverse order compared to the original string.
    </UtilArticle>

    <UtilArticle name="startsWith" example={eStartsWith}>
      Determines if a string type `T` starts with another string type `S`.
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