import React,  {useState, useEffect}  from "react";


function Categorys() {
	const [products, setProducts] = useState([]);

   useEffect(()=>{
     fetch('http://localhost:3001/api/products')
            .then(res=>res.json())
            .then((data)=>{
            setProducts(data.countByCategory)
        })
        .catch(error=>{console.log(error)})
   },[]);
	
	
	
	
	
	
	return (
        <div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Categorías en la base de datos</h6>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												<div className="card-body">
													Hombre: {products.hombres}
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												<div className="card-body">
													Mujer: {products.mujer}
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												<div className="card-body">
													Niño: {products.niño}
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												<div className="card-body">
													Accesorio: {products.accesorio}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
    )
}


export default Categorys;