export const Nutrition = () => {
  return (
    <div className="mb-[50px]">
    <p className="text-[19px] font-montserrat w-fit mb-[20px]">
      Nutrition per serving
    </p>

    <div className="flex justify-between max-sm:justify-evenly pr-[10px] gap-3 flex-wrap">
    <div className="bg-primary flex flex-col flex-wrap justify-around  items-center w-[120px] h-[200px] rounded-full">
        <div className="bg-white w-[90px] h-[90px]  rounded-full border-none flex items-center justify-center">
          <p className="text-[18px] font-montserrat w-fit text-center">
            378
          </p>
        </div>

        <p className="text-[18px] font-montserrat w-fit h-fit px-[10px] text-[#0000008f]">
          Calories
        </p>
      </div>
      <div className="bg-primary flex flex-col justify-around items-center w-[120px] h-[200px] rounded-full">
        <div className="bg-white w-[90px] h-[90px]  rounded-full border-none flex items-center justify-center">
          <p className="text-[18px] font-montserrat w-fit text-center">
            11.1g
          </p>
        </div>

        <p className="text-[18px] font-montserrat w-fit px-[10px] text-[#0000008f]">
          Fiber
        </p>
      </div>
      <div className="bg-primary flex flex-col justify-around items-center w-[120px] h-[200px] rounded-full">
        <div className="bg-white w-[90px] h-[90px]  rounded-full border-none flex items-center justify-center">
          <p className="text-[18px] font-montserrat w-fit text-center">
            10.9g
          </p>
        </div>

        <p className="text-[18px] font-montserrat w-fit px-[10px] text-[#0000008f]">
          Protein
        </p>
      </div>
      <div className="bg-primary flex flex-col justify-around items-center w-[120px] h-[200px] rounded-full">
        <div className="bg-white w-[90px] h-[90px]  rounded-full border-none flex items-center justify-center">
          <p className="text-[18px] font-montserrat w-fit text-center">
            40.3g
          </p>
        </div>

        <p className="text-[18px] font-montserrat w-fit px-[10px] text-[#0000008f]">
          Carbs
        </p>
      </div>
      <div className="bg-primary flex flex-col justify-around items-center w-[120px] h-[200px] rounded-full">
        <div className="bg-white w-[90px] h-[90px]  rounded-full border-none flex items-center justify-center">
          <p className="text-[18px] font-montserrat w-fit text-center">
            17g
          </p>
        </div>

        <p className="text-[18px] font-montserrat w-fit px-[10px] text-[#0000008f]">
          Fats
        </p>
      </div>
     
      <div className="bg-primary flex flex-col justify-around items-center w-[120px] h-[200px] rounded-full">
        <div className="bg-white w-[90px] h-[90px]  rounded-full border-none flex items-center justify-center">
          <p className="text-[18px] font-montserrat w-fit text-center">
            8.4g
          </p>
        </div>

        <p className="text-[18px] font-montserrat w-fit px-[10px] text-[#0000008f]">
          Sugar
        </p>
      </div>
    </div>
  </div>
  )
}
