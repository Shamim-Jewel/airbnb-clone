import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div>
      <Image
        className=" rounded-full bg-slate-800"
        width="30"
        height="30"
        alt="avater"
        src="/images/avatar.png"
      />
    </div>
  );
};

export default Avatar;
