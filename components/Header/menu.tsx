"use client";

import useCartService from "@/lib/hooks/useCartStore";
import Link from "next/link";
import { useEffect, useState } from "react";

const Menu = () => {
  const { items } = useCartService();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <ul className="flex items-stretch">
        <li>
          <Link
            className="btn btn-ghost roundd-btn bg-slate-600"
            href="/cart-items"
          >
            Cart
            {mounted && items.length != 0 && (
              <div className="badge badge-secondary">
                {items.reduce((a, c) => a + c.qty, 0)}
              </div>
            )}
          </Link>
        </li>
        <button className="btn btn-ghost roundd-btn bg-slate-600" type="button">
          Sign in
        </button>
      </ul>
    </div>
  );
};

export default Menu;
