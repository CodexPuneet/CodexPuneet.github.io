/**
 * Triggers simultaneous DOCX download and opens the updated resume in a new browser tab.
 * Note: Browsers cannot render .docx directly in a tab (it results in a blank tab and duplicate download).
 * We open the updated resume PDF for in-browser viewing while downloading the DOCX file.
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

  // 2. Open updated resume PDF in a new browser tab for viewing
  window.open('./Puneet_Srivastava_Resume.pdf', '_blank', 'noopener,noreferrer');
};

