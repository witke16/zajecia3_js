function range(a,b) {

let wynik = [];
for (let i = Math.ceil(a) ; i<= Math.floor(b); i++)
    {
        wynik.push(i);
    }

    return wynik;    
}


console.log(range(3.14,9.99))