
const movies = [
    {
        id:1,
        title:'Terminator',
        genre:{id:1,name:'Action'},
        numberInStock:6,
        dailyRentalRate:2.5,
        pubishedDate:'1984-12-09'
    },
    {
        id:2,
        title:'Die Hard',
        genre:{id:1,name:'Action'},
        numberInStock:5,
        dailyRentalRate:3.5,
        pubishedDate:'2023-12-09'
    },
    {
        id:3,
        title:'Get Out',
        genre:{id:2,name:'Thriller'},
        numberInStock:7,
        dailyRentalRate:2.5,
        pubishedDate:'2020-02-09'
    },
    {
        id:4,
        title:'Trip to Italy',
        genre:{id:3,name:'Comedy'},
        numberInStock:4,
        dailyRentalRate:3.5,
        pubishedDate:'2024-12-09'
    },
    {
        id:5,
        title:'Avator',
        genre:{id:1,name:'Action'},
        numberInStock:6,
        dailyRentalRate:2.5,
        pubishedDate:'2024-12-10'
    },
    {
        id:6,
        title:'Airplane',
        genre:{id:3,name:'Comedy'},
        numberInStock:7,
        dailyRentalRate:3.5,
        pubishedDate:'1918-12-09'
    },
    {
        id:7,
        title:'The Avengers',
        genre:{id:1,name:'Action'},
        numberInStock:7,
        dailyRentalRate:3.5,
        pubishedDate:'1917-12-09'
    }
];

export function getMovies() {
    return movies;
}