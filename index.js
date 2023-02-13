async function fetchData() {
    try {
        let res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
        let data = await res.json();
        console.log(data);
        getData(data)
    } catch (error) {
        console.log("error:-", error)
    }

}
fetchData()

function getData(data) {
    data.map((elem) => {
        let tab = document.querySelector("table");
        let tHead = document.createElement("thead")
        let rows = document.createElement("tr")

        // let img = document.createElement("img");
        // img.setAttribute = elem.image;

        let coin = document.createElement("td");
        coin.innerText = elem.name;
        coin.setAttribute("class", "data")

        let price = document.createElement("td");
        price.innerText = elem.current_price;
        price.setAttribute("class", "data")

        let marketCap = document.createElement("td");
        marketCap.innerText = elem.market_cap;
        marketCap.setAttribute("class", "data");

        let high = document.createElement("td");
        high.innerText = elem.high_24h;
        high.setAttribute("class", "data");

        let low = document.createElement("td");
        low.innerText = elem.low_24h;
        low.setAttribute("class", "data");

        tab.append(tHead);
        tHead.append(rows);
        rows.append(coin, price, marketCap, high, low)
        // console.log(elem.name,elem.current_price,elem.market_cap,elem.high_24h,elem.low_24h);
    })

}

