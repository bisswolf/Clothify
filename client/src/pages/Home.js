import { Carousel, Row, Col, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllClothes } from "../redux/actions/productActions";
import Navigation from "../components/Navigation";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
// import img1 from "../images/background1.jpg";
// import img2 from "../images/background2.jpg";
// import img3 from "../images/background3.jpg";
// import img4 from "../images/background4.jpg";
const contentStyle1 = {
  height: "11em",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundImage: "url('/images/background1.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const contentStyle2 = {
  height: "11em",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundImage: "url('/images/background2.jpg')",
};
const contentStyle3 = {
  height: "11em",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundImage: "url('/images/background3.jpg')",
  backgroundRepeat: "no-repeat",
};
const contentStyle4 = {
  height: "11em",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundImage: "url('/images/background4.jpg')",
  // backgroundSize: "contain",
  // backgroundRepeat: "no-repeat",
};
function Home() {
  const { clothes } = useSelector((state) => state.clothesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllClothes());
  }, []);

  return (
    <div>
      <Navigation />
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle1} />
        </div>
        <div>
          <h3 style={contentStyle2} />
        </div>
        <div>
          <h3 style={contentStyle3} />
        </div>
        <div>
          <h3 style={contentStyle4} />
        </div>
      </Carousel>
      <br />
      <br />
      <Row>
        {clothes ? (
          clothes.products.map((product) => {
            return (
              <Col span={3} key={product._id}>
                <div>
                  <Link to={`/productinfo/${product._id}`}>
                    <Image
                      height={200}
                      width={150}
                      preview={false}
                      src={product.img[0].url}
                    />

                    <h5>{product.name}</h5>
                  </Link>
                </div>
              </Col>
            );
          })
        ) : (
          <div />
        )}
      </Row>
    </div>
  );
}

export default Home;
