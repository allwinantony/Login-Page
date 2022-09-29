username = localStorage.getItem("username");
welcome.innerHTML = `Welcome ${username}`;

function logout(){
    key = confirm("you want to logout?");
    if(key==true){
        localStorage.removeItem("username");
        window.location="login.html";
    }
    else{
        //I want to stay on the page. so no code needed   
    }
}