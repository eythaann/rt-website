import { UtilArticle } from '../../../../../components/UtilArticle';
import { eIsNumber, eStrToNumber } from './examples';

export default () => {
  return <>
    <h1>Number & Number Literals - Utils</h1>
    <p>Utils for manipulate or validate number types</p>

    <UtilArticle name="isNumber" example={eIsNumber}>
      Evaluates if the specified type is a string, any other type returns false.
    </UtilArticle>

    <UtilArticle name="strToNumber" example={eStrToNumber}>
      Converts a string representation of a number to a number type.
      If the input isn't a string representation of a number, the result is `never`.
    </UtilArticle>
  </>;
};