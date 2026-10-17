import "./Home.css";
import { HomeDis } from "../../components/homeDis/HomeDis";
import { HomeIconShow } from "../../components/homeIconShow/HomeIconShow";
import leaf from "../../assets/leaf.png";
import coffee from "../../assets/coffee.png";
import icecream from "../../assets/icecream.png";
import meat from "../../assets/meat.png";
import seed from "../../assets/seed.png";
import { BrowseByCategory } from "../../components/browseByCategory/BrowseByCategory";
import { BrowseByCountry } from "../../components/browseByCountry/BrowseByCountry";


export const Home = () => {
    return (
        <div className="home_page">
            <div className="home_page_continer">
                <div className="home_content">
                    <HomeDis />
                </div>

                <div className="home_floting_icons">
                    <HomeIconShow
                        imgsrc={leaf}
                        style={{
                            backgroundColor: "var(--ramp-leaf-bg)",
                            borderRadius: "26px",
                            border: "1px solid var(--ramp-leaf-border)",
                            position: "absolute",
                            width: "180px",
                            height: "140px",
                            top: "110px",
                            left: "20px",
                            zIndex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    />
                    <HomeIconShow
                        imgsrc={meat}
                        style={{
                            backgroundColor: "var(--ramp-meat-bg)",
                            borderRadius: "26px",
                            border: "1px solid var(--ramp-meat-border)",
                            position: "absolute",
                            width: "150px",
                            height: "100px",
                            top: "90px",
                            left: "230px",
                            zIndex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    />
                    <HomeIconShow
                        imgsrc={seed}
                        style={{
                            backgroundColor: "var(--ramp-seed-bg)",
                            borderRadius: "26px",
                            border: "1px solid var(--ramp-seed-border)",
                            position: "absolute",
                            width: "220px",
                            height: "140px",
                            top: "200px",
                            left: "270px",
                            zIndex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    />
                    <HomeIconShow
                        imgsrc={coffee}
                        style={{
                            backgroundColor: "var(--ramp-coffee-bg)",
                            borderRadius: "26px",
                            border: "1px solid var(--ramp-coffee-border)",
                            position: "absolute",
                            width: "180px",
                            height: "100px",
                            top: "327px",
                            left: "70px",
                            zIndex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    />
                    <HomeIconShow
                        imgsrc={icecream}
                        style={{
                            backgroundColor: "var(--ramp-ice-bg)",
                            borderRadius: "26px",
                            border: "1px solid var(--ramp-ice-border)",
                            position: "absolute",
                            width: "140px",
                            height: "90px",
                            top: "235px",
                            left: "0px",
                            zIndex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    />
                </div>
            </div>
            <div>
                <BrowseByCategory/>
            </div>
            <div>
                <BrowseByCountry/>
            </div>
        </div>
    );
};