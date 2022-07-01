import { useState, useEffect, useCallback } from "react";

// When we are creating our own custom hooks we need to use the "use" keyword. we can only use hooks inside a component or custom hooks.
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]); // if we add getProducts as a dependency without useCallback, then we will trigger an infinite loop as it will call setProduct and it will trigger re-render. again useEffect and so on. the getProduct function will be created every time. only if it shows error/warning then do this.After using callback it will only be recreated when url changes.
  return { loading, products };
};
