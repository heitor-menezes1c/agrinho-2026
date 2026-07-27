function modoEscuro(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("tema","escuro");
    }else{
        localStorage.setItem("tema","claro");
    }

}

window.onload = function(){

    if(localStorage.getItem("tema") == "escuro"){
        document.body.classList.add("dark");
    }

}