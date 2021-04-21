export const checkUndefined: Function = (...arg: string[]) => {
  return arg.forEach((value) => {
    if (value === undefined) {
      return value;
    }
  });
};
