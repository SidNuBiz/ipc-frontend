import GrayLogo from "../../../assets/logo-gray.png";
import axios from "axios";
import { useState,useEffect } from "react";

const EquipmentSection = () => {

    const [equipments,setEquipments] = useState([])

    async function fetchData(){
        const {data} =  await axios.get('http://localhost:8080/api/v1/equipment-details/all')
        setEquipments(data.equipments)  
    }

    useEffect(() => {

        fetchData()
    
    }, []);

    return (

        <div className="mb-20">

            {/* Heading */}

            <div className="text-center pt-40 -ml-10">

                <img src={GrayLogo} alt=""  className="inline-block align-top mb-5 opacity-50 -mr-10 lg:w-32 md:w-32 sm:w-20"/>
                <h2 data-aos="fade-in" className="inline-block align-bottom mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold ">Key Equipment</h2>

            </div>

            {/* Update Date */}

            <div className="text-center mt-5">
                <h2 className="text-gray-600 text-xl italic">Updated - 2022 October 14</h2>
            </div>


            {/* Equipments */}

            <div className=" mt-20">

                <div className=" relative grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 w-5/6 mx-auto place-items-center items-center ">

                    {
                        equipments.map((equipment, index) => (

                            <div key={index} className=" group bg-white relative flex text-center text-gray-600 min-h-[600px] w-full overflow-hidden border-2 border-black shadow-xl items-center hover:bg-transparent hover:text-white duration-300 ">

                                {/* Info */}

                                <div className="relative items-center w-2/3 mx-auto z-30">

                                    <span className="block text-3xl font-semibold italic mb-5">{equipment.name}</span>

                                    <span className="block">{equipment.model}</span>

                                    <span className="block">{equipment.description}</span>

                                </div>

                                {/* Background Image */}

                                <div className=" absolute w-full h-full max-w-none z-10 opacity-0 group-hover:opacity-100 duration-300">
                                    <img src={equipment.img} alt="" className=" object-cover w-full h-full" />
                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>

    );

}


export default EquipmentSection;