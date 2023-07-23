let fetchApiBlog = document.getElementsByClassName("fetchApiBlog")

fetch("../json/blog.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < fetchApiBlog.length; j++) {
                fetchApiBlog[j].innerHTML += `
                <div class="col-md-6">
                  <div class="blog_box">
                     <div class="blog_img"><img src="${data[i].image}"></div>
                     <h4 class="date_text">${data[i].date}</h4>
                     <h4 class="prep_text">${data[i].title}</h4>
                     <p class="lorem_text">${data[i].description}</p>
                  </div>
                  <div class="read_bt"><a href="#">Read More</a></div>
               </div>
            `
            }
        }
    })