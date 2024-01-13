const ServiceImageGallerySection = ({ images }) => {

    return (

        <div className=" w-full my-10">
            
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">

                {
                    images.map((image, index) => (

                        <div key={index} className={" h-[300px] w-full " + (index === 0 ? " lg:col-span-2 md:col-span-2 sm:col-span-1 " : " col-span-1 ")}>
                            <img src={image} alt="" className=" w-full h-full object-cover"/>
                        </div>

                    ))
                }

            </div>

        </div>

    );
    
}


export default ServiceImageGallerySection;