import Image from "next/image";

function ImageGroupComponent() {
  return (
    <div className="flex justify-center mt-3 relative">
      <Image
        src={"/images/Group 13_cleanup.png"}
        width={317}
        height={317}
        alt="image group"
      />

      <div className="absolute top-[150px] w-[218px] h-[34px] bg-[#300f77e9] rounded-[2px] opacity-90 left-1/2 transform -translate-x-1/2 rotate-[-10deg] flex justify-center items-center">
        <p className="text-[#FFFF] font-bold text-[15px] w-[265px] text-center">
          لورم ایپسوم متن ساختگی{" "}
        </p>
      </div>

      <div className="absolute top-[200px] backdrop-blur-xl w-[178px] h-[66px] bg-[#5D3388] rounded-[2px] opacity-90 left-1/2 transform -translate-x-1/2 rotate-[-10deg] flex justify-center items-center">
        <p className="text-[#FFFF] text-[29px] font-bold w-[265px] text-center">
          X 444,444
        </p>
      </div>
    </div>
  );
}

export default ImageGroupComponent;
