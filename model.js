"use strict";
{
  const model = {
    getCols
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
}
