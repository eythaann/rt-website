import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eDefaultOnUnknown, eIsUnknown } from './examples';

export const metadata = {
  title: 'Type Utilities - Handling Unknown Types',
  description: 'Utilities for handling and transforming \'unknown\' types in TypeScript. Explore functions like `isUnknown` and `defaultOnUnknown` to work with unknown types effectively.',
  keywords: 'Type utilities, TypeScript, unknown type, type handling, isUnknown, defaultOnUnknown, type utilities description',
};

export default () => {
  return <article>
    <h1>Type Utilities - Handling Unknown Types</h1>
    <p>Utilities for handling and transforming 'unknown' types in TypeScript</p>
    <hr />

    <UtilArticle name="isUnknown" example={eIsUnknown}>
      Evaluates if the specified type is \`unknown\`. Returns true only for unknown type.
    </UtilArticle>

    <UtilArticle name="defaultOnUnknown" example={eDefaultOnUnknown}>
      Substitutes a default type when the provided type is unknown.
    </UtilArticle>

    <ArticleRecommendations links={[
      'any',
      'never',
      'undefined',
      'hkt',
      'generals',
      'objects',
    ]} />
  </article>;
};