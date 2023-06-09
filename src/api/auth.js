import { ENV } from "../utils";

const { BASE_PATH, API_ROUTES } = ENV;

export class Auth {
  baseApi = BASE_PATH;

  register = async (data) => {
    const url = `${this.baseApi}/${API_ROUTES.REGISTER}`;
    console.log(url);
    const params = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(params);

    try {
      const response = await fetch(url, params);
      if (!response.ok) {
        let errorMessage = "Error en la solicitud.";
        if (response.status === 400) {
          const errorData = await response.json();
          errorMessage = errorData.msg || errorMessage;
        }
        throw new Error(errorMessage);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      window.alert("Error en la solicitud: " + error.message);
      throw error;
    }
  };

  login = async (data) => {
    const url = `${this.baseApi}/${API_ROUTES.LOGIN}`;
    console.log(url);
    const params = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(params);
    try {
      const response = await fetch(url, params);
      if (!response.ok) {
        let errorMessage = "Error en la solicitud.";
        if (response.status === 400) {
          const errorData = await response.json();
          errorMessage = errorData.msg || errorMessage;
        }
        throw new Error(errorMessage);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      window.alert("Error en la solicitud: " + error.message);
      throw error;
    }
  };
}