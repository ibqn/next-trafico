import { headerData } from "data";

const Header = () => {
  const { btnText, logoImgV1, logoImgV2 } = headerData;
  return (
    <header className="fixed left-0 right-0 z-20 mx-auto flex h-[60px] w-full max-w-[90vw] items-center justify-between bg-black lg:max-w-[1120px]">
      header
    </header>
  );
};

export default Header;
