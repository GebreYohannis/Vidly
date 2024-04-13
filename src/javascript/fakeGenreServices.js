export const genres = [
    {id:1,name:'Action'},
    {id:2,name:'Thriller'},
    {id:3,name:'Comedy'}
   
];

export function getGenres() {
    return genres.filter(genre => genre);
}