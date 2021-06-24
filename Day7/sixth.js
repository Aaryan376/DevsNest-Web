function compareid(a,b){
    const t1 = a.libraryID;
    const t2 = b.libraryID;
    
    let comp = 0;

    if(t1>t2){
        comp = -1;
    }
    else if(t1<t2){
        comp = 1;
    }
    return comp; 
}
var library = [
     {
          title: 'The Road Ahead', 
          author: 'Bill Gates', 
          libraryID: 1254 
    }, 
    {
         title: 'Walter Isaacson', 
         author: 'Steve Jobs', 
         libraryID: 4264
    }, 
    { 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        author: 'Suzanne Collins', 
        libraryID: 3245 
    }
];

console.log(library.sort(compareid));