function UI() {

}
UI.prototype.addFilmToUI = function (newFilm) {

    const filmList = document.getElementById("films");

    // Arayüze, eklenen yeni filmin url,ismi,yönetmeni bilgilerini eklemek için
    filmList.innerHTML += `
  
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td> 
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td> 
            
        </tr>
  `;

}
UI.prototype.clearInputs = function (element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";

}




















UI.prototype.displayMessages = function (message, type) {
    const cardBody = document.querySelector(".card-body");
    // Alert divini oluşturma

    const div = document.createElement("div");


    div.className = `alert alert-${type}`;// danger veya success olarak girebilmek için
    div.textContent = message;

    cardBody.appendChild(div); //CardBody'e divi tanımlama


    setTimeout(function () {
        div.remove(); //div temizlemek için

    }, 1000);//Belirli bir süre kalması için (1sn)



}



UI.prototype.loadAllFilms = function (films) {

    const filmList = document.getElementById("films");

    films.forEach(function (film) {
        filmList.innerHTML += `<tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`;
    });

}
UI.prototype.deleteFilmFromUI = function (element) {

    element.parentElement.parentElement.remove();
}
UI.prototype.clearAllFilmsFromUI = function () {

    const filmList = document.getElementById("films");

    // filmList.innerHTML = "";

    while (filmList.firstElementChild !== null) { // Child Olduğu Sürece
        filmList.firstElementChild.remove();
    }
}