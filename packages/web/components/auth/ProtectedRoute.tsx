import { FC } from 'react';
import useAuth from './hooks/useAuth';

const ProtectedRoute: FC = ({ children }) => {
  const { hasAccess } = useAuth();

  if (!hasAccess) {
    return (
      <div className="bg-white min-h-screen px-4 py-4 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  0xVentures
                </h1>
                <p className="mt-1 text-base text-gray-500">The Journey Just Started</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
