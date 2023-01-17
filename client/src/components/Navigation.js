import { Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navigation = () => {
  const isLoggenIn = JSON.parse(localStorage.getItem("user"));
  function logout() {
    localStorage.removeItem("user");
    window.location.href = "/";
  }
  const cartItems = localStorage.getItem("cartItems");
  const cart = !cartItems ? [] : JSON.parse(cartItems);

  return (
    <Navbar appearance="inverse">
      <Navbar.Brand href="#">Clothify</Navbar.Brand>
      <Nav>
        <Nav.Item href="/" icon={<HomeIcon />}>
          Home
        </Nav.Item>
        {/* <Nav.Item>News</Nav.Item>
      <Nav.Item>Products</Nav.Item> */}
      </Nav>
      <Nav pullRight>
        {isLoggenIn ? (
          <>
            <Nav.Item href="/myorders">{isLoggenIn.username}</Nav.Item>
            <Nav.Item onClick={logout}>Logout</Nav.Item>
            <Nav.Item
              href="/cart"
              icon={<AiOutlineShoppingCart size="1.5em" color="pink" />}
            >
              {" "}
              <p className="total-items">{cart.length}</p>
            </Nav.Item>
            <Nav.Item></Nav.Item>
          </>
        ) : (
          <>
            <Nav.Item href="/login">Login</Nav.Item>
            <Nav.Item href="/register">Signup</Nav.Item>
            <Nav.Item
              href="/cart"
              icon={<AiOutlineShoppingCart size="1.5em" color="pink" />}
            >
              {" "}
              <p className="total-items">{cart.length}</p>
            </Nav.Item>

            <Nav.Item></Nav.Item>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
