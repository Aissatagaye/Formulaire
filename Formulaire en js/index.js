window.addEventListener("DOMContentLoad", function() {
    //---------------
    var form = document.getElementById("test-form");
    var button = document.getElementById("test-form-submit");
    var status = document.getElementById("status");

    //----------------
    function success() {
        form.reset();
        status.classList.add('success');
        status.innerHTML = "Merci!";
    }

    function error() {
        status.classList.add('error');
        status.innerHTML = " Il y a un probleme";
    }
    
    //--------------
    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax (form.method, form.action, data, success, error);
    });  
});
    //--------------
    function ajax(method, url, data, success, error) {
        var xhr = new XMLDocumentRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.onreadystate !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                success(xhr.responseType);
            } else {
                error(xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }