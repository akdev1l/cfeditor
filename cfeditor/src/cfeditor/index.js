import { useEffect, useState, useRef, } from 'react'
import styles from '../../styles/CFEditor.module.css'

import render from './render'

import BaseImageInput from './components/base-image-input'
import FileListInput from './components/file-list-input'
import PackageListInput from './components/package-list-input'

export default function CFEditor({
  onFileListChange,
  onBaseImageChange,
  onPackageListChange,
}) {

  const linkRef = useRef();

  const [cfData, setCfData] = useState({
    baseImage: {
      name: "fedora-toolbox",
      version: "37",
      installCommand: [
        "dnf", "install", "-y"
      ]
    },
    packages: [
      "tmux",
      "zsh",
    ],
    files: [
      {
        src: "./vimrc",
        dest: "/etc/vimrc",
      },
    ]
  });

  const [renderedOutput, setRenderedOutput] = useState(render(cfData));
  const [renderedPackages, setRenderedPackages] = useState(cfData.packages);
  const [renderedFiles, setRenderedFiles] = useState(cfData.files);
  const [renderedBaseImage, setRenderedBaseImage] = useState(cfData.baseImage);

  const updateBaseImage = (newBaseImage) => {
    console.log("updating base image");
    cfData.baseImage = newBaseImage;
    setCfData(cfData);
    setRenderedOutput(render(cfData));
  };
  const updatePackageList = (newPackageList) => {
    cfData.packages = newPackageList;
    setCfData(cfData);
    setRenderedOutput(render(cfData));
  }
  const updateFileList = (newFilesList) => {
    cfData.files = newFilesList;
    setCfData(cfData);
    setRenderedOutput(render(cfData));
  }

  return (
    <div className="content">
      <div className={styles.formColumn}>
        <form name="cfData">
          <BaseImageInput
            onBaseImageChange={updateBaseImage}
          />
          <PackageListInput
            onPackageListChange={updatePackageList}
            packageList={cfData.packages}
          />
          <FileListInput
            onFileListChange={updateFileList}
            fileList={cfData.files}
          />
        </form>
      </div>
      <div className={styles.cfOutputViewer}>
        <textarea className={styles.cfOutput} value={renderedOutput} />
        <div className={styles.cfOutputControls}>
          <a ref={linkRef}>
            <button onClick={(e) => downloadCF(cfData)}>Download File</button>
          </a>
        </div>
      </div>
    </div>
  )
}
