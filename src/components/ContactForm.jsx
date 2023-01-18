import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mjvdkkzd");
  if (state.succeeded) {
      return <p>Gracias por contactarme!</p>;
  }
  return (
    <div className='row justify-content-center mt-5'>
        <div className="col-lg-5 col-10 text-center mb-5">
      <form onSubmit={handleSubmit}>
      <label htmlFor="email" className='label-control'>
        Email:
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className='form-control mb-2'
        required
        placeholder='Email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        className="form-control mb-2"
        placeholder='Escribe un mensaje'
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='botonCV' type="submit" disabled={state.submitting}>
        Enviar
      </button>
    </form>
    </div>
    </div>
  );
}
export default  ContactForm;