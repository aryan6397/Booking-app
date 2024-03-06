import "./searchItem.css"
const SearchItem = () =>{
    return (
        <div className="searchItem">
<img src="https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb3BlcnR5fGVufDB8fDB8fHww" alt="" 
               
               
               className="siImg" />

               <div className="sDesc">
                  <h1 className="siTitle">Tower Street Apartment</h1>
                  <span className="siDistance">500m from center</span>
                  <span className="siTaxiOp">Free airport taxi</span>
                  <span className="siSubtitle">Studio apartment with air conditioning</span>
                  <span className="siFeatures">Entire studio + 1 bathroom + 21m 1 full bed</span>
                  <span className="siCancelOp">Free Cancellation</span>
                  <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>

               </div>

               <div className="sDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailText">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Include taxes and fees</span>
                    <button className="siCheckButton">See availablity</button>
                </div>
               </div>
        </div>
    )
}

export default SearchItem;