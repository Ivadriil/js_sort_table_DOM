'use strict';

const tableBody = document.querySelector('tbody');
const headTable = document.querySelector('thead');

headTable.addEventListener('click', (e) => {
  const link = e.target.closest('th');

  if (!link) {
    return;
  }

  const rows = Array.from(tableBody.querySelectorAll('tr'));

  sortRows(rows, link.cellIndex);

  function sortRows(listenrs, cellIndex) {
    listenrs.sort((a, b) => {
      let argA = a.children[cellIndex].textContent.trim();
      let argB = b.children[cellIndex].textContent.trim();

      if (link.cellIndex > 1) {
        argA = Number(argA.replace(/[$,]/g, ''));
        argB = Number(argB.replace(/[$,]/g, ''));

        return argA - argB;
      } else {
        return argA.localeCompare(argB);
      }
    });
    tableBody.append(...listenrs);
  }
});
