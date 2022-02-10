import React, {useCallback, useState} from 'react';
import {AppProvider, TopBar} from '@shopify/polaris';
import { useNavigate } from 'react-router';
// import Admin from '../user/role/Admin';

export default function TopBarExample() {
  let navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    [],
  );

  const handleNavigationToggle = useCallback(() => {
    console.log('toggle navigation visibility');
  }, []);

  const theme = {
    logo: {
      width: 80,
      topBarSource:
        'https://cliply.co/wp-content/uploads/2021/07/392107260_SUNGLASSES_EMOJI_400px.gif',
      url: 'http://www.google.com',
      accessibilityLabel: 'My App',
    },
  };

  const handleAdminAction = () => {
    navigate('/admin');
  };

  const handleUserAction = () => {
    navigate('/user');
  };

  const handleTraineeAction = () => {
    navigate('/trainee');
  };

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{content: 'Admin', onAction: handleAdminAction}],
        },
        {
          items: [{content: 'User', onAction: handleUserAction}],
        },
        {
          items: [{content: 'Trainee', onAction: handleTraineeAction}],
        },
      ]}
      initials="ND"
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );


  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={handleNavigationToggle}
    />
  );

  return (
    <div style={{height: '80px'}}>
      <AppProvider
        theme={theme}
        i18n={{
          Polaris: {
            Avatar: {
              label: 'Avatar',
              labelWithInitials: 'Avatar with initials {initials}',
            },
            TopBar: {
              toggleMenuLabel: 'Toggle menu',
              SearchField: {
                clearButtonLabel: 'Clear',
                search: 'Search',
              },
            },
          },
        }}
      >
        
        {/* <Frame topBar={topBarMarkup} /> */}
        {topBarMarkup}
      </AppProvider>
    </div>
  );
}
