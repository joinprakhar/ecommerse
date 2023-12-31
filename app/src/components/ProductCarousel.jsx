import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-primary mb-4">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            {product.file === "/Images/sample.jpg" ? (
              <Image
                style={{ height: "180px" }}
                src={product.image}
                variant="top"
                fluid
              />
            ) : (
              <Image
                style={{ height: "180px" }}
                src={product.file}
                variant="top"
                fluid
              />
            )}
            
            <Carousel.Caption className="carousel-caption">
              <h2 className="text-white text-right">
                {product.name} (Rs. &nbsp;{product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
