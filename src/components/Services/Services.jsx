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

const Services = () => {
  return (
    <div className=" bg-gray-200 p-2 mt-20 pb-20 mb-20">
      <Card>
        <h1 className=" border-l-8 border-yellow-300 p-2  text-3xl">
          Our Services
        </h1>

        {/* PARENT CONTAINER 1 */}

        <div className=" flex flex-wrap min-[650px]:flex-nowrap justify-center items-center gap-6 p-4 w-full mt-5">
          {/* CHILD CONTAINER 1.1 */}
          <div className=" flex flex-wrap min-[800px]:flex-nowrap justify-center items-center gap-4">
            <div className="p-5 bg-white flex flex-col justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-y-[-2rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <BsFillBuildingsFill className=" text-5xl font-semibold text-yellow-500" />
              <h1 className=" text-2xl font-semibold">Building Construction</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet.
              </p>
            </div>

            {/* CHILD CONTAINER 1.2 */}
            <div className="p-5 bg-white flex flex-col justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-y-[-2rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <FaHouse className=" text-5xl font-semibold text-yellow-500" />
              <h1 className=" text-2xl font-semibold">House Renovation</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet.
              </p>
            </div>
          </div>
          <div className=" flex flex-wrap min-[800px]:flex-nowrap   justify-center items-center gap-4">
            {/* CHILD CONTAINER 1.3 */}
            <div className="p-5 bg-white flex flex-col justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-y-[-2rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <FaPersonThroughWindow className=" text-5xl font-semibold text-yellow-500" />
              <h1 className=" text-2xl font-semibold">Architecture Design</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet.
              </p>
            </div>
            {/* CHILD CONTAINER 1.4 */}

            <div className="p-5 bg-white flex flex-col justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-y-[-2rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <FaTruck className=" text-5xl font-semibold text-yellow-500" />
              <h1 className=" text-2xl font-semibold">Material Supply </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet.
              </p>
            </div>
          </div>
        </div>

        {/* PARENT CONTAINER 2 */}

        <div className=" flex flex-wrap min-[650px]:flex-nowrap justify-center items-center gap-6 p-4 w-full">
          {/* CHILD CONTAINER 2.1 */}
          <div className=" flex flex-wrap min-[800px]:flex-nowrap   justify-center items-center gap-4">
            <div className="p-5 bg-white flex flex-col justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-y-[-2rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <BsPersonArmsUp className=" text-5xl font-semibold text-yellow-500" />
              <h1 className=" text-2xl font-semibold ">Consultant</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet.
              </p>
            </div>

            {/* CHILD CONTAINER 2.2 */}
            <div className="p-5 bg-white flex flex-col justify-center items-center gap-2 rounded-md shadow-md hover:transform hover:translate-y-[-2rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <FaPersonShelter className=" text-5xl font-semibold text-yellow-500" />
              <h1 className=" text-2xl font-semibold ">Interior Design </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet.
              </p>
            </div>
          </div>

          <div className=" flex flex-wrap min-[800px]:flex-nowrap   justify-center items-center gap-4">
            {/* CHILD CONTAINER 2.3 */}
            <div className="p-5 bg-white flex flex-col justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-y-[-2rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <MdRepeat className=" text-5xl font-semibold text-yellow-500" />
              <h1 className=" text-2xl font-semibold ">Renovation</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet.
              </p>
            </div>

            {/* CHILD CONTAINER 2.4 */}

            <div className="p-5 bg-white flex flex-col justify-center items-center gap-2  rounded-md shadow-md hover:transform hover:translate-y-[-2rem]  transition-all hover:cursor-pointer duration-300 ease-in-out  ">
              <GiAutoRepair className=" text-5xl font-semibold text-yellow-500" />
              <h1 className=" text-2xl font-semibold ">Maintenance </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Services;
