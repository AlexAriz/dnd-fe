import LanguagePicker from "./LanguagePicker";
import Nav from "./Nav";

function Header() {
  return (
    <header className="h-14 w-screen fixed top-0 right-0 flex justify-between p-3 border-b">
      <Nav />

      <LanguagePicker />
    </header>
  );
}

export default Header;
