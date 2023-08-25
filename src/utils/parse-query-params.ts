const parseQueryParams = (queryParamsObj: Object): string => {
  return Object.keys(queryParamsObj).reduce((query, key) => {
    if (queryParamsObj[key] != null) return query + key + '=' + queryParamsObj[key] + '&';

    return query;
  }, '?');
};

export default parseQueryParams;
