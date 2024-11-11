import { Carousel as AntCarousel } from "antd"; // Rename the import
import bannerImg from "../../assets/Images/banner-image.png";

function CustomCarousel() {
  // Rename your function
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
    <AntCarousel autoplaySpeed={2500} infinite="false">
      <div className="bg-slate-200 px-10  h-auto">
        <div className="flex sm:flex-row flex-col justify-center items-center mx-auto">
          <div className="sm:w-[50%] w-full sm:px-0 px-5 lg:mt-0 mt-16">
            <h3 className="2xl:text-8xl xl:text-7xl lg:text-5xl text-4xl font-light uppercase ">
              Your Products Are Great.
            </h3>
            <button className="bg-slate-800 text-slate-50 text-base font-normal sm:my-10 my-4 sm:px-12 px-7 py-4 uppercase">Shop Product</button>
          </div>
          <img className="lg:w-[40%] md:w-[50%] w-[60%]" src={bannerImg} alt="banner Iamge" />
        </div>
      </div>
      <div className="bg-slate-200 px-10  h-auto">
        <div className="flex sm:flex-row flex-col justify-center items-center mx-auto">
          <div className="sm:w-[50%] w-full sm:px-0 px-5 lg:mt-0 mt-16">
            <h3 className="2xl:text-8xl xl:text-7xl lg:text-5xl text-4xl font-light uppercase ">
              Your Products Are Great.
            </h3>
            <button className="bg-slate-800 text-slate-50 text-base font-normal sm:my-10 my-4 sm:px-12 px-7 py-4 uppercase">Shop Product</button>
          </div>
          <img className="lg:w-[40%] md:w-[50%] w-[60%]" src={bannerImg} alt="banner Iamge" />
        </div>
      </div>
    </AntCarousel>
    </>
  );
}

export default CustomCarousel; // Export your renamed component
