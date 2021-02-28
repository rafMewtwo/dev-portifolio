import React from 'react';
import emailjs from 'emailjs-com';
import devInfo from '../data/devInfo';

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_6dj816f', 'template_9mtlepn', e.target, 'user_jxPjNBQBnyVPQ0lL8jNxr')
      .then((result) => {
          console.log(result.text);
          alert(`Sua mensagem foi enviada com sucesso! em breve entraremos em contato com você!`);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <section id="contato">
      <div>
        <div className="container-fluid" onSubmit={sendEmail} >
          <h3 className="text-center" >Disponivel para oportunidades</h3>
          <h4 className="text-center"><i className="fas fa-envelope-square icones fa-lg"></i> {devInfo.links.email}</h4>
          <h4 className="text-center"><i className="fab fa-whatsapp-square icones fa-lg"> </i> {devInfo.whatsapp}</h4> 
          <h4 className="text-center">Sinta-se a vontade de entrar em contato diretamente ou pelo nosso sistema de mensagens abaixo</h4>
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Nome</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nome e sobrenome" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput2">Endereço de email</label>
              <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="nome@exemplo.com" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput3">Assunto</label>
              <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Assunto" name="subject" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Digite sua mensagem</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" ></textarea>
            </div>
            <button className="btn btn-primary my-2" type="Submit" >Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
};

export default Contact;
