import React from 'react';

import { StatsGrid } from '../components/StatsGrid';
import { ProgressChart } from '../components/ProgressChart';
import { DailyGoalCard } from '../components/DailyGoalCard';
import { AssignmentsDueCard } from '../components/AssignmentsDueCard';
import { AnnouncementsCard } from '../components/AnnouncementsCard';
import { ClassOverviewCard } from '../components/ClassOverviewCard';

export const DashboardHomePage: React.FC = () => {
  return (
    <>
      <div className="w-full px-4 py-8 md:px-8 md:py-12 lg:px-16 xl:px-24">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 transition-colors">
            Chào mừng trở lại! 👋
          </h1>
          <p className="text-gray-500 dark:text-slate-400 text-sm md:text-base transition-colors">
            Hãy xem tiến độ học tập hôm nay của bạn nhé.
          </p>
        </div>

        <StatsGrid />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-1">
            <AssignmentsDueCard />
          </div>
          <div className="lg:col-span-1">
            <AnnouncementsCard />
          </div>
          <div className="lg:col-span-1">
            <ClassOverviewCard />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <DailyGoalCard />
          </div>
          <div className="lg:col-span-2">
            <ProgressChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHomePage;
