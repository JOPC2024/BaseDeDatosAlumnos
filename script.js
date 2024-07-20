class Alumno{
    constructor(){
        this.__Nombre = '';
        this.__Apellido = '';
        this.__Edad =  0;
        this.__Grupo = '';
    }
    
    alta(nombre, apellido, edad, grupo){
        this.__Nombre = nombre;
        this.__Apellido = apellido;
        this.__Edad = edad;
        this.__Grupo = grupo;
    }

    mostrar(){

    }

    promedio(){

    }


}


class Grupo{
    constructor(){
        this.__Tutor = [];
        this.__NombreGrupo = [];
        this.__Materias = [];
    }

    crear(nombreGrupo, tutor, materias){
        if(localStorage.getItem('grupos') == null){
            this.__NombreGrupo.push(nombreGrupo);
            this.__Tutor.push(tutor);
            this.__Materias.push(materias);
            let datosGrupo = {
                nomGrupo: this.__NombreGrupo,
                nomTutor: this.__Tutor,
                matAsig: this.__Materias
            }
            localStorage.setItem('grupos', JSON.stringify(datosGrupo));
            return true;
        }
        else{
            let datos = JSON.parse(localStorage.getItem('grupos'));
            let cont = false;
            for(let valor of datos['nomGrupo'])
            {
                if(valor == nombreGrupo){
                    cont = true;
                }
            }
            if(cont){
                return false;
            }
            else{
                this.__Tutor = datos['nomTutor'];
                this.__Tutor.push(tutor);
                this.__NombreGrupo = datos['nomGrupo'];
                this.__NombreGrupo.push(nombreGrupo);
                this.__Materias = datos['matAsig'];
                this.__Materias.push(materias);
                let datosGrupo = {
                    nomGrupo: this.__NombreGrupo,
                    nomTutor: this.__Tutor,
                    matAsig: this.__Materias
                }
                localStorage.setItem('grupos', JSON.stringify(datosGrupo));
                alert(datos['nomGrupo']);
                return true;         
            }
        }
    }

    listar(){
        let grupos = localStorage.getItem('grupos')
        let resultado = '';
        (grupos != null) ? resultado = JSON.parse(grupos)['nomGrupo'] : resultado = null;
        return resultado;
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
const alumno = new Alumno();
const grupo = new Grupo();

buttonMenu.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('nav-open');
  navMenu.classList.toggle('open-menu');
});

buttonAl.addEventListener('click', (e) => {
    let padre = document.getElementById('contenedor');
    padre.removeChild(padre.firstElementChild);
    padre.innerHTML='<div id="contalta"><div id="enalta"><div id="enpes"><div id="alu" class="pes" onclick="pes1()">Alumno</div><div id="gru" class="pes" onclick="pes2()">Grupo</div></div></div><div id="formalta"><input type="text" placeholder="  Nombre:" class="itemform" id="nomAlu"/><input type="text" placeholder="  Apellido:" class="itemform" id="apeAlu"/><input type="number" min="1" max="200" placeholder="  Edad:" class="itemform" id="edad"/><select id="nomGru" class="itemform"></select><input type="submit" class="itemform" id="aluag" onclick="aluag()" value="Agregar" /></div></div>';
    let listgrupo = grupo.listar();
    let opciones = '';
    if(listgrupo != null)
    {
        for(gru of listgrupo)
        {
            opciones += '<option value="'+gru+'">'+gru+'</option>';
        }
    }
    padre = document.getElementById('nomGru');
    padre.innerHTML=opciones;
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
    padre.innerHTML='<div id="enalta"><div id="enpes"><div id="alu" class="pes" onclick="pes1()">Alumno</div><div id="gru" class="pes" onclick="pes2()">Grupo</div></div></div><div id="formalta"><input type="text" placeholder="  Nombre:" class="itemform" id="nomAlu" /><input type="text" placeholder="  Apellido:" class="itemform" id="apeAlu" /><input type="number" min="1" max="200" placeholder="  Edad:" class="itemform" id="edad"/><select id="nomGru" class="itemform"></select><input type="submit" id="aluag" class="itemform" onclick="aluag()" value="Agregar" /></div>';
    let pestana = document.getElementById('alu');
    pestana.style.backgroundColor='white';
    pestana.style.color='#22282e'
    pestana = document.getElementById('gru');
    pestana.style.backgroundColor='hsl(225, 11%, 27%)';
    pestana.style.color='white';
    let listgrupo = grupo.listar();
    let opciones = '';
    if(listgrupo != null)
    {
        for(gru of listgrupo)
        {
            opciones += '<option value="'+gru+'">'+gru+'</option>';
        }
    }
    padre = document.getElementById('nomGru');
    padre.innerHTML=opciones;
}

function aluag(){
    let nomAlu = document.getElementById('nomAlu').value;
    let apeAlu = document.getElementById('apeAlu').value;
    let edad = document.getElementById('edad').value;
    let nomGru = document.getElementById('nomGru').value;
    if(nomAlu != '' && apeAlu != '' & Number.isInteger(parseInt(edad)) & nomGru != ''){
        localStorage.setItem('');
        alert('se agrego el alumno');
    }
    else{
        alert('uno de los campos se no se lleno correctamente o esta vacio, vuelva a intentarlo');
    }
}
function pes2(){
    let padre = document.getElementById('contalta');
    padre.removeChild(document.getElementById('formalta'));
    padre.innerHTML='<div id="enalta"><div id="enpes"><div id="alu" class="pes" onclick="pes1()">Alumno</div><div id="gru" class="pes" onclick="pes2()">Grupo</div></div></div><div id="formalta"><input type="text" placeholder="  Nombre de Grupo:" class="itemform" id="nomGrupo" required/><input type="text" placeholder="  Tutor:" class="itemform" id="nomTutor" required/><div id="mat0"><input type="checkbox" id="mat1" vlaue="espanol"/><label>Espanol</label><input type="checkbox" id="mat2" vlaue="matematicas"/><label>Matematicas</label><input type="checkbox" id="mat3" vlaue="geografia"/><label>Geografia</label></div><input type="submit"  onclick="gruag()" class="itemform" value="Agregar" /></div>';
    let pestana = document.getElementById('gru');
    pestana.style.backgroundColor='white';
    pestana.style.color='#22282e'
    pestana = document.getElementById('alu');
    pestana.style.backgroundColor='hsl(225, 11%, 27%)';
    pestana.style.color='white';
}
function gruag(){
    let nombreGrupo = document.getElementById('nomGrupo').value;
    let nomTutor = document.getElementById('nomTutor').value;
    let materias = new Map();
    materias.set("espanol",document.getElementById('mat1').checked);
    materias.set("matematicas",document.getElementById('mat2').checked);
    materias.set("geografia",document.getElementById('mat3').checked);
    let materiasAsignadas = [];
    for(let [key, value] of materias)
    {
        if(value === true)
        {
            materiasAsignadas.push(key);
        }
    }
    if(nombreGrupo !== '' && nomTutor !== '' && materiasAsignadas.length > 0)
    {
        let resultado = grupo.crear(nombreGrupo, nomTutor, materiasAsignadas);
        resultado ? alert('se registro el Grupo correctamente') : alert('el grupo ya existe')
    }
    else{
        alert('uno de los campos se no se lleno vuelva a intentarlo');
    }
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