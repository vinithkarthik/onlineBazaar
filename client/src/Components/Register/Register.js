import TextBox from "../Common/TextBox";
import { Grid } from "@mui/material";
import ButtonComp from "../Common/ButtonComp";
import isEmail from 'validator/lib/isEmail';
import isAlphanumeric from 'validator/lib/isAlphanumeric';

import { useState } from "react";

const Register = () => {
  const [formValues, updateFormValues] = useState({
    firstName: {},
    lastName: {},
    email: {},
    password: {},
    confirmPassword: {},
  });

  const onChange = (e) => {
    let id = e.target.id;
    let updatedValue = JSON.parse(JSON.stringify(formValues));
    updatedValue[id].value = e.target.value;
    updateFormValues(updatedValue);
  }

  const onBlur = (e) => {
    let id = e.target.id;
    let updatedValue = JSON.parse(JSON.stringify(formValues));
    if (id == 'email') {
      if (!isEmail(e.target.value)) {
        updatedValue[id].error = true;
        updatedValue[id].helperText = 'Invalid email';
      } else {
        updatedValue[id].error = false;
        updatedValue[id].helperText = '';
      }
    } else if (id == 'password' || id == 'confirmPassword') {
      const regex = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?!.*\s)(?=.{6,})");
      if (!regex.test(e.target.value)) {
        updatedValue[id].error = true;
        updatedValue[id].helperText = 'Password must have 1 number, 1 alphabet and min of 6 char';
      } else if (updatedValue['password'].value != updatedValue['confirmPassword'].value) {
        updatedValue['password'].error = updatedValue['confirmPassword'].error = true;
        updatedValue['password'].helperText = updatedValue['confirmPassword'].helperText = 'Password Mismatch';
      } else {
        updatedValue['password'].error = updatedValue['confirmPassword'].error = false;
        updatedValue['password'].helperText = updatedValue['confirmPassword'].helperText = '';
      }
    }
    updateFormValues(updatedValue);
  }

  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={3}>
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone</p>
      </Grid>
      <Grid item xs={3}>
        <form>
          <Grid container rowSpacing={4}>
            <Grid item xs={12}>
              <TextBox
                id={'firstName'}
                value={formValues['firstName'].value}
                label={'First Name'}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextBox
                id={'lastName'}
                value={formValues['lastName'].value}
                label={'Last Name'}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextBox
                id={'email'}
                value={formValues['email'].value}
                label={'Email'}
                onChange={onChange}
                onBlur={onBlur}
                helperText={formValues['email'].helperText}
                error={formValues['email'].error}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextBox
                id={'password'}
                value={formValues['password'].value}
                label={'Password'}
                onChange={onChange}
                onBlur={onBlur}
                type={'password'}
                error={formValues['password'].error}
                helperText={formValues['password'].helperText}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextBox
                id={'confirmPassword'}
                value={formValues['confirmPassword'].value}
                label={'Confirm Password'}
                onChange={onChange}
                onBlur={onBlur}
                type={'password'}
                error={formValues['confirmPassword'].error}
                helperText={formValues['confirmPassword'].helperText}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <ButtonComp
                sx={{
                  width: '100%'
                }}
                variant="contained"
              >
                Signup
              </ButtonComp>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default Register;