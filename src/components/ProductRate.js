"use client";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export default function ProductRate({ rate, count }) {
  return (
    <div className="flex ">
      <Rating
        style={{ maxwidth: 400 }}
        value={rate}
        readOnly
        className="size-20 text-blue-700 font-extrabold"
      />
      <div className="size-4 items-center inline-block text-blue-700 font-bold">
        {count} reviews
      </div>
    </div>
  );
}
