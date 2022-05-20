import path from "path";
import fs from "fs/promises";

export default function ProductDetailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) return <p>Loading...</p>;

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  return JSON.parse(jsonData);
}

export async function getStaticProps(context) {
  const { params } = context;
  const product_id = params.product_id;
  const data = await getData();
  const product = data.products.find((product) => product.id === product_id);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const productPaths = ids.map((id) => ({ params: { product_id: id } }));

  return {
    paths: productPaths,
    fallback: true,
  };
}
