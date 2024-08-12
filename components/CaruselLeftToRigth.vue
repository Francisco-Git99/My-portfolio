<template>
    <section class="skills-section">
        <h2>Backend Skills</h2>
        <div class="carousel" aria-label="Backend skills carousel">
            <ul class="carousel-inner">
                <!-- 5 imágenes originales -->
                <li class="carousel-item"><img src="/images/carusel-backend/express.png" alt="express.js logo"
                        loading="lazy"></li>
                <li class="carousel-item"><img src="/images/carusel-backend/firebase.png" alt="firebase logo"
                        loading="lazy"></li>
                <li class="carousel-item"><img src="/images/carusel-backend/Mongodb.png" alt="mongodb logo"
                        loading="lazy"></li>
                <li class="carousel-item"><img src="/images/carusel-backend/nodejs.png" alt="node.js logo"
                        loading="lazy"></li>
                <li class="carousel-item"><img src="/images/carusel-backend/npm.png" alt="npm logo" loading="lazy"></li>
            </ul>
        </div>
    </section>
</template>

<script setup>
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
}

.carousel-inner {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
}

.carousel-item {
    flex: 0 0 auto;
    width: 120px;
    height: 150px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.carousel-item img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: all 0.3s ease;
}

.carousel-item:hover {
    transform: scale(1.2);
    z-index: 1;
}
</style>