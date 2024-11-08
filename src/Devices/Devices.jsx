import { useState } from "react";
import imgsrc from "../../old/public/assets/computer.gif";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import url from "../assets/rotating.gif"

export default function Devices() {
    const [active, setActive] = useState(0);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "mydots slick-dots",
        beforeChange: (_old, new_idx)  => {
            setActive(new_idx)
            console.log(`new index ${new_idx}`)
        }
    }
    return (
        <div style={{
            maxWidth: "300px",
        }} >
            <Slider {...settings}>
                <Device title="Tablet" />
                <Device title="Desktop" />
                <Device title="Phone" />
            </Slider>
            <div class="dots" style={{
                display: "flex",
                gap: "10px",
                // gridTemplateRows: "1fr",
                // gridTemplateColumns: "1fr 1fr 1fr",
                // alignItems: "center",
                justifyContent: "center"
            }}>
                {[0, 1, 2].map(i => <div style={{border: "2px solid #DA2077",width: "10px", height: "10px", borderRadius: "100%" , backgroundColor: i == active ? "#DA2077" : "white" }}></div>)}
            </div>
        </div >
    );
}


function Device({ title }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            
            <img src={url} />
            <p style={{
                fontSize: "2em"
            }}>{title}</p>
        </div>
    )

}
// export default function Devices() {
//     const devices = [
//         { description: "Phone", color: "red" },
//         { description: "Ipad", color: "green" },
//         { description: "Desktop", color: "blue" },
//         { description: "Phone", color: "red" },
//         { description: "Ipad", color: "green" },
//     ]; 

//     const containerRef = useRef(null);

//     let [active, setActive] = useState(0);
//     return (
//         <div className="devices" onClick={_=> console.log(containerRef.current.getBoundingClientRect())}>
//             {devices.map(({ description }, i) =>
//                 <div ref={containerRef} key={i} style={{
//                     transform: `translateX(${generateTranslate(containerRef.current.getBoundingClientRect(), i, active)})`
//                 }}>
//                     <img src={imgsrc} alt="an infinite recursive computer" />
//                     <p>{description}</p>
//                 </div>
//             )}
//         </div>
//     )
// }

// function generateTranslate(rect, idx, active) {
//     let container_width = rect.right - rect.left;
//     if (!idx || !active) {
//         console.log("I just called")
//         return 0
//     }
//     console.log("to say")
//     return container_width - 50%

// }