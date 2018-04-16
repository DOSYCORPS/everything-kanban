"use strict";
{
  const model = {
    setCols, getCols, addCard, reset
  };

  const startingCols = [
    {
      name: 'Ideas',
      cards: [
        {
          text: 'Come up with some ideas.'
        }
      ]
    },
    {
      name: 'To Do',
      cards: [
        {
          text: 'That side project'
        },
        {
          text: 'Quit my job'
        }
      ]
    },
    {
      name: 'In Progress',
      cards: [
        {
          text: 'Life. It happens.'
        },
        {
          text: 'Goals.'
        }
      ]
    },
    {
      name: 'Done',
      cards: [
        {
          text: 'Immaturity.'
        },
        {
          text: 'Discontent.'
        }
      ]
    }
  ];

  Object.assign(self, {model});

  function reset() {
    setCols(startingCols);
  }

  function setCols(cols) {
    localStorage.setItem("cols", JSON.stringify(cols) );
  }

  function getCols() {
    let colsText = localStorage.getItem("cols");
    if ( ! colsText ) {
      setCols(startingCols);
      colsText = localStorage.getItem("cols");
    }
    const cols = JSON.parse(colsText);
    return cols;
  }

  function addCard( colName, card ) {
    const cols = getCols();
    const col = cols.find( col => col.name == colName );
    if ( ! col ) {
      throw new TypeError('No such col' + colName );
    }
    console.log(col,cols);
    col.cards.push(card);
    setCols(cols);
  }
}
