import CodeBlock from '../../../../../components/CodeBlock';
import { ArticleRecommendations } from '../../../../../components/Recomendations';

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

export default () => {
  return <article>
    <h1>Testing with Readable Types</h1>
    <p>This guide covers how to set up and run type tests using Readable Types Testing. Type testing ensures that your type manipulations work as expected, enhancing the reliability of your TypeScript code.</p>
    <hr />

    <section>
      <h2>Setting Up Testing</h2>
      <p>To run type tests, use the <code>rtft</code> command, which is available after installing Readable Types with npm. This command will execute type tests for all files in your project ending with <code>.spec-type.ts</code>, <code>.test-type.ts</code>, or for compatibility with Jest, <code>.spec.ts</code> and <code>.test.ts</code>.</p>
      <p><code>rtft</code> is the abreviation of: run test for types</p>
    </section>

    <section>
      <h3>Integration with Jest</h3>
      <p>If you're using Jest, include the following import in your test files or into your global jest file:</p>
      <CodeBlock code={'import \'readable-test-for-types\';'} />
      <p>This allows you to use Jest without any compatibility issues. Note that there is no direct integration with Jest, so after running Jest commands, you should also execute <code>rtft</code> to run type tests.</p>

    </section>

    <section>
      <h2>Writing Type Tests</h2>
      <p>Type tests can be written using <code>.spec-types.ts</code> files. This allows for independent type testing, regardless of whether you use Jest or not. Here are some examples:</p>
    </section>

    <section>
      <h3>Example: Testing real util of RT library</h3>
      <CodeBlock code={example} />
      <p>Note that using an array or a callback function are both valid for tests. In the case of Jest, you should add <code>assertType</code> alongside your other normal value assertions.</p>
      <h3>Output example of run rtft</h3>
      <img src="/testExample.png" />
    </section>

    <ArticleRecommendations links={[
      'config',
      'plugin',
      'utils-description',
      'hkt',
      'docs',
      'getting-started',
    ]} />
  </article>;
};