import React from "react";

const Skills = () => (
    <div className="container">
          <div className="fs-2 mb-3 text-uppercase card-text">lenguajes de programación</div>
          <p className='d-flex gap-2'>
            <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white" />
            <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white" />
            <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" />
          </p>
          <div className="fs-2 mb-3 text-uppercase card-text">frameworks y librerías</div>
          <p className='d-flex gap-2'>
            <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&amp;logo=bootstrap&amp;logoColor=white" />
            <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB" />
          </p>
          <div className="mb-3">Estoy aprendiendo</div>
          <ul className="mb-1">
            <li>
              <span className="fa-li"><svg height={"1em"} className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg> <i className="fas fa-check"></i></span>
              IBM Full Stack Software Developer en <a href="https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer" target={"_blank"}>Coursera.</a>
            </li>
            <li>
              <span className="fa-li"><svg height={"1em"} className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg> <i className="fas fa-check"></i></span>
              Metodologías ágiles, Scrum Master Certification en <a href="https://www.coursera.org/specializations/learnquest-certified-scrum-master">Coursera.</a>
            </li>
          </ul>
        </div>
)

export default Skills;