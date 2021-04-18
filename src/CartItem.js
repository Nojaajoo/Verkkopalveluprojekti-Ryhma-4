import React from 'react'



export default function CartItem({product, index, url, removeFromCart, changeAmount, updateAmount}) {
    return (
        <>
        

            <div key={product.tuotenro} className="row cartRow main align-items-center">
                <div className="col-2 cartCol"><img className="img-fluid cartImg" src={url + "img/" + product.kuva}></img></div>
                <div className="col cartCol">
                    <div className="row cartRow text-muted">{product.tuotenimi}</div>
                    <div className="row cartRow text-muted">{product.maku} {product.taytemaku}</div>
                    <div className="row cartRow text-muted">{product.hinta} €</div>
                </div>
                <div className="col cartCol">
                    <a onClick={e => updateAmount((Number(product.amount) - 1), product)} className="aCart" href="#">-</a>
                    <a style={{width: "35px"}} className="border aCart" onChange={e => changeAmount(e,product,index)}>{product.amount}</a>
                    <a onClick={e => updateAmount((Number(product.amount + 1)), product)} className="aCart" href="#">+</a>
                </div>
                <div className="col cartCol">{(parseFloat(product.hinta)*parseFloat(product.amount)).toFixed(2)} €&nbsp;&nbsp;<a href="#" onClick={() =>removeFromCart(product)}><span className="close">&#10005;</span></a></div>
            </div>

        
        </>
    )
}
