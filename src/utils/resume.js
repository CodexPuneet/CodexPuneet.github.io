/**
 * Triggers simultaneous DOCX download and opens PDF resume in a new tab for viewing.
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

  // 2. Open PDF in a new browser tab for immediate visual inspection
  window.open('./Puneet_Srivastava_Resume.pdf', '_blank', 'noopener,noreferrer');
};
