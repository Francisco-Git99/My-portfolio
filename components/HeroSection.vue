<template>
    <header id="inicio" class="hero">
        <div class="content">
            <img class="fade-in" src="@/assets/images/ilustracion-desarrollador.png" alt="Ilustración de desarrollador"
                loading="lazy">
            <div class="hero-content">
                <h1 class="fade-in">Hola, me llamo Francisco y soy un apasionado Desarrollador Web</h1>
                <h2 class="fade-in">¿Quieres crear tu sitio web?<br>Trabajemos juntos para hacerlo realidad</h2>
                <div class="button-container fade-in delayed">
                    <a href="#contacto" class="btn" aria-label="Contactarme">Contactarme</a>
                    <a href="#sobre-mi" class="btn btn-simple" aria-label="Sobre Mí">Sobre Mí</a>
                </div>
            </div>
        </div>
    </header>
</template>


<script setup>

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

.hero {
    margin-top: 6em;
    display: flex;
    justify-content: center;
}

.content {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    border: 2px solid #19c778;
    border-radius: 1em;
}

.hero img {
    width: 30em;
}

.hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    margin-top: 6em;
}

.hero h1 {
    width: 130%;
    color: white;
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 0.5em;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-style: normal;
}

.hero h2 {
    width: 130%;
    color: #78FF91;
    text-align: center;
    font-size: 1.8em;
    margin-bottom: 1.2em;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-style: normal;
}

.button-container {
    display: flex;
    gap: 1em;
}

.btn {
    text-decoration: none;
    padding: 0.5em 1em;
    font-size: 1.1em;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-style: normal;
    background-color: #19c778;
    color: white;
    border: 2px solid transparent;
    border-radius: 0.5em;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
    box-sizing: border-box;
}

.btn:hover {
    background-color: #1a8c86;
    border-color: #19c778;
}

.btn-simple {
    background-color: transparent;
    border-color: #19c778;
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-style: normal;
}

.fade-in {
    opacity: 0;
    animation: fadeIn 1s ease-in forwards;
}

.delayed {
    animation-delay: 1s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* Media Queries for Responsiveness */

@media screen and (max-width: 1415px) {
    .hero-content {
        margin-top: 2em;
        margin-bottom: 2em;
    }

    .hero img {
        width: 25em;
    }

    .btn {
        text-align: center
    }
}

@media screen and (max-width: 1025px) {
    .content {
        padding-left: 1em;
        padding-right: 1em;
        flex-direction: column-reverse;
        align-items: center;
    }

    .content img {
        display: none;
    }

    .hero-content {
        margin-top: 2em;
        margin-bottom: 2em;
        width: 80%;
    }
}

@media screen and (max-width: 400px) {
    .content {
        padding-left: 1em;
        padding-right: 1em;
    }

    .hero h1 {
        font-size: 2.3em;
    }

    .button-container {
        flex-direction: column;
        gap: 1em;
    }
}
</style>
