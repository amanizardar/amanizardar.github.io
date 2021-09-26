function myfun(s)
{
    
    if(s=='home')
    {
        // console.log("home");
        // i=0;
        document.getElementsByClassName("right_window")[0].innerHTML=document.getElementsByClassName("home_content")[0].innerHTML;
        // typeWriter();
        document.getElementsByClassName("left_window")[0].innerHTML=document.getElementsByClassName("home_content_lw")[0].innerHTML;

        
        
    }
    else if(s=='Education')
    {
        // console.log("Education");
        document.getElementsByClassName("right_window")[0].innerHTML=document.getElementsByClassName("Education_content")[0].innerHTML;
        document.getElementsByClassName("left_window")[0].innerHTML=document.getElementsByClassName("home_content_lw")[0].innerHTML;
        
    }
    else if(s=="Project")
    {
        document.getElementsByClassName("right_window")[0].innerHTML=document.getElementsByClassName("Project_content")[0].innerHTML;
        document.getElementsByClassName("left_window")[0].innerHTML=document.getElementsByClassName("home_content_lw")[0].innerHTML;

    }
    else if(s=="Contact")
    {
        document.getElementsByClassName("right_window")[0].innerHTML=document.getElementsByClassName("Contact_content")[0].innerHTML;
        
        // trying new things:
        document.getElementsByClassName("left_window")[0].innerHTML=document.getElementsByClassName("Contact_content_lw")[0].innerHTML;

        // document.getElementsByClassName("left_window")[0].innerHTML="Contact Me";
        // document.getElementById("rw").style.marginLeft="0px";
        // document.getElementById("rw").style.marginRight="600px";



    }
}

// var i=0;
// var txt = 'Hi There, My Name is Aman Izardar.';
// var speed = 50;
// function typeWriter() {

//   if (i < txt.length) {
//     document.getElementById("typewrite").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

