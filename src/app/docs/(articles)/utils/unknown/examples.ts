export const eIsUnknown = `
type A = isUnknown<unknown>;
//   ^? true
type B = isUnknown<string>;
//   ^? false
type C = isUnknown<any>;
//   ^? false
`;

export const eDefaultOnUnknown = `
type A = defaultOnUnknown<unknown, string>;  // Result: string
type B = defaultOnUnknown<number, string>;  // Result: number
`;
