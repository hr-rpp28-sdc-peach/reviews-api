module.exports.reviews = {

  // sample from learn
  "product": "2",
  "page": 0,
  "count": 5,
  "results": [
    {
      "review_id": 5,
      "rating": 3,
      "summary": "I'm enjoying wearing these shades",
      "recommend": false,
      "response": null,
      "body": "Comfortable and practical.",
      "date": "2019-04-14T00:00:00.000Z",
      "reviewer_name": "shortandsweeet",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/review_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/review_5_photo_number_2.jpg"
        },
        // ...
      ]
    },
    {
      "review_id": 3,
      "rating": 4,
      "summary": "I am liking these glasses",
      "recommend": false,
      "response": "Glad you're enjoying the product!",
      "body": "They are very dark. But that's good because I'm in very sunny spots",
      "date": "2019-06-23T00:00:00.000Z",
      "reviewer_name": "bigbrotherbenjamin",
      "helpfulness": 5,
      "photos": [],
    }
  ]
}

module.exports.meta = {
  "product_id": "2",
  "ratings": {
    2: 1,
    3: 1,
    4: 2,
    // ...
  },
  "recommended": {
    0: 5
    // ...
  },
  "characteristics": {
    "Size": {
      "id": 14,
      "value": "4.0000"
    },
    "Width": {
      "id": 15,
      "value": "3.5000"
    },
    "Comfort": {
      "id": 16,
      "value": "4.0000"
    },
    // ...
}

// current response from my API for product 28218

{
  "product": "28218",
  "page": 0,
  "count": 5,
  "results": [
      {
          "review_id": 162483,
          "rating": 4,
          "summary": "Recusandae quis quasi eum totam nam corrupti possimus suscipit eius.",
          "response": "null",
          "body": "Ex qui deleniti beatae molestias culpa et et in. Facere voluptas veniam rerum rerum alias qui illo dolorem. Quae vel et.",
          "date": "2020-11-18T00:18:35.460Z",
          "reviewer_name": "Catherine59",
          "helpfulness": 10,
          "photos": []
      },
      {
          "review_id": 162484,
          "rating": 1,
          "summary": "Et nemo numquam numquam eius.",
          "response": "null",
          "body": "Accusantium quis omnis quo nulla et. Asperiores consequatur quas omnis ut sed autem non. Explicabo aut beatae corrupti fugiat temporibus deleniti. Numquam amet accusamus vero vitae atque quis. Nihil eum optio voluptatibus quisquam voluptas occaecati sed. Dolor occaecati dolorem quia non occaecati quae.",
          "date": "2020-12-06T13:16:39.850Z",
          "reviewer_name": "Clay11",
          "helpfulness": 25,
          "photos": []
      },
      {
          "review_id": 162485,
          "rating": 3,
          "summary": "Consectetur iure fugit necessitatibus maiores.",
          "response": "null",
          "body": "Provident corrupti perspiciatis ipsa exercitationem maxime voluptatem. Illo tempore eligendi doloremque nesciunt a. Magni qui mollitia.",
          "date": "2021-03-23T07:35:38.981Z",
          "reviewer_name": "Leopold.Heller",
          "helpfulness": 6,
          "photos": []
      },
      {
          "review_id": 162486,
          "rating": 2,
          "summary": "Dolorem quasi blanditiis est minus est soluta.",
          "response": "null",
          "body": "Eos esse molestiae dolorem amet voluptatem commodi. Dignissimos ut maiores sint ullam possimus sunt ipsa. Libero neque sapiente vitae ab vel deleniti. In deleniti inventore sint est totam sed sed doloribus dolor. Earum consequatur beatae.",
          "date": "2020-09-06T22:45:57.360Z",
          "reviewer_name": "Hilbert.Gibson3",
          "helpfulness": 23,
          "photos": []
      }
  ]
}

// results from actual API for product 28218
{
  "product": "28218",
  "page": 0,
  "count": 5,
  "results": [
      {
          "review_id": 407554,
          "rating": 5,
          "summary": "Ye is good at everything",
          "recommend": true,
          "response": "",
          "body": "I mortgaged my house to pay for these",
          "date": "2018-12-13T00:00:00.000Z",
          "reviewer_name": "yecrazy",
          "helpfulness": 2,
          "photos": []
      }
  ]
}