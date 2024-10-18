import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "../layouts";
import {Auth,Users,Blog,Especialidades,Menu,Newsletter,} from "../pages/admin";

const user = null;

export function AdminRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  // aqui controlamos la entrada a admin/users, solo si esta logeado puede entrar.
  return (
    <Routes>
      {!user ? (
        <Route path="/admin/*" element={<Auth/>} />
      ) : (
        <>
          {["/admin", "/admin/blog"].map((path) => (
            <Route
              key={path}
              path={path}
              element={loadLayout(AdminLayout, Blog)}
            />
          ))}
          <Route path="/admin/users" element={loadLayout(AdminLayout, Users)} />
          <Route
            path="/admin/especialidades"
            element={loadLayout(AdminLayout, Especialidades)}
          />
          <Route path="/admin/menu" element={loadLayout(AdminLayout, Menu)} />
          <Route
            path="/admin/newsletter"
            element={loadLayout(AdminLayout, Newsletter)}
          />
        </>
      )}
    </Routes>
  );
}
