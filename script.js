fetch("https://my-json-server.typicode.com/leandrofinten123/Leandro-Finten-entrega01/Experiencia1")
.then((respuesta) => {
    console.log(respuesta);
    if(!respuesta.ok) throw new Error(`${respuesta.status}`);
    return respuesta.json();
})
.then((experiencias) => {
    console.log(experiencias);
    const div1 = document.querySelector(".desktop4");
    div1.innerHTML = experiencias
    .map((exp) => `<p>${exp.titulo}</p>
    <h3>
      ${exp.Subtitulo}
    </h3>`
      )
    .join("");
})
.catch((error) => {
    console.log("catch", error);
})