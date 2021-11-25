//Element seçimleri
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// UI Objesini Başlatma
const ui = new UI();

// Tüm eventleri yüklemek İçin 

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);//formun submit edilmesini önlemek için

}
function addFilm(e) {

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        // Hata 
        ui.displayMessages("Tüm alanları doldurun...","danger");

    }
    else {
        // Yeni Film
        const newFilm = new Film(title, director, url);

        ui.addFilmToUI(newFilm); // Arayüze film ekleme
        ui.displayMessages("Film başarıyla eklendi...","success");
    }

    ui.clearInputs(titleElement, urlElement, directorElement);
    e.preventDefault();

}










function deleteFilm(e) {

    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("Silme işlemi başarılı...", "success");

    }

}
function clearAllFilms() {

    if (confirm("Emin misiniz ?")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();

    }


}