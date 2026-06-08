/* SoulFa product catalogue — used by product.html
   IDs match data-id on merch.html cards so navigation works directly. */

window.PRODUCTS = {

  /* ─── 專輯 ─── */
  'record-1': {
    name: '失望的山 專輯',
    category: 'Records · 專輯',
    price: 700,
    images: [
      '圖片/周邊照片/DSC00339-4.jpg',
      '圖片/周邊照片/DSC00348-2.jpg',
      '圖片/周邊照片/DSC00355.jpg',
      '圖片/周邊照片/DSC00417-1.jpg',
      '圖片/周邊照片/DSC00432.jpg',
      '圖片/周邊照片/DSC00439.jpg',
      '圖片/周邊照片/DSC00462.jpg',
      '圖片/周邊照片/內容物.jpg'  /* 最後一張，不裁切 */
    ],
    description: '',
    tracklist: [
      { no: 1,  title: '失望的山',                                  duration: '4:21' },
      { no: 2,  title: 'Best Life',                                 duration: '3:36' },
      { no: 3,  title: 'We Talk To iPhone But Not Our Best Friend', duration: '2:49' },
      { no: 4,  title: '銀河之王',                                  duration: '4:15' },
      { no: 5,  title: '咒',                                        duration: '4:02' },
      { no: 6,  title: 'So Sad',                                    duration: '4:26' },
      { no: 7,  title: '盪在空中',                                  duration: '3:07' },
      { no: 8,  title: '無聲',                                      duration: '3:17' },
      { no: 9,  title: '一個漂亮的青年',                            duration: '3:13' },
      { no: 10, title: '荒唐的盡頭',                                duration: '4:57' }
    ]
  },

  /* ─── 衣服 ─── */
  'apparel-1': {
    name: '失望的山牙白 T',
    category: 'Apparel · 衣服',
    price: 1080,
    images: [
      '圖片/周邊照片/白T.png',
      '圖片/周邊照片/DSC00489.jpg',
      '圖片/周邊照片/DSC00490.jpg',
      '圖片/周邊照片/DSC00491.jpg',
      '圖片/周邊照片/DSC00493.jpg',
      '圖片/周邊照片/DSC00497.jpg',
      '圖片/周邊照片/DSC00508.jpg'
    ],
    description: '',
    sizes: [
      { size: 'M', length: 69, chest: 56.5, shoulder: 51, sleeve: 19 },
      { size: 'L', length: 72, chest: 61,   shoulder: 56, sleeve: 21 }
    ],
    sizeOptions: ['M', 'L'],
    washingTips: [
      '衣服反面套洗衣袋洗滌',
      '正常冷水洗 / 曬乾即可',
      '避免加柔軟劑、漂白劑（易傷印花）',
      '避免高溫烘乾（易傷衣服與印花）'
    ]
  },

  'apparel-2': {
    name: 'SoulFa 算什麼咖 logo T',
    category: 'Apparel · 衣服',
    price: 880,
    images: [
      '圖片/周邊照片/咖啡色T.png',
      '圖片/周邊照片/DSC00480.jpg',
      '圖片/周邊照片/DSC00476.jpg',
      '圖片/周邊照片/DSC00478.jpg',
      '圖片/周邊照片/DSC00499.jpg',
      '圖片/周邊照片/DSC00508.jpg'
    ],
    description: '',
    sizes: [
      { size: 'M', length: 69, chest: 56.5, shoulder: 51, sleeve: 19 },
      { size: 'L', length: 72, chest: 61,   shoulder: 56, sleeve: 21 }
    ],
    sizeOptions: ['M', 'L'],
    washingTips: [
      '衣服反面套洗衣袋洗滌',
      '正常冷水洗 / 曬乾即可',
      '避免加柔軟劑、漂白劑（易傷印花）',
      '避免高溫烘乾（易傷衣服與印花）'
    ]
  },

  /* ─── 陶藝品 ─── */
  'ceramic-1': {
    name: '銀河之王冠',
    category: 'Ceramics · 陶藝品',
    price: 400,
    images: [
      '圖片/周邊照片/DSC00367-1.jpg',
      '圖片/周邊照片/DSC00425.jpg',
      '圖片/周邊照片/DSC00581.jpg',
      '圖片/周邊照片/DSC00582.jpg'
    ],
    description: '',
    dimensions: { length: 8, width: 8, height: 6 }
  },

  'ceramic-2': {
    name: '失望的山線香座',
    category: 'Ceramics · 陶藝品',
    price: 1580,
    images: [
      '圖片/周邊照片/DSC00380.jpg',
      '圖片/周邊照片/DSC00385.jpg',
      '圖片/周邊照片/DSC00583.jpg'
    ],
    description: '',
    dimensions: { length: 18, width: 4.5, height: 6 }
  },

  'ceramic-3': {
    name: '盪在空中的小藍腳',
    category: 'Ceramics · 陶藝品',
    price: 350,
    images: [
      '圖片/周邊照片/DSC00372.jpg',
      '圖片/周邊照片/DSC00579.jpg'
    ],
    description: '',
    dimensions: { length: 8, width: 6, height: 4 }
  },

  'ceramic-4': {
    name: '一個漂亮的梗頭',
    category: 'Ceramics · 陶藝品',
    price: 680,
    images: [
      '圖片/周邊照片/DSC00374.jpg',
      '圖片/周邊照片/DSC00580.jpg'
    ],
    description: '',
    dimensions: { length: 5.5, width: 4, height: 3 }
  }
};
