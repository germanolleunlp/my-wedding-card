import React, { useState, useEffect, useRef } from 'react';
import { JustifiedGrid } from '@egjs/grid';
import Loader from './Loader';
import DriveFolder from './DriveFolder';
import useDriveList from './useDriveList';

const { REACT_APP_GOOGLE_DRIVE_ROOT_ID: ROOT_FOLDER_ID } = process.env;
const FIELDS = 'files(id,mimeType)';
const MIME_TYPE_CONDITION = "mimeType = 'application/vnd.google-apps.folder'";

function DriveRoot() {
  const { loading, data } = useDriveList({
    parentId: ROOT_FOLDER_ID,
    conditions: [MIME_TYPE_CONDITION],
    fields: FIELDS
  });
  const [folders, setFolders] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [renderCompleted, setRenderCompleted] = useState(false);
  const ref = useRef();

  const isReady = !!completed.length && folders.length === completed.length;

  useEffect(() => {
    if (!loading && !!data?.files?.length) {
      setFolders(data?.files);
    }
  }, [loading]);

  useEffect(() => {
    if (ref?.current && isReady) {
      const grid = new JustifiedGrid(ref.current, {
        defaultDirection: 'end',
        gap: 2,
        rowRange: 0,
        columnRange: [1, 8],
        sizeRange: [200, 1000],
        isCroppedSize: false,
        displayedRow: -1
      });

      grid.on('renderComplete', () => {
        setRenderCompleted(true);
      });

      grid.renderItems();
    }
  }, [ref, isReady]);

  const onLoaded = id => {
    setCompleted([...completed, [...id]]);
  };

  return (
    <Loader show={!renderCompleted} inBackground>
      <div id="#/fotos" ref={ref}>
        {folders.map(({ id }) => (
          <DriveFolder key={id} id={id} onLoaded={onLoaded} />
        ))}
      </div>
    </Loader>
  );
}

export default DriveRoot;
