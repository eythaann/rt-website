export const eTupleMap = `
interface $callback extends $<{ current: number }> {
  return: \`\${this['current']}\`;
}
type result = TupleMap<[1, 2, 3], $callback>;  // ['1', '2', '3']
`;

export const eTupleReduce = `
interface $callback extends $<{ acc: number; current: number }> {
  return: Add<this['acc'], this['current']>;
}
type result = TupleReduce<[1, 2, 3], $callback, 0>;  // 6
`;

export const eTupleFind = `
interface $callback extends $<{ current: number | string }> {
  return: Equals<this['current'], 'findMe'>;
}
type result = TupleFind<[1, 'findMe', 3], $callback>;  // 'findMe'
`;

export const eUnionMap = `
interface $callback extends $<{ current: number }> {
  return: \`\${this['current']}\`;
}
type result = UnionMap<1 | 2 | 3, $callback>;  // '1' | '2' | '3'
`;