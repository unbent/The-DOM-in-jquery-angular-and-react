window.onload = () => {
    var btnBefore = document.getElementById("btnBefore");
    btnBefore.addEventListener("click", () => {
        var newNode = document.createElement("p");
        newNode.innerHTML = "<i>*** New Patients Only ***</i>";

        var formGroup = document.getElementsByClassName("form-group");
        formGroup[0].insertBefore(newNode, formGroup[0].lastElementChild);
    });

    var btnAfter = document.getElementById("btnAfter");
    btnAfter.addEventListener("click", () => {
        var btnClear = document.createElement("button");
        btnClear.setAttribute("type", "reset");
        btnClear.setAttribute("class", "btn btn-lg");
        var textClear = document.createTextNode("Clear");
        btnClear.appendChild(textClear);

        var formGroup = document.getElementsByClassName("form-group");
        var len = formGroup.length;
        formGroup[len-1].appendChild(btnClear);
    });

    var btnDelete = document.getElementById("btnDelete");
    btnDelete.addEventListener("click", () => {
        var formGroup = document.getElementsByClassName("form-group");
        formGroup[0].lastElementChild.remove();
    });
}