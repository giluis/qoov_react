import { useState } from "react";
import "../old/public/styles/build/carroussel.css"
export default function Carousel() {
    const opinions = [
        {
            title: "Empresa XPTO 1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu. Consequat semper viverra nam libero justo laoreet sit amet cursus..",
            author_name: "Francisco Martins",
            author_role: "Diretor Geral"
        },
        {
            title: "Empresa XPTO 2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu. Consequat semper viverra nam libero justo laoreet sit amet cursus..",
            author_name: "Gonçalo Martins",
            author_role: "CEO"
        },
        {
            title: "Empresa XPTO 3",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu. Consequat semper viverra nam libero justo laoreet sit amet cursus..",
            author_name: "Bernardo Martins",
            author_role: "CFO"
        },
        {
            title: "Empresa XPTO 4",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu. Consequat semper viverra nam libero justo laoreet sit amet cursus..",
            author_name: "Pedro Martins",
            author_role: "CTO"
        },
    ];
    let [firstShown, setFirstShown] = useState(0);
    console.log(firstShown)

    let carousel_items = [];
    for (let i = firstShown; i < firstShown + 3; i += 1) {
        carousel_items.push(<CarouselItem key={i % opinions.length} {...opinions[i % opinions.length]} dataidx={i % opinions.length} datapos={i - firstShown - 1} />)
    }

    return (
        <div className="carousel" style={{ border: "1px solid black" }} onClick={event => {
            let boundingrect = event.target.getBoundingClientRect();
            const rect_len = Math.abs(boundingrect.right - boundingrect.left);
            if (event.clientX < rect_len * 0.30) {
                setFirstShown(loopAroundIndex(firstShown + 1, opinions.length))
            } else if (event.clientX > rect_len * 0.70) {
                setFirstShown(loopAroundIndex(firstShown - 1, opinions.length))
            } else {
                // do nothing
            }
        }}>
            <ul className="opinions carousel__list" style={{ border: "1px solid black" }} data-offset="0">
                {carousel_items}
            </ul>
        </div>
    )
}

function CarouselItem({ title, text, profile_pic, author_name, author_role, datapos, dataidx }) {
    return (
        <li className="opinion carousel__item" data-pos={datapos} data-idx={dataidx}>
            <h1 className="opiniontitle">{title}</h1>
            <p className="opiniontext">{text}</p>
            <div className="opinionauthor">
                <ProfilePic url={profile_pic} author_name={author_name} />
                <div className="author_container">
                    <div className="author_name">{author_name}</div>
                    <div className="author_role">{author_role}</div>
                </div>
            </div>
        </li>
    )
}

function ProfilePic({ url, author_name }) {
    if (url) {
        return <img src={url} />
    } else {
        let placeholder = author_name.split(' ').map(w => w.charAt(0).toUpperCase()).join("")
        return <div className="profile_pic">{placeholder}</div>
    }

}

function loopAroundIndex(idx, arrayLength) {
    return (idx + arrayLength) % arrayLength;
}