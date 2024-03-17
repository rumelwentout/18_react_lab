import * as yup from 'yup';

const passwordREGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required')
  // password: yup
  //   .string()
  //   .min(5, 'Password must be at least 5 characters long')
  //   .matches(passwordREGEX, { message: 'Please create a stronger password' })
  //   .required('Required'),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref('password'), null], 'Passwords must match')
  //   .required('Required')
});
