
export default function Item({ src, title, children:text }) {
    let pageLocation = `./public/assets/${src}`;
    return (
        <div className="actionitem">
            <img src={pageLocation} alt={src}/>
            <div className="actioniteminfo">
                <div className="itemtitle">{title}</div>
                <div className="itemtext">{text}</div>
            </div>
        </div>
    )
}