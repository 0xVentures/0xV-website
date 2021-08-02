import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import Button from '../ui/Button';

const Dashboard: FC = () => {
  const [content, setContent] = useState('Loading data from server...');

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const { data } = await axios.get('/dashboard');
        setContent(data);
      } catch (e) {
        setContent("This route is protected make sure you're using whitelisted wallet");
      }
    };
    loadDashboard();
  }, []);

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Replace with real content */}
          <div className="py-4">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex justify-center items-center">
              <p className="mt-1 text-base text-gray-500">{content}</p>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
