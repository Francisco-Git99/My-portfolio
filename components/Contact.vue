<template>
    <section id="contacto">
        <div class="container">
            <article class="form-contact">
                <h2>Contactarme</h2>
                <h3>¿Tienes un proyecto en mente?<br> Completa el formulario y hablemos 😁</h3>
                <form ref="form" @submit.prevent="sendEmail">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="from_name">Nombre</label>
                            <input type="text" id="from_name" name="from_name" required aria-required="true"
                                aria-describedby="from_name_error" />
                        </div>
                        <div class="form-group">
                            <label for="email_id">Correo electrónico</label>
                            <input type="email" id="email_id" name="email_id" required aria-required="true"
                                aria-describedby="email_id_error" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="message">Tu mensaje</label>
                        <textarea id="message" name="message" rows="4" required placeholder="Tu mensaje..."
                            aria-required="true" aria-describedby="message_error"></textarea>
                    </div>
                    <button type="submit">Enviar Mensaje</button>
                </form>
            </article>
            <article class="image-contact">
                <img src="/images/coworking-customer-service-person-answering-question.gif"
                    alt="Persona respondiendo una pregunta de servicio al cliente en un entorno de coworking" />
            </article>
        </div>
    </section>
    <!-- Alerta de éxito -->
    <div class="success-alert" v-if="showSuccessAlert">
        <div class="success-icon">✓</div>
        <div class="success-text">Mensaje enviado con éxito</div>
    </div>
    <!-- Alerta de Error -->
    <div class="error-alert" v-if="showErrorAlert">
        <div class="error-icon">X</div>
        <div class="error-text">{{ errorMessage }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
const showSuccessAlert = ref(false);
const showErrorAlert = ref(false);
const errorMessage = ref('');

const config = useRuntimeConfig();
const form = ref(null);

const handleError = (error) => {
    console.error('FAILED...', error);
    errorMessage.value = 'Hubo un error al enviar el mensaje. Porfavor notificar el problema a JoseFranciscoPaez1999@gmail.com.';
    showErrorAlert.value = true;
    setTimeout(() => {
        showErrorAlert.value = false;
    }, 6000);
};

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

const sendEmail = async () => {
    const fromName = escapeHtml(form.value.from_name.value.trim());
    const emailId = escapeHtml(form.value.email_id.value.trim());
    const message = escapeHtml(form.value.message.value.trim());

    if (!fromName || !emailId || !message) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailId)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return;
    }

    const serviceID = config.public.EMAILJS_SERVICE_ID;
    const templateID = config.public.EMAILJS_TEMPLATE_ID;
    const publicKey = config.public.EMAILJS_PUBLIC_KEY;

    try {
        const result = await emailjs.sendForm(serviceID, templateID, form.value, publicKey);
        console.log('SUCCESS!', result.text);
        form.value.reset();
        showSuccessAlert.value = true;
        setTimeout(() => {
            showSuccessAlert.value = false;
        }, 3000);
    } catch (error) {
        handleError(error);
    }
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');

#contacto {
    width: 80%;
    margin: 2em auto 0;
    padding: 2em;
    border: 2px solid #19c778;
    border-radius: 1em;
    color: whitesmoke;
    margin-bottom: 1em;
}

#contacto h2 {
    font-family: "Mochiy Pop One", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2.3em;
    margin: 0.5em 0;
}

#contacto h3 {
    font-size: 1.2em;
    margin-bottom: 1.5em;
    font-family: "Mochiy Pop One", sans-serif;
    font-weight: 400;
    font-style: normal;
}

.container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    gap: 2em;
}

.form-contact {
    flex: 1;
    max-width: 500px;
    position: relative;
    left: 4em;
}

.form-row {
    display: flex;
    gap: 1em;
    margin-bottom: 1em;
}

.form-group {
    flex: 1;
    display: flex;
    flex-direction: column;
}

label {
    font-size: 0.8em;
    margin-bottom: 0.3em;
    font-family: "Mochiy Pop One", sans-serif;
    font-weight: 400;
    font-style: normal;
}

input,
textarea {
    width: 100%;
    padding: 0.8em;
    border: 2px solid #14a15f;
    border-radius: 0.5em;
    background-color: transparent;
    color: whitesmoke;
    transition: border-color 0.3s, box-shadow 0.3s;
    box-sizing: border-box;
}

input::placeholder,
textarea::placeholder {
    color: whitesmoke;
    font-weight: 600;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #19c778;
    box-shadow: 0 0 0 2px rgba(20, 161, 95, 0.2);
}

button {
    width: 100%;
    padding: 1em;
    background-color: #19c778;
    color: whitesmoke;
    border: none;
    border-radius: 0.5em;
    font-family: "Mochiy Pop One", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 0.9em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 1em;
}

button:hover {
    background-color: #14a15f;
}

.image-contact {
    position: relative;
    right: 6em;
}

/*Alerta de exito*/
.success-alert {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #2c3e50;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.success-icon {
    background-color: #2ecc71;
    color: #fff;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-weight: bold;
}

.success-text {
    font-size: 14px;
}

/*Alerta de error*/
.error-alert {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff4d4d;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.error-icon {
    background-color: #c0392b;
    color: #fff;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 16px;
}

.error-text {
    font-size: 14px;
}

@media screen and (max-width: 1720px) {

    .form-contact {
        left: 0em;
    }

    .image-contact {
        right: 0em;
    }
}

@media screen and (max-width: 1300px) {
    .form-contact {
        left: 0em;
    }

    .form-contact h2,
    .form-contact h3 {
        text-align: center;
    }

    .image-contact {
        display: none;
    }
}

@media screen and (max-width: 590px) {
    .container {
        flex-direction: column;
        align-items: center;
    }

    #contacto h3 {
        font-size: 1em;
    }

    .form-row {
        flex-direction: column;
        gap: 0;
    }

    .form-group {
        margin-bottom: 1em;
    }
}
</style>
