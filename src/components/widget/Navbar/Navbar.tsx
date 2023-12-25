import { createContext, FC, useEffect, useState } from 'react';
import { menuOptions, MobileMenu, NavItem, OpenMenuBtn } from '.';

interface OpenContextProps {
  openState: boolean;
  setOpenState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OpenContext = createContext<OpenContextProps>({
  openState: false,
  setOpenState: () => {},
});

const Navbar: FC = () => {
  const [openState, setOpenState] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = openState ? 'hidden' : 'scroll';
  }, [openState]);

  return (
    <OpenContext.Provider value={{ openState, setOpenState }}>
      <header
        className="fixed top-0 left-0 z-[9995]  w-screen select-none backdrop-blur md:text-lg"
        style={{
          backgroundImage: `radial-gradient(
          rgba(0, 0, 0, 0) 1px,
          #002042 1px
        )`,
          backgroundSize: '4px 4px',
        }}
      >
        <div
          className="layout relative z-50 mx-auto flex h-[60px] items-center justify-between px-3 sm:h-[80px]"
          id="navbar"
        >
          <div className="relative flex items-center justify-center font-RobotoCondensed text-[2rem] font-bold italic outline-none md:text-[3rem]">
            <a href="#" className="outline-none">
              JuanDSR
            </a>
          </div>
          <ul className=" hidden gap-4 sm:flex">
            {menuOptions.map(({ id, href, text }) => (
              <NavItem key={id} href={href} text={text} />
            ))}
          </ul>
          <OpenMenuBtn />
        </div>

        <MobileMenu />
      </header>
    </OpenContext.Provider>
  );
};

export default Navbar;
