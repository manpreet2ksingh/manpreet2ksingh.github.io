var c=0,x=0,o=0;
var boxes=document.querySelectorAll(".cell");
function selectWinnerBoxes(b1,b2,b3){
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");

    var ch = b1.innerHTML;
    win(ch);
    counter(ch);

}

function getWinner(){
var box1=document.getElementById(0),
    box2=document.getElementById(1),
    box3=document.getElementById(2),
    box4=document.getElementById(3),
    box5=document.getElementById(4),
    box6=document.getElementById(5),
    box7=document.getElementById(6),
    box8=document.getElementById(7),
    box9=document.getElementById(8);

if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML){
    c=1;
    selectWinnerBoxes(box1,box2,box3);
    reset(box1,box2,box3);
}

  if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML){
    c=1;
    selectWinnerBoxes(box4,box5,box6);
    reset(box4,box5,box6);
  }

  if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML){
    c=1;
    selectWinnerBoxes(box7,box8,box9);
    
  }
  if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML){
    c=1;
    selectWinnerBoxes(box1,box4,box7);
    
  }
  if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML){
    c=1;
    selectWinnerBoxes(box2,box5,box8);
    
  }

  if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML){
    c=1;
    selectWinnerBoxes(box3,box6,box9);
   
  }

  if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML){
    c=1;
    selectWinnerBoxes(box1,box5,box9);
    
  }

  if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML){
    c=1;
    selectWinnerBoxes(box3,box5,box7);
   
  }

}
    
    var x_or_o = 0;

    for(var i=0;i<boxes.length;i++)
    {
        boxes[i].onclick = function(){
            if(c==0){
            if(this.innerHTML != "X" && this.innerHTML !="O"){
            if(x_or_o %2===0){
                turn("O");
                this.innerHTML = "X";
                getWinner();
                x_or_o +=1;
            }
            else{
                turn("X");
                this.innerHTML = "O";
                getWinner();
                x_or_o +=1;
            }
        }
    }    
    }
    }

    function replay(){
        for(var i=0;i<9;i++)
        {
            c=0;
            x_or_o = 0;
            boxes[i].classList.remove("win");
            document.getElementById(i).innerHTML = "";
            document.getElementById("hd").innerHTML = "Play";
        }
    }
    function turn(P){
    document.getElementById("hd").innerHTML = P +" turn";
    }

    function win(A){
        document.getElementById("hd").innerHTML = A + " Won";
    }

    function counter(Q){
        if(Q === "X")
        {
            x+=1;
            document.getElementById("score").innerHTML = "X = "+ x;
        }
        if(Q === "O")
        {
            o+=1;
            document.getElementById("Oscore").innerHTML = "O = "+ o;
        }
    }

    