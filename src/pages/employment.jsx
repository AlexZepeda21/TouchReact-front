export default function Employment() {
  return (
    <>
      <h1>Estoy en employments</h1>
    </>
  )
}
/* 
---
// components
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/contactme.css";
// import Btncode from "../Buttons/BtnCode"; // Lo comenté porque necesitamos un botón de submit nativo o modificar este componente

// Si deseas usar tu BtnCode como submit, este debe aceptar type="submit" y onClick, no un link.
---

<div class="presentation-container">
  <div class="container-insideContactme">
    <form id="contactForm">
      <h1 class="name-title">Contactame</h1>
      <div class="w-full rounded-xl p-9 shadow-2xl">
        
        <div class="form-group">
          <h1 class="tittle-contact" style="color: white;">
            Ingrese su correo electrónico
          </h1>
          <input
            type="email"
            name="email" 
            class="form-control"
            placeholder="ejemplo@correo.com"
            style="color: aliceblue;"
            required
          />
        </div>

        <div class="form-group">
          <h1 class="tittle-contact" style="color: white;">
            ¿Cuál es su nombre?
          </h1>
          <input
            type="text"
            name="name"
            class="form-control"
            placeholder="Escribe tu nombre"
            style="color: aliceblue;"
            required
          />
        </div>

        <div class="form-group">
          <h1 class="tittle-contact" style="color: white;">
            ¿Cuál es su número telefónico?
          </h1>
          <input
            type="tel"
            name="phone"
            class="form-control"
            placeholder="Tu número"
            style="color: aliceblue;"
          />
        </div>

        <div class="form-group">
          <h1 class="tittle-contact" style="color: white;">Motivo</h1>
          <textarea
            name="message"
            class="form-control"
            placeholder="Escribe el motivo"
            style="color: aliceblue;"
            required
          />
        </div>

        <div style="color: white; margin-top: 20px;">
          <button type="submit" class="btn btn-primary btn-lg w-100">
             Enviar Mensaje
          </button>
        </div>

        <p id="form-status" style="margin-top: 15px; font-weight: bold;"></p>

      </div>
    </form>
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contactForm') as HTMLFormElement | null;
    const status = document.getElementById('form-status') as HTMLElement | null;

    if (!form || !status) return;

    form.addEventListener('submit', async function(event) {
      event.preventDefault();
      
      const formData = new FormData(form);
      status.innerHTML = "Enviando...";
      status.style.color = "yellow";

      try {
        const response = await fetch("https://formspree.io/f/xzdadyjb", {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          status.innerHTML = "¡Gracias! Tu mensaje ha sido enviado.";
          status.style.color = "#00ff00";
          form.reset();
        } else {
          const data = await response.json();
          if (data.errors) {
            status.innerHTML = data.errors
              .map((error: any) => error.message)
              .join(", ");
          } else {
            status.innerHTML = "Hubo un problema al enviar el formulario.";
          }
          status.style.color = "red";
        }
      } catch (error) {
        status.innerHTML = "Error de conexión. Intenta nuevamente.";
        status.style.color = "red";
      }
    });
  });
</script>
*/