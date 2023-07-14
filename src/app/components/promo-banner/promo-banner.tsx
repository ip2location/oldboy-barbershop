import Logo from "../../assets/image.svg";
import Image from "next/image";
export const PromoBanner = () => {
  return (
    <div>
      <div className="tracking-tigh sm:text-4xl text-transform: uppercase font-rex transform skew-y-15 w-48">
        <h1 className="text-3xl text-white">
          Oldboy <br></br> barbershop
        </h1>
        <div className="text-orange-title text-base relative">
          <p className="w-1/2 bg-orange-title h-1 absolute bottom-3 left-24"></p>
          Крупнейшая сеть
          <br></br> барбершопов
        </div>
        <div className="flex">
          <p className="text-7xl text-white font-rex_inline">
            <span>294</span>
          </p>
          <p className="text-base text-white ml-2 mt-2">
            открытых <span>филиала</span>
          </p>
        </div>

        <p className="w-auto bg-orange-title h-1 mb-2.5"></p>
        <p className="text-base text-white">
          намного больше чем просто мужская парихмахерская
        </p>

        <Image src={Logo} alt="Logo" width={61} height={33} />
      </div>
    </div>
  );
};
