import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useDriveList from './useDriveList';

const FIELDS = 'files(id,thumbnailLink,name,webContentLink,webViewLink)';
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

  const onClick = event => {
    window.open(event.target.dataset.webViewLink);
  };

  return (
    <>
      {files.map(
        ({ id: fileId, thumbnailLink, name, webContentLink, webViewLink }) => (
          <Image
            key={fileId}
            title={name}
            src={thumbnailLink}
            alt={name}
            onClick={onClick}
            data-web-content-link={webContentLink}
            data-web-view-link={webViewLink}
          />
        )
      )}
    </>
  );
}

const Image = styled.img`
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.5s ease-out;
  &:hover {
    opacity: 0.5;
  }
`;

export default DriveFolder;
