
import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eIf } from './examples';

export default () => {
  return <article>
    <h1>Conditional Types - Utils</h1>
    <p>Utilities for creating conditional types in TypeScript.</p>
    <hr />

    <UtilArticle name="$if" example={eIf}>
      Conditional type that selects one of two possible types based on a boolean condition or a condition object.
      The way as you declare condition can be changed in your rt.config.ts file
    </UtilArticle>

    <ArticleRecommendations links={[
      'booleans',
      'comparison',
      'hkt',
      'math',
      'numbers',
      'utils-description',
    ]} />
  </article>;
};