const apiKey = 'WMgK81yWPik55wEK0eQG4fNLa8PHyaXaiQ18vWlsufeNt-xaSwG15epFMaf4NEIhjHdotFjm55w9RyYQ-M0Xmi2MavfNsnVkgTafuw8pFWf2R6_xF2NOL4MINxX1YXYx';
export const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResposne => {
      if (jsonResposne.businesses) {
        return jsonResposne.businesses.map(business => {
          //console.log(business);
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories.title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        });
      }
      

    });
  }
};