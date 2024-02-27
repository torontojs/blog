//function to remove any unwanted characters or spacing for the route, all will be the same from now on with this function! slugify's url to make it reusable!

export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }
  
  export function formatDate(date) {
    // if timeZone prop isnt declared then when the blogs are posted, the date will always be from the date before
    return new Date(date).toLocaleDateString('en-US', {
      timeZone: "UTC",
    })
  }
