const { google } = require('googleapis');
const oauth2Client = new google.auth.OAuth2(
  '399818311249-958lmfvjd2i4k2ra204ujkf1n9a5juch.apps.googleusercontent.com',
  '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',
  'http://localhost:3000/auth/google/callback'
);

const scopes = [
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/drive.metadata.readonly'
];

function getAuthUrl() {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes
  });
}

async function getToken(code) {
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  return tokens;
}

module.exports = {
  getAuthUrl,
  getToken
};
