import React, {useState, useEffect} from "react";

function LastProduct() {
    const [lastProduct, setLastProduct] = useState([]);


   useEffect(()=>{
     fetch('http://localhost:3001/api/products')
            .then(res=>res.json())
            .then((data)=>{
            setLastProduct(data.products[(data.count)-1])
        })
        .catch(error=>{console.log(error)});
   },[]);

   useEffect(()=>{
    document.getElementById('imgLastProduct').src=`http://localhost:3001/productImg/${lastProduct.image}`;
    document.querySelector('#linkProduct').href = `http://localhost:3001/products/${lastProduct.id}`
   }, [lastProduct])
   
   return (
        <div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Último prodcuto en base de datos</h6>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img id="imgLastProduct" className="img-fluid px-3 px-sm-4 mt-3 mb-4" alt="" />
									</div>
									<p>{lastProduct.description}</p>
									<a target="_blank" rel="nofollow" id="linkProduct">http://localhost:3001/products/{lastProduct.id}</a>
								</div>
							</div>
		</div>
        
    )

    

}


export default LastProduct;