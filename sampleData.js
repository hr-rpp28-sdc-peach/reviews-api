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

[
  {
      "id": 11561,
      "product_id": 2000,
      "rating": 4,
      "add_date": "1610044711798",
      "summary": "Iste minus harum quod debitis rerum quasi dolores voluptatem animi.",
      "body": "Eum rem cupiditate occaecati. Rerum harum quidem qui quam magni nobis neque voluptatem vel. Omnis deleniti iste. Animi saepe sed fuga omnis. Enim dolor pariatur consequuntur voluptatem velit quis.",
      "recommended": true,
      "reported": false,
      "reviewer_name": "Wilber.King62",
      "reviewer_email": "Timothy15@yahoo.com",
      "response": "null",
      "helpfulness": 27
  },
  {
      "id": 11562,
      "product_id": 2000,
      "rating": 4,
      "add_date": "1588709418532",
      "summary": "Deleniti sit repellat architecto et unde.",
      "body": "Voluptatem quae adipisci. Cum possimus explicabo qui ullam aut minus ullam libero. Perferendis suscipit dolorum quae. Ut ut qui omnis inventore. Eum saepe qui quidem a occaecati possimus consequatur. Nihil dolorem nisi temporibus maxime.",
      "recommended": true,
      "reported": false,
      "reviewer_name": "Rashad.Marvin2",
      "reviewer_email": "Christine_Prohaska40@gmail.com",
      "response": "null",
      "helpfulness": 17
  },
  {
      "id": 11563,
      "product_id": 2000,
      "rating": 2,
      "add_date": "1594665444348",
      "summary": "Nobis libero ab autem fuga laudantium.",
      "body": "Ut sit numquam nostrum. Ad quia sed minima. Minima et nemo qui vel culpa. Rerum sit aut repudiandae animi cum quis.",
      "recommended": true,
      "reported": true,
      "reviewer_name": "Derek_Haley95",
      "reviewer_email": "Brittany.Klein@gmail.com",
      "response": "null",
      "helpfulness": 5
  }
]

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