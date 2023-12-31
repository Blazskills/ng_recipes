import { beans, banana, jollof } from "../assets/images";

export const AllRecipes = () => {
  return (
    <section className="max-container my-[50px]">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        <div className="rounded-lg flex flex-col items-center border border-[black] py-[25px] cursor-pointer shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30">
          <img src={banana} alt="beans" className="lg:h-[500px] lg:w-4/5 sm:w-[400px] md:w-[400px] max-sm:max-w-[300px] hover:opacity-[0.93]" />
          <p className="text-[32px] font-montserrat w-[376px] max-w-[300px] font-semibold leading-normal hover:textDecorationStyle">Spicy sundried tomato on toast</p>
          <div className="w-full flex justify-center">
            <p className="mr-[40px] font-montserrat">5m</p>
            <p className="font-montserrat">4 plants</p>
          </div>
        </div>
        <div className="rounded-lg flex flex-col items-center border border-[black] py-[25px] cursor-pointer shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30">
          <img src={beans} alt="beans" className="lg:h-[500px] lg:w-4/5 sm:w-[400px] md:w-[400px] max-sm:max-w-[300px] hover:opacity-[0.93]" />
          <p className="text-[32px] font-montserrat w-[376px] max-w-[300px] font-semibold leading-normal hover:textDecorationStyle">Beans toast fry </p>
          <div className="w-full flex justify-center">
            <p className="mr-[40px] font-montserrat">25m</p>
            <p className="font-montserrat">2 plants</p>
          </div>
        </div>
        <div className="rounded-lg flex flex-col items-center border border-[black] py-[25px] cursor-pointer shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30">
          <img src={jollof} alt="beans" className="lg:h-[500px] lg:w-4/5 sm:w-[400px] md:w-[400px] max-sm:max-w-[300px] hover:opacity-[0.93]" />
          <p className="text-[32px] font-montserrat w-[376px] max-w-[300px] font-semibold leading-normal hover:textDecorationStyle ">Nigerian Jollof Rice</p>
          <div className="w-full flex justify-center   px-[10px]">
            <p className="mr-[40px] font-montserrat">23m</p>
            <p className="font-montserrat">7 plants</p>
          </div>
        </div>
       
      
       
       
      </div>
    </section>
  );
};
