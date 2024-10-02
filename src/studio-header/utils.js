import messages from './messages';

const getUserMenuItems = ({
  studioBaseUrl,
  logoutUrl,
  intl,
  isAdmin,
}) => {
  let items = [
    {
      href: `${studioBaseUrl}`,
      title: intl.formatMessage(messages['header.user.menu.studio']),
    }, {
      href: `${logoutUrl}`,
      title: intl.formatMessage(messages['header.user.menu.logout']),
    },
  ];
  if (isAdmin) {
    items = [
      {
        href: `${studioBaseUrl}`,
        title: intl.formatMessage(messages['header.user.menu.studio']),
      }, {
        href: `${studioBaseUrl}/extras/get_moodle_login_url`,
        title: intl.formatMessage(messages['header.user.menu.moodle']),
      }, {
        href: `${studioBaseUrl}/maintenance`,
        title: intl.formatMessage(messages['header.user.menu.maintenance']),
      }, {
        href: `${logoutUrl}`,
        title: intl.formatMessage(messages['header.user.menu.logout']),
      },
    ];
  }

  return items;
};

export default getUserMenuItems;
