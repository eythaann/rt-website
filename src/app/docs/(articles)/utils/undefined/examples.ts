export const eIsUndefined = `
type A = isUndefined<undefined>;
//   ^? true
type B = isUndefined<number>;
//   ^? false
type C = isUndefined<number | undefined>;
//   ^? false
`;

export const eIsNull = `
type A = isNull<null>;
//   ^? true
type B = isNull<number>;
//   ^? false
type C = isNull<number | null>;
//   ^? false
`;

export const eNonUndefined = 'type A = nonUndefined<string | undefined>; // Result: string';

export const eNonNull = 'type A = nonNull<string | null>; // Result: string';

export const eDefaultOnUndefined = `
type A = defaultOnUndefined<undefined, string>;  // Result: string
type B = defaultOnUndefined<number, string>;  // Result: number
`;