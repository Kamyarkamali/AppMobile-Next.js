import Image from "next/image";
import React from "react";
import DotComponent from "./DotComponent";
import ImageGroupComponent from "./ImageGroupComponent";
import Startedcomponent from "./Startedcomponent";

function LoginPage() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-center items-center gap-3 h-40 relative">
        <h1 className="text-[#FFFF] text-[30px]">تست</h1>
        <Image width={25} height={25} src={"/images/logo.png"} />
        <DotComponent />
      </div>
      <ImageGroupComponent />
      <Startedcomponent />
    </div>
  );
}

export default LoginPage;