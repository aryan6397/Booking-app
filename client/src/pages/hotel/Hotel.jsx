import "./hotel.css";
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from  "../../components/mailList/MailList"
import Footer from  "../../components/footer/Footer"
const Hotel = () =>{

    const photos = [

        {
            src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        {
            src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        {
            src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        {
            src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        {
            src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]
    return (
        <div>
            <Navbar />
            <Header type = "list" />

            <div className="hotelContainer">
                <div className="slider"></div>
                <div className="hotelWrapper">
                    <div className="hotelTitle">
                        <button className="bookNow">Reserve or book now</button>
                        <h1 className="hotelTitle">Grand Hotel
                        </h1>
                        <div className="hotelAddress">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>Elton St 125 New york</span>
                        </div>
                        <div className="both">
                        <span className="hotelDistance">
                            Excellent location 500m from center
                        </span>

                        <span className="hotelPriceHighLight">
                            Book a stay over $114 at this property and get a free airport taxi
                        </span>
                        </div>
                       

                        <div className="hotelImages">
                            {photos.map(photo=>(
                                <div className="hotelImgWrapper">
                                   <img src={photo.src} alt="" className="hotelImg" />
                                </div>
                            ))}
                        </div>
                   

                        <div className="hotelDetails">
                            <div className="hotelDetailsText">
                                <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                                  <p className="hotelDesc">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ab pariatur alias! Blanditiis fuga, iure quo vitae aliquid eveniet unde ad iste dolorum culpa ullam corporis? Quibusdam aperiam maxime deleniti quasi beatae cum quos ab id nisi. Nulla ducimus quibusdam laboriosam unde dignissimos numquam et vero blanditiis! Similique saepe ab blanditiis quibusdam maxime labore eius ullam sit, voluptas nisi est?
                                  </p>
                            </div>

                            <div className="hotelDetailPrice">
                                <h1>Perfect for 9 night stay</h1>
                                <span>
                                    Located in the real heart of Krakow, this property has an 
                                    Excellent location score of 9.8!
                                </span>

                                <h2>
                                    <b>$945</b> (9 nights)
                                </h2>

                                <button>Reserve or book now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <MailList />
        <Footer />
            </div>
        
        </div>
        
    )

    
}
export default Hotel;