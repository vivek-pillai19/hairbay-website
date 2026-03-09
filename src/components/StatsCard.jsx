import React from 'react';

const StatsCard = ({ label, value }) => {
  return (
    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="text-2xl font-display font-bold mt-1 text-slate-900 dark:text-white">{value}</p>
    </div>
  );
};

export default StatsCard;
