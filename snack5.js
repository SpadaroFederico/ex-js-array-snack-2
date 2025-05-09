// Snack 5 (Bonus) - Raccogli i libri
// Nota: a differenza di quanto visto finora negli esempi, per accedere all'API utilizzare utilizzare l'url base:
// https://boolean-spec-frontend.vercel.app/freetestapi
// al posto di:
// https://freetestapi.com/api/v1

// Ad esempio:
// https://boolean-spec-frontend.vercel.app/freetestapi/users
// per chiamare l'endpoint /users
// Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
// Testala con l’array [2, 13, 7, 21, 19] .

async function getBooks(ids){
    const promises = ids.map((id) => {
        return fetch(`http://localhost:5000/books/${id}`)
            .then(response => response.json())
            .catch(error => console.error("Errore nella fetch:", error));
    });
    
const books = await Promise.all(promises)
return books;
}

getBooks([2, 13, 7, 21, 19])
.then((books) => {
    console.log(books);
});
    


