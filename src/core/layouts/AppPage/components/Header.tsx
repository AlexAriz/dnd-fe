import { TopNav } from "@astryxdesign/core/TopNav";
import Nav from "./Nav";
import SettingsMenu from "./SettingsMenu";

function Header() {
  return <TopNav startContent={<Nav />} endContent={<SettingsMenu />} />;
}

export default Header;
