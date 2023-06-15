let game = document.querySelector(".game")
n = 0;
game.addEventListener("click",()=>{
    let d1 = document.querySelector(".d1")
    let d2 = document.querySelector(".d2")
    let d3 = document.querySelector(".d3")
    let d4 = document.querySelector(".d4")
    let d5 = document.querySelector(".d5")
    let d6 = document.querySelector(".d6")
    let d7 = document.querySelector(".d7")
    let d8 = document.querySelector(".d8")
    let d9 = document.querySelector(".d9")

    d1.addEventListener("click",()=>{
        if(n%2==0){
            d1.innerHTML = "X"
        }
        else
        {
            d1.innerHTML = "O"
        }
    })

    d2.addEventListener("click",()=>{
        if(n%2==0){
            d2.innerHTML = "X"
        }
        else
        {
            d2.innerHTML = "O"
        }
    })

    d3.addEventListener("click",()=>{
        if(n%2==0){
            d3.innerHTML = "X"
        }
        else
        {
            d3.innerHTML = "O"
        }
    })

    d4.addEventListener("click",()=>{
        if(n%2==0){
            d4.innerHTML = "X"
        }
        else
        {
            d4.innerHTML = "O"
        }
    })

    d5.addEventListener("click",()=>{
        if(n%2==0){
            d5.innerHTML = "X"
        }
        else
        {
            d5.innerHTML = "O"
        }
    })

    d6.addEventListener("click",()=>{
        if(n%2==0){
            d6.innerHTML = "X"
        }
        else
        {
            d6.innerHTML = "O"
        }
    })

    d7.addEventListener("click",()=>{
        if(n%2==0){
            d7.innerHTML = "X"
        }
        else
        {
            d7.innerHTML = "O"
        }
    })

    d8.addEventListener("click",()=>{
        if(n%2==0){
            d8.innerHTML = "X"
        }
        else
        {
            d8.innerHTML = "O"
        }
    })

    d9.addEventListener("click",()=>{
        if(n%2==0){
            d9.innerHTML = "X"
        }
        else
        {
            d9.innerHTML = "O"
        }
    
    })

 //X g'olib bo'lishi
     d = 0;
    if(d1.innerHTML =="X" && d2.innerHTML == "X" && d3.innerHTML =="X")
    {
        document.querySelector(".top_onga").style.display = "block" 
        d++;
    }
    else if(d4.innerHTML =="X" && d5.innerHTML == "X" && d6.innerHTML =="X")
    {
        document.querySelector(".center_onga").style.display = "block" 
        d++;
    }
    else if(d7.innerHTML =="X" && d8.innerHTML == "X" && d9.innerHTML =="X")
    {
        document.querySelector(".bottom_onga").style.display = "block"
        d++;
    }
    else if(d1.innerHTML =="X" && d4.innerHTML == "X" && d7.innerHTML =="X")
    {
        document.querySelector(".left_pastga").style.display = "block" 
        d++;
    }
    else if(d2.innerHTML =="X" && d5.innerHTML == "X" && d8.innerHTML =="X")
    {
        document.querySelector(".center_pastga").style.display = "block"
        d++;
    }
    else if(d3.innerHTML =="X" && d6.innerHTML == "X" && d9.innerHTML =="X")
    {
        document.querySelector(".right_pastga").style.display = "block"
        d++;
    }
    else if(d1.innerHTML =="X" && d5.innerHTML == "X" && d9.innerHTML =="X")
    {
        document.querySelector(".diagonal_left").style.display = "block"
        d++;

    }
    else if(d3.innerHTML =="X" && d5.innerHTML == "X" && d7.innerHTML =="X")
    {
        document.querySelector(".diagonal_right").style.display = "block"
        d++;

    }


    //O g'olib bo'lishi
    g = 0;
    if(d1.innerHTML =="O" && d2.innerHTML == "O" && d3.innerHTML =="O")
    {
        document.querySelector(".top_onga").style.display = "block"
        g++;
    }
    else if(d4.innerHTML =="O" && d5.innerHTML == "O" && d6.innerHTML =="O")
    {
        document.querySelector(".center_onga").style.display = "block"
        g++;
    }
    else if(d7.innerHTML =="O" && d8.innerHTML == "O" && d9.innerHTML =="O")
    {
        document.querySelector(".bottom_onga").style.display = "block"
        g++;
    }
    else if(d1.innerHTML =="O" && d4.innerHTML == "O" && d7.innerHTML =="O")
    {
        document.querySelector(".left_pastga").style.display = "block"
        g++;

    }
    else if(d2.innerHTML =="O" && d5.innerHTML == "O" && d8.innerHTML =="O")
    {
        document.querySelector(".center_pastga").style.display = "block"
        g++;

    }
    else if(d3.innerHTML =="O" && d6.innerHTML == "O" && d9.innerHTML =="O")
    {
        document.querySelector(".right_pastga").style.display = "block"
        g++;

    }
    else if(d1.innerHTML =="O" && d5.innerHTML == "O" && d9.innerHTML =="O")
    {
        document.querySelector(".diagonal_left").style.display = "block"
        g++;

    }
    else if(d3.innerHTML =="O" && d5.innerHTML == "O" && d7.innerHTML =="O")
    {
        document.querySelector(".diagonal_right").style.display = "block"
        g++;

    }
    n++;
       // modal oyna
       function win(a){
        let x = document.querySelector(".won")
        setTimeout(() => {
            x.style.display = "block"
        }, 1500);
        
        document.querySelector(".win").innerHTML = a
        retry = document.querySelector(".retry")
        retry.addEventListener("click",()=>{
            d1.innerHTML = ""
            d2.innerHTML = ""
            d3.innerHTML = ""
            d4.innerHTML = ""
            d5.innerHTML = ""
            d6.innerHTML = ""
            d7.innerHTML = ""
            d8.innerHTML = ""
            d9.innerHTML = ""
            document.querySelector(".top_onga").style.display = "none"
            document.querySelector(".center_onga").style.display = "none"
            document.querySelector(".bottom_onga").style.display = "none"
            document.querySelector(".left_pastga").style.display = "none"
            document.querySelector(".center_pastga").style.display = "none"
            document.querySelector(".right_pastga").style.display = "none"
            document.querySelector(".diagonal_left").style.display = "none"
            document.querySelector(".diagonal_right").style.display = "none"
            x.style.display = "none"
            n = 0;
        })
    }

    if(n>=5 && d == 1){
        win("X Player WIN !!!")
    }
    else if(n>=5 && g==1){
        win("O Player WIN !!!")
    }
    else if(n>=9){
        win(" DRAW !!!")
    }

   
})
// tun kun button
let btn = document.querySelector(".btn")
let crcl = document.querySelector(".crcl")
let cont = document.querySelector(".container")
b = 1;
btn.addEventListener("click", ()=>{
    if(b%2==1){
    crcl.style.transform = "translateX(28px)"
    btn.style.background = "rgb(73,68,166,1)"
    crcl.style.transition = "all 1s"
    cont.style.backgroundImage = "url(back2.jpg)"
    cont.style.transition = "all 2s"

}
    else{
        crcl.style.transform = "translateX(0px)"
        crcl.style.transition = "all 1s"
        btn.style.background = "rgb(251, 194, 49)"
        cont.style.backgroundImage = "url(back.jpg)"
        cont.style.transition = "all 2s"

    }
    b++;
})


