import Button from "../_components/Button";
import Numero from "../../../public/Numero.jpg";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex flex-row w-full justify-between p-2 sticky top-0 bg-background/100">
      <div className="flex">
        <Image
          src={Numero}
          alt="Numero"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      <div className="flex flex-row gap-2">
        <Button>Sign In</Button>
        <p className="p-2">|</p>
        <Button>Contact Us</Button>
        <p className="p-2">|</p>
        <Button className="bg-purple-500">Get Pricing</Button>
      </div>
    </div>
  );
};

export default NavBar;
