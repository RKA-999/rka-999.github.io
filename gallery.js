// Will not download Any image
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('contextmenu', e => e.preventDefault());
  img.addEventListener('dragstart', e => e.preventDefault());
});

  // Gallery
  let currentMetal = '';
  let currentCategory = '';
  let currentWeight = '';
  
  const weightsList = [
    "১ আনা", "২ আনা", "৩ আনা", "৪ আনা", "৫ আনা",
    "৬ আনা", "৭ আনা", "৮ আনা", "৯ আনা", "১০ আনা",
    "১১ আনা", "১২ আনা", "১৩ আনা", "১৪ আনা", "১৫ আনা", "১৬ আনা",
    "১ ভরি", "২ ভরি", "৩ ভরি"
  ];
  
  
  
  
  
  //gold
  const goldCategories = [
    { name: "নাক ফুল", img: "https://bajus-live.github.io/storage/gallery/gold_section/nakful.png" },
    { name: "কানের দুল", img: "https://bajus-live.github.io/storage/gallery/gold_section/kanerdul.png" },
    { name: "নেকলেস", img: "https://bajus-live.github.io/storage/gallery/gold_section/necklace.png" },
    { name: "ব্রেসলেট", img: "https://bajus-live.github.io/storage/gallery/gold_section/bracelet.png" },
    { name: "বেঙ্গল", img: "https://bajus-live.github.io/storage/gallery/gold_section/bangle.png" },
    { name: "আংটি", img: "https://bajus-live.github.io/storage/gallery/gold_section/ring.png" }
  ];
  
  // silver
  const silverCategories = [
    { name: "ব্রেসলেট", img: "https://bajus-live.github.io/storage/gallery/silver_section/breslate.png" },
    { name: "নুপুর", img: "https://bajus-live.github.io/storage/gallery/silver_section/nupur.png" },
    { name: "আংটি", img: "https://bajus-live.github.io/storage/gallery/silver_section/ring.jpg" },
    { name: "হার", img: "https://bajus-live.github.io/storage/gallery/silver_section/chain.png" },
    { name: "টো রিং", img: "https://bajus-live.github.io/storage/gallery/silver_section/toe_ring.png" },
    { name: "বালা", img: "https://bajus-live.github.io/storage/gallery/silver_section/bala.png" }
  ];
  
  //Box Content
  const jewelryData = {
    gold: {
      "নাক ফুল": {
        "১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" },
          ],
        "৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "৭ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "৮ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "৯ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "১০ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "১১আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "১২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "১৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "১৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "১৫ আনা": [
          {img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "১৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "১ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২১ ক্যারেট"}
        ],
        "২ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "৩ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
      },
      "কানের দুল": {
        "১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৫ আনা": [
         { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৭ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৮ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৯ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১০ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
         "১৩ আনা": [
           { img: "#", label: "new1", carat: "২২ ক্যারেট" }
         ],
         "১৪ আনা": [
           { img: "#", label: "new1", carat: "২২ ক্যারেট" }
         ],
         "১৬ আনা": [
           { img: "#", label: "new1", carat: "২২ ক্যারেট" }
         ],
         "১ ভরি": [
           { img: "#", label: "new1", carat: "২২ ক্যারেট" }
         ],
         "২ ভরি": [
           { img: "#", label: "new1", carat: "২২ ক্যারেট" }
         ],
         "৩ ভরি": [
           { img: "#", label: "new1", carat: "২২ ক্যারেট" }
         ]
      },
      "নেকলেস": {
        "১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৭ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৮ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৯ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১০ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "২ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ]
      },
      "ব্রেসলেট": {
        "১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৭ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৮ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৯ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১০ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "২ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ]
      },
      "বেঙ্গল": {
        "১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৭ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৮ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৯ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১০ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "২ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ]
      },
      "আংটি": {
        "১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৭ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৮ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৯ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১০ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট"}
        ],
        "১১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "২ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ]
      }
    },
    
    silver: {
      "ব্রেসলেট": {
        "১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
       "৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
       "৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
      "৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
      "৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
      "৭ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
      "৮ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
      "৯ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
      "১০ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
      "১১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
      "১২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
      "১৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
      "১৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
      "১৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
      "১৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
      "১ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
      "২ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
      "৩ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ]
      },
      "নুপুর": {
        "১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৭ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৮ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৯ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১০ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "২ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ]
      },
      
      "আংটি": {
        "১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৭ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৮ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৯ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১০ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "২ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ]
      },
      "হার": {
        "১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৭ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৮ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৯ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১০ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "২ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ]
      },
      "টো রিং": {
        "১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৭ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৮ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৯ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১০ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "২ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ]
      },
      "বালা": {
        "১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" },
          { img: "#", label: "new2", carat: "২২ ক্যারেট" }
        ],
        "২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৭ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৮ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৯ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১০ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১১ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১২ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৩ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৪ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৫ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১৬ আনা": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "১ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "২ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ],
        "৩ ভরি": [
          { img: "#", label: "new1", carat: "২২ ক্যারেট" }
        ]
      }
    }
  };
  
  
  
  
  
  
  
  
  
  
  
  function switchView(hideId, showId) {
    document.getElementById(hideId).classList.remove('active');
    document.getElementById(showId).classList.add('active');
  }
  
  function openMetal(metalType) {
    currentMetal = metalType;
    const titleEl = document.getElementById('cat-title');
    titleEl.innerHTML = `${metalType === 'gold' ? 'সোনার' : 'রুপার'} গহনার ক্যাটাগরি`;
    
    const catList = metalType === 'gold' ? goldCategories : silverCategories;
    const grid = document.getElementById('category-grid');
    grid.innerHTML = '';
    
    catList.forEach(cat => {
      const box = document.createElement('div');
      box.className = 'cat-box';
      box.innerHTML = `
        <img src="${cat.img}" alt="${cat.name}" onerror="this.src='https://via.placeholder.com/300x300/ddd/222?text=${cat.name}'">
        <h4>${cat.name}</h4>
      `;
      box.onclick = () => openWeights(cat.name);
      grid.appendChild(box);
    });
    
    switchView('main-view', 'category-view');
  }
  
  function openWeights(categoryName) {
    currentCategory = categoryName;
    const titleEl = document.getElementById('weight-title');
    titleEl.innerHTML = `${currentMetal === 'gold' ? 'সোনার' : 'রুপার'} ${categoryName} - ওজন নির্বাচন করুন`;
    
    const grid = document.getElementById('weights-grid');
    grid.innerHTML = '';
    
    weightsList.forEach(weight => {
      const box = document.createElement('div');
      box.className = 'cat-box';
      box.style.padding = '25px 15px';
      box.innerHTML = `<h4 style="font-size:1.4rem; margin:10px 0;">${weight.replace('১', '<span style="font-weight:650;">১</span>')}</h4>`;
      box.onclick = () => openItems(weight);
      grid.appendChild(box);
    });
    
    switchView('category-view', 'weight-view');
  }
  
  function openItems(weight) {
  currentWeight = weight;
  
  const titleEl = document.getElementById('items-title');
  const metalName = currentMetal === 'gold' ? 'সোনার' : 'রুপার';
  
  // টাইটেলে (১ আনা) এর রং পরিবর্তন
  titleEl.innerHTML = `${metalName} ${currentCategory} <span style="font-size:1.3rem; color:${currentMetal === 'silver' ? '#9e9e9e' : '#d4af37'}">(${weight})</span>`;
  
  const grid = document.getElementById('items-grid');
  grid.innerHTML = '';
  
  const metalData = jewelryData[currentMetal];
  const catData = metalData ? metalData[currentCategory] : null;
  const weightData = catData ? catData[currentWeight] : null;
  
  if (weightData && weightData.length > 0) {
    weightData.forEach(item => {
      grid.innerHTML += `
        <div class="item-card">
          <img src="${item.img}" alt="${item.label}" 
               onerror="this.src='https://via.placeholder.com/600x600/ddd/222?text=${item.label}'">
          <div class="item-details">
            <div class="label">${item.label}</div>
            
            <!-- ✅ এখানে রুপার কালার পরিবর্তন করা হয়েছে -->
            <div class="carat" style="color: ${currentMetal === 'silver' ? '#9e9e9e' : '#d4af37'}; border-color: ${currentMetal === 'silver' ? '#9e9e9e' : '#d4af37'};">
              ${item.carat}
            </div>
          </div>
        </div>`;
    });
  } else {
    grid.innerHTML = `
      <div class="no-data">
        <p>দুঃখিত! এই ওজনে কোনো ডিজাইন পাওয়া যায়নি।</p>
      </div>`;
  }
  
  switchView('weight-view', 'items-view');
}
  
  function goBackToMain() {
    currentMetal = '';
    currentCategory = '';
    switchView('category-view', 'main-view');
  }
  
  function goBackToCategory() {
    currentCategory = '';
    switchView('weight-view', 'category-view');
  }
  
  function goBackToWeight() {
    switchView('items-view', 'weight-view');
  }
