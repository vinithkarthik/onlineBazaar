import TextBox from "../Common/TextBox";
import { Grid } from "@mui/material";
import ButtonComp from "../Common/ButtonComp";
import isEmail from 'validator/lib/isEmail';
import { useState } from "react";

const SignIn = () => {
  const [formValues, updateFormValues] = useState({
    email: {},
    password: {}
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
    }
    updateFormValues(updatedValue);
  }

  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={3}>
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlists and Recommendations</p>
      </Grid>
      <Grid item xs={3}>
        <form>
          <Grid container rowSpacing={4}>
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
              <ButtonComp
                sx={{
                  width: '100%'
                }}
                variant="contained"
              >
                Login
              </ButtonComp>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default SignIn;