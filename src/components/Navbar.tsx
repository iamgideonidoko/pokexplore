import logo from "@/assets/images/logo.png";
import { Button } from "@/composables";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex flex-wrap justify-between items-center px-8 py-10">
      <div>
        <img
          src={logo}
          width={200}
          alt="Logo"
          className="object-cover max-w-full"
        />
      </div>
      <div>
        <Button intent="none">
          <MenuIcon />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
