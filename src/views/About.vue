<style>
   #sloths {
     margin: 100px auto;
     height: 300px;
     width: 300px;
     font-size: 15px;
     text-align: center;
     line-height: 15px;
     background-color: #26A69A;
     border-radius: 100%;
     position: relative;
     overflow: hidden;
     box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   }
   #sloths a{
    color: white;
   }
   #sloths p {
    color: white;
   }
   #sloths a:hover {
     text-shadow: 0 0 10px #212121;
   }
   #inner {
     width: 500px;
     height: 500px;
     background: #00695C;
     border: 5px solid #B2EBF2;
     position: absolute;
     border-radius: 40%;
     left: -33%;
     bottom: -385px;
     animation: loop 3000ms linear infinite,
     loop 3000ms linear infinite;
   }
   @keyframes loop {
     0%{transform: rotate(0deg);}
     100%{transform: rotate(360deg);}
   }
</style>

<template>
  <div class="about">
    <h1>This project is maintained by the following people...</h1>

    <div>
      <a href="https://github.com/mcaloger"><h2>Matthew Caloger</h2></a>
      <p>Project Manager & Full-Stack Developer</p>
    </div>

    <div id="sloths">
      <br><br>
      <a href="https://github.com/flyingsl0ths"><h2>FlyingSloths</h2></a>
      <p>Python & JavaScript Developer</p>
      <div id="inner">
      </div>
    </div>
  </div>
</template>
