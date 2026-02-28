import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataState: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center justify-between mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 dark:bg-meta-4">
          {children}
        </div>
        
        {rate && (
          <div
            className={`flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-bold ${
              levelUp ? "bg-success/10 text-success" : 
              levelDown ? "bg-danger/10 text-danger" : 
              "bg-gray-100 text-gray-500"
            }`}
          >
            {levelUp && (
              <svg className="fill-current" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 2.5V7.5M5 2.5L2.5 5M5 2.5L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            {levelDown && (
              <svg className="fill-current" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 7.5V2.5M5 7.5L7.5 5M5 7.5L2.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            {rate}
          </div>
        )}
      </div>

      <div>
        <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
          {total}
        </h4>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </span>
      </div>
    </div>
  );
};

export default CardDataState;
