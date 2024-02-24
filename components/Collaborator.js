
import Image from "next/image";
import pic10 from "../assets/company/Amara.png";
import pic11 from "../assets/company/Aven.png";
import pic12 from "../assets/company/Circle.png";
import pic13 from "../assets/company/Kyan.png";
import pic14 from "../assets/company/Treva.png";


const Collaborator = () => {
  return (
    <div className="min-h-[440px]  py-36 space-y-10 sm:px-12 lg:px-24 bg-white">
      <p className="text-[32px] text-[#0052CC] font-semibold flex justify-center ">
        5,000+ high-impact teams rely on Fieldx
      </p>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
        <Image src={pic10} alt="..." width={160} height={48} />
        <Image src={pic11} alt="..." width={160} height={48} />
        <Image src={pic12} alt="..." width={160} height={48} />
        <Image src={pic13} alt="..." width={160} height={48} />
        <Image src={pic14} alt="..." width={160} height={48} />
      </div>
    </div>
  );
};

export default Collaborator;
