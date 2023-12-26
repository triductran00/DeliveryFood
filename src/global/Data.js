export const filterData = [
    {name: "Đồ ăn nhanh", image: require('../assets/fastfood.png'), id: "0"},
    {name: "Ăn vặt", image: require('../assets/snack.png'), id: "1"},
    {name: "Đồ uống", image: require('../assets/drink.png'), id: "2"},
    {name: "Cơm", image: require('../assets/rice.png'), id: "3"},
    {name: "Ăn chay", image: require('../assets/vegetarianfood.png'), id: "4"},
    {name: "Hải sản", image: require('../assets/seafood.png'), id: "5"},
];

export const filterData2 = [{name:"Đồ ăn nhanh",image:'https://cdn.tgdd.vn/Files/2020/12/16/1314124/thuc-an-nhanh-la-gi-an-thuc-an-nhanh-co-tot-hay-khong-202201201405201587.jpg' , id:"0"},
{name:"Ăn vặt",image: 'https://cdn.tgdd.vn/2021/11/CookDish/tong-hop-cach-lam-nhung-mon-an-vat-ngon-re-o-sai-gon-don-gian-avt-1200x676.jpg',id:"1"},
{name:"Salads",image:'https://toplist.vn/images/800px/thuong-hieu-dau-giam-tron-salad-duoc-yeu-thich-nhat-viet-nam-255313.jpg',id:"2"},
{name:"Đồ uống",image: "https://phucgiaan.com/wp-content/uploads/2020/09/tra-sua-gong-cha-binh-duong-chi-nhanh-thu-dau-mot.jpg",id:"3"},
{name:"Cơm",image:"https://inoxvina.vn/wp-content/uploads/2020/11/cach-nau-com-tam-ngon.jpg",id:"4"},
{name:"Ăn chay",image:"https://giavivietan.com/wp-content/uploads/2022/02/Hinh-1-1.png",id:"5"},  
{name:"Hải sản",image:"https://cdn.tgdd.vn/Files/2020/07/27/1274121/10-loai-hai-san-duoc-sach-ky-luc-viet-nam-vinh-danh-la-loai-hai-san-ngon-nhat-202009271820554764.jpg",id:"6"},
{name:"Lẩu",image:"https://cdn.tgdd.vn/Files/2019/07/26/1181815/lau-thai-hai-san-chua-chua-cay-cay-danh-bay-cai-lanh-202111161130260017.jpg",id:"7"},
{name:"Bánh mì",image:"https://banhmipho.vn/wp-content/uploads/2021/08/vuong.jpg.png",id:"8"},  
{name:"Bún",image:"https://s1.media.ngoisao.vn/resize_580/news/2021/04/13/do-an-sang-ngon-2-ngoisaovn-w550-h366.jpg",id:"9"},
];


export const restaurantsData = [
  {restaurantName:"Mc Donalds", farAway:"21.2",
  businessAddress:"123 Đ. Nguyễn Huệ, Bến Nghé, Quận 1",images:'https://mcdonalds.vn/uploads/2018/news/0-02-06-9cb7c8f2e59fd00a29189138e205ed041e2d95b5e7dadecd91169e4a997df243_9b36edeb455d500d.jpg',
  averageReview:4.9,numberOfReview:272,coordinates : {lat: -26.1888612, lng: 28.246325} ,discount:10,deliveryTime:15,
  collectTime:5, foodType:"Burgers, Wraps,Milkshakes..." ,
  productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
  {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},{name:"Chicken Burger",
   price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
    ],
  id:0},
  
  {restaurantName:"KFC", farAway:"12.7",businessAddress:"265 Âu Cơ, Phường 5, Quận 11",
  images:'https://images.foody.vn/res/g4/35966/prof/s/foody-upload-api-foody-mobile-79-2908dd6f-220622141134.jpg',
  averageReview:4.3, numberOfReview:306, coordinates : {lat: -26.1891648, lng: 28.2441808},
  discount:20,deliveryTime:30,collectTime:10, foodType:"Chicken,Chicken wings... ",
  productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
  {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},
  {name:"Chicken Burger", price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
      ],
  id:1},
  
  {restaurantName:"Texas", farAway:"5",businessAddress:"463 Đ. Sư Vạn Hạnh, Phường 12, Quận 10",
  images:'https://texaschickenvn.com/vnt_upload/weblink/bannerpc1.jpg',
   coordinates :{ lat: -26.1886781, lng: 28.244879}, averageReview: 4.9,numberOfReview: 1272,
    discount:12, deliveryTime:25,collectTime:15,foodType:"Flame grilled beef Burgers",
   productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
    {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},{name:"Chicken Burger",
     price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
      ],
   id:2},
  
  {restaurantName:"Pizza Hut", farAway:"7",businessAddress:"30 Đ. Tân Thắng, Sơn Kỳ, Tân Phú",
  images:'https://aeonmall-binhtan-en.com/wp-content/uploads/2021/05/13-750x468-1.jpg',
  averageReview:4.3, numberOfReview:700, coordinates: {lat: -26.1845336, lng: 28.2481691},
  discount:null,deliveryTime:20,collectTime:10,foodType:"Chicken pizza, Vegetarian pizza...",
  productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
    {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},{name:"Chicken Burger",
     price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
      ],
  id:3},
]

export const productData = [{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png",
details:"Two 100% fresh beef burger patties that are hot,deliciously",id:0},
  {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
  details:"McFeast features two 100% fresh beef burger patties that are hot",id:1},
  {name:"Chicken Burger", price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png",details:"",id:2},
  
  {name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
  details:"Two 100% fresh beef burger patties that are hot,deliciously",id:3},
  {name:"Big Mac", price:70.20,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
  details:"McFeast features two 100% fresh beef burger patties that are hot",id:4},
  {name:"Chicken Burger", price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/chicken.png",details:"",id:5},

    ];   
    
export const menuData = [
    
    {title:"BÒ",special:false,key:0, },
    {title:"GÀ", special:false,key:1},
    {title:"BURGER CHAY",special:false ,key:2},
    {title:"KHOAI TÂY CHIÊN & BẮP",special:false ,key:3},
    {title:"SALADS",special:false,key:4},
    {title:"HAPPY MEALS",special:false,key:5},
    {title:"SHARE BOX",special:false,key:6},
    {title:"SỮA LẮC",special:false,key:7},
    {title:"ĐỒ UỐNG LẠNH",special:false,key:8},
    {title:"TRÁNG MIỆNG",special:false,key:9},
    {title:"ĐỒ UỐNG NÓNG",special:false,key:10},
  
    ] ;
  
  export const specialData =[
    {title:"ƯU ĐÃI GIỚI HẠN",key:0},
    {title:"GO CHILLI",key:1},
    {title:"GO CHEESE",key:2},
    {title:"MCCHICKEN DELUXE",key:3},
  ];    
  
  export const menu = [
    { key: 1, title: 'BÒ' },
    { key: 2, title: 'GÀ' },
    { key: 3, title: 'BURGER CHAY' },
    { key: 4, title: 'SHARE BOX' },
    { key: 5, title: 'HAPPY MEALS' },
    { key: 6, title: 'KHOAI TÂY CHIÊN' },
    { key: 7, title: 'ĂN KÈM' },
    { key: 8, title: 'SỮA LẮC' },
  ] 


  export const menuDetailedData =[
    { 
      meal:"Big Mac",
      price:70.20,
      image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
      details:"McFeast features two 100% fresh beef burger patties that are hot",
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
      preferenceData: [

                      [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                      ],

                      [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                      {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                      ],

                      [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                        ],
                          
                      [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                      ],

                      [
                      {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                      ],
                      ],
      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],              
      id:0
    },
  
    { 
      meal:"Hand cut chips", 
      price:29.30,
      image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
      details:"Two 100% fresh beef burger patties that are hot,deliciously",
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
      preferenceData: [

        [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
        ],

        [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
        ],

        [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
          ],
            
        [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
        ],

        [
        {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
        ],
        ],
        minimum_quatity:[2,1,2,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false], 
        id:1
    },
  
    {
      meal:"Chicken Burger",
      price:45.70,
      image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png",
      details:"",
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
      preferenceData: [

        [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
        ],

        [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
        ],

        [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
          ],
            
        [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
        ],

        [
        {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
        ],
        ],

        minimum_quatity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false],   
      id:2
    },
  
    {
      meal:"Big Mac",
      price:50.80,
      image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
      details:"McFeast features two 100% fresh beef burger patties that are hot",
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
      preferenceData: [

        [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
        ],

        [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
        ],

        [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
          ],
            
        [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
        ],

        [
        {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
        ],
        ],
      
        minimum_quatity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false],    
      id:3
    },
  
    
    { 
      
      meal:"Hand cut chips", 
      price:29.30,
      image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png",
      details:"Two 100% fresh beef burger patties that are hot,deliciously",
      
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
      
      preferenceData: [

        [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
        ],

        [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
        ],

        [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
          ],
            
        [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
        ],

        [
        {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
        ],
        ],

      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],     
      id:4
    },

    { 
      meal:"Big Mac",
      price:70.20,
      image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
      details:"McFeast features two 100% fresh beef burger patties that are hot",
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
      preferenceData: [

                      [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                      ],

                      [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                      {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                      ],

                      [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                        ],
                          
                      [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                      ],

                      [
                      {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                      ],
                      ],
      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],              
      id:5
    },
  
  ];