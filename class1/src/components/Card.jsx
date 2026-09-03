import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="card-group">
                <div className="card">
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
