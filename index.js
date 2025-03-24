function scuberGreetingForFeet(distance){
  // Write your code here!
  // Use if and else if statements to return the correct greeting based on the distance the passenger desires to travel.
  if (distance <= 400){
    return 'This one is on me!'}
   else if (distance >400 && distance < 2000){
      return 'That will be twenty bucks.'

  }else if (distance > 2000 && distance < 2500){

    return'I will gladly take your thirty bucks.'}
    else if (distance > 2500){
      return 'No can do.'}
}

function ternaryCheckCity(city){
  // Write your code here!
return city === 'NYC' ? 'Ok, sounds good.' :  'No go.'
}

function switchOnCharmFromTip(charm){
  // Write your code here!
  switch(charm){
 case 'generous':
 return 'Thank you so much.'
 break;
 case 'not as generous':
 return 'Thank you.'
 break;
 case "cateous":
 return 'here is 1000 usd tip for you'
 break;
  default:
    return 'Bye.'

}
}

console.log(scuberGreetingForFeet(2590));
console.log(ternaryCheckCity('nmombasa'));
console.log(switchOnCharmFromTip('smile'));
