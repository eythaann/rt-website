import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import {
  eCast,
  eDefaultOnNullable,
  eKeyof,
  eNoInfer,
  eUnionToIntersection,
  eValueof,
  eWaitFor,
} from './examples';

export const metadata = {
  title: 'Readable Types - Advanced Type Utilities',
  description: 'Explore advanced utilities for type manipulation in TypeScript with Readable Types. Learn about functions like `valueof`, `keyof`, `unionToIntersection`, `cast`, `noInfer`, `waitFor`, and `defaultOnNullable` to enhance your type manipulations.',
  keywords: 'Readable Types, TypeScript, advanced type utilities, valueof, keyof, unionToIntersection, cast, noInfer, waitFor, defaultOnNullable',
};

export default () => {
  return <article>
    <h1>Advanced Type Utilities - Utils</h1>
    <p>Advanced utilities for type manipulation in TypeScript.</p>
    <hr />

    <UtilArticle name="valueof" example={eValueof}>
      Extracts the types of the values of the properties of T.
    </UtilArticle>

    <UtilArticle name="keyof" example={eKeyof}>
      Improved `keyof` to support unions.
    </UtilArticle>

    <UtilArticle name="unionToIntersection" example={eUnionToIntersection}>
      Converts a union of object types into a single object type with keys being the union of all keys and values being the union of all values.
    </UtilArticle>

    <UtilArticle name="cast" example={eCast}>
      This can be used to assert that a certain type T is a subtype of another type U.
    </UtilArticle>

    <UtilArticle name="noInfer" example={eNoInfer}>
      Allows avoiding inference on generics when you predetermine a type in another context.
    </UtilArticle>

    <UtilArticle name="waitFor" example={eWaitFor}>
      Avoids execution of caching when creating an interface or type.
    </UtilArticle>

    <UtilArticle name="defaultOnNullable" example={eDefaultOnNullable}>
      A utility type that substitutes a default type when the provided type is `unknown`, `undefined`, or `null`.
    </UtilArticle>
    <ArticleRecommendations links={[
      'conditions',
      'iterators',
      'comparison',
      'hkt',
      'math',
      'utils-description',
    ]} />
  </article>;
};