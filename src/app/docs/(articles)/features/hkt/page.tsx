import CodeBlock from '../../../../../components/CodeBlock';
import { ArticleRecommendations } from '../../../../../components/Recomendations';

const example = `
import { Call, TupleMap } from 'readable-types'

interface $example extends $<[number]> {
  return: \`\${this[0]}-SomeSufix\`;
}

type Result = Call<$example, [5]>
//   ^? '5-SomeSufix'

type UsedAsCallback = TupleMap<[1, 2, 3], $example>;
//   ^? ["1-SomeSufix", "2-SomeSufix", "3-SomeSufix"]
`;

export default () => {
  return <article>
    <h1>Higher-Kinded Types (HKT) in TypeScript</h1>
    <p>
      Higher-Kinded Types (HKT) are a powerful concept in TypeScript, allowing developers to work with generic types
      in a more flexible and abstract manner. This library provides utilities that make working with HKT easy and
      intuitive.
    </p>
    <hr />

    <section>
      <h2>What is a Higher-Kinded Type?</h2>
      <p>
        In TypeScript, a Higher-Kinded Type is a versatile generic type that takes another type as an argument. It empowers you
        to abstract over types, introducing a layer of indirection that enhances the reusability and adaptability of your code.
      </p>

      <CodeBlock language="typescript" code={example} />

      <p>
        Here, the <code>$example</code> interface embodies an HKT with a single argument of type <code>number</code>. The resulting
        <code>{'Call<$example, [5]>'}</code> type translates to <code>'5-SomeSuffix'</code>, showcasing the library's ability to
        streamline HKT usage in TypeScript.
      </p>

      <p>
        Additionally, the <code>TupleMap</code> utility exemplifies the application of the HKT type to each element in a tuple,
        generating the <code>UsedAsCallback</code> type with the expected outcomes.
      </p>

      <p>
        Your experience with Higher-Kinded Types is made effortless by the library's utilities, offering developers a
        straightforward and concise syntax for testing and working with these advanced type concepts.
      </p>
    </section>

    <section>
      <h2>Why use our Library for Higher-Kinded Types?</h2>
      <p>
        Embracing Higher-Kinded Types (HKT) in TypeScript can significantly enhance the expressiveness and flexibility of your code.
        However, TypeScript, by default, lacks native support for HKT, making it challenging for developers to leverage this powerful
        abstraction mechanism seamlessly.
      </p>

      <p>
        This is where our library comes to the rescue. By providing a set of utilities explicitly designed for working with HKT,
        our library empowers you to unlock the full potential of generic types in TypeScript. Developers can now easily navigate
        the complexities of Higher-Kinded Types without cumbersome workarounds or sacrificing the clarity of their code.
      </p>

      <p>
        With our library, you can effortlessly incorporate HKT into your TypeScript projects, enabling you to write more
        maintainable, reusable, and adaptable code. The intuitive syntax and streamlined utilities eliminate the hurdles
        associated with TypeScript's default limitations, making HKT a seamless and integral part of your development process.
      </p>

      <p>
        Choose our library to harness the power of Higher-Kinded Types in TypeScript, and elevate your coding experience to new
        heights.
      </p>
    </section>

    <ArticleRecommendations links={[
      'utils',
      'iterators',
      'math',
      'unknown',
      'strings',
      'numbers',
    ]} />
  </article>;
};