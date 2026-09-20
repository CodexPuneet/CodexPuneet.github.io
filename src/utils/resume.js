/**
 * Opens the styled resume in a new tab first for instant viewing,
 * then triggers the DOCX download after a smooth delay — creating
 * a polished user experience where the user sees the resume first
 * and then receives the file download.
 */
export const handleResumeClick = (e) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  // 1. First — open the beautifully styled resume page in a new tab
  window.open('./resume.html', '_blank', 'noopener,noreferrer');

  // 2. Then — after a smooth 1.5s delay, trigger the DOCX download
  setTimeout(() => {
    const downloadLink = document.createElement('a');
    downloadLink.href = './Puneet_Srivastava_Resume.docx';
    downloadLink.setAttribute('download', 'Puneet_Srivastava_Resume.docx');
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }, 1500);
};
