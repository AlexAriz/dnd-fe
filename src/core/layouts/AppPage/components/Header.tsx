import { TopNav } from "@astryxdesign/core/TopNav";
import Nav from "./Nav";
import UserMenu from "./UserMenu";
import ThemePicker from "Features/Theme/components/ThemePicker";

function Header() {
  return (
    <TopNav
      startContent={<Nav />}
      endContent={
        <>
          <ThemePicker />
          <UserMenu />
        </>
      }
    />
  );
}

export default Header;
