import CodeBlock from '../../../../../components/CodeBlock';
import { ArticleRecommendations } from '../../../../../components/Recomendations';
import Link from 'next/link';

const example = `
import { isString } from 'readable-types'

type A<T> = If<isString<T>, {
  then: number;
  else: string;
}>

type B = A<string> // B is number
`;

export const metadata = {
  title: 'Readable Types - Getting Started',
  description: 'Learn how to get started with Readable Types, a TypeScript utility library that makes type manipulations and computations more intuitive and easier to read. Follow the instructions for installation, usage, and explore examples to enhance your TypeScript projects.',
  keywords: 'Readable Types, TypeScript, utility library, type manipulations, type computations, installation, usage, examples',
};

export default () => {
  return <article>
    <h1>Getting Started with Readable Types</h1>
    <p>Welcome to Readable Types, a TypeScript utility library that makes type manipulations and computations more intuitive and easier to read. Follow the instructions below to get started.</p>
    <hr/>

    <section>
      <h2>Installation</h2>
      <p>To install Readable Types, you can use npm (Node Package Manager). Run the following command in your project directory:</p>
      <CodeBlock language="bash" code={'npm install --save-dev readable-types'} />
    </section>

    <section>
      <h2>Usage</h2>
      <p>After installation, you can start using Readable Types in your TypeScript project. Import the types you need into your TypeScript file:</p>
      <CodeBlock language="typescript" code={'import { TypeHere } from \'readable-types\';'} />
      <p>Replace <code>TypeHere</code> with the specific type utility you want to use.</p>
    </section>

    <section>
      <h2>Examples</h2>
      <p>Here are some examples of how to use Readable Types:</p>
      <CodeBlock language="typescript" code={example} />
    </section>

    <section>
      <h2>Next Steps</h2>
      <p>Now that you have started with Readable Types, explore more advanced features and capabilities to enhance your TypeScript projects:</p>
      <ul>
        <li><p><a href="/docs/features/opaque">Opaque Types</a>: Discover how Opaque Types can enhance type safety in your TypeScript code, allowing for more precise and robust type definitions.</p></li>
        <li><p><a href="/docs/features/hkt">High Order Types</a>: Understand the power of High Order Types in creating flexible and reusable type abstractions, simplifying complex type logic in your projects.</p></li>
        <li><p><a href="/docs/features/optics">Optics</a>: Learn about Optics and how they provide a more declarative way to handle immutable data structures, making your type manipulations more intuitive and efficient.</p></li>
      </ul>
      <p>
        Additionally, a crucial next step in mastering Readable Types is to learn how to effectively
        test types. Testing types ensures your type manipulations behave as expected and can significantly
        improve the reliability of your TypeScript code.
      </p>
    </section>

    <section>
      <h2>Testing Types with Readable Types Testing</h2>
      <p>
        Readable Types Testing provides a robust framework for writing and running tests on your types.
        To get started with type testing, visit the <Link href="/docs/introduction/testing">Readable Types Testing documentation</Link>.
        This guide will introduce you to the basics of type testing and show you how to integrate these tests into your development workflow.
      </p>
    </section>

    <ArticleRecommendations links={[
      'testing',
      'config',
      'plugin',
      'utils-description',
      'hkt',
      'docs',
    ]}/>
  </article>;
};