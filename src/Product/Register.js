import {useForm} from 'react-hook-form'
import axios from 'axios'


const Register = () => {
    const {register, handleSubmit, reset,} = useForm()
    function saveData(data){
        const response = axios.post('http://localhost:8000/v1/product/', data)
        reset();
        alert('PRODUCT ADDED IN DATABASE !!')
        
    }
    return (
        <>
            <br/>
            <h2 className='h2'>PRODUCT ADDITION FORM</h2>
            <br/>
            <form className="form row g-3 w-50 mx-auto border border-success bg-dark rounded" 
            onSubmit={handleSubmit(saveData)}>
                <div className="col-md-6">
                    <label htmlFor="product_name" className="form-label text-warning">Product Name</label>
                    <input type="text" className="form-control" id="product_name" placeholder="PRODUCT NAME" {...register('product_name')}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="product_cost_per_quantity" className="form-label text-warning">PROUCT COST PER QTY</label>
                    <input type="text" className="form-control" id="product_cost_per_quantity"placeholder="PROUCT COST PER QTY" {...register('product_cost_per_quantity')}/>
                </div>
                <div className="col-6">
                    <label htmlFor="product_cost_with_gst" className="form-label text-warning">PRODUCT COST WITH GST</label>
                    <input type="text" className="form-control" id="ProductCost" placeholder="PRODUCT COST WITH GST" {...register('product_cost_with_gst')}/>
                </div>
                <div className="col-6">
                    <label htmlFor="product_category" className="form-label text-warning">PRODUCT CATEGORY</label>
                    <input type="text" className="form-control" id="productcategory" placeholder="PRODUCT CATEGORY" {...register('product_category')}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="product_offers" className="form-label text-warning">PRODUCT OFFERS</label>
                    <input type="text" className="form-control" id="product offers" placeholder="PRODUCT OFFERS" {...register('product_offers')}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="product_category" className="form-label text-warning">PRODUCT QUANTITY</label>
                    <input type="text" className="form-control" id="Product Quantity" placeholder="PRODUCT QUANTITY" {...register('product_quantity')}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="product_total_cost" className="form-label text-warning">PRODUCT TOTAL COST</label>
                    <input type="text" className="form-control" id="Product Total Cost" placeholder="PRODUCT TOTAL COST" {...register('product_total_cost')}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="product_gst" className="form-label text-warning">PRODUCT GST</label>
                    <input type="text" className="form-control" id="Product GST" placeholder="PRODUCT GST" {...register('product_gst')}/>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-warning w-100 mt-2 mb-3" >ADD PRODUCT</button>
                    <br/>
                
                </div>
            </form>
        </>
    )
};

export default Register