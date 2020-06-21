import React from 'react';

function BingoCard(props) {
  const getRandomNumber = (min, max) => {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
  };

  const createArrayOfNumbers = (start, end) => {
    let myArray = [];
    for (let i = start; i <= end; i++) {
      myArray.push(i);
    }
    return myArray;
  };

  let B = createArrayOfNumbers(1, 15);
  let I = createArrayOfNumbers(16, 30);
  let N = createArrayOfNumbers(31, 45);
  let G = createArrayOfNumbers(46, 60);
  let O = createArrayOfNumbers(61, 75);

  const splicingArray = (array) => {
    console.log(B);
    let randomIndex = getRandomNumber(0, array.length - 1);
    let randomNumber = array[randomIndex];
    array.splice(randomIndex, 1);

    return randomNumber;
  };
  return (
    <>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope='col'>B</th>
            <th scope='col'>I</th>
            <th scope='col'>N</th>
            <th scope='col'>G</th>
            <th scope='col'>O</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='table-primary'>{splicingArray(B)}</td>
            <td className='table-primary'>{splicingArray(I)}</td>
            <td className='table-primary'>{splicingArray(N)}</td>
            <td className='table-primary'>{splicingArray(G)}</td>
            <td className='table-primary'>{splicingArray(O)}</td>
          </tr>
          <tr>
            <td className='table-primary'>{splicingArray(B)}</td>
            <td className='table-primary'>{splicingArray(I)}</td>
            <td className='table-primary'>{splicingArray(N)}</td>
            <td className='table-primary'>{splicingArray(G)}</td>
            <td className='table-primary'>{splicingArray(O)}</td>
          </tr>
          <tr>
            <td className='table-primary'>{splicingArray(B)}</td>
            <td className='table-primary'>{splicingArray(I)}</td>
            <td className='table-primary'>Free Space</td>
            <td className='table-primary'>{splicingArray(G)}</td>
            <td className='table-primary'>{splicingArray(O)}</td>
          </tr>
          <tr>
            <td className='table-primary'>{splicingArray(B)}</td>
            <td className='table-primary'>{splicingArray(I)}</td>
            <td className='table-primary'>{splicingArray(N)}</td>
            <td className='table-primary'>{splicingArray(G)}</td>
            <td className='table-primary'>{splicingArray(O)}</td>
          </tr>
          <tr>
            <td className='table-primary'>{splicingArray(B)}</td>
            <td className='table-primary'>{splicingArray(I)}</td>
            <td className='table-primary'>{splicingArray(N)}</td>
            <td className='table-primary'>{splicingArray(G)}</td>
            <td className='table-primary'>{splicingArray(O)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default BingoCard;
