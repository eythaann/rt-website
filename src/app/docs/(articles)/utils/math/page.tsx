import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eAdd, eSubstract } from './examples';

export default () => {
  return <article>
    <h1>Numeric Operations as Type Utilities</h1>
    <p>TypeScript utilities for performing basic arithmetic operations as type transformations.</p>

    <UtilArticle name="add" example={eAdd}>
      Takes two numeric literal types and produces their sum as a number literal type.
    </UtilArticle>

    <UtilArticle name="subtract" example={eSubstract}>
      Takes two numeric literal types and produces their subtraction as a number literal type.
    </UtilArticle>

    <ArticleRecommendations links={[
      'numbers',
      'conditions',
      'comparison',
      'hkt',
      'generals',
      'strings',
    ]} />
  </article>;
};