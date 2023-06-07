import { Box, Button, Grid, InputBase, Stack, Typography } from "@mui/material";
import React from "react";
import InputText from "../../components/input/InputText";
import { useFormik } from "formik";
import { object, string } from "yup";
import { styledButton } from "../../components/publicStyles/publicStyles";
const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: object({
      name: string().required(),
      email: string().email().required(),
      phoneNumber: string().required(),
      message: string().required(),
    }),
    onSubmit: () => {
      alert("Ok");
      resetForm();
    },
  });
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = formik;
  return (
    <Box
      sx={{
        pt: "85px",
      }}
    >
      <Box component="header" align={"center"}>
        <Typography variant="h3" fontWeight="bold">
          Contact Us
        </Typography>
        <Typography variant="body1" fontSize="20px">
          We'd love to hear from you!
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: "30px",
          width: 900,
          mx: "auto",
          height: "30vh",
        }}
      >
        <InputText
          value={values.name}
          type="text"
          placeholder="Name..."
          name="name"
          error={errors.name}
          touched={touched.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Grid container mt="10px">
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              pr: "10px",
            }}
          >
            <InputText
              value={values.email}
              type="text"
              placeholder="Email..."
              name="email"
              error={errors.email}
              touched={touched.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              pl: "10px",
            }}
          >
            <InputText
              value={values.phoneNumber}
              type="text"
              placeholder="Number Phone..."
              name="phoneNumber"
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
        </Grid>
        <Box pb={"17px"} position={"relative"} mt="10px">
          <textarea
            component="textarea"
            value={values.message}
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={"Message..."}
            style={{
              backgroundColor:
                touched.message && errors.message ? "#fff" : "#e5e5e5",
              width: "100%",
              outline: 0,
              fontSize: "17px",
              border: `1px solid ${
                touched.message && errors.message ? "red" : "transparent"
              }`,
              minHeight: 200,
              padding: "15px",
            }}
          />
          {errors.message && touched.message ? (
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "red",
                position: "absolute",
                bottom: 0,
              }}
            >
              {errors.message}
            </Typography>
          ) : undefined}
        </Box>
        <Stack direction="row" justifyContent={"flex-end"}>
          <Button type="submit" sx={styledButton}>
            Send
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ContactPage;
