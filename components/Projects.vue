<template>
    <section id="proyectos" role="region" aria-labelledby="proyectos-heading">
        <h2 id="proyectos-heading">Proyectos</h2>
        <div class="container">
            <article class="art" role="article">
                <img src="/images/projects/Fylodarkthemelandingpage.png" alt="Landing page Fylo Dark" />
                <h3>Landing page Fylo Dark</h3>
                <a href="https://fylo-dark-theme-landing-page-master-beta.vercel.app/" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
            </article>
            <article class="art" role="article">
                <img src="/images/projects/Clipboardlandingpage.png" alt="Clipboard Landing page" />
                <h3>Clipboard Landing page</h3>
                <a href="https://clipboard-landing-page-master-sooty.vercel.app/" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
            </article>
            <article class="art" role="article">
                <h3>Próximamente</h3>
            </article>
            <article class="art" role="article">
                <h3>Próximamente</h3>
            </article>
            <article class="art" role="article">
                <h3>Próximamente</h3>
            </article>
            <article class="art" role="article">
                <h3>Próximamente</h3>
            </article>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
#proyectos {
    width: 80%;
    margin: 0 auto;
    padding: 2em;
    border: 2px solid #19c778;
    border-radius: 1em;
}

#proyectos h2 {
    text-align: center;
    font-size: 2.5em;
    margin: 0.8em 0 1em;
    color: whitesmoke;
    text-decoration: underline;
}

.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5em;
}

.art {
    height: 300px;
    /* Ajustado para dar espacio a la imagen y texto */
    border: 2px solid #19c778;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1em;
    font-size: 1.2em;
    color: whitesmoke;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.art img {
    max-width: 100%;
    border-radius: 1em;
    margin-bottom: 1em;
}

.art h3 {
    margin: 0.5em 0;
}

.art p {
    font-size: 1em;
}

.art a {
    margin-top: 0em;
    color: gainsboro;
    text-decoration: none;
}

.art a:hover{
    text-decoration: underline;
}

.art:hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1024px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }
}
</style>
