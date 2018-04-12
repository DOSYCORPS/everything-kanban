"use strict";
{
  const controller = {
    init
  };

  Object.assign(self, {controller});

  function init() {
    const app = document.querySelector('main');
    app.addEventListener('click', e => {
      if ( e.target.matches('button') ) {
        const col = e.target.closest('.col');
        const text = prompt("Enter card text:");
        const card = { text };
        model.addCard(col.dataset.name, card);
        views.init();
      } else if ( e.target.matches('span.arrow') ) {
        const cardEl = e.target.closest('.card');
        const cardIndex = Array.from(cardEl.parentElement.children).findIndex( c => c == cardEl );

        const dir = e.target.classList.contains('left') ? -1 : 1;
        const col = e.target.closest('.col');
        const cols = model.getCols();
        const colIndex = cols.findIndex( c => c.name == col.dataset.name );
        const currentCol = cols[colIndex];
        const card = currentCol.cards[cardIndex];
        currentCol.cards.splice( cardIndex, 1 );
        const newCardIndex = colIndex + dir;
        const newCol = cols[newCardIndex];
        newCol.cards.push(card);
        model.setCols(cols);
        views.init();
      }
    });
  }
}
