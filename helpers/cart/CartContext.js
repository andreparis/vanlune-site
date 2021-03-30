import React, { useState, useEffect } from 'react';
import Context from './index';
import { toast } from 'react-toastify'

const getLocalCartItems = () => {
  try {
    const list = localStorage.getItem('cartList');
    if (list === null) {
      return [];
    } else {
      return JSON.parse(list)
    }
  } catch (err) {
    return [];
  }
};

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(getLocalCartItems())
  const [cartTotal, setCartTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState('InStock');

  useEffect(() => {
    const Total = cartItems.reduce((a, b) => +a + +b.total, 0)
    setCartTotal(Total);

    localStorage.setItem('cartList', JSON.stringify(cartItems))
  }, [cartItems])

  // Add Product To Cart
  const addToCart = (item ,quantity, customize = [], variant = {}) => {
    toast.success("Product Added Successfully !");
    let cartProduct = Object.assign({}, item);
    const index = cartItems.findIndex(itm => itm.id === cartProduct.id);
    cartProduct['customizes'] = customize;
    cartProduct['variants'] = [variant];
    
    if (index !== -1) {
      const product = cartItems[index];
      cartItems[index] = { ...cartProduct, ...cartProduct, 
        qty: quantity, 
        total: getProductTotal(cartProduct, quantity)
      };
      setCartItems([...cartItems])
    } 
    else {
      const product = { ...cartProduct, qty: quantity, 
        total: getProductTotal(cartProduct, quantity)
      }
      setCartItems([...cartItems, product])
    }
  }

  const getProductTotal = (product, qtdy = 1) => {
    var total = (product.price - (product.price * product.discount / 100)) * qtdy;
    if (product['variants'][0]['factor'])
      total *= product['variants'][0]['factor'];
    if (product['customizes'] && product['customizes'].length > 0) {
      for (var i = 0; i < product['customizes'].length; i ++) {
        let customize = product['customizes'][i]['value'][0];
        total *= customize['factor'];
      }
    }
    return total.toFixed(2);
  }

  const removeFromCart = (item) => {
    toast.error("Product Removed Successfully !");
    setCartItems(cartItems.filter((e) => (e.id !== item.id)))
  }

  const minusQty = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1);
        setStock('InStock')
    }
}

  const plusQty = () => {
    setQuantity(quantity + 1);
  }

   // Update Product Quantity
   const updateQty = (item, quantity) => {
    if(quantity >= 1 ){
      const index = cartItems.findIndex(itm => itm.id === item.id)
      if(index !== -1){
        const product = cartItems[index];
        cartItems[index] = { ...product, ...item, qty: quantity, total: getProductTotal(item, quantity)  }; 

        setCartItems([...cartItems])
        toast.info("Product Quantity Updated !");
      }else{
        const product = {...item, qty: quantity, total: getProductTotal(item, quantity) }
        setCartItems([...cartItems, product])
        toast.success("Product Added Updated !");
      }
    }else{
      toast.error("Enter Valid Quantity !");
    }
  }

  const { value } = props;
  return (
    <Context.Provider
      value={{
        ...props,
        state: cartItems, cartTotal,setQuantity ,quantity,stock,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        plusQty: plusQty,
        minusQty:minusQty,
        updateQty:updateQty
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default CartProvider;
