import DashboardNavLink from "@/components/DashboardNavLink";
import Image from "next/image";
import location from "../../../assets/icon/location.png";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex ">
      <aside className="flex-[1.5] bg-[#F0F6FF] p-5">
        <nav>
          <ul className="grid gap-3">
          <p className="py-5 text-black font-bold flex gap-5"><span>
            <Image src={location} alt="..."/>
            </span>Geo Information</p>
            <li>
              <DashboardNavLink href="/dashboard/region">
                Region
              </DashboardNavLink>
            </li>
            <li>
              <DashboardNavLink href="/dashboard/area">Area</DashboardNavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bg-[#fff] flex-[10] rounded min-h-[300px] ">
        <div className="bg-[#F8F8F8] px-4 py-12">
         
          <div className="bg-[#fff] p-4 rounded-md">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
