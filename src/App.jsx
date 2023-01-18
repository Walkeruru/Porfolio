import './App.css'
import Estudio from './components/Estudio'
import Titulo from './components/Titulo'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Presentacion from './components/Presentacion'
import Skills from './components/Skills'
import Porfolio from './components/Portfolio'

function App() {
  return (
    <div className="App" data-bs-spy="scroll" data-bs-target="nav" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex="0">
      <Navbar></Navbar>
      <Presentacion></Presentacion>
      <hr />
      <Porfolio></Porfolio>
      <div className="mt-5" id="sobremi">
        <Titulo
          title="sobre mi"
          margin={"0 0 1em 0"}
        ></Titulo>
        <div className="container">
          <p className='fs-5'>Soy un desarrollador web orientado a la búsqueda de soluciones, proactivo, siempre en la búsqueda de aprender nuevas tecnologías y aventurero. Me gusta el desarrollo por la satisfacción que me produce superar los retos y me motiva la oportunidad que ofrece el software de influir positivamente en la vida de una persona y en el mundo en general.</p>
          <p className='fs-6'>No dudes en ponerte en contacto directamente en <a href="mailto:santiagoolivera.soly1@gmail.com">Santiagoolivera.soly1@gmail.com</a>.</p>
        </div>
      </div>
      <hr className='m-5' />
      <div className='mt-5'>
        <Titulo
          title="Educación"
          margin={"0 0 1em 0"}
          id="educacion"
        ></Titulo>
        <div className="container">
          <Estudio
            nombre={"Licenciatura en Estadistica"}
            description={"Facultad de Ciencias Económicas y de Administración"}
            fecha={"Marzo 2022-En curso"}
          ></Estudio>
          <Estudio
            nombre={"Jovenes A Programar - Ceibal"}
            description={"Desarrollo web - HTML, CSS, JavaScript, Bootstrap, Node.js"}
            duracion={"curso de 430 horas."}
            fecha={"Marzo 2022- Diciembre 2022"}
          ></Estudio>
          <a href="https://drive.google.com/file/d/12YiaYMJNMmdunDdNO7WmqtSprUqJ1c8_/view" target="_blank"><button className='botonCV'>Certificado</button></a>
        </div>
      </div>
      <hr className='m-5' />
      <div>
        <Titulo
          title={"skills"}
          id={"skills"}
          margin={"1em 0 1em 0"}
        ></Titulo>
        <Skills></Skills>
      </div>
      <hr className='m-5' />
      <div>
        <Titulo
          title={"contacto"}
          id="contacto"
          margin={"1em 0 1em 0"}
        ></Titulo>
        <div className="container">
          <div className='links d-lg-flex justify-content-around my-5'>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-envelope principal" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg> Email: <a href="mailto:Santiagoolivera.soly1@gmail.com">Santiagoolivera.soly1@gmail.com</a></p>
          <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-telephone-fill principal" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>  Telefono: +598 917 880 33
          </p>
          <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-linkedin principal" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>  Linkedin <a href="https://www.linkedin.com/in/santiagooliverapirri/">in/santiagooliverapirri</a>
          </p>
          </div>
          <div className='form'>
        <ContactForm
        ></ContactForm>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
