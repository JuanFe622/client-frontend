import React, { useState } from "react";
import { Tab } from "semantic-ui-react";
import { image } from "../../../assets/";
import { RegisterForm, LoginForm } from "../../../components/Admin/Auth";
import "./Auth.scss";

export const Auth = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const openLogin = () => {
    setActiveIndex(0);
    console.log("Entre en tab");
  };

  const panels = [
    {
      menuItem: "Ingresar",
      render: () => {
        return (
          <Tab.Pane className="auth__form-panel">
            <LoginForm />
          </Tab.Pane>
        );
      },
    },
    {
      menuItem: "Registrarse",
      render: () => {
        return (
          <Tab.Pane className="auth__form-panel">
            <RegisterForm openLogin={openLogin} />
          </Tab.Pane>
        );
      },
    },
  ];

  return (
    <div className="auth">
      <img src={image.logo} alt="" className="logo" />
      <Tab
        panes={panels}
        className="auth__form"
        activeIndex={activeIndex}
        onTabChange={(_, data) => setActiveIndex(data.activeIndex)}
      />
    </div>
  );
};
