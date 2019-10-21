 function allLetter()
  { 
  var uname = document.registration.username;
  var letters = /^[A-Za-z]+$/;
  if(uname.value.match(letters))
  {
  // Focus goes to next field i.e. Address.
  return true;
  }
  else
  {
  alert('Firstname  must have alphabet characters only');

  return false;
  }
  }
  function alLetter()
  { 
  var uname = document.registration.user;
  var letters = /^[A-Za-z]+$/;
  if(uname.value.match(letters))
  {
  // Focus goes to next field i.e. Address.
  return true;
  }
  else
  {
  alert('Lastname must have alphabet characters only');

  return false;
  }
  }

 function phonenumber(n)
{
  if(isNaN(n))
  {
       alert("Not a valid Phone Number");
  }
  }

function validmail()
{
	var mail="";
	mail=document.getElementById("email").value;
	if((mail.indexOf('@')!=mail.lastIndexOf('@'))||mail.indexOf('.')>1||mail.indexOf('@')<1)
	{alert("invalid mail");
	}
}

function calage()
{
	var birth=Date.parse(document.getElementById("birth").value);
	age=~((Date.now()-birth)/(31557600000));
	if(age<18)
	{
		alert("you are less than 18");
	}
}
function validpass()
{
var p1,p2;
pi=document.getElementById("pass").value;
p2=document.getElementById("cpass").value;
if(!(p1===p2))
{alert("PLEASE ENTER VALID PASSWORD");
return true;
}
else
{
alert("FORM SUBMITTED SUCCESSFULL");
return false;
}
}