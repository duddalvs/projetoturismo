function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagens/close_white_36dp.svg";
    }
}


function initMap() {
    // A localização de exemplo (Nova Iorque)
    var location = {lat: -22.866688, lng: -43.253763};
    // O mapa, centralizado na localização
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
    });
    // O marcador, posicionado na localização
    var marker = new google.maps.Marker({position: location, map: map});
}

