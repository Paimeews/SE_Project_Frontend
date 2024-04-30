export default async function getCampsSorted() {
      const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds/?sort=avgRate,totalRate&limit=10&sort=-1`, {next: {tags:['camps']}})
      if (!response.ok) {
          throw new Error("Failed to fetch campground")

      }

      return await response.json()
}
