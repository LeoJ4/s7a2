function hide()
{


for(i=1;i<=6;i++)
{
	if(i%2!=0)
	{
		var a = document.getElementById("row"+i);
		a.style.display = "none";
	}
}

}