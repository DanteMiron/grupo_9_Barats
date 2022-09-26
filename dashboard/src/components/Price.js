import React, {useState, useEffect} from "react";

function Price() {
	const [price, setPrice] = useState([]);

   useEffect(()=>{
     fetch('http://localhost:3001/api/products')
            .then(res=>res.json())
            .then((data)=>{
			setPrice(data.priceTotal)
        })
        .catch(error=>{console.log(error)})
   },[]);
    return (
        <div className="col-md-4 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1">Capital acumulado en productos</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">${price}</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
			</div>
    )
}


export default Price;