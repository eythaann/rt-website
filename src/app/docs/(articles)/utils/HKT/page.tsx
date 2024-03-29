import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import { eArgs, eBind, eCall } from './examples';

export const metadata = {
  title: 'Readable Types - HKT Utils',
  description: 'Discover utilities for emulating function calls at the type level for High Kinded Types (HKTs) in TypeScript with Readable Types. Learn about functions like `call`, `args`, and `bind` to enable advanced type-level computations and transformations.',
  keywords: 'Readable Types, TypeScript, HKT, Call, Args, Bind, type-level computations, type-level transformations',
};

export default () => {
  return <article>
    <h1>Call & Args & Bind - HKT Utils</h1>
    <p>
      Utilities for emulating function calls at the type level for High Kinded Types (HKTs) in TypeScript.
      These utilities enable advanced type-level computations and transformations.
    </p>
    <hr />

    <UtilArticle name="call" example={eCall}>
      Emulates the behavior of calling an HKT with a set of arguments, extracting the return type of the HKT.
    </UtilArticle>

    <UtilArticle name="args" example={eArgs}>
      Extracts the argument types from a High Kinded Type.
    </UtilArticle>

    <UtilArticle name="bind" example={eBind}>
      Binds a set of arguments to a High Kinded Type, enabling the creation of partially applied type constructors.
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