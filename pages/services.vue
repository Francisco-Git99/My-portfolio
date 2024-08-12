<template>
    <section id="services">
        <div class="container-hero">
            <header>
                <h1>Transforma tu Visión en Realidad, Desarrollo Web a Medida.</h1>
            </header>
            <img src="/images/development.png" alt="">
        </div>

        <p>
            ¿Necesitas un sitio web que no solo sea visualmente atractivo, sino también funcional y adaptado a tus
            objetivos?
            Soy Francisco, un desarrollador web apasionado por crear experiencias digitales personalizadas utilizando
            HTML,
            CSS y JavaScript. Trabajemos juntos para construir una solución web a medida que capture la esencia de tu
            negocio y maximice tu impacto en línea.
        </p>

        <div class="card-container">
            <ul class="card-list">
                <li class="card">
                    <img src="/images/modul-lettering-ux-slash-ui-with-toolbar-and-web-design-interface-text.gif"
                        alt="Descripción de la imagen 1" class="card-image perz">
                    <div class="card-content">
                        <strong>Diseño Personalizado:</strong>
                        <p>Cada proyecto es único y se diseña específicamente para satisfacer tus necesidades y
                            preferencias.</p>
                    </div>
                </li>
                <li class="card">
                    <img src="/images/coworking-male-programmer-writing-program-code.gif"
                        alt="Descripción de la imagen 2" class="card-image">
                    <div class="card-content">
                        <strong>Desarrollo Rápido y Eficiente:</strong>
                        <p>Utilizo las últimas tecnologías para garantizar un desarrollo rápido y eficiente sin
                            comprometer
                            la calidad.</p>
                    </div>
                </li>
                <li class="card">
                    <img src="/images/sky-young-man-and-woman-developing-a-mobile-app.png"
                        alt="Descripción de la imagen 3" class="card-image">
                    <div class="card-content">
                        <strong>Optimización para Todos los Dispositivos:</strong>
                        <p>Aseguro que tu sitio web se vea y funcione perfectamente en computadoras, tablets y teléfonos
                            móviles.</p>
                    </div>
                </li>
                <li class="card">
                    <img src="/images/3d-casual-life-laptop-with-system-error-sign.png" alt="Descripción de la imagen 4"
                        class="card-image perz">
                    <div class="card-content">
                        <strong>Soporte Continuo:</strong>
                        <p>Ofrezco soporte y mantenimiento para que tu sitio web se mantenga actualizado y funcione sin
                            problemas.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
#services {
    margin-top: 6em;
}

.container-hero {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}

.container-hero h1 {
    width: 75%;
    text-align: start;
    font-size: 4em;
    margin-left: 2em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.container-hero img {
    width: 500px;
    margin-right: 7em;
}

#services p {
    width: 75%;
    font-size: 1.5em;
    border-radius: 2em;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin: 0 auto;
    margin-top: 2em;
    padding: 1em;


}

.card-container {
    margin-top: 4em;
}

.card-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    /* Espaciado entre tarjetas */
    justify-content: center;
}

.card {
    background-color: whitesmoke;
    border-radius: 1em;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2),
        0px 8px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 300px;
    /* Tamaño fijo para las tarjetas */
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3),
        0px 16px 32px rgba(0, 0, 0, 0.15);
}

.card-image {
    width: 100%;
    height: auto;
    /* Mantiene la proporción de la imagen */
}

.perz{
    padding-top: 3em;
    padding-bottom: 2.5em;
    
}

.card-content {
    padding: 1em;
}

.card-content strong {
    display: block;
    margin-bottom: 0.5em;
    font-size: 1.5em;
}

.card-content p {
    width: 100% !important;
    margin-top: .5em !important;
    padding: 0px !important;

}
</style>