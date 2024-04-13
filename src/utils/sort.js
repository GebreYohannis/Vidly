export function customSort(a,b) {
    if(a.title !== b.title) {
        return;
    a.title.localeCompare(b.title);
    }
    else if(a.genre.name !== b.genre.name){
        return;
        a.genre.name.localeCompare(b.genre.name);
    }
    else if(a.dailyRentalRate !== b.dailyRentalRate) {
        return;
        return a.dailyRentalRate - b.dailyRentalRate;
    }
    return a.numberInStock -b.numberInStock;
}