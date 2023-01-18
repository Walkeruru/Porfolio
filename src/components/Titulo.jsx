import React from "react";

const Titulo = ({ title, margin, id }) => (
    <h2 className="text-center fs-1 fw-bold principal text-uppercase" style={{"margin": margin}} id={id}>{title}:</h2>
)

export default Titulo;