"use strict";
{
  init();

  function init() {
    const cols = model.getCols();
    const colsHtml = cols.map( col => views.renderCol(col) ).join('\n');
    document.querySelector('main').insertAdjacentHTML('afterbegin', colsHtml );
  }
}
