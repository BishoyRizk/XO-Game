let turn  = 'x'
let title = document.querySelector('.title')
let Square = []

function end(one,two,three){
   title.innerHTML = `${Square[one]} winner`
   document.getElementById('item'+one).style.backgroundColor= `#000`
   document.getElementById('item'+two).style.backgroundColor= `#000`
   document.getElementById('item'+three).style.backgroundColor= `#000`
  let boxes = document.querySelectorAll('.square')
  for (let index = 0; index < boxes.length; index++) {
      if (boxes[index].innerHTML == '') {
            boxes[index].style.pointerEvents = 'none'
      }
   
  }
   setInterval(function(){
      title.innerHTML +=`.`
   },1000)
   setTimeout(function(){
      location.reload()
   },2000)
}

function winner(){
   for (let index = 1; index <10 ; index++) {
      Square[index] = document.getElementById('item'+index).innerHTML
      
   }  
   // كدا دول بالعرض
   if(Square[1]==Square[2] && Square[2]==Square[3] && Square[1] != ''){
      console.log('done');
      end(1,2,3)
      
   }else if (Square[4]==Square[5] && Square[5]==Square[6] && Square[5] != ''){
      console.log('done2');
      end(4,5,6)
      
   }else if (Square[7]==Square[8] && Square[8]==Square[9] && Square[8] != ''){
      console.log('done3');
      end(7,8,9)
      
   }
   //  الطول
   else if (Square[1]==Square[4] && Square[4]==Square[7] && Square[1] != ''){
      console.log('height1');
      end(1,4,7)
      
   }
   else if (Square[2]==Square[5] && Square[5]==Square[8] && Square[5] != ''){
      console.log('height2');
      end(2,5,8)
      
   }
   else if (Square[3]==Square[6] && Square[6]==Square[9] && Square[6] != ''){
      console.log('height3');
      end(3,6,9)
      
   }

   // cross
   else if (Square[1]==Square[5] && Square[5]==Square[9] && Square[5] != ''){
      console.log('cross1');
      end(1,5,9)
      
   }
   else if (Square[3]==Square[5] && Square[5]==Square[7] && Square[5] != ''){
      console.log('cross2');
      end(3,5,7)
      
   }
  
  
}






function game (id){
   let myelement = document.getElementById(id)
   if(turn === "x" && myelement.innerHTML == ''){
    myelement.innerHTML = 'x'
    turn ='O'
    title.innerHTML = 'O'

   } else if (turn ==="O" && myelement.innerHTML == ''){
    myelement.innerHTML ='O'
    turn= 'x'
    title.innerHTML = 'x'
   }
   winner()
}
