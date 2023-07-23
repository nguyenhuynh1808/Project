let fetchApiFeedBack = document.getElementsByClassName("fetchApiFeedBack")

fetch("../json/feedback.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < fetchApiFeedBack.length; j++) {
                fetchApiFeedBack[j].innerHTML += `
                <div class="client_taital_main">
                    <div class="client_left">
                        <div class="client_img"><img src="${data[i].image}"></div>
                    </div>
                    <div class="client_right">
                        <h3 class="moark_text">${data[i].name}</h3>
                        <p class="client_text">${data[i].Desciption}
                        </p>
                    </div>
                </div>
            `
            }
        }
    })