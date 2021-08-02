import ProtectedRoute from '../components/auth/ProtectedRoute';
import PagePlaceholder from '../components/temp/PagePlaceholder';

const TreasuryPage = () => {
  return (
    <ProtectedRoute>
      <PagePlaceholder pageName="Treasury" />
    </ProtectedRoute>
  );
};

export default TreasuryPage;
