import { UtilArticle } from '../../../../../components/UtilArticle';
import { eIsPromise } from './examples';

export default () => {
  return <>
    <h1>Type Utilities - Handling Promise Types</h1>
    <p>Utility for evaluating if a specified type is a Promise in TypeScript</p>

    <UtilArticle name="isPromise" example={eIsPromise}>
      Evaluates if the specified type is a Promise. Returns true for Promise types, false otherwise.
    </UtilArticle>
  </>;
};