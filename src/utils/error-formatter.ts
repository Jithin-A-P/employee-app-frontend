export const getResponseError = (error) => {
  console.log('in error function');
  if (error == null || error == undefined) return null;

  if (error)
    if (error.status === 400 && error.data) {
      console.log('in one ');
      const responseErrors = error.data.errors;

      if (responseErrors && Array.isArray(responseErrors)) {
        const errorData = {};

        for (const errorItem of responseErrors) errorData[errorItem.field] = errorItem.message;

        return errorData;
      }

      return error.data.error;
    }
};
