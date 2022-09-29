function login(){
    username = uname.value;
    pd = pswd.value 
    if(username.length==0 || pd.length==0){
        alert("please enter the username and password");
    }
    else{
        window.location="home.html";
        localStorage.setItem("username",username);
    }
}