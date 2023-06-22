import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import FormContainer from "../../components/main/FormContainer";
import InputElement from "../../components/main/nav/InputElement";
import { useFormik } from "formik";
import { registationFields } from "../../formik/values";
import { registation_validationsSchema } from "../../formik/schema";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import ButtonELement from "../../components/main/ButtonELement";
import PersonIcon from "@mui/icons-material/Person";
import { colors } from "../../ui-core/globalStyles";
import MediumHeading from "../../components/main/MediumHeading";
import LargeHeading from "../../components/main/LargeHeading";
import ArticleElement from "../../components/main/ArticleElement";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import registerHook from "../../hooks/useRegister";
const RegistrationPage = () => {
  const [useRegisterUser, { isLoading }] = registerHook();
  const formik = useFormik({
    initialValues: registationFields,
    validationSchema: registation_validationsSchema,
    onSubmit: () => useRegisterUser(values),
  });
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    formik;
  return (
    <FormContainer> 
      <Grid
        container
        sx={{
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Grid
          item
          lg={6}
          xs={12}
          sx={{
            bgcolor: "#fff",
          }}
        >
          <Container
            cpmponent="form"
            maxWidth="sm"
            sx={{
              py: "75px",
            }}
          >
            <MediumHeading content="Register" />
            <InputElement
              type="text"
              name="email"
              placeholder="Email"
              value={values.email}
              error={errors.email}
              touched={touched.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
              icon={<EmailIcon sx={{ color: colors.main }} />}
              mt="35px"
            />
            <InputElement
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              error={errors.password}
              touched={touched.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
              icon={<LockIcon sx={{ color: colors.main }} />}
              mt="25px"
            />
            <InputElement
              type="username"
              name="username"
              placeholder="username"
              value={values.username}
              error={errors.username}
              touched={touched.username}
              handleChange={handleChange}
              handleBlur={handleBlur}
              icon={<PersonIcon sx={{ color: colors.main }} />}
              mt="25px"
            />
            <InputElement
              type="phone"
              name="phone"
              placeholder="phone"
              value={values.phone}
              error={errors.phone}
              touched={touched.phone}
              handleChange={handleChange}
              handleBlur={handleBlur}
              icon={<StayCurrentPortraitIcon sx={{ color: colors.main }} />}
              mt="25px"
            />
            <Stack direction={"row"} justifyContent={"center"} my="20px">
              <ButtonELement
                isLoading={isLoading}
                content={`Register`}
                extraStyle={{
                  width: {
                    lg: 0.3,
                    md: 0.5,
                    xs: 0.85,
                  },
                  borderRadius: "15px",
                }}
                handleClick={handleSubmit}
              />
            </Stack>
          </Container>
        </Grid>
        <Grid
          item
          lg={6}
          sx={{
            bgcolor: colors.main,
            display: {
              lg: "block",
              xs: "none",
            },
          }}
        >
          <Stack
            height={1}
            width={1}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box>
              <LargeHeading
                context={"Electro Store"}
                style={{ color: "#fff" }}
              />
              <ArticleElement
                style={{
                  color: "#fff",
                  width: 0.9,
                  mx: "auto",
                  mt: "10px",
                }}
                context={"Sign up and take your online shopping the easy way"}
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default RegistrationPage;
