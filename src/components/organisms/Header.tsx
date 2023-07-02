import SPHeader from "@/components/organisms/SPHeader";
import PCHeader from "@/components/organisms/PCHeader";

const Header = () => {
  return (
    <header className="sticky lg:h-[76px] h-[89px] top-0 bg-white w-full shadow">
      <PCHeader/>
      <SPHeader/>
    </header>
  );
};

export default Header;
