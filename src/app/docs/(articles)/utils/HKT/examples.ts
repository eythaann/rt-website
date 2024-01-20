export const eCall = `
interface MyHKT extends $<{ T: unknown }> {
  return: this['T'] extends number ? string : number;
}
type Result = call<MyHKT, { T: number }>; // Result is string
`;

export const eArgs = `
TODO
`;

export const eBind = `
TODO
`;