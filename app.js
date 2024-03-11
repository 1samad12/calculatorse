function btn(value){
    document.getElementById("inp").value +=value;
   }
   function clr(){
       document.getElementById("inp").value = " ";
   }
   function eq(){
      let add = document.getElementById("inp").value;
      let sub = eval(add);
      let total = document.getElementById("inp").value = sub;
   }
   function clre(){
     let cl=  document.getElementById("inp").value
     document.getElementById("inp").value = cl.substring(0,cl.length-1) 
   }