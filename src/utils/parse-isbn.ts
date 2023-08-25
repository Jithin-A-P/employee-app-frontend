const parseIsbn = (isbn: string) => {
  const dashIdx = [2, 3, 5, 11];
  let res = '';

  for (let i = 0; i < isbn.length; i++)
    if (dashIdx.includes(i)) res += isbn[i] + '-';
    else res += isbn[i];

  return res;
};

export default parseIsbn;
