import { Suspense } from "react";
import Category from "../components/category";
import Product from "../components/product";

const Streaming = () => {
  return (
    <div>
      <h1>
        Streaming
        <Suspense fallback={<div>Loading product.........</div>}>
          <Product />
        </Suspense>
        <Suspense fallback={<div>Loading category........</div>}>
          <Category />
        </Suspense>
      </h1>
    </div>
  );
};

export default Streaming;
