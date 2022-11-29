function palindrom (text)
{

for (let i=0; i< text.length/2 ; i++)
    {
      //  console.log(text.charAt(i));
      //  console.log(text.charAt(text.length-i-1))
        if  ( text.charAt(i) != text.charAt(text.length-i-1))
            return false;
    }
return true;

}
console.log(palindrom("kajaki"))
console.log(palindrom("kajak"))
console.log(palindrom("kamilslimak"))