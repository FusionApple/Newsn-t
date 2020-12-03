var doc = window;

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

		
			HTML.innerHTML += "<p class = 'name'>" + name.value + "</p> <p>" + comment.value + "</p";


			name.value = "";
			comment.value = "";

		
	});
};


if(document.title == "Arts | Newsn't")
{
	var art1F = document.querySelector("#art1F");
	submitForm(art1F, 'art1');

	var art2F = document.querySelector("#art2F");
	submitForm(art2F, 'art2');
}

if(document.title == "Business | Newsn't")
{
	var business1F = document.querySelector("#business1F");
	submitForm(business1F, 'business1');

	var business2F = document.querySelector("#business2F");
	submitForm(business2F, 'business2');
}

if(document.title == "Entertainment | Newsn't")
{
	var entertainment1F = document.querySelector("#entertainment1F");
	submitForm(entertainment1F, 'entertainment1');

	var entertainment2F = document.querySelector("#entertainment2F");
	submitForm(entertainment2F, 'entertainment2');
}

if(document.title == "Florida Man | Newsn't")
{
	var floridaMan1F = document.querySelector("#floridaMan1F");
	submitForm(floridaMan1F, 'floridaMan1');

	var floridaMan2F = document.querySelector("#floridaMan2F");
	submitForm(floridaMan2F, 'floridaMan2');
}

if(document.title == "Politics | Newsn't")
{
	var politics1F = document.querySelector("#politics1F");
	submitForm(politics1F, 'politics1');

	var politics2F = document.querySelector("#politics2F");
	submitForm(politics2F, 'politics2');
}

if(document.title == "Science | Newsn't")
{
	var science1F = document.querySelector("#science1F");
	submitForm(science1F, 'science1');

	var science2F = document.querySelector("#science2F");
	submitForm(science2F, 'science2');
}



if(document.title == "Sports | Newsn't")
{
	var sports1F = document.querySelector("#sports1F");
	submitForm(sports1F, 'sports1');

	var sports2F = document.querySelector("#sports2F");
	submitForm(sports2F, 'sports2');


}


// picks a random natural disaster for the weather

if(document.title == "Home | Newsn't")
{


	image = document.querySelector('#weather');

	doc.addEventListener('load' , function(){

		imgNum = Math.floor(Math.random() * 5);

		var today = new Date();
		var day = today.getDay();


		image.src = "images/" + day + ".png";
	});

}



// deals with user feedback form

if(document.title == "Contact Us | Newsn't")
{
		const form =  document.querySelector('#feedback ');




		form.addEventListener('submit', (e) =>{

			e.preventDefault();//prevents the form from refreshing

				if(form.querySelector('div#first').style.display == 'none')
				{
					form.querySelector('#name').value = "";
					form.querySelector('#email').value = "";
					form.querySelector('#feedback').value = "";

					form.querySelector('div#first').style.display = 'inline';
					form.querySelector('div#second').style.display = 'none';
				}
				else
				{
					form.querySelector('div#first').style.display = 'none';
					form.querySelector('div#second').style.display = 'inline';
				}



		
	});




}