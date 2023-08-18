import { createAction } from '@reduxjs/toolkit';

const setCurrentUser = createAction<any>('EMPLOYEE:SET');

export default setCurrentUser;
