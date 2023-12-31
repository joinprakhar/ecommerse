import { Link, useParams } from "react-router-dom";
import {Row, Col} from "react-bootstrap"
import Product from "../components/Product"
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";


const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error} = useGetProductsQuery({ keyword , pageNumber });


  return (
    <>
    {!keyword ? (<ProductCarousel/>) :<Link to='/' className="btn btn-light mb-4">Go Back</Link>}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message varient="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
        <Meta/>
          <h1 style={{color:"black"}}>Latest Products</h1>
          <Row>
            {data.products &&
              data.products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
          <br />
          <br />
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
}

export default HomeScreen