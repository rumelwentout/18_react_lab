import * as yup from 'yup';

const passwordREGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const loginSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required')
  // password: yup
  //   .string()
  //   .min(5, 'Password must be at least 5 characters long')
  //   .matches(passwordREGEX, { message: 'Please re-enter password' })
  //   .required('Required')
});
