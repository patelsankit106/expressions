
function prime1(){
    if (document.getElementById("p1").checked == true) {

        let number = document.getElementById("t1").value;
        n = number;
        Count = 0;

        if (n <= 1) {
            document.getElementById("t2").value = "not prime";
        }
        // else if(n==0){
        //     document.getElementById("t2").value="neither prime nor composite";
        // }

        else {
            for (let i = 2; i <= n / 2; i++) {
                if (n % i == 0) {
                    Count++;
                    break;
                }
            }
            if (Count == 0) { 
                document.getElementById("t2").value = "prime";
             }
            else {
                document.getElementById("t2").value = "Not prime";
             }
        }
        document.getElementById("reason").innerHTML = "No argument no return";
    }
}

function prime2(){
    if (document.getElementById("p2").checked == true) {

         number = document.getElementById("t1").value;
        n = number;
        Count = 0;

        if (n <= 1) {
            document.getElementById("t2").value = "Not prime";
        }
        // else if(n==0){
        //     document.getElementById("t2").value="neither prime nor composite";
        // }

        else {
            for (let i = 2; i <= n / 2; i++) {
                if (n % i == 0) {

                    Count++;
                    break;
                }
            }
            if (Count == 0) { 
                document.getElementById("t2").value = "prime";
             }
            else {
                 document.getElementById("t2").value = "Not prime";
                 }
        }
        document.getElementById("reason").innerHTML = "with argument no return";
    }
    }


    function prime3(){
        if (document.getElementById("p3").checked == true) {
            document.getElementById("reason").innerHTML = "with argument with return";

             number = document.getElementById("t1").value;
            n = number;
            Count = 0;
    
            if (n <= 1) {
                document.getElementById("t2").value = "Zero or Negative Not prime";
            }
            // else if(n==0){
            //     document.getElementById("t2").value="neither prime nor composite";
            // }
    
            else {
                for (let i = 2; i <= n / 2; i++) {
                    if (n % i == 0) {
    
                        Count++;
                        break;
                    }
                }
                if (Count == 0) { 
                    document.getElementById("t2").value = "Number is prime";
                    
                    return true;
                    
                 }
                else {
                     document.getElementById("t2").value = "Number is Not prime";
                     return false;
                    }
            }
        }
        
    }

   ///No argument with return

   function prime4(){
    if (document.getElementById("p4").checked == true) {
        document.getElementById("reason").innerHTML = "No argument with return";

        let number = document.getElementById("t1").value;
        n = number;
        Count = 0;

        if (n <= 1) {
            document.getElementById("t2").value = "Not prime";
        }
        // else if(n==0){
        //     document.getElementById("t2").value="neither prime nor composite";
        // }

        else {
            for (let i = 2; i <= n / 2; i++) {
                if (n % i == 0) {

                    Count++;
                    break;
                }
            }
            if (Count == 0) { 
                document.getElementById("t2").value = "Number is prime";
                
                return true;
                
             }
            else {
                 document.getElementById("t2").value = "Number is Not prime";
                 return false;
                }
        }
    }
    
}


