/**
 * Triggers simultaneous DOCX download and opens DOCX resume in a new tab.
 */
export const handleResumeClick = (e) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  // 1. Trigger DOCX file download
  const downloadLink = document.createElement('a');
  downloadLink.href = './Puneet_Srivastava_Resume.docx';
  downloadLink.setAttribute('download', 'Puneet_Srivastava_Resume.docx');
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  // 2. Open DOCX file in a new browser tab
  window.open('./Puneet_Srivastava_Resume.docx', '_blank', 'noopener,noreferrer');
};
