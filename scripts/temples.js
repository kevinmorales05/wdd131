const temples = [
  //   {
  //     name: "Guayaquil Ecuador Temple",
  //     location: "Guayaquil, Ecuador",
  //     imageUrl: "images/temples/templeGuayaquil.jpg",
  //     dedicatedDate: "August 20, 1999",
  //     history:
  //       "The Guayaquil Ecuador Temple was the first temple built in Ecuador. It serves members in the region and was dedicated by President Gordon B. Hinckley.",
  //   },
  {
    name: "Quito Ecuador Temple",
    location: "Quito, Ecuador",
    imageUrl: "images/temples/templeQuito.jpg",
    dedicatedDate: "August 20, 2019",
    history:
      "The Quito Ecuador Temple is the second temple in Ecuador and serves members in the northern part of the country. It was dedicated by President Russell M. Nelson.",
  },

  {
    name: "Orem Temple",
    location: "Orem, Utah",
    imageUrl: "images/temples/templeOrem.jpg",
    dedicatedDate: "March 20, 2016",
    history:
      "The Orem Temple is a modern temple that serves the members in the Utah Valley area. It was built to accommodate the growing population and was dedicated by President Thomas S. Monson.",
  },
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    imageUrl: "images/temples/templeSaltLake.jpg",
    dedicatedDate: "April 6, 1893",
    history:
      "The Salt Lake Temple is the largest and best-known temple of The Church of Jesus Christ of Latter-day Saints. It took 40 years to complete and was dedicated by President Wilford Woodruff.",
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    imageUrl: "images/temples/templeRome.jpg",
    dedicatedDate: "March 10, 2019",
    history:
      "The Rome Italy Temple is the first temple in Italy and serves members throughout the country. It was dedicated by President Russell M. Nelson.",
  },
  {
    name: "Seoul Korea Temple",
    location: "Seoul, South Korea",
    imageUrl: "images/temples/templeSeoul.jpg",
    dedicatedDate: "January 14, 1985",
    history:
      "The Seoul Korea Temple was the first temple built in South Korea. It serves members in the region and was dedicated by President Spencer W. Kimball.",
  },
  {
    name: "Oakland California Temple",
    location: "Oakland, California",
    imageUrl: "images/temples/templeOakland.jpg",
    dedicatedDate: "November 17, 1964",
    history:
      "The Oakland California Temple is known for its beautiful architecture and gardens. It serves members in the San Francisco Bay Area and was dedicated by President David O. McKay.",
  },
  {
    name: "Singapore Temple",
    location: "Singapore",
    imageUrl: "images/temples/templeSingapoore.jpg",
    dedicatedDate: "May 21, 1984",
    history:
      "The Singapore Temple was the first temple built in Southeast Asia. It serves members in the region and was dedicated by President Spencer W. Kimball.",
  },
  {
    name: "St George Utah Temple",
    location: "St. George, Utah",
    imageUrl: "images/temples/templeStGeorge.jpg",
  },
  {
    name: "San Diego California Temple",
    location: "San Diego, California",
    imageUrl: "images/temples/templeSanDiego.jpg",
    dedicatedDate: "April 25, 1993",
    history:
      "The San Diego California Temple is known for its striking architecture and beautiful grounds. It serves members in the San Diego area and was dedicated by President Gordon B. Hinckley.",
  },
  {
    name: "San Jose California Temple",
    location: "San Jose, California",
    imageUrl: "images/temples/templeSanJose.jpg",
    dedicatedDate: "March 11, 1985",
    history:
      "The San Jose California Temple serves members in the Silicon Valley area. It was built to accommodate the growing population and was dedicated by President Spencer W. Kimball.",
  },
  {
    name: "Rexburg Idaho Temple",
    location: "Rexburg, Idaho",
    imageUrl: "images/temples/templeRexburg.jpg",
    dedicatedDate: "February 10, 2008",
    history:
      "The Rexburg Idaho Temple serves members in the eastern Idaho region. It was built to accommodate the growing population and was dedicated by President Gordon B. Hinckley.",
  },
];

const templesContainer = document.getElementById("templesSection");
temples.forEach((temple) => {
  const templeCard = document.createElement("div");
  templeCard.classList.add("temple-card");

  templeCard.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.name}">
         <h2>${temple.name}</h2>
    `;

  // templeCard.innerHTML = `
  //     <h2>${temple.name}</h2>
  //     <p><strong>Location:</strong> ${temple.location}</p>
  //     <img src="${temple.imageUrl}" alt="${temple.name}">
  //     <p><strong>Dedicated Date:</strong> ${temple.dedicatedDate}</p>
  //     <p><strong>History:</strong> ${temple.history}</p>
  // `;
  templesContainer.appendChild(templeCard);
});

// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("#templeNav ul");
  const closeBtn = document.querySelector(".close-btn");

  // Open menu
  hamburger.addEventListener("click", () => {
    navMenu.classList.add("active");
  });

  // Close menu
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
