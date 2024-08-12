<template>
  <div class="container-about-me">
    <section id="sobre-mi">
      <h2>Sobre Mí</h2>
      <div class="paragraph-container">
        <p ref="paragraph" :class="{ 'truncated': isTruncated, 'expanded': !isTruncated }">
          Soy un apasionado del diseño y desarrollo web. Mi viaje en el mundo del desarrollo web ha sido
          completamente autodidacta, lo que me ha permitido aprender de manera flexible y adaptativa. Disfruto
          creando soluciones web atractivas y funcionales que no solo cumplen con los objetivos del cliente, sino
          que también brindan una experiencia de usuario excepcional. Desde pequeño, me fascinaba cómo funcionaban
          las páginas web, lo que me llevó a dedicar incontables horas a aprender y experimentar por mi cuenta.
          Actualmente, me estoy especializando en el framework Vue.js, una poderosa herramienta que me permite
          construir interfaces de usuario dinámicas y reactivas. Sin embargo, mi curiosidad y ganas de aprender no
          se detienen ahí, estoy siempre abierto a explorar y dominar nuevas tecnologías web. Mi compromiso con el
          aprendizaje continuo me permite mantenerme al día con las últimas tendencias y mejores prácticas del
          desarrollo web. Esto asegura que siempre ofrezca soluciones modernas y eficaces en cada proyecto que
          emprendo. Estoy emocionado por la posibilidad de trabajar en nuevos proyectos y desafíos. ¡No dudes en
          contactarme para hablar sobre cómo podemos colaborar!
        </p>
        <button v-show="showButton" @click="toggleTruncate" class="ver-mas-btn" :aria-expanded="!isTruncated">
          {{ isTruncated ? 'Ver más' : 'Ver menos' }}
        </button>
        <button v-show="!isTruncated" @click="downloadCV" class="download-cv-btn">
          Descargar CV
        </button>
      </div>
    </section>
    <CaruselRightToLeft />
    <CaruselLeftToRigth />
  </div>
</template>

<script setup>
import CaruselRightToLeft from './CaruselRightToLeft.vue';
import CaruselLeftToRigth from './CaruselLeftToRigth.vue';
import { ref, onMounted, nextTick, onUnmounted } from 'vue';

const paragraph = ref(null);
const isTruncated = ref(true);
const showButton = ref(false);

const toggleTruncate = () => {
  isTruncated.value = !isTruncated.value;
  nextTick(() => {
    checkTruncation();
  });
};

const checkTruncation = () => {
  if (paragraph.value) {
    const computedStyle = getComputedStyle(paragraph.value);
    const lineHeight = parseFloat(computedStyle.lineHeight) || 24;
    const maxHeight = lineHeight * 6;
    showButton.value = paragraph.value.scrollHeight > maxHeight;
  }
};

const downloadCV = () => {
  const cvUrl = '/FranciscoPaez-CV.pdf';
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = 'CV_FranciscoPaez.pdf';
  link.click();
};

onMounted(() => {
  nextTick(() => {
    checkTruncation();
    window.addEventListener('resize', checkTruncation);
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', checkTruncation);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

.container-about-me {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#sobre-mi {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #19c778;
  border-radius: 1em;
  padding: 2em 0;
}

#sobre-mi h2 {
  width: 80%;
  color: white;
  font-size: 2.3em;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: normal;
  margin-top: 20px;
  text-align: center;
  text-decoration: underline;
}

.paragraph-container {
  width: 80%;
  position: relative;
}

#sobre-mi p {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.5em;
  margin-top: 1em;
  color: whitesmoke;
  text-align: justify;
  font-weight: 500;
  line-height: 1.5em;
  overflow: hidden;
  transition: max-height 0.5s ease, padding 0.5s ease;
  max-height: 9em;
}

#sobre-mi p.expanded {
  max-height: 1000px;
}

.ver-mas-btn {
  text-decoration: none;
  padding: 0.5em 1em;
  font-size: 1.1em;
  background-color: #19c778;
  color: white;
  border: 2px solid transparent;
  border-radius: 0.5em;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  box-sizing: border-box;
  margin-top: 1em;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.ver-mas-btn:hover {
  background-color: #1a8c86;
  border-color: #19c778;
}

.download-cv-btn {
  text-decoration: none;
  padding: 0.5em 1em;
  font-size: 1.2em;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color: #19c778;
  color: white;
  border: 2px solid transparent;
  border-radius: 0.5em;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  box-sizing: border-box;
  margin-top: 1em;
  margin-left: 1.8em;
}

.download-cv-btn:hover {
  background-color: #1a8c86;
  border-color: #19c778;
}

@media (max-width: 768px) {
  #sobre-mi {
    width: 84%;
  }

  .paragraph-container {
    width: 86%;
  }

  #sobre-mi p {
    font-size: 1.3em;
  }
}

@media screen and (max-width: 480px) {
  #sobre-mi {
    width: 88%;
  }

  #sobre-mi p {
    font-size: 1.1em;
    line-height: 1.3em;
  }

  .ver-mas-btn {
    margin-right: 0.5em;
  }

  .download-cv-btn {
    margin-left: 0;
  }
}
</style>
