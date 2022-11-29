//  source: https://www.geeksforgeeks.org/happy-number/ 
function numSquareSum(n)
{
    var squareSum = 0;
    while (n!= 0)
    {
        squareSum += (n % 10) * (n % 10);
        n = parseInt(n/10);
    }
    return squareSum;
}
  
//  method return true if n is Happy number
function isHappynumber(n)
{
    var slow, fast;
  
    //  initialize slow and fast by n
    slow = fast = n;
    do
    {
        //  move slow number
        // by one iteration
        slow = numSquareSum(slow);
  
        //  move fast number
        // by two iteration
        fast = numSquareSum(numSquareSum(fast));
  
    }
    while (slow != fast);
  
    //  if both number meet at 1,
    // then return true
    return (slow == 1);
}

console.log(isHappynumber(19))
console.log(isHappynumber(20))
