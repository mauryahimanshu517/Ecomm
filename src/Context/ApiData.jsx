import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const savedProduct = localStorage.getItem("Product");
    return savedProduct ? JSON.parse(savedProduct) : null;
  });

  const [reviewsByProduct, setReviewsByProduct] = useState(() => {
    const stored = localStorage.getItem("productReviews");
    return stored ? JSON.parse(stored) : {};
  });
  const [text, setText] = useState("");

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    { console.log("savedcart", savedCart) }
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("Product", JSON.stringify(data));
  }, [cart]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=150');
        const result = await response.json();
        const updatedProducts = result.map(product => ({
          ...product,
          quantity: 1
        }));
        setData(updatedProducts);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
   setCart((prev)=>{
    const data=prev.some((items)=> items.id === product.id)
    console.log(data)
    if(data){
      console.log(data,prev)
      return prev
    }
    else{
      console.log(data)
      return [...prev,product]
    }
   })
  };

  const DeleteProduct = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const Increment = (product) => {
    setCart(preCart => preCart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ))
  };

  const Decrement = (product) => {
    setCart(preCart => preCart.map(item =>
      item.id === product.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ))
  }

  const handleSend = (productId) => {
    if (!text.trim()) return;

    setReviewsByProduct(prev => {
      const updated = {
        ...prev,
        [productId]: [...(prev[productId] || []), text]
      };

      localStorage.setItem("productReviews", JSON.stringify(updated));
      return updated;
    });

    setText("");
  };


  return (
    <DataContext.Provider value={{
      data,
      reviewsByProduct,
      handleSend,
      setText,
      text,
      addToCart,
      cart,
      setCart,
      DeleteProduct,
      Increment,
      Decrement
    }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
