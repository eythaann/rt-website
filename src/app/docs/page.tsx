import { ArticleRecommendations } from '../../components/Recomendations';

export default () => {
  return <>
    <article>
      <h1>Introduction</h1>
      <p>Welcome to Readable Types documentation!.</p>
      <hr/>
      <section>
        <h2>What is Readable Types?</h2>
        <p>
          Readable Types is your go-to utility library for simplifying the creation and management of complex
          TypeScript types. Whether you're a seasoned TypeScript developer or just getting started,
          our library is designed to streamline your workflow and make your code more readable and maintainable.
        </p>
        <p>
          Say goodbye to writing boilerplate type definitions and grappling with complex type manipulations.
          With Readable Types, you have access to a powerful set of out-of-the-box utilities that cover common
          use cases and challenges faced by TypeScript developers.
        </p>
      </section>
    </article>

    <ArticleRecommendations links={[
      'getting-started',
      'testing',
      'config',
      'plugin',
      'utils',
      'hkt',
    ]} />
  </>;
};