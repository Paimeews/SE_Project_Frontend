 interface ReservationItem {
    _id:string
    bookDate:string
    user:string
    campground:CampgroundItem
    night:number
}


   interface CampgroundJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CampgroundItem[]
  }
  
  interface ReviewJson {
    success: boolean,
    count: number,
    data: CampgroundItem[]
  }

  interface Ratejson {
    success : boolean,
    count: number,
    data: CampgroundItem[]
  }

  interface RateItem {
    _id: string,
    rateContent: string,
    user: string,
    campground: string,
  }

  interface CampgroundItem {
    _id: string,
    name:string,
    address:string,
    picture:string,
    tel:string,
    __v:number
  }
  interface UserItem {
    _id: string,
    name:string,
  }

  interface ReviewItem {
    _id: string,
    content:string,
    user:UserItem,
  }

  
  interface ReplyItem {
    _id: string,
    replyContent:string,
    user:UserItem,
  }

  interface Query {
    activity : string,
    address : string,
    tag : string,
    avgRate : string
  }

  interface HistoryItem {
    _id: string,
    content:string,
    user:string
    
  }

  