function highlight() {
    //Write your code here
	var arr=document.getElementsByTagName("strong");
	//document.querySelectorAll("strong").style.color="green";
	for(let i=0;i<arr.length;i++){
		arr[i].style.color="green";
	}
	

}


function return_normal() {
    //Write your code here
var arr=document.getElementsByTagName("strong");
	//document.querySelectorAll("strong").style.color="green";
	for(let i=0;i<arr.length;i++){
		arr[i].style.color="black";
	}
    
}
