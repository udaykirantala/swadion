import "./HomeIconShow.css"
export const HomeIconShow = ({ imgsrc, style,imgwidth}) => {
    return (
        <div style={style} className="home_icon_card">
            <div>
                <img src={imgsrc} alt="HomeIcons" width={imgwidth}/>
            </div>
        </div>
    )
}