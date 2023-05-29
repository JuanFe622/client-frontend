import React, { useState, useEffect } from "react";
import "./RegisterForm.scss";
import { Auth } from "../../../../api/auth";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./RegisterForm.form";
import axios from "axios";

const authController = new Auth();

export const RegisterForm = (props) => {
  const { openLogin } = props;
  const [error, setError] = useState("");
  const [departments, setDepartments] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedCity, setSelectedCity] = useState('');


  // Formik es una librería que nos ayuda a manejar los formularios
  const formik = useFormik({
    initialValues: initialValues(),
    /* Validaciones de error */
    validationSchema: validationSchema(),
    /* Sólo validamos cuando enviemos el formulario, no mientras se escribe */
    validateOnChange: false,
    validateOnBlur: false,

    onSubmit: async (formValue) => {
      try {
        setError("");
        await authController.register(formValue);
        openLogin();
      } catch (error) {
        setError("Error en el servidor");
      }
    },
  });

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=departamento&$group=departamento');
        const departmentOptions = response.data.map((department) => department.departamento).sort();
        setDepartments(departmentOptions);
      } catch (error) {
        console.error('Error al obtener los departamentos:', error);
      }
    };

    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      if (selectedDepartment) {
        try {
          const response = await axios.get(`https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${selectedDepartment}&$select=municipio&$group=municipio`);
          const cityOptions = response.data.map((city) => city.municipio).sort();
          setCities(cityOptions);
        } catch (error) {
          console.error('Error al obtener las ciudades:', error);
        }
      } else {
        setCities([]);
      }
    };

    fetchCities();
  }, [selectedDepartment]);

  const handleDepartmentChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDepartment(selectedValue);
    setSelectedCity('');
    formik.setFieldValue('departament', selectedValue);
    formik.setFieldValue('city', '');
  };
  
  const handleCityChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCity(selectedValue);
    formik.setFieldValue('city', selectedValue);
  };

  return (
    <Form className="register-form" onSubmit={formik.handleSubmit}>
      <Form.Group widths="equal">

        <Form.Input
          fluid
          name="firstname"
          label="Nombres"
          placeholder="Nombres"
          autoComplete="firstname"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.firstname}
          error={formik.errors.firstname}
        />

        <Form.Input
          fluid
          name="lastname"
          label="Apellidos"
          placeholder="Apellidos"
          autoComplete="lastname"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.lastname}
          error={formik.errors.lastname}
        />
      </Form.Group>
      
      <Form.Input
        name="departament"
        label="Departamento"
        placeholder="Seleccione un departamento"
        control="select"
        onChange={handleDepartmentChange}
        value={selectedDepartment}
      >
        <option value="">Seleccione un departamento</option>
        {departments.map((department) => (
          <option key={department} value={department}>
            {department}
          </option>
        ))}
      </Form.Input>

      <Form.Input
        name="city"
        label="Ciudad"
        placeholder="Seleccione una ciudad"
        control="select"
        onChange={handleCityChange}
        value={selectedCity}
      >
        <option value="">Seleccione una ciudad</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </Form.Input>

      <Form.Input
        name="email"
        label="Correo Electrónico"
        placeholder="Correo electrónico"
        autoComplete="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
      />

      <Form.Input
        name="new_password"
        label="Contraseña"
        type="password"
        autoComplete="new_password"
        placeholder="Contraseña"
        onChange={formik.handleChange}
        value={formik.values.new_password}
        error={formik.errors.new_password}
      />

      <Form.Input
        name="confirmPassword"
        label="Confirma Contraseña"
        type="password"
        autoComplete="confirmPassword"
        placeholder="Repetir contraseña"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        error={formik.errors.confirmPassword}
      />

      <Form.Checkbox
        name="privacyPolicy"
        label="He leído y acepto las politicas de privacidad"
        onChange={(_, data) =>
          formik.setFieldValue("privacyPolicy", data.checked)
        }
        checked={formik.values.privacyPolicy}
        error={formik.errors.privacyPolicy}
      />

      <Form.Button
        type="submit"
        primary
        fluid
        content="Registrarse"
        loading={formik.isSubmitting}
      />

      {error && <p className="register-form__error">{error}</p>}
    </Form>
  );
};
