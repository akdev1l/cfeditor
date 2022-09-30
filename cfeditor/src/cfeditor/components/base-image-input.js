import React, { useState } from 'react'
import styles from '../../../styles/CFEditor.module.css'

const supportedImages = [
  {
    name: 'fedora-toolbox',
    versions: ['37', '38'],
    installCommand: [
      'dnf', 'install', '-y',
    ],
  },
  {
    name: 'docker.io/akdev1l/ubuntu-toolbox',
    versions: ['22.04', '22.10'],
    installCommand: [
      'apt-get', 'install', '-y',
    ]

  }
];

export default function BaseImageInput({
  onBaseImageChange,
}) {
  const [selectedBaseImage, setSelectedBaseImage] = useState("fedora-toolbox:37");
  const emitBaseImageChange = (selectedInput) => {
    setSelectedBaseImage(selectedInput);
    const selectedSupportedImage = supportedImages.find((img) => (
      img.versions.some((version) => `${img.name}:${version}` == selectedInput)
    ));

    const selectedImage = {
      name: selectedSupportedImage.name,
      version: selectedInput.split(":").at(-1),
      installCommand: selectedSupportedImage.installCommand,
    };

    console.log("selected image ", selectedImage);
    onBaseImageChange(selectedImage);
  };

  return <>
    <div className={styles.cfFormField}>
      <label className={styles.cfLabel}>Base Image</label><br />
      <select className={styles.cfDropdown} name="cfData.baseImage" onChange={(e) => emitBaseImageChange(e.target.value)}>
        {supportedImages.map((img) => img.versions.map((version) => <option key={`${img.name}:${version}`} value={`${img.name}:${version}`}>{`${img.name}:${version}`}</option>))}
      </select>
    </div>
  </>
}
