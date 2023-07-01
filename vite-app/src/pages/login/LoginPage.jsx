import { Alert, Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import FormContainer from "../../components/main/FormContainer";
import InputElement from "../../components/main/nav/InputElement";
import { useFormik } from "formik";
import { loginFields } from "../../formik/values";
import { login_schemaValidations } from "../../formik/schema";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import ButtonELement from "../../components/main/ButtonELement";
import { colors } from "../../ui-core/globalStyles";
import LinkElelment from "../../components/main/LinkElement";
import MediumHeading from "../../components/main/MediumHeading";
import LargeHeading from "../../components/main/LargeHeading";
import ArticleElement from "../../components/main/ArticleElement";
import loginHook from "../../hooks/useLogin";
const LoginPage = () => {
  const [useLoginUser, { isLoading, loginError }] = loginHook();
  const formik = useFormik({
    initialValues: loginFields,
    validationSchema: login_schemaValidations,
    onSubmit: () => useLoginUser(values),
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
            maxWidth="wm"
            sx={{
              py: "75px",
            }}
          >
            <MediumHeading content="Login" />
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
            <Stack direction={"row"} justifyContent={"center"} my="20px">
              <LinkElelment
                path="/forget"
                color={colors.main}
                text={"Forget Password!"}
              />
            </Stack>
            <Stack direction={"row"} justifyContent={"center"} my="20px">
              <ButtonELement
                isLoading={isLoading}
                content={`Login`}
                extraStyle={{
                  width: {
                    lg: 0.3,
                    md: 0.5,
                    xs: 0.85,
                  },
                  borderRadius: "25px",
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
                context={
                  "To keep connected with us please login with your personal information"
                }
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default LoginPage;
