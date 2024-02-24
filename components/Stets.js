import Image from "next/image";
import cup from "../assets/icon/cup.png";
import monitor from "../assets/icon/monitor-mobbile.png";
import people from "../assets/icon/people.png";
import user from "../assets/icon/user.png";
const Stets = () => {
  return (
    <div className="py-10 lg:px-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="text-center">
        <Image
          src={monitor}
          alt="..."
          width={48}
          height={48}
          className="mx-auto"
        />
        <p className="text-[#0052CC] text-[40px]">10+</p>
        <p className="text-[#4E4E4E] text-2xl">Platform Created</p>
      </div>
      <div className="text-center">
        <Image
          src={people}
          alt="..."
          width={48}
          height={48}
          className="mx-auto"
        />
        <p className="text-[#0052CC] text-[40px]">1559+</p>
        <p className="text-[#4E4E4E] text-2xl">Total Users</p>
      </div>
      <div className="text-center">
        <Image
          src={user}
          alt="..."
          width={48}
          height={48}
          className="mx-auto"
        />
        <p className="text-[#0052CC] text-[40px]">10+</p>
        <p className="text-[#4E4E4E] text-2xl">Total Clients</p>
      </div>
      <div className="text-center">
        <Image src={cup} alt="..." width={48} height={48} className="mx-auto" />
        <p className="text-[#0052CC] text-[40px]">300 Days</p>
        <p className="text-[#4E4E4E] text-2xl">In Operations</p>
      </div>
    </div>
  );
};

export default Stets;
