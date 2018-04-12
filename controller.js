"use strict";
{
  const controller = {
    init
  };

  const reverseActions = [];

  Object.assign(self, {controller});

  function init() {
    const app = document.querySelector('main');
    app.addEventListener('click', e => {
      if ( e.target.matches('button.add') ) {
        const savedCols = JSON.parse(JSON.stringify(model.getCols()));
        const col = e.target.closest('.col');
        const text = prompt("Enter card text:");
        const card = { text };
        model.addCard(col.dataset.name, card);
        views.init();
        reverseActions.push( savedCols );
      } else if ( e.target.matches('span.arrow') ) {
        const savedCols = JSON.parse(JSON.stringify(model.getCols()));
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
        reverseActions.push( savedCols );
      } else if ( e.target.matches('button.undo') ) {
        const lastAct = reverseActions.pop();
        console.log(lastAct);
        if ( !!lastAct ) {
          model.setCols(lastAct);
          views.init();
        }
      }
    });
  }
}
