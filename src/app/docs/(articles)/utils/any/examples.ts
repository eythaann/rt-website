export const eIsAny = `
type A = isAny<any>;
//   ^? true
type B = isAny<string>;
//   ^? false
type C = isAny<number | any>;
//   ^? true
`;

export const eDefaultOnAny = `
type A = defaultOnAny<any, string>;
//   ^? string
type B = defaultOnAny<number, string>;
//   ^? number
`;