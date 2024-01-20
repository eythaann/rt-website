import CodeBlock from '../../../../../components/CodeBlock';
import { ArticleRecommendations } from '../../../../../components/Recomendations';

const plugin = `
{
  "compilerOptions": {
    // ... other tsconfig settings
    "plugins": [{
      "name": "readable-types",
    }]
  }
}`;

export default () => {
  return <article>
    <h1>Showing Errors in Your Editor</h1>
    <p>To enhance your development experience, Readable Types allows you to display test failures as errors directly in your code editor. This feature can be enabled by adding a specific plugin configuration to your <code>tsconfig.json</code>. By doing so, you'll be able to see type test failures highlighted as errors, providing immediate feedback as you write and refactor your code.</p>
    <img src="/testOnEditor.png" />
    <p>Add the following configuration to your <code>tsconfig.json</code> to enable this feature:</p>
    <CodeBlock language="json" code={plugin} />
    <p>This integration streamlines the testing process, making it easier to identify and fix type-related issues directly within your editor environment.</p>

    <ArticleRecommendations links={[
      'getting-started',
      'testing',
      'config',
      'utils-description',
      'hkt',
      'docs',
    ]}/>
  </article>;
};