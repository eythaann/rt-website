export const eIsString = `
type A = isString<string>;
//   ^? true
type B = isString<number>;
//   ^? false
type C = isString<never>;
//   ^? false
`;

export const eStringtify = `
type A = stringtify<42>;
//   ^? "42"
type B = stringtify<true>;
//   ^? "true"
type C = stringtify<null>;
//   ^? "null"
type D = stringtify<undefined>;
//   ^? "undefined"
type E = stringtify<{a: 1, b: 2}>;
//   ^? "[object Object]"
`;

export const eJoin = `
type F = join<[42, true, null, undefined, {a: 1, b: 2}]>;
//   ^? "42truenullundefined[object Object]"
`;

export const eSplit = `
type A = split<'Hello'>;
//   ^? ["H", "e", "l", "l", "o"]
type A = split<'world'>;
//   ^? ["w", "o", "r", "l", "d"]
`;

export const eSplitReverse = `
type B = splitReverce<'Hello'>;
//   ^? ["o", "l", "l", "e", "H"]
type B = splitReverce<'world'>;
//   ^? ["d", "l", "r", "o", "w"]
`;

export const eStartsWith = `
type A = startsWith<'hello', 'h'>;
//   ^? true
type B = startsWith<'world', 'x'>;
//   ^? false
`;