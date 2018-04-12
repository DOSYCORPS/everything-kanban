"use strict";
{
  const model = {
    setCols, getCols, addCard
  };

  const startingCols = [
    {
      name: 'Winnie',
      cards: [
        {
          text: 'Abc'
        },
        {
          text: 'def'
        }
      ]
    },
    {
      name: 'Honey',
      cards: [
        {
          text: 'Abc'
        },
        {
          text: 'def'
        }
      ]
    },
    {
      name: 'Poo',
      cards: [
        {
          text: 'Abc'
        },
        {
          text: 'def'
        }
      ]
    },
    {
      name: 'Mix',
      cards: [
        {
          text: 'Abc'
        },
        {
          text: 'def'
        }
      ]
    }
  ];

  Object.assign(self, {model});

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
