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

// results from actual API for product 28223
{
  "product": "28223",
  "page": 0,
  "count": 5,
  "results": [
      {
          "review_id": 407558,
          "rating": 3,
          "summary": "Officia debitis saepe doloribus occaecati atque aut optio.",
          "recommend": true,
          "response": null,
          "body": "Voluptates saepe totam. Ut unde voluptatem qui illo velit. Rerum esse aut perferendis. Vero nobis id modi quia eos dolores commodi id. Facilis est soluta temporibus accusantium in quam optio corrupti voluptatem.",
          "date": "2021-07-06T00:00:00.000Z",
          "reviewer_name": "Gilbert.Heathcote",
          "helpfulness": 28,
          "photos": [
              {
                  "id": 769595,
                  "url": "https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
              },
              {
                  "id": 769596,
                  "url": "https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
              }
          ]
      },
      {
          "review_id": 407585,
          "rating": 3,
          "summary": "Dolorum et vitae harum autem.",
          "recommend": true,
          "response": null,
          "body": "Eius aliquam beatae. Quod magnam cum. Repudiandae quos ut qui quae a labore quaerat est dolores. Velit ut voluptas voluptatem earum repudiandae est. Qui aut explicabo eos saepe occaecati.",
          "date": "2021-05-17T00:00:00.000Z",
          "reviewer_name": "Geovany29",
          "helpfulness": 27,
          "photos": [
              {
                  "id": 769545,
                  "url": "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "id": 769546,
                  "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                  "id": 769547,
                  "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              }
          ]
      },
      {
          "review_id": 407556,
          "rating": 2,
          "summary": "Optio totam aspernatur.",
          "recommend": true,
          "response": "\"Et nisi fuga qui doloremque non laudantium voluptas.\"",
          "body": "Enim corrupti et ut molestiae quod. Corporis earum aut est. Sit velit qui laudantium suscipit qui quae qui quia. Quasi iste laudantium vitae earum numquam omnis eum quia non. Est dolor quo.",
          "date": "2021-01-11T00:00:00.000Z",
          "reviewer_name": "Monique45",
          "helpfulness": 19,
          "photos": [
              {
                  "id": 769599,
                  "url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "id": 769600,
                  "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                  "id": 769601,
                  "url": "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              }
          ]
      },
      {
          "review_id": 407559,
          "rating": 4,
          "summary": "Tempore earum velit aut alias et qui nobis et itaque.",
          "recommend": true,
          "response": null,
          "body": "Dolor assumenda cum dolor. Aut molestiae quia earum laboriosam voluptates cum aut enim. Minus blanditiis cum vitae in.",
          "date": "2020-10-06T00:00:00.000Z",
          "reviewer_name": "Gilbert_Ruecker10",
          "helpfulness": 14,
          "photos": [
              {
                  "id": 769594,
                  "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              }
          ]
      },
      {
          "review_id": 407560,
          "rating": 4,
          "summary": "Aut omnis quos fuga explicabo non ipsa consectetur.",
          "recommend": true,
          "response": null,
          "body": "Molestiae rerum eveniet laborum aspernatur aliquid facere voluptatibus dignissimos et. Fugiat dolore aliquid molestias illo nesciunt. Facilis voluptas ea eos quia molestiae. Facilis quisquam iste dicta animi ut qui quos qui. Beatae omnis veniam est facere.",
          "date": "2021-05-02T00:00:00.000Z",
          "reviewer_name": "Lily30",
          "helpfulness": 5,
          "photos": [
              {
                  "id": 769593,
                  "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              }
          ]
      }
  ]
}

//URLS for postman

// http://localhost:1128/reviews/?product_id=28218

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=28223

//Info on posting to /reviews

product_id
  integer
  Required ID of the product to post the review for
rating
  int
  Integer (1-5) indicating the review rating
summary
  text
  Summary text of the review
body
  text
  Continued or full text of the review
recommend
  bool
  Value indicating if the reviewer recommends the product
name
  text
  Username for question asker
email
  text
  Email address for question asker
photos
  [text]
  Array of text urls that link to images to be shown
characteristics
  object
  Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...}

//data for one review as sent from client on req.body

{
  product_id: 28212,
  rating: 3,
  recommend: true,
  characteristics: { '74286': 4, '74287': 4, '74288': 4, '74289': 3 },
  summary: 'This is pretty good',
  body: "I think this is a pretty good jacket, but I wish that it wasn't so long!",
  photos: [ 'https://www.panamahatmall.com/images/demarpa0098_L.jpg?v=720' ],
  name: 'Margaret Kearns',
  email: 'margokearns@gmail.com'
}

//statement for inserting

INSERT INTO reviews (product_id, rating, add_date, summary, body, recommended, reviewer_name, reviewer_email) VALUES (28212, 8, '2021-06-07 22:55:44', 'This is pink', 'I think this is a pretty good jacket, but I wish that it was made of cheese!', false, 'meergo Kearns', 'margo000@gmail.com');

SELECT setval('reviews_id_seq', (SELECT MAX(id) FROM reviews)+1);

SELECT setval('reviews_photos_id_seq', (SELECT MAX(id) FROM reviews_photos)+1);

SELECT setval('characteristics_reviews_id_seq', (SELECT MAX(id) FROM characteristics_reviews)+1);