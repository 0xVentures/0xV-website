import Dashboard from '../components/dashboard';
import ProtectedRoute from '../components/auth/ProtectedRoute';

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  );
};

export default DashboardPage;