let prime5 = function (){
    if(document.getElementById("p5").checked  == true){

        document.getElementById("reason").innerHTML = "Expression function";
             
                    number = document.getElementById("t1").value;


        Count = 0;

           for(let i=2 ; i<number; i++){

               if(number % i == 0)
               Count++;
               break;
            }
            if(Count==0)
                 document.getElementById("t2").value = number+ " is Prime Number";
                  
            else
                document.getElementById("t2").value = number+" is Not Prime Number";
            
           } 
   }





   function prime6(){
       function primecall(){

       
    if (document.getElementById("p6").checked == true) {
        document.getElementById("reason").innerHTML = "callback function";

        let number = document.getElementById("t1").value;
        n = number;
        Count = 0;

        if (n <= 1) {
            document.getElementById("t2").value = "Not prime";
        }
        // else if(n==0){
        //     document.getElementById("t2").value="neither prime nor composite";
        // }

        else {
            for (let i = 2; i <= n / 2; i++) {
                if (n % i == 0) {

                    Count++;
                    break;
                }
            }
            if (Count == 0) { 
                document.getElementById("t2").value = "Number is prime";
                
                return true;
                
             }
            else {
                 document.getElementById("t2").value = "Number is Not prime";
                 return false;
                }
        }
    }
}
         function call(callback){
             callback();
         }
          call(primecall);


}






   let prime7 = () => {
    if(document.getElementById("p7").checked  == true){
    document.getElementById("reason").innerHTML = "Arrow function";
    Count = 0;

             number = document.getElementById("t1").value;


       for(let i=2 ; i<number; i++)
       {
           if(number % i == 0)
           Count++;
           break;
        }
        if(Count==0){
             return document.getElementById("t2").value = number+" is Prime";
            }
        else{
             return  document.getElementById("t2").value = number+" is Not prime";
            }
       }
   }






   function prime8(){

    var promise=new Promise(function ap(resolve,reject){

    
    if (document.getElementById("p8").checked == true) {
        document.getElementById("reason").innerHTML = "promise function";

        let number = document.getElementById("t1").value;
        n = number;
        Count = 0;

        if (n <= 1) {
            document.getElementById("t2").value = "not prime";
        }
      

        else {
            for (let i = 2; i <= n / 2; i++) {
                if (n % i == 0) {
                    Count++;
                    break;
                }
            }
            if (Count == 0) { resolve();
                // document.getElementById("t2").value = "prime";
             }
            else {reject();
                // document.getElementById("t2").value = "Not prime";
             }
        }
    }



 } );
 promise.then(function(){document.getElementById("t2").value = "prime";}).catch(function(){document.getElementById("t2").value = "Not prime";})

}



////add digit



    
        function AddDigit1() {
            if (document.getElementById("ad1").checked == true) {
                document.getElementById("reason").innerHTML = "No argument no return";



                let number = document.getElementById("t1").value;
                n = number;
                sum = 0;
                while (n > 0) {
                    let num = n % 10;
                    n = parseInt(n / 10);
                    sum = sum + num;
                }
                document.getElementById("t2").value = "" + sum;

            }
        }


        function AddDigit2(number) {
            if (document.getElementById("ad2").checked == true) {
                document.getElementById("reason").innerHTML = "with argument no return";



                let number = document.getElementById("t1").value;
             
                n = number;
                sum = 0;
                while (n > 0) {
                    let num = n % 10;
                    n = parseInt(n / 10);
                    sum = sum + num;
                }
                document.getElementById("t2").value = "sum of " +number+" digit is "  + sum;

            }
        }

        function AddDigit3() {
            if (document.getElementById("ad3").checked == true) {
                document.getElementById("reason").innerHTML = "with argument with return";



                 number = document.getElementById("t1").value;
             
                n = number;
                sum = 0;
                while (n > 0) {
                    let num = n % 10;
                    n = parseInt(n / 10);
                    sum = sum + num;
                }
                return document.getElementById("t2").value = "sum of " +number+" digit is " + sum;

            }
        }

        function AddDigit4() {
            if (document.getElementById("ad4").checked == true) {
                document.getElementById("reason").innerHTML = "No argument with return";



                let number = document.getElementById("t1").value;
             
                n = number;
                sum = 0;
                while (n > 0) {
                    let num = n % 10;
                    n = parseInt(n / 10);
                    sum = sum + num;
                }
                return document.getElementById("t2").value = "" + sum;

            }
        }

        

      let AddDigit5=  function () {
            if (document.getElementById("ad5").checked == true) {
                document.getElementById("reason").innerHTML = "function expression";



                 number = document.getElementById("t1").value;
                 n = number;
                sum = 0;
                while (number > 0) {
                    let num = number % 10;
                    number = parseInt(number / 10);
                    sum = sum + num;
                }
                return document.getElementById("t2").value = n+" sum is " + sum;

            }
        }



        function AddDigit6() {
            function AddDigitcall(){

                if (document.getElementById("ad66").checked == true) {
                    document.getElementById("reason").innerHTML = "callback function";

                    
                    
                    let number = document.getElementById("t1").value;
                    
                n = number;
                sum = 0;
                while (n > 0) {
                    let num = n % 10;
                    n = parseInt(n / 10);
                    sum = sum + num;
                }
                return document.getElementById("t2").value = "" + sum;
                
            }
        }
        function call(callback){
            callback();
        }
        call(AddDigitcall);
    }




        let AddDigit7= () => {
            if(document.getElementById("ad7").checked == true){
                document.getElementById("reason").innerHTML = "Arrow function";
        
                     number = document.getElementById("t1").value;


                n = number; 
                sum = 0 ;
                while (n>0){
                    let num = n % 10;
                    n = parseInt (n/10);
                    sum = sum + num ;
                } 
                return document.getElementById("t2").value = number+" number sum is "+sum;
            }
        }
    


        
        
    
        function AddDigit8() {
           var promise=new Promise(function ad(resolve,reject){
               
           
            if (document.getElementById("ad8").checked == true) {
                document.getElementById("reason").innerHTML = "Promise function";

                let number = document.getElementById("t1").value;
                n = number;
                sum = 0;
                while (n > 0) {
                    let num = n % 10;
                    n = parseInt(n / 10);
                    sum = sum + num;
                }
              resolve();
                // document.getElementById("t2").value = "" + sum;
              
            }
  else{reject();}

            });
            promise.then(function(){document.getElementById("t2").value = ""+sum;});

        }


        
        

        /////ARMSTRONG
        
        
        function Armstrong1(){
    if(document.getElementById("ar1").checked == true){

        document.getElementById("reason").innerHTML = "No argument no return";

        let number = document.getElementById("t1").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = temp + num*num*num ;
        } 
        if(temp == number){
            document.getElementById("t2").value = "Number is Armstrong";
        }
        else{
            document.getElementById("t2").value = "Number is not Armstrong";
        }

   }
}


