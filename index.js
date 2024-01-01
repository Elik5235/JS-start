const age = 20;
const hd = false;
let ticket
if (age < 0 || typeof age !== 'number'){
    console.log('nekor')
} else if(age <= 6){
ticket = 0 ;
}else if( age <= 12 ){
    ticket = 10;
}else if (!hd){
    ticket = 20;
}else {
    ticket = 10;
}
if (ticket !== undefined){
console.log('vartist : ' + ticket + '$' );
}