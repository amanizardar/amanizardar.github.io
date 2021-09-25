function myfun(s)
{
    
    if(s=='home')
    {
        // console.log("home");
        i=0;
        document.getElementsByClassName("right_window")[0].innerHTML=document.getElementsByClassName("home_content")[0].innerHTML;
        typeWriter();
        
        
    }
    else if(s=='Education')
    {
        // console.log("Education");
        document.getElementsByClassName("right_window")[0].innerHTML=document.getElementsByClassName("Education_content")[0].innerHTML;
    }
    else if(s=="Project")
    {
        document.getElementsByClassName("right_window")[0].innerHTML=document.getElementsByClassName("Project_content")[0].innerHTML;
    }
    else if(s=="Contact")
    {
        document.getElementsByClassName("right_window")[0].innerHTML=document.getElementsByClassName("Contact_content")[0].innerHTML;
    }
}

var i=0;
var txt = 'Hi There, My Name is Aman Izardar.';
var speed = 50;
function typeWriter() {

  if (i < txt.length) {
    document.getElementById("typewrite").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

