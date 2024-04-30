export default async function getCamps(value:string|null,object:Query|null) {
    var query = '?';
    if (object!=null) {
      if (object.address != '') {
         query += '&country='
         query += object.address;
      }
      if (object.activity != '') {
          query += '&activity='
          query += object.activity;

       }
       if (object.tag != '') {
        query += '&tag='
        query += object.tag;

     }
    if (object.avgRate != '') {
        query += '&avgRate[gte]='
        query += object.avgRate;

    }
    }
    console.log('kdnvn')
    console.log(query)
    console.log(value)
  // await new Promise((resolve)=>setTimeout(resolve,1000))
  if (value==null || value=='') {


      const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds${query}`, {next: {tags:['camps']}})
      if (!response.ok) {
          throw new Error("Failed to fetch campground")

      }

      return await response.json()
  } else {

    const rootname = ['Grand Canyon','Valley of Fire State Park','Rocks National Lakeshore','Hossa National Park','Tasman Holiday Parks','The Headwaters Eco Lodge']
    for (const item of rootname) {
        if (item.toLowerCase().includes(value.toLowerCase())) {
            console.log(value.toLowerCase())
            value = item;
        }
    }


      const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds?name=${value}`, {next: {tags:['camps']}})
      if (!response.ok) {
          throw new Error("Failed to fetch campground")

      }

      return await response.json()
  }


}
