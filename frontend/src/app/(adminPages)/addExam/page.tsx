'use client'
import React, { useState } from 'react'
import { Stack, Typography, Card, CardContent, TextField, Button } from '@mui/material'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { useRouter } from 'next/navigation'
import "react-toastify/dist/ReactToastify.css";
import { createExam } from '@/feature/exam/exam.Action';
const AddExam = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: any) => {
    console.log(data)
    const {title,duration,startTime,instructions} = data

    try {
      const res = await dispatch(createExam({ title, instructions, duration, startTime }))
      if (!res.payload) {
        // add snackbar showing wrong credentials
        alert("Error in registering user")

        // navigate("/Login");
      }
      if (res.payload) router.push("/login");
    }
    catch (error) {

      alert(error)
    }

    reset();
  };

  //  const token =localStorage.getItem('auth')
  // console.log(token)
  return (
    <div>
      <Stack height={"65vh"}>

        <Stack sx={{ m: 5 }}>
          <Typography fontSize={"25px"} fontWeight={"600"} color="#03103F" >New Quiz</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Card sx={{ width: "100%", height: "65vh", border: "1px solid black" }}>
              <CardContent sx={{ m: 4 }}>
                <Box sx={{ flexGrow: 1 }}>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <label>Tittle</label>
                      <TextField size='small' type='text'  {...register("title", {
                        required: "Tittle is requried",
                      })} sx={{ width: "100%", mt: 1 }} />
                      {errors.email && (
                        <p style={{ color: "red" }}>{`${errors.email.message}`}</p>
                      )}


                      <Grid item xs={12}>
                        <label>duration</label>
                        <TextField size='small' {...register("duration", {
                          required: "duration is requried",
                        })} sx={{ width: "100%", mt: 1 }} />
                        {errors.duration && (
                          <p style={{ color: "red" }}>{`${errors.duration.message}`}</p>
                        )}

                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <label>startTime</label>
                      <TextField size='small'  {...register("startTime", {
                        required: "startTime is requried",
                      })} sx={{ width: "100%", mt: 1 }} />
                      {errors.startTime && (
                        <p style={{ color: "red" }}>{`${errors.startTime.message}`}</p>
                      )}




                    </Grid>


                  </Grid>
                  <Grid item xs={12}>
                    <label>Instructions</label>
                    <TextField multiline={true}
                      rows={6} {...register("instructions", {
                        required: "instructions is requried",
                      })} sx={{ width: "100%", mt: 1 }} />
                      {errors.instructions && (
                          <p style={{ color: "red" }}>{`${errors.instructions.message}`}</p>
                        )}

                  </Grid>





                </Box>



              </CardContent>

            </Card>
            <Button type="submit" sx={{
              width: "200px", bgcolor: "#03103F", color: "white", mt: 3, "&:hover": {
                bgcolor: "#03103F", color: "white"
              },
            }} >Add</Button>
          </form>
        </Stack>
      </Stack>

    </div>
  )
}

export default AddExam
