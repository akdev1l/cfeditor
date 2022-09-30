import { useState } from 'react'
import styles from '../../../styles/CFEditor.module.css'

export default function PackageListInput({
  packageList,
  onPackageListChange,
}) {
  const [newPackage, setNewPackage] = useState('');
  const [currentPackages, setCurrentPackages] = useState(packageList);
  const addPackage = (e) => {
    packageList.push(newPackage);
    setCurrentPackages(packageList);
    onPackageListChange(packageList);
    setNewPackage('')
  };
  const removePackage = (packageName) => {
    packageList = packageList.filter((pkg) => pkg != packageName);
    setCurrentPackages(packageList);
    onPackageListChange(packageList);
  };

  return (
    <div className={styles.cfFormField}>
      <label className={styles.cfLabel}>Install Packages</label><br />
      <table className={styles.cfPackageTable}>
        <thead>
          <tr>
            <th>Package Name</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type='text'
                onChange={(e) => setNewPackage(e.target.value)}
                placeholder='enter package name'
                value={newPackage} />
            </td>
            <td>
              <a href='#'
                className={styles.undecoratedLink}
                onClick={addPackage}>➕</a>
            </td>
          </tr>
          {currentPackages.map((pkg) => (
            <tr key={pkg}>
              <td>{pkg}</td>
              <td>
                <a href='#'
                  className={styles.undecoratedLink}
                  onClick={() => removePackage(pkg)}>❌</a>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot />
      </table>
    </div>
  )
}
