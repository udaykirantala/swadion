import "./HomeIconShow.css"
export const HomeIconShow = ({ imgsrc, style }) => {
    return (
        <div style={style} className="home_floting_icons">
            <div>
                <img src={imgsrc} alt="HomeIcons" />
            </div>
        </div>
    )
}