import CodeBlock from '../../../../../components/CodeBlock';

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
    <h1 id="main-content-heading">Start testing your HKT Types</h1>
    <CodeBlock language="typescript" code={example} />
  </article>;
};