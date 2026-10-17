import "./HomeIconShow.css"
export const HomeIconShow = ({ imgsrc, style }) => {
    return (
        <div style={style} className="home_icon_card">
            <div>
                <img src={imgsrc} alt="HomeIcons" />
            </div>
        </div>
    )
}