const articles = [];

const mostrarFormulario = ()=>{
    let form = document.getElementById('inputs');
    let form_mod = document.getElementById('inputs_mod');
    let form_el = document.getElementById('inputs_el');
    form.classList.toggle('d-none');
    if(form_mod.classList.contains('d-none') !== true){
        form_mod.classList.toggle('d-none');
    } else if(form_el.classList.contains('d-none') !== true){
        form_el.classList.toggle('d-none');
    }
}

const mostrar = ()=>{
    let articleHTML = '';
    for(let article of articles){
        articleHTML += crearArticle(article);
    }
    document.getElementById('notas').innerHTML = articleHTML;
}
const crearArticle = (article)=>{
    let articleHTML = `
          <article class="articulos my-2 bg-light border border-dark" id="${article.id}">
            <h3 class="a_id">${article.id}</h3>
            <h2>${article.titulo}</h2>
            <p>${article.descripcion}</p>
          </article>
    `;
    return articleHTML;
}
const agregar = ()=>{
    let form = document.forms['form'];
    let titulo = form['titulo'];
    let descripcion = form['descripcion'];
    if(titulo.value != '' && descripcion.value != ''){
        articles.push(new Article(titulo.value, descripcion.value));
        mostrar();
    }
}
const modificar = ()=>{
    let form_mod = document.getElementById('inputs_mod');
    let form_el = document.getElementById('inputs_el');
    let form = document.getElementById('inputs');
    form_mod.classList.toggle('d-none');
    if(form_el.classList.contains('d-none') !== true){
        form_el.classList.toggle('d-none');
    } else if(form.classList.contains('d-none') !== true){
        form.classList.toggle('d-none');
    }
}
const eliminar = ()=>{
    let form = document.getElementById('inputs');
    let form_el = document.getElementById('inputs_el');
    let form_mod = document.getElementById('inputs_mod');
    form_el.classList.toggle('d-none');
    if(form_mod.classList.contains('d-none') !== true){
        form_mod.classList.toggle('d-none');
    } else if(form.classList.contains('d-none') !== true){
        form.classList.toggle('d-none');
    }
}
const modificacion = ()=>{
    let form_mod = document.forms['form_mod'];
    let titulo_mod = form_mod['titulo'];
    let descripcion_mod = form_mod['descripcion'];
    let id = form_mod['id'];
    for(let articulo of articles){
        if(articulo.id == id.value){
            articulo.titulo = titulo_mod.value;
            articulo.descripcion = descripcion_mod.value;
            mostrar();
        }
    }
}
const eliminacion = ()=>{
    let articulos = document.getElementsByClassName('articulos');
    let form_el = document.forms['form_el'];
    let id = form_el['id'];
    for(let articulo of articulos){
        if(articulo.id == id.value){
            console.log(articulo);
            console.log(articulo.id);
            let $notas = articulo.parentNode;
            $notas.removeChild(articulo);
        }
    }
}