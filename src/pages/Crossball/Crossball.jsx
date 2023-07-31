import React from 'react'

function Crossball() {
  return (
    <div className='Crossbal'>
      <table className='table'>
        <tr className='tr__line'>
        <th className='grey'>Сезон</th>
        <th className='grey'>Кол-во игр</th>
        <th className='grey'>Гол</th>
        <th className='grey'>Пас</th>
        <th className='grey'>Гол + пас</th>
        <th className='grey'>Рейтинг</th>
        </tr>
        <tr className='tr__line'>
        <th>Сезон 2021/2020</th>
        <td>5</td>
        <td>5</td>
        <td>2</td>
        <td>1</td>
        <td className='level'>89.40</td>
        </tr>
        <tr className='tr__line'>
        <th>Сезон 2020/2019</th>
        <td>5</td>
        <td>5</td>
        <td>2</td>
        <td>1</td>
        <td className='level'>89.40</td>
        </tr>
        <tr className='tr__line'>
        <th>Сезон 2019/2018</th>
        <td>5</td>
        <td>5</td>
        <td>2</td>
        <td>1</td>
        <td className='level'>89.40</td>
        </tr>
        <tr className='tr__line'>
        <th>Сезон 2018/2017</th>
        <td>5</td>
        <td>5</td>
        <td>2</td>
        <td>1</td>
        <td className='level'>89.40</td>
        </tr>
        <tr className='tr__line'>
        <th>Сезон 2017/2016</th>
        <td>5</td>
        <td>5</td>
        <td>2</td>
        <td>1</td>
        <td className='level'>89.40</td>
        </tr>
      </table>
    </div>
  )
}

export default Crossball;