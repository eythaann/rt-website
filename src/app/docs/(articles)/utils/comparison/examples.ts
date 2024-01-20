export const eEquals = `
type A = equals<string, string>;
//   ^? true
type B = equals<string, number>;
//   ^? false
type C = equals<any, string>;
//   ^? false
type D = equals<any, any>;
//   ^? true
`;

export const eIsSupertype = `
type A = isSupertype<number | string, string>;
//   ^? true
type B = isSupertype<string, number | string>;
//   ^? false
`;

export const eIsSubtype = `
type A = isSubtype<string, number | string>;
//   ^? true
type B = isSubtype<number | string, string>;
//   ^? false
`;