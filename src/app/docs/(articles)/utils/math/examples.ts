export const eAdd = `
type Result1 = add<5, 10>;
//   ^? Result1 = 15
type Result2 = add<2, 3>;
//   ^? Result2 = 5
`;

export const eSubstract = `
type Result1 = substract<10, 5>;
//   ^? Result1 = 5
type Result2 = substract<2, 3>;
//   ^? Result2 = -1
`;