import React from "react";

const BtnContacto = ({ src, link }) => (
    <a href={link} target="__blank" className="social-icon">
     {src}
    </a>
  );
  
export default BtnContacto;