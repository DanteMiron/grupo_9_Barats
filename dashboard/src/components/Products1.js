import React, { useEffect, useState} from "react";


function Products1() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then(res => res.json())
            .then((data) => {
                setProducts(data.products)
            })
            .catch(error => { console.log(error) })
    }, []);

    console.log(products)





    return (
        <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-12 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Lista de productos</h6>
                </div>
                
                {products.map(product=>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-8 mb-4">
                            <div className="card bg-info text-white shadow">
                                <div className="card-body">
                                    {product.id}: {product.name}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}


export default Products1;