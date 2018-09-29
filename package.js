Package.describe({
  name: 'apinf:accounts-fiware',
  version: '0.1.2',
  summary: 'OAuth2 for Fiware IDM',
  git: 'https://github.com/apinf/apinf-accounts-fiware',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('apinf:fiware@0.2.0', ['client', 'server']);

  api.addFiles('accounts-fiware_login_button.css', 'client');

  api.addFiles('accounts-fiware.js');
});
