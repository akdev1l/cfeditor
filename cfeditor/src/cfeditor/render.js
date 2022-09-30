export default function render(cfData) {
  const installCmd = cfData.baseImage.installCommand.join(" ");
  const output = [
    `FROM ${cfData.baseImage.name}:${cfData.baseImage.version}`,
    '',
  ];

  if(cfData.packages.length > 0) {
    const formattedPackages = cfData.packages
      .slice(0, -1)
      .map((pkg) => `    ${pkg} \\`);
    formattedPackages.push(`    ${cfData.packages.at(-1)}`);

    output.push(`RUN ${installCmd} \\`);
    output.push(...formattedPackages, '');
  }

  if(cfData.files.length > 0) {
    const copyString = cfData.files.map((f) => `COPY ${f.src} ${f.dest}`);
      
    output.push(...copyString, '');
  }

  return output.join('\n');
}
