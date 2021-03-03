require("gulp");

const rename=require("gulp-rename");
const pleeease=require("gulp-pleeease");//para eliminar aquello innecesario en un fichero
const sass=require("gulp-dart-scss");
const processhtml=require("gulp-processhtml");
const{src,dest,series,parallel}=require("gulp");

function compilar(){
    return src("./scss/main.scss")
    .pipe(sass())
    .pipe(dest("./proyectojuande/css"));
}

function min_rename(){
    return src("./proyectojuande/css/main.css")
    .pipe(pleeease())//minimizar
    .pipe(rename({//renombrar
        suffix:".min",
        extname:".css"
    }))
    .pipe(dest("./proyectojuande/css/"));
}

function mover(){
    return src("./node_modules/bootstrap/dist/js/*")
    .pipe(dest("./proyectojuande/js"));
}

var options={
    overwrite:true
}
function procesar_html(){//para corregir los redireccionamientos y enlaces locales
    return src("./proyectojuande/index.html")
    //en servicios.html hay que escribir este comentario si o si
    //<!--build:css css/main.min.css-->Hay ue puenr la ruta relativa completa en dist
    //<link rel="stylesheet" href="css/main.css">
    //<!-- /build -->
    .pipe(processhtml())
    .pipe(dest("./proyectojuande",options));
}

exports.compilar=compilar;
exports.min_rename=min_rename;
exports.procesar_html=procesar_html;
exports.mover=mover;
exports.default=parallel(compilar,min_rename,procesar_html);