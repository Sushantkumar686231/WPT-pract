import React from 'react'

class AddItem extends React.Component {
   constructor(props){
        super(props);
        this.state={
            productName:"",
            productPrice:0
        };
       
   }
    render() { 
        return(
            <form className='row mt-5' onSubmit={(e)=>{
                e.preventDefault();
                this.props.addItem(this.state.productName,Number(this.state.productPrice))

            }}>
                <div className="col-3 mb-3">
                    <label htmlFor="inputname" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="inputname" aria-describedby="name" name='productName'
                    onChange={(e)=>{
                        this.setState({productName:e.currentTarget.value})
                    }}
                    value={this.state.productName}/>
                   
                </div>
                <div className=" col-3 mb-3">
                    <label htmlFor="inputtprice" className="form-label">Price</label>
                    <input type="Number" className="form-control" id="inputtprice" name='productPrice'
                    onChange={(e)=>{
                        this.setState({productPrice:e.currentTarget.value})
                    }}
                    value={this.state.productPrice}/>
                </div>
                
                <button type="submit" className="btn btn-primary col-2" >ADD</button>
            </form>
        )
    }
}
 
export default AddItem;