function fibonacci (n)
{

const return_tab=[];

for (let i =0 ; i < n ; i++)
{
    if (return_tab.length === 0)
    {
        return_tab.push(0);
    }
    else if (return_tab.length === 1)
    {
        return_tab.push(1);
    }
    else
    {
        return_tab.push(return_tab[i-2]+return_tab[i-1]);
    }
}

return return_tab;
}


console.log(fibonacci(10))
console.log(fibonacci())