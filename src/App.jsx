import "./App.css";
import img from "./assets/image/marvin-lewis-5ToFAve8U1o-unsplash-removebg-preview.png";
import img1 from "./assets/image/depositphotos_63016959-stock-photo-man-working-on-a-computer.jpg";
import facebook from "./assets/image/facebook.png";
import instagram from "./assets/image/instagram.png";
import twitter from "./assets/image/twitter.png";

const App = () => {
  return (
    <div className="font-istokweb w-[1440px] mx-auto relative">
      {window.screen.width < 1440 ? (
        <p className="absolute top-0 text-center text-[#721B65] bg-white w-full text-xl py-2 opacity-70">
          Open at a screen width of 1440px or larger
        </p>
      ) : (
        ""
      )}
      <section className="grid grid-cols-2 justify-center items-start gap-[100px] bg-[#FFD868] px-[100px] ">
        <div className="w-[100%] py-[159px]">
          <div className="mb-[30px]">
            <p className="text-[#721B65] text-[80px] leading-[97px] font-bold mb-5">
              Belajar Skill dengan Mentor Expert
            </p>
            <p className="text-xl font-normal leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 justify-center">
            <button
              type="button"
              className="text-[24px] leading-6 w-[100%] bg-white text-[#721B65] py-4 px-[18px] rounded-[10px]"
            >
              Cari Kelas
            </button>
            <button
              type="button"
              className="text-[24px] leading-6 w-[100%] bg-[#721B65] text-white py-4 px-[18px] rounded-[10px]"
            >
              Promo 70%
            </button>
          </div>
        </div>
        <img
          className="w-[100%] h-[100%] object-cover object-center"
          src={img}
          alt={img}
        />
      </section>
      <section className="frame138 grid grid-cols-2 p-[100px] gap-[20px]">
        <img
          className="min-h-[540px] object-cover object-center"
          src={img1}
          alt={img1}
        />
        <div className="flex align-middle justify-center flex-col px-4">
          <p className="text-center text-[#000000]/50 font-[600] text-[60px] leading-[73px]">
            Gabung Kelas dan Dapatkan{" "}
            <span className="text-[#000000]">Sertifikat</span>
          </p>
          <p className="text-[20px] font-[300] leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </p>
          <button
            type="button"
            className="text-[24px] leading-[29px] bg-[#721B65] text-white py-4 px-[10px] rounded-[10px] w-[240px] mt-[60px] ml-auto"
          >
            Promo 70%
          </button>
        </div>
      </section>
      <section className="px-[100px] pt-[30px] pb-[40px] bg-[#FFD868]">
        <p className="text-[#721B65] font-[500] text-[60px] leading-[73px] text-center mb-10">
          Akses Jutaan Video tanpa Batas
        </p>
        <div className="grid grid-cols-3 gap-[30px]">
          <div>
            <img
              className="h-[424px] object-cover object-center"
              src={img1}
              alt={img1}
            />
            <p className="bg-[#721B65] text-center py-4 px-5 text-white font-[500] text-[22px] leading-[27px]">
              Front End Development with CodeIgniter
            </p>
          </div>
          <div>
            <img
              className="h-[424px] object-cover object-center"
              src={img1}
              alt={img1}
            />
            <p className="bg-[#721B65] text-center py-4 px-5 text-white font-[500] text-[22px] leading-[27px]">
              Front End Development with CodeIgniter
            </p>
          </div>
          <div>
            <img
              className="h-[424px] object-cover object-center"
              src={img1}
              alt={img1}
            />
            <p className="bg-[#721B65] text-center py-4 px-5 text-white font-[500] text-[22px] leading-[27px]">
              Front End Development with CodeIgniter
            </p>
          </div>
        </div>
      </section>
      <section className="pt-[100px] px-[100px] flex flex-col">
        <p className="text-[#000000]/50 font-[600] text-[60px] leading-[73px] mb-4">
          Dapatkan <span className="text-[#000000]">Points</span> Setiap Selesai
          Kelas
        </p>
        <p className="leading-6 text-xl font-light mb-[60px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </p>
        <button
          type="button"
          className="text-[24px] leading-[29px] bg-[#721B65] text-white py-4 px-[10px] rounded-[10px] w-[240px] mx-auto"
        >
          Promo 70%
        </button>
        <div className="mt-[126px] flex items-center justify-center mb-[86px]">
          <div className="w-[111px] h-[111px] bg-[#721B65] rounded-[50%] flex items-center justify-center mx-[25px]">
            <img className="w-[56px] h-[56px]" src={facebook} alt={facebook} />
          </div>
          <div className="w-[111px] h-[111px] bg-[#721B65] rounded-[50%] flex items-center justify-center mx-[25px]">
            <img className="w-[56px] h-[56px]" src={instagram} alt={facebook} />
          </div>
          <div className="w-[111px] h-[111px] bg-[#721B65] rounded-[50%] flex items-center justify-center mx-[25px]">
            <img className="w-[56px] h-[56px]" src={twitter} alt={facebook} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
