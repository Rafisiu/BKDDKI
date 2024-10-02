import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="flex items-center justify-between rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-col">
        <h4 className="mb-3 text-title-md font-bold text-black dark:text-white">
          {total}
        </h4>
        <span className="text-sm font-bold">{title}</span>
      </div>

      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>
    </div>
  );
};

export default CardDataStats;
