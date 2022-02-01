export const required = (value: string) => {
  if (value.length === 0) {
    return 'This value is required';
  }

  return true;
};
