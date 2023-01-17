const Order = require("../model/orderModel");
exports.addOrderItems = async (req, res) => {
  const bodyData = req.body;
  const orderInfo = bodyData.order;
  const user = bodyData.user;

  const {
    orderItems,
    shippingAddress,
    paymentInfo,
    itemsPrice,
    taxPrice,
    paidAt,
    isPaid,
    totalPrice,
  } = orderInfo;
  const shippingPrice = 0;
  const paymentMethod = "card";

  if (!orderItems || orderItems.length == 0) {
    res.status(400);
    res.send("error");
  } else {
    const order = new Order({
      orderItems: orderItems.map((item) => {
        name = item.name;
        price = item.price;
        quantity = item.qty;
        image = item.image;
        return { name, price, quantity, image };
      }),
      user: {
        id: user._id,
        username: user.username,
      },
      shippingInfo: {
        address: shippingAddress.Address,
        city: shippingAddress.city,
        postalCode: shippingAddress.postalcode,
        state: shippingAddress.state,
      },
      paymentInfo: {
        id: paymentInfo.id,
        status: paymentInfo.status,
      },
      isPaid: true,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now(),
    });
    try {
      const createdOrder = await order.save();
      res.status(200).send(createdOrder);
    } catch (error) {
      res.send("Can not save order");
    }
  }
};
exports.getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
};

exports.updateOrderToPaid = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentInfo = {
      id: req.body.id,
      status: req.body.status,
    };

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
};

exports.getMyOrders = async (req, res) => {
  const user = req.body;

  const orders = await Order.find({
    user: { id: user._id, username: user.username },
  });

  res.json(orders);
};
