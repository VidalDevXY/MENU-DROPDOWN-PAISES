//url proyecto youtube:  https://www.youtube.com/watch?v=z0avfnlBRto&list=PL4mXiOgXD4Yy0Nc0jLWd2mOMDdTqJuTZ6&index=88&t=622s&ab_channel=CodingNepal


// VARIABLES GLOBALES //

const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

// Array de algunos paises

let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                "Thailand", "Turkey", "Tokio","Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

//-------------------------------------------//

//  FUNCIONES   //

function addCountry(selectedCountry) {  // lectura de todo el array de paises
    options.innerHTML = ""; // Reset 
    
    countries.forEach(country => {  // funcion aÑade lectura paises dentro de etiqueta li insertando todos los paises
        let isSelected = country == selectedCountry ? "selected" : ""; // CONDICION: si la seleccion de pais y el valor del pais es igual, aÑade la clase selected
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}<li>`; //Inserta en la etiqueta li un evento seguido de una funcion
        options.insertAdjacentHTML("beforeend",li); // Inserta la variable li seguidamente de la ultima etiqueta
    });
};

addCountry(); // llamada a la funcion

function updateName(selectedLi){
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active"); // Elimina la clase solo si la encuentra en el css.
    selectBtn.firstElementChild.innerText = selectedLi.innerText; // Seleccionamos primer hijo de la clase, introducimos nuevo texto.
};



//eventos

searchInp.addEventListener("keyup", () => { // Obtenemos la tecla cuando la suelta.
    let arr = []; // Creamos un array vacio.
    let searchWord = searchInp.value.toLowerCase(); // Trasnforma en minusculas y asigna valor a los caracteres introducidos en la barra de busqueda.

    arr = countries.filter(data => { // Devuelve un array con todos los elementos encontrados en la variable countries
        return data.toLowerCase().startsWith(searchWord); // Retorna data que esta compuesta por todo el array transformada en minuscula,
                                                                // con metodo startsWith si el texto comienza con los caracteres de una cadena y
                                                                    // retorna true o false si hay coincidencia.
    }).map(data => {

        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;

    }).join(""); // Creamos un nuevo array adentro de una etiqueta li, con join unimos todos los elementos del array.
    

    options.innerHTML = arr ? arr : `<p>Oops! País no encontrado<p>`; //Incluimos los aray dentro del box model options, junto con un condicional para que 
                                                                            // nos avisa con un mensaje en caso de no encontrar un país.

});


selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");  //elimina o aÑade la clase active.
});
