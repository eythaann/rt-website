import CodeBlock from '../../../../../components/CodeBlock';

const example = `
import { defaultOnUnknown, isUnknown } from './infrastructure';

describeType('IsUnknown', () => {
  testType('Should return true only for type unknown', [
    assertType<isUnknown<unknown>>().toBeTrue(),
    assertType<isUnknown<unknown | string>>().toBeTrue(), // union with "unknown" resolves to "unknown"
  ]);

  testType('Should return false for all other types', [
    assertType<isUnknown<any>>().toBeFalse(),
    assertType<isUnknown<string>>().toBeFalse(),
    assertType<isUnknown<number>>().toBeFalse(),
    assertType<isUnknown<{}>>().toBeFalse(),
    assertType<isUnknown<any[]>>().toBeFalse(),
    assertType<isUnknown<never>>().toBeFalse(),
    assertType<isUnknown<unknown & string>>().toBeFalse(),
  ]);
});

describeType('DefaultOnUnknown', () => {
  testType('Should replace unknown type with the default type', () => {
    type result = defaultOnUnknown<unknown, string>;
    assertType<result>().equals<string>();
  });

  testType('Should retain the original type if it is known', () => {
    type result = defaultOnUnknown<number, string>;
    assertType<result>().equals<number>();
  });
});`;

const plugin = `
{
  "compilerOptions": {
    // ... other tsconfig settings
    "plugins": [{
      "name": "readable-types-plugin",
    }]
  }
}`;

export default () => {
  return <article>
    <h1>Testing with Readable Types</h1>
    <p>This guide covers how to set up and run type tests using Readable Types Testing. Type testing ensures that your type manipulations work as expected, enhancing the reliability of your TypeScript code.</p>
    <br/>

    <h2>Setting Up Testing</h2>
    <p>To run type tests, use the <code>rtt</code> command, which is available after installing Readable Types with npm. This command will execute type tests for all files in your project ending with <code>.spec-type.ts</code>, <code>.test-type.ts</code>, or for compatibility with Jest, <code>.spec.ts</code> and <code>.test.ts</code>.</p>
    <br/>

    <h3>Integration with Jest</h3>
    <p>If you're using Jest, include the following import in your test files:</p>
    <CodeBlock code={'import \'readable-types/readable-test-types\';'} />
    <p>This allows you to use Jest without any compatibility issues. Note that there is no direct integration with Jest, so after running Jest commands, you should also execute <code>rtt</code> to run type tests.</p>
    <br/>

    <h2>Writing Type Tests</h2>
    <p>Type tests can be written using <code>.spec-types.ts</code> files. This allows for independent type testing, regardless of whether you use Jest or not. Here are some examples:</p>
    <br/>

    <h3>Example: Testing real util of RT library</h3>
    <CodeBlock code={example} />
    <p>Note that using an array or a callback function are both valid for tests. In the case of Jest, you should add <code>assertType</code> alongside your other normal value assertions.</p>
    <h3>Output example of run rtt</h3>
    <img src="/testExample.png" />
    <br/>

    <h2>Showing Errors in Your Editor</h2>
    <p>To enhance your development experience, Readable Types allows you to display test failures as errors directly in your code editor. This feature can be enabled by adding a specific plugin configuration to your <code>tsconfig.json</code>. By doing so, you'll be able to see type test failures highlighted as errors, providing immediate feedback as you write and refactor your code.</p>
    <img src="/testOnEditor.png" />
    <p>Add the following configuration to your <code>tsconfig.json</code> to enable this feature:</p>
    <CodeBlock language="json" code={plugin} />
    <p>This integration streamlines the testing process, making it easier to identify and fix type-related issues directly within your editor environment.</p>
    <br/>

  </article>;
};