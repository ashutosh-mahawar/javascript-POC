async function request() {
    await fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(response=> {
                let data = document.getElementById("data");
                let item = '';
                console.log(response);
                response.forEach(element => {
                    item = "item_id: " + element.id + ", category: " + element.category + ", title: " + element.title + "<br><br>";
                    data.append(item)
                });
            
                
                
    })
}