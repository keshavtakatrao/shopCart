import React from 'react'

function Card(props) {
    return (
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <a href="#">{props.data.itemName}</a>
                    </h4>
                    <h5>${props.data.price}</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div class="card-footer">
                   
                    {props.data.isDisabled==false? <button class='btn btn-primary' onClick={() => props.btnClick(props.data) } >Add to Cart</button> :  <button class='btn btn-primary' onClick={() => props.btnClick(props.data) } disabled >Add to Cart</button> }
                </div>
            </div>
        </div>
    )
}

export default Card;