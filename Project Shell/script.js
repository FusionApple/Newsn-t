var doc = window 

 doc.addEventListener('load', function(){

 	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth();
	var day = today.getDate();


	var months = ['January','February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	var end;
	switch(day){
		case 1:
			end = "st";
			break;
		case 21:
			end = "st";
			break;
		case 31:
			end = "st";
			break;
		case 2:
			end = "nd";
			break;
		case 22:
			end = "nd";
			break;
		case 3:
			end = 'rd';
			break;
		case 23:
			end = "rd";
			break;
		default:
			end = 'th';
	}

	//alert(months[month] + " "  + day + end + ', ' + year);

	document.querySelector('#date').innerHTML = months[month] + " "  + day + end + ', ' + year;
});






 const submitForm = (form, text) =>{

		form.addEventListener('submit', (e) =>{

			e.preventDefault();//prevents the form from refreshing
			var name = form.querySelector("#name");
			var comment = form.querySelector("#comment");
			var HTML = document.querySelector('#' + CSS.escape(text) + " .text");

		
		
			console.log("inside");
			HTML.innerHTML += "<p class = 'name'>" + name.value + "</p> <p>" + comment.value + "</p";


			name.value = "";
			comment.value = "";

		
	});
};


if(document.title == "Arts | Newsn't")
{
	var art1F = document.querySelector("#art1F");
	submitForm(art1F, 'art1');
}

if(document.title == "Business | Newsn't")
{
	var business1F = document.querySelector("#business1F");
	submitForm(business1F, 'business1');
}

if(document.title == "Entertainment | Newsn't")
{
	var entertainment1F = document.querySelector("#entertainment1F");
	submitForm(entertainment1F, 'entertainment1');
}

if(document.title == "Florida Man | Newsn't")
{
	var floridaMan1F = document.querySelector("#floridaMan1F");
	submitForm(floridaMan1F, 'floridaMan1');
}

if(document.title == "Politics | Newsn't")
{
	var politics1F = document.querySelector("#politics1F");
	submitForm(politics1F, 'politics1');
}

if(document.title == "Science | Newsn't")
{
	var science1F = document.querySelector("#science1F");
	submitForm(science1F, 'science1');
}

if(document.title == "Sports | Newsn't")
{
	var sports1F = document.querySelector("#sports1F");
	submitForm(sports1F, 'sports1');
}

