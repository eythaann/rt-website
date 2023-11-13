import { UtilArticle } from '../../../../../components/UtilArticle';
import { eDefaultOnUnknown, eIsUnknown } from './examples';

export default () => {
  return <>
    <h1>Type Utilities - Handling Unknown Types</h1>
    <p>Utilities for handling and transforming 'unknown' types in TypeScript</p>

    <UtilArticle name="isUnknown" example={eIsUnknown}>
      Evaluates if the specified type is \`unknown\`. Returns true only for unknown type.
    </UtilArticle>

    <UtilArticle name="defaultOnUnknown" example={eDefaultOnUnknown}>
      Substitutes a default type when the provided type is unknown.
    </UtilArticle>
  </>;
};