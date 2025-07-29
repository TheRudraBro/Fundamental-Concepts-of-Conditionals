/** 
 * 
 * ---------- Ternary Operator --------
 * Three Parts
 * ?  :  
condition ? do something when true
          :   do something when false
*/

// const age = 20;
// if(age>=18)
// {
//     console.log('You can vote');
// }
// else{
//     console.log('Ghuma');
// }
// age>=18?console.log('vote dio'):console.log('Ghuma'); // Ternary system


let price = 500;
const isLeader= false;


if(isLeader===true)
{
price = onabort;
}
else{price = price+100;}

// console.log(price);

price=isLeader===true ? 0 : price + 100;


// opotional

if(isLeader===true)
{
    if(price>1000)
    {
        price=price/2;
    } else{
        price=0;
    }
}else{
    price=price+1000;
}
// feel free to ignore this part
// o ==> price>1000 ? price /2 : 0 : price + 1000; 
// price = isLeader === true ? 0 : price + 1000;
price = isLeader === true ? (price = isLeader === true ? 0 : price + 1000) : price + 1000;