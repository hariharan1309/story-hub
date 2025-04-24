import Image from "next/image";
import Profile from "@/../public/profile.png";
type HeaderProps = {
  title: string;
  username: string;
};

const BackArrow = () => {
  return (
    <svg
      width="25"
      height="14"
      viewBox="0 0 25 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16825 7.96871C4.30924 7.96871 4.42203 7.96871 4.53483 7.96871C10.8794 7.96871 17.231 7.9687 23.5756 7.9687C23.7237 7.9687 23.8788 7.9687 24.0197 7.94756C24.6119 7.84886 24.9855 7.41179 24.9996 6.81963C25.0137 6.24862 24.626 5.78335 24.0409 5.67056C23.8717 5.63531 23.7096 5.63531 23.5404 5.63531C17.2028 5.63531 10.8653 5.63531 4.52072 5.63531C4.40793 5.63531 4.29514 5.63531 4.1753 5.63531C4.1894 5.48022 4.29514 5.43087 4.36564 5.36038C5.47946 4.24655 6.59329 3.13977 7.70712 2.0189C8.30633 1.41264 8.17943 0.496196 7.46038 0.12962C7.01626 -0.103015 6.48754 -0.0184202 6.09982 0.355205C5.78964 0.651286 5.48651 0.961466 5.18338 1.2646C3.66068 2.7873 2.13798 4.31 0.615281 5.8327C0.248705 6.19927 0.0301691 6.6011 0.192309 7.13686C0.262805 7.36245 0.396746 7.54573 0.558886 7.70787C2.39177 9.54075 4.22464 11.3807 6.05752 13.2136C6.47345 13.6295 6.91757 13.7141 7.37579 13.4955C7.84106 13.277 8.11599 12.8117 8.07369 12.3042C8.04549 11.9869 7.86925 11.7473 7.65777 11.5358C6.55804 10.436 5.45831 9.33632 4.35859 8.23659C4.30219 8.16609 4.21055 8.11675 4.16825 7.96871Z"
        fill="#212121"
      />
    </svg>
  );
};

const Header: React.FC<HeaderProps> = ({ title, username }) => {
  return (
    <div className="bg-white shadow shadow-[#B6B6B61A] sticky top-0 z-10">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button className="mr-2">
            <BackArrow />{" "}
          </button>
          <h1 className="text-xl font-semibold text-[#1D1D1B]">{title}</h1>
        </div>

        <div className="flex items-center md:w-[300px] justify-between border-[#E8EFF7] border-[1px] p-1.5 rounded">
          <div className="flex items-center gap-2">
            <div className="mr-2 relative">
              <div className="bg-[#FCFCFD] rounded-full h-8 w-8 flex items-center justify-center">
                <Image
                  src={Profile}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="object-cover rounded"
                />
              </div>
            </div>
            <div>
              <div className="text-[10px] text-[#373B5C]">Welcome back,</div>
              <div className="text-sm font-medium text-[#373B5C]">
                {username}
              </div>
            </div>
          </div>
          <button className="">
            <svg
              className="h-5 w-5 text-[#1E2875]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
