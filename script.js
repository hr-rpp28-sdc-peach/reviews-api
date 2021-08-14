import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    // { duration: '30s', target: 1}
    // { duration: '60s', target: 10}
    // { duration: '1m30s', target: 100}
    { duration: '2m', target: 1000}
  ]
}

export default function () {
  for( var id = 28213; id < 38220; id++){
    // http.get(`http://localhost:1128/reviews/?product_id=${id}`, {
    //   tags: {name: 'getReviews'}
    // });
    http.get(`http://localhost:1128/reviews/meta/?product_id=${id}`, {
      tags: {name: 'getMeta'}
    });
  }
  sleep(1);
}