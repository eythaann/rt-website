export const eIsObject = `
type A = isObject<{ a: 1 } | [] | () => void>;
//   ^? true
type B = isObject<number>;
//   ^? false
`;

export const eIsStrictObject = `
type A = isStrictObject<{ a: 1 }>;
//   ^? true
type B = isStrictObject<[]>;
//   ^? false
type B = isStrictObject<() => void>;
//   ^? false
`;

export const eModify = `
type A = modify<{ a: string }, { b: number }>; 
//   ^? { a: string; b: number }
`;

export const eModifyByKey = '// TODO';

export const ePrettify = 'type A = prettify<{ a: string }>; // Result: { a: string }';

export const ePickByValue = `
type A = pickByValue<{ a: string; b: number; c: boolean }, [string, boolean]>;
//   ^? { a: string; c: boolean; }
`;

export const eCanBeEmptyObject = `
type A = canBeEmptyObject<{ a?: string }>;
//   ^? true
type B = canBeEmptyObject<{ a: string }>;
//   ^? false
`;

export const eGetReadonlyKeys = `
type A = getReadonlyKeys<{ readonly a: string, b: number }>; 
//   ^? "a"
`;

export const eGetNoReadonlyKeys = `
type A = getNoReadonlyKeys<{ readonly a: string, b: number }>;
//   ^? "b"
`;

export const eGetRequiredKeys = `
type A = getRequiredKeys<{ a?: string, b: number }>;
//   ^? "b"
`;

export const eGetOptionalKeys = `
type A = getOptionalKeys<{ a?: string, b: number }>;
//   ^? "a"
`;

export const eHasProperty = `
type A = hasProperty<{ a: 1, b: 2 }, 'a'>;
//   ^? true
type B = hasProperty<{ a: 1, b: 2 }, 'c'>;
//   ^? false
`;

export const eSomeToReadonly = `
type A = someToReadonly<{ a: 'a', b: 'b' }, 'a'>;
//   ^? { readonly a: 'a', b: 'b' }
`;

export const eSomeToWritable = `
type A = someToWritable<{ readonly a: 'a', readonly b: 'b' }, 'a'>;
//   ^? { a: 'a', readonly b: 'b' }
`;

export const eSomeToPartial = `
type A = someToPartial<{ a: 'a', b: 'b' }, 'a'>;
//   ^? { a?: 'a', b: 'b' }
`;

export const eSomeToRequired = `
type A = someToRequired<{ a?: 'a', b?: 'b' }, 'a'>;
//   ^? { a: 'a', b?: 'b' }
`;
