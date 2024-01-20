import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eAdd, eSubstract } from './examples';

export const metadata = {
  title: 'Readable Types - Numeric Operations as Type Utilities',
  description: 'Discover TypeScript utilities for performing basic arithmetic operations as type transformations with Readable Types. Learn about functions like `add` and `subtract` to enhance your type manipulations involving numeric literals.',
  keywords: 'Readable Types, TypeScript, numeric operations, arithmetic operations, type transformations, numeric literals',
};

export default () => {
  return <article>
    <h1>Numeric Operations as Type Utilities</h1>
    <p>TypeScript utilities for performing basic arithmetic operations as type transformations.</p>
    <hr />

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