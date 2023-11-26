import Card from "../UI/Card";
import { MdConstruction } from "react-icons/md";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaHouse } from "react-icons/fa6";
import { FaPersonThroughWindow } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { BsPersonArmsUp } from "react-icons/bs";
import { FaPersonShelter } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import { MdRepeat } from "react-icons/md";
/* -------------------------------------------------------------------------- */
/*                             OUR SERVICE SECTION                            */
/* -------------------------------------------------------------------------- */

const Clients = () => {
  return (
    <div className="  p-2  pb-20 mb-20">
      <Card>
        <h1
          className=" border-l-8 border-yellow-300 p-2  text-3xl"
          id="clients"
        >
          Our Clients
        </h1>

        {/* PARENT CONTAINER 1 */}

        <div className=" flex flex-wrap min-[370px]:flex-nowrap justify-center items-center gap-6 p-4 w-full mt-5">
          {/* CHILD CONTAINER 1.1 */}
          <div className=" flex flex-wrap min-[800px]:flex-nowrap justify-center items-center gap-4">
            <div className="p-1 bg-yellow-200  flex justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-x-[-3rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <img
                className=" w-full h-full rounded-md"
                src="https://www.tailorbrands.com/wp-content/uploads/2020/10/Wates.jpg"
                alt="company images"
              />
            </div>

            {/* CHILD CONTAINER 1.2 */}
            <div className="p-1 bg-yellow-200  flex justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-x-[-3rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <img
                className=" w-full h-full rounded-md"
                src="https://www.tailorbrands.com/wp-content/uploads/2020/10/Midas.jpg"
                alt="company logo"
              />
            </div>
            <div className="p-1 bg-yellow-200  flex justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-x-[-3rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <img
                className=" w-full h-full rounded-md"
                src="https://www.tailorbrands.com/wp-content/uploads/2020/10/PCL.jpg"
                alt="company logo"
              />
            </div>
          </div>

          <div className=" flex flex-wrap min-[800px]:flex-nowrap   justify-center items-center gap-4">
            {/* CHILD CONTAINER 1.3 */}
            <div className="p-1 bg-yellow-200  flex justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-x-[-3rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <img
                className=" w-full h-full rounded-md"
                src="https://www.tailorbrands.com/wp-content/uploads/2020/10/Skanska.jpg"
                alt="company images"
              />
            </div>
            {/* CHILD CONTAINER 1.4 */}

            <div className="p-1 bg-yellow-200  flex justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-x-[-3rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <img
                className=" w-full h-full rounded-md"
                src="https://www.tailorbrands.com/wp-content/uploads/2020/10/Roadbridge.jpg"
                alt="company images"
              />
            </div>
            <div className="p-1 bg-yellow-200  flex justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-x-[-3rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <img
                className=" w-full h-full rounded-md"
                src="https://www.tailorbrands.com/wp-content/uploads/2020/10/Tutor.jpg"
                alt="company images"
              />
            </div>
          </div>
        </div>

        {/* PARENT CONTAINER 2 */}

        <div className=" flex flex-wrap min-[370px]:flex-nowrap justify-center items-center gap-6 p-4 w-full">
          {/* CHILD CONTAINER 2.1 */}
          <div className=" flex flex-wrap min-[800px]:flex-nowrap   justify-center items-center gap-4">
            <div className="p-1 bg-yellow-200  flex justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-x-[-3rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <img
                className=" w-full h-full rounded-md"
                src="https://www.tailorbrands.com/wp-content/uploads/2020/10/Kiewit.jpg"
                alt="company images"
              />
            </div>
            <div className="p-1 bg-yellow-200  flex justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-x-[-3rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <img
                className=" w-full h-full rounded-md"
                src="https://www.tailorbrands.com/wp-content/uploads/2020/10/Perfection.jpg"
                alt="company images"
              />
            </div>

            {/* CHILD CONTAINER 2.2 */}
            <div className="p-1 bg-yellow-200  flex justify-center items-center gap-2 rounded-md shadow-md hover:transform hover:translate-x-[-3rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <img
                className=" w-full h-full rounded-md"
                src="https://www.tailorbrands.com/wp-content/uploads/2020/10/Turner.jpg"
                alt="company images"
              />
            </div>
          </div>

          <div className=" flex flex-wrap min-[800px]:flex-nowrap   justify-center items-center gap-4">
            {/* CHILD CONTAINER 2.3 */}
            <div className="p-1 bg-yellow-200  flex justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-x-[-3rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <img
                className=" w-full h-full rounded-md"
                src="https://www.tailorbrands.com/wp-content/uploads/2020/10/CAT.jpg"
                alt="company images"
              />
            </div>
            <div className="p-1 bg-yellow-200  flex justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-x-[-3rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <img
                className=" w-full h-full rounded-md"
                src="https://www.tailorbrands.com/wp-content/uploads/2020/10/Borras.jpg"
                alt="company images"
              />
            </div>
            <div className="p-1 bg-yellow-200  flex justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-x-[-3rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <img
                className=" w-full h-full rounded-md"
                src="https://www.tailorbrands.com/wp-content/uploads/2020/10/Kier.jpg"
                alt="company images"
              />
            </div>

            {/* CHILD CONTAINER 2.4 */}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Clients;
