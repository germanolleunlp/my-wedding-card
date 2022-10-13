import React, { useState, useEffect } from 'react';
import useDriveList from './useDriveList';

const FIELDS = 'files(id,thumbnailLink,name)';
const MIME_TYPE_CONDITION =
  "(mimeType contains 'image/' or mimeType contains 'video/')";

function DriveFolder({ id, onLoaded }) {
  const { loading, data } = useDriveList({
    parentId: id,
    conditions: [MIME_TYPE_CONDITION],
    fields: FIELDS
  });
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (!loading && !!data?.files?.length) {
      setFiles(data?.files);
      onLoaded(id);
    }
  }, [loading]);

  return (
    <>
      {files.map(({ id: fileId, thumbnailLink, name }) => (
        <img key={fileId} title={name} src={thumbnailLink} alt={name} />
      ))}
    </>
  );
}

export default DriveFolder;
