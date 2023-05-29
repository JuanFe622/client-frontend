import React from "react";
import "./LoginForm.form";
import { Auth } from "../../../../api/auth";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.form";
import { useAuth } from "../../../../hooks";

const authController = new Auth();

export const LoginForm = () => {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    /* Validaciones de error */
    validationSchema: validationSchema(),
    validateOnChange: false,
    validateOnBlur: false,

    onSubmit: async (formValue) => {
      try {
        const response = await authController.login(formValue);
        login(response.access);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <Form className="register-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="email"
        type="email"
        label="Correo electrónico"
        placeholder="Correo electrónico"
        autoComplete="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <Form.Input
        name="new_password"
        type="password"
        label="Contraseña"
        autoComplete="new_password"
        placeholder="Contraseña"
        onChange={formik.handleChange}
        value={formik.values.new_password}
        error={formik.errors.new_password}
      />

      <Form.Button
        type="submit"
        primary
        fluid
        content="Iniciar sesión"
        loading={formik.isSubmitting}
      />
    </Form>
  );
};