import React,{useEffect,useState} from 'react';

export default function Home({url,category}) {
    const [products, setProducts] = useState([]);
  
    useEffect(async() => {
      try {
        alert(category?.id)
        const response = await fetch(url + 'products/getproducts.php' + category?.id);
        const json = await response.json();
        if (response.ok) {
          setProducts(json);
        } else {
          alert(json.error);
        }
      } catch (error) {
        alert(error);
      }
    }, [category])
  
    return (
      <div>
        <h3>Products for {category?.name}</h3>
        {products.map(product => (
          <div key={product.id}>
            <p>{product.name}</p>
            </div>
        ))}
      </div>
    )
  
  }