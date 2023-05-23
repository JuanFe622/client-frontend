import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/web/Home";
import { Contact } from "../pages/web/Contact";
import { Categories } from "../pages/web/Categories";
import { Posts } from "../pages/web/Posts";
import { Services } from "../pages/web/Services";

import { ClientLayout } from "../layouts/ClientLayout";

export const WebRouter = () => {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/" element={loadLayout(ClientLayout, Home)} />
      <Route path="/contact" element={loadLayout(ClientLayout, Contact)} />
      <Route path="/category" element={loadLayout(ClientLayout, Categories)} />
      <Route path="/category/post" element={loadLayout(ClientLayout, Posts)} />
      <Route path="/services" element={loadLayout(ClientLayout, Services)} />
    </Routes>
  );
};
