const products = [
  // 女上衣: 0100
  {
    id: '010001',
    name: '灰色質感羊毛上衣 - 女',
    imgSrc: 'https: //images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=951&q=80',
    price: '$1299',
    storage: [
      {
        size: 'S', storageNum: 2
      },
      {
        size: 'M', storageNum: 2
      },
      {
        size: 'L', storageNum: 2
      }
    ],
    tags: ['women', 'top'
    ]
  },
  {
    id: '010002',
    name: '純色長袖上衣（灰） - 女',
    imgSrc: 'https: //images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    price: '$599',
    storage: [
      {
        size: 'S', storageNum: 2
      },
      {
        size: 'M', storageNum: 2
      },
      {
        size: 'L', storageNum: 2
      }
    ],
    tags: ['women', 'top'
    ]
  },
  {
    id: '010003',
    name: '純色長袖上衣（黑） - 女',
    imgSrc: 'https: //images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=951&q=80',
    price: '$599',
    storage: [
      {
        size: 'S', storageNum: 2
      },
      {
        size: 'M', storageNum: 2
      },
      {
        size: 'L', storageNum: 2
      }
    ],
    tags: ['women', 'top'
    ]
  },
  {
    id: '010004',
    name: '黑色個性短版上衣 - 女',
    imgSrc: 'https: //images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: '$599',
    storage: [
      {
        size: 'S', storageNum: 2
      },
      {
        size: 'M', storageNum: 2
      },
      {
        size: 'L', storageNum: 2
      }
    ],
    tags: ['women', 'top', 't_shirt'
    ]
  },
  {
    id: '010005',
    name: '純色短袖上衣（灰） - 女',
    imgSrc: 'https: //images.unsplash.com/photo-1485218126466-34e6392ec754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    price: '$499',
    storage: [
      {
        size: 'S', storageNum: 2
      },
      {
        size: 'M', storageNum: 2
      },
      {
        size: 'L', storageNum: 2
      }
    ],
    tags: ['women', 'top', 't_shirt'
    ]
  },
  {
    id: '010006',
    name: '率性牛仔外套 - 女',
    imgSrc: 'https: //unsplash.com/photos/GdvcblgTyfc',
    price: '$599',
    storage: [
      {
        size: 'S', storageNum: 2
      },
      {
        size: 'M', storageNum: 2
      },
      {
        size: 'L', storageNum: 2
      }
    ],
    tags: ['women', 'top'
    ]
  },
  {
    id: '010007',
    name: '設計感無袖上衣 - 女',
    imgSrc: 'https: //images.unsplash.com/photo-1585367757887-960a448ce2c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: '$899',
    storage: [
      { size: 'F', storageNum: 7 }
    ],
    tags: ['women', 'top'
    ]
  },
  // 女下著: 0101
  {
    id: '010101',
    name: '俏皮破洞牛仔褲 - 女',
    imgSrc: 'https: //images.unsplash.com/photo-1485218126466-34e6392ec754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    price: '$499',
    storage: [
      {
        size: 'S', storageNum: 2
      },
      {
        size: 'M', storageNum: 2
      },
      {
        size: 'L', storageNum: 2
      }
    ],
    tags: ['women', 'bottom'
    ]
  },
  {
    id: '010102',
    name: '彈力修身牛仔褲 - 女',
    imgSrc: 'https: //unsplash.com/photos/s7EMhfmU4oo',
    price: '$399',
    storage: [
      {
        size: 'S', storageNum: 2
      },
      {
        size: 'M', storageNum: 2
      },
      {
        size: 'L', storageNum: 2
      }
    ],
    tags: ['women', 'bottom'
    ]
  },
  // 女：洋裝: 0102
  {
    id: '010201',
    name: '連身牛仔裙 - 女',
    imgSrc: 'https: //images.unsplash.com/photo-1553209096-ff762e9fc9a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: '$699',
    storage: [
      {
        size: 'S', storageNum: 0
      },
      {
        size: 'M', storageNum: 0
      },
      {
        size: 'L', storageNum: 2
      }
    ],
    tags: ['women', 'dress'
    ]
  },
  {
    id: '010202',
    name: '紅色碎花連身裙 - 女',
    imgSrc: 'https: //images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
    price: '$899',
    storage: [
      {
        size: 'S', storageNum: 10
      },
      {
        size: 'M', storageNum: 1
      },
      {
        size: 'L', storageNum: 2
      }
    ],
    tags: ['women', 'dress'
    ]
  },
  // 男上衣: 0200
  {
    id: '020001',
    name: '黑色個性圖騰 T Shirt - 男',
    imgSrc: 'https: //images.unsplash.com/photo-1503341338985-c0477be52513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    price: '$599',
    storage: [
      {
        size: 'S', storageNum: 2
      },
      {
        size: 'M', storageNum: 2
      },
      {
        size: 'L', storageNum: 2
      }
    ],
    tags: ['men', 'top', 't_shirt'
    ]
  },
  {
    id: '020002',
    name: '純色短袖上衣（黃） - 男',
    imgSrc: 'https: //images.unsplash.com/photo-1520013633827-6724d7d57eb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    price: '$499',
    storage: [
      {
        size: 'S', storageNum: 2
      },
      {
        size: 'M', storageNum: 2
      },
      {
        size: 'L', storageNum: 2
      }
    ],
    tags: ['men', 'top', 't_shirt'
    ]
  },
  {
    id: '020003',
    name: '格紋休閒襯衫（黑白） - 男',
    imgSrc: 'https: //images.unsplash.com/photo-1577134351686-c6dca1c59964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    price: '$499',
    storage: [
      {
        size: 'S', storageNum: 2
      },
      {
        size: 'M', storageNum: 2
      },
      {
        size: 'L', storageNum: 2
      }
    ],
    tags: ['men', 'top'
    ]
  },
  {
    name: '格紋休閒襯衫（藍黃） - 男',
    imgSrc: 'https: //images.unsplash.com/photo-1557153939-92dd234d7bd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    price: '$499',
    storage: [
      {
        size: 'S', storageNum: 2
      },
      {
        size: 'M', storageNum: 2
      },
      {
        size: 'L', storageNum: 2
      }
    ],
    tags: ['men', 'top'
    ]
  },
  {
    id: '020004',
    name: '率性西裝外套 - 男',
    imgSrc: 'https: //unsplash.com/photos/ymo_yC_N_2o',
    price: '$1599',
    storage: [
      {
        size: 'S', storageNum: 9
      },
      {
        size: 'M', storageNum: 10
      },
      {
        size: 'L', storageNum: 10
      }
    ],
    tags: ['men', 'top'
    ]
  },
  // 男下著: 0201
  {
    id: '020101',
    name: '牛仔長褲 - 男',
    imgSrc: 'https: //images.unsplash.com/flagged/photo-1573550398269-6600a22ffdae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    price: '$699',
    storage: [
      {
        size: 'S', storageNum: 9
      },
      {
        size: 'M', storageNum: 4
      },
      {
        size: 'L', storageNum: 10
      }
    ],
    tags: ['men', 'bottom']
  }
]

module.exports = products
