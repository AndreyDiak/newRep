//Создаем переменные которые ссылаются на эдементы html
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var main = document.getElementById('main');
var MyList = document.getElementById('list');
var ul = document.getElementsByTagName('ul');
var story = MyList.getElementsByClassName('item');
var popup = document.getElementsByClassName('popup')[0];
var close = document.querySelector(".close");

//функция по созданию элемента на странице
function addItem(){
	var NewList = document.createElement("li");
	NewList.innerHTML = "Новая задача";
	NewList.className = "item"
	MyList.appendChild(NewList);
	popup.style.display = "none";
}

//функция по удалению элемента на странице
function delItem(){
	MyList.removeChild(story[0]);

	if (story.length == 0) {
		popup.style.display = 'block';
	}
}
// функция скрытия окна9
function ClosePopup(){
	popup.style.display = "none";
}
//события нажатия на кнопки
btn1.addEventListener('click', addItem);
btn2.addEventListener('click', delItem);
close.addEventListener('click', ClosePopup);
