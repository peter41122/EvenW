import { useNavigate } from "react-router-dom";
import backgroundImg from "../../assets/images/background.svg";
import mobileImg from "../../assets/images/mobile.png";
import { BtnWarning } from "../../components/buttons";

const Home = () => {
  const navigate = useNavigate();

  const handleChangeRoute = (route, data) => {
    navigate(route, data);
  };

  return (
    <>
      <div className="w-full absolute right-0 left-0 top-0">
        <div className="pb-4 sm:pb-0 bg-blue-custom h-[25rem] flex flex-col justify-end px-4 md:px-20 z-[1] relative">
          <div className="text-3xl sm:text-4xl mb-1 text-white">
            Cross border payment
          </div>
          <div className="text-3xl sm:text-4xl mb-1 text-white">
            infrastructure for African
          </div>
          <div className="text-3xl sm:text-4xl mb-1 text-white">merchant</div>
          <div className="mb-5 text-[16px] text-white">
            We make it easier for merchants to open and run a business account
            for their business
            <div>banking needs.</div>
          </div>
          <BtnWarning onClick={() => handleChangeRoute("/login")}>
            Get Started
          </BtnWarning>
        </div>
        <img
          className="mobile-landing m-auto absolute right-[10rem] bottom-10 z-10 hidden lg:block"
          src={mobileImg}
          width={280}
          alt=""
        />
        <img className="m-auto mt-[-5px]" src={backgroundImg} alt="" />
      </div>
    </>
  );
};

export default Home;
