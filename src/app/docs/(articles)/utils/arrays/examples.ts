export const eIsNever = `
type A = isNever<never>;
//   ^? true
type B = isNever<string>;
//   ^? false
type C = isNever<number | never>;
//   ^? false
`;