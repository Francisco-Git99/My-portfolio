<template>
    <div class="navbar-container">
        <nav class="nav-list" aria-label="Navegación principal" role="navigation">
            <button @click="toggleMenu" class="hamburger" :class="{ 'is-active': isMenuOpen }"
                aria-label="Toggle navigation" :aria-expanded="isMenuOpen">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
            <ul :class="{ 'mobile-menu': true, 'is-active': isMenuOpen }">
                <li>
                    <a href="#inicio" @click="scrollToSection($event, 'inicio')"
                        :aria-current="currentSection === 'inicio' ? 'page' : undefined">Inicio</a>
                </li>
                <li>
                    <a href="#sobre-mi" @click="scrollToSection($event, 'sobre-mi')"
                        :aria-current="currentSection === 'sobre-mi' ? 'page' : undefined">Sobre Mí</a>
                </li>
                <!-- <li>
                    <NuxtLink to="/services" aria-label="Ver nuestros servicios" title="Servicios ofrecidos" role="link"
                        tabindex="0">
                        Servicios
                    </NuxtLink>
                </li> -->
                <li>
                    <a href="#proyectos" @click="scrollToSection($event, 'proyectos')"
                        :aria-current="currentSection === 'proyectos' ? 'page' : undefined">Proyectos</a>
                </li>
                <li>
                    <a href="#contacto" @click="scrollToSection($event, 'contacto')"
                        :aria-current="currentSection === 'contacto' ? 'page' : undefined">Contacto</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const isMenuOpen = ref(false);
const currentSection = ref('inicio');
const router = useRouter();
const route = useRoute();

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

function scrollToSection(event, sectionId) {
    event.preventDefault();

    // Verificar si estamos en la página de servicios
    if (route.path === '/services') {
        // Redirigir a la página de inicio
        router.push('/').then(() => {
            // Esperar a que la navegación se complete
            nextTick(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                    isMenuOpen.value = false;
                    currentSection.value = sectionId;
                }
            });
        });
    } else {
        // Si estamos en la página de inicio, hacer scroll
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            nextTick(() => {
                isMenuOpen.value = false;
                currentSection.value = sectionId;
            });
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.navbar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

.nav-list {
    font-size: 18px;
    background-color: rgba(5, 106, 126, 1);
    border: 1px solid #19c778;
    border-top: none;
    border-radius: 0 0 2em 2em;
    height: 3.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2em;
    position: relative;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
}

.nav-list ul {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-list li {
    margin-left: 2em;
}

.nav-list a {
    text-decoration: none;
    color: whitesmoke;
    position: relative;
    transition: color 0.3s ease-in-out;
}

.nav-list a[aria-current="page"] {
    font-weight: bold;
}

.nav-list a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
}

.nav-list a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}

.hamburger {
    display: none;
}

.nav-list a:focus {
    outline: 2px solid #19c778;
    outline-offset: 2px;
}

/* Media Queries for Responsiveness */

@media screen and (max-width: 768px) {
    .nav-list {
        flex-direction: column;
        align-items: flex-end;
        height: auto;
        padding: 1em;
        border-radius: 0em 0em 0.5em 0.5em;
    }

    .hamburger {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 30px;
        height: 30px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 10;
    }

    .hamburger-line {
        width: 30px;
        height: 3px;
        background-color: #0b4208;
        border-radius: 10px;
        transition: all 0.3s linear;
    }

    .hamburger.is-active .hamburger-line:nth-child(1) {
        transform: translateY(10px) rotate(45deg);
    }

    .hamburger.is-active .hamburger-line:nth-child(2) {
        opacity: 0;
    }

    .hamburger.is-active .hamburger-line:nth-child(3) {
        transform: translateY(-10px) rotate(-45deg);
    }

    .nav-list ul {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        background-color: rgba(5, 106, 126, 1);
        flex-direction: column;
        align-items: center;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out, padding 0.3s ease-out;
        padding: 0;
        z-index: 999;
    }

    .nav-list ul.mobile-menu.is-active {
        justify-content: center;
        max-height: 300px;
        padding: 0.5em 0;
        border: 0.5px solid #19c778;
        border-top: none;
        border-radius: 0em 0em 0.5em 0.5em;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .nav-list li {
        margin: 1em 0;
        opacity: 0;
        transform: translateY(-20px);
        transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    }

    .nav-list ul.mobile-menu.is-active li {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
