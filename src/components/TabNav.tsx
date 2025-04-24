type Tab = {
  name: string;
  count: number;
};

type TabNavProps = {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tabName: string) => void;
};

const TabNav: React.FC<TabNavProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="mb-6 overflow-x-auto">
      <div className="flex space-x-2 min-w-max">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`p-[15px] rounded-[10px] font-semibold space-x-1 whitespace-nowrap ${
              activeTab === tab.name
                ? "bg-[#1C1442] text-white"
                : "bg-[#E7E8EF] text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            <span>{tab.name}</span>
            <span
              className={`${
                activeTab === tab.name ? "text-white" : "!text-[#A0A3BD]"
              }`}
            >
              ({tab.count})
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNav;
