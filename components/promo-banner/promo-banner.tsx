import Logo from "../../assets/image.svg";
import Image from "next/image";
const PromoBanner = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Oldboy <span>barbershop</span>
      </h1>
      <p>
        Крупнейшая сеть <br></br> барбершопов
      </p>
      <p>
        <span>294</span>
      </p>
      <p>
        открытых <span>филиала</span>
      </p>
      <p>намного больше чем просто мужская парихмахерская</p>

      <Image src={Logo} alt="Logo" width={200} height={100} />
    </div>
  );
};

export default PromoBanner;
