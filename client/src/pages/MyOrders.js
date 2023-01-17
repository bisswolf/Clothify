import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import { listMyOrders } from "../redux/actions/orderActions";
import { Typography, Table } from "antd";
import moment from "moment";

const { Title } = Typography;
const MyOrders = () => {
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderListMyReducer);
  const orders = orderDetails.orders;
  const loading = orderDetails.loading;

  useEffect(() => {
    dispatch(listMyOrders());
  }, [dispatch]);

  const columns = [
    {
      title: "Order Id",
      dataIndex: "OrderId",
      key: "OrderId",
      width: 300,
    },
    {
      title: "OrderDate",
      dataIndex: "OrderDate",
      key: "OrderDate",
      width: 200,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
    {
      title: "Payment status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
    },
  ];
  const data = !orders
    ? ""
    : orders.map((item) => {
        let key = item._id;
        let OrderId = item._id;
        let dt = moment(item.paidAt).format("Do MMM YY");
        let OrderDate = dt;
        let totalAmount = item.totalPrice;
        let paymentStatus = item.paymentInfo.status;
        let address =
          item.shippingInfo.address +
          " " +
          item.shippingInfo.state +
          " " +
          item.shippingInfo.city +
          " " +
          item.shippingInfo.postalCode;

        return { key, OrderId, OrderDate, totalAmount, paymentStatus, address };
      });
  if (orders == 0) {
    console.log("hi");
  }
  console.log(data);

  return (
    <div>
      <Navigation />
      <Title>MyOrders</Title>
      <div>
        <Table
          className="table-styles"
          columns={columns}
          dataSource={data}
          pagination={false}
          size="middle"
        />
        ;
      </div>
    </div>
  );
};

export default MyOrders;
