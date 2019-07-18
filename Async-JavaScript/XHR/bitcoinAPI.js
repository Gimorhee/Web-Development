const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
const btn = document.querySelector("#refresh-button");
const span = document.querySelector("#price");
let currency = "USD";

btn.addEventListener("click", () => {
  const XHR = new XMLHttpRequest();

  XHR.onreadystatechange = () => {
    if (XHR.readyState === 4 && XHR.status === 200) {
      const data = JSON.parse(XHR.responseText);

      span.innerText = data.bpi[currency].rate + " " + currency;
    }
  };

  XHR.open("GET", url);
  XHR.send();
});
