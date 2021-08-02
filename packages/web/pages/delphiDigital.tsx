import ProtectedRoute from '../components/auth/ProtectedRoute';
import PagePlaceholder from '../components/temp/PagePlaceholder';

const DelphiDigitalPage = () => {
  return (
    <ProtectedRoute>
      <PagePlaceholder pageName="Delphi digital" />
    </ProtectedRoute>
  );
};

export default DelphiDigitalPage;
