export const eIf = `
// Single Line
type A = If<true, string, number>;
//   ^ Type A = string

// natural
type B = If<true, {
  then: string;
  else: number;
}>;

// explicit
type C = If<{
  condition: true;
  then: string;
  else: number;
}>;
`;