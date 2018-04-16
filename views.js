"use strict";
{
  const views = {
    renderCol, init
  };

  Object.assign(self, {views});

  function init() {
    const cols = model.getCols();
    const colsHtml = cols.map( col => views.renderCol(col) ).join('\n');
    const main = document.querySelector('main');
    main.innerHTML = colsHtml;
  }

  function renderCol(col) {
    return `
      <article class=col data-name="${col.name}">
        <header>${col.name}</header>
        <section class=cards>
          ${ col.cards.map( card => `
            <article class=card data-text="${card.text}">
              <span class="left arrow">&lt;</span>
              ${card.text}
              <span class="right arrow">&gt;</span>
            </article>
          ` ).join('\n') }
        </section>
        <section class=control>
          <button class=add>+ Add a card</button>
        </section>
      </article>
    `;
  }
}
