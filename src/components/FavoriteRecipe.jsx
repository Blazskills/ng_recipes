import { imgs1, imgs2, imgs3, imgs4, imgs5, jollof } from "../assets/images";
import { Instructions } from "./Instructions";
import { Nutrition } from "./Nutrition";
export const FavoriteRecipe = () => {
  return (
    <section className="max-container">
      <div>
        {/* <div className="flex justify-between gap-[80px] max-sm:flex-col-reverse max-md:flex-col-reverse max-lg:flex-col-reverse max-xl:flex-col-reverse"> */}
        <div className="flex justify-between gap-[80px] max-sm:flex-col-reverse max-md:flex-col-reverse max-lg:flex-col-reverse max-xl:flex-col-reverse">
          <div className="flex-1">
            <img
              src={jollof}
              alt="jollof"
              className="max-2xl:w-[70%] max-2xl:m-auto rounded-2xl h-[700px] max-sm:h-[400px] w-full max-w-full max-lg:w-[50%] max-lg:m-auto max-md:w-[90%] max-md:m-auto bg-cover "
            />
            <div className="my-[20px] sticky top-5 max-2xl:w-[70%] max-2xl:m-auto">
              <p className="font-bold text-[40px] text-[#000000c6] w-fit">
                Ingredients
              </p>

              <div className="flex flex-col gap-4 mt-[20px]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5 ">
                    <div className=" bg-primary rounded-full w-[50px] h-[50px] flex items-center justify-center">
                      <img
                        src={imgs1}
                        alt="image1"
                        className="object-cover w-[40px] "
                      />
                    </div>

                    <p className="font-palanquin text-[19px] text-[#000000b5]">
                      cup oil
                    </p>
                  </div>
                  <div className="mx-1">
                    <p className="w-fit px-4 font-palanquin text-[19px] text-[#000000b5]">
                      1
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5 ">
                    <div className=" bg-primary rounded-full w-[50px] h-[50px] flex items-center justify-center">
                      <img
                        src={imgs2}
                        alt="image1"
                        className="object-cover w-[40px] "
                      />
                    </div>

                    <p className="font-palanquin text-[19px] text-[#000000b5]">
                    medium onion sliced
                    </p>
                  </div>
                  <div className="mx-1">
                    <p className="w-fit px-4 font-palanquin text-[19px] text-[#000000b5]">
                    1
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5 ">
                    <div className=" bg-primary rounded-full w-[50px] h-[50px] flex items-center justify-center">
                      <img
                        src={imgs3}
                        alt="image1"
                        className="object-cover w-[40px] "
                      />
                    </div>

                    <p className="font-palanquin text-[19px] text-[#000000b5]">
                    tablespoons tomato paste
                    </p>
                  </div>
                  <div className="mx-1">
                    <p className="w-fit px-4 font-palanquin text-[19px] text-[#000000b5]">
                      4
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5 ">
                    <div className=" bg-primary rounded-full w-[50px] h-[50px] flex items-center justify-center">
                      <img
                        src={imgs4}
                        alt="image1"
                        className="object-cover w-[40px] "
                      />
                    </div>

                    <p className="font-palanquin text-[19px] text-[#000000b5]">
                    large tomato sliced
                    </p>
                  </div>
                  <div className="mx-1">
                    <p className="w-fit px-4 font-palanquin text-[19px] text-[#000000b5]">
                     1
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5 ">
                    <div className=" bg-primary rounded-full w-[50px] h-[50px] flex items-center justify-center">
                      <img
                        src={imgs5}
                        alt="image1"
                        className="object-cover w-[40px] "
                      />
                    </div>

                    <p className="font-palanquin text-[19px] text-[#000000b5]">
                    cups long grain rice
                    </p>
                  </div>
                  <div className="mx-1">
                    <p className="w-fit px-4 font-palanquin text-[19px] text-[#000000b5]">
                     4
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col mx-6">
            <p className="text-[68px] font-[600] leading-[75.3419px] font-montserrat">
            Nigerian Jollof Rice
            </p>
            <p className="text-[18px] my-[30px] leading-[26.9665px] px-[20px] py-[9px] border-2 border-primary rounded-full  w-fit font-montserrat ">
              Jollof
            </p>

            <div className="flex  gap-[50px] mb-[60px]">
              <p className="font-palanquin text-[15px] leading-[26.9665px]">
                Total <span className="font-bold">15m</span>
              </p>
              <p className="font-palanquin text-[15px] leading-[26.9665px]">
                Prep <span className="font-bold">5m</span>
              </p>
              <p className="font-palanquin text-[15px] leading-[26.9665px]">
                Chill <span className="font-bold">0m</span>
              </p>
              <p className="font-palanquin text-[15px] leading-[26.9665px]">
                Cook <span className="font-bold">10m</span>
              </p>
            </div>

            <Nutrition />

            <div>
              <p className="font-bold text-[40px] text-[#000000c6] w-fit">
                Instructions
              </p>
              <Instructions />

              <p className="max-lg:w-[50%] max-lg:m-auto rounded-md text-center py-[20px] bg-primary font-montserrat font-semibold max-lg:text-[20px] text-[30px] my-[50px] text-[#000000ad] cursor-pointer sticky bottom-[10px]">
                Start Cooking{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
