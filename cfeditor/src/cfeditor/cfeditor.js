import { useState } from 'react';

import Head from 'next/head'

export default function CFEditor({
  onFileListChange,
  onPackageListChange,
  onBaseImageChange,
  cfData,
}) {
  const updateBaseImage = (newBaseImage) => {
    cfData.baseImage = newBaseImage;
    console.log("setting cfData");
    setCfData(cfData);
  };
  const updatePackageList = (newPackageList) => {
    cfData.packages = newPackageList;
    setCfData(cfData);
  }
  const updateFileList = (newFilesList) => {
    cfData.files = newFilesList;
    setCfData(cfData);
  }

  return (
    <div>
    </div>
  )
}