function Armstrong2(){
    if(document.getElementById("ar2").checked == true){

        document.getElementById("reason").innerHTML = "with argument no return";

       number = document.getElementById("t1").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = temp + num*num*num ;
        } 
        if(temp == number){
            document.getElementById("t2").value = " Number is Armstrong";
        }
        else{
            document.getElementById("t2").value = " Number is not Armstrong";
        }

   }
}



function Armstrong3(){
    if(document.getElementById("ar3").checked == true){

        document.getElementById("reason").innerHTML = "with argument with return";

         number = document.getElementById("t1").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = temp + num*num*num ;
        } 
        if(temp == number){
          return  document.getElementById("t2").value = number+" Number is Armstrong";
        }
        else{
         return   document.getElementById("t2").value = number+" Number is not Armstrong";
        }

   }
}

function Armstrong4(){
    if(document.getElementById("ar4").checked == true){

        document.getElementById("reason").innerHTML = "No argument with return";

        let number = document.getElementById("t1").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = temp + num*num*num ;
        } 
        if(temp == number){
          return  document.getElementById("t2").value = "Number is Armstrong";
        }
        else{
         return   document.getElementById("t2").value = "Number is not Armstrong";
        }

   }
}


     let Armstrong5=function(){
    if(document.getElementById("ar5").checked == true){

        number = document.getElementById("t1").value;
        document.getElementById("reason").innerHTML = "function expression";

        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = temp + num*num*num ;
            
        } 
        if(temp == number){
          return  document.getElementById("t2").value = number+" Number is Armstrong";
        }
        else{
          return  document.getElementById("t2").value = number+" Number is not Armstrong";
        }

   }
}





 function Armstrong6(){
         function armstrongcall() {

         if(document.getElementById("ar6").checked == true){
             
      let number = document.getElementById("t1").value;
        document.getElementById("reason").innerHTML = "callback function";

        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = temp + num*num*num ;
            
        } 
        if(temp == number){
          return  document.getElementById("t2").value = number+" Number is Armstrong";
        }
        else{
            return  document.getElementById("t2").value = number+" Number is not Armstrong";
        }
        } 
    
    }
    function call(callback){
        callback();
    }
    call(armstrongcall); 
}












