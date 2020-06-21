import React from 'react';

function Cell({
  value,
  onClick,
  isPeer,
  isSelected,
  sameValue,
  prefilled,
  notes,
  conflict,
}) {
  const backgroudColor = getBackGroundColor({
    conflict,
    isPeer,
    sameValue,
    isSelected,
  });

  const fontColor = getFontColor({ conflict, prefilled, value });

  return (
    <div className='cell' onClick={onClick}>
      {notes
        ? range(9).map((i) => (
            <div key={i} className='note-number'>
              {notes.has(i + 1) && i + 1}
            </div>
          ))
        : value && value}
      {/* language=CSS */}
      <style jsx>{CellStyle}</style>
      <style jsx>
        {`
          .cell {
            background-color: ${backgroundColor || 'initial'};
            color: ${fontColor || 'initial'};
          }
        `}
      </style>
    </div>
  );
}

export default Cell;
