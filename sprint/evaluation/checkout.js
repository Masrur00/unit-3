function addressEntered(e){
  e.preventDefault();
  let address = {
      name =document.querySelector('#name').value, 
      hno = document.querySelector('#hno').value,
      pin = document.querySelector('#pin').value,
      landmark = document.querySelector('#land').value,
  }
  
   setInterval(() => {
       alert(`${address.name} order has been registered.`);
   }, 2000);

}