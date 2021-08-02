import ProtectedRoute from '../components/auth/ProtectedRoute';
import PagePlaceholder from '../components/temp/PagePlaceholder';

const MembersPage = () => {
  return (
    <ProtectedRoute>
      <PagePlaceholder pageName="Members" />
    </ProtectedRoute>
  );
};

export default MembersPage;
