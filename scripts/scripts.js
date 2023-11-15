function mostrarNoOficiales() {
    let noOficiales = document.getElementById("noOficiales").style.display;
    let oficiales = document.getElementById("oficiales").style.display;
    if (oficiales === "block" && noOficiales === "none"){
        document.getElementById("noOficiales").style.display = "block";
        document.getElementById("oficiales").style.display = "none";
    }

}

function mostrarOficiales() {
    let noOficiales = document.getElementById("noOficiales").style.display;
    let oficiales = document.getElementById("oficiales").style.display;
    if (oficiales === "none" && noOficiales === "block"){
        document.getElementById("noOficiales").style.display = "none";
        document.getElementById("oficiales").style.display = "block";
    }

}