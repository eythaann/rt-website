import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eTupleFind, eTupleMap, eTupleReduce, eUnionMap } from './examples';

export default () => {
  return <article>
    <h1>Tuple & Union Utilities</h1>
    <p>Utility types for manipulating tuples and union types in TypeScript.</p>
    <hr/>

    <UtilArticle name="TupleMap" example={eTupleMap}>
      Takes a tuple and a callback type and applies the callback to each item in the tuple, returning a new tuple with the results.
    </UtilArticle>

    <UtilArticle name="TupleReduce" example={eTupleReduce}>
      Takes a tuple, a callback type, and an initial accumulator value, and applies the callback to each item in the tuple, accumulating a result.
    </UtilArticle>

    <UtilArticle name="TupleFind" example={eTupleFind}>
      Takes a tuple and a callback type, and returns the first item in the tuple for which the callback returns `true`. If no such item is found, it returns `never`.
    </UtilArticle>

    <UtilArticle name="UnionMap" example={eUnionMap}>
      Takes a union type and a callback type, and applies the callback to each member of the union, resulting in a new union type of the results.
    </UtilArticle>

    <ArticleRecommendations links={[
      'arrays',
      'conditions',
      'comparison',
      'hkt',
      'generals',
      'utils-description',
    ]} />
  </article>;
};