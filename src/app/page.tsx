import Sidebar from "@/components/SideBar";
import Stories from "@/components/Stories";
import { Story } from "@/components/Storycard";

export default function Home() {
  const stories: Story[] = [
    {
      id: 1,
      title: "How 7 lines code turned into $36 Billion Empire",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
      imageSrc: "/images/story1.jpg",
      views: 428,
    },
    {
      id: 2,
      title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Created",
      imageSrc: "/images/story2.jpg",
      views: 428,
    },
    {
      id: 3,
      title: "Teknion wins Gold at 2022 International Design Awards",
      category: "Politics",
      date: "20 Sep 2022",
      status: "Draft",
      imageSrc: "/images/story3.jpg",
      views: 428,
    },
    // Duplicate stories for the grid
    {
      id: 4,
      title: "How 7 lines code turned into $36 Billion Empire",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
      imageSrc: "/images/story1.jpg",
      views: 428,
    },
    {
      id: 5,
      title: "How 7 lines code turned into $36 Billion Empire",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
      imageSrc: "/images/story4.jpg",
      views: 428,
    },
    {
      id: 6,
      title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
      imageSrc: "/images/story5.jpg",
      views: 428,
    },
    {
      id: 7,
      title: "Teknion wins Gold at 2022 International Design Awards",
      category: "Politics",
      date: "20 Sep 2022",
      status: "Published",
      imageSrc: "/images/story6.jpg",
      views: 428,
    },
    {
      id: 8,
      title: "How 7 lines code turned into $36 Billion Empire",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
      imageSrc: "/images/story4.jpg",
      views: 428,
    },
  ];
  return (
    <div>
      <Sidebar />
      <Stories stories={stories} />
    </div>
  );
}
