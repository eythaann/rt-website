import CodeBlock from '../../../../../components/CodeBlock';
import { ArticleRecommendations } from '../../../../../components/Recomendations';

const configFile = `
import { RT_CONFIG_SCHEME } from 'readable-types';

export default {
  development: true,
  conditionWay: 'natural',
} as const satisfies RT_CONFIG_SCHEME;`;

const tsconfig = `
{
  "include": [
    "./lib",
    "rt.config.ts",
  ],
}`;

export default () => {
  return <article>
    <h1>Configuring Readable Types with <code>rt.config.ts</code></h1>
    <p>To customize the behavior of Readable Types, you can create a configuration file named <code>rt.config.ts</code>. This file allows you to set various options that the library will use during its operation. It's important to use <code>as const</code> to ensure that TypeScript infers the correct type, and <code>satisfies</code> for schema-like autocompletion.</p>
    <hr/>

    <section>
      <h2>Creating the Configuration File</h2>
      <p>Create a file named <code>rt.config.ts</code> in your project root and define your configuration as follows:</p>
      <CodeBlock code={configFile} />
      <p>This configuration will be recognized globally in your TypeScript project.</p>
    </section>

    <section>
      <h2>Updating tsconfig.json</h2>
      <p>To ensure TypeScript includes your configuration file, update your <code>tsconfig.json</code> as follows:</p>
      <CodeBlock language="json" code={tsconfig} />
      <p>This inclusion ensures that TypeScript is aware of your custom configuration and applies it correctly across your project.</p>
    </section>

    <ArticleRecommendations links={[
      'getting-started',
      'testing',
      'plugin',
      'utils-description',
      'hkt',
      'docs',
    ]} />
  </article>;
};