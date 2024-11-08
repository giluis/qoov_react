import '../../old/public/styles/build/pricing.css'
export default function PriceDisplay({ num_motoristas }) {
    // let num_motoristas = Math.ceil(value / 1000 * 30);
    // let desconto = document.querySelector(".desconto");
    // let a = document.querySelectorAll(".desconto > *");
    // for (const old_element of a) {
    //     if (old_element.classList.contains("num_motoristas_container")) {
    //         continue;
    //     }
    //     desconto.removeChild(old_element);
    // }

    // if (num_motoristas > 29.9) {
    //     desconto.dataset.over30 = "over";
    //     document.querySelector(".num_motoristas_display").textContent = `30+`;
    //     let plano = document.createElement("div");
    //     plano.innerText = "O seu plano";
    //     plano.classList.add("plano");

    //     let subtitle = document.createElement("div");
    //     subtitle.innerText = "Contacte a equipa comercial para obter o seu plano detalhadamente";
    //     subtitle.classList.add("subtitle");

    //     let but = document.createElement("a");
    //     but.innerText = "Contactar a equipa comercial";
    //     but.classList.add("bigbutton", "bitbutton-animated");

    //     desconto.append(plano, subtitle, but)

    //     // num_motoristas = 30;
    //     // let discount = document.querySelector(".discount");
    //     // let precoBase = document.querySelector(".precoBase");
    //     // let pricing = result[num_motoristas < 29 ? num_motoristas : 29]
    //     // discount.textContent = "-" + pricing.discount;
    //     // precoBase.textContent = pricing.precoBase + "€";
    //     // if (pricing.precoBase === result[1].precoBase) {
    //     //     discount.style.opacity = 0;
    //     //     document.querySelector(".previous_price").style.display = "none";
    //     // } else {
    //     //     discount.style.opacity = 1
    //     //     document.querySelector(".previous_price").style.display = "block";
    //     // }
    // } else {
    //     num_motoristas = Math.min(num_motoristas, 30);
    //     desconto.dataset.over30 = "under";

    //     let pricing = result[num_motoristas < 29 ? num_motoristas : 29]

    //     let discount = document.createElement("div");
    //     discount.classList.add("discount");
    //     discount.textContent = "-" + pricing.discount;

    //     let plano = document.createElement("div");
    //     plano.classList.add("plano");
    //     plano.textContent = "O seu plano"

    //     let precoBase = document.createElement("div");
    //     precoBase.classList.add("precoBase")
    //     precoBase.textContent = pricing.precoBase + "€";

    //     let previous_price = document.createElement("div");
    //     previous_price.classList.add("previous_price")
    //     previous_price.textContent = 12 + "€";

    //     let diffPrecos = document.createElement("div");
    //     diffPrecos.classList.add("diferencaPrecos")
    //     diffPrecos.append(precoBase, previous_price);

    //     let pormotorista = document.createElement("div");
    //     pormotorista.classList.add("pormotorista")
    //     pormotorista.textContent = "por motorista";

    //     let mensalmente = document.createElement("div");
    //     mensalmente.classList.add("mensalmente")
    //     mensalmente.textContent = "cobrado mensalmente";

    //     desconto.append(discount, plano, diffPrecos, pormotorista, mensalmente);
    //     if (pricing.precoBase === result[1].precoBase) {
    //         discount.style.opacity = 0;
    //         document.querySelector(".previous_price").style.display = "none";
    //     } else {
    //         discount.style.opacity = 1
    //         document.querySelector(".previous_price").style.display = "block";
    //     }
    //     document.querySelector(".num_motoristas_display").textContent = num_motoristas;
    // }


    if (num_motoristas <= 30) {
        let { precoBase, total, totalWithDiscount, discount, difference } = pricing_tiers[num_motoristas];
        return (
            <div className="slider_calculation">
                <div className="desconto">
                    <div className="discount">{precoBase !== 12.00 ? `-${discount}` : null}</div>
                    <div className="plano">O seu plano</div>
                    <div className="diferencaPrecos">
                        <div className="precoBase">{precoBase}€</div>
                        {
                            precoBase !== 12.00 ?
                                <div className="previous_price">12€</div> : null
                        }
                    </div>
                    <div className="pormotorista">por motorista</div>
                    <div className="mensalmente">cobrado mensalmente</div>
                    <div className="num_motoristas_container">
                        <div className="num_motoristas_display">{num_motoristas}</div>
                        <div>motoristas</div>
                    </div>
                </div>
            </div>
        )
    } else {


        // desconto.dataset.over30 = "over";
        // document.querySelector(".num_motoristas_display").textContent = `30+`;
        // let plano = document.createElement("div");
        // plano.innerText = "O seu plano";
        // plano.classList.add("plano");

        // let subtitle = document.createElement("div");
        // subtitle.innerText = "Contacte a equipa comercial para obter o seu plano detalhadamente";
        // subtitle.classList.add("subtitle");

        // let but = document.createElement("a");
        // but.innerText = "Contactar a equipa comercial";
        // but.classList.add("bigbutton", "bitbutton-animated");

        // desconto.append(plano, subtitle, but)

        return (
            <div className="slider_calculation">
                <div className="desconto">
                    {/* <div className="discount">{precoBase !== 12.00 ? `-${desconto}` : null}</div> */}
                    <div className="plano">O seu plano</div>
                    <div className="subtitle">
                        Contacte a equipa comercial para obter o seu plano detalhadamente
                    </div>

                    <a className="bigbutton bigbutton-animated">
                        Contactar a equipa comercial
                    </a>
                </div>
            </div>
        )


        

    }
}


