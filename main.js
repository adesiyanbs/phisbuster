var show = document.getElementById("show_text")
var par = document.getElementById("display")
var close = document.getElementById("close")
// var middle = document.getElementById("middle")
show.addEventListener('click', Open)
function Open(){
    par.style.display = "block"
    close.style.display = "block"
}
var show2 = document.getElementById("show_text2")
var par2 = document.getElementById("display2")
var close2 = document.getElementById("close2")

show2.addEventListener('click', Open2)
function Open2(){
    par2.style.display = "block"
    close2.style.display = "block"

}
close2.addEventListener('click', clickOut2)
function clickOut2(){
    close2.style.display ='none'
    par2.style.display="none"
    console.log(23)
  
}


var show3= document.getElementById("show_text3")
var par3 = document.getElementById("display3")
var close3 = document.getElementById('close3')
var imggallery = document.getElementById('img_dis')

show3.addEventListener('click', Open3)
function Open3(){
    par3.style.display = "block"
    imggallery.style.display= "grid"
    close3.style.display = 'block'
}
close3.addEventListener('click', closeout3)
function closeout3(){
    par3.style.display = 'none'
}
var show4= document.getElementById("show_text4")
var par4 = document.getElementById("display4")
var close4 = document.getElementById("close4")

show4.addEventListener('click', Open4)
function Open4(){
    par4.style.display = "block"
    close4.style.display = "block"
}
close4.addEventListener('click', closeout4)
function closeout4(){
    par4.style.display ='none'
}
var show5= document.getElementById("show_text5")
var par5 = document.getElementById("display5")
var close5 = document.getElementById("close5")

show5.addEventListener('click', Open5)
function Open5(){
    par5.style.display ="block"
    close5.style.display ="block"

}
close5.addEventListener('click', clickout5)
function clickout5(){
    par5.style.display = 'none'
}
close.addEventListener('click', clickOut)
function clickOut(){
    close.style.display ='none'
    par.style.display="none"
    // console.log(23)
  
}

var pcase = document.getElementById('case1')
var pcase2 = document.getElementById('case2')
var pcase3 = document.getElementById('case3')
var modal = document.getElementById('simplemodal')
var modal2 = document.getElementById('simplemodal2')
var modal3 = document.getElementById('simplemodal3')
var closebtn = document.getElementById('closebtn')
var closebtn2 = document.getElementById('closebtn2')
var closebtn3 = document.getElementById('closebtn3')



case1.addEventListener('click', openModal)
case2.addEventListener('click', openModal2)
case3.addEventListener('click', openModal3)

function openModal(){
    modal.style.display = 'block'
}
closebtn.addEventListener('click', closeModal)
function closeModal(){
    modal.style.display='none'
}

function openModal2(){
    modal2.style.display = 'block'
}
closebtn2.addEventListener('click', closeModal2)
function closeModal2(){
    modal2.style.display='none'
}
function openModal3(){
    modal3.style.display = 'block'
}
closebtn3.addEventListener('click', closeModal3)
function closeModal3(){
    modal3.style.display='none'
}