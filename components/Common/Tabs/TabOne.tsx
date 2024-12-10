'use client';
import React from 'react';
import { Tabs, Tab } from "@nextui-org/tabs";
import { HeadingOne } from '../Headings/HeadingOne';

interface TabItem {
  key: string;
  title: string;
  content: React.ReactNode;
}

interface TabOneProps {
  tabsData: TabItem[];
  tabHeading: string 
}

const TabOne: React.FC<TabOneProps> = ({ tabsData, tabHeading }) => {
  return (
    <div className=''>
      <HeadingOne className='text-center '>{tabHeading}</HeadingOne>
      <Tabs
        aria-label="Events Options"
        color="primary"
        variant="underlined"
        className=""
        classNames={{
          tabList: " gap-5 lg:gap-6 w-full relative rounded-none p-0 flex-wrap pb-2 ",
          cursor: "w-full bg-primary",
          tab: "max-w-fit h-8 lg:h-12  text-xs lg:text-lg px-3 font-medium uppercase tracking-wide ",
          tabContent: "group-data-[selected=true]:text-primary text-white hover:text-primary",
        }}
      >
        {tabsData.map((tab) => (
          <Tab key={tab.key} title={tab.title} className='p-0'>
            {tab.content}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default TabOne;
