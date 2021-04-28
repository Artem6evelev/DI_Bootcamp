// Create a class named Video. 
// The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

class video {

    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
// Create a method called watch() which displays a string as follows:
    watch() {
        console.log(`${this.uploader} watched all ${this.time} min of ${this.title}`);
    }
}
// Instantiate a new Video instance and call the watch() method.
let film1 = new video("Walking Dead", "Artem", 60)
film1.watch();
let film2 = new video("Breaking Bad", "Ziv", 45)
film2.watch();

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
let films = [];
films.push(film1)
films.push(film2)
// Add
// function push(films,film) {
//     let len = films.length;
//     films[len] = film;
//     len++
//     films.length = len;
//     return len
// }
// Take out
