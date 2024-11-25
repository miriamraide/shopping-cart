"use client";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { addToCart } from "@/redux/slices/cartSlice";

export default function AddToCart({
  product,
  showQty = true,
  redirect = false,
  increasePerClick = false,
}) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const router = useRouter();
  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    let newQty = qty;
    if (increasePerClick) {
      const existItem = cartItems.find((x) => x.id === product.id);
      if (existItem) {
        if (existItem.qty + 1 <= product.countInStock) {
          newQty = existItem.qty + 1;
        } else {
          return alert("No hay stock");
        }
      }
    }
    dispatch(addToCart({ ...product, qty: newQty }));

    if (redirect) router.push("/cart");
  };

  return (
    <>
      {product.countInStock > 0 && showQty && (
        <div className="mb-2 flex justify-between">
          <div>Cantidad</div>
          <div>
            <select
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <div>
        {product.countInStock ? (
          <button className="primary-button w-full" onClick={addToCartHandler}>
            Agregar al carrito
          </button>
        ) : (
          <button disabled>No hay stock</button>
        )}
      </div>
    </>
  );
}
