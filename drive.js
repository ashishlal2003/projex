const { google } = require('googleapis');

function createFolder(name) {
  const drive = google.drive({ version: 'v3', auth: oauth2Client });
  const fileMetadata = {
    name,
    mimeType: 'application/vnd.google-apps.folder'
  };
  return drive.files.create({
    resource: fileMetadata,
    fields: 'id'
  });
}

function uploadFile(name, mimeType, parentId, data) {
  const drive = google.drive({ version: 'v3', auth: oauth2Client });
  const fileMetadata = {
    name,
    parents: [parentId]
  };
  const media = {
    mimeType,
    body: data
  };
  return drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: 'id'
  });
}

function getFileUrl(fileId) {
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

module.exports = {
  createFolder,
  uploadFile,
  getFileUrl
};
