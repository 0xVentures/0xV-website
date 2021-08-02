import ProtectedRoute from '../components/auth/ProtectedRoute';
import PagePlaceholder from '../components/temp/PagePlaceholder';

const PrivateSalesPage = () => {
  return (
    <ProtectedRoute>
      <PagePlaceholder pageName="Private sales" />
    </ProtectedRoute>
  );
};

export default PrivateSalesPage;
