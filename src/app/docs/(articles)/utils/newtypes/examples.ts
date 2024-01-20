export const eNewtype = `
declare const structure_indentifier: unique symbol;

// structure will represent an object without prototype
type structure = newtype<typeof structure_indentifier>;
type struct<T extends unknownObject> = structure & T;

type Tree<T> = struct<{
  value: T | null;
  left?: Tree<T>;
  right?: Tree<T>;
}>;

function struct<T extends unknownObject | structure>(obj: T): structure & T {
  return Object.assign(Object.create(null), obj);
}

const mytree: Tree<number> = struct({ value: 0 });
`;

export const eOpaque = `
type UserID = Opaque<number, 'UserID'>;

const userId: UserID = 123 as UserID;

// Error: 456 is not assignable to type 'UserID'
const anotherUserId: UserID = 456;

// Error: Type 'UserID' is not assignable to type 'number'
const someNumber: number = 456 as UserID;
`;

export const eSoftOpaque = `
type SoftUserID = SoftOpaque<number, 'UserID'>;

const softUserId: SoftUserID = 123;

// No Error: SoftUserID is assignable to type 'number'
const someNumber: number = softUserId;
`;