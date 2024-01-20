import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eDefaultOnAny, eIsAny } from './examples';

export const metadata = {
  title: 'Readable Types - Any Type Utils',
  description: 'Explore utilities for handling the `any` type in TypeScript with Readable Types. Learn about functions like `isAny` and `defaultOnAny` to streamline your code when working with the `any` type.',
  keywords: 'Readable Types, TypeScript, any type, utility functions, isAny, defaultOnAny',
};

export default () => {
  return <article>
    <h1>Any Type - Utils</h1>
    <p>Utilities for handling the `any` type in TypeScript.</p>
    <hr />

    <UtilArticle name="isAny" example={eIsAny}>
      Evaluates if the specified type is `any`.
    </UtilArticle>

    <UtilArticle name="defaultOnAny" example={eDefaultOnAny}>
      A utility type that substitutes a default type when the provided type is `any`.
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