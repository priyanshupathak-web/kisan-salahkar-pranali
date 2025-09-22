// Smart Agricultural Advisory System - Final Working Version

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

// Generate recommendations
function generateRecommendations(data) {
  console.log('Generating recommendations');
  
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
  
  // Generate crop recommendations
  const suitableCrops = [];
  
  Object.keys(appData.crops).forEach(cropName => {
    const crop = appData.crops[cropName];
    
    // Check if crop matches criteria
    if (crop.seasons.includes(planningSeason) && 
        crop.soilTypes.includes(data.soilType) && 
        crop.regions.includes(data.region)) {
      suitableCrops.push({
        name: cropName.charAt(0).toUpperCase() + cropName.slice(1),
        ...crop
      });
    }
  });
  
  // Display crop recommendations
  const container = document.getElementById('cropRecommendations');
  if (container) {
    if (suitableCrops.length === 0) {
      container.innerHTML = '<p>No specific recommendations found for your combination. Please consult local agricultural experts.</p>';
    } else {
      container.innerHTML = suitableCrops.map((crop, index) => {
        const status = index === 0 ? 'success' : index === 1 ? 'warning' : 'info';
        const statusText = index === 0 ? 'Highly Recommended' : index === 1 ? 'Good Option' : 'Consider';
        
        return `
          <div class="crop-card">
            <h3>${crop.name}</h3>
            <div class="crop-details">
              <div class="crop-detail-item">
                <span class="crop-detail-label">Expected Yield:</span>
                <span class="crop-detail-value">${crop.yield}</span>
              </div>
              <div class="crop-detail-item">
                <span class="crop-detail-label">Market Price:</span>
                <span class="crop-detail-value">${crop.price}</span>
              </div>
              <div class="crop-detail-item">
                <span class="crop-detail-label">Duration:</span>
                <span class="crop-detail-value">${crop.duration}</span>
              </div>
              <div class="crop-detail-item">
                <span class="crop-detail-label">Water Requirement:</span>
                <span class="crop-detail-value">${crop.waterReq}</span>
              </div>
              <div class="crop-detail-item">
                <span class="crop-detail-label">Sowing Time:</span>
                <span class="crop-detail-value">${crop.sowing}</span>
              </div>
              <div class="crop-detail-item">
                <span class="crop-detail-label">Harvest Time:</span>
                <span class="crop-detail-value">${crop.harvest}</span>
              </div>
              <div class="crop-detail-item">
                <span class="crop-detail-label">Recommendation:</span>
                <span class="crop-detail-value status--${status}">${statusText}</span>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }
  
  // Generate other sections
  generatePesticideInfo(suitableCrops);
  generateFertilizerInfo(suitableCrops);
  generateCalendar(planningSeason);
  generateResourcePlanning(data);
}

// Generate pesticide information
function generatePesticideInfo(crops) {
  const container = document.getElementById('pesticideInfo');
  if (!container || crops.length === 0) return;
  
  container.innerHTML = crops.slice(0, 2).map(crop => `
    <div class="pesticide-crop">
      <h3>${crop.name}</h3>
      <h4 style="color: var(--color-error);">Pest Management:</h4>
      <div class="pest-list">
        <div class="pest-item">
          <h4>Integrated Approach</h4>
          <p>Use biological controls and resistant varieties first</p>
        </div>
        <div class="pest-item">
          <h4>Chemical Control</h4>
          <p>Apply pesticides only when economic threshold reached</p>
        </div>
        <div class="pest-item">
          <h4>Regular Monitoring</h4>
          <p>Weekly field inspection during growing season</p>
        </div>
      </div>
    </div>
  `).join('');
}

// Generate fertilizer information
function generateFertilizerInfo(crops) {
  const container = document.getElementById('fertilizerInfo');
  if (!container || crops.length === 0) return;
  
  container.innerHTML = crops.slice(0, 2).map(crop => `
    <div class="fertilizer-card">
      <h3>${crop.name}</h3>
      <div class="npk-info">
        <h4>Nutrient Management</h4>
        <p>Apply balanced NPK based on soil test results</p>
      </div>
      <div class="npk-info">
        <h4>Application Method</h4>
        <p>Basal: 50% N + Full P + Full K at sowing</p>
        <p>Top-dress: Remaining N in 2-3 splits</p>
      </div>
      <div class="npk-info">
        <h4>Organic Options</h4>
        <p>FYM @ 5-10 tonnes/hectare + Vermicompost</p>
      </div>
    </div>
  `).join('');
}

// Generate calendar
function generateCalendar(season) {
  const container = document.getElementById('calendarGrid');
  if (!container) return;
  
  const activities = {
    kharif: [
      { month: 'June', tasks: ['Sowing preparation', 'Soil preparation', 'Seed treatment'] },
      { month: 'July', tasks: ['Main sowing', 'Weeding', 'Fertilizer application'] },
      { month: 'August', tasks: ['Crop monitoring', 'Pest control', 'Irrigation'] },
      { month: 'September', tasks: ['Flowering care', 'Disease management', 'Nutrients'] },
      { month: 'October', tasks: ['Pre-harvest', 'Grain filling', 'Planning'] },
      { month: 'November', tasks: ['Harvest', 'Storage', 'Marketing'] }
    ],
    rabi: [
      { month: 'October', tasks: ['Field preparation', 'Seed procurement', 'Planning'] },
      { month: 'November', tasks: ['Main sowing', 'Irrigation setup', 'Fertilizers'] },
      { month: 'December', tasks: ['Crop establishment', 'Weed control', 'Winter care'] },
      { month: 'January', tasks: ['Growth monitoring', 'Irrigation', 'Pest watch'] },
      { month: 'February', tasks: ['Grain formation', 'Disease control', 'Preparation'] },
      { month: 'March', tasks: ['Harvest', 'Processing', 'Storage'] }
    ],
    zaid: [
      { month: 'March', tasks: ['Planning', 'Land preparation', 'Water setup'] },
      { month: 'April', tasks: ['Sowing', 'Heat management', 'Conservation'] },
      { month: 'May', tasks: ['Maintenance', 'Irrigation', 'Stress care'] },
      { month: 'June', tasks: ['Pre-harvest', 'Quality check', 'Market prep'] },
      { month: 'July', tasks: ['Harvest', 'Monsoon prep', 'Cleanup'] },
      { month: 'August', tasks: ['Processing', 'Equipment care', 'Planning'] }
    ]
  };
  
  const monthData = activities[season] || activities.kharif;
  
  container.innerHTML = monthData.map(month => `
    <div class="month-card">
      <h4>${month.month}</h4>
      <div class="month-activities">
        ${month.tasks.map(task => `<div class="activity-item">${task}</div>`).join('')}
      </div>
    </div>
  `).join('');
}

// Generate resource planning
function generateResourcePlanning(data) {
  const farmSize = parseFloat(data.farmSize) || 1;
  
  const calculations = {
    water: Math.round(farmSize * 1200).toLocaleString(),
    labor: Math.round(farmSize * 25),
    cost: Math.round(farmSize * 40000).toLocaleString(),
    profit: Math.round(farmSize * 25000).toLocaleString()
  };
  
  const elements = {
    waterRequirementText: `${calculations.water} liters per day during peak season`,
    laborRequirementText: `${calculations.labor} person-days for complete crop cycle`,
    costEstimationText: `₹${calculations.cost} estimated total investment`,
    profitAnalysisText: `₹${calculations.profit} expected net profit`
  };
  
  Object.keys(elements).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = elements[id];
  });
}

// Show results section
function showResults() {
  const formSection = document.getElementById('formSection');
  const resultsSection = document.getElementById('resultsSection');
  
  if (formSection) formSection.classList.add('hidden');
  if (resultsSection) {
    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Show form section
function showForm() {
  const formSection = document.getElementById('formSection');
  const resultsSection = document.getElementById('resultsSection');
  
  if (resultsSection) resultsSection.classList.add('hidden');
  if (formSection) {
    formSection.classList.remove('hidden');
    
    // Reset form
    const form = document.getElementById('agriculturalForm');
    if (form) form.reset();
    
    // Reset dates
    const today = new Date().toISOString().split('T')[0];
    const currentDateEl = document.getElementById('currentDate');
    const planningDateEl = document.getElementById('planningDate');
    
    if (currentDateEl) currentDateEl.value = today;
    if (planningDateEl) {
      const nextMonth = new Date();
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      planningDateEl.value = nextMonth.toISOString().split('T')[0];
    }
    
    formSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', initApp);