const dateFormatter = (dateISOstring: string): string => {
  return dateISOstring.split('-').reverse().join('/');
};

export default dateFormatter;
