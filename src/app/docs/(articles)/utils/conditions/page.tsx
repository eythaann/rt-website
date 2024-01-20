import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eIsNever } from './examples';

export default () => {
  return <article>
    <h1>'Never' Type Evaluation Utility</h1>
    <p>A TypeScript utility to evaluate if a specified type is exactly the 'never' type.</p>

    <UtilArticle name="isNever" example={eIsNever}>
      Evaluates if the specified type is exactly a 'never' type. Useful for understanding and debugging complex type interactions in TypeScript, especially in cases involving unions and conditional types.
    </UtilArticle>

    <ArticleRecommendations links={[
      'booleans',
      'comparison',
      'hkt',
      'math',
      'numbers',
      'utils',
    ]} />
  </article>;
};