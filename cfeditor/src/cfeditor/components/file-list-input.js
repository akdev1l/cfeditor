import { useState } from 'react'
import styles from '../../../styles/CFEditor.module.css'

export default function FileListInput({
  fileList,
  onFileListChange,
}) {
  const [newFileSrc, setNewFileSrc] = useState("");
  const [newFileDest, setNewFileDest] = useState("");

  const [currentFiles, setCurrentFiles] = useState(fileList);

  const addFile = (e) => {
    fileList.push({
      src: newFileSrc,
      dest: newFileDest,
    });
    onFileListChange(fileList);
    setCurrentFiles(fileList);
    console.log(e);
  };
  const removeFile = (fileToRemove) => {
    fileList = fileList.filter((f) => !(f.src == fileToRemove.src && f.dest == fileToRemove.dest));
    onFileListChange(fileList);
    setCurrentFiles(fileList);
  };

  return (
    <div className={styles.cfFormField}>
      <label className={styles.cfLabel}>Inject Files</label><br />
      <table className={styles.cfPackageTable}>
        <thead>
          <tr>
            <th className={styles.cfFilePathInput}>Src Path</th>
            <th className={styles.cfFilePathInput}>Dest Path</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.cfFilePathInput}>
              <input type='text'
                onChange={(e) => setNewFileSrc(e.target.value)}
                placeholder='source path'
                value={newFileSrc} />
            </td>
            <td className={styles.cfFilePathInput}>
              <input type='text'
                onChange={(e) => setNewFileDest(e.target.value)}
                placeholder='destination path'
                value={newFileDest} />
            </td>
            <td>
              <a href='#'
                className={styles.undecoratedLink}
                onClick={addFile}>➕</a>
            </td>
          </tr>
          {currentFiles.map((f) => (
            <tr key={`${f.src}:${f.dest}`}>
              <td>{f.src}</td>
              <td>{f.dest}</td>
              <td>
              <a href='#'
                className={styles.undecoratedLink}
                onClick={() => removeFile(f)}>❌</a>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot />
      </table>
    </div>
  )
}
