//instalar gulp por node
//para ver las tareas: gulp --tasks
//para ejecutar las tareas, se llama a gulp nombreFuncion
//gulp concatenar

//estrucutra de las carpetas 
//nombreProyecto/css
//nombreProyecto/dist/css
//nombreProyecto/scss
//nombreProyecto/gulpfie.js

//plugins a usar
//crear gulpfile.js. Gestor de tareas que automatiza ciertas tareas ala hora de compilar y poner un proyecto en produccion
const rename=require("gulp-rename");
const concat=require("gulp-concat");
const gulpif=require("gulp-if");
const pleeease=require("gulp-pleeease");//para eliminar aquello innecesario en un fichero
const sass=require("gulp-dart-scss");//hay mas plugins para compilar sass
const sassdoc=require("sassdoc")//no sirve, deprecated
const{src,dest,series}=requires("gulp");//origne, destino, trabajar en series

function concatenar(){
    return src("css/*.css")//origen de todos los ficheros css que se encuentran en la carpeta css
    .pipe(concat("final.css"))//unirlos en un fichero final.css
    .pipe(dest("dist/css/"));//destino del fichero final.css
}

var options={
    minimize:true,
    rename:true
}

//cambiarle el nombre para ponerle .min y saber que es el minimizado
function min_and_rename(){
    return("./dist/css/final.css")
    .pipe(gulpif(options.minimize,pleeease()))
    .pipe(gulpif(options.rename,
        rename({suffix:".min",extname:".css"})))//sufijo y después extensión
    .pipe(dest("dist/css/"));
}

function generar(){//compila sass
    return src("scss/main.scss")//en el main se encuentran llamados todos los demas ficheros scss, con compilar este ya es suficiente
    .pipe(sass())
    .pipe(dest("dist/css/"));
}

var options={
    dest='docs'
}
function generar_docs(){//no funciona al estar el plugin deprecated
    return src("scss/main.scss")
    .pipe(sassdoc(doc_opcions));
}

///////////
function mover(){
    return ("../mitema/node_modules/boostrap/dist/js/*")
    .pipe(dest("proyecto/js"));
    //si se descargar manualmente y se coloca ahí no es necesario
}

var options={
    overwrite:true
}
function procesar_html(){//para corregir los redireccionamientos y enlaces locales
    return src("./proyecto/servicios.html")
    //en servicios.html hay que escribir este comentario si o si
    //<!--build:css css/main.min.css-->Hay ue puenr la ruta relativa completa en dist
    //<link rel="stylesheet" href="css/main.css">
    //<!-- /build -->
    .pipe(processhtml())
    .pipe(dest("./proyecto",options));
}

exports.concatenar=concatenar;
exports.min_and_rename=min_and_rename;
exports.generar=generar;
exports.generar_docs=generar_docs;

exports.mover=mover;
exports.procesar_html=procesar_html;

exports.default=parallel(compila,mover,procesar_html);//con esto solo habría que llamar a gulp

//////////////////////////////////
//Para crear tema
//$body-bg:red;
//$body-color:blue;

//Desoués importar los archivos de bootstrap ya descargados
//@import "../../bootstrap-4.5.3/scss/bootstrap.scss";
//tiene que ser bootstrap 4
//descargar con npm o de la pagina oficial(download source files)
//npm install --save bootstrap 

//hacer los cambios antes de las importaciones
//en el main.scss importar bootstrap.scss
//sino importarmos el archivo entero, minimo importar mixins, variables y funciones, y opcionales los componentes a personalizar

//background-color:orangered !default significa que usara esa propiedad por defecto

//compilar con npm run watch



