<template>
<div class="columns is-mobile is-centered is-vcentered gewinnboxcontainer">
  <div class="column is-10 gewinnbox">
   <center class="titlegewinnen">
    Wollen Sie eine Fitnessabo?
   </center>
    <br><br><br><center>
  <a href ="/signup" class="gruenbutton">
    Los gehts!
  </a></center>
  <br><br>
  </div>
  </div>
  
</template>


<style>
body {font-family: Arial, Helvetica, sans-serif !important;}

.gewinnboxcontainer {
padding-top: 50px;
align-self: center;
}
.gewinnbox {
 background-color: #ffffffc2;
border: 15px white;
border-radius: 15px 15px 15px 15px;
padding: 100px 0px 100px 0px;
}

.titlegewinnen {
  align: center;
  font-size: 50px;
  color: #3D3C3C;
  font-family: Montserrat;
  font-weight: 700;
}

.gruenbutton {
  background-color: #28a745;
  font-family: Montserrat;
  border-radius: 15px 15px 15px 15px;
  color: white;
  font-size: 30px;
  padding: 50px 92px;
  border: none;
  cursor: pointer;
  opacity: 0.9;
}

.button:hover {
  opacity:1;
}

body, html {
  height: 100%;
  margin: 0;
}

body {
  background-image: url('~@/assets/fitness.jpeg');
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

h2 {

  text-align: center;

}



</style>
