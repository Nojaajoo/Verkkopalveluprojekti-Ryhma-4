import React,{useEffect,useState} from 'react';

export default function Home({url,category}) {
    const [products, setProducts] = useState([]);
  
    useEffect(async() => {
      if (category !== null) {
      try {
        const response = await fetch(url + 'products/getproducts.php/' + category?.trnro);
        const json = await response.json();
        if (response.ok) {
          console.log(json)
          setProducts(json);
        } else {
          alert(json.error);
        }
      } catch (error) {
        alert(error);
      }
    }
    }, [category])
  

    return (
      <div>
        <h3>Products for {category?.trnimi}</h3>
        {products.map(product => (
          <div key={product.tuotenro}>
            <p>{product.tuotenimi}</p>
            </div>
        ))}
      </div>
    )
  
  }