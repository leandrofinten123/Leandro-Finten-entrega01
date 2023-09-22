//Experiencia
fetch("https://my-json-server.typicode.com/leandrofinten123/Leandro-Finten-entrega01/Experiencias")
.then((respuesta) => {
    console.log(respuesta);
    if(!respuesta.ok) throw new Error(`${respuesta.status}`);
    return respuesta.json();
})
.then((experiencias) => {
    console.log(experiencias);
    const div1 = document.querySelector(".desktop4__1");
    div1.innerHTML = experiencias
    .map((exp) => `
    <div class="desktop4__2">
                    <div class="desktop4__3"><img class="imagenadidas" src="${exp.adidas}" alt="adidas">
                        <div class="desktop4__4"><p> ${exp.titulo}</p>
                        <h3>${exp.Subtitulo}</h3></div>
                    </div>
                    <div class="desktop4__5">
                    <p>${exp.Lorem}</p></div>
                </div>`
      )
    .join("");
})
.catch((error) => {
    console.log("catch", error);
});

//Certificados
const div2 = document.querySelector(".desktop2__1");
div2.innerHTML= certificados
.map((cert) => `
<div class="desktop2__1">
                <div class="desktop2__2">
                    <img src="imagenes/diploma_demo 1.png" alt=demo1>
                <div class="desktop2__3">
                    <h3>Front-end Developer</h3>
                    <p class="desktop2__4">Feb 2020 - Feb 2021</p></div>
                </div>
                <div class="desktop2__2">
                <img src="imagenes/diploma_demo 1.png" alt=demo2>
                <div class="desktop2__3">
                    <h3>Front-end Developer</h3>
                    <p class="desktop2__4">Feb 2020 - Feb 2021</p></div>
                </div>
                <div class="desktop2__2">
                <img src="imagenes/diploma_demo 1.png" alt=demo3>
                <div class="desktop2__3">
                    <h3>Front-end Developer</h3>
                    <p class="desktop2__4">Feb 2020 - Feb 2021</p></div>
                </div>
            </div>
`).join();