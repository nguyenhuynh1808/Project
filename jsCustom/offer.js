let fetchApiOffer = document.getElementsByClassName("fetchApiOffer")

fetch("../json/offer.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < fetchApiOffer.length; j++) {
                fetchApiOffer[j].innerHTML += `
                <div class="col-lg-3 col-md-6">
                    <div class="coffee_img"><img src="${data[i].image}"></div>
                    <h3 class="types_text">${data[i].title}</h3>
                    <p class="looking_text">${data[i].description} 
                    </p>
                    <div class="read_bt"><a href="#">Tìm hiểu thêm</a></div>
                </div>
            `
            }
        }
    })