const pricing_tiers =
    [
        {}, // ignorar 0 motoristas
        { precoBase: 12.00, total: 12.00, totalWithDiscount: 12.00, discount: "0%", difference: 0.00 },
        { precoBase: 12.00, total: 24.00, totalWithDiscount: 24.00, discount: " 0%", difference: 0.00 },
        { precoBase: 12.00, total: 36.00, totalWithDiscount: 36.00, discount: "0%", difference: 0.00 },
        { precoBase: 12.00, total: 48.00, totalWithDiscount: 48.00, discount: " 0%", difference: 0.00 },
        { precoBase: 12.00, total: 60.00, totalWithDiscount: 60.00, discount: " 0%", difference: 0.00 },
        { precoBase: 12.00, total: 72.00, totalWithDiscount: 72.00, discount: "0%", difference: 0.00 },
        { precoBase: 11.11, total: 84.00, totalWithDiscount: 77.78, discount: "8%", difference: 6.22 },
        { precoBase: 11.11, total: 96.00, totalWithDiscount: 88.89, discount: "8%", difference: 7.11 },
        { precoBase: 11.11, total: 108.00, totalWithDiscount: 100.00, discount: "8%", difference: 8.00 },
        { precoBase: 11.11, total: 120.00, totalWithDiscount: 111.11, discount: "8%", difference: 8.89 },
        { precoBase: 11.11, total: 132.00, totalWithDiscount: 122.22, discount: "8%", difference: 9.78 },
        { precoBase: 10.91, total: 144.00, totalWithDiscount: 130.91, discount: "10%", difference: 13.09 },
        { precoBase: 10.91, total: 156.00, totalWithDiscount: 141.82, discount: "10%", difference: 14.18 },
        { precoBase: 10.91, total: 168.00, totalWithDiscount: 152.73, discount: "10%", difference: 15.27 },
        { precoBase: 10.91, total: 180.00, totalWithDiscount: 163.64, discount: "10%", difference: 16.36 },
        { precoBase: 10.91, total: 192.00, totalWithDiscount: 174.55, discount: "10%", difference: 17.45 },
        { precoBase: 10.91, total: 204.00, totalWithDiscount: 185.45, discount: "10%", difference: 18.55 },
        { precoBase: 10.91, total: 216.00, totalWithDiscount: 196.36, discount: "10%", difference: 19.64 },
        { precoBase: 10.91, total: 228.00, totalWithDiscount: 207.27, discount: "10%", difference: 20.73 },
        { precoBase: 10.71, total: 240.00, totalWithDiscount: 214.29, discount: "12%", difference: 25.71 },
        { precoBase: 10.71, total: 252.00, totalWithDiscount: 225.00, discount: "12%", difference: 27.00 },
        { precoBase: 10.71, total: 264.00, totalWithDiscount: 235.71, discount: "12%", difference: 28.29 },
        { precoBase: 10.71, total: 276.00, totalWithDiscount: 246.43, discount: "12%", difference: 29.57 },
        { precoBase: 10.71, total: 288.00, totalWithDiscount: 257.14, discount: "12%", difference: 30.86 },
        { precoBase: 10.71, total: 300.00, totalWithDiscount: 267.86, discount: "12%", difference: 32.14 },
        { precoBase: 10.71, total: 312.00, totalWithDiscount: 278.57, discount: "12%", difference: 33.43 },
        { precoBase: 10.71, total: 324.00, totalWithDiscount: 289.29, discount: "12%", difference: 34.71 },
        { precoBase: 10.71, total: 336.00, totalWithDiscount: 300.00, discount: "12%", difference: 36.00 },
        { precoBase: 10.71, total: 348.00, totalWithDiscount: 310.71, discount: "12%", difference: 37.29 },
        { precoBase: 10.71, total: 360.00, totalWithDiscount: 321.43, discount: "12%", difference: 38.57 },
    ];