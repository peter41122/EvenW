import MobileHeader from "./Mobile";

const Header = ({ title, backPress }) => {
  return (
    <>
      <div className="block md:hidden">
        <MobileHeader title={title} backPress={backPress} />
      </div>
    </>
  );
};

export default Header;
