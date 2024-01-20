
import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eNewtype, eOpaque, eSoftOpaque } from './examples';

export const metadata = {
  title: 'Readable Types - Newtype & Opaque Types Utilities',
  description: 'Explore utilities for creating distinct types with structural identity in TypeScript with Readable Types. Learn about functions like `newtype`, `Opaque`, and `Soft Opaque` to ensure type safety by preventing accidental mixing of similar types.',
  keywords: 'Readable Types, TypeScript, newtype, opaque types, type safety, structural identity',
};

export default () => {
  return <article>
    <h1>Newtype & Opaque Types - Utils</h1>
    <p>
      Utilities for creating distinct types with structural identity, ensuring type safety by preventing
      accidental mixing of similar types.
    </p>
    <hr />

    <UtilArticle name="newtype" example={eNewtype}>
      Represents a newtype wrapper that creates a unique type based on an existing type.
      The newtype pattern is used to create distinct types that are structurally identical
      to another type, but are treated as separate types by the TypeScript type system.
      This is useful for adding type safety to your code by preventing accidental
      mixing of types that are structurally similar but conceptually different.
    </UtilArticle>

    <UtilArticle name="Opaque" example={eOpaque}>
      Creates an opaque type, ensuring that values of the base type cannot be
      directly assigned to the opaque type, and vice versa.

      An opaque type is a type that wraps around another type (the base type),
      adding a unique "brand" to differentiate it. This pattern is useful
      for creating distinct types that are based on the same underlying type.
    </UtilArticle>

    <UtilArticle name="Soft Opaque" example={eSoftOpaque}>
      Creates an brand type, ensuring that values of the base type cannot be
      directly assigned to the opaque type, but itseft is asignable to its base type.
    </UtilArticle>

    <ArticleRecommendations links={[
      'hkt',
      'objects',
      'math',
      'unknown',
      'strings',
      'numbers',
    ]} />
  </article>;
};