export const eIsFunction = `
type A = isFunction<() => void>;
//   ^? true

type B = isFunction<string>;
//   ^? false

type C = isFunction<() => void | never>;
//   ^? true
`;
