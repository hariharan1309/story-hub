import React from "react";
import Image from "next/image";

export type Story = {
  id: number;
  title: string;
  category: string;
  date: string;
  status: "Published" | "Created" | "Draft";
  imageSrc: string;
  views: number;
};

type StoryCardProps = {
  story: Story;
};
const EyeIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99999 3C4.66666 3 1.81999 5.07333 0.666656 8C1.81999 10.9267 4.66666 13 7.99999 13C11.3333 13 14.18 10.9267 15.3333 8C14.18 5.07333 11.3333 3 7.99999 3ZM7.99999 11.3333C6.15999 11.3333 4.66666 9.84 4.66666 8C4.66666 6.16 6.15999 4.66667 7.99999 4.66667C9.83999 4.66667 11.3333 6.16 11.3333 8C11.3333 9.84 9.83999 11.3333 7.99999 11.3333ZM7.99999 6C6.89332 6 5.99999 6.89333 5.99999 8C5.99999 9.10667 6.89332 10 7.99999 10C9.10666 10 9.99999 9.10667 9.99999 8C9.99999 6.89333 9.10666 6 7.99999 6Z"
        fill="#1C1442"
      />
    </svg>
  );
};
const ChartIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.58667 12.6C4.31334 12.6 4.08667 12.3733 4.08667 12.1V10.72C4.08667 10.4466 4.31334 10.22 4.58667 10.22C4.86 10.22 5.08667 10.4466 5.08667 10.72V12.1C5.08667 12.38 4.86 12.6 4.58667 12.6Z"
        fill="#1C1442"
      />
      <path
        d="M8 12.6C7.72667 12.6 7.5 12.3733 7.5 12.1V9.33331C7.5 9.05998 7.72667 8.83331 8 8.83331C8.27333 8.83331 8.5 9.05998 8.5 9.33331V12.1C8.5 12.38 8.27333 12.6 8 12.6Z"
        fill="#1C1442"
      />
      <path
        d="M11.4133 12.6C11.14 12.6 10.9133 12.3733 10.9133 12.1V7.95331C10.9133 7.67997 11.14 7.45331 11.4133 7.45331C11.6867 7.45331 11.9133 7.67997 11.9133 7.95331V12.1C11.9133 12.38 11.6933 12.6 11.4133 12.6Z"
        fill="#1C1442"
      />
      <path
        d="M4.58665 8.78669C4.35999 8.78669 4.15999 8.63336 4.09999 8.40669C4.03332 8.14003 4.19332 7.86669 4.46665 7.80003C6.91999 7.18669 9.07999 5.84669 10.7267 3.93336L11.0333 3.57336C11.2133 3.36669 11.5267 3.34003 11.74 3.52003C11.9467 3.70003 11.9733 4.01336 11.7933 4.22669L11.4867 4.58669C9.70665 6.66669 7.35999 8.11336 4.70665 8.77336C4.66665 8.78669 4.62665 8.78669 4.58665 8.78669Z"
        fill="#1C1442"
      />
      <path
        d="M11.4133 6.34669C11.14 6.34669 10.9133 6.12002 10.9133 5.84669V4.40002H9.45999C9.18666 4.40002 8.95999 4.17336 8.95999 3.90002C8.95999 3.62669 9.18666 3.40002 9.45999 3.40002H11.4133C11.6867 3.40002 11.9133 3.62669 11.9133 3.90002V5.85336C11.9133 6.12669 11.6933 6.34669 11.4133 6.34669Z"
        fill="#1C1442"
      />
      <path
        d="M10 15.1666H6.00001C2.38001 15.1666 0.833344 13.62 0.833344 9.99998V5.99998C0.833344 2.37998 2.38001 0.833313 6.00001 0.833313H10C13.62 0.833313 15.1667 2.37998 15.1667 5.99998V9.99998C15.1667 13.62 13.62 15.1666 10 15.1666ZM6.00001 1.83331C2.92668 1.83331 1.83334 2.92665 1.83334 5.99998V9.99998C1.83334 13.0733 2.92668 14.1666 6.00001 14.1666H10C13.0733 14.1666 14.1667 13.0733 14.1667 9.99998V5.99998C14.1667 2.92665 13.0733 1.83331 10 1.83331H6.00001Z"
        fill="#1C1442"
      />
    </svg>
  );
};

const DotIcon = () => {
  return (
    <svg
      width="21"
      height="7"
      viewBox="0 0 21 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3.2124" cy="3.50002" r="2.915" fill="#1C1442" />
      <circle cx="10.4996" cy="3.50002" r="2.915" fill="#1C1442" />
      <circle cx="17.7876" cy="3.50002" r="2.915" fill="#1C1442" />
    </svg>
  );
};
const Storycard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow">
      <div className="relative h-[max(calc(50vh),500px)]">
        <div className="bg-gray-200 h-full">
          <Image
            src={story.imageSrc}
            alt={story.title}
            width={340}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="z-[1000] absolute top-3 right-3 flex space-x-1">
          <div className="bg-white/90 rounded-md px-2.5 py-[5px] gap-1 flex items-center">
            <EyeIcon />
            <span className="text-xs text-gray-800">{story.views}</span>
          </div>
          <button className="bg-white/90 rounded-md px-2.5 py-[5px]">
            <ChartIcon />
          </button>
        </div>
        <div className=" z-[1000] absolute bottom-2 left-2">
          <div className="p-2">
            <h3 className="text-lg font-medium mb-1">{story.title}</h3>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center text-sm">
                <span className="text-gray-200 font-bold mr-2">
                  {story.category} •
                </span>
                <span className="text-[#A0A3BD]">{story.date}</span>
              </div>
              <div>
                <span
                  className={`px-5 py-2.5 text-xs rounded-[5px] ${
                    story.status === "Published"
                      ? "bg-green-100 text-[#0DAD82]"
                      : story.status === "Created"
                      ? "bg-blue-100 text-[#58A4FF]"
                      : "bg-gray-100 text-[#A0A3BD]"
                  }`}
                >
                  {story.status}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-evenly">
            <button className=" h-[55px] px-[25%] rounded-[10px] font-medium flex items-center justify-center text-[#1C1442] bg-gray-100">
              View
            </button>
            <button className=" h-[53px] p-[15px] rounded-[10px] flex items-center justify-center text-[#1C1442] bg-gray-100">
              <DotIcon />
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full rounded-lg bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.7)]"></div>
      </div>
    </div>
  );
};

export default Storycard;
