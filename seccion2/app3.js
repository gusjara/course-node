setTimeout(() => {
    console.log('inicio del programa');    
}, 500);


setTimeout(() => {
    console.log('primer time out');
}, 1001);

setTimeout(() => {
  console.log("segundo time out");
}, 999);

setTimeout(() => {
  console.log("tercer time out");
}, 1050);

setTimeout(() => {
    console.log('fin del programa');    
}, 1049);