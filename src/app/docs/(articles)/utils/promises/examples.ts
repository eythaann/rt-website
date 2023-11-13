export const eIsPromise = `
type A = isPromise<Promise<number>>;
//   ^? true
type B = isPromise<string>;
//   ^? false
type C = isPromise<never>;
//   ^? false
`;