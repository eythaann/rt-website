export const eIsNumber = `
type A = isNumber<number>;
//   ^? true
type B = isNumber<string>;
//   ^? false
type C = isNumber<never>;
//   ^? false
`;

export const eStrToNumber = `
type A = strToNumber<'42'>;
//   ^? 42
type B = strToNumber<'foo'>;
//   ^? never
`;