export const eIsArray = `
type A = isArray<number[]>;
//   ^? true
type B = isArray<string>;
//   ^? false
type C = isArray<never>;
//   ^? false
`;

export const eIsEmptyArray = `
type Result1 = isEmptyArray<[]>;
//   ^? true
type Result2 = isEmptyArray<[1, 2, 3]>;
//   ^? false
`;

export const eIsTuple = `
type A = isTuple<[number, string]>;
//   ^? true
type B = isTuple<number[]>;
//   ^? false
type C = isTuple<never>;
//   ^? false
`;

export const eTupleIncludes = `
type Result = tupleIncludes<[number, string, boolean], string>;
//   ^? true
type Result2 = tupleIncludes<[number, string, boolean], object>;
//   ^? false
`;

export const eTuple = `
type A = Tuple<number, 3>;
//   ^? [number, number, number]
type B = Tuple<number>;
//   ^? [] | [number, ...number[]]
`;

export const eShift = `
type A = Shift<[1, 2, 3]>;
//   ^? [2, 3]
`;

export const ePop = `
type A = Pop<[1, 2, 3]>;
//   ^? [1, 2]
`;

export const eShiftRecursive = `
type A = ShiftRecursive<[1, 2, 3]>;
//   ^? [], [2, 3], [3]
`;

export const ePopRecursive = `
type A = PopRecursive<[1, 2, 3]>;
//   ^? [1, 2] | [1] | []
`;

export const eUnionToTupleCombination = `
type A = UnionToTupleCombination<'a' | 'b' | 'c'>;
//   ^? ['a', 'b'] | ['b', 'a']
`;

export const eGetIndexes = `
type Indices = getIndexes<[string, number, boolean]>;
//   ^? "0" | "1" | "2"
type Empty = getIndexes<[]>;
//   ^? never
`;

export const eObjectToTuple = `
type a = ObjectToTuple<{ 0: string; 1: number; }>;
//   ^? [string, number]
`;