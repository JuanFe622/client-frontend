import React from "react";
import { Routes, Route } from "react-router-dom";
import { map } from "lodash";

import { Auth } from "../pages/admin/Auth";
import { Home } from "../pages/admin/Home";
import { Users } from "../pages/admin/Users";
import { Services } from "../pages/admin/Services";
import { Categories } from "../pages/admin/Categories";
import { Clients } from "../pages/admin/Clients";
import { Menu } from "../pages/admin/Menu";

import { AdminLayout } from "../layouts/AdminLayout";
import { useAuth } from "../hooks";

export const AdminRouter = () => {
  console.log(useAuth());
  const {user} = useAuth();
  const paths = ["/admin", "/admin/home"];

  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  
  return (
    <Routes>
      {!user ? (
        <Route path="/admin/*" element={<Auth/>} />
      ) : (
        <>
          {map(paths, (path) => (
            <Route
              key={path}
              path={path}
              element={loadLayout(AdminLayout, Home)}
            />
          ))}
          <Route path="/admin/users" element={loadLayout(AdminLayout, Users)} />
          <Route
            path="/admin/services"
            element={loadLayout(AdminLayout, Services)}
          />
          <Route
            path="/admin/categories"
            element={loadLayout(AdminLayout, Categories)}
          />
          <Route
            path="/admin/clients"
            element={loadLayout(AdminLayout, Clients)}
          />
          <Route path="/admin/menu" element={loadLayout(AdminLayout, Menu)} />
        </>
      )}
    </Routes>
  );
};