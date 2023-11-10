import CodeBlock from '../../../../../components/CodeBlock';

const example = `
import { isString, If } from 'readable-types'

type A<T> = If<isString<T>, {
  then: number;
  else: string;
}>

type B = A<string> // B is number
`;

export default () => {
  return <article>
    <h1>Getting Started with Readable Types</h1>
    <p>Welcome to Readable Types, a TypeScript utility library that makes type manipulations and computations more intuitive and easier to read. Follow the instructions below to get started.</p>
    <br/>

    <h2>Installation</h2>
    <p>To install Readable Types, you can use npm (Node Package Manager). Run the following command in your project directory:</p>
    <CodeBlock language="bash" code={'npm install --save-dev readable-types'} />
    <br/>

    <h2>Usage</h2>
    <p>After installation, you can start using Readable Types in your TypeScript project. Import the types you need into your TypeScript file:</p>
    <CodeBlock language="typescript" code={'import { TypeHere } from \'readable-types\';'} />
    <p>Replace <code>TypeHere</code> with the specific type utility you want to use.</p>
    <br/>

    <h2>Examples</h2>
    <p>Here are some examples of how to use Readable Types:</p>
    <CodeBlock language="typescript" code={example} />
    <br/>

    <h2>Documentation</h2>
    <p>For detailed documentation and usage examples search in the Readable Types documentation site.</p>
    <br/>
  </article>;
};