let Armstrong7 = () => {
    if(document.getElementById("ar7").checked == true){

        document.getElementById("reason").innerHTML = "Arrow function";

         number = document.getElementById("t1").value;


        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = temp + num*num*num ;
        } 
        if(temp == number){
            return document.getElementById("t2").value = number+ " is Armstrong number";
    }
        else{
            return document.getElementById("t2").value = number+" is not Armstrong number";
        }
   }
   }



   function Armstrong8(){
     var sankit= new sasa(function ap(resolve,reject){

      if(document.getElementById("ar8").checked==true){

        let number = document.getElementById("t1").value;
        document.getElementById("reason").innerHTML = "promise function";
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = temp + num*num*num ;
        } 
     if(temp == number){resolve(); }
     else{reject(); }


      }
     }   );

     sankit.then(function(){document.getElementById("t2").value = "Armstrong number";}).catch(function(){document.getElementById("t2").value = "not Armstrong number";})

   }







////FACTORIAL


function factorial1(){
    if(document.getElementById("f1").checked == true){

        document.getElementById("reason").innerHTML = "No argument no return";

        let number = document.getElementById("t1").value;
        n = number; 
        f = 1 ;
        for(let i=1 ; i<= n ;i++)

        f = f*i;

    document.getElementById("t2").value = " "+f;
   }
}



function factorial2(){
    if(document.getElementById("f2").checked == true){

        document.getElementById("reason").innerHTML = "with argument no return";

         number = document.getElementById("t1").value;
        n = number; 
        f = 1 ;
        for(let i=1 ; i<= n ;i++)

        f = f*i;

    document.getElementById("t2").value = " "+f;
   }
}



function factorial3(){
    if(document.getElementById("f3").checked == true){
        // document.getElementById("t1").innerHTML = "";

        document.getElementById("reason").innerHTML = "with argument with return";

         number = document.getElementById("t1").value;
        n = number; 
        f = 1 ;
        for(let i=1 ; i<= n ;i++)

        f = f*i;

  return  document.getElementById("t2").value = " "+f;
   }
}




function factorial4(){
    if(document.getElementById("f4").checked == true){

        document.getElementById("reason").innerHTML = "No argument with return";

        let number = document.getElementById("t1").value;
        n = number; 
        f = 1 ;
        for(let i=1 ; i<= n ;i++)

        f = f*i;

  return  document.getElementById("t2").value = " "+f;
   }
}






let factorial5=function(number){
    if(document.getElementById("f5").checked == true){

        number = document.getElementById("t1").value;
        
        document.getElementById("reason").innerHTML = "function expression";

        n = number; 
        f = 1 ;
        for(let i=1 ; i<= n ;i++)

        f = f*i;

  return  document.getElementById("t2").value = " "+f;
   }
}





function factorial6(){
    function factorialcall(){

        if(document.getElementById("f6").checked == true){
            
            document.getElementById("reason").innerHTML = "callback function";

            let number = document.getElementById("t1").value;
        n = number; 
        f = 1 ;
        for(let i=1 ; i<= n ;i++)

        f = f*i;

  return  document.getElementById("t2").value = " "+f;
}
}
function call(callback){
    callback();
}
 call(factorialcall);
}











let factorial7 = () => {
    if(document.getElementById("f7").checked == true){
        
        document.getElementById("reason").innerHTML = "Arrow function";
             number = document.getElementById("t1").value;

        n = number; 
        f = 1 ;
        for(let i=1 ; i<= n ;i++)
        f = f*i;

    return document.getElementById("t2").value = number+" factorial is "+f;
    }
   }


   function factorial8(){
    var promise = new Promise(function fa(resolve , reject){

        if(document.getElementById("f8").checked == true){
            document.getElementById("reason").innerHTML = "Promise function";
            let number = document.getElementById("t1").value;
            n = number; 
            f = 1 ;
            for(let i=1 ; i<= n ;i++)
            {f = f*i;}
        resolve(); 
    }
    else{reject();}
    });
    promise.then(function(){document.getElementById("t2").value = ""+f;});
}












   ///REVERSE

   function reverse1(){
    if(document.getElementById("r1").checked == true){
        document.getElementById("reason").innerHTML = "No argument no return";

        let number = document.getElementById("t1").value;
        n = number; 
        rev = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            rev = rev * 10 + num ;
        } 
    document.getElementById("t2").value = ""+rev;
   }
}



function reverse2(){
    if(document.getElementById("r2").checked == true){
        document.getElementById("reason").innerHTML = "with argument no return";

        let number = document.getElementById("t1").value;
        n = number; 
        rev = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            rev = rev * 10 + num ;
        } 
    document.getElementById("t2").value = ""+rev;
   }
}





function reverse3(){
    if(document.getElementById("r3").checked == true){
        document.getElementById("reason").innerHTML = "with argument with return";

         number = document.getElementById("t1").value;
        n = number; 
        rev = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            rev = rev * 10 + num ;
        } 
  return  document.getElementById("t2").value = ""+rev;
   }
}





function reverse4(){
    if(document.getElementById("r4").checked == true){
        document.getElementById("reason").innerHTML = "no argument with return";

        let number = document.getElementById("t1").value;
        n = number; 
        rev = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            rev = rev * 10 + num ;
        } 
  return  document.getElementById("t2").value = ""+rev;
   }
}



let reverse5=function(){
    if(document.getElementById("r5").checked == true){
        document.getElementById("reason").innerHTML = "function expression";
        
        number = document.getElementById("t1").value;

        n = number; 
        rev = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            rev = rev * 10 + num ;
        } 
  return  document.getElementById("t2").value = ""+rev;
   }
}





function reverse6(){
    function reversecall(){

        if(document.getElementById("r6").checked == true){
            document.getElementById("reason").innerHTML = "callback function";

        let number = document.getElementById("t1").value;
        n = number; 
        rev = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            rev = rev * 10 + num ;
        } 
        return  document.getElementById("t2").value = ""+rev;
   }
}
          function call(callback){
              callback();
          }
          call(reversecall);
}




let reverse7 = () => {
    if(document.getElementById("r7").checked == true){
        document.getElementById("reason").innerHTML = "Arrow function";
       
        number = document.getElementById("t1").value;


        n = number; 
        rev = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            rev = rev * 10 + num ;
        } 
    return document.getElementById("t2").value =number+" Reverse number is "+rev;
    } 
}





function reverse8(){

    var promise = new Promise(function re(resolve , reject){

        if(document.getElementById("r8").checked == true){

            document.getElementById("reason").innerHTML = "Promise function";
            let number = document.getElementById("t1").value;
            n = number; 
            rev = 0 ;
            while (n>0){
                let num = n % 10;
                n = parseInt (n/10);
                rev = rev * 10 + num ;
            } 
        resolve(); 
    }
    else{reject();}
    });
    promise.then(function(){document.getElementById("t2").value = ""+rev;});
}


////PALINDROME



function palindrome1(){
    if(document.getElementById("pa1").checked == true){

        document.getElementById("reason").innerHTML = "No argument no return";

        let number = document.getElementById("t1").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = (temp * 10) + num ;
        } 
        if(number == temp){
            document.getElementById("t2").value = "Palindrom Number";
        }
        else{
            document.getElementById("t2").value = "Not Palindrom Number";
    }

   }
}




function palindrome2(){
    if(document.getElementById("pa2").checked == true){

        document.getElementById("reason").innerHTML = "with argument no return";

        number = document.getElementById("t1").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = (temp * 10) + num ;
        } 
        if(number == temp){
            document.getElementById("t2").value =  number+" Palindrom Number";
        }
        else{
            document.getElementById("t2").value =  number+" Not Palindrom Number";
    }

   }
}



function palindrome3(){
    if(document.getElementById("pa3").checked == true){

        document.getElementById("reason").innerHTML = "with argument with return";

        number = document.getElementById("t1").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = (temp * 10) + num ;
        } 
        if(number == temp){
          return  document.getElementById("t2").value = number+" Palindrom Number";
        }
        else{
         return   document.getElementById("t2").value = number+" Not Palindrom Number";
    }

   }
}




function palindrome4(){
    if(document.getElementById("pa4").checked == true){

        document.getElementById("reason").innerHTML = "No argument with return";

        let number = document.getElementById("t1").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = (temp * 10) + num ;
        } 
        if(number == temp){
          return  document.getElementById("t2").value = "Palindrom Number";
        }
        else{
         return   document.getElementById("t2").value = "Not Palindrom Number";
    }

   }
}






let palindrome5=function (){
    if(document.getElementById("pa5").checked == true){

        document.getElementById("reason").innerHTML = "function expression";
           number = document.getElementById("t1").value;
         n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = (temp * 10) + num ;
        } 
        if(number == temp){
          return  document.getElementById("t2").value = "Palindrom Number";
        }
        else{
         return   document.getElementById("t2").value = "Not Palindrom Number";
    }

   }
}






