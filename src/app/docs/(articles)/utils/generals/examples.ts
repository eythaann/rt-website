export const eValueof = `
type A = valueof<{ a: number, b: string }>;
//   ^? number | string
`;

export const eKeyof = `
type A = $keyof<{ a: number, b: string } | { c: boolean }>;
//   ^? "a" | "b" | "c"
`;

export const eUnionToIntersection = `
type A = unionToIntersection<{ a: number, b: string } | { a: string, c: boolean }>;
//   ^? { a: number | string, b: string, c: boolean }
`;

export const eCast = `
type Result1 = cast<string, number>;
//   ^? Result1 = number

type Result2 = cast<'a', string>;
//   ^? Result2 = 'a'
`;

export const eNoInfer = `
type A = noInfer<string, number>;
//   ^? A = string
`;

export const eWaitFor = `
type A = waitFor<any, string>;
//   ^? A = never

type B = waitFor<string, number>;
//   ^? B = number
`;

export const eDefaultOnNullable = `
type A = defaultOnNullable<unknown, string>;
//   ^? A = string

type B = defaultOnNullable<null, string>;
//   ^? B = string

type C = defaultOnNullable<undefined, string>;
//   ^? C = string

type D = defaultOnNullable<number, string>;
//   ^? D = number
`;