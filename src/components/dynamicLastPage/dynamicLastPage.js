import React, {useState} from "react";
import { useParams, withRouter } from "react-router";



const DynamicLastPage = (props)=>{
    const params = useParams();
    const [products, setProducts] = useState({});
	console.log(params);
    return(
        <>
<p style={{marginTop: "300px"}}>lllllllllllllllllllllllllllllll</p>
        </>
    )
}
export default DynamicLastPage;