function palindrome6(){
    function palindromecall(){

        if(document.getElementById("pa6").checked == true){
            
        document.getElementById("reason").innerHTML = "callback function";

        let number = document.getElementById("t1").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = (temp * 10) + num ;
        } 
        if(number == temp){
          return  document.getElementById("t2").value = "Palindrom Number";
        }
        else{
         return   document.getElementById("t2").value = "Not Palindrom Number";
    }

   }
}
function call(callback){
    callback();
}
call(palindromecall);
}









let palindrome7 = () =>  {
    if(document.getElementById("pa7").checked == true){
        document.getElementById("reason").innerHTML = "Arrow function";

         number = document.getElementById("t1").value;


        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = (temp * 10) + num ;
        } 
        if(number == temp){
            return document.getElementById("t2").value = number+" is Palindrom number";
        }
        else{
            return document.getElementById("t2").value = number+" is not Palindrom number";
        }
   }
   }



   function palindrome8(){

       var promise = new Promise(function pa(resolve , reject){

        if(document.getElementById("pa8").checked == true){

            document.getElementById("reason").innerHTML = "Promise function";
            number = document.getElementById("t1").value;
            n = number; 
            temp = 0 ;
            while (n>0){
                let num = n % 10;
                n = parseInt (n/10);
                temp = (temp * 10) + num ;
            } 
            if(number == temp){
                resolve(); }
            else{
                reject(); }
       }
       });

       promise.then(function(){document.getElementById("t2").value = "Palindrom number";}).catch(function(){document.getElementById("t2").value = "Not Palindrom number";})
   }
   






























// function sankit() {
    
//     if (document.getElementById("p1").checked) {
//         a = document.getElementById("t1").value;
//         a1 = a;   //if we comment this  not mater change i<a in for loop
//         status = 0;
//         for (i = 2; i < a1; i++) {
//             if (a % i == 0)
//                 status = 1;
//         }
//         if (status == 0)
//             document.getElementById("t2").value = "Prime number"
//         else
//             document.getElementById("t2").value = "not a prime number"

//     }

//     //adding digit


//     else if (document.getElementById("san2").checked) {
//         b = document.getElementById("t1").value;
//         s = 0;
//         while (b != 0) {
//             m = b % 10;
//             s = s + m;
//             b = parseInt(b / 10);

//         }
//         document.getElementById("t2").value = s;

//     }

//     //armstrong number

//     else if (document.getElementById("san3").checked) {
//         c = document.getElementById("t1").value;
//         c1 = c;
//         s = 0;
//         while (c != 0) {
//             m = c % 10;
//             s = s + m * m * m;
//             c = parseInt(c / 10)
//         }
//         if (c1 == s)
//             document.getElementById("t2").value = "number is armstrong"

//         // else if(c1==1,2,3,4,5,6,7,8,9)
//         //     document.getElementById("t2").value="special number armstrong"

//         else
//             document.getElementById("t2").value = "number is not armstrong"

//     }



//     //factorial number

//     else if (document.getElementById("san4").checked) {
//         d = document.getElementById("t1").value;

//         f = 1;

//         for (i = 1; i <= d; i++) {
//             f = f * i
//         }

//         document.getElementById("t2").value = f

//     }


//     //reverse number
//     else if (document.getElementById("san5").checked) {
//         e = document.getElementById("t1").value;
//         r = 0;
//         while (e != 0) {
//             m = e % 10;
//             r = r * 10 + m;
//             e = parseInt(e / 10);

//         }
//         document.getElementById("t2").value = r;

//     }


//     //Palindrome

//     else if (document.getElementById("san6").checked) {

//         f = document.getElementById("t1").value;
//         f1 = f;
//         p = 0;
//         while (f > 0) {
//             m = f % 10;
//             f = parseInt(f / 10)
//             p = p * 10 + m;
//         }
//         if (p == f1) {
//             document.getElementById("t2").value = "Number is palindrome";

//         }
//         else {
//             document.getElementById("t2").value = "Number is not palindrome";
//         }

//     }


// }
