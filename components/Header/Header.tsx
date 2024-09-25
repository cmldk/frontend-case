import Icon from '../Icon/Icon';

const Header = () => {
  return (
    <header className="container flex justify-between items-center py-6 text-amber-900">
      <h5>Collers</h5>
      <Icon
        name="MenuScale"
        width={24}
        height={24}
        className="block lg:hidden scale-x-[-1]"
      />
      <div className="hidden lg:flex items-center space-x-4 font-medium tracking-[0.5px]">
        <a className="py-3 px-2" href="#">
          Products
        </a>
        <a className="py-3 px-2" href="#">
          Solutions
        </a>
        <a className="py-3 px-2" href="#">
          Pricing
        </a>
        <a className="py-3 px-2" href="#">
          Resources
        </a>
        <a className="py-3 px-2" href="#">
          Log In
        </a>

        <button className="box-border border-2 rounded-lg border-amber-900 p-3">
          <span className="px-4">Sign up now</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
