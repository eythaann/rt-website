export const eIsBoolean = `
type A = isBoolean<boolean>;
//   ^? true
type B = isBoolean<string>;
//   ^? false
type C = isBoolean<boolean | never>;
//   ^? true
`;

export const eIsTrue = `
type A = isTrue<true>;
//   ^? true
type B = isTrue<false>;
//   ^? false
`;

export const eIsFalse = `
type A = isFalse<true>;
//   ^? false
type B = isFalse<false>;
//   ^? true
`;

export const eAnd = `
type A = And<[true, true, true]>;
//   ^? true
type B = And<[true, false, true]>;
//   ^? false
`;

export const eOr = `
type A = Or<[false, false, true]>;
//   ^? true
type B = Or<[false, false, false]>;
//   ^? false
`;

export const eXor = `
type A = Xor<true, true>;
//   ^? false
type B = Xor<true, false>;
//   ^? true
type C = Xor<false, true>;
//   ^? true
type D = Xor<false, false>;
//   ^? false
`;

export const eNot = `
type A = not<true>;
//   ^? false
type B = not<false>;
//   ^? true
`;