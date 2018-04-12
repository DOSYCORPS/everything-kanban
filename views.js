"use strict";
{
  const views = {
    renderCol
  };

  Object.assign(self, {views});

  function renderCol(col) {
    return `
      <article class=col>
        <header>${col.name}</header>
        <section class=cards>
          ${ col.cards.map( card => `
            <article class=card>${card.text}</article>
          ` ).join('\n') }
        </section>
      </article>
    `;
  }
}
