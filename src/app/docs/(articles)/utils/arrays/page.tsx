import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import {
  eGetIndexes,
  eIsArray,
  eIsEmptyArray,
  eIsTuple,
  eObjectToTuple,
  ePop,
  ePopRecursive,
  eShift,
  eShiftRecursive,
  eTuple,
  eTupleIncludes,
  eUnionToTupleCombination,
} from './examples';

export default () => {
  return <article>
    <h1>Array & Tuple - Utils</h1>
    <p>Utilities for working with arrays and tuples in TypeScript.</p>
    <hr />

    <UtilArticle name="isArray" example={eIsArray}>
      Evaluates if the specified type is an array.
    </UtilArticle>

    <UtilArticle name="isEmptyArray" example={eIsEmptyArray}>
      A utility type that checks whether a given array is empty.
    </UtilArticle>

    <UtilArticle name="isTuple" example={eIsTuple}>
      Evaluates if the specified type is a tuple.
    </UtilArticle>

    <UtilArticle name="tupleIncludes" example={eTupleIncludes}>
      Checks if a tuple includes a specific type.
    </UtilArticle>

    <UtilArticle name="Tuple" example={eTuple}>
      Generates a tuple type with the specified length and type.
    </UtilArticle>

    <UtilArticle name="Shift" example={eShift}>
      Shifts the first element from a tuple.
    </UtilArticle>

    <UtilArticle name="Pop" example={ePop}>
      Pops the last element from a tuple.
    </UtilArticle>

    <UtilArticle name="ShiftRecursive" example={eShiftRecursive}>
      Recursively generates subsets of a tuple by successively excluding the first element.
    </UtilArticle>

    <UtilArticle name="PopRecursive" example={ePopRecursive}>
      Recursively generates subsets of a tuple by successively excluding the last element.
    </UtilArticle>

    <UtilArticle name="UnionToTupleCombination" example={eUnionToTupleCombination}>
      Converts a union into combinations of tuples.
    </UtilArticle>

    <UtilArticle name="getIndexes" example={eGetIndexes}>
      Extracts the indexes of a tuple type.
    </UtilArticle>

    <UtilArticle name="ObjectToTuple" example={eObjectToTuple}>
      Converts properties numbers of an object to a tuple.
    </UtilArticle>

    <ArticleRecommendations links={[
      'iterators',
      'objects',
      'hkt',
      'unknown',
      'strings',
      'numbers',
    ]} />
  </article>;
};