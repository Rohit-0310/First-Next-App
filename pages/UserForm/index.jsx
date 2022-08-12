import React from 'react'
import styles from "../../styles/userform.module.scss"
import Navbar from '../../components/Navbar'


import { useForm, Controller } from 'react-hook-form'
import { Alert, Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'



const Index = () => {

    const { control, handleSubmit, formState: { errors } } = useForm()


    const onSubmit = (data) => {
        console.log(data)

    }

    return (
        <>
            <Navbar />
            <div className={styles.formTop}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography sx={{ textAlign: "center" }} variant="h4">Add User Controll</Typography>
                    <Box>

                        <Controller
                            name="firstName"
                            control={control}
                            rules={{ required: "First Name is Required" }}
                            render={({ field }) =>
                                <TextField
                                    {...field}
                                    // sx={{ m: 2, width: '35ch' }}
                                    id="standard-basic"
                                    label="First Name"
                                    variant="standard"
                                    fullWidth
                                />
                            }
                        />
                        {/* <p>{errors.firstName?.message}</p> */}
                        <Alert severity="warning">{errors.firstName?.message}</Alert>


                        <Controller
                            name="lastName"
                            control={control}
                            rules={{ required: "Last Name is Required" }}
                            render={({ field }) =>
                                <TextField
                                    {...field}
                                    // sx={{ m: 2, width: '35ch' }}
                                    id="standard-basic"
                                    label="Last Name"
                                    variant="standard"
                                    fullWidth
                                    placeholder={errors.name?.message}
                                />
                            }
                        />
                        <p>{errors.lastName?.message}</p>



                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: "Email is Required" }}
                            render={({ field }) =>
                                <TextField
                                    {...field}
                                    // sx={{ m: 2, width: '35ch' }}
                                    id="standard-basic"
                                    label="Email"
                                    variant="standard"
                                    fullWidth
                                // placeholder={errors.email?.message}
                                />
                            }
                        />
                        <p>{errors.email?.message}</p>



                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <TextField
                                    {...field}
                                    // sx={{ m: 2, width: '35ch' }}
                                    id="standard-basic"
                                    label="Password"
                                    type='password'
                                    variant="standard"
                                    fullWidth
                                />
                            }
                        />
                        <p>{errors.password?.message}</p>



                    </Box>


                    <Button sx={{ textAlign: "center" }} type='submit' variant="contained" color="success" >Submit</Button>


                </form>

            </div>
        </>
    )
}

export default Index;