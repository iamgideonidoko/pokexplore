import logo from '@/assets/images/logo.png';
import { Button } from '@/composables';
import { MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between px-8 py-10">
      <div>
        <Link to="/">
          <img src={logo} width={200} alt="Logo" className="max-w-full object-cover" />
        </Link>
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
