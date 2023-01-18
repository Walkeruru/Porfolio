import React from "react";
import Titulo from "./Titulo";
import Proyecto from "./Proyecto";

const Porfolio = () => (
    <div id='porfolio' className='min-vh-100'>
        <Titulo
          title="porfolio"
        ></Titulo>
        <div className="container mt-4">
          <div className="row gap-lg-0 gap-4 gy-2">
            <Proyecto
              src={"assets/img/f1.png"}
              titulo={"F1 Extension"}
              description={'F1 Extension es una extensión de Chrome que muestra el calendario actualizado de la temporada actual de la formula 1.'}
              github={"https://github.com/Walkeruru/F1-extension"}
              live={"https://github.com/Walkeruru/F1-extension"} ></Proyecto>
            <Proyecto
              src={"assets/img/emercado.png"}
              titulo={"e-Mercado"}
              description={'Proyecto de e-commerce para el programa de Desarrollo Web de Jóvenes a Programar.'}
              github={"https://github.com/Walkeruru/eMercado"}
              live={"https://walkeruru.github.io/eMercado/"}>
            </Proyecto>
            <Proyecto
              src={"assets/img/foody.png"}
              titulo={"Foody"}
              description={'Foody es una pagina sobre un restaurante (imaginario) con seccion de Menu, Sobre nosotros y Contacto'}
              github={"https://github.com/Walkeruru/RestaurantePage"}
              live={"https://walkeruru.github.io/RestaurantePage"} >
            </Proyecto>
            <Proyecto
              src={"assets/img/weather.png"}
              titulo={"Weather App"}
              description={'Weather App es una aplicación web que utiliza laAPI de OpenWeatherMap para obtener el estado del tiempo'}
              github={"https://github.com/Walkeruru/weather-app"}
              live={"https://walkeruru.github.io/weather-app/"}>
            </Proyecto>
            <Proyecto
              src={"assets/img/porfolio.png"}
              titulo={"Porfolio"}
              description={'Este mismo Porfolio que te encuentras viendo :D'}
            ></Proyecto>
          </div>
        </div>
      </div>
)

export default Porfolio;