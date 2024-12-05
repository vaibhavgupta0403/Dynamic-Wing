import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext.jsx";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const {
    navigate,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
    whatsappNumber,
  } = useContext(ShopContext);

  const sendOrder = (orderData) => {
    const message = `
      New Order:
      Address:${orderData.address}
      Items: ${orderData.items.map((item) => `${item.name} (x${item.quantity})`).join(", ")}
      Total Amount:${orderData.amount}`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
    setCartItems({});
    navigate("/");
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );

            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };
      sendOrder(orderData);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const [formData, setFormData] = useState({
    fullname: "",
    address: "",
    email: "",
    city: "",
    state: "",
    pincode: "",
    contact: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 w-50 "
    >
      <div className="flex flex-col gap-4 w-50">
        <div className="text-xl my-3">
          <Title text1={"Delivery "} text2={"Details"} />
        </div>

        <div className="flex gap-4">
          <input
            required
            onChange={onChangeHandler}
            name="fullname"
            value={formData.fullname}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Name"
          />
          <input
            required
            onChange={onChangeHandler}
            name="address"
            value={formData.address}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Address"
          />
        </div>

        <div className="flex gap-4">
          <input
            required
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex gap-4">
            <input
              required
              onChange={onChangeHandler}
              name="city"
              value={formData.city}
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="City"
            />
          </div>
          <input
            required
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex gap-4">
            <input
              required
              onChange={onChangeHandler}
              name="pincode"
              value={formData.pincode}
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="number"
              placeholder="PinCode"
            />
          </div>
          <input
            required
            onChange={onChangeHandler}
            name="contact"
            value={formData.contact}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Contact"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 w-50">
        <CartTotal />
        <button
          type="submit"
          // onClick={handleShareClick}
          className="bg-yellow-800 text-white text-sm my-8 px-8 py-4"
        >
          {/* <a aria-label="Chat on WhatsApp" href="https://wa.me/1XXXXXXXXXX"> <a /> */}
          PLACE ORDER
        </button>
        <p className="text-gray-700">
          * Your order will be forwarded to the seller through WhatsApp.
        </p>
      </div>
    </form>
  );
};

export default PlaceOrder;
