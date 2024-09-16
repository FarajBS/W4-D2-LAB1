const url = "https://fakestoreapi.com/products";
let cont = document.getElementById('container');
let rows = document.getElementById('row');

fetch(url)
.then(res => res.json())
.then((data) => {

    console.log(data);
    let info = data.map(ele => {
        console.log(ele);

        // let divH1 = document.createElement("div");

        let name = document.createElement("h1");
        name.textContent = ele.title;
        name.classList.add("fs-5");

        
        let image = document.createElement("img");
        image.src = ele.image;

        let price = document.createElement("p");
        price.textContent = ele.price;
        price.classList.add("fs-6");


        let column = document.createElement("div");
        column.classList.add("coln");
        column.classList.add("col-12");
        column.classList.add("col-md-4");
        column.classList.add("col-lg-3");
        column.classList.add("p-3");




        column.appendChild(name);
        column.appendChild(image);
        column.appendChild(price);

        rows.appendChild(column);

        cont.appendChild(rows);
    })

})
