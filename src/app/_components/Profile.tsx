import React from "react";
import Eric from "@/assets/Eric.jpeg";
import Image from "next/image";

const Profile = () => {
  return (
    <section className="flex flex-col justify-center items-center p-2">
      <Image
        src={Eric}
        alt="Eric.jpg"
        className="w-32 h-32 rounded-full object-cover"
      />
      <p className="font-bold">Eric Taylor</p>
      <p className="text-foreground">Numero&apos;s Chief of Staff</p>
    </section>
  );
};

export default Profile;
