import React, { useState } from "react";
import Card from "../UI/Card";
import axios from "axios";
import toast from "react-hot-toast";
import { RiLoader3Line } from "react-icons/ri";
const Contact = () => {
  //hook assignment
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [loader, setLoader] = useState(false);

  // When user send a message by submiting the contact form

  const sendMessageHandeler = async (e) => {
    setLoader(true);
    e.preventDefault();

    const submitedData = {
      name,
      email,
      number,
      subject,
    };

    try {
      const { data } = await axios.post(
        "https://admin-maharastra-default-rtdb.asia-southeast1.firebasedatabase.app/Messages.json",
        submitedData
      );
      toast.success("Message Sent !");
      setLoader(false);
    } catch (error) {
      toast.error("An unexpected error !");
      setLoader(false);
    }

    setEmail("");
    setName("");
    setNumber("");
    setSubject("");
  };

  return (
    <Card>
      <h1 className=" border-l-8 border-yellow-300 p-2  text-3xl" id="contact">
        Contact Us
      </h1>
      <div className=" flex flex-col  min-[650px]:flex-row gap-8">
        {/* FOR IMAGE  */}

        <div className=" w-[90%] min-[650px]:w-[45%] mt-5 relative">
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1701058610~exp=1701059210~hmac=08e1106a44e98d2f6fbc3f6ec6b3608517e49ada602885cdd7ac5dc1269f8c27"
            className="w-full h-full relative z-10 rounded-md"
          />
          <div className="w-full h-full absolute bg-yellow-400  top-5 left-5 shadow-md rounded-md" />
        </div>

        {/* TEXT DIV HERE  */}

        <div className=" w-full min-[650px]:w-[55%] rounded-lg flex flex-col gap-2 md:gap-6 p-2 min-[650px]:px-10">
          <form className=" flex flex-col gap-2" onSubmit={sendMessageHandeler}>
            <div>
              <label htmlFor="name" className=" text-xl px-1 font-medium">
                Name
              </label>
              <input
                className="w-full bg-blue-100 py-2 px-5 mt-1 rounded-md text-xl "
                type="text"
                placeholder="Enter Your Name ..."
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
                value={name}
              />
            </div>
            <div>
              <label htmlFor="name" className=" text-xl px-1 font-medium">
                Email
              </label>
              <input
                className="w-full bg-blue-100 py-2 px-5 mt-1 rounded-md text-xl"
                type="email"
                placeholder="Enter Your Email ..."
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                value={email}
              />
            </div>
            <div>
              <label htmlFor="name" className=" text-xl px-1 font-medium">
                Phone
              </label>
              <input
                className="w-full bg-blue-100 py-2 px-5  mt-1 rounded-md text-xl "
                type="number"
                placeholder="Your Phone Number ..."
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                required
                value={number}
              />
            </div>
            <div>
              <label htmlFor="name" className=" text-xl px-1 font-medium">
                Subject
              </label>
              <textarea
                className="w-full h-32 bg-blue-100 py-2 px-5 mt-1 rounded-md text-xl resize-none "
                type="text"
                placeholder="Some Message Here ..."
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                required
                value={subject}
              />
            </div>
            {!loader ? (
              <button className=" bg-yellow-300 px-4 py-2 w-fit rounded-md">
                Send Message
              </button>
            ) : (
              <button className=" bg-yellow-300 px-14 py-2 w-fit rounded-md">
                <RiLoader3Line className=" animate-spin text-2xl" />
              </button>
            )}
          </form>
        </div>
      </div>
    </Card>
  );
};

export default Contact;
