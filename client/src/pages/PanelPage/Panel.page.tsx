import { memo } from 'react';
import { useUserProfile } from '../../components/UserProfile/hooks/useUserProfile.hook';
import UserProfile from '../../components/UserProfile/UserProfile.component';

const PanelPage = memo(() => {
  const { userData, isLoading, updateProfile, isUpdating } = useUserProfile();
  
  return (
    <UserProfile 
      userData={userData}
      isLoading={isLoading}
      updateProfile={updateProfile}
      isUpdating={isUpdating}
    />
  );
});

export default PanelPage; 