import useFetch from "../../hooks/useFetch";
import "./featured.css";
const Featured = () =>{

    const {data, loading, error, reFetch} = useFetch("/hotels/countByCity?cities=Roorkee,Berlin,London")
    console.log(data);
 return (
    <div className="featured">
        {
        loading ? "Loading please wait":
        <><div className="featuredItem">
         <img className="featuredImg" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb3BlcnR5fGVufDB8fDB8fHww" alt="Property 1" />

         <div className="featuredTitles">
        <h1>Roorkee</h1>
    <h2> {data[1]}Properties</h2>
</div>
</div>
<div className="featuredItem">
<img className="featuredImg" src="https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb3BlcnR5fGVufDB8fDB8fHww" alt="Property 2" />

<div className="featuredTitles">
        <h1>New York</h1>
    <h2>456 Properties</h2>
</div>
</div>
<div className="featuredItem">
<img className="featuredImg" src="https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb3BlcnR5fGVufDB8fDB8fHww" alt="Property 3" />
  
<div className="featuredTitles">
      <h1>London</h1>
    <h2>789 Properties</h2>
</div>



 </div> </>}
    </div> 
 );
};

export default Featured;