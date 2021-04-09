import './App.css';
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TextField, Button } from '@material-ui/core'

const defaultValues = {
  email: "",
  password: ""
}
function App() {
  const { control, formState: { errors }, handleSubmit } = useForm({
    defaultValues
  })

  const submitData = (data) => {
    console.log(data);
  }


  return (
    <div className="App">
      <h1>Register</h1>
      <div className="register">
        <form onSubmit={handleSubmit(submitData)}>
          <div>
            <Controller
              control={control}
              name="email"
              rules={{
                required: {
                  value: true,
                  message: "Please Enter Email"
                },
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid Email Format"
                }
              }}
              render={({
                field: { value, name, ref, onChange },
              }) => (
                <TextField
                  onChange={onChange}
                  inputRef={ref}
                  name={name}
                  value={value}
                  error={errors?.email && true}
                  helperText={errors?.email?.message}
                />
              )}
            />

          </div>

          <div>
            <Controller
              control={control}
              name="password"
              rules={{
                required: {
                  value: true,
                  message: "Please Enter Password"
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
                  message: "Invalid Password Format"
                }
              }}
              render={({
                field: { value, name, ref, onChange },
              }) => (
                <TextField
                  type="password"
                  onChange={onChange}
                  inputRef={ref}
                  name={name}
                  value={value}
                  error={errors?.password && true}
                  helperText={errors?.password?.message}
                />
              )}
            />

          </div>


          <Button type="submit" variant="contained" color="secondary" style={{marginTop:12}}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
