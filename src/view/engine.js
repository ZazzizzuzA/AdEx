export default {
    render: function(data) {
        let body = document.getElementsByClassName('block')[0];

        data.map(el => {
            let box = document.createElement("div");
            let title = document.createElement("h5");
            let text = document.createElement("p");
            // let sale = document.createElement("p");
            // let valueSale = document.createElement("span");
            // let valueBuy = document.createElement("span");
            // valueSale.id = el.ccy;
            title.innerText = el.title;
            // valueSale.innerText = el.sale;
            // valueBuy.innerText = el.buy;
            text.innerText = el.body;
            // sale.innerText = "Продажа: ";
            box.appendChild(title);
            box.appendChild(text);
            // box.appendChild(sale);
            // buy.appendChild(valueBuy);
            // sale.appendChild(valueSale);
        
            return box;
        }).forEach(el => {
            body.appendChild(el);
        });
    }
}