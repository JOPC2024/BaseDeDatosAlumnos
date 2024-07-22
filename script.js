class Alumno{
    constructor(){
        this.__Nombre = [];
        this.__Edad =  [];
        this.__Grupo = [];
    }
    
    alta(nombre, apellido, edad, grupo){
        if(localStorage.getItem('alumnos') == null){
            this.__Nombre.push(nombre+' '+apellido);
            this.__Edad.push(edad);
            this.__Grupo.push(grupo);
            let datosAlumno = {
                nomAlu: this.__Nombre,
                edad: this.__Edad,
                nomGrupo: this.__Grupo
            }
            localStorage.setItem('alumnos', JSON.stringify(datosAlumno));
            return true;
        }
        else{
            let datos = JSON.parse(localStorage.getItem('alumnos'));
            let cont = false;
            for(let valor of datos['nomAlu'])
            {
                if(valor == nombre+' '+apellido){
                    cont = true;
                }
            }
            if(cont){
                return false;
            }
            else{
                this.__Nombre = datos['nomAlu'];
                this.__Nombre.push(nombre+' '+apellido);
                this.__Edad = datos['edad'];
                this.__Edad.push(edad);
                this.__Grupo = datos['nomGrupo'];
                this.__Grupo.push(grupo);
                let datosAlumno = {
                    nomAlu: this.__Nombre,
                    edad: this.__Edad,
                    nomGrupo: this.__Grupo
                }
                localStorage.setItem('alumnos', JSON.stringify(datosAlumno));
                alert(datos['nomAlu']);
                return true;         
            }
        }
    }

    mostrar(nombre){
        let alumnos = localStorage.getItem('alumnos');
        let resultado = [];
        if(alumnos != null){
            let datoAlumnos = JSON.parse(alumnos);
            for(let i = 0; i<datoAlumnos['nomAlu'].length; i++)
            {
                if(datoAlumnos['nomAlu'][i].includes(nombre)){
                    resultado.push(datoAlumnos['nomAlu'][i]);
                    resultado.push(datoAlumnos['edad'][i]);
                    resultado.push(datoAlumnos['nomGrupo'][i]);
                    return resultado;
                }
            }
        }
        return null;
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

    mostrarDataGrupo(nombreGrupo){
        let grupos = localStorage.getItem('grupos');
        let resultado = [];
        if(grupos != null){
            let datoGrupo = JSON.parse(grupos);
            for(let i = 0; i<datoGrupo['nomGrupo'].length; i++)
            {
                if(datoGrupo['nomGrupo'][i].includes(nombreGrupo)){
                    resultado.push(datoGrupo['nomGrupo'][i]);
                    resultado.push(datoGrupo['nomTutor'][i]);
                    resultado.push(datoGrupo['matAsig'][i]);
                    return resultado;
                }
            }
        }
        return null;
    }

    eliminar(){
        // eliminar grupo
    }

    listarPorCalificacion(nombre, asc){
        // listar por calificaciones
    }
}

class Calificacion{
    constructor(){
        this.__NomGru = [];
        this.__NomAlu = [];
        this.__Mate = [];
        this.__Cali = [];
    }

    guardarCali(nomGru, nomAlu, mate, cali){
        if(localStorage.getItem('calificaciones') == null){
            this.__NomGru.push(nomGru);
            this.__NomAlu.push(nomAlu);
            this.__Mate.push(mate);
            this.__Cali.push(cali);
            let datosCali = {
                nomGru: this.__NomGru,
                nomAlu: this.__NomAlu,
                mate: this.__Mate,
                cali: this.__Cali
            }
            localStorage.setItem('calificaciones', JSON.stringify(datosCali));
            return true;
        }
        else{
            let datos = JSON.parse(localStorage.getItem('calificaciones'));
            let cont = false;
            for(let valor of datos['nomAlu'])
            {
                if(valor == nomAlu){
                    cont = true;
                }
            }
            if(cont){
                return false;
            }
            else{
                this.__NomGru = datos['nomGru'];
                this.__NomGru.push(nomGru);
                this.__NomAlu = datos['nomAlu'];
                this.__NomAlu.push(nomAlu);
                this.__Mate = datos['mate'];
                this.__Mate.push(mate);
                this.__Cali = datos['cali'];
                this.__Cali.push(cali);
                let datosCali = {
                    nomGru: this.__NomGru,
                    nomAlu: this.__NomAlu,
                    mate: this.__Mate,
                    cali: this.__Cali
                }
                localStorage.setItem('grupos', JSON.stringify(datosCali));
                return true;         
            }
        }
    }   

    mostrarPromedioPorAlum(){

    }

    mostrarPromedioPorGrupo(){

    }
}

const buttonMenu = document.querySelector('#nav-mobile');
const navMenu = document.querySelector('.nav-menu');
const buttonAl = document.querySelector('#al');
const buttonCal = document.querySelector('#cal');
const buttonLis = document.querySelector('#lis');
const alumno = new Alumno();
const grupo = new Grupo();
const calificacion = new Calificacion();
let GrupoAlum = "";
let NomAlum = "";
let MateAlum = [];
let CaliAlum = [];

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
    padre.innerHTML='<div id="contCal"><div id="enCal"><div id="enpes"><div id="alu" class="pes" onclick="pes3()">Alumno</div><div id="gru" class="pes" onclick="pes4()">Grupo</div></div></div><div id="formCal"><input type="text" placeholder="  Buscar Alumno:" class="itemform" id="busalum" /><input type="submit" class="itemform" value="Buscar" onclick="busAlu()"/></div></div>';
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
        if(alumno.alta(nomAlu.trim().toLowerCase(), apeAlu.trim().toLowerCase(), edad, nomGru.trim().toLowerCase()))
        {
            alert('se agrego el alumno correctamente');
        }
        else{
            alert('el alumno ya existe');
        }
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
        let resultado = grupo.crear(nombreGrupo.trim().toLowerCase(), nomTutor.trim().toLowerCase(), materiasAsignadas);
        resultado ? alert('se registro el Grupo correctamente') : alert('el grupo ya existe')
    }
    else{
        alert('uno de los campos se no se lleno vuelva a intentarlo');
    }
}

function pes3(){
    let padre = document.getElementById('contCal');
    padre.removeChild(document.getElementById('formCal'));
    padre.innerHTML='<div id="enCal"><div id="enpes"><div id="alu" class="pes" onclick="pes3()">Alumno</div><div id="gru" class="pes" onclick="pes4()">Grupo</div></div></div><div id="formCal"><input type="text" placeholder="  Buscar Alumno:" class="itemform" id="busalum"/><input type="submit" class="itemform" value="Buscar" onclick="busAlu()"/></div></div>';
    document.getElementById('contCal').style.height="170px";
    let pestana = document.getElementById('alu');
    pestana.style.backgroundColor='white';
    pestana.style.color='#22282e';
    pestana = document.getElementById('gru');
    pestana.style.backgroundColor='hsl(225, 11%, 27%)';
    pestana.style.color='white';
}

function busAlu(){
    let alum = document.getElementById('busalum').value;
    let content = "";
    if(alum != ''){
        let alu2 = alumno.mostrar(alum.trim().toLowerCase());
        if(alu2 != null)
        {
            this.NomAlum = alu2[0];
            let mat2 = grupo.mostrarDataGrupo(alu2[2]);  
            if(mat2 != null)
            {
                this.GrupoAlum = alu2[2];
                document.getElementById('contCal').style.height="230px";
                let padre = document.getElementById('contCal');
                padre.removeChild(document.getElementById('formCal'));
                this.MateAlum = mat2[2];
                for(let mat4 of mat2[2]){
                    content += '<input type="text" class="itemform" id="'+mat4+'" placeholder="Ingresa calificacion de '+mat4+'" />'
                }
                padre.innerHTML='<div id="enCal"><div id="enpes"><div id="alu" class="pes" onclick="pes3()">Alumno</div><div id="gru" class="pes" onclick="pes4()">Grupo</div></div></div><div id="formCal">'+content+'<input type="submit" class="itemform" value="Guardar" onclick="guardarCalificaciones()"/></div></div>';
            }
            else{
                alert('no se encontraron materias');
            }
        }
        else{
            alert('no se encontro el alumno');
        }
    }
    else{
        alert('el campo no se lleno, vuelva a intentarlo');
    }
}

function guardarCalificaciones(){
    let campo = [];
    let datosCali = new Object();
    if(document.getElementById('espanol') != null){
        if(parseInt(document.getElementById('espanol').value)){
            campo.push(parseFloat(document.getElementById('espanol').value));
        }
    }
    if(document.getElementById('matematicas') != null){
        if(parseInt(document.getElementById('matematicas').value)){
            campo.push(parseFloat(document.getElementById('matematicas').value));
        }
    }
    if(document.getElementById('geografia') != null){
        if(parseInt(document.getElementById('geografia').value)){
            campo.push(parseFloat(document.getElementById('geografia').value));
        }
    }
    this.CaliAlum = campo;
    console.log(this.GrupoAlum);
    console.log(this.NomAlum);
    console.log(this.MateAlum);
    console.log(this.CaliAlum);
    calificacion.guardarCali(this.GrupoAlum, this.NomAlum, this.MateAlum, this.CaliAlum);

}
function pes4(){
    let padre = document.getElementById('contCal');
    padre.removeChild(document.getElementById('formCal'));
    padre.innerHTML='<div id="enCal"><div id="enpes"><div id="alu" class="pes" onclick="pes3()">Alumno</div><div id="gru" class="pes" onclick="pes4()">Grupo</div></div></div><div id="formCal"><input type="text" placeholder="  Buscar Grupo:" class="itemform" /><input type="submit" class="itemform" value="Buscar" /></div></div>';
    document.getElementById('contCal').style.height="170px";
    let pestana = document.getElementById('gru');
    pestana.style.backgroundColor='white';
    pestana.style.color='#22282e';
    pestana = document.getElementById('alu');
    pestana.style.backgroundColor='hsl(225, 11%, 27%)';
    pestana.style.color='white';
}