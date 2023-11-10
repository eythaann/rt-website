type Args = string | { [x: string]: boolean };
export const cx = (...args: Args[]): string => {
  return args.map((arg) => {
    if (typeof arg === 'string') {
      return arg;
    }
    return Object.keys(arg).map((key) => arg[key] ? key : '').join(' ');
  }).join(' ');
};

export const firstToUpperCase = (srt: string) => {
  return srt[0].toLocaleUpperCase() + srt.slice(1);
};