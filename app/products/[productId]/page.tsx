import type { Metadata } from "next";
type Props = {
  params: Promise<{ productId: string }>;
};

//Dynamic Metadata
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetails = async ({ params }: Props) => {
  const productId = (await params).productId;
  return (
    <div>
      <h1>Details of the product - {productId}</h1>
    </div>
  );
};

export default ProductDetails;
