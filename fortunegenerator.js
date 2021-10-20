const fortunegen = () => {
  preparr = ["In the near future", "This week", "Tomorrow", "Soon"];
  subjarr = ["you", "others", "someone close to you", "a stranger", "a rival"];
  predarr = ["recognize", "witness", "affirm", "doubt"];
  objarr = ["beauty", "ability", "value", ];

  let prepl= preparr.length;
  let subjl = subjarr.length;
  let predl = predarr.length;
  let objl = objarr.length;


  var prep = preparr[Math.floor(Math.random()*prepl)];
  var subj = subjarr[Math.floor(Math.random()*subjarr.length)]
  var pred = predarr[Math.floor(Math.random()*predarr.length)]
  var obj = objarr[Math.floor(Math.random()*objarr.length)]

console.log( `${prep}, ${subj} will ${pred} your ${obj}.` );}
