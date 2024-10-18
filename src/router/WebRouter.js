import React from 'react'
import {Routes, Route} from "react-router-dom";
import {ClientLayout} from "../layouts";
import {Home, Contacto, Especialidades, Blog, Post} from "../pages/web";

export function WebRouter() {

  const loadLayout = (Layout, Page) =>{
    return(
      <Layout>
        <Page />
      </Layout>
    )
  };


  return (
    <Routes>
      <Route path='/' element={loadLayout(ClientLayout, Home)}/>
      <Route path='/especialidades' element={loadLayout(ClientLayout, Especialidades)}/>
      <Route path='/contacto' element={loadLayout(ClientLayout, Contacto)}/>
      <Route path='/blog' element={loadLayout(ClientLayout, Blog)}/>
      <Route path='/blog/:path' element={loadLayout(ClientLayout, Post)}/>
    </Routes>
  );
}
