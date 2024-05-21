class Film {
    constructor(id, name, rejiser, link, year, cash) {
        this.id = id;
        this.name = name;
        this.rejiser = rejiser;
        this.link = link;
        this.year = year;
        this.cash = cash;
    }

    toString() {
        return `${this.name} (${this.year}), режисер: ${this.rejiser}, касові збори: $${this.cash}`;
    }
}


class DetailedFilm extends Film {
    toString() {
        return `Фільм: ${this.name}\nРежисер: ${this.rejiser}\nРік випуску: ${this.year}\nКасові збори: $${this.cash}\nТрейлер: ${this.link}`;
    }
}


class FilmCollection {
    constructor() {
        this.films = [];
    }

    addFilm(film) {
        this.films.push(film);
    }

    removeFilmsByCash(threshold) {
        this.films = this.films.filter(film => film.cash > threshold);
    }
}


const collection = new FilmCollection();
collection.addFilm(new DetailedFilm(1, "Inception", "Christopher Nolan", "https://www.youtube.com/watch?v=YoHD9XEInc0", 2010, 829895144));
collection.addFilm(new DetailedFilm(2, "Interstellar", "Christopher Nolan", "https://www.youtube.com/watch?v=zSWdZVtXT7E", 2014, 677471339));
collection.addFilm(new DetailedFilm(3, "The Dark Knight", "Christopher Nolan", "https://www.youtube.com/watch?v=EXeTwQWrcwY", 2008, 1004558444));


const removedFilms = collection.removeFilmsByCash(677471340); //Метод вилучення фільмів, у яких сума менше x$


const filmsDiv = document.getElementById('films');
collection.films.forEach(film => {
    const filmDiv = document.createElement('div');
    filmDiv.className = 'film';
    filmDiv.textContent = film.toString();
    filmsDiv.appendChild(filmDiv);
});


document.getElementById('filmForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const rejiser = document.getElementById('rejiser').value;
    const link = document.getElementById('link').value;
    const year = document.getElementById('year').value;
    const cash = document.getElementById('cash').value;

    const film = new Film(collection.films.length + 1, name, rejiser, link, year, cash);
    collection.addFilm(film); 

    const filmDiv = document.createElement('div');
    filmDiv.textContent = film.toString();

    document.getElementById('films').appendChild(filmDiv);

    document.getElementById('filmForm').reset();
});
