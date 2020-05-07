var xmlhttp = new XMLHttpRequest();
var url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var cards = document.getElementById('cards');

    var container = document.createElement('div');
    container.setAttribute('class', 'flex-container');

    var i;
    for (i = 0; i < arr.length; i++) {
        var card_conteiner = document.createElement('div');
        card_conteiner.setAttribute('class', 'flex-card position-relative');

        var area_card_conteiner = document.createElement('div');
        area_card_conteiner.setAttribute('class', 'card h-100');

        var img_area_card_conteiner = document.createElement('img');
        img_area_card_conteiner.setAttribute('class', 'card-img-top');
        img_area_card_conteiner.setAttribute('alt', 'photo');
        img_area_card_conteiner.setAttribute('src', arr[i].photo);
        area_card_conteiner.appendChild(img_area_card_conteiner);

        var body_area_card_conteiner = document.createElement('div');
        body_area_card_conteiner.setAttribute('class', 'card-body');

        var title_body_area_card_conteiner = document.createElement('h5');
        title_body_area_card_conteiner.setAttribute('class', 'card-title');
        title_body_area_card_conteiner.innerText = arr[i].property_type;
        body_area_card_conteiner.appendChild(title_body_area_card_conteiner);

        var text_body_area_card_conteiner = document.createElement('p');
        text_body_area_card_conteiner.setAttribute('class', 'card-text');
        text_body_area_card_conteiner.innerText = arr[i].name;
        body_area_card_conteiner.appendChild(text_body_area_card_conteiner);

        var price_body_area_card_conteiner = document.createElement('p');
        price_body_area_card_conteiner.setAttribute('class', 'card-text');
        price_body_area_card_conteiner.innerText = "R$ " + arr[i].price + ",00";
        body_area_card_conteiner.appendChild(price_body_area_card_conteiner);

        var button_body_area_card_conteiner = document.createElement('a');
        button_body_area_card_conteiner.setAttribute('class', 'btn btn-primary');
        button_body_area_card_conteiner.setAttribute('href', '#');
        button_body_area_card_conteiner.innerText = "Alugue";
        body_area_card_conteiner.appendChild(button_body_area_card_conteiner);

        area_card_conteiner.appendChild(body_area_card_conteiner);

        card_conteiner.appendChild(area_card_conteiner);

        container.appendChild(card_conteiner);        
    }

    cards.appendChild(container);

    console.log(arr);
}