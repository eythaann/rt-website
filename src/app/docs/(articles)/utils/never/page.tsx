import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eIsNever } from './examples';

export const metadata = {
  title: 'Readable Types - "Never" Type Evaluation Utility',
  description: 'Learn about a TypeScript utility to evaluate if a specified type is exactly the "never" type with Readable Types. Useful for understanding and debugging complex type interactions in TypeScript, especially in cases involving unions and conditional types.',
  keywords: 'Readable Types, TypeScript, never type, type evaluation, debugging, complex types',
};

export default () => {
  return <article>
    <h1>'Never' Type Evaluation Utility</h1>
    <p>A TypeScript utility to evaluate if a specified type is exactly the 'never' type.</p>
    <hr />

    <UtilArticle name="isNever" example={eIsNever}>
      Evaluates if the specified type is exactly a 'never' type. Useful for understanding and debugging complex type interactions in TypeScript, especially in cases involving unions and conditional types.
    </UtilArticle>

    <ArticleRecommendations links={[
      'any',
      'unknown',
      'comparison',
      'hkt',
      'generals',
      'objects',
    ]} />
  </article>;
};