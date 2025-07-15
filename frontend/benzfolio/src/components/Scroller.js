import React from 'react';

export default function Scroller({ children }) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex space-x-6 px-2 py-4">
        {children}
      </div>
    </div>
  );
}