class Alumno{
    constructor(){
        let __Nombre = '';
        let __Apellido = '';
        let __Edad =  0;
    }
    
    alta(nombre, apellido, edad){
        this.__Nombre = nombre;
        this.__Apellido = apellido;
        this.__Edad = edad;
    }

    mostrar(){

    }

    promedio(){

    }


}


class Grupo{
    constructor(){
        let __Profesor = '';
        let __Nombre = '';
    }

    crear(nombre, profesor){
        this.__Profesor = profesor;
        this.__Nombre = nombre;
    }

    listar(){
        // listar los grupos
    }

    eliminar(){
        // eliminar grupo
    }

    promedio(){
        // promedio del grupo
    }

    listarPorCalificacion(nombre, asc){
        // listar por calificaciones
    }
}


const buttonMenu = document.querySelector('#nav-mobile');
const navMenu = document.querySelector('.nav-menu');
const buttonAl = document.querySelector('#al');
const buttonCal = document.querySelector('#cal');
const buttonLis = document.querySelector('#lis');

buttonMenu.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('nav-open');
  navMenu.classList.toggle('open-menu');
});

buttonAl.addEventListener('click', (e) => {
    let padre = document.getElementById('contenedor');
    padre.removeChild(padre.firstElementChild);
    padre.innerHTML='<div id="contalta"><div id="enalta"><div id="enpes"><div id="alu" class="pes" onclick="pes1()">Alumno</div><div id="gru" class="pes" onclick="pes2()">Grupo</div></div></div><div id="formalta"><input type="text" placeholder="  Nombre:" class="itemform" /><input type="text" placeholder="  Apellido:" class="itemform" /><input type="number" min="1" max="200" placeholder="  Edad:" class="itemform" /><input type="text" placeholder="  Grupo:" class="itemform" /><input type="submit" class="itemform" value="Agregar" /></div></div>';

});

buttonCal.addEventListener('click', (e) => {
    let padre = document.getElementById('contenedor');
    padre.removeChild(padre.firstElementChild);
    padre.innerHTML='<div id="contalta"><div id="enalta"><div id="enpes"><div id="alu" class="pes" onclick="pes3()">Alumno</div><div id="gru" class="pes" onclick="pes4()">Grupo</div></div></div><div id="formalta"><input type="text" placeholder="  Buscar Alumno:" class="itemform" /><input type="submit" class="itemform" value="Buscar" /></div></div>';
});

buttonLis.addEventListener('click', (e) => {
    alert('prueba3');
});

function pes1(){
    let padre = document.getElementById('contalta');
    padre.removeChild(document.getElementById('formalta'));
    padre.innerHTML='<div id="enalta"><div id="enpes"><div id="alu" class="pes" onclick="pes1()">Alumno</div><div id="gru" class="pes" onclick="pes2()">Grupo</div></div></div><div id="formalta"><input type="text" placeholder="  Nombre:" class="itemform" /><input type="text" placeholder="  Apellido:" class="itemform" /><input type="number" min="1" max="200" placeholder="  Edad:" class="itemform" /><input type="text" placeholder="  Grupo:" class="itemform" /><input type="submit" class="itemform" value="Agregar" /></div>';
    let pestana = document.getElementById('alu');
    pestana.style.backgroundColor='white';
    pestana.style.color='#22282e'
    pestana = document.getElementById('gru');
    pestana.style.backgroundColor='hsl(225, 11%, 27%)';
    pestana.style.color='white';
}

function pes2(){
    let padre = document.getElementById('contalta');
    padre.removeChild(document.getElementById('formalta'));
    padre.innerHTML='<div id="enalta"><div id="enpes"><div id="alu" class="pes" onclick="pes1()">Alumno</div><div id="gru" class="pes" onclick="pes2()">Grupo</div></div></div><div id="formalta"><input type="text" placeholder="  Nombre de Grupo:" class="itemform" /><input type="text" placeholder="  Tutor:" id="tutor" class="itemform" /><div id="mat0"><input type="checkbox" id="mat1" vlaue="espanol"/><label>Espanol</label><input type="checkbox" id="mat2" vlaue="matematicas"/><label>Matematicas</label><input type="checkbox" id="mat3" vlaue="geografia"/><label>Geografia</label></div><input type="submit" class="itemform" value="Agregar" /></div>';
    let pestana = document.getElementById('gru');
    pestana.style.backgroundColor='white';
    pestana.style.color='#22282e'
    pestana = document.getElementById('alu');
    pestana.style.backgroundColor='hsl(225, 11%, 27%)';
    pestana.style.color='white';
}

function pes3(){
    let padre = document.getElementById('contalta');
    padre.removeChild(document.getElementById('formalta'));
    padre.innerHTML='<div id="enalta"><div id="enpes"><div id="alu" class="pes" onclick="pes3()">Alumno</div><div id="gru" class="pes" onclick="pes4()">Grupo</div></div></div><div id="formalta"><input type="text" placeholder="  Buscar Alumno:" class="itemform" /><input type="submit" class="itemform" value="Buscar" /></div></div>';
    let pestana = document.getElementById('alu');
    pestana.style.backgroundColor='white';
    pestana.style.color='#22282e';
    pestana = document.getElementById('gru');
    pestana.style.backgroundColor='hsl(225, 11%, 27%)';
    pestana.style.color='white';
}

function pes4(){
    let padre = document.getElementById('contalta');
    padre.removeChild(document.getElementById('formalta'));
    padre.innerHTML='<div id="enalta"><div id="enpes"><div id="alu" class="pes" onclick="pes3()">Alumno</div><div id="gru" class="pes" onclick="pes4()">Grupo</div></div></div><div id="formalta"><input type="text" placeholder="  Buscar Grupo:" class="itemform" /><input type="submit" class="itemform" value="Buscar" /></div></div>';
    let pestana = document.getElementById('gru');
    pestana.style.backgroundColor='white';
    pestana.style.color='#22282e';
    pestana = document.getElementById('alu');
    pestana.style.backgroundColor='hsl(225, 11%, 27%)';
    pestana.style.color='white';
}