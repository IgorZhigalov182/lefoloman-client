import React, { useState } from 'react';
import CardHistory from '../card-history/CardHistory';
import { Branch } from '../branches/Branches';
import { useSelector, useDispatch } from 'react-redux';

const urls = [
  {
    url: 'https://router.project-osrm.org/route/v1/driving/30.331287554442124,59.89343537130068;30.246159601442688,60.016993282293896?overview=false&alternatives=true&steps=true&hints=;KgxMgNqhIoJKAAAADQAAAAwAAAAAAAAA4APGQj7AiEFLhYlBAAAAAEoAAAANAAAADAAAAAAAAACSAQEAgYTNAdrJkwMQhc0BYcmTAwIA_w5UgoP5',
  },
  {
    url: 'https://router.project-osrm.org/route/v1/driving/30.36200511581548,59.944290091632546;30.246159601442688,60.016993282293896?overview=false&alternatives=true&steps=true&hints=;KgxMgNqhIoJKAAAADQAAAAwAAAAAAAAA4APGQj7AiEFLhYlBAAAAAEoAAAANAAAADAAAAAAAAACSAQEAgYTNAdrJkwMQhc0BYcmTAwIA_w5UgoP5',
  },
  {
    url: 'https://router.project-osrm.org/route/v1/driving/30.365421891930282,59.97382587734743;30.246159601442688,60.016993282293896?overview=false&alternatives=true&steps=true&hints=;KgxMgNqhIoJKAAAADQAAAAwAAAAAAAAA4APGQj7AiEFLhYlBAAAAAEoAAAANAAAADAAAAAAAAACSAQEAgYTNAdrJkwMQhc0BYcmTAwIA_w5UgoP5',
  },
  {
    url: 'https://router.project-osrm.org/route/v1/driving/30.34942200375161,59.90532081999996;30.246159601442688,60.016993282293896?overview=false&alternatives=true&steps=true&hints=;KgxMgNqhIoJKAAAADQAAAAwAAAAAAAAA4APGQj7AiEFLhYlBAAAAAEoAAAANAAAADAAAAAAAAACSAQEAgYTNAdrJkwMQhc0BYcmTAwIA_w5UgoP5',
  },
];

const RouteHistory = () => {
  const branches = useSelector((store) => store.state.branches);

  // const branches = JSON.parse(localStorage.getItem('visit_history'));

  //   const urls = caches.open('routesHistory').then(function (cache) {
  //     cache.keys().then(function (cachedRequests) {
  //       console.log(cachedRequests);
  //     });
  //   });

  return (
    <div>
      {branches.length ? (
        branches.map((branch, id) => <Branch key={id} branch={branch} onClick={onClick} />)
      ) : (
        <></>
      )}
    </div>
    // <div>
    //   <ul>
    //     {urls.map(({ url }) => {
    //       const regex = /([\d\.]+),([\d\.]+);([\d\.]+),([\d\.]+)/;
    //       const matches = url.match(regex);

    //       if (matches) {
    //         const [_, lat1, lng1, lat2, lng2] = matches;
    //         return (
    //           <li key={lat1}>
    //             <CardHistory key={lat1} lat1={lat1} lng1={lng1} lat2={lat2} lng2={lng2} />
    //           </li>
    //         );
    //       } else {
    //         return <li>'Координаты не найдены'</li>;
    //       }
    //     })}
    //   </ul>
    // </div>
  );
};

export default RouteHistory;
