import ProtectedRoute from '../components/auth/ProtectedRoute';
import PagePlaceholder from '../components/temp/PagePlaceholder';

const ToolsPage = () => {
  return (
    <ProtectedRoute>
      <PagePlaceholder pageName="Tools" />
    </ProtectedRoute>
  );
};

export default ToolsPage;
