<template>
  <section class="skills-section">
    <h2>Frontend Skills</h2>
    <div class="carousel" role="region" aria-roledescription="carousel" aria-label="Frontend skills carousel">
      <ul class="carousel-inner" ref="carouselInner">
        <li v-for="(skill, index) in skills" :key="index" class="carousel-item">
          <img :src="skill.image" :alt="skill.alt" :title="skill.alt" loading="lazy">
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const skills = [
  { image: "/images/carusel-frontend/html5.png", alt: "HTML5 logo" },
  { image: "/images/carusel-frontend/css3.png", alt: "CSS3 logo" },
  { image: "/images/carusel-frontend/sass.png", alt: "Sass logo" },
  { image: "/images/carusel-frontend/bootstrap.png", alt: "Bootstrap logo" },
  { image: "/images/carusel-frontend/js.png", alt: "JavaScript logo" },
  { image: "/images/carusel-frontend/vue.png", alt: "Vue.js logo" },
  { image: "/images/carusel-frontend/vite.png", alt: "Vite logo" },
  { image: "/images/carusel-frontend/piniajs.png", alt: "Pinia logo" },
  { image: "/images/carusel-frontend/vuex.png", alt: "Vuex logo" },
  { image: "/images/carusel-frontend/nuxt-js.png", alt: "Nuxt.js logo" },
  { image: "/images/carusel-frontend/quasarframework.png", alt: "Quasar Framework logo" },
];

const carouselInner = ref(null);

onMounted(() => {
  if (carouselInner.value) {
    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - carouselInner.value.offsetLeft;
      scrollLeft = carouselInner.value.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
    };

    const onMouseUp = () => {
      isDown = false;
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carouselInner.value.offsetLeft;
      const walk = (x - startX) * 2;
      carouselInner.value.scrollLeft = scrollLeft - walk;
    };

    carouselInner.value.addEventListener('mousedown', onMouseDown);
    carouselInner.value.addEventListener('mouseleave', onMouseLeave);
    carouselInner.value.addEventListener('mouseup', onMouseUp);
    carouselInner.value.addEventListener('mousemove', onMouseMove);

    // Limpieza de eventos al desmontar el componente
    return () => {
      carouselInner.value.removeEventListener('mousedown', onMouseDown);
      carouselInner.value.removeEventListener('mouseleave', onMouseLeave);
      carouselInner.value.removeEventListener('mouseup', onMouseUp);
      carouselInner.value.removeEventListener('mousemove', onMouseMove);
    };
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

.skills-section {
  margin: 2em 0;
}

h2 {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: normal;
  text-decoration: underline;
  font-size: 2em;
  margin-bottom: 1em;
  text-align: center;
  color: whitesmoke;
}

.carousel {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.carousel-inner {
  display: flex;
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
  cursor: grab;
}

.carousel-inner::-webkit-scrollbar {
  display: none;
  /* WebKit */
}

.carousel-item {
  flex: 0 0 auto;
  width: calc(100% / 7);
  height: 175px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  scroll-snap-align: center;
}

.carousel-item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;
}

.carousel-item:hover {
  transform: scale(1.1);
  z-index: 1;
}

.carousel-item:focus-within {
  outline: 2px solid #4a90e2;
}

.carousel-item img {
  font-size: 0.8rem;
  color: #333;
}

@media screen and (max-width: 768px) {
  .carousel-item {
    width: calc(100% / 4);
  }
}

@media screen and (max-width: 390px) {
  .carousel-item {
    width: calc(100% / 3);
  }
}
</style>