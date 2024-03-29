
import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eDefaultOnUndefined, eIsNull, eIsUndefined, eNonNull, eNonUndefined } from './examples';

export const metadata = {
  title: 'Type Utilities - Handling Null and Undefined',
  description: 'Utilities for handling and transforming null and undefined types in TypeScript. Learn about functions like `isUndefined`, `isNull`, `nonUndefined`, `nonNull`, `defaultOnUndefined`, and more.',
  keywords: 'Type utilities, TypeScript, null, undefined, type handling, isUndefined, isNull, nonUndefined, nonNull, defaultOnUndefined, type utilities description',
};

export default () => {
  return <article>
    <h1>Type Utilities - Handling Null and Undefined</h1>
    <p>Utilities for handling and transforming null and undefined types in TypeScript</p>
    <hr />

    <UtilArticle name="isUndefined" example={eIsUndefined}>
      Evaluates if the specified type is `undefined`. Returns true only for undefined type.
    </UtilArticle>

    <UtilArticle name="isNull" example={eIsNull}>
      Evaluates if the specified type is `null`. Returns true only for null type.
    </UtilArticle>

    <UtilArticle name="nonUndefined" example={eNonUndefined}>
      Removes `undefined` from a type, resulting in a non-undefined type.
    </UtilArticle>

    <UtilArticle name="nonNull" example={eNonNull}>
      Removes `null` from a type, resulting in a non-null type.
    </UtilArticle>

    <UtilArticle name="defaultOnUndefined" example={eDefaultOnUndefined}>
      Substitutes a default type when the provided type is undefined.
    </UtilArticle>

    <ArticleRecommendations links={[
      'any',
      'never',
      'unknown',
      'hkt',
      'generals',
      'objects',
    ]} />
  </article>;
};