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
      <div className="flex space-x-1 min-w-max">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`p-[15px] rounded-md font-semibold text-sm whitespace-nowrap ${
              activeTab === tab.name
                ? 'bg-[#1C1442] text-white'
                : 'bg-[#E7E8EF] text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name} <span className="text-[#A0A3BD]"></span>({tab.count})
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNav;