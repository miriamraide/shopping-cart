import Link from "next/link";
import { useSelector } from "react-redux";

export default function Header() {
  const { loading, cartItems } = useSelector((state) => state.cart);

  return (
    <header>
      <nav className="flex justify-between items-center h-12 px-4 shadow-md bg-blue-700 text-white">
        <Link href="/" className="text-lg font-bold">
          Barkery Shopping cart
        </Link>
        <div>
          <span className="cart-badge">
            {loading ? " " : cartItems.reduce((a, c) => a + c.qty, 0)}
          </span>
          <Link href="/cart">Carrito de Compras</Link>
        </div>
      </nav>
    </header>
  );
}
