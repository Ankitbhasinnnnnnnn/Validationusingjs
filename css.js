var style=document.createElement('style');
style.innerHTML=`
.main-div{
    background-color:lightpink;
    border-radius: 10px;
    width: 500px;
    height:700px;
    margin-left:25%;
    margin-top:5%;
    border: 5px solid purple;
    display:flex;
    flex-direction:column;
  align-items:center; 
}
.heading{
    margin:2px;
    padding: 0 0 10px;
    text-align: center;
    font-size: 30px;
color:green;

}
div{
    display:flex;
    flex-direction:column;
}
input
{
    border:none;
    border-bottom: 1px solid rgb(231, 106, 106);
    background: transparent;
    outline:none;
    height:40px;
    color:rgb(119, 76, 76);
    font-size:16px;
}
#submit
{
    border:none;
    outline: none;
    height: 38px;
    width:33vw ;
    background: purple;
    color:rgb(32, 11, 11);
    font-size: 18px;
    border-radius: 20px;
    text-align:center;
}


`;
document.head.appendChild(style);