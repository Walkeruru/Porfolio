import React from "react";

const Estudio = ({ nombre, description, duracion, fecha }) => (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
        <div className="flex-grow-1">
            <h3 className="mb-0 fs-1 principal text-uppercase fw-bold">{ nombre }</h3>
            <div className="fs-2 mb-3 text-uppercase card-text">{ description }</div>
            <div>{ duracion }</div>
            <p> </p>
        </div>
        <div className="flex-shrink-0"><span className="apellido">{ fecha }</span></div>
    </div>
)

export default Estudio;