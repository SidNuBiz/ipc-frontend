
const TestingService = ({ service }) => {

    return (

        <div className="group">

            {/* Image */}

            <div className="h-[400px] w-full overflow-hidden">
                <img src={service.mainImage} alt="" className="h-full w-full object-cover group-hover:scale-110 duration-500 " />
            </div>

            {/* Name */}

            <div className="mt-5 pb-2">
                <h2 className="text-xl text-gray-600">{service.title}</h2>
            </div>

            {/* Border */}

            <div className="h-[2px] w-[40px] bg-gray-600"></div>

        </div>

    );

}


export default TestingService;