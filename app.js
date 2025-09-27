// Smart Agricultural Advisory System - Complete Version with Extended Crop Database
// Application data
const appData = {
  seasons: {
    kharif: {
      name: "Kharif (Monsoon)",
      months: [6, 7, 8, 9, 10],
      description: "Monsoon season crops sown with arrival of rains"
    },
    rabi: {
      name: "Rabi (Winter)",
      months: [10, 11, 12, 1, 2, 3],
      description: "Winter season crops sown after monsoon"
    },
    zaid: {
      name: "Zaid (Summer)",
      months: [3, 4, 5, 6],
      description: "Summer season crops grown between Rabi and Kharif"
    }
  },
  crops: {
    // ORIGINAL CROPS
    rice: {
      seasons: ["kharif"],
      soilTypes: ["alluvial-sandy", "alluvial-clay", "red-clay", "black-clay"],
      regions: ["north-india", "south-india", "east-india"],
      yield: "4-6 tonnes/hectare",
      duration: "120-150 days",
      waterReq: "1500-2000mm",
      price: "₹25-30/kg",
      sowing: "June-July",
      harvest: "September-October"
    },
    wheat: {
      seasons: ["rabi"],
      soilTypes: ["alluvial-sandy", "alluvial-clay", "black-loamy", "red-loamy"],
      regions: ["north-india", "west-india", "south-india"],
      yield: "3-5 tonnes/hectare",
      duration: "120-150 days",
      waterReq: "450-650mm",
      price: "₹22-26/kg",
      sowing: "October-November",
      harvest: "March-April"
    },
    cotton: {
      seasons: ["kharif"],
      soilTypes: ["black-sandy", "black-clay", "red-sandy", "alluvial-loamy"],
      regions: ["north-india", "south-india", "west-india"],
      yield: "500-800 kg/hectare",
      duration: "180-200 days",
      waterReq: "700-800mm",
      price: "₹55-65/kg",
      sowing: "May-June",
      harvest: "October-December"
    },
    maize: {
      seasons: ["kharif", "rabi"],
      soilTypes: ["alluvial-sandy", "red-sandy", "black-loamy"],
      regions: ["north-india", "south-india", "east-india", "west-india"],
      yield: "6-8 tonnes/hectare",
      duration: "90-120 days",
      waterReq: "500-600mm",
      price: "₹18-22/kg",
      sowing: "June-July (Kharif), October-November (Rabi)",
      harvest: "September-October (Kharif), February-March (Rabi)"
    },
    groundnut: {
      seasons: ["kharif", "rabi"],
      soilTypes: ["red-sandy", "red-loamy", "alluvial-sandy"],
      regions: ["south-india", "west-india", "north-india"],
      yield: "1.5-2.5 tonnes/hectare",
      duration: "100-130 days",
      waterReq: "500-700mm",
      price: "₹50-60/kg",
      sowing: "June-July (Kharif), November-December (Rabi)",
      harvest: "September-October (Kharif), March-April (Rabi)"
    },
    mustard: {
      seasons: ["rabi"],
      soilTypes: ["alluvial-sandy", "red-sandy", "red-loamy"],
      regions: ["north-india", "east-india", "west-india"],
      yield: "1-1.5 tonnes/hectare",
      duration: "120-150 days",
      waterReq: "300-400mm",
      price: "₹45-55/kg",
      sowing: "October-November",
      harvest: "February-March"
    },

    // EXTENDED CROPS DATABASE
    bajra: {
      seasons: ["kharif"],
      soilTypes: ["red-sandy", "black-sandy", "alluvial-sandy"],
      regions: ["north-india", "west-india", "south-india"],
      yield: "2-3 tonnes/hectare",
      duration: "75-90 days",
      waterReq: "400-600mm",
      price: "₹20-25/kg",
      sowing: "June-July",
      harvest: "September-October"
    },
    sorghum: {
      seasons: ["kharif", "rabi"],
      soilTypes: ["red-sandy", "red-loamy", "black-sandy", "black-loamy"],
      regions: ["north-india", "south-india", "west-india"],
      yield: "2-4 tonnes/hectare",
      duration: "90-120 days",
      waterReq: "400-600mm",
      price: "₹18-22/kg",
      sowing: "June-July (Kharif), October-November (Rabi)",
      harvest: "September-October (Kharif), February-March (Rabi)"
    },
    sugarcane: {
      seasons: ["kharif"],
      soilTypes: ["alluvial-clay", "alluvial-loamy", "black-clay", "red-clay"],
      regions: ["north-india", "south-india", "west-india"],
      yield: "70-90 tonnes/hectare",
      duration: "300-365 days",
      waterReq: "1800-2500mm",
      price: "₹280-320/quintal",
      sowing: "February-March",
      harvest: "January-March (next year)"
    },
    jute: {
      seasons: ["kharif"],
      soilTypes: ["alluvial-clay", "alluvial-loamy"],
      regions: ["east-india", "north-india"],
      yield: "25-35 quintals/hectare",
      duration: "120-150 days",
      waterReq: "1200-1500mm",
      price: "₹45-55/kg",
      sowing: "April-June",
      harvest: "August-September"
    },
    sesame: {
      seasons: ["kharif", "rabi"],
      soilTypes: ["red-sandy", "red-loamy", "alluvial-sandy"],
      regions: ["north-india", "south-india", "east-india", "west-india"],
      yield: "400-600 kg/hectare",
      duration: "85-100 days",
      waterReq: "300-500mm",
      price: "₹80-100/kg",
      sowing: "June-July (Kharif), November-December (Rabi)",
      harvest: "September-October (Kharif), February-March (Rabi)"
    },
    turmeric: {
      seasons: ["kharif"],
      soilTypes: ["red-loamy", "alluvial-loamy", "black-loamy"],
      regions: ["south-india", "east-india", "west-india"],
      yield: "20-30 quintals/hectare",
      duration: "240-300 days",
      waterReq: "1000-1200mm",
      price: "₹70-90/kg",
      sowing: "May-June",
      harvest: "February-April (next year)"
    },
    gram: {
      seasons: ["rabi"],
      soilTypes: ["black-loamy", "red-loamy", "alluvial-loamy"],
      regions: ["north-india", "south-india", "west-india"],
      yield: "1-1.5 tonnes/hectare",
      duration: "90-120 days",
      waterReq: "300-400mm",
      price: "₹50-60/kg",
      sowing: "October-November",
      harvest: "February-March"
    },
    barley: {
      seasons: ["rabi"],
      soilTypes: ["alluvial-sandy", "alluvial-loamy", "red-sandy"],
      regions: ["north-india", "west-india"],
      yield: "2-3 tonnes/hectare",
      duration: "100-120 days",
      waterReq: "300-400mm",
      price: "₹18-22/kg",
      sowing: "October-November",
      harvest: "March-April"
    },
    lentil: {
      seasons: ["rabi"],
      soilTypes: ["alluvial-loamy", "black-loamy", "red-loamy"],
      regions: ["north-india", "east-india", "south-india"],
      yield: "800-1200 kg/hectare",
      duration: "100-110 days",
      waterReq: "300-400mm",
      price: "₹60-80/kg",
      sowing: "October-November",
      harvest: "February-March"
    },
    pea: {
      seasons: ["rabi"],
      soilTypes: ["alluvial-sandy", "alluvial-loamy", "red-loamy"],
      regions: ["north-india", "east-india", "west-india"],
      yield: "1-2 tonnes/hectare",
      duration: "90-120 days",
      waterReq: "300-400mm",
      price: "₹35-45/kg",
      sowing: "October-November",
      harvest: "February-March"
    },
    oat: {
      seasons: ["rabi"],
      soilTypes: ["alluvial-sandy", "red-sandy", "black-sandy"],
      regions: ["north-india", "west-india", "east-india"],
      yield: "2-3 tonnes/hectare",
      duration: "100-120 days",
      waterReq: "350-450mm",
      price: "₹25-30/kg",
      sowing: "October-November",
      harvest: "March-April"
    },
    safflower: {
      seasons: ["rabi"],
      soilTypes: ["black-sandy", "black-loamy", "red-sandy"],
      regions: ["south-india", "west-india"],
      yield: "800-1200 kg/hectare",
      duration: "120-150 days",
      waterReq: "300-400mm",
      price: "₹55-65/kg",
      sowing: "October-November",
      harvest: "February-March"
    },
    watermelon: {
      seasons: ["zaid"],
      soilTypes: ["red-sandy", "alluvial-sandy", "black-sandy"],
      regions: ["north-india", "south-india", "west-india"],
      yield: "20-30 tonnes/hectare",
      duration: "90-100 days",
      waterReq: "400-600mm",
      price: "₹8-12/kg",
      sowing: "February-March",
      harvest: "May-June"
    },
    muskmelon: {
      seasons: ["zaid"],
      soilTypes: ["red-sandy", "alluvial-sandy", "black-sandy"],
      regions: ["north-india", "west-india", "south-india"],
      yield: "15-25 tonnes/hectare",
      duration: "90-100 days",
      waterReq: "400-500mm",
      price: "₹15-20/kg",
      sowing: "February-March",
      harvest: "May-June"
    },
    cucumber: {
      seasons: ["zaid"],
      soilTypes: ["alluvial-loamy", "red-loamy", "black-loamy"],
      regions: ["north-india", "south-india", "east-india", "west-india"],
      yield: "10-15 tonnes/hectare",
      duration: "55-70 days",
      waterReq: "350-500mm",
      price: "₹12-18/kg",
      sowing: "February-March",
      harvest: "April-May"
    },
    bitter_gourd: {
      seasons: ["zaid"],
      soilTypes: ["alluvial-loamy", "red-loamy", "black-loamy"],
      regions: ["north-india", "south-india", "east-india", "west-india"],
      yield: "8-12 tonnes/hectare",
      duration: "60-75 days",
      waterReq: "400-500mm",
      price: "₹20-25/kg",
      sowing: "February-March",
      harvest: "April-May"
    },
    green_gram: {
      seasons: ["zaid", "kharif"],
      soilTypes: ["red-sandy", "alluvial-sandy", "black-sandy"],
      regions: ["north-india", "south-india", "east-india", "west-india"],
      yield: "800-1200 kg/hectare",
      duration: "60-90 days",
      waterReq: "300-400mm",
      price: "₹60-80/kg",
      sowing: "March-April (Zaid), June-July (Kharif)",
      harvest: "May-June (Zaid), August-September (Kharif)"
    },
    sunflower: {
      seasons: ["zaid", "kharif", "rabi"],
      soilTypes: ["red-sandy", "red-loamy", "black-sandy", "alluvial-sandy"],
      regions: ["north-india", "south-india", "west-india"],
      yield: "1.5-2.5 tonnes/hectare",
      duration: "90-120 days",
      waterReq: "400-600mm",
      price: "₹55-65/kg",
      sowing: "March-April (Zaid), June-July (Kharif), November-December (Rabi)",
      harvest: "June-July (Zaid), September-October (Kharif), February-March (Rabi)"
    },
    fodder_maize: {
      seasons: ["zaid", "kharif"],
      soilTypes: ["alluvial-sandy", "alluvial-loamy", "red-sandy", "black-loamy"],
      regions: ["north-india", "south-india", "east-india", "west-india"],
      yield: "40-60 tonnes/hectare (green fodder)",
      duration: "65-80 days",
      waterReq: "400-500mm",
      price: "₹3-5/kg (green fodder)",
      sowing: "March-April (Zaid), June-July (Kharif)",
      harvest: "May-June (Zaid), August-September (Kharif)"
    },
    black_gram: {
      seasons: ["kharif", "rabi"],
      soilTypes: ["red-sandy", "black-sandy", "alluvial-sandy"],
      regions: ["north-india", "south-india", "east-india", "west-india"],
      yield: "600-1000 kg/hectare",
      duration: "90-120 days",
      waterReq: "300-500mm",
      price: "₹70-90/kg",
      sowing: "June-July (Kharif), October-November (Rabi)",
      harvest: "September-October (Kharif), January-February (Rabi)"
    },
    finger_millet: {
      seasons: ["kharif"],
      soilTypes: ["red-sandy", "red-loamy", "black-sandy"],
      regions: ["south-india", "east-india", "north-india"],
      yield: "2-3 tonnes/hectare",
      duration: "120-150 days",
      waterReq: "400-600mm",
      price: "₹30-40/kg",
      sowing: "June-July",
      harvest: "October-November"
    },
    castor: {
      seasons: ["kharif", "rabi"],
      soilTypes: ["red-sandy", "black-sandy", "alluvial-sandy"],
      regions: ["west-india", "south-india", "north-india"],
      yield: "1-2 tonnes/hectare",
      duration: "150-240 days",
      waterReq: "500-750mm",
      price: "₹50-60/kg",
      sowing: "June-July (Kharif), November-December (Rabi)",
      harvest: "December-February (Kharif), April-May (Rabi)"
    },
    coriander: {
      seasons: ["rabi"],
      soilTypes: ["alluvial-loamy", "red-loamy", "black-loamy"],
      regions: ["north-india", "south-india", "west-india", "east-india"],
      yield: "800-1500 kg/hectare",
      duration: "90-120 days",
      waterReq: "300-400mm",
      price: "₹80-120/kg",
      sowing: "October-November",
      harvest: "February-March"
    },
    fenugreek: {
      seasons: ["rabi"],
      soilTypes: ["alluvial-sandy", "red-sandy", "black-sandy"],
      regions: ["north-india", "west-india", "south-india"],
      yield: "1-2 tonnes/hectare",
      duration: "120-150 days",
      waterReq: "300-400mm",
      price: "₹60-80/kg",
      sowing: "October-November",
      harvest: "February-March"
    },
    okra: {
      seasons: ["kharif", "zaid"],
      soilTypes: ["alluvial-loamy", "red-loamy", "black-loamy"],
      regions: ["north-india", "south-india", "east-india", "west-india"],
      yield: "10-15 tonnes/hectare",
      duration: "60-90 days",
      waterReq: "400-600mm",
      price: "₹15-25/kg",
      sowing: "June-July (Kharif), February-March (Zaid)",
      harvest: "August-October (Kharif), April-June (Zaid)"
    },
    sweet_potato: {
      seasons: ["kharif"],
      soilTypes: ["red-sandy", "alluvial-sandy", "red-loamy"],
      regions: ["north-india", "south-india", "east-india", "west-india"],
      yield: "20-25 tonnes/hectare",
      duration: "120-150 days",
      waterReq: "500-750mm",
      price: "₹12-18/kg",
      sowing: "June-July",
      harvest: "October-November"
    },
    onion: {
      seasons: ["kharif", "rabi"],
      soilTypes: ["alluvial-loamy", "red-loamy", "black-loamy"],
      regions: ["north-india", "south-india", "east-india", "west-india"],
      yield: "25-40 tonnes/hectare",
      duration: "120-150 days",
      waterReq: "500-700mm",
      price: "₹15-25/kg",
      sowing: "June-July (Kharif), November-December (Rabi)",
      harvest: "October-November (Kharif), March-April (Rabi)"
    },
    tomato: {
      seasons: ["kharif", "rabi"],
      soilTypes: ["alluvial-loamy", "red-loamy", "black-loamy"],
      regions: ["north-india", "south-india", "east-india", "west-india"],
      yield: "40-60 tonnes/hectare",
      duration: "120-150 days",
      waterReq: "600-800mm",
      price: "₹20-30/kg",
      sowing: "June-July (Kharif), November-December (Rabi)",
      harvest: "September-November (Kharif), February-April (Rabi)"
    }
  },

  languages: {
    english: {
      title: "Smart Agricultural Advisory System",
      formTitle: "Agricultural Information",
      getRecommendations: "Get Recommendations",
      currentSeason: "Current Season",
      planningSeason: "Planning Season",
      cropRecommendations: "Crop Recommendations",
      newRecommendation: "New Recommendation"
    },
    hindi: {
      title: "स्मार्ट कृषि सलाहकार प्रणाली",
      formTitle: "कृषि जानकारी",
      getRecommendations: "सिफारिशें प्राप्त करें",
      currentSeason: "वर्तमान मौसम",
      planningSeason: "योजना मौसम",
      cropRecommendations: "फसल सिफारिशें",
      newRecommendation: "नई सिफारिश"
    }
  }
};

let currentLang = 'english';

// Initialize application
function initApp() {
  console.log('Initializing Smart Agricultural Advisory System');
  console.log(`Total crops available: ${Object.keys(appData.crops).length}`);

  // Set current date
  const today = new Date().toISOString().split('T')[0];
  const currentDateEl = document.getElementById('currentDate');
  const planningDateEl = document.getElementById('planningDate');

  if (currentDateEl) currentDateEl.value = today;
  if (planningDateEl) {
    planningDateEl.min = today;
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    planningDateEl.value = nextMonth.toISOString().split('T')[0];
  }

  // Setup language buttons
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.onclick = function() {
      const lang = this.getAttribute('data-lang');
      switchLanguage(lang);
    };
  });

  // Setup form
  const form = document.getElementById('agriculturalForm');
  if (form) {
    form.onsubmit = function(e) {
      e.preventDefault();
      handleSubmit();
    };
  }

  // Setup buttons
  const newBtn = document.getElementById('newRecommendationBtn');
  if (newBtn) {
    newBtn.onclick = function() {
      showForm();
    };
  }

  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.onclick = function() {
      window.print();
    };
  }

  console.log('Initialization complete');
}

// Switch language
function switchLanguage(lang) {
  console.log('Switching to language:', lang);
  currentLang = lang;

  // Update active button
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });

  // Update text content
  const texts = appData.languages[lang];
  const elements = {
    'mainTitle': texts.title,
    'formTitle': texts.formTitle,
    'submitText': texts.getRecommendations,
    'currentSeasonTitle': texts.currentSeason,
    'planningSeasonTitle': texts.planningSeason,
    'cropRecommendationsTitle': texts.cropRecommendations,
    'newRecommendationBtn': texts.newRecommendation
  };

  Object.keys(elements).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = elements[id];
  });
}

// Handle form submission
function handleSubmit() {
  console.log('Processing form submission');

  // Show loading
  const submitText = document.getElementById('submitText');
  const spinner = document.getElementById('loadingSpinner');
  const submitBtn = document.getElementById('submitBtn');

  if (submitText) submitText.style.display = 'none';
  if (spinner) spinner.style.display = 'inline-block';
  if (submitBtn) submitBtn.disabled = true;

  // Collect form data
  const formData = {
    soilType: document.getElementById('soilType')?.value,
    region: document.getElementById('region')?.value,
    previousCrop: document.getElementById('previousCrop')?.value,
    currentDate: document.getElementById('currentDate')?.value,
    planningDate: document.getElementById('planningDate')?.value,
    farmSize: document.getElementById('farmSize')?.value,
    waterAvailability: document.getElementById('waterAvailability')?.value,
    experience: document.getElementById('experience')?.value
  };

  console.log('Form data:', formData);

  // Validate form
  const required = ['soilType', 'region', 'previousCrop', 'currentDate', 'planningDate', 'farmSize', 'waterAvailability', 'experience'];
  const missing = required.filter(field => !formData[field]);

  if (missing.length > 0) {
    alert('Please fill in all required fields: ' + missing.join(', '));
    // Hide loading
    if (submitText) submitText.style.display = 'inline';
    if (spinner) spinner.style.display = 'none';
    if (submitBtn) submitBtn.disabled = false;
    return;
  }

  // Process after delay
  setTimeout(() => {
    generateRecommendations(formData);
    showResults();

    // Hide loading
    if (submitText) submitText.style.display = 'inline';
    if (spinner) spinner.style.display = 'none';
    if (submitBtn) submitBtn.disabled = false;
  }, 1500);
}

// Get season from date
function getSeason(dateStr) {
  const month = new Date(dateStr).getMonth() + 1;
  if ([6, 7, 8, 9, 10].includes(month)) return 'kharif';
  if ([10, 11, 12, 1, 2, 3].includes(month)) return 'rabi';
  return 'zaid';
}

// Enhanced generate recommendations function
function generateRecommendations(data) {
  console.log('Generating enhanced recommendations');
  const currentSeason = getSeason(data.currentDate);
  const planningSeason = getSeason(data.planningDate);

  // Update seasonal analysis
  const currentInfo = appData.seasons[currentSeason];
  const planningInfo = appData.seasons[planningSeason];
  const currentSeasonText = document.getElementById('currentSeasonText');
  const planningSeasonText = document.getElementById('planningSeasonText');

  if (currentSeasonText) {
    currentSeasonText.textContent = `${currentInfo.name} - ${currentInfo.description}`;
  }
  if (planningSeasonText) {
    planningSeasonText.textContent = `${planningInfo.name} - ${planningInfo.description}`;
  }

  // Generate crop recommendations with enhanced logic
  const suitableCrops = [];
  const fallbackCrops = [];

  Object.keys(appData.crops).forEach(cropName => {
    const crop = appData.crops[cropName];

    // Perfect match
    if (crop.seasons.includes(planningSeason) && 
        crop.soilTypes.includes(data.soilType) && 
        crop.regions.includes(data.region)) {
      suitableCrops.push({
        name: cropName.charAt(0).toUpperCase() + cropName.slice(1).replace('_', ' '),
        ...crop,
        matchType: 'perfect'
      });
    }
    // Partial match for fallback (season + soil OR season + region)
    else if (crop.seasons.includes(planningSeason) && 
             (crop.soilTypes.includes(data.soilType) || crop.regions.includes(data.region))) {
      fallbackCrops.push({
        name: cropName.charAt(0).toUpperCase() + cropName.slice(1).replace('_', ' '),
        ...crop,
        matchType: 'partial'
      });
    }
  });

  // Sort recommendations by priority
  suitableCrops.sort((a, b) => {
    // Prioritize based on yield and price
    const aValue = parseFloat(a.price.split('₹')[1].split('-')[0]) || 0;
    const bValue = parseFloat(b.price.split('₹')[1].split('-')[0]) || 0;
    return bValue - aValue; // Higher price first
  });

  // Display crop recommendations
  const container = document.getElementById('cropRecommendations');
  if (container) {
    if (suitableCrops.length === 0 && fallbackCrops.length === 0) {
      container.innerHTML = `
        <div class="alert alert-warning">
          <h6>No specific recommendations found</h6>
          <p>For your combination of ${data.soilType} soil in ${data.region} during ${planningSeason} season, 
          please consult with local agricultural extension officers or nearby agricultural universities for 
          region-specific crop recommendations.</p>
        </div>
      `;
    } else {
      let recommendationsHTML = '';

      // Add perfect matches first
      if (suitableCrops.length > 0) {
        recommendationsHTML += suitableCrops.map((crop, index) => {
          const status = index === 0 ? 'success' : index === 1 ? 'warning' : 'info';
          const statusText = index === 0 ? 'Highly Recommended' : index === 1 ? 'Good Option' : 'Consider';

          return `
            <div class="crop-card bg-light p-4 mb-3 rounded">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h5 class="text-primary mb-0">${crop.name}</h5>
                <span class="badge bg-${status}">${statusText}</span>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <p><strong>Expected Yield:</strong> ${crop.yield}</p>
                  <p><strong>Duration:</strong> ${crop.duration}</p>
                  <p><strong>Water Requirement:</strong> ${crop.waterReq}</p>
                </div>
                <div class="col-md-6">
                  <p><strong>Market Price:</strong> ${crop.price}</p>
                  <p><strong>Sowing Time:</strong> ${crop.sowing}</p>
                  <p><strong>Harvest Time:</strong> ${crop.harvest}</p>
                </div>
              </div>
              <div class="mt-3">
                <h6>Cultivation Tips:</h6>
                <ul class="list-unstyled">
                  <li>✓ Use quality seeds from certified dealers</li>
                  <li>✓ Apply organic manure 2-3 weeks before sowing</li>
                  <li>✓ Monitor weather conditions regularly</li>
                  <li>✓ Follow integrated pest management practices</li>
                </ul>
              </div>
            </div>
          `;
        }).join('');
      }

      // Add partial matches if perfect matches are limited
      if (suitableCrops.length < 3 && fallbackCrops.length > 0) {
        const additionalCrops = fallbackCrops.slice(0, 3 - suitableCrops.length);
        recommendationsHTML += '<h6 class="mt-4 mb-3">Alternative Options:</h6>';
        recommendationsHTML += additionalCrops.map(crop => `
          <div class="crop-card bg-light p-4 mb-3 rounded border-warning">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h5 class="text-warning mb-0">${crop.name}</h5>
              <span class="badge bg-warning">Alternative</span>
            </div>
            <div class="row">
              <div class="col-md-6">
                <p><strong>Expected Yield:</strong> ${crop.yield}</p>
                <p><strong>Duration:</strong> ${crop.duration}</p>
                <p><strong>Water Requirement:</strong> ${crop.waterReq}</p>
              </div>
              <div class="col-md-6">
                <p><strong>Market Price:</strong> ${crop.price}</p>
                <p><strong>Sowing Time:</strong> ${crop.sowing}</p>
                <p><strong>Harvest Time:</strong> ${crop.harvest}</p>
              </div>
            </div>
            <div class="alert alert-info mt-2">
              <small><strong>Note:</strong> This crop may have partial compatibility with your conditions. 
              Consider consulting local experts before planting.</small>
            </div>
          </div>
        `).join('');
      }

      container.innerHTML = recommendationsHTML;
    }
  }
}

// Show results section
function showResults() {
  const formSection = document.getElementById('formSection');
  const resultSection = document.getElementById('resultSection');

  if (formSection) formSection.style.display = 'none';
  if (resultSection) resultSection.style.display = 'block';
}

// Show form section
function showForm() {
  const formSection = document.getElementById('formSection');
  const resultSection = document.getElementById('resultSection');

  if (formSection) formSection.style.display = 'block';
  if (resultSection) resultSection.style.display = 'none';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

console.log('Complete Agricultural Database loaded successfully');
console.log(`Total crops available: ${Object.keys(appData.crops).length}`);
