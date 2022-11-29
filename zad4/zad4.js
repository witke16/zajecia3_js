function sum (tab) {

    let return_sum = 0
    tab.forEach(element => {
        return_sum +=element

    });
    return return_sum
}

console.log(sum([1,2,3,4,5.5]))