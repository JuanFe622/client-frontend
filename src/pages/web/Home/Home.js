import React from 'react'
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
        <h1>Ir a Admin Login</h1>
        <button onClick={() => navigate("/admin/")}>Ir a Admin Login</button>
    </div>
  )
}
