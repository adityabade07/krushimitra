// KrushiMitra — data.js
// All 36 Maharashtra districts — real agricultural data
// Sources: IMD, MRSAC, ICAR-Pune, GoMH Agriculture Dept, DAC MSP 2024-25
// District names updated per GR 2023-24

const DISTRICTS = {

  ahilyanagar: {
    nameEN:"Ahilyanagar", nameHI:"अहिल्यानगर", nameMR:"अहिल्यानगर",
    aliases:["ahmednagar","ahilyanagar","ahilya nagar","ahmed nagar","ahilya"],
    region:"Western Maharashtra", division:"Nashik",
    temp:{min:12,max:40,avg:28}, rainfall:580, humidity:62,
    soilTypes:["Deep Black","Medium Black","Shallow Red"],
    dominantSoil:"black", agroZone:"Scarcity Zone",
    monthlyRain:[5,3,6,10,28,118,168,145,72,33,8,3],
    crops:{
      kharif:[
        {name:"Onion",variety:"Phule Samarth, Bhima Super",yield:"70-100 Q/acre",sow:"June 15 - July 10",harvest:"Oct-Nov",days:95,water:"350-450mm",temp:"22-32C",msp:800,notes:"Ahilyanagar is Maharashtra's top onion district. Kharif onion sown after pre-monsoon rains."},
        {name:"Soybean",variety:"JS-335, MAUS-81",yield:"12-15 Q/acre",sow:"June 10-25",harvest:"Sep-Oct",days:90,water:"420-560mm",temp:"25-32C",msp:4892,notes:"Second major kharif crop. Grown in black soil areas of Shrirampur, Rahuri."},
        {name:"Cotton",variety:"NHH-44, Bunny Bt",yield:"7-10 Q/acre",sow:"June 1-15",harvest:"Dec-Jan",days:175,water:"550-750mm",temp:"27-34C",msp:6620,notes:"Grown in deeper black soil of northern talukas like Akole, Sangamner."},
        {name:"Bajra",variety:"PHB-3, HHB-67",yield:"10-14 Q/acre",sow:"June 15-30",harvest:"Sep",days:75,water:"250-350mm",temp:"28-35C",msp:2500,notes:"Drought-tolerant, grown in shallow soils of eastern talukas."}
      ],
      rabi:[
        {name:"Onion",variety:"Phule Suvarna, N-53",yield:"80-110 Q/acre",sow:"Oct 15 - Nov 10",harvest:"Mar-Apr",days:120,water:"400-500mm",temp:"12-25C",msp:800,notes:"Rabi onion is the most important crop. Stored and exported across India."},
        {name:"Wheat",variety:"GW-322, HD-2781",yield:"16-20 Q/acre",sow:"Nov 5-25",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Grown in irrigated black soil areas of Rahuri, Kopargaon."},
        {name:"Gram",variety:"JG-11, Vijay",yield:"7-9 Q/acre",sow:"Oct 20-Nov 10",harvest:"Feb-Mar",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Rainfed chickpea in drier eastern talukas."},
        {name:"Rabi Jowar",variety:"SPV-462, M-35-1",yield:"18-22 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:110,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Grown for food and fodder in non-irrigated areas."}
      ],
      summer:[
        {name:"Pomegranate",variety:"Bhagwa, Arakta",yield:"80-120 Q/acre",sow:"Perennial, pruning Feb-Mar",harvest:"Jul-Aug and Dec-Jan",days:150,water:"500-700mm",temp:"25-38C",msp:3500,notes:"Ahilyanagar and Solapur are top pomegranate belts. Bhagwa variety dominates."},
        {name:"Tomato",variety:"Namdhari 6242, Arka Rakshak",yield:"120-180 Q/acre",sow:"Nov-Dec",harvest:"Feb-Mar",days:90,water:"400-600mm",temp:"20-30C",msp:500,notes:"Protected cultivation increasing rapidly near Rahuri and Shrirampur."}
      ]
    },
    droughtRisk:"medium", floodRisk:"low", pestRisk:"medium",
    specialPests:["Onion Thrips","Purple Blotch","Stemphylium Blight","Soybean Pod Borer"],
    pestZone:"onion_belt",
    notes:"Maharashtra's largest district by area. Renamed from Ahmednagar to Ahilyanagar in 2023. Largest onion producing district in India. ICAR-NRC Onion Garlic at Rajgurunagar."
  },

  sambhajinagar: {
    nameEN:"Chhatrapati Sambhajinagar", nameHI:"छत्रपति संभाजीनगर", nameMR:"छत्रपती संभाजीनगर",
    aliases:["aurangabad","sambhajinagar","chhatrapati sambhajinagar","csnm","ch sambhajinagar"],
    region:"Marathwada", division:"Chhatrapati Sambhajinagar",
    temp:{min:10,max:43,avg:32}, rainfall:665, humidity:60,
    soilTypes:["Deep Black","Medium Black","Shallow Black"],
    dominantSoil:"black", agroZone:"Marathwada Dryland",
    monthlyRain:[4,2,7,11,32,118,172,142,74,34,8,3],
    crops:{
      kharif:[
        {name:"Soybean",variety:"JS-335, MAUS-71",yield:"11-14 Q/acre",sow:"June 15-30",harvest:"Sep-Oct",days:92,water:"400-550mm",temp:"25-32C",msp:4892,notes:"Primary kharif crop of Marathwada. Deep black cotton soil gives good yields near Gangapur, Kannad."},
        {name:"Cotton",variety:"NHH-44, Ajeet-155",yield:"7-10 Q/acre",sow:"June 1-20",harvest:"Dec-Jan",days:175,water:"600-800mm",temp:"27-34C",msp:6620,notes:"Second major kharif crop. Grown in Sillod, Kannad talukas."},
        {name:"Tur",variety:"BDN-711, ICPL-87",yield:"5-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-33C",msp:7000,notes:"Long duration intercrop with soybean and cotton in this zone."},
        {name:"Bajra",variety:"PHB-3",yield:"10-14 Q/acre",sow:"June 15-30",harvest:"Sep",days:75,water:"250-350mm",temp:"28-35C",msp:2500,notes:"Drought escape crop in scarcity periods near Paithan, Vaijapur."}
      ],
      rabi:[
        {name:"Rabi Jowar",variety:"M-35-1 (Maldandi), SPV-462",yield:"18-24 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Maldandi jowar is the cultural identity of Marathwada. Residual moisture crop."},
        {name:"Gram",variety:"JG-11, ICCC-37",yield:"7-9 Q/acre",sow:"Oct 20-Nov 10",harvest:"Feb-Mar",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Important protein crop. Grown without irrigation on residual moisture."},
        {name:"Wheat",variety:"GW-322, NW-1014",yield:"15-19 Q/acre",sow:"Nov 10-25",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Irrigated wheat in Jayakwadi canal command areas."},
        {name:"Sunflower",variety:"KBSH-44, Morden",yield:"6-8 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb",days:90,water:"300-400mm",temp:"18-30C",msp:6760,notes:"Oilseed crop in residual moisture conditions."}
      ],
      summer:[
        {name:"Green Gram",variety:"Kopargaon-1, TM-99",yield:"3-5 Q/acre",sow:"Mar 1-15",harvest:"May-Jun",days:65,water:"200-280mm",temp:"28-38C",msp:8558,notes:"Short duration summer crop. Only possible with irrigation."},
        {name:"Vegetables",variety:"Various hybrids",yield:"100-150 Q/acre",sow:"Nov-Dec",harvest:"Feb-Apr",days:90,water:"350-500mm",temp:"20-32C",msp:500,notes:"Kham river and Jayakwadi canal irrigated zones near the city."}
      ]
    },
    droughtRisk:"high", floodRisk:"low", pestRisk:"high",
    specialPests:["Soybean Girdle Beetle","Cotton Bollworm","Helicoverpa armigera","Tur Pod Fly"],
    pestZone:"soybean_belt",
    notes:"Renamed from Aurangabad to Chhatrapati Sambhajinagar in 2023. Marathwada administrative HQ. Jayakwadi dam is the main water source. Severe drought years frequent."
  },

  pune: {
    nameEN:"Pune", nameHI:"पुणे", nameMR:"पुणे",
    aliases:["pune","poona"],
    region:"Western Maharashtra", division:"Pune",
    temp:{min:10,max:40,avg:27}, rainfall:722, humidity:65,
    soilTypes:["Deep Black","Medium Black","Sandy Loam"],
    dominantSoil:"black", agroZone:"Western MH Plateau",
    monthlyRain:[8,5,10,18,40,120,180,150,90,60,20,8],
    crops:{
      kharif:[
        {name:"Soybean",variety:"JS-335, MAUS-81",yield:"12-16 Q/acre",sow:"June 10-20",harvest:"Sep-Oct",days:90,water:"420-560mm",temp:"25-32C",msp:4892,notes:"Primary kharif crop. Bhima and Nira river basin black soil gives good yields."},
        {name:"Bajra",variety:"PHB-3, HHB-67",yield:"10-14 Q/acre",sow:"June 15-30",harvest:"Sep",days:75,water:"250-350mm",temp:"28-35C",msp:2500,notes:"Grown in shallow soils of Purandar, Indapur, Baramati."},
        {name:"Maize",variety:"NK-6240, Pioneer 3396",yield:"22-28 Q/acre",sow:"June 15-25",harvest:"Sep-Oct",days:85,water:"500-700mm",temp:"25-32C",msp:2090,notes:"Grown in Junnar, Ambegaon for food and fodder."},
        {name:"Cotton",variety:"NHH-44",yield:"7-10 Q/acre",sow:"June 1-15",harvest:"Dec-Jan",days:175,water:"550-750mm",temp:"27-34C",msp:6620,notes:"Grown in Indapur, Baramati deep black soil areas."}
      ],
      rabi:[
        {name:"Wheat",variety:"GW-322, NW-1014",yield:"18-22 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-460mm",temp:"12-22C",msp:2275,notes:"Irrigated wheat in Bhima and Nira canal commands of Baramati, Indapur."},
        {name:"Gram",variety:"JG-11, Phule Vikram",yield:"8-10 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Major pulse crop grown across dryland areas."},
        {name:"Rabi Jowar",variety:"M-35-1",yield:"18-22 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Important food crop especially in Purandar, Velhe talukas."},
        {name:"Onion",variety:"N-53, Phule Suvarna",yield:"70-90 Q/acre",sow:"Oct 25-Nov 10",harvest:"Mar-Apr",days:115,water:"350-450mm",temp:"12-25C",msp:800,notes:"Indapur and Baramati are major onion growing areas."}
      ],
      summer:[
        {name:"Tomato",variety:"Namdhari 6242",yield:"120-180 Q/acre",sow:"Nov-Dec",harvest:"Feb-Apr",days:90,water:"400-600mm",temp:"20-30C",msp:500,notes:"Junnar taluka is the biggest tomato producer in Pune district."},
        {name:"Grapes",variety:"Thompson Seedless, Sharad Seedless",yield:"80-120 Q/acre",sow:"Perennial, pruning Oct",harvest:"Feb-Mar",days:150,water:"600-800mm",temp:"20-35C",msp:2500,notes:"Baramati area has grapes under drip irrigation."}
      ]
    },
    droughtRisk:"low", floodRisk:"low", pestRisk:"medium",
    specialPests:["Soybean Pod Borer","Aphids","Whitefly","Onion Thrips"],
    pestZone:"soybean_belt",
    notes:"Pune is the education hub of Maharashtra. ICAR-NRC Onion Garlic located at Rajgurunagar. Major IT city with diverse peri-urban agriculture."
  },

  nashik: {
    nameEN:"Nashik", nameHI:"नाशिक", nameMR:"नाशिक",
    aliases:["nashik","nasik"],
    region:"North Maharashtra", division:"Nashik",
    temp:{min:9,max:40,avg:28}, rainfall:700, humidity:68,
    soilTypes:["Deep Black","Sandy Loam","Alluvial"],
    dominantSoil:"black", agroZone:"Godavari Basin",
    monthlyRain:[6,4,9,14,37,143,208,153,88,41,11,5],
    crops:{
      kharif:[
        {name:"Onion",variety:"Phule Samarth, Baswant-780",yield:"70-100 Q/acre",sow:"June 10-30",harvest:"Oct-Nov",days:95,water:"350-480mm",temp:"22-32C",msp:800,notes:"Nashik is India's second largest onion producer. Lasalgaon APMC is the largest onion market in Asia."},
        {name:"Soybean",variety:"JS-335, KB-79",yield:"12-16 Q/acre",sow:"June 10-25",harvest:"Sep-Oct",days:90,water:"420-560mm",temp:"25-32C",msp:4892,notes:"Grown alongside onion in Niphad, Sinnar talukas."},
        {name:"Cotton",variety:"NHH-44",yield:"7-10 Q/acre",sow:"June 1-15",harvest:"Dec-Jan",days:175,water:"580-780mm",temp:"27-34C",msp:6620,notes:"Malegaon, Nandgaon talukas are major cotton areas."},
        {name:"Maize",variety:"NK-6240, Pioneer 3396",yield:"22-28 Q/acre",sow:"June 15-25",harvest:"Sep-Oct",days:85,water:"500-700mm",temp:"25-32C",msp:2090,notes:"Grown in Dindori, Peint for food and feed."}
      ],
      rabi:[
        {name:"Onion",variety:"N-53, Phule Suvarna, Agrifound Light Red",yield:"80-120 Q/acre",sow:"Oct 15-Nov 10",harvest:"Mar-Apr",days:120,water:"400-500mm",temp:"12-25C",msp:800,notes:"Most important rabi crop. Nashik onion exported to Europe, UK, Malaysia."},
        {name:"Wheat",variety:"GW-322, NW-1014",yield:"18-22 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-460mm",temp:"12-22C",msp:2275,notes:"Gangapur, Niphad canal irrigated areas."},
        {name:"Gram",variety:"JG-11",yield:"7-9 Q/acre",sow:"Oct 20-Nov 10",harvest:"Feb-Mar",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Dryland areas without irrigation."},
        {name:"Garlic",variety:"Godavari, G-282",yield:"40-60 Q/acre",sow:"Oct 15-Nov 1",harvest:"Feb-Mar",days:130,water:"350-450mm",temp:"12-25C",msp:2000,notes:"Nashik is a major garlic producing district. Niphad taluka leads."}
      ],
      summer:[
        {name:"Grapes",variety:"Thompson Seedless, Tas-A-Ganesh",yield:"80-120 Q/acre",sow:"Perennial, pruning Oct and April",harvest:"Feb-Apr",days:150,water:"600-800mm",temp:"18-35C",msp:2500,notes:"Nashik produces 80% of India's grapes. Wine industry centred in Dindori, Niphad. Drip irrigation essential."},
        {name:"Pomegranate",variety:"Bhagwa, Sindhuri",yield:"80-120 Q/acre",sow:"Perennial, pruning Feb",harvest:"Jun-Aug, Oct-Dec",days:150,water:"500-700mm",temp:"25-38C",msp:3500,notes:"Grown in drip-irrigated areas of Satana, Malegaon."}
      ]
    },
    droughtRisk:"medium", floodRisk:"low", pestRisk:"medium",
    specialPests:["Onion Thrips","Onion Purple Blotch","Downy Mildew (Grapes)","Cotton Bollworm"],
    pestZone:"onion_belt",
    notes:"Nashik is India's wine capital and second largest onion district. Godavari river origin. Dams: Gangapur, Wilson provide irrigation."
  },

  kolhapur: {
    nameEN:"Kolhapur", nameHI:"कोल्हापुर", nameMR:"कोल्हापूर",
    aliases:["kolhapur"],
    region:"Southern Maharashtra", division:"Kolhapur",
    temp:{min:13,max:35,avg:27}, rainfall:1100, humidity:80,
    soilTypes:["Laterite","Red Laterite","Alluvial (Panchaganga valley)"],
    dominantSoil:"laterite", agroZone:"High Rainfall Western Ghat",
    monthlyRain:[12,8,15,22,64,238,328,288,153,69,19,9],
    crops:{
      kharif:[
        {name:"Sugarcane",variety:"Co-86032, CoM-88121, Phule 265",yield:"300-450 Q/acre",sow:"Feb-Mar (adsali) or Oct-Nov (suru)",harvest:"Oct-Dec after 12-18 months",days:365,water:"1500-1800mm",temp:"25-30C",msp:3150,notes:"Kolhapur is the sugar bowl of Maharashtra. 25+ sugar factories. Both adsali (18 months) and suru (12 months) varieties grown."},
        {name:"Paddy",variety:"Jaya, PKV-HMT, IR-64",yield:"18-26 Q/acre",sow:"June 15-30",harvest:"Oct-Nov",days:130,water:"1000-1400mm",temp:"25-32C",msp:2183,notes:"Rainfed paddy in laterite uplands. Karvanda variety is local traditional paddy."},
        {name:"Soybean",variety:"JS-335, KB-79",yield:"12-15 Q/acre",sow:"June 10-25",harvest:"Sep-Oct",days:90,water:"450-600mm",temp:"24-30C",msp:4892,notes:"Grown in red laterite upland areas of Kagal, Chandgad."},
        {name:"Groundnut",variety:"TAG-24, JL-24",yield:"12-18 Q/acre",sow:"June 15-July 5",harvest:"Oct-Nov",days:105,water:"500-650mm",temp:"25-32C",msp:6783,notes:"Grown in sandy loam soils near rivers."}
      ],
      rabi:[
        {name:"Sugarcane",variety:"Co-86032, CoM-265",yield:"280-380 Q/acre",sow:"Oct-Nov",harvest:"Nov-Dec following year",days:365,water:"1400-1700mm",temp:"20-28C",msp:3150,notes:"Suru cane planted in October-November. Kolhapur sugar season runs Oct-May."},
        {name:"Wheat",variety:"GW-322",yield:"16-20 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Grown in non-sugarcane areas of Hatkanangale, Karveer."},
        {name:"Vegetables",variety:"Various hybrids",yield:"100-200 Q/acre",sow:"Sep-Nov",harvest:"Dec-Mar",days:90,water:"400-600mm",temp:"15-28C",msp:500,notes:"Cold weather vegetable cultivation near Kolhapur city."}
      ],
      summer:[
        {name:"Turmeric",variety:"Selam, Rajapuri, Phule Swarnim",yield:"80-120 Q/acre (fresh)",sow:"May-June",harvest:"Dec-Jan",days:240,water:"900-1200mm",temp:"22-32C",msp:7000,notes:"Kolhapur turmeric has distinct colour and oil content. Grown in Kagal, Karveer, Gadhinglaj."},
        {name:"Banana",variety:"Grand Naine, Basrai",yield:"200-300 Q/acre",sow:"Perennial",harvest:"Round the year",days:365,water:"1200-1500mm",temp:"20-32C",msp:3000,notes:"Tissue culture banana in Panchaganga basin irrigated areas."}
      ]
    },
    droughtRisk:"low", floodRisk:"high", pestRisk:"medium",
    specialPests:["Sugarcane Top Borer","Sugarcane Woolly Aphid","Paddy Stem Borer","Brown Plant Hopper","Turmeric Leaf Roller"],
    pestZone:"sugarcane_zone",
    notes:"Kolhapur is famous for sugar industry, Kolhapuri chappals, and Mahalaxmi temple. Panchaganga river. High flood risk in monsoon. Major turmeric producing district."
  },

  satara: {
    nameEN:"Satara", nameHI:"सातारा", nameMR:"सातारा",
    aliases:["satara"],
    region:"Western Maharashtra", division:"Pune",
    temp:{min:10,max:38,avg:25}, rainfall:860, humidity:66,
    soilTypes:["Deep Black","Medium Black","Red Laterite"],
    dominantSoil:"black", agroZone:"Western Ghat Foothills",
    monthlyRain:[10,8,12,22,50,150,220,185,115,70,25,10],
    crops:{
      kharif:[
        {name:"Soybean",variety:"JS-335, MAUS-81",yield:"12-16 Q/acre",sow:"June 10-20",harvest:"Sep-Oct",days:90,water:"420-560mm",temp:"24-30C",msp:4892,notes:"Primary kharif crop. Black soil plateau areas of Man, Khatav, Phaltan."},
        {name:"Sugarcane",variety:"Co-86032, CoM-265",yield:"280-380 Q/acre",sow:"Oct-Nov or Feb-Mar",harvest:"Oct-Dec following year",days:365,water:"1400-1700mm",temp:"24-30C",msp:3150,notes:"Koyna dam irrigation supports sugarcane in Karad, Patan, Wai."},
        {name:"Jowar",variety:"M-35-1, SPV-462",yield:"18-22 Q/acre",sow:"June 15-30",harvest:"Sep-Oct",days:110,water:"300-450mm",temp:"25-33C",msp:3180,notes:"Kharif jowar in low rainfall eastern talukas of Man, Khatav."},
        {name:"Maize",variety:"NK-6240, Pioneer 3396",yield:"22-26 Q/acre",sow:"June 15-25",harvest:"Sep-Oct",days:85,water:"500-700mm",temp:"24-30C",msp:2090,notes:"Grown near Wai, Javali, Satara city area."}
      ],
      rabi:[
        {name:"Wheat",variety:"GW-322, NW-1014",yield:"18-22 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-460mm",temp:"12-22C",msp:2275,notes:"Koyna and Urmodi canal command areas."},
        {name:"Gram",variety:"JG-11, Phule Vikram",yield:"8-10 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Dryland pulse crop in eastern talukas."},
        {name:"Strawberry",variety:"Winter Dawn, Camarosa",yield:"60-80 kg/plot",sow:"Sep-Oct",harvest:"Dec-Mar",days:120,water:"300-400mm",temp:"8-22C",msp:2000,notes:"Mahabaleshwar-Panchgani area. India's strawberry capital. Only 500-800m altitude area where strawberry grows."},
        {name:"Rabi Jowar",variety:"M-35-1",yield:"18-22 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Important food crop in Man, Khatav, Phaltan."}
      ],
      summer:[
        {name:"Vegetables",variety:"Hybrid tomato, cabbage, capsicum",yield:"80-150 Q/acre",sow:"Nov-Dec",harvest:"Feb-Apr",days:90,water:"400-600mm",temp:"18-28C",msp:500,notes:"Wai, Mahabaleshwar plateau area vegetables."},
        {name:"Onion",variety:"N-53, Phule Suvarna",yield:"70-90 Q/acre",sow:"Oct 25-Nov 10",harvest:"Mar-Apr",days:115,water:"350-450mm",temp:"12-25C",msp:800,notes:"Phaltan and Khatav talukas are growing onion areas."}
      ]
    },
    droughtRisk:"low", floodRisk:"low", pestRisk:"medium",
    specialPests:["Soybean Pod Borer","Aphids","Sugarcane Top Borer","Strawberry Grey Mould"],
    pestZone:"soybean_belt",
    notes:"Mahabaleshwar strawberries famous worldwide. Kaas Plateau UNESCO Heritage site. Koyna dam hydropower. Wai near Krishna river."
  },

  sangli: {
    nameEN:"Sangli", nameHI:"सांगली", nameMR:"सांगली",
    aliases:["sangli"],
    region:"Western Maharashtra", division:"Kolhapur",
    temp:{min:11,max:40,avg:26}, rainfall:680, humidity:60,
    soilTypes:["Deep Black","Alluvial (Krishna-Warna)","Sandy Loam"],
    dominantSoil:"black", agroZone:"Krishna Basin",
    monthlyRain:[8,6,10,18,40,110,165,140,90,58,20,8],
    crops:{
      kharif:[
        {name:"Sugarcane",variety:"Co-86032, CoM-265, MS-10001",yield:"300-420 Q/acre",sow:"Feb-Mar (adsali) or Oct-Nov",harvest:"Oct-Jan after 12-18 months",days:365,water:"1400-1700mm",temp:"25-30C",msp:3150,notes:"Sangli-Miraj-Tasgaon belt is core sugarcane zone. Krishna and Warna canal commands."},
        {name:"Soybean",variety:"JS-335, MAUS-81",yield:"11-14 Q/acre",sow:"June 10-25",harvest:"Sep-Oct",days:90,water:"400-530mm",temp:"25-32C",msp:4892,notes:"Grown in non-sugarcane dryland areas of Jat, Kavathe-Mahankal."},
        {name:"Cotton",variety:"NHH-44",yield:"7-10 Q/acre",sow:"June 5-20",harvest:"Dec-Jan",days:175,water:"550-750mm",temp:"27-34C",msp:6620,notes:"Jat, Tasgaon talukas with low irrigation."}
      ],
      rabi:[
        {name:"Wheat",variety:"GW-322",yield:"16-20 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Canal command areas along Krishna and Warna rivers."},
        {name:"Turmeric",variety:"Selam, Rajapuri",yield:"80-120 Q/acre (fresh)",sow:"May-June",harvest:"Dec-Jan",days:240,water:"900-1200mm",temp:"22-32C",msp:7000,notes:"Sangli is the Turmeric Capital of India. Sangli APMC handles 25-30% of India's turmeric trade."},
        {name:"Grapes",variety:"Thompson Seedless, Sharad Seedless",yield:"80-120 Q/acre",sow:"Perennial, pruning Oct",harvest:"Feb-Apr",days:150,water:"600-800mm",temp:"20-35C",msp:2500,notes:"Tasgaon taluka is the grape hub. Wine industry growing."},
        {name:"Gram",variety:"JG-11",yield:"7-9 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Dryland areas of Jat, Atpadi."}
      ],
      summer:[
        {name:"Grapes (summer pruning crop)",variety:"Thompson Seedless",yield:"80-120 Q/acre",sow:"Perennial, April pruning",harvest:"Oct-Nov",days:150,water:"600-800mm",temp:"25-38C",msp:2500,notes:"Tasgaon, Miraj belt. Summer pruning gives Oct-Nov harvest."},
        {name:"Vegetables",variety:"Tomato, capsicum, brinjal",yield:"80-150 Q/acre",sow:"Nov-Dec",harvest:"Feb-Apr",days:90,water:"400-600mm",temp:"20-30C",msp:500,notes:"Peri-urban vegetable cultivation near Sangli city."}
      ]
    },
    droughtRisk:"low", floodRisk:"medium", pestRisk:"medium",
    specialPests:["Turmeric Leaf Roller","Grape Downy Mildew","Grape Powdery Mildew","Sugarcane Top Borer"],
    pestZone:"sugarcane_zone",
    notes:"Turmeric Capital of India. Krishna-Warna rivers flood risk in heavy monsoon years. Major grape belt. Sangli district is also known for dried fruits trade."
  },

  latur: {
    nameEN:"Latur", nameHI:"लातूर", nameMR:"लातूर",
    aliases:["latur"],
    region:"Marathwada", division:"Latur",
    temp:{min:10,max:44,avg:33}, rainfall:620, humidity:58,
    soilTypes:["Deep Black","Medium Black","Shallow Black"],
    dominantSoil:"black", agroZone:"Marathwada Dryland",
    monthlyRain:[4,2,6,10,27,113,162,137,69,31,6,2],
    crops:{
      kharif:[
        {name:"Soybean",variety:"JS-335, MAUS-71, KB-79",yield:"10-14 Q/acre",sow:"June 20-30",harvest:"Sep-Oct",days:92,water:"380-500mm",temp:"26-33C",msp:4892,notes:"Primary kharif crop. Grown across Latur, Udgir, Nilanga, Renapur talukas."},
        {name:"Tur",variety:"BDN-711, LRG-41",yield:"5-8 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-33C",msp:7000,notes:"Tur is the identity crop of Latur. Latur-Osmanabad belt are major tur producing areas in India."},
        {name:"Cotton",variety:"NHH-44, Bunny-BG-II",yield:"6-9 Q/acre",sow:"June 5-20",harvest:"Dec-Jan",days:175,water:"550-750mm",temp:"27-34C",msp:6620,notes:"Grown in deeper black soil. High risk in low rainfall years."},
        {name:"Bajra",variety:"PHB-3, HHB-67",yield:"9-12 Q/acre",sow:"June 20-July 5",harvest:"Sep",days:75,water:"250-350mm",temp:"28-35C",msp:2500,notes:"Drought escape crop grown in shallow soils."}
      ],
      rabi:[
        {name:"Rabi Jowar",variety:"M-35-1 (Maldandi)",yield:"18-24 Q/acre",sow:"Oct 20-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Maldandi jowar of Latur-Osmanabad belt is famous for large grain and quality flour. Pure residual moisture crop."},
        {name:"Gram",variety:"JG-11, Vijay, Phule Vikram",yield:"6-9 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Important food and cash crop. Grown without irrigation."},
        {name:"Wheat",variety:"GW-322",yield:"14-18 Q/acre",sow:"Nov 10-25",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Irrigated wheat in canal and well irrigated areas of Udgir, Ausa."},
        {name:"Sunflower",variety:"KBSH-44, E-78",yield:"5-8 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb",days:90,water:"300-400mm",temp:"18-30C",msp:6760,notes:"Short duration oilseed on residual moisture."}
      ],
      summer:[
        {name:"Green Gram",variety:"Kopargaon-1, SML-668",yield:"3-4 Q/acre",sow:"Mar 1-15",harvest:"May-Jun",days:65,water:"200-280mm",temp:"28-38C",msp:8558,notes:"Only possible with irrigation. Minor pre-monsoon crop."},
        {name:"Onion",variety:"N-53",yield:"50-70 Q/acre",sow:"Nov transplanted",harvest:"Mar-Apr",days:120,water:"350-450mm",temp:"15-28C",msp:800,notes:"Grown in limited irrigated pockets of Udgir, Chakur."}
      ]
    },
    droughtRisk:"high", floodRisk:"low", pestRisk:"medium",
    specialPests:["Tur Pod Fly","Tur Plume Moth","Soybean Girdle Beetle","Gram Pod Borer (Helicoverpa)"],
    pestZone:"soybean_belt",
    notes:"Latur earthquake 1993. Major tur (red gram) producing district. Water scarcity acute — Latur city had water train supply in 2016. Deep black cotton soil."
  },

  solapur: {
    nameEN:"Solapur", nameHI:"सोलापुर", nameMR:"सोलापूर",
    aliases:["solapur","sholapur"],
    region:"Southern Maharashtra", division:"Pune",
    temp:{min:11,max:43,avg:34}, rainfall:510, humidity:55,
    soilTypes:["Black Soil","Sandy Loam","Shallow Black"],
    dominantSoil:"black", agroZone:"Scarcity Zone",
    monthlyRain:[3,2,5,8,21,98,148,128,63,27,5,2],
    crops:{
      kharif:[
        {name:"Cotton",variety:"NHH-44, Bunny-BG-II",yield:"6-10 Q/acre",sow:"June 1-15",harvest:"Dec-Jan",days:175,water:"500-700mm",temp:"28-35C",msp:6620,notes:"Cotton in deep black soils of Mohol, Barshi, Pandharpur. Very dependent on rainfall."},
        {name:"Bajra",variety:"PHB-3, HHB-67",yield:"8-12 Q/acre",sow:"June 20-July 5",harvest:"Sep",days:75,water:"250-350mm",temp:"28-36C",msp:2500,notes:"Drought tolerant. Grown in shallow and sandy soils."},
        {name:"Tur",variety:"BDN-711, LRG-30",yield:"4-7 Q/acre",sow:"June 15-30",harvest:"Dec-Jan",days:180,water:"400-600mm",temp:"26-34C",msp:7000,notes:"Important protein crop in this low rainfall zone."},
        {name:"Soybean",variety:"JS-335, MAUS-81",yield:"9-12 Q/acre",sow:"June 20-July 5",harvest:"Sep-Oct",days:90,water:"400-530mm",temp:"26-33C",msp:4892,notes:"Lower yields than other districts due to limited rainfall."}
      ],
      rabi:[
        {name:"Rabi Jowar",variety:"M-35-1, SPV-462",yield:"18-24 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Solapur jowar is famous. Pure residual moisture crop grown across Solapur, Barshi."},
        {name:"Pomegranate",variety:"Bhagwa, Ganesh, Sindhuri",yield:"80-120 Q/acre",sow:"Perennial, bahar treatment Jul-Aug",harvest:"Mar-Apr and Nov-Dec",days:150,water:"500-700mm",temp:"25-38C",msp:3500,notes:"Solapur is the second largest pomegranate district. Bhagwa variety has PGI tag. Sangola, Pandharpur are major centres."},
        {name:"Gram",variety:"JG-11, JAKI-9218",yield:"6-9 Q/acre",sow:"Oct 20-Nov 5",harvest:"Feb",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Important food crop. Grown completely rainfed."},
        {name:"Sunflower",variety:"KBSH-44, Morden",yield:"5-8 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb",days:90,water:"300-400mm",temp:"18-30C",msp:6760,notes:"Short duration oil crop in dryland areas."}
      ],
      summer:[
        {name:"Tomato",variety:"Namdhari 6242",yield:"100-160 Q/acre",sow:"Nov-Dec",harvest:"Feb-Apr",days:90,water:"400-600mm",temp:"22-32C",msp:500,notes:"Grown in canal command areas near Bhima river."},
        {name:"Watermelon",variety:"Sugar Baby, Arka Manik",yield:"80-120 Q/acre",sow:"Jan-Feb",harvest:"Apr-May",days:75,water:"350-450mm",temp:"30-40C",msp:500,notes:"Sandy loam soils near Bhima and Sina rivers."}
      ]
    },
    droughtRisk:"high", floodRisk:"low", pestRisk:"medium",
    specialPests:["Cotton Bollworm","Bajra Stem Borer","Pomegranate Butterfly","Tur Pod Fly"],
    pestZone:"cotton_belt",
    notes:"Driest district in Maharashtra (510mm). Bhima river. Solapur textiles (terry towels) famous. Pandharpur Vitthal temple. Summers above 42C."
  },

  nagpur: {
    nameEN:"Nagpur", nameHI:"नागपुर", nameMR:"नागपूर",
    aliases:["nagpur"],
    region:"Vidarbha", division:"Nagpur",
    temp:{min:8,max:47,avg:30}, rainfall:1034, humidity:60,
    soilTypes:["Red Soil","Deep Black","Shallow Red"],
    dominantSoil:"red", agroZone:"Vidarbha Plateau",
    monthlyRain:[12,8,15,20,50,160,260,220,140,80,25,10],
    crops:{
      kharif:[
        {name:"Cotton",variety:"NHH-44, RCH-650, Bunny BG-II",yield:"8-12 Q/acre",sow:"June 1-15",harvest:"Dec-Jan",days:180,water:"700-900mm",temp:"28-35C",msp:6620,notes:"Cotton is dominant crop in Nagpur division black soils. Hinganghat, Kamptee are major areas."},
        {name:"Soybean",variety:"JS-335, MAUS-81",yield:"12-16 Q/acre",sow:"June 10-20",harvest:"Sep-Oct",days:90,water:"430-560mm",temp:"27-33C",msp:4892,notes:"Grown in black soil areas of Katol, Narkhed, Savner."},
        {name:"Paddy",variety:"PKV-HMT, Swarna, IR-64",yield:"20-26 Q/acre",sow:"June 15-30",harvest:"Oct-Nov",days:130,water:"1000-1400mm",temp:"26-32C",msp:2183,notes:"Wainganga and Kanhan river areas. Nagpur division rice is traded in Maharashtra."},
        {name:"Tur",variety:"BDN-711, Maruti",yield:"5-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-34C",msp:7000,notes:"Intercropped with cotton in black soil areas."}
      ],
      rabi:[
        {name:"Wheat",variety:"GW-322, NW-1014",yield:"17-21 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Canal command areas of Nagpur-Wardha region."},
        {name:"Gram",variety:"JG-74, JG-11",yield:"8-10 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:108,water:"300-400mm",temp:"12-22C",msp:5440,notes:"Major rabi pulse in Nagpur plateau dryland areas."},
        {name:"Orange (Nagpur Santra)",variety:"Nagpur Mandarin",yield:"100-200 Q/acre",sow:"Perennial",harvest:"Nov-Jan",days:150,water:"700-900mm",temp:"22-35C",msp:3500,notes:"Nagpur Orange (Santra) is world-famous. GI tag. Katol, Narkhed are the core orange belt."}
      ],
      summer:[
        {name:"Watermelon",variety:"Sugar Baby, Arka Manik",yield:"80-130 Q/acre",sow:"Jan-Feb",harvest:"Apr-May",days:75,water:"350-450mm",temp:"30-42C",msp:500,notes:"Sandy loam soils near Kanhan and Wainganga rivers."},
        {name:"Vegetables",variety:"Hybrid tomato, brinjal",yield:"80-150 Q/acre",sow:"Nov-Dec",harvest:"Feb-Apr",days:90,water:"400-600mm",temp:"20-32C",msp:500,notes:"Peri-urban vegetable cultivation around Nagpur city."}
      ]
    },
    droughtRisk:"low", floodRisk:"medium", pestRisk:"high",
    specialPests:["Pink Bollworm","American Bollworm","Soybean Girdle Beetle","Citrus Leaf Miner"],
    pestZone:"cotton_belt",
    notes:"Nagpur Orange (Santra) is world-famous with GI tag. Sub-capital of Maharashtra. Cotton and orange belt. Dr. PDKV and VNMKV research centres here."
  },

  amravati: {
    nameEN:"Amravati", nameHI:"अमरावती", nameMR:"अमरावती",
    aliases:["amravati","amaravati"],
    region:"Vidarbha", division:"Amravati",
    temp:{min:9,max:47,avg:30}, rainfall:950, humidity:62,
    soilTypes:["Deep Black","Red Soil","Medium Black"],
    dominantSoil:"black", agroZone:"Vidarbha Cotton Belt",
    monthlyRain:[10,8,14,20,48,155,255,215,135,78,24,9],
    crops:{
      kharif:[
        {name:"Cotton",variety:"NHH-44, Ajeet 155, Bunny BG-II",yield:"8-13 Q/acre",sow:"June 1-15",harvest:"Dec-Jan",days:180,water:"700-850mm",temp:"28-35C",msp:6620,notes:"Amravati is the cotton bowl of Maharashtra. Daryapur, Warud are major cotton areas. Pink bollworm is endemic."},
        {name:"Soybean",variety:"JS-335, MAUS-81",yield:"12-16 Q/acre",sow:"June 10-20",harvest:"Sep-Oct",days:90,water:"430-560mm",temp:"27-33C",msp:4892,notes:"Second major crop. Black soil areas of Chandur Bazar, Morshi."},
        {name:"Tur",variety:"BDN-711, Maruti",yield:"5-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-34C",msp:7000,notes:"Intercropped with cotton."},
        {name:"Paddy",variety:"PKV-HMT, Swarna",yield:"20-26 Q/acre",sow:"June 15-30",harvest:"Oct-Nov",days:130,water:"1000-1400mm",temp:"26-32C",msp:2183,notes:"Higher rainfall talukas near Melghat — Dharni, Chikhaldara."}
      ],
      rabi:[
        {name:"Wheat",variety:"GW-322, NW-1014",yield:"17-21 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Canal command areas of Upper Wardha dam."},
        {name:"Gram",variety:"JG-74, JG-11",yield:"8-10 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:108,water:"300-400mm",temp:"12-22C",msp:5440,notes:"Important pulse crop in dryland areas."},
        {name:"Rabi Jowar",variety:"M-35-1",yield:"17-21 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Residual moisture crop in plateau areas."}
      ],
      summer:[
        {name:"Orange",variety:"Nagpur Mandarin type",yield:"100-160 Q/acre",sow:"Perennial",harvest:"Nov-Jan",days:150,water:"700-900mm",temp:"24-33C",msp:3500,notes:"Warud and Morshi talukas are emerging orange areas."},
        {name:"Watermelon",variety:"Sugar Baby",yield:"80-120 Q/acre",sow:"Jan-Feb",harvest:"Apr-May",days:75,water:"350-450mm",temp:"30-42C",msp:500,notes:"Sandy areas near Purna river."}
      ]
    },
    droughtRisk:"low", floodRisk:"medium", pestRisk:"high",
    specialPests:["Pink Bollworm","American Bollworm","Soybean Girdle Beetle","Whitefly"],
    pestZone:"cotton_belt",
    notes:"Cotton bowl of Maharashtra. Pink bollworm and American bollworm are serious endemic threats. Melghat tiger reserve in northern talukas. Dr. PDKV university is at Akola."
  },

  yavatmal: {
    nameEN:"Yavatmal", nameHI:"यवतमाल", nameMR:"यवतमाळ",
    aliases:["yavatmal","yawatmal"],
    region:"Vidarbha", division:"Amravati",
    temp:{min:9,max:46,avg:31}, rainfall:1020, humidity:63,
    soilTypes:["Deep Black","Medium Black","Red Soil"],
    dominantSoil:"black", agroZone:"Vidarbha Cotton Belt",
    monthlyRain:[12,9,15,22,52,165,270,228,142,82,26,10],
    crops:{
      kharif:[
        {name:"Cotton",variety:"NHH-44, Ajeet 155",yield:"7-11 Q/acre",sow:"June 1-15",harvest:"Dec-Jan",days:180,water:"700-900mm",temp:"28-35C",msp:6620,notes:"Cotton dominant district. Wani, Darwha, Pusad are major areas. High pesticide use zone."},
        {name:"Soybean",variety:"JS-335, MAUS-81",yield:"11-15 Q/acre",sow:"June 10-20",harvest:"Sep-Oct",days:90,water:"420-560mm",temp:"26-33C",msp:4892,notes:"Second major crop grown across the plateau."},
        {name:"Tur",variety:"BDN-711, Maruti",yield:"5-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-34C",msp:7000,notes:"Important intercrop."},
        {name:"Paddy",variety:"PKV-HMT, Jaya",yield:"18-24 Q/acre",sow:"June 15-30",harvest:"Oct-Nov",days:130,water:"1000-1400mm",temp:"26-32C",msp:2183,notes:"Wardha and Painganga river areas near Ghatanji, Wani."}
      ],
      rabi:[
        {name:"Wheat",variety:"GW-322, NW-1014",yield:"16-20 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Lower Wardha canal command."},
        {name:"Gram",variety:"JG-74, JG-11",yield:"7-9 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:105,water:"300-400mm",temp:"12-22C",msp:5440,notes:"Major pulse crop."},
        {name:"Rabi Jowar",variety:"M-35-1",yield:"17-21 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Residual moisture food crop."}
      ],
      summer:[
        {name:"Watermelon",variety:"Sugar Baby",yield:"80-120 Q/acre",sow:"Jan-Feb",harvest:"Apr-May",days:75,water:"350-450mm",temp:"30-42C",msp:500,notes:"Sandy soils near Wardha and Painganga rivers."},
        {name:"Vegetables",variety:"Tomato, brinjal",yield:"80-140 Q/acre",sow:"Nov-Dec",harvest:"Feb-Apr",days:90,water:"400-600mm",temp:"20-32C",msp:500,notes:"Near Yavatmal city and Wani town."}
      ]
    },
    droughtRisk:"low", floodRisk:"medium", pestRisk:"high",
    specialPests:["Pink Bollworm","American Bollworm","Soybean Girdle Beetle","Whitefly"],
    pestZone:"cotton_belt",
    notes:"Cotton farmers distress zone. Wardha and Painganga rivers. Historical pesticide poisoning issues. High dependency on BT cotton."
  },

  wardha: {
    nameEN:"Wardha", nameHI:"वर्धा", nameMR:"वर्धा",
    aliases:["wardha"],
    region:"Vidarbha", division:"Nagpur",
    temp:{min:9,max:47,avg:30}, rainfall:1065, humidity:62,
    soilTypes:["Deep Black","Medium Black","Red Laterite"],
    dominantSoil:"black", agroZone:"Wardha Valley Cotton Belt",
    monthlyRain:[12,9,16,22,52,168,272,232,144,84,26,11],
    crops:{
      kharif:[
        {name:"Cotton",variety:"NHH-44, RCH-650",yield:"8-13 Q/acre",sow:"June 1-15",harvest:"Dec-Jan",days:180,water:"700-850mm",temp:"28-34C",msp:6620,notes:"Wardha is cotton-dominant. Sevagram (Gandhi Ashram) is here. Pink bollworm persistent problem."},
        {name:"Soybean",variety:"JS-335, MAUS-81",yield:"12-16 Q/acre",sow:"June 10-20",harvest:"Sep-Oct",days:90,water:"430-560mm",temp:"27-33C",msp:4892,notes:"Black soil areas of Wardha, Hinganghat."},
        {name:"Tur",variety:"BDN-711, Maruti",yield:"5-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-34C",msp:7000,notes:"Intercropped with cotton."},
        {name:"Paddy",variety:"PKV-HMT, Sindewahi",yield:"20-26 Q/acre",sow:"June 15-30",harvest:"Oct-Nov",days:130,water:"1000-1400mm",temp:"25-32C",msp:2183,notes:"Wardha and Hinganghat talukas near river."}
      ],
      rabi:[
        {name:"Wheat",variety:"GW-322, NW-1014",yield:"17-21 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:115,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Wardha-Wainganga canal command."},
        {name:"Gram",variety:"JG-74, JG-11",yield:"8-10 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:108,water:"300-400mm",temp:"12-22C",msp:5440,notes:"Major pulse crop."},
        {name:"Rabi Jowar",variety:"M-35-1",yield:"18-22 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Residual moisture crop."}
      ],
      summer:[
        {name:"Orange",variety:"Nagpur Santra type",yield:"100-180 Q/acre",sow:"Perennial",harvest:"Nov-Jan",days:150,water:"700-900mm",temp:"24-33C",msp:3500,notes:"Arvi and Deoli talukas are emerging orange areas."},
        {name:"Watermelon",variety:"Sugar Baby",yield:"80-120 Q/acre",sow:"Jan-Feb",harvest:"Apr-May",days:75,water:"350-450mm",temp:"30-42C",msp:500,notes:"Sandy soils near Wardha river."}
      ]
    },
    droughtRisk:"low", floodRisk:"medium", pestRisk:"high",
    specialPests:["Pink Bollworm","American Bollworm","Soybean Girdle Beetle","Whitefly"],
    pestZone:"cotton_belt",
    notes:"Wardha has Mahatma Gandhi's Sevagram Ashram. Wardha river flows through the district. Major cotton-soybean district. Hinganghat is a major cotton ginning hub."
  },

  jalgaon: {
    nameEN:"Jalgaon", nameHI:"जळगाव", nameMR:"जळगाव",
    aliases:["jalgaon"],
    region:"North Maharashtra", division:"Nashik",
    temp:{min:9,max:47,avg:35}, rainfall:630, humidity:61,
    soilTypes:["Deep Black","Alluvial (Tapi valley)","Sandy Loam"],
    dominantSoil:"alluvial", agroZone:"Tapi Valley",
    monthlyRain:[4,3,6,12,27,122,172,152,71,31,7,3],
    crops:{
      kharif:[
        {name:"Banana",variety:"Grand Naine (G9), Basrai, Shrimanti",yield:"200-350 Q/acre",sow:"Perennial, tissue culture plants planted Feb-Mar",harvest:"Round the year (12-14 months)",days:365,water:"1200-1500mm",temp:"25-35C",msp:3000,notes:"Jalgaon is the Banana Capital of Maharashtra. Tapi alluvial soil is ideal. 85,000+ ha banana. Drip irrigation essential. Export to Middle East."},
        {name:"Cotton",variety:"NHH-44, Bunny BG-II",yield:"8-11 Q/acre",sow:"June 1-15",harvest:"Dec-Jan",days:175,water:"600-800mm",temp:"28-35C",msp:6620,notes:"Deep black soil areas of Chopda, Raver, Yawal away from Tapi valley."},
        {name:"Soybean",variety:"JS-335",yield:"11-14 Q/acre",sow:"June 10-25",harvest:"Sep-Oct",days:90,water:"420-560mm",temp:"26-33C",msp:4892,notes:"Grown in plateau areas of Amalner, Erandol."},
        {name:"Maize",variety:"Pioneer 3396, NK-6240",yield:"22-28 Q/acre",sow:"June 15-25",harvest:"Sep-Oct",days:85,water:"500-700mm",temp:"25-32C",msp:2090,notes:"Alluvial soil of Tapi gives excellent maize."}
      ],
      rabi:[
        {name:"Wheat",variety:"GW-322, HD-2781",yield:"18-22 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-460mm",temp:"12-22C",msp:2275,notes:"Tapi canal command. Best wheat yields in North Maharashtra."},
        {name:"Gram",variety:"JG-11, ICCC-37",yield:"7-9 Q/acre",sow:"Oct 20-Nov 10",harvest:"Feb",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Dryland rabi pulse."},
        {name:"Rabi Jowar",variety:"M-35-1",yield:"18-22 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Plateau areas away from irrigation."}
      ],
      summer:[
        {name:"Banana",variety:"Grand Naine G9",yield:"200-350 Q/acre",sow:"Perennial",harvest:"Round the year",days:365,water:"1200-1500mm",temp:"25-38C",msp:3000,notes:"Summer banana harvest is peak export season from Jalgaon."},
        {name:"Watermelon",variety:"Sugar Baby, Arka Manik",yield:"80-130 Q/acre",sow:"Jan-Feb",harvest:"Apr-May",days:75,water:"350-450mm",temp:"30-40C",msp:500,notes:"Riverbed cultivation in sandy soil near Tapi."}
      ]
    },
    droughtRisk:"medium", floodRisk:"low", pestRisk:"medium",
    specialPests:["Banana Stem Weevil","Banana Bunchy Top Virus (BBTV)","Banana Rhizome Weevil","Cotton Bollworm"],
    pestZone:"banana_zone",
    notes:"Jalgaon is the Banana Capital of Maharashtra. Tapi river valley provides alluvial soil. Extremely hot summers (up to 47C). Savda, Chopda are major banana markets."
  },

  nanded: {
    nameEN:"Nanded", nameHI:"नांदेड", nameMR:"नांदेड",
    aliases:["nanded"],
    region:"Marathwada", division:"Latur",
    temp:{min:10,max:43,avg:32}, rainfall:870, humidity:64,
    soilTypes:["Deep Black","Medium Black","Red Laterite"],
    dominantSoil:"black", agroZone:"Godavari-Manjra Basin",
    monthlyRain:[6,4,8,13,37,157,233,202,108,49,10,4],
    crops:{
      kharif:[
        {name:"Soybean",variety:"JS-335, MAUS-71",yield:"12-16 Q/acre",sow:"June 15-25",harvest:"Sep-Oct",days:90,water:"420-560mm",temp:"26-32C",msp:4892,notes:"Primary kharif crop. Godavari basin black soil gives good yields."},
        {name:"Cotton",variety:"NHH-44, Ajeet 155",yield:"7-11 Q/acre",sow:"June 5-20",harvest:"Dec-Jan",days:175,water:"650-850mm",temp:"27-34C",msp:6620,notes:"Major cash crop in Naigaon, Deglur, Biloli talukas."},
        {name:"Tur",variety:"BDN-711, LRG-41",yield:"5-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-33C",msp:7000,notes:"Intercropped with soybean and cotton."},
        {name:"Paddy",variety:"PKV-HMT, Jaya",yield:"18-24 Q/acre",sow:"June 15-30",harvest:"Oct-Nov",days:130,water:"1000-1400mm",temp:"25-32C",msp:2183,notes:"High rainfall areas near Godavari river in Kinwat, Hadgaon."}
      ],
      rabi:[
        {name:"Rabi Jowar",variety:"M-35-1 (Maldandi), SPV-422",yield:"20-25 Q/acre",sow:"Oct 20-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Major food crop. Godavari basin soil gives good yields."},
        {name:"Gram",variety:"JG-11, Phule Vikram",yield:"7-9 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Important pulse crop."},
        {name:"Wheat",variety:"GW-322",yield:"15-19 Q/acre",sow:"Nov 10-25",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Canal and well irrigated areas of Nanded, Kandhar."}
      ],
      summer:[
        {name:"Green Gram",variety:"Kopargaon-1",yield:"3-4 Q/acre",sow:"Mar 1-15",harvest:"May",days:65,water:"200-280mm",temp:"28-38C",msp:8558,notes:"Pre-monsoon irrigated crop."},
        {name:"Vegetables",variety:"Tomato, brinjal",yield:"80-140 Q/acre",sow:"Nov-Dec",harvest:"Feb-Apr",days:90,water:"350-500mm",temp:"20-32C",msp:500,notes:"Peri-urban vegetable cultivation near Nanded city."}
      ]
    },
    droughtRisk:"medium", floodRisk:"low", pestRisk:"high",
    specialPests:["Soybean Girdle Beetle","Pod Borer","Tur Pod Fly","Cotton Bollworm"],
    pestZone:"soybean_belt",
    notes:"Nanded is the Sikh holy city — Hazur Sahib Gurudwara. Godavari and Manjra rivers. Swami Ramanand Teertha Marathwada University."
  },

  ratnagiri: {
    nameEN:"Ratnagiri", nameHI:"रत्नागिरी", nameMR:"रत्नागिरी",
    aliases:["ratnagiri"],
    region:"Konkan", division:"Konkan",
    temp:{min:16,max:36,avg:28}, rainfall:3100, humidity:85,
    soilTypes:["Laterite","Red Laterite","Coastal Sandy"],
    dominantSoil:"laterite", agroZone:"Konkan High Rainfall",
    monthlyRain:[20,12,18,24,88,598,818,718,378,148,33,15],
    crops:{
      kharif:[
        {name:"Alphonso Mango",variety:"Hapus GI tagged, Keshar",yield:"80-130 Q/acre",sow:"Perennial, flowering Feb-Mar, harvest Apr-Jun",harvest:"Apr-Jun",days:150,water:"1000-1500mm",temp:"24-34C",msp:8000,notes:"Ratnagiri Alphonso Mango has GI tag. Devgad and Ratnagiri mangoes exported to UK, EU, Japan, USA. Never grows well inland."},
        {name:"Paddy",variety:"Ambemohar, Kari Joha, Ratnagiri-2",yield:"15-22 Q/acre",sow:"June 10-25",harvest:"Oct-Nov",days:130,water:"1200-1600mm",temp:"26-30C",msp:2183,notes:"Rainfed paddy. Ambemohar rice is famous for its aroma. Traditional varieties preferred for taste."},
        {name:"Cashew",variety:"Vengurla-4, Vengurla-7, Vengurla-8",yield:"3-6 Q/acre (nut)",sow:"Perennial, planted Jul-Aug",harvest:"Mar-May",days:365,water:"1200-1800mm",temp:"24-35C",msp:5000,notes:"Konkan Development Corp promotes Vengurla varieties. Cashew apple juice and feni are by-products."},
        {name:"Nachni (Finger Millet)",variety:"Phule Nachni, local",yield:"6-10 Q/acre",sow:"June-July",harvest:"Oct-Nov",days:120,water:"800-1000mm",temp:"20-28C",msp:3846,notes:"Traditional food crop on laterite upland. Rich in calcium and iron."}
      ],
      rabi:[
        {name:"Mango (management)",variety:"Hapus grafted",yield:"See kharif",sow:"Pruning Oct-Nov, flowering Jan-Feb",harvest:"Apr-Jun",days:150,water:"managed",temp:"18-32C",msp:8000,notes:"Mango management is year-round — winter pruning, flowering protection, fruit set care."},
        {name:"Vegetables",variety:"Hybrid varieties",yield:"50-100 Q/acre",sow:"Oct-Nov",harvest:"Jan-Mar",days:90,water:"300-500mm",temp:"20-30C",msp:500,notes:"Grown in coastal valley alluvial soils."},
        {name:"Coconut",variety:"WCT, Hybrid Mangala",yield:"60-80 nuts per tree per year",sow:"Perennial",harvest:"Round the year",days:365,water:"1200-2000mm",temp:"25-34C",msp:3200,notes:"Coconut oil, copra, neera — multiple products from coastal areas."}
      ],
      summer:[
        {name:"Alphonso Mango peak harvest",variety:"Hapus",yield:"Peak Apr-Jun",sow:"N/A",harvest:"Apr-Jun",days:60,water:"managed",temp:"28-36C",msp:8000,notes:"April-May is the peak export season. Container shipments to EU, UK, Japan."},
        {name:"Jackfruit",variety:"Local selection",yield:"50-100 kg per tree",sow:"Perennial",harvest:"Apr-Jun",days:365,water:"1000-1500mm",temp:"22-35C",msp:1000,notes:"Important secondary fruit. Processed as chips, pickle, curry."}
      ]
    },
    droughtRisk:"low", floodRisk:"high", pestRisk:"medium",
    specialPests:["Mango Hopper","Mango Stone Weevil","Mango Malformation","Cashew Tea Mosquito Bug","Paddy Brown Plant Hopper"],
    pestZone:"konkan_mango",
    notes:"Ratnagiri Alphonso Mango and Devgad Mango have GI tags. Konkan highest rainfall coast. Fish farming and tourism also important."
  },

  parbhani: {
    nameEN:"Parbhani", nameHI:"परभणी", nameMR:"परभणी",
    aliases:["parbhani"],
    region:"Marathwada", division:"Chhatrapati Sambhajinagar",
    temp:{min:10,max:43,avg:32}, rainfall:830, humidity:62,
    soilTypes:["Deep Black","Medium Black"],
    dominantSoil:"black", agroZone:"Marathwada",
    monthlyRain:[5,3,8,12,34,153,218,188,98,44,9,4],
    crops:{
      kharif:[
        {name:"Cotton",variety:"NHH-44, Ajeet 155",yield:"7-10 Q/acre",sow:"June 5-20",harvest:"Dec-Jan",days:175,water:"650-850mm",temp:"27-33C",msp:6620,notes:"Cotton dominant Marathwada district. Parbhani, Sengaon, Jintur are major areas."},
        {name:"Soybean",variety:"JS-335, MAUS-71",yield:"11-14 Q/acre",sow:"June 15-25",harvest:"Sep-Oct",days:90,water:"400-530mm",temp:"26-32C",msp:4892,notes:"Equal share with cotton in kharif."},
        {name:"Tur",variety:"BDN-711",yield:"5-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-33C",msp:7000,notes:"Major intercrop with cotton and soybean."},
        {name:"Bajra",variety:"PHB-3",yield:"9-12 Q/acre",sow:"June 20-July 5",harvest:"Sep",days:75,water:"250-350mm",temp:"28-35C",msp:2500,notes:"Shallow soil areas."}
      ],
      rabi:[
        {name:"Rabi Jowar",variety:"M-35-1",yield:"18-22 Q/acre",sow:"Oct 20-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Major food crop across the district."},
        {name:"Gram",variety:"JG-11",yield:"7-9 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Important pulse."},
        {name:"Wheat",variety:"GW-322",yield:"14-18 Q/acre",sow:"Nov 10-25",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Irrigated areas near Godavari tributaries."}
      ],
      summer:[
        {name:"Green Gram",variety:"SML-668",yield:"3-4 Q/acre",sow:"Mar",harvest:"May",days:65,water:"200-280mm",temp:"28-38C",msp:8558,notes:"Pre-monsoon irrigated crop."}
      ]
    },
    droughtRisk:"high", floodRisk:"low", pestRisk:"high",
    specialPests:["Cotton Bollworm","Girdle Beetle","Thrips","Tur Pod Fly"],
    pestZone:"soybean_belt",
    notes:"VNMKV (Vasantrao Naik Marathwada Krishi Vidyapeeth) is located in Parbhani — premier agricultural university of Marathwada."
  },

  beed: {
    nameEN:"Beed", nameHI:"बीड", nameMR:"बीड",
    aliases:["beed","bid"],
    region:"Marathwada", division:"Chhatrapati Sambhajinagar",
    temp:{min:10,max:43,avg:32}, rainfall:600, humidity:54,
    soilTypes:["Deep Black","Medium Black","Shallow Black"],
    dominantSoil:"black", agroZone:"Marathwada Dryland",
    monthlyRain:[4,3,7,12,28,108,158,132,68,30,6,2],
    crops:{
      kharif:[
        {name:"Soybean",variety:"JS-335, MAUS-71",yield:"10-13 Q/acre",sow:"June 20-30",harvest:"Sep-Oct",days:90,water:"380-500mm",temp:"26-33C",msp:4892,notes:"Primary kharif crop across Beed, Ashti, Georai."},
        {name:"Cotton",variety:"NHH-44, Bunny BG-II",yield:"6-9 Q/acre",sow:"June 5-20",harvest:"Dec-Jan",days:175,water:"550-750mm",temp:"27-34C",msp:6620,notes:"Second major kharif crop."},
        {name:"Tur",variety:"BDN-711",yield:"4-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-33C",msp:7000,notes:"Intercrop in cotton and soybean fields."},
        {name:"Bajra",variety:"PHB-3, HHB-67",yield:"8-11 Q/acre",sow:"June 20-July 5",harvest:"Sep",days:75,water:"250-350mm",temp:"28-35C",msp:2500,notes:"Drought tolerant food crop."}
      ],
      rabi:[
        {name:"Rabi Jowar",variety:"M-35-1",yield:"17-22 Q/acre",sow:"Oct 20-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Dominant rabi crop on residual moisture."},
        {name:"Gram",variety:"JG-11, Vijay",yield:"6-9 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Important food and cash crop."},
        {name:"Wheat",variety:"GW-322",yield:"13-17 Q/acre",sow:"Nov 10-25",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Limited to irrigated pockets of Majalgaon dam command."}
      ],
      summer:[
        {name:"Green Gram",variety:"SML-668",yield:"3-4 Q/acre",sow:"Mar",harvest:"May",days:65,water:"200-280mm",temp:"28-38C",msp:8558,notes:"Minor irrigated crop."},
        {name:"Sugarcane",variety:"Co-86032",yield:"250-350 Q/acre",sow:"Feb-Mar",harvest:"Jan-Feb next year",days:365,water:"1400-1700mm",temp:"25-35C",msp:3150,notes:"Beed has significant sugarcane in Majalgaon dam irrigated areas. District is famous for sugarcane worker migration to Kolhapur-Solapur for cutting."}
      ]
    },
    droughtRisk:"high", floodRisk:"low", pestRisk:"medium",
    specialPests:["Soybean Girdle Beetle","Tur Pod Fly","Cotton Bollworm","Helicoverpa"],
    pestZone:"soybean_belt",
    notes:"Drought-prone Marathwada district. Famous for sugarcane cutter migration to Western Maharashtra. Majalgaon dam. Semi-arid climate."
  },

  dharashiv: {
    nameEN:"Dharashiv", nameHI:"धाराशिव", nameMR:"धाराशिव",
    aliases:["osmanabad","dharashiv","dhara shiv"],
    region:"Marathwada", division:"Latur",
    temp:{min:10,max:43,avg:32}, rainfall:715, humidity:56,
    soilTypes:["Deep Black","Medium Black","Shallow Red"],
    dominantSoil:"black", agroZone:"Marathwada Dryland",
    monthlyRain:[6,5,9,16,38,128,182,152,78,35,7,3],
    crops:{
      kharif:[
        {name:"Soybean",variety:"JS-335, MAUS-71",yield:"10-13 Q/acre",sow:"June 20-30",harvest:"Sep-Oct",days:90,water:"380-500mm",temp:"26-33C",msp:4892,notes:"Primary kharif crop across Osmanabad, Tuljapur, Omerga."},
        {name:"Tur",variety:"BDN-711, LRG-41",yield:"5-8 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-33C",msp:7000,notes:"Dharashiv-Latur belt is one of India's major tur producing zones."},
        {name:"Cotton",variety:"NHH-44",yield:"6-9 Q/acre",sow:"June 5-20",harvest:"Dec-Jan",days:175,water:"550-750mm",temp:"27-34C",msp:6620,notes:"Grown in deeper black soil areas."},
        {name:"Bajra",variety:"PHB-3",yield:"8-11 Q/acre",sow:"June 20-July 5",harvest:"Sep",days:75,water:"250-350mm",temp:"28-35C",msp:2500,notes:"Drought escape crop."}
      ],
      rabi:[
        {name:"Rabi Jowar",variety:"M-35-1 (Maldandi)",yield:"18-22 Q/acre",sow:"Oct 20-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Major residual moisture rabi food crop."},
        {name:"Gram",variety:"JG-11, Vijay",yield:"7-9 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Important pulse crop."},
        {name:"Wheat",variety:"GW-322",yield:"13-17 Q/acre",sow:"Nov 10-25",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Limited irrigated areas near Sina river."},
        {name:"Sunflower",variety:"KBSH-44",yield:"5-7 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb",days:90,water:"300-400mm",temp:"18-30C",msp:6760,notes:"Short duration oilseed crop."}
      ],
      summer:[
        {name:"Onion",variety:"N-53",yield:"50-70 Q/acre",sow:"Nov transplanted",harvest:"Mar-Apr",days:120,water:"350-450mm",temp:"15-28C",msp:800,notes:"Grown in limited irrigated pockets near Osmanabad city."},
        {name:"Green Gram",variety:"SML-668",yield:"3-4 Q/acre",sow:"Mar",harvest:"May",days:65,water:"200-280mm",temp:"28-38C",msp:8558,notes:"Pre-monsoon crop."}
      ]
    },
    droughtRisk:"medium", floodRisk:"low", pestRisk:"medium",
    specialPests:["Tur Pod Fly","Soybean Girdle Beetle","Gram Pod Borer","Cotton Bollworm"],
    pestZone:"soybean_belt",
    notes:"Renamed from Osmanabad to Dharashiv. Terna river. Tuljapur Bhavani temple — major pilgrimage. Major tur producing district."
  },

  hingoli: {
    nameEN:"Hingoli", nameHI:"हिंगोली", nameMR:"हिंगोली",
    aliases:["hingoli"],
    region:"Marathwada", division:"Chhatrapati Sambhajinagar",
    temp:{min:10,max:43,avg:30}, rainfall:945, humidity:63,
    soilTypes:["Deep Black","Medium Black","Alluvial"],
    dominantSoil:"black", agroZone:"Marathwada",
    monthlyRain:[8,6,12,18,44,168,242,205,108,49,10,4],
    crops:{
      kharif:[
        {name:"Soybean",variety:"JS-335, MAUS-71",yield:"12-15 Q/acre",sow:"June 15-25",harvest:"Sep-Oct",days:90,water:"400-540mm",temp:"26-32C",msp:4892,notes:"Primary kharif crop across Hingoli, Aundha, Sengaon."},
        {name:"Cotton",variety:"NHH-44, Ajeet 155",yield:"7-11 Q/acre",sow:"June 5-20",harvest:"Dec-Jan",days:175,water:"650-850mm",temp:"27-34C",msp:6620,notes:"Major cash crop."},
        {name:"Tur",variety:"BDN-711",yield:"5-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-33C",msp:7000,notes:"Important intercrop with cotton and soybean."},
        {name:"Bajra",variety:"PHB-3",yield:"9-12 Q/acre",sow:"June 20-July 5",harvest:"Sep",days:75,water:"250-350mm",temp:"28-35C",msp:2500,notes:"Minor food crop."}
      ],
      rabi:[
        {name:"Rabi Jowar",variety:"M-35-1",yield:"18-22 Q/acre",sow:"Oct 20-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Major food crop."},
        {name:"Gram",variety:"JG-11",yield:"7-9 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Important pulse."},
        {name:"Wheat",variety:"GW-322",yield:"15-18 Q/acre",sow:"Nov 10-25",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Kayadhu river canal command areas."}
      ],
      summer:[
        {name:"Green Gram",variety:"SML-668",yield:"3-4 Q/acre",sow:"Mar",harvest:"May",days:65,water:"200-280mm",temp:"28-38C",msp:8558,notes:"Pre-monsoon irrigated crop."}
      ]
    },
    droughtRisk:"low", floodRisk:"medium", pestRisk:"high",
    specialPests:["Cotton Bollworm","Girdle Beetle","Thrips","Tur Pod Fly"],
    pestZone:"soybean_belt",
    notes:"Kayadhu river. Audha Nagnath Jyotirlinga pilgrimage. Cotton and soybean belt of eastern Marathwada. Smallest district of Marathwada."
  },

  jalna: {
    nameEN:"Jalna", nameHI:"जालना", nameMR:"जालना",
    aliases:["jalna"],
    region:"Marathwada", division:"Chhatrapati Sambhajinagar",
    temp:{min:10,max:43,avg:32}, rainfall:720, humidity:58,
    soilTypes:["Deep Black","Medium Black","Shallow Black"],
    dominantSoil:"black", agroZone:"Marathwada",
    monthlyRain:[6,5,10,16,36,132,188,158,82,37,8,3],
    crops:{
      kharif:[
        {name:"Soybean",variety:"JS-335, MAUS-71, KB-79",yield:"11-14 Q/acre",sow:"June 15-25",harvest:"Sep-Oct",days:90,water:"400-530mm",temp:"26-32C",msp:4892,notes:"Primary kharif crop. Major seed production hub — many national seed companies based in Jalna."},
        {name:"Cotton",variety:"NHH-44, Ajeet 155",yield:"7-10 Q/acre",sow:"June 5-20",harvest:"Dec-Jan",days:175,water:"650-850mm",temp:"27-34C",msp:6620,notes:"Second major kharif crop."},
        {name:"Bajra",variety:"PHB-3",yield:"9-12 Q/acre",sow:"June 20-July 5",harvest:"Sep",days:75,water:"250-350mm",temp:"28-35C",msp:2500,notes:"Grown in shallow soil areas."},
        {name:"Tur",variety:"BDN-711",yield:"5-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-33C",msp:7000,notes:"Important intercrop."}
      ],
      rabi:[
        {name:"Rabi Jowar",variety:"M-35-1",yield:"18-22 Q/acre",sow:"Oct 20-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Dominant rabi food crop."},
        {name:"Gram",variety:"JG-11",yield:"7-9 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Major pulse crop."},
        {name:"Wheat",variety:"GW-322",yield:"14-18 Q/acre",sow:"Nov 10-25",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Irrigated areas in Purna river command."}
      ],
      summer:[
        {name:"Watermelon",variety:"Sugar Baby",yield:"80-120 Q/acre",sow:"Jan-Feb",harvest:"Apr-May",days:75,water:"350-450mm",temp:"30-42C",msp:500,notes:"Sandy areas near Purna river."}
      ]
    },
    droughtRisk:"medium", floodRisk:"low", pestRisk:"high",
    specialPests:["Cotton Bollworm","Girdle Beetle","Thrips","Yellow Mosaic Virus (Soybean)"],
    pestZone:"soybean_belt",
    notes:"Seed industry hub of India. Purna river. Major agro-seed companies headquartered in Jalna. VNMKV sub-campus."
  },

  akola: {
    nameEN:"Akola", nameHI:"अकोला", nameMR:"अकोला",
    aliases:["akola"],
    region:"Vidarbha", division:"Amravati",
    temp:{min:9,max:47,avg:31}, rainfall:870, humidity:60,
    soilTypes:["Deep Black","Medium Black","Sandy Loam"],
    dominantSoil:"black", agroZone:"Vidarbha Plateau",
    monthlyRain:[9,7,13,18,44,140,230,195,122,72,22,8],
    crops:{
      kharif:[
        {name:"Cotton",variety:"NHH-44, Ajeet 155",yield:"8-12 Q/acre",sow:"June 1-15",harvest:"Dec-Jan",days:180,water:"700-850mm",temp:"28-35C",msp:6620,notes:"Primary kharif crop. Dr. PDKV Akola is India's leading cotton research institution."},
        {name:"Soybean",variety:"JS-335, MAUS-81",yield:"11-15 Q/acre",sow:"June 10-20",harvest:"Sep-Oct",days:90,water:"420-560mm",temp:"26-33C",msp:4892,notes:"Second major crop grown in Akola, Balapur, Patur."},
        {name:"Tur",variety:"BDN-711, Maruti",yield:"5-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-34C",msp:7000,notes:"Intercropped with cotton."},
        {name:"Bajra",variety:"PHB-3",yield:"9-13 Q/acre",sow:"June 20-July 5",harvest:"Sep",days:75,water:"250-350mm",temp:"28-35C",msp:2500,notes:"Drought escape food crop."}
      ],
      rabi:[
        {name:"Wheat",variety:"GW-322, NW-1014",yield:"16-20 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Upper Wardha and Morna canal command areas."},
        {name:"Gram",variety:"JG-74, JG-11",yield:"8-10 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:108,water:"300-400mm",temp:"12-22C",msp:5440,notes:"Important pulse crop."},
        {name:"Rabi Jowar",variety:"M-35-1",yield:"16-20 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Residual moisture food crop."}
      ],
      summer:[
        {name:"Watermelon",variety:"Sugar Baby",yield:"80-120 Q/acre",sow:"Jan-Feb",harvest:"Apr-May",days:75,water:"350-450mm",temp:"30-42C",msp:500,notes:"Sandy areas near Morna river."},
        {name:"Vegetables",variety:"Tomato, brinjal",yield:"80-140 Q/acre",sow:"Nov-Dec",harvest:"Feb-Apr",days:90,water:"400-600mm",temp:"20-32C",msp:500,notes:"Near Akola city."}
      ]
    },
    droughtRisk:"low", floodRisk:"low", pestRisk:"high",
    specialPests:["Pink Bollworm","American Bollworm","Soybean Girdle Beetle","Whitefly"],
    pestZone:"cotton_belt",
    notes:"Dr. Panjabrao Deshmukh Krishi Vidyapeeth (PDKV) Akola — premier cotton research institution of India. Orange and cotton cultivation both important."
  },

  buldhana: {
    nameEN:"Buldhana", nameHI:"बुलढाणा", nameMR:"बुलढाणा",
    aliases:["buldhana","buldana"],
    region:"Vidarbha", division:"Amravati",
    temp:{min:9,max:46,avg:30}, rainfall:810, humidity:60,
    soilTypes:["Deep Black","Medium Black","Sandy Loam"],
    dominantSoil:"black", agroZone:"Vidarbha Plateau",
    monthlyRain:[8,6,12,18,42,132,218,182,114,66,22,8],
    crops:{
      kharif:[
        {name:"Cotton",variety:"NHH-44, Ajeet 155",yield:"7-11 Q/acre",sow:"June 1-15",harvest:"Dec-Jan",days:180,water:"700-850mm",temp:"28-35C",msp:6620,notes:"Primary kharif crop across Buldhana, Malkapur, Lonar."},
        {name:"Soybean",variety:"JS-335, MAUS-81",yield:"11-15 Q/acre",sow:"June 10-20",harvest:"Sep-Oct",days:90,water:"420-560mm",temp:"26-33C",msp:4892,notes:"Second major kharif crop."},
        {name:"Tur",variety:"BDN-711",yield:"5-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-34C",msp:7000,notes:"Intercropped with cotton and soybean."},
        {name:"Bajra",variety:"PHB-3",yield:"9-12 Q/acre",sow:"June 20-July 5",harvest:"Sep",days:75,water:"250-350mm",temp:"28-35C",msp:2500,notes:"Drought escape crop."}
      ],
      rabi:[
        {name:"Wheat",variety:"GW-322",yield:"15-19 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Purna and Mun river canal areas."},
        {name:"Gram",variety:"JG-74, JG-11",yield:"7-9 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:105,water:"300-400mm",temp:"12-22C",msp:5440,notes:"Major rabi pulse."},
        {name:"Rabi Jowar",variety:"M-35-1",yield:"16-20 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Residual moisture food crop."}
      ],
      summer:[
        {name:"Watermelon",variety:"Sugar Baby",yield:"80-120 Q/acre",sow:"Jan-Feb",harvest:"Apr-May",days:75,water:"350-450mm",temp:"30-42C",msp:500,notes:"Sandy areas near Purna river."}
      ]
    },
    droughtRisk:"low", floodRisk:"medium", pestRisk:"high",
    specialPests:["Pink Bollworm","American Bollworm","Soybean Girdle Beetle","Whitefly"],
    pestZone:"cotton_belt",
    notes:"Lonar Crater Lake (meteorite impact) is in Buldhana — UNESCO Ramsar site. Purna and Mun rivers. Cotton and soybean dominant agri zone."
  },

  washim: {
    nameEN:"Washim", nameHI:"वाशिम", nameMR:"वाशीम",
    aliases:["washim","washim"],
    region:"Vidarbha", division:"Amravati",
    temp:{min:9,max:46,avg:31}, rainfall:850, humidity:61,
    soilTypes:["Deep Black","Medium Black"],
    dominantSoil:"black", agroZone:"Vidarbha Plateau",
    monthlyRain:[8,6,12,18,43,138,225,190,118,68,22,8],
    crops:{
      kharif:[
        {name:"Soybean",variety:"JS-335, MAUS-71",yield:"12-15 Q/acre",sow:"June 10-20",harvest:"Sep-Oct",days:90,water:"420-550mm",temp:"26-33C",msp:4892,notes:"Primary kharif crop across Washim, Manora, Malegaon."},
        {name:"Cotton",variety:"NHH-44, Ajeet 155",yield:"7-11 Q/acre",sow:"June 1-15",harvest:"Dec-Jan",days:180,water:"700-850mm",temp:"28-35C",msp:6620,notes:"Major cash crop."},
        {name:"Tur",variety:"BDN-711",yield:"5-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-34C",msp:7000,notes:"Intercrop with cotton and soybean."},
        {name:"Bajra",variety:"PHB-3",yield:"9-12 Q/acre",sow:"June 20-July 5",harvest:"Sep",days:75,water:"250-350mm",temp:"28-35C",msp:2500,notes:"Drought tolerant food crop."}
      ],
      rabi:[
        {name:"Gram",variety:"JG-74, JG-11",yield:"7-9 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:105,water:"300-400mm",temp:"12-22C",msp:5440,notes:"Major rabi pulse."},
        {name:"Wheat",variety:"GW-322",yield:"15-19 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Irrigated areas."},
        {name:"Rabi Jowar",variety:"M-35-1",yield:"16-20 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Residual moisture food crop."}
      ],
      summer:[
        {name:"Green Gram",variety:"SML-668",yield:"3-4 Q/acre",sow:"Mar",harvest:"May",days:65,water:"200-280mm",temp:"28-38C",msp:8558,notes:"Pre-monsoon irrigated crop."}
      ]
    },
    droughtRisk:"low", floodRisk:"low", pestRisk:"high",
    specialPests:["Pink Bollworm","American Bollworm","Soybean Girdle Beetle","Whitefly"],
    pestZone:"cotton_belt",
    notes:"Washim is part of the Vidarbha soybean and cotton belt. Ekburji fort. Purna river. VNMKV sub-campus at Washim."
  },

  chandrapur: {
    nameEN:"Chandrapur", nameHI:"चंद्रपुर", nameMR:"चंद्रपूर",
    aliases:["chandrapur"],
    region:"Vidarbha", division:"Nagpur",
    temp:{min:9,max:48,avg:31}, rainfall:1280, humidity:68,
    soilTypes:["Red Laterite","Deep Black","Sandy Loam"],
    dominantSoil:"red", agroZone:"Vidarbha High Rainfall",
    monthlyRain:[16,12,18,25,60,200,320,270,168,98,30,14],
    crops:{
      kharif:[
        {name:"Paddy",variety:"PKV-HMT, Swarna, Jaya",yield:"20-28 Q/acre",sow:"June 15-30",harvest:"Oct-Nov",days:130,water:"1100-1400mm",temp:"26-32C",msp:2183,notes:"Dominant kharif crop. Wainganga river valley paddy is high quality."},
        {name:"Cotton",variety:"NHH-44, Bunny BG-II",yield:"7-11 Q/acre",sow:"June 1-15",harvest:"Dec-Jan",days:180,water:"700-850mm",temp:"28-35C",msp:6620,notes:"Black soil areas away from forest zones."},
        {name:"Tur",variety:"BDN-711",yield:"5-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-34C",msp:7000,notes:"Intercrop in black soil areas."},
        {name:"Soybean",variety:"JS-335",yield:"11-14 Q/acre",sow:"June 10-20",harvest:"Sep-Oct",days:90,water:"420-560mm",temp:"26-33C",msp:4892,notes:"Grown in plateau areas away from river valley."}
      ],
      rabi:[
        {name:"Wheat",variety:"GW-322",yield:"15-19 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Wainganga canal command."},
        {name:"Gram",variety:"JG-11",yield:"7-9 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:105,water:"300-400mm",temp:"12-22C",msp:5440,notes:"Pulse crop."},
        {name:"Rabi Jowar",variety:"M-35-1",yield:"16-20 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Residual moisture food crop."}
      ],
      summer:[
        {name:"Summer Paddy",variety:"PKV-HMT",yield:"16-22 Q/acre",sow:"Jan-Feb",harvest:"May-Jun",days:120,water:"managed",temp:"28-38C",msp:2183,notes:"Wainganga canal command only."},
        {name:"Vegetables",variety:"Hybrid varieties",yield:"60-120 Q/acre",sow:"Nov-Dec",harvest:"Feb-Apr",days:90,water:"400-600mm",temp:"20-32C",msp:500,notes:"Near Chandrapur city."}
      ]
    },
    droughtRisk:"low", floodRisk:"high", pestRisk:"high",
    specialPests:["Paddy Brown Plant Hopper","Paddy Stem Borer","Pink Bollworm","Paddy Blast"],
    pestZone:"konkan_rice",
    notes:"Tadoba Tiger Reserve. Wainganga and Wardha rivers — high flood risk. Coal mining district. Hottest district of Maharashtra with 48C recorded."
  },

  gondia: {
    nameEN:"Gondia", nameHI:"गोंदिया", nameMR:"गोंदिया",
    aliases:["gondia"],
    region:"Vidarbha", division:"Nagpur",
    temp:{min:8,max:46,avg:31}, rainfall:1450, humidity:70,
    soilTypes:["Sandy Loam","Alluvial (Wainganga)","Red Laterite"],
    dominantSoil:"alluvial", agroZone:"Vidarbha Rice Belt",
    monthlyRain:[9,6,11,17,45,205,332,298,152,68,13,6],
    crops:{
      kharif:[
        {name:"Paddy",variety:"Swarna, Swarnadhan, Jaya",yield:"22-30 Q/acre",sow:"June 15-30",harvest:"Oct-Nov",days:130,water:"1100-1400mm",temp:"26-32C",msp:2183,notes:"Gondia is called the 'Rice Bowl' of Maharashtra. Wainganga river valley. Large cooperative rice mills."},
        {name:"Soybean",variety:"JS-335",yield:"11-14 Q/acre",sow:"June 10-20",harvest:"Sep-Oct",days:90,water:"420-560mm",temp:"26-32C",msp:4892,notes:"Laterite upland areas."},
        {name:"Tur",variety:"BDN-711",yield:"5-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-33C",msp:7000,notes:"Upland intercrop."},
        {name:"Kodu-Kutki",variety:"Local selection",yield:"5-7 Q/acre",sow:"June-July",harvest:"Oct-Nov",days:90,water:"500-700mm",temp:"24-32C",msp:3000,notes:"Traditional tribal food millet crop."}
      ],
      rabi:[
        {name:"Wheat",variety:"GW-322",yield:"15-19 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Canal command areas."},
        {name:"Gram",variety:"JG-11",yield:"7-9 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Pulse crop."},
        {name:"Rabi Jowar",variety:"M-35-1",yield:"17-21 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Residual moisture food crop."}
      ],
      summer:[
        {name:"Summer Paddy",variety:"PKV-HMT",yield:"16-22 Q/acre",sow:"Jan-Feb",harvest:"May-Jun",days:120,water:"managed irrigation",temp:"28-38C",msp:2183,notes:"Gondia rice farmers do summer paddy in canal command."}
      ]
    },
    droughtRisk:"low", floodRisk:"high", pestRisk:"medium",
    specialPests:["Paddy Brown Plant Hopper","Paddy Stem Borer","Leaf Folder","Paddy Blast"],
    pestZone:"konkan_rice",
    notes:"Gondia is called the Rice Bowl of Maharashtra. Large paddy area. Wainganga river. Navegaon National Park. Near Chhattisgarh border."
  },

  bhandara: {
    nameEN:"Bhandara", nameHI:"भंडारा", nameMR:"भंडारा",
    aliases:["bhandara"],
    region:"Vidarbha", division:"Nagpur",
    temp:{min:8,max:46,avg:30}, rainfall:1350, humidity:72,
    soilTypes:["Sandy Loam","Alluvial (Wainganga)","Red Laterite"],
    dominantSoil:"alluvial", agroZone:"Vidarbha Rice Belt",
    monthlyRain:[8,5,10,16,43,193,317,282,146,65,12,6],
    crops:{
      kharif:[
        {name:"Paddy",variety:"Swarna, Swarnadhan, MTU-1010",yield:"20-28 Q/acre",sow:"June 15-30",harvest:"Oct-Nov",days:130,water:"1100-1400mm",temp:"26-32C",msp:2183,notes:"Bhandara is the second paddy district of Vidarbha. Wainganga river valley has excellent paddy land."},
        {name:"Soybean",variety:"JS-335",yield:"11-14 Q/acre",sow:"June 10-20",harvest:"Sep-Oct",days:90,water:"420-560mm",temp:"26-32C",msp:4892,notes:"Laterite upland areas."},
        {name:"Tur",variety:"BDN-711",yield:"5-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-33C",msp:7000,notes:"Upland intercrop."},
        {name:"Kodu-Kutki",variety:"Local selection",yield:"5-7 Q/acre",sow:"June-July",harvest:"Oct-Nov",days:90,water:"500-700mm",temp:"24-32C",msp:3000,notes:"Traditional tribal millet."}
      ],
      rabi:[
        {name:"Wheat",variety:"GW-322",yield:"15-19 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Canal command."},
        {name:"Gram",variety:"JG-11",yield:"7-9 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Pulse crop."},
        {name:"Rabi Jowar",variety:"M-35-1",yield:"17-21 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Residual moisture."}
      ],
      summer:[
        {name:"Summer Paddy",variety:"PKV-HMT",yield:"16-22 Q/acre",sow:"Jan-Feb",harvest:"May-Jun",days:120,water:"managed",temp:"28-38C",msp:2183,notes:"Wainganga canal command."}
      ]
    },
    droughtRisk:"low", floodRisk:"high", pestRisk:"medium",
    specialPests:["Paddy Brown Plant Hopper","Paddy Stem Borer","Leaf Folder","Paddy Blast"],
    pestZone:"konkan_rice",
    notes:"Bhandara is known for fish ponds (meen pallan) and paddy cultivation. Wainganga river. Near Tadoba tiger reserve. Ambazari lake area."
  },

  gadchiroli: {
    nameEN:"Gadchiroli", nameHI:"गडचिरोली", nameMR:"गडचिरोली",
    aliases:["gadchiroli"],
    region:"Vidarbha", division:"Nagpur",
    temp:{min:8,max:46,avg:33}, rainfall:1600, humidity:74,
    soilTypes:["Red Laterite","Sandy Loam","Alluvial"],
    dominantSoil:"laterite", agroZone:"High Rainfall Tribal",
    monthlyRain:[10,6,12,17,49,257,397,352,183,80,16,7],
    crops:{
      kharif:[
        {name:"Paddy",variety:"Swarna, Jaya, local Masoori",yield:"18-26 Q/acre",sow:"June 15-30",harvest:"Oct-Nov",days:130,water:"1100-1500mm",temp:"26-33C",msp:2183,notes:"Main food crop for tribal population. Traditional varieties preferred in Gadchiroli, Etapalli, Sironcha."},
        {name:"Nachni (Finger Millet)",variety:"Phule Nachni, local",yield:"6-10 Q/acre",sow:"June-July",harvest:"Oct-Nov",days:120,water:"800-1000mm",temp:"20-28C",msp:3846,notes:"Traditional tribal staple. High nutrition crop in Aheri, Bhamragad."},
        {name:"Kodu-Kutki",variety:"Local",yield:"5-7 Q/acre",sow:"June-July",harvest:"Oct-Nov",days:90,water:"500-700mm",temp:"24-32C",msp:3000,notes:"Traditional millet — drought tolerant. Tribal food security crop."},
        {name:"Tur",variety:"BDN-711",yield:"5-7 Q/acre",sow:"June 15-30",harvest:"Jan-Feb",days:180,water:"400-600mm",temp:"26-33C",msp:7000,notes:"Minor pulse grown near villages."}
      ],
      rabi:[
        {name:"Wheat",variety:"GW-322",yield:"14-18 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-450mm",temp:"12-22C",msp:2275,notes:"Very limited — only near towns with irrigation."},
        {name:"Gram",variety:"JG-11",yield:"6-8 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Minor pulse."},
        {name:"Maize",variety:"NK-6240",yield:"18-22 Q/acre",sow:"June 15-25",harvest:"Sep-Oct",days:85,water:"500-700mm",temp:"25-32C",msp:2090,notes:"Also grown as kharif."}
      ],
      summer:[
        {name:"Vegetables",variety:"Local varieties",yield:"40-80 Q/acre",sow:"Nov-Dec",harvest:"Feb-Apr",days:90,water:"300-500mm",temp:"20-32C",msp:500,notes:"Limited cultivation near Gadchiroli town."}
      ]
    },
    droughtRisk:"low", floodRisk:"high", pestRisk:"low",
    specialPests:["Paddy Blast","Paddy Brown Plant Hopper","Stem Borer"],
    pestZone:"konkan_rice",
    notes:"Gadchiroli is the largest district of Maharashtra by area. Forest-dominant (two-thirds). Major tribal (Gond, Madia) population. Low pesticide use due to organic farming tradition."
  },

  raigad: {
    nameEN:"Raigad", nameHI:"रायगड", nameMR:"रायगड",
    aliases:["raigad"],
    region:"Konkan", division:"Konkan",
    temp:{min:15,max:36,avg:29}, rainfall:2800, humidity:83,
    soilTypes:["Laterite","Coastal Sandy","Alluvial"],
    dominantSoil:"laterite", agroZone:"Konkan High Rainfall",
    monthlyRain:[17,10,15,21,78,545,725,645,338,128,29,12],
    crops:{
      kharif:[
        {name:"Paddy",variety:"Jaya, PKV-HMT, Ratnagiri-2",yield:"16-24 Q/acre",sow:"June 10-20",harvest:"Oct-Nov",days:130,water:"1200-1600mm",temp:"26-30C",msp:2183,notes:"Major food crop. Traditional paddy varieties preferred in Alibag, Murud, Roha talukas."},
        {name:"Nachni (Ragi)",variety:"Phule Nachni",yield:"6-10 Q/acre",sow:"June-July",harvest:"Oct-Nov",days:120,water:"800-1000mm",temp:"20-28C",msp:3846,notes:"Laterite upland crop."},
        {name:"Cashew",variety:"Vengurla-4, Vengurla-7",yield:"3-5 Q/acre",sow:"Perennial",harvest:"Mar-May",days:365,water:"1200-1800mm",temp:"24-35C",msp:5000,notes:"Raigad-Ratnagiri-Sindhudurg cashew belt. Pen taluka is famous for cashew."},
        {name:"Banana",variety:"Grand Naine",yield:"200-280 Q/acre",sow:"Perennial",harvest:"Round the year",days:365,water:"1200-1500mm",temp:"20-32C",msp:3000,notes:"Peri-urban banana near Panvel, Alibag."}
      ],
      rabi:[
        {name:"Alphonso Mango",variety:"Alphonso, Kesar",yield:"60-100 Q/acre",sow:"Perennial",harvest:"Apr-Jun",days:150,water:"1000-1400mm",temp:"22-34C",msp:6000,notes:"Raigad mangoes exported to Middle East. Pen and Alibag talukas are famous."},
        {name:"Vegetables",variety:"Hybrid tomato, brinjal",yield:"60-100 Q/acre",sow:"Oct-Nov",harvest:"Jan-Mar",days:90,water:"400-600mm",temp:"18-28C",msp:500,notes:"Near Alibag, Panvel peri-urban areas."},
        {name:"Coconut",variety:"WCT, Hybrid Mangala",yield:"60-80 nuts per tree",sow:"Perennial",harvest:"Round year",days:365,water:"1200-2000mm",temp:"25-34C",msp:3200,notes:"Raigad coast has extensive coconut cultivation."}
      ],
      summer:[
        {name:"Mango peak harvest",variety:"Alphonso",yield:"Peak Apr-Jun",sow:"N/A",harvest:"Apr-Jun",days:60,water:"managed",temp:"28-36C",msp:6000,notes:"Peak export season. Alibag and Pen are major market centres."},
        {name:"Jackfruit",variety:"Local",yield:"50-100 kg per tree",sow:"Perennial",harvest:"Apr-Jun",days:365,water:"1000-1500mm",temp:"22-35C",msp:1000,notes:"Secondary fruit. Processed jackfruit products market growing."}
      ]
    },
    droughtRisk:"low", floodRisk:"high", pestRisk:"medium",
    specialPests:["Mango Hopper","Paddy Stem Borer","Brown Plant Hopper","Cashew Tea Mosquito Bug"],
    pestZone:"konkan_mango",
    notes:"Raigad Fort — Shivaji Maharaj's capital. Near Mumbai. Industrial areas at Mahad, Panvel, Alibag. JNPT port nearby. High flood risk from rivers."
  },

  sindhudurg: {
    nameEN:"Sindhudurg", nameHI:"सिंधुदुर्ग", nameMR:"सिंधुदुर्ग",
    aliases:["sindhudurg"],
    region:"Konkan", division:"Konkan",
    temp:{min:16,max:35,avg:28}, rainfall:3500, humidity:85,
    soilTypes:["Laterite","Coastal Sandy","Red Laterite"],
    dominantSoil:"laterite", agroZone:"Konkan Highest Rainfall",
    monthlyRain:[21,12,17,23,83,677,907,797,408,158,37,16],
    crops:{
      kharif:[
        {name:"Paddy (Aromatic varieties)",variety:"Ambemohar, Kari Joha, Ratnagiri-2",yield:"16-22 Q/acre",sow:"June 10-20",harvest:"Oct-Nov",days:130,water:"1200-1600mm",temp:"25-30C",msp:2183,notes:"Sindhudurg farmers preserve traditional aromatic rice varieties. GI applications for some varieties."},
        {name:"Cashew",variety:"Vengurla-4, Vengurla-7, Vengurla-8",yield:"3-6 Q/acre (nut)",sow:"Perennial",harvest:"Mar-May",days:365,water:"1200-1800mm",temp:"24-35C",msp:5000,notes:"Sindhudurg is Maharashtra's top cashew district. Vengurla varieties by KKV Dapoli. Cashew feni and apple processing important."},
        {name:"Coconut",variety:"WCT, East Coast Tall",yield:"80-100 nuts per tree",sow:"Perennial",harvest:"Round year",days:365,water:"1500-2000mm",temp:"26-34C",msp:3200,notes:"Malvan coast coconuts are large and sweet."},
        {name:"Nachni (Ragi)",variety:"Phule Nachni",yield:"6-10 Q/acre",sow:"June-July",harvest:"Oct-Nov",days:120,water:"800-1000mm",temp:"20-28C",msp:3846,notes:"Traditional food crop on laterite upland."}
      ],
      rabi:[
        {name:"Devgad Alphonso Mango",variety:"Devgad Hapus (GI tag)",yield:"60-100 Q/acre",sow:"Perennial",harvest:"Apr-Jun",days:150,water:"1000-1500mm",temp:"22-34C",msp:8000,notes:"Devgad Alphonso has separate GI tag from Ratnagiri Alphonso. 12 mangoes sold for Rs.800-1500 in peak season. Exported to UK, Germany, Japan, USA."},
        {name:"Coconut (copra season)",variety:"All varieties",yield:"Continues",sow:"Perennial",harvest:"Round year",days:365,water:"managed",temp:"26-34C",msp:3200,notes:"Copra drying in Dec-Mar when it is drier."},
        {name:"Supari (Betel Nut)",variety:"Mangala",yield:"8-12 Q/acre (dry nut)",sow:"Perennial",harvest:"Jan-Apr",days:365,water:"1500-2500mm",temp:"24-33C",msp:2500,notes:"High humidity area supports betel nut cultivation in Kankavli, Kudal."}
      ],
      summer:[
        {name:"Devgad Mango peak harvest",variety:"Devgad Hapus",yield:"Peak Apr-Jun",sow:"N/A",harvest:"Apr-Jun",days:60,water:"managed",temp:"28-35C",msp:8000,notes:"April-June is the main export season from Sindhudurg."},
        {name:"Kokum",variety:"Local Garcinia indica",yield:"10-20 Q/acre (dry)",sow:"Perennial",harvest:"Apr-May",days:365,water:"1000-1500mm",temp:"22-35C",msp:2000,notes:"Kokum syrup and butter are important Konkan products."}
      ]
    },
    droughtRisk:"low", floodRisk:"high", pestRisk:"low",
    specialPests:["Coconut Red Palm Weevil","Cashew Tea Mosquito Bug","Mango Hopper","Paddy Brown Plant Hopper"],
    pestZone:"konkan_mango",
    notes:"Sindhudurg has highest rainfall in Maharashtra. Malvan, Tarkarli coastal tourism. Sindhudurg sea fort by Shivaji Maharaj. Konkan Krishi Vidyapeeth at Dapoli."
  },

  nandurbar: {
    nameEN:"Nandurbar", nameHI:"नंदुरबार", nameMR:"नंदुरबार",
    aliases:["nandurbar"],
    region:"North Maharashtra", division:"Nashik",
    temp:{min:9,max:45,avg:34}, rainfall:900, humidity:67,
    soilTypes:["Sandy Loam","Deep Black","Alluvial (Tapi-Narmada)"],
    dominantSoil:"sandy", agroZone:"Tapi-Narmada Valley Tribal",
    monthlyRain:[6,4,8,14,39,173,258,228,113,51,11,4],
    crops:{
      kharif:[
        {name:"Paddy",variety:"Jaya, PKV-HMT, MTU-1010",yield:"18-25 Q/acre",sow:"June 15-30",harvest:"Oct-Nov",days:130,water:"1000-1300mm",temp:"26-33C",msp:2183,notes:"Nandurbar tribal district grows paddy as staple food. Sandy loam and alluvial soils of Tapi valley."},
        {name:"Maize",variety:"Pioneer 3396, NK-6240",yield:"20-28 Q/acre",sow:"June 15-25",harvest:"Sep-Oct",days:85,water:"500-700mm",temp:"25-33C",msp:2090,notes:"Second major crop. Good alluvial soil near Tapi gives high yields."},
        {name:"Soybean",variety:"JS-335",yield:"10-14 Q/acre",sow:"June 15-25",harvest:"Sep-Oct",days:90,water:"420-560mm",temp:"25-33C",msp:4892,notes:"Black soil upland areas."},
        {name:"Nachni (Ragi)",variety:"Phule Nachni",yield:"6-9 Q/acre",sow:"June-July",harvest:"Oct-Nov",days:120,water:"700-900mm",temp:"20-28C",msp:3846,notes:"Traditional tribal food crop."}
      ],
      rabi:[
        {name:"Wheat",variety:"GW-322, HD-2781",yield:"16-20 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-460mm",temp:"12-22C",msp:2275,notes:"Tapi canal command gives good wheat yields."},
        {name:"Gram",variety:"JG-11",yield:"6-8 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Important tribal food pulse."},
        {name:"Jowar",variety:"SPV-462",yield:"16-20 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Residual moisture food crop."}
      ],
      summer:[
        {name:"Maize (summer)",variety:"NK-6240",yield:"18-24 Q/acre",sow:"Jan-Feb",harvest:"May",days:85,water:"managed irrigation",temp:"28-38C",msp:2090,notes:"Summer maize with Tapi canal irrigation."},
        {name:"Vegetables",variety:"Hybrid",yield:"60-100 Q/acre",sow:"Nov-Dec",harvest:"Feb-Apr",days:90,water:"300-500mm",temp:"20-32C",msp:500,notes:"Near Shahada, Nandurbar city."}
      ]
    },
    droughtRisk:"low", floodRisk:"medium", pestRisk:"medium",
    specialPests:["Paddy Stem Borer","Fall Armyworm (Maize)","Brown Plant Hopper","Nachni Blast"],
    pestZone:"konkan_rice",
    notes:"Nandurbar is tribal-dominated (Bhil, Pawra tribals). Dhule-Nandurbar bifurcated in 1998. Toranmal hill station. Sardar Sarovar dam on Narmada river nearby."
  },

  dhule: {
    nameEN:"Dhule", nameHI:"धुळे", nameMR:"धुळे",
    aliases:["dhule","dhulia"],
    region:"North Maharashtra", division:"Nashik",
    temp:{min:9,max:46,avg:33}, rainfall:650, humidity:62,
    soilTypes:["Deep Black","Sandy Loam","Alluvial (Tapi)"],
    dominantSoil:"black", agroZone:"Tapi Valley",
    monthlyRain:[4,3,7,13,29,128,182,158,77,35,8,4],
    crops:{
      kharif:[
        {name:"Cotton",variety:"NHH-44, Ajeet 155",yield:"7-11 Q/acre",sow:"June 5-20",harvest:"Dec-Jan",days:175,water:"600-800mm",temp:"28-35C",msp:6620,notes:"Major cotton district. Dhule, Shirpur, Sakri are key cotton areas."},
        {name:"Soybean",variety:"JS-335",yield:"11-14 Q/acre",sow:"June 10-25",harvest:"Sep-Oct",days:90,water:"420-560mm",temp:"26-33C",msp:4892,notes:"Growing in importance alongside cotton."},
        {name:"Maize",variety:"Pioneer 3396, NK-6240",yield:"20-26 Q/acre",sow:"June 15-25",harvest:"Sep-Oct",days:85,water:"500-700mm",temp:"25-33C",msp:2090,notes:"Tapi alluvial areas of Shirpur."},
        {name:"Bajra",variety:"PHB-3, HHB-67",yield:"9-13 Q/acre",sow:"June 20-July 5",harvest:"Sep",days:75,water:"250-350mm",temp:"28-35C",msp:2500,notes:"Shallow soil and drought prone areas."}
      ],
      rabi:[
        {name:"Wheat",variety:"GW-322, HD-2781",yield:"17-21 Q/acre",sow:"Nov 5-20",harvest:"Mar-Apr",days:110,water:"380-460mm",temp:"12-22C",msp:2275,notes:"Tapi canal command of Shirpur, Sakri."},
        {name:"Gram",variety:"JG-11",yield:"6-8 Q/acre",sow:"Oct 25-Nov 10",harvest:"Feb-Mar",days:105,water:"280-380mm",temp:"12-22C",msp:5440,notes:"Dryland pulse."},
        {name:"Rabi Jowar",variety:"M-35-1",yield:"16-20 Q/acre",sow:"Oct 15-Nov 5",harvest:"Feb-Mar",days:115,water:"250-350mm",temp:"15-25C",msp:3180,notes:"Residual moisture food crop."}
      ],
      summer:[
        {name:"Green Gram",variety:"SML-668",yield:"3-4 Q/acre",sow:"Mar",harvest:"May",days:65,water:"200-280mm",temp:"28-38C",msp:8558,notes:"Pre-monsoon irrigated."}
      ]
    },
    droughtRisk:"medium", floodRisk:"low", pestRisk:"medium",
    specialPests:["Cotton Bollworm","Thrips","Whitefly","Soybean Girdle Beetle"],
    pestZone:"cotton_belt",
    notes:"Dhule is major cotton district of North Maharashtra. Tapi river valley provides alluvial soil. Shirpur taluka has canal irrigation. Extremely hot summers."
  },

  thane: {
    nameEN:"Thane", nameHI:"ठाणे", nameMR:"ठाणे",
    aliases:["thane"],
    region:"Konkan", division:"Konkan",
    temp:{min:14,max:36,avg:28}, rainfall:2500, humidity:80,
    soilTypes:["Laterite","Alluvial","Coastal Sandy"],
    dominantSoil:"laterite", agroZone:"Konkan High Rainfall",
    monthlyRain:[18,12,16,24,72,488,648,572,298,108,26,11],
    crops:{
      kharif:[
        {name:"Paddy",variety:"Jaya, PKV-HMT, Karjat-3",yield:"16-22 Q/acre",sow:"June 10-20",harvest:"Oct-Nov",days:130,water:"1000-1400mm",temp:"26-30C",msp:2183,notes:"Major food crop. Shahapur, Murbad, Bhiwandi talukas are paddy areas."},
        {name:"Nachni (Ragi)",variety:"Phule Nachni",yield:"6-10 Q/acre",sow:"June-July",harvest:"Oct-Nov",days:120,water:"800-1000mm",temp:"20-28C",msp:3846,notes:"Traditional tribal crop in Jawahar, Mokhada talukas."},
        {name:"Varai (Barnyard Millet)",variety:"Local",yield:"4-7 Q/acre",sow:"June-July",harvest:"Oct-Nov",days:90,water:"500-700mm",temp:"22-30C",msp:2000,notes:"Traditional tribal food millet in interior talukas."},
        {name:"Vegetables",variety:"Hybrid",yield:"80-150 Q/acre",sow:"June-July",harvest:"Sep-Oct",days:80,water:"500-800mm",temp:"24-30C",msp:500,notes:"Bhiwandi, Ambarnath peri-urban vegetable cultivation."}
      ],
      rabi:[
        {name:"Mango",variety:"Alphonso, Kesar",yield:"60-100 Q/acre",sow:"Perennial",harvest:"Apr-Jun",days:150,water:"1000-1400mm",temp:"22-34C",msp:6000,notes:"Shahapur and Murbad talukas have mango orchards."},
        {name:"Vegetables",variety:"Hybrid varieties",yield:"80-150 Q/acre",sow:"Oct-Nov",harvest:"Jan-Mar",days:90,water:"400-600mm",temp:"18-28C",msp:500,notes:"Peri-urban cultivation supplying Mumbai-Thane belt."},
        {name:"Coconut",variety:"WCT",yield:"60-80 nuts per tree",sow:"Perennial",harvest:"Round year",days:365,water:"1200-1800mm",temp:"25-34C",msp:3200,notes:"Coastal areas of Thane, Vasai."}
      ],
      summer:[
        {name:"Mango peak harvest",variety:"Alphonso",yield:"Peak Apr-Jun",sow:"N/A",harvest:"Apr-Jun",days:60,water:"managed",temp:"28-35C",msp:6000,notes:"Shahapur mango supply goes to Mumbai."},
        {name:"Vegetables",variety:"Tomato, leafy vegetables",yield:"60-120 Q/acre",sow:"Nov-Dec",harvest:"Feb-Apr",days:80,water:"400-600mm",temp:"22-32C",msp:500,notes:"Peri-urban Mumbai supply chain."}
      ]
    },
    droughtRisk:"low", floodRisk:"high", pestRisk:"medium",
    specialPests:["Paddy Brown Plant Hopper","Paddy Blast","Paddy Stem Borer","Mango Hopper"],
    pestZone:"konkan_rice",
    notes:"Thane district mixes peri-urban with tribal interior. Shahapur, Murbad are paddy and mango areas. Jawahar, Mokhada are tribal forest areas. Major industrial belt near Mumbai."
  },

  palghar: {
    nameEN:"Palghar", nameHI:"पालघर", nameMR:"पालघर",
    aliases:["palghar"],
    region:"Konkan", division:"Konkan",
    temp:{min:14,max:36,avg:28}, rainfall:2600, humidity:82,
    soilTypes:["Laterite","Coastal Sandy","Alluvial"],
    dominantSoil:"laterite", agroZone:"Konkan High Rainfall",
    monthlyRain:[18,12,16,24,75,502,668,592,308,112,27,12],
    crops:{
      kharif:[
        {name:"Paddy",variety:"Jaya, Karjat-3, local aromatic",yield:"16-22 Q/acre",sow:"June 10-20",harvest:"Oct-Nov",days:130,water:"1000-1400mm",temp:"26-30C",msp:2183,notes:"Primary crop across Dahanu, Vikramgad, Jawahar. Tribal paddy farming dominant."},
        {name:"Nachni (Ragi)",variety:"Phule Nachni",yield:"6-10 Q/acre",sow:"June-July",harvest:"Oct-Nov",days:120,water:"800-1000mm",temp:"20-28C",msp:3846,notes:"Traditional tribal food crop in Jawahar, Vikramgad."},
        {name:"Varai",variety:"Local selection",yield:"4-6 Q/acre",sow:"June-July",harvest:"Oct-Nov",days:90,water:"500-700mm",temp:"22-30C",msp:2000,notes:"Traditional millet in tribal areas."},
        {name:"Chiku (Sapota)",variety:"Kalipatti, Cricket Ball",yield:"100-200 Q/acre",sow:"Perennial",harvest:"Nov-Feb",days:365,water:"1000-1500mm",temp:"25-35C",msp:2500,notes:"Dahanu taluka produces 80% of Maharashtra's chiku. Palghar-Dahanu is India's largest chiku belt."}
      ],
      rabi:[
        {name:"Mango",variety:"Alphonso, local Amba",yield:"50-80 Q/acre",sow:"Perennial",harvest:"Apr-Jun",days:150,water:"1000-1400mm",temp:"22-34C",msp:6000,notes:"Vikramgad and Jawahar talukas have mango orchards."},
        {name:"Vegetables",variety:"Hybrid varieties",yield:"60-100 Q/acre",sow:"Oct-Nov",harvest:"Jan-Mar",days:90,water:"400-600mm",temp:"18-28C",msp:500,notes:"Peri-urban cultivation near Boisar and Palghar town."},
        {name:"Chiku (Sapota) off season",variety:"Kalipatti",yield:"100-200 Q/acre",sow:"Perennial",harvest:"Round year peaks Nov-Feb and Jun-Aug",days:365,water:"1000-1500mm",temp:"25-35C",msp:2500,notes:"Dahanu is the chiku capital of India."}
      ],
      summer:[
        {name:"Mango peak harvest",variety:"Alphonso",yield:"Peak Apr-Jun",sow:"N/A",harvest:"Apr-Jun",days:60,water:"managed",temp:"28-35C",msp:6000,notes:"Vikramgad mango supply to Mumbai markets."},
        {name:"Watermelon",variety:"Sugar Baby",yield:"80-120 Q/acre",sow:"Jan-Feb",harvest:"Apr-May",days:75,water:"350-450mm",temp:"30-38C",msp:500,notes:"Sandy coastal soils near Boisar."}
      ]
    },
    droughtRisk:"low", floodRisk:"high", pestRisk:"medium",
    specialPests:["Paddy Brown Plant Hopper","Paddy Stem Borer","Chiku Stone Borer","Mango Hopper"],
    pestZone:"konkan_rice",
    notes:"Palghar separated from Thane in 2014. Dahanu taluka is India's Chiku Capital. Tribal (Warli) population in Jawahar, Vikramgad. Mumbai-Ahmedabad highway. Tarapur nuclear plant."
  },

  mumbai: {
    nameEN:"Mumbai City", nameHI:"मुंबई शहर", nameMR:"मुंबई शहर",
    aliases:["mumbai","bombay","mumbai city"],
    region:"Konkan", division:"Konkan",
    temp:{min:15,max:35,avg:28}, rainfall:2167, humidity:78,
    soilTypes:["Alluvial","Coastal Sandy"],
    dominantSoil:"alluvial", agroZone:"Urban Agriculture",
    monthlyRain:[18,14,18,30,60,500,600,480,240,80,30,18],
    crops:{
      kharif:[
        {name:"Vegetables (Urban)",variety:"Tomato, brinjal, leafy greens",yield:"60-100 Q/acre",sow:"June-July",harvest:"Sep-Oct",days:75,water:"400-600mm",temp:"24-30C",msp:500,notes:"Urban rooftop and terrace farming growing rapidly. Dharavi urban agriculture."},
        {name:"Paddy (Aarey Colony)",variety:"Local aromatic varieties",yield:"12-18 Q/acre",sow:"June 15-30",harvest:"Oct-Nov",days:120,water:"1000-1400mm",temp:"26-30C",msp:2183,notes:"Aarey Colony in Goregaon still maintains small paddy cultivation."}
      ],
      rabi:[
        {name:"Vegetables",variety:"Leafy greens, herbs",yield:"40-80 Q/acre",sow:"Oct-Nov",harvest:"Dec-Mar",days:60,water:"300-500mm",temp:"18-28C",msp:500,notes:"APMC Vashi is India's largest wholesale vegetable market. Urban rooftop growing."},
        {name:"Flowers",variety:"Marigold, roses, chrysanthemum",yield:"50-100 Q/acre",sow:"Oct-Nov",harvest:"Dec-Mar",days:70,water:"300-500mm",temp:"18-28C",msp:500,notes:"Dadar flower market. Festival demand for marigold, jasmine throughout the year."}
      ],
      summer:[
        {name:"Vegetables",variety:"Bitter gourd, snake gourd",yield:"40-80 Q/acre",sow:"Feb-Mar",harvest:"May-Jun",days:70,water:"350-500mm",temp:"24-32C",msp:500,notes:"Summer vegetables in urban gardens and peri-urban areas."}
      ]
    },
    droughtRisk:"low", floodRisk:"high", pestRisk:"low",
    specialPests:["Aphids (Vegetables)","Whitefly","Leaf Miner"],
    pestZone:"soybean_belt",
    notes:"Financial capital of India. APMC Vashi is India's largest wholesale market. Urban farming, rooftop gardens growing. Limited agricultural land."
  },

  mumbaisuburban: {
    nameEN:"Mumbai Suburban", nameHI:"मुंबई उपनगर", nameMR:"मुंबई उपनगर",
    aliases:["mumbai suburban","mumbaisuburban","mumbai sub"],
    region:"Konkan", division:"Konkan",
    temp:{min:15,max:35,avg:28}, rainfall:2200, humidity:78,
    soilTypes:["Alluvial","Laterite"],
    dominantSoil:"alluvial", agroZone:"Peri-Urban Agriculture",
    monthlyRain:[18,14,18,30,62,510,615,492,248,84,32,18],
    crops:{
      kharif:[
        {name:"Paddy",variety:"Jaya, local varieties",yield:"14-20 Q/acre",sow:"June 15-30",harvest:"Oct-Nov",days:120,water:"1000-1400mm",temp:"26-30C",msp:2183,notes:"Limited paddy cultivation in Mulund, Kandivali, Vikhroli peripheral areas."},
        {name:"Vegetables",variety:"Tomato, brinjal, okra",yield:"60-100 Q/acre",sow:"June-July",harvest:"Sep-Oct",days:75,water:"400-600mm",temp:"24-30C",msp:500,notes:"Peri-urban vegetable cultivation."}
      ],
      rabi:[
        {name:"Vegetables",variety:"Leafy greens, cauliflower, peas",yield:"50-90 Q/acre",sow:"Oct-Nov",harvest:"Dec-Mar",days:70,water:"300-500mm",temp:"18-28C",msp:500,notes:"Peri-urban cultivation near Borivali, Bhandup area."},
        {name:"Flowers",variety:"Marigold, jasmine, chrysanthemum",yield:"40-80 Q/acre",sow:"Oct-Nov",harvest:"Dec-Mar",days:70,water:"300-500mm",temp:"18-28C",msp:500,notes:"Malad and Goregaon still have flower cultivation."}
      ],
      summer:[
        {name:"Vegetables",variety:"Cucurbits, tomato",yield:"40-80 Q/acre",sow:"Feb-Mar",harvest:"May-Jun",days:70,water:"350-500mm",temp:"24-32C",msp:500,notes:"Summer vegetables for local markets."}
      ]
    },
    droughtRisk:"low", floodRisk:"high", pestRisk:"low",
    specialPests:["Aphids (Vegetables)","Whitefly","Leaf Miner"],
    pestZone:"soybean_belt",
    notes:"Peri-urban district. Limited farmland. Powai lake, Sanjay Gandhi National Park. Urban edge and rooftop farming growing. Borivali, Malad, Ghatkopar peri-urban agriculture."
  }
};

// ─── PEST ZONE DATA ─────────────────────────────────────────────
const PEST_ZONES = {

  cotton_belt: {
    zoneName: "Cotton Belt (Vidarbha-Marathwada-North Maharashtra)",
    pests: [
      {name:"Pink Bollworm", latinName:"Pectinophora gossypiella",
       stage:"Boll development (60-120 days)", season:"Aug-Jan",
       symptoms:"Circular entry holes in bolls, rosette flower formation, internal larva in seed with pink colour, reduced seed oil, stained lint",
       pesticide:"Chlorantraniliprole 18.5 SC", dosage:"0.4 ml per litre", volume:"200 litres per acre",
       sprayTime:"Evening spray preferred (6pm-8pm).",
       safety:"PHI 14 days. Do not mix with alkaline pesticides. Alternate with Indoxacarb 14.5 SC (1 ml/litre).",
       ipmTip:"Pheromone traps from 30 days. HaNPV spray at 250 LE per acre is effective bio-option."},
      {name:"American Bollworm", latinName:"Helicoverpa armigera",
       stage:"Square to boll (45-120 days)", season:"Aug-Dec",
       symptoms:"Entry holes in squares and bolls, half-eaten fruiting bodies, green caterpillar at base of fruit, internal boll damage",
       pesticide:"Emamectin Benzoate 5 SG", dosage:"0.4 g per litre", volume:"200 litres per acre",
       sprayTime:"Evening spray. Alternate chemicals every 2 sprays.",
       safety:"PHI 5 days. Highly toxic to bees during flowering. Spray after 6pm.",
       ipmTip:"HaNPV at 250 LE per acre is effective biological control. Light traps for adult monitoring."},
      {name:"Mealy Bug", latinName:"Phenacoccus solenopsis",
       stage:"Any stage (perennial pest)", season:"Jun-Oct",
       symptoms:"White cottony waxy mass on stems and leaves, yellowing, premature defoliation, honeydew deposits and sooty mould",
       pesticide:"Profenophos 50 EC", dosage:"2 ml per litre", volume:"250 litres per acre (thorough spray)",
       sprayTime:"Morning. Ensure spray reaches all plant parts including undersides.",
       safety:"PHI 28 days. Use coveralls. Wash hands thoroughly after use.",
       ipmTip:"Release Cryptolaemus montrouzieri predator at 20 beetles per acre. Remove volunteer cotton plants."}
    ]
  },

  soybean_belt: {
    zoneName: "Soybean Belt (Maharashtra Plateau)",
    pests: [
      {name:"Girdle Beetle", latinName:"Obereopsis brevis",
       stage:"Seedling to vegetative (15-40 days)", season:"Jul-Aug",
       symptoms:"Ring-shaped girdling marks on stems 5-8 cm above soil, wilting of main shoot, shoot falling over, stem breaking at girdle point",
       pesticide:"Chlorpyriphos 20 EC", dosage:"2 ml per litre", volume:"150 litres per acre",
       sprayTime:"Early morning 6am-9am.",
       safety:"PHI 15 days. Keep away from water bodies and fish ponds.",
       ipmTip:"Deep summer ploughing destroys pupae. Early sowing before June 20 reduces first generation."},
      {name:"Pod Borer", latinName:"Maruca vitrata",
       stage:"Pod development (45-65 days)", season:"Aug-Sep",
       symptoms:"Entry holes in pods, white webbing between flowers and pods, larvae inside seeds, damaged seeds with excreta",
       pesticide:"Quinalphos 25 EC", dosage:"2 ml per litre", volume:"200 litres per acre",
       sprayTime:"Morning before 9am. Avoid spraying during bee activity.",
       safety:"PHI 7 days. Spinosad 45 SC (0.15ml/litre) is bee-friendly alternate option.",
       ipmTip:"Install pheromone traps at 3 per acre. Spray at 10% pod damage threshold."},
      {name:"Yellow Mosaic Virus", latinName:"Via Bemisia tabaci (whitefly vector)",
       stage:"Any stage via whitefly", season:"Jul-Sep",
       symptoms:"Irregular yellow-green patches on leaves, mosaic pattern, leaf distortion, stunted plants, reduced pod set",
       pesticide:"Imidacloprid 17.8 SL to control vector whitefly", dosage:"0.3 ml per litre", volume:"200 litres per acre",
       sprayTime:"Early morning preventive spray from 15 days after emergence.",
       safety:"Highly toxic to bees. Do not spray during flowering. PHI 21 days.",
       ipmTip:"Use YMV-resistant variety JS-335. Remove infected plants immediately. Silver reflective mulch reduces whitefly."},
      {name:"Stem Fly", latinName:"Melanagromyza sojae",
       stage:"Seedling (7-25 days)", season:"Jun-Jul",
       symptoms:"Yellowing of cotyledon leaves, wilting of first leaf, internal browning in stem with small maggot inside",
       pesticide:"Thiamethoxam 70 WS seed treatment", dosage:"1.5 g per kg seed (at sowing)", volume:"Seed treatment",
       sprayTime:"Seed treatment before sowing. Foliar Dimethoate 30 EC (1.5ml/litre) at 10-12 days if infestation.",
       safety:"Seed treatment reduces environmental load. Dimethoate PHI 14 days.",
       ipmTip:"Early sowing by June 15 avoids peak stem fly first generation."}
    ]
  },

  onion_belt: {
    zoneName: "Onion Belt (Nashik-Ahilyanagar-Pune)",
    pests: [
      {name:"Onion Thrips", latinName:"Thrips tabaci",
       stage:"All vegetative and bulbing stages", season:"Nov-Apr (rabi), Jun-Sep (kharif)",
       symptoms:"Silver-white streaks on leaves, curling and twisting of leaf tips, stunted growth — worst in dry conditions",
       pesticide:"Fipronil 5 SC", dosage:"1.5 ml per litre", volume:"200 litres per acre",
       sprayTime:"Early morning or evening. Ensure spray coverage on inner surface of leaves.",
       safety:"Fipronil PHI 10 days. Avoid during harvest period. Use mask and gloves.",
       ipmTip:"Blue sticky traps at 10 per acre from transplanting. Straw mulch conserves moisture — dry conditions worsen thrips."},
      {name:"Purple Blotch", latinName:"Alternaria porri",
       stage:"Mature leaf stage (45-70 days)", season:"Aug-Oct (kharif), Jan-Mar (rabi)",
       symptoms:"Small white spots with purple centre on leaves, water-soaked margins, lesions with concentric rings, leaves fall over",
       pesticide:"Mancozeb 75 WP", dosage:"2.5 g per litre", volume:"200 litres per acre",
       sprayTime:"Spray at first symptom. Weekly intervals in humid weather.",
       safety:"PHI 3 days. Mancozeb is relatively safe. Wear gloves. Avoid spray during rain.",
       ipmTip:"Use disease-free certified sets. Avoid overhead irrigation. Maintain 30cm row spacing for air circulation."},
      {name:"Stemphylium Blight", latinName:"Stemphylium vesicarium",
       stage:"Mature foliage (50-75 days)", season:"Jan-Apr (rabi peak)",
       symptoms:"Water-soaked oval lesions on leaves, tan-brown with yellow halo, premature drying before maturity",
       pesticide:"Iprodione 50 WP", dosage:"2 g per litre", volume:"200 litres per acre",
       sprayTime:"Spray 3 times at 10-day intervals from 50 days. Morning preferred.",
       safety:"PHI 14 days. Avoid harvesting within 2 weeks of last spray.",
       ipmTip:"Reduce irrigation frequency near maturity. Scout weekly from 50 days."}
    ]
  },

  konkan_rice: {
    zoneName: "Konkan-Vidarbha Rice Belt",
    pests: [
      {name:"Brown Plant Hopper", latinName:"Nilaparvata lugens",
       stage:"Vegetative to heading (30-75 days)", season:"Jul-Oct",
       symptoms:"Circular patches of plants turning brown from the base, straw-coloured dead plants, hopping insects at base in standing water",
       pesticide:"Buprofezin 25 SC", dosage:"2 ml per litre", volume:"300 litres per acre at base of plant",
       sprayTime:"Morning. Spray at root zone. Drain water before spray, refill 6 hours after.",
       safety:"PHI 14 days. Do NOT use if fish are present in paddy. Drain field first.",
       ipmTip:"Maintain intermittent irrigation. Avoid excess nitrogen. Plant BPH-resistant varieties. Light traps from transplanting."},
      {name:"Paddy Stem Borer", latinName:"Scirpophaga incertulas",
       stage:"Early 15-45 days and panicle 65-90 days", season:"Jun-Oct",
       symptoms:"Dead heart — central tiller dying (early). White ear — panicle emerges white and empty (late). Entry holes in stem.",
       pesticide:"Carbofuran 3G (granules)", dosage:"6 kg granules per acre in standing water", volume:"Broadcast in standing water",
       sprayTime:"Apply granules in standing water at 25-30 days and at panicle initiation.",
       safety:"Carbofuran is highly toxic. Do NOT apply if fish are in field. Full PPE required. PHI 30 days.",
       ipmTip:"Install light traps 1 per acre. Pheromone traps for monitoring. Clip seedling tops before transplant removes eggs."},
      {name:"Paddy Blast", latinName:"Pyricularia oryzae",
       stage:"Tillering to heading (leaf 20-50 days, neck 65-80 days)", season:"Jul-Oct",
       symptoms:"Diamond-shaped lesions with grey centre and brown border on leaves. Dark constriction at base of panicle — whiteear with 30-80% yield loss.",
       pesticide:"Tricyclazole 75 WP", dosage:"0.6 g per litre", volume:"200 litres per acre",
       sprayTime:"At first symptom for leaf blast. Preventive spray at boot leaf stage is critical for neck blast.",
       safety:"PHI 3 days. Relatively safe. Avoid spray during heavy rain.",
       ipmTip:"Avoid excess nitrogen. Use blast-resistant varieties. Morning fog favours blast spread."}
    ]
  },

  sugarcane_zone: {
    zoneName: "Sugarcane Zone (Kolhapur-Sangli-Satara)",
    pests: [
      {name:"Sugarcane Top Borer", latinName:"Scirpophaga excerptalis",
       stage:"Young crop 30-120 days", season:"May-Aug (peak)",
       symptoms:"Dead hearts in young cane, side shoots emerging, frass and borings in shoot, boreholes at base of leaf whorl",
       pesticide:"Chlorpyriphos 20 EC", dosage:"2 ml per litre", volume:"250 litres per acre (into leaf whorl)",
       sprayTime:"Pour spray into leaf whorl. Morning application.",
       safety:"Chlorpyriphos PHI 20 days. Pour into leaf whorl carefully.",
       ipmTip:"Release Trichogramma chilonis egg parasitoid at 50,000 per acre at 30 and 45 days. Pheromone traps from 30 days."},
      {name:"Sugarcane Woolly Aphid", latinName:"Ceratovacuna lanigera",
       stage:"Grand growth period (90-270 days)", season:"Aug-Jan",
       symptoms:"Dense white woolly mass on undersides of leaves, yellowing, reduced growth, honeydew and sooty mould",
       pesticide:"Dimethoate 30 EC", dosage:"2 ml per litre", volume:"300 litres per acre (underside spray)",
       sprayTime:"Morning. Ensure spray reaches undersides of leaves. High volume spray essential.",
       safety:"PHI 30 days. Wear full PPE. Do not harvest within 30 days.",
       ipmTip:"Conserve natural enemies — Dipha aphidivora fungal predator. Avoid broad-spectrum pesticides."},
      {name:"Pyrilla (Sugarcane Plant Hopper)", latinName:"Pyrilla perpusilla",
       stage:"Any stage", season:"Jun-Oct",
       symptoms:"Yellowish nymphs and adults on leaves, honeydew sticky coating, sooty mould, leaf yellowing from tip backward",
       pesticide:"Malathion 50 EC", dosage:"2 ml per litre", volume:"300 litres per acre",
       sprayTime:"Morning spray covering all leaf surfaces.",
       safety:"PHI 7 days. Malathion is moderate toxicity. Standard PPE required.",
       ipmTip:"Epipyrops melanoleuca parasite is effective biological control — conserve it."}
    ]
  },

  konkan_mango: {
    zoneName: "Konkan Mango Belt (Ratnagiri-Sindhudurg-Raigad)",
    pests: [
      {name:"Mango Hopper", latinName:"Amritodus atkinsoni",
       stage:"Flowering to fruit set (Jan-Mar)", season:"Feb-Mar (critical)",
       symptoms:"Nymphs and adults on flower panicles, sucking sap, sticky honeydew on flowers, fungal growth, reduced fruit set, premature flower drop",
       pesticide:"Imidacloprid 17.8 SL", dosage:"0.3 ml per litre", volume:"150 litres per acre",
       sprayTime:"Spray at 10% panicle emergence and again at full bloom. Do NOT spray after fruit set. Spray at 6am-8am only.",
       safety:"CRITICAL: Do NOT spray when bees are foraging (9am-5pm). Imidacloprid is highly toxic to bees. PHI 21 days.",
       ipmTip:"Clean orchard floor. First spray at bud burst stage is most critical. Conserve predatory spiders."},
      {name:"Mango Stone Weevil", latinName:"Sternochetus mangiferae",
       stage:"Fruitlet to maturity (Mar-May)", season:"Mar-Jun",
       symptoms:"Gum deposits on fruit surface, tiny entry holes, internal damage to kernel, hollow seed with weevil inside. Infested fruits look normal outside.",
       pesticide:"Chlorpyriphos 20 EC", dosage:"2 ml per litre", volume:"200 litres per acre",
       sprayTime:"At fruitlet (marble) stage. 2 sprays 15 days apart.",
       safety:"PHI 21 days. Quarantine pest — infested fruits cannot be exported.",
       ipmTip:"Collect and destroy fallen fruits. Do not keep infected fruits near orchard."},
      {name:"Cashew Tea Mosquito Bug", latinName:"Helopeltis antonii",
       stage:"Young shoots and panicles", season:"Jan-May",
       symptoms:"Water-soaked lesions on young shoots and nuts, black necrotic spots, wilting of shoot tips, premature nut fall, characteristic nutty smell",
       pesticide:"Quinalphos 25 EC", dosage:"2 ml per litre", volume:"200 litres per acre",
       sprayTime:"Morning spray at first symptom. Critical to spray before panicle emergence.",
       safety:"PHI 7 days. Standard PPE required.",
       ipmTip:"Remove dead wood and weeds from orchard. Early spray in February is preventive."}
    ]
  },

  banana_zone: {
    zoneName: "Banana Zone (Jalgaon-Tapi Valley)",
    pests: [
      {name:"Banana Stem Weevil", latinName:"Cosmopolites sordidus",
       stage:"Any stage (soil-borne pest)", season:"Round the year",
       symptoms:"Yellowing and wilting of older leaves, tunneling in corm and stem base, plants toppling, dark brown tunnels in pseudostem",
       pesticide:"Chlorpyriphos 20 EC — corm dip and soil drench", dosage:"2 ml per litre (corm dip), 10 ml per litre (soil drench)", volume:"Corm treatment before planting and soil drench",
       sprayTime:"Treat corms before planting. Soil drench at 3 and 6 months.",
       safety:"PHI 14 days. Avoid contact with skin. Use gloves.",
       ipmTip:"Remove old leaves and dry sheaths. Use pheromone traps. Avoid replanting in infested soil without treatment."},
      {name:"Banana Bunchy Top Virus (BBTV)", latinName:"Via Pentalonia nigronervosa",
       stage:"Any stage (virus — vector aphid)", season:"Jun-Dec",
       symptoms:"Dark green streaks on veins, narrow erect leaves bunching at top, stunted plants, no fruit formation, youngest leaves smallest",
       pesticide:"Imidacloprid 17.8 SL to control aphid vector", dosage:"0.3 ml per litre", volume:"200 litres per acre preventive",
       sprayTime:"Preventive spray to control aphid vector. Monthly spray during rainy season.",
       safety:"PHI 21 days. No direct chemical cure for BBTV — only vector control.",
       ipmTip:"Remove and destroy BBTV-infected plants immediately. Use certified virus-free tissue culture plants. Do not share cutting tools."},
      {name:"Sigatoka Leaf Spot", latinName:"Mycosphaerella musicola",
       stage:"Any leaf stage", season:"Jun-Nov",
       symptoms:"Pale green to yellow streaks on leaves, oval spots with yellow halo, leaves turning brown and drying from margin, reduced photosynthesis",
       pesticide:"Propiconazole 25 EC", dosage:"1 ml per litre", volume:"250 litres per acre",
       sprayTime:"Spray at first symptom. Repeat every 3 weeks in rainy season.",
       safety:"PHI 14 days. Wear gloves and mask.",
       ipmTip:"Remove infected lower leaves. Ensure good air circulation. Avoid waterlogging."}
    ]
  }
};

// ─── HELPER FUNCTIONS ──────────────────────────────────────────

function getDistrictKey(input) {
  if (!input) return null;
  const normalize = (v) => String(v || '')
    .toLowerCase()
    .replace(/[^a-z0-9\u0900-\u097f\u0a80-\u0aff\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const clean = normalize(input);
  if (!clean) return null;

  // 1) exact match on key/aliases/localized names
  for (const [key, d] of Object.entries(DISTRICTS)) {
    if (normalize(key) === clean) return key;
    if (d.aliases && d.aliases.some(a => normalize(a) === clean)) return key;
    const nameMatch = [d.nameEN, d.nameHI, d.nameMR].some(n => normalize(n) === clean);
    if (nameMatch) return key;
  }

  // 2) unique prefix/contains match only for inputs length >= 3
  if (clean.length < 3) return null;
  const matches = [];
  for (const [key, d] of Object.entries(DISTRICTS)) {
    const candidates = [key, d.nameEN, d.nameHI, d.nameMR, ...(d.aliases || [])]
      .map(normalize)
      .filter(Boolean);
    const hit = candidates.some(c => c.startsWith(clean) || c.includes(clean));
    if (hit) matches.push(key);
  }
  if (matches.length === 1) return matches[0];
  return null;
}

function getDistrictName(key, lang) {
  const d = DISTRICTS[key];
  if (!d) return key;
  if (lang === 'hi') return d.nameHI || d.nameEN;
  if (lang === 'mr') return d.nameMR || d.nameEN;
  return d.nameEN;
}

function getPestData(distKey) {
  const d = DISTRICTS[distKey];
  if (!d) return [];
  const zone = d.pestZone || 'soybean_belt';
  const zoneData = PEST_ZONES[zone];
  if (!zoneData) return [];
  return zoneData.pests;
}

function getCalendarData(cropName, sow) {
  const crop = cropName.toLowerCase();
  const months = [];
  if (crop.includes('soybean')) {
    months.push({month:'June',events:[{type:'prep',title:'Land Preparation',desc:'Deep ploughing and pre-sowing tillage. Apply FYM 4-5 tonnes per acre before last ploughing.'},{type:'sow',title:'Sowing',desc:`Seed rate: 30 kg/acre. Row spacing: 45 cm. Sow ${sow}. Seed treatment with Rhizobium and PSB culture.`}]});
    months.push({month:'July',events:[{type:'fert',title:'Fertilizer Application',desc:'Apply N:P:K 30:60:30 kg/acre as basal at sowing. Top dress urea 15 kg/acre at 20-25 days.'},{type:'pest',title:'Girdle Beetle Watch',desc:'Inspect daily from 15-20 days. Install pheromone traps. Spray Chlorpyriphos 20 EC if girdle marks seen.'}]});
    months.push({month:'August',events:[{type:'irr',title:'Critical Moisture Period',desc:'Soybean needs adequate moisture at flowering and pod fill. One supplemental irrigation if rainfall gaps exceed 2 weeks.'},{type:'pest',title:'Yellow Mosaic Check',desc:'Scout for YMV — yellow patches on leaves. Remove infected plants immediately. Control whitefly with Imidacloprid.'}]});
    months.push({month:'September',events:[{type:'pest',title:'Pod Borer and Stem Fly',desc:'Apply Quinalphos 25 EC 2ml/litre at pod development. Inspect twice weekly.'},{type:'mon',title:'Maturity Monitoring',desc:'Pods turn brown-black. Leaves start yellowing. Prepare harvesting equipment.'}]});
    months.push({month:'October',events:[{type:'harv',title:'Harvest',desc:'Harvest at 90-95% pod maturity. Moisture content 12-15%. Thresh using power thresher. Dry seeds to 10% moisture before storage.'}]});
  } else if (crop.includes('cotton')) {
    months.push({month:'June',events:[{type:'prep',title:'Land Preparation',desc:'Deep ploughing. Apply FYM 5 tonnes per acre. Layout 90x60 cm (BT Cotton) or 120x45 cm.'},{type:'sow',title:'Sowing',desc:`Sow ${sow}. BT cotton seed rate: 500g per acre. Seed treatment: Imidacloprid 70 WS 5g/kg seed.`}]});
    months.push({month:'July',events:[{type:'fert',title:'Fertilizer',desc:'N:P:K 80:40:40 kg/acre split — half at sowing, half at 30 days. Zinc sulphate 10 kg/acre if deficiency.'},{type:'pest',title:'Whitefly and Aphid Watch',desc:'Scout from 20 days. Spray Profenophos 2ml/litre if population exceeds threshold.'}]});
    months.push({month:'August',events:[{type:'fert',title:'Top Dressing',desc:'Apply remaining NPK at squaring stage. Add boron 1g/litre foliar spray at flowering.'},{type:'pest',title:'Bollworm Scouting',desc:'Install pheromone traps from 30 days. ERH traps count. Spray Chlorantraniliprole 0.4ml/litre at threshold.'}]});
    months.push({month:'September-October',events:[{type:'pest',title:'Mealy Bug Alert',desc:'Check base of plants and stems for white cottony masses. Spray Profenophos 2ml/litre with full coverage.'},{type:'irr',title:'Irrigation',desc:'Critical at boll development. One irrigation every 12-15 days if rainfall insufficient.'}]});
    months.push({month:'December-January',events:[{type:'harv',title:'Picking',desc:'3-4 pickings spread over 2 months as bolls open. First picking at 60-70% boll opening. Separate grades. Market through CCI or private traders.'}]});
  } else if (crop.includes('onion')) {
    months.push({month:'Oct-Nov (Nursery)',events:[{type:'prep',title:'Nursery Preparation',desc:'Raised nursery beds 1m wide. Apply well-decomposed FYM. Sow at 4-5 kg/acre seed. Cover with straw and water daily.'},{type:'sow',title:'Sowing in Nursery',desc:`Sow ${sow} in nursery. Transplanting after 6-7 weeks when seedlings are pencil-thick.`}]});
    months.push({month:'December',events:[{type:'sow',title:'Transplanting',desc:'Transplant 6-7 week old seedlings at 15x10 cm spacing. Apply Carbendazim 2g/litre as soil drench at transplanting.'},{type:'irr',title:'Irrigation after Transplanting',desc:'Water immediately after transplanting. Light irrigations every 4-5 days for first 2 weeks.'}]});
    months.push({month:'January-February',events:[{type:'fert',title:'Fertilizer',desc:'N:P:K 80:40:40 kg/acre. Apply half nitrogen at transplanting, quarter at 30 days, quarter at 60 days.'},{type:'pest',title:'Thrips and Purple Blotch',desc:'Spray Fipronil 1.5ml/litre for thrips. Mancozeb 2.5g/litre for Purple Blotch and Stemphylium. 10-day intervals.'}]});
    months.push({month:'March',events:[{type:'pest',title:'Stemphylium Blight Watch',desc:'Critical period. Spray Iprodione 2g/litre 3 times at 10-day intervals. Stop irrigation 15 days before harvest.'},{type:'mon',title:'Maturity Monitoring',desc:'Neck fall (toppling of tops) indicates maturity — 70-80% tops fallen. Stop irrigation 10-12 days before harvest.'}]});
    months.push({month:'April',events:[{type:'harv',title:'Harvest and Curing',desc:'Harvest when 70-80% tops fall over. Cure in shade for 10-15 days. Grade into A (large), B (medium), C (small). Store in well-ventilated cool shed.'}]});
  } else if (crop.includes('wheat')) {
    months.push({month:'November',events:[{type:'prep',title:'Land Preparation',desc:'Fine seedbed preparation. Apply FYM 4 tonnes per acre. Apply basal P and K fertilizer.'},{type:'sow',title:'Sowing',desc:`Sow ${sow}. Seed rate 40 kg/acre. Row spacing 22.5 cm. Seed treatment with Thiram 3g/kg seed.`}]});
    months.push({month:'December',events:[{type:'irr',title:'First Irrigation (Crown Root)',desc:'First irrigation at 21-25 days (Crown Root Initiation stage). Critical — do not miss.'},{type:'fert',title:'Nitrogen Top Dressing',desc:'Apply 40 kg urea/acre at first irrigation (CRI stage). Mix in irrigation water for uniform distribution.'}]});
    months.push({month:'January',events:[{type:'irr',title:'Tilering Irrigation',desc:'Second irrigation at 40-45 days (maximum tillering stage).'},{type:'pest',title:'Yellow Rust (Leaf Rust) Monitoring',desc:'Scout for orange-yellow pustules on leaves. Spray Propiconazole 25 EC 1ml/litre at first sign.'}]});
    months.push({month:'February-March',events:[{type:'irr',title:'Grain Filling Irrigation',desc:'Irrigation at boot leaf, heading and grain fill stages. Total 4-6 irrigations required.'},{type:'fert',title:'Final Nitrogen',desc:'Apply remaining nitrogen at booting stage for grain protein content.'}]});
    months.push({month:'March-April',events:[{type:'harv',title:'Harvest',desc:'Harvest when grain moisture is 12-14%. Combine harvesting preferred. Dry grain to below 12% before storage in bins.'}]});
  } else if (crop.includes('sugarcane')) {
    months.push({month:'Feb-Mar (Adsali/Spring)',events:[{type:'sow',title:'Planting',desc:`Sow ${sow}. Plant 3-bud setts at 90 cm row spacing. 3500-4000 setts per acre. Apply FYM 10 tonnes per acre at planting.`},{type:'fert',title:'Basal Fertilizer',desc:'N:P:K 340:115:170 kg/acre (split over crop period). Apply P and K as basal at planting.'}]});
    months.push({month:'May-June',events:[{type:'irr',title:'Critical Irrigation',desc:'Sugarcane needs 1200-1800mm water. Summer requires irrigation every 7-10 days.'},{type:'fert',title:'Nitrogen Split',desc:'Apply nitrogen in 5-6 splits. First split at 45 days. Earthing up at 3-4 months.'}]});
    months.push({month:'July-August',events:[{type:'pest',title:'Top Borer and Wooly Aphid',desc:'Spray Chlorpyriphos 2ml/litre into leaf whorl for top borer. Dimethoate 2ml/litre for woolly aphid on undersides.'},{type:'irr',title:'Kande Puja (Earthing Up)',desc:'Earthing up at 90-120 days. Bind stalks to prevent lodging.'}]});
    months.push({month:'October-November',events:[{type:'mon',title:'Juice Quality Monitoring',desc:'Check Brix value at 10-12 months for harvest readiness. Target 18-20 Brix, recovery 10-11%.'},{type:'harv',title:'Harvest',desc:'Harvest when CCS recovery is maximum. Deliver to sugar factory within 24 hours of cutting for best recovery.'}]});
  } else if (crop.includes('paddy') || crop.includes('rice')) {
    months.push({month:'June',events:[{type:'prep',title:'Nursery and Land Prep',desc:'Wet nursery or dry nursery. Puddling for main field preparation. Apply FYM 4 tonnes per acre.'},{type:'sow',title:'Nursery Sowing',desc:`Sow nursery ${sow}. Transplant at 21-25 days for medium varieties, 35-40 days for long duration.`}]});
    months.push({month:'July',events:[{type:'sow',title:'Transplanting',desc:'Transplant 2-3 seedlings per hill at 20x15 cm spacing. Apply basal N:P:K 40:20:20 kg/acre.'},{type:'pest',title:'Stem Borer Watch',desc:'Apply Carbofuran 3G at 6 kg/acre at 25-30 days after transplanting in standing water.'}]});
    months.push({month:'August',events:[{type:'fert',title:'Nitrogen Top Dressing',desc:'Apply 20 kg urea/acre at maximum tillering (30-35 days after transplant).'},{type:'pest',title:'BPH and Leaf Folder Monitoring',desc:'Monitor BPH at base of plant. Scout for leaf folder white streaks. Spray Chlorpyriphos 2ml/litre for leaf folder.'}]});
    months.push({month:'September',events:[{type:'irr',title:'Intermittent Irrigation',desc:'Alternate wetting and drying (AWD) reduces BPH risk and saves water 20-30%.'},{type:'pest',title:'Neck Blast Prevention',desc:'Preventive spray of Tricyclazole 0.6g/litre at boot leaf stage is critical for high-rainfall areas.'}]});
    months.push({month:'October-November',events:[{type:'harv',title:'Harvest',desc:'Harvest at 80-85% maturity. Moisture at 22-24%. Thresh within 24 hours. Dry to 13-14% for storage. Traditional varieties harvested manually for quality.'}]});
  } else if (crop.includes('gram') || crop.includes('chickpea')) {
    months.push({month:'October-November',events:[{type:'prep',title:'Field Preparation',desc:'Deep ploughing. Apply FYM 3 tonnes per acre. Residual moisture from kharif is sufficient usually.'},{type:'sow',title:'Sowing',desc:`Sow ${sow} on residual moisture or first light irrigation. Seed rate 25-30 kg/acre. Treat with Rhizobium culture.`}]});
    months.push({month:'November-December',events:[{type:'fert',title:'Fertilizer',desc:'Only P and K application 40:20 kg/acre as basal. No or very little nitrogen as rhizobium fixes it.'},{type:'irr',title:'Irrigation (if required)',desc:'Gram is largely rainfed. First irrigation at flower initiation (35-45 days) if no rainfall.'}]});
    months.push({month:'January',events:[{type:'pest',title:'Pod Borer (Helicoverpa) Alert',desc:'Critical pest at flowering and pod filling. Install pheromone traps from 30 days. Spray HaNPV or Indoxacarb at threshold.'},{type:'mon',title:'Wilt Disease Check',desc:'Check for wilting plants in patches — soil-borne Fusarium wilt. Remove infected plants.'}]});
    months.push({month:'February-March',events:[{type:'harv',title:'Harvest',desc:'Harvest at 75-80% pod maturity. Allow windrow drying for 2-3 days. Thresh by beating or machine thresher.'}]});
  } else if (crop.includes('banana')) {
    months.push({month:'Feb-Mar (Planting)',events:[{type:'sow',title:'Tissue Culture Planting',desc:`Plant tissue culture (TC) plantlets at 1.5m x 1.5m spacing. ${sow}. Apply FYM 10 kg per pit. Pre-treat pits with Carbofuran 3G.`},{type:'irr',title:'Drip Irrigation Setup',desc:'Install drip irrigation before planting. Lateral at 1.5m spacing. Water requirement: 8-10 litres per plant per day initially.'}]});
    months.push({month:'April-June',events:[{type:'fert',title:'Fertigation Schedule',desc:'Fertigate weekly via drip. N:P:K 200:60:300 g per plant per year in splits. Increase doses monthly as plant grows.'},{type:'pest',title:'BBTV Monitoring',desc:'Scout weekly for Banana Bunchy Top symptoms — dark streaks on veins, narrow erect leaves. Remove infected plants immediately.'}]});
    months.push({month:'July-September',events:[{type:'pest',title:'Sigatoka Leaf Spot',desc:'Spray Propiconazole 1ml/litre every 3 weeks during rainy season. Ensure undersides of leaves are covered.'},{type:'irr',title:'Rainy Season Management',desc:'Reduce drip irrigation during heavy rain periods. Ensure good field drainage to prevent waterlogging.'}]});
    months.push({month:'Oct-Jan (Bunch emergence)',events:[{type:'fert',title:'Potash Boost',desc:'Increase K2O to 400g/plant during bunch development. Potash improves fruit quality and taste.'},{type:'harv',title:'Bunch Harvest',desc:'Harvest when fingers are 75% filled (12-14 months from planting). Cut bunch leaving 25-30 cm of peduncle. Market within 2-3 days.'}]});
  } else if (crop.includes('mango') || crop.includes('alphonso')) {
    months.push({month:'Oct-Nov',events:[{type:'prep',title:'Pruning and Cleaning',desc:'Post-harvest pruning — remove dead wood, criss-cross branches. Apply Bordeaux paste on cut ends. Clean orchard floor.'},{type:'fert',title:'Fertilizer',desc:'Apply N:P:K 1000:500:1000 g per tree per year split in two doses — one before monsoon, one after. Apply FYM 50 kg per tree.'}]});
    months.push({month:'Jan-Feb',events:[{type:'pest',title:'Hopper Prevention',desc:'Critical: Spray Imidacloprid 0.3ml/litre at bud burst (10% panicle emergence). Early morning spray ONLY.'},{type:'mon',title:'Flowering Management',desc:'If fog or rain during flowering — spray Carbendazim 1g/litre for powdery mildew. Never spray during peak bee activity.'}]});
    months.push({month:'Feb-Mar',events:[{type:'pest',title:'Powdery Mildew and Stone Weevil',desc:'Spray Wettable Sulphur 3g/litre for powdery mildew. Chlorpyriphos 2ml/litre for stone weevil at marble-size fruit.'},{type:'irr',title:'Irrigation during Fruit Set',desc:'Critical to maintain soil moisture during fruit set and development. Withhold water just before harvest.'}]});
    months.push({month:'Apr-Jun',events:[{type:'harv',title:'Harvest',desc:'Harvest Hapus when colour develops fully and fruit floats in water. Avoid harvesting in heat of day. Pack in individual paper wrapping. Transport in ventilated boxes.'}]});
  } else if (crop.includes('jowar')) {
    months.push({month:'Oct-Nov',events:[{type:'prep',title:'Field Preparation',desc:'Deep ploughing. Apply FYM 3 tonnes per acre. Residual moisture from kharif normally sufficient.'},{type:'sow',title:'Sowing',desc:`Sow ${sow} on residual moisture. Seed rate: 5-6 kg/acre. Treat seed with Thiram 3g/kg.`}]});
    months.push({month:'November-December',events:[{type:'fert',title:'Fertilizer',desc:'N:P:K 60:30:20 kg/acre. Apply P and K as basal. Nitrogen in two splits.'},{type:'irr',title:'First Irrigation',desc:'First irrigation at 30 days if no rainfall. Jowar is mostly grown on residual moisture in Marathwada.'}]});
    months.push({month:'January',events:[{type:'pest',title:'Shoot Fly Monitoring',desc:'Check for dead hearts in young plants (shoot fly). Spray Chlorpyriphos 2ml/litre at 15 days if infestation.'},{type:'fert',title:'Top Dress',desc:'Apply remaining nitrogen at flag leaf stage.'}]});
    months.push({month:'Feb-March',events:[{type:'harv',title:'Harvest',desc:'Harvest when ears turn brown-black (Maldandi variety). Moisture at 15-18%. Thresh by beating. Store in cool dry place. Jowar grain stores well for 2-3 years.'}]});
  } else if (crop.includes('tur') || crop.includes('pigeon')) {
    months.push({month:'June',events:[{type:'sow',title:'Sowing',desc:`Sow ${sow} at 90x20 cm spacing. Seed rate 5-6 kg/acre. Treat with Rhizobium culture and Thiram 3g/kg.`},{type:'fert',title:'Basal Fertilizer',desc:'N:P:K 20:40:20 kg/acre. Apply P and K as basal at sowing. Only small amount of N as starter.'}]});
    months.push({month:'July-August',events:[{type:'fert',title:'Intercrop Management',desc:'Tur is usually intercropped with soybean or cotton. Manage accordingly. One inter-cultivation at 20-25 days.'},{type:'pest',title:'Pod Fly and Plume Moth',desc:'Monitor for tur pod fly egg laying on pods. Spray Quinalphos 2ml/litre at pod fill stage.'}]});
    months.push({month:'September-November',events:[{type:'pest',title:'Helicoverpa Pod Borer',desc:'Install pheromone traps from 60 days. Spray HaNPV 250 LE per acre as bio-option. Indoxacarb 1ml/litre at chemical threshold.'},{type:'irr',title:'Irrigation at Podding',desc:'One irrigation at pod fill stage significantly increases yield. Withhold water at maturity.'}]});
    months.push({month:'January-February',events:[{type:'harv',title:'Harvest',desc:'Harvest when 80% pods turn brown. Thresh by beating or thresher. Dry to 10% moisture. Tur stores well for 2-3 years.'}]});
  } else {
    months.push({month:'June-July',events:[{type:'prep',title:'Field Preparation',desc:'Deep ploughing and preparation. Apply FYM and basal fertilizer.'},{type:'sow',title:'Sowing',desc:`Sow ${sow} as per recommended spacing. Use certified quality seed.`}]});
    months.push({month:'August-September',events:[{type:'fert',title:'Top Dressing',desc:'Apply nitrogen at critical growth stages.'},{type:'pest',title:'Pest Monitoring',desc:'Regular scouting for district-specific pests. Apply pesticides only at recommended threshold.'}]});
    months.push({month:'October-November',events:[{type:'harv',title:'Harvest',desc:'Harvest at appropriate maturity. Ensure proper drying before storage.'}]});
  }
  return months;
}

// Translations object
const LANG = {
  en: {
    appTitle:"KrushiMitra", appTagline:"Smart Farming Assistant",
    heroDesc:"District-specific crop recommendation and agricultural guidance for all 36 Maharashtra districts.",
    btnStart:"Get Recommendation", btnDash:"View Dashboard",
    navHome:"Home", navInput:"Farm Details", navClimate:"Climate",
    navRec:"Crop Recommendation", navRisk:"Risk", navCal:"Calendar",
    navPest:"Pest Guide", navDash:"Dashboard",
    inputTitle:"Farm Details", inputDesc:"Enter your farm details for a district-specific recommendation.",
    lblDistrict:"District", lblSoil:"Soil Type",
    lblSeason:"Season", lblIrr:"Irrigation",
    btnRec:"Get Recommendation",
    soilBlack:"Black Soil", soilRed:"Red Soil", soilSandy:"Sandy Soil",
    soilAlluvial:"Alluvial Soil", soilLaterite:"Laterite Soil",
    seasonKharif:"Kharif (Jun-Oct)", seasonRabi:"Rabi (Nov-Mar)", seasonSummer:"Summer (Apr-Jun)",
    irrDrip:"Drip", irrRainfed:"Rainfed", irrFlood:"Flood Irrigation", irrSprinkler:"Sprinkler",
    climateTitle:"Climate Analysis", climateDesc:"District weather data — IMD source",
    clTemp:"Avg Temperature", clRain:"Annual Rainfall", clHum:"Humidity", clZone:"Agro Zone",
    chartTitle:"Monthly Rainfall (mm)",
    soilInfoTitle:"Soil Types in This District",
    recTitle:"Crop Recommendation", recDesc:"Based on district, soil and season",
    recBadge:"Recommended", yieldLabel:"Expected Yield", sowLabel:"Sowing Date",
    daysLabel:"Days", mspLabel:"MSP 2024-25",
    soilFitLabel:"Suitable Soil", waterLabel:"Water Requirement", tempLabel:"Ideal Temp",
    analysisTitle:"Crop Analysis",
    allCropsTitle:"All Crops This Season",
    riskTitle:"Risk Assessment", riskDesc:"District-specific agricultural risk",
    droughtRisk:"Drought Risk", floodRisk:"Flood Risk", pestRisk:"Pest Risk",
    sugTitle:"Risk Reduction Recommendations",
    calTitle:"Crop Calendar", calDesc:"District-specific crop schedule",
    pestTitle:"Pest and Disease Guide", pestDesc:"District zone-specific pest information",
    pestZoneLabel:"Pest Zone", pestLatinLabel:"Scientific Name",
    pestStageLabel:"Crop Stage", pestSeasonLabel:"Season",
    pestSymLabel:"Symptoms", pestPesticideLabel:"Recommended Pesticide",
    pestDoseLabel:"Dosage", pestVolumeLabel:"Volume per Acre",
    pestSprayLabel:"Spray Timing", pestSafetyLabel:"Safety Precautions", pestIPMLabel:"IPM Tips",
    dashTitle:"Farm Dashboard", dashDesc:"Complete overview of your farm plan",
    dashWelcome:"Welcome, Farmer",
    recCropLabel:"Recommended Crop", riskOverLabel:"Risk Overview",
    cropLabel:"Crop", yldLabel:"Yield", durLabel:"Duration", seasonLbl:"Season", soilLbl:"Soil",
    droughtLbl:"Drought", floodLbl:"Flood", pestLbl:"Pest", zoneLbl:"Agro Zone",
    nextTaskLabel:"Next Scheduled Task",
    low:"Low", medium:"Medium", high:"High",
    riskLow:"Low Risk", riskMedium:"Medium Risk", riskHigh:"High Risk",
    loading:"Analyzing district data..."
  },
  hi: {
    appTitle:"कृषिमित्र", appTagline:"स्मार्ट कृषि सहायक",
    heroDesc:"महाराष्ट्र के सभी 36 जिलों के लिए जिलेवार फसल सिफारिश और कृषि मार्गदर्शन।",
    btnStart:"सिफारिश पाएं", btnDash:"डैशबोर्ड देखें",
    navHome:"होम", navInput:"खेत विवरण", navClimate:"जलवायु",
    navRec:"फसल सलाह", navRisk:"जोखिम", navCal:"कैलेंडर",
    navPest:"कीट मार्गदर्शिका", navDash:"डैशबोर्ड",
    inputTitle:"खेत विवरण", inputDesc:"जिलेवार सिफारिश के लिए विवरण दर्ज करें।",
    lblDistrict:"जिला", lblSoil:"मिट्टी का प्रकार",
    lblSeason:"मौसम", lblIrr:"सिंचाई",
    btnRec:"सिफारिश पाएं",
    soilBlack:"काली मिट्टी", soilRed:"लाल मिट्टी", soilSandy:"बलुई मिट्टी",
    soilAlluvial:"जलोढ़ मिट्टी", soilLaterite:"लैटेराइट मिट्टी",
    seasonKharif:"खरीफ (जून-अक्टूबर)", seasonRabi:"रबी (नवम्बर-मार्च)", seasonSummer:"ग्रीष्म (अप्रैल-जून)",
    irrDrip:"ड्रिप", irrRainfed:"वर्षा आधारित", irrFlood:"बाढ़ सिंचाई", irrSprinkler:"स्प्रिंकलर",
    climateTitle:"जलवायु विश्लेषण", climateDesc:"जिलेवार जलवायु डेटा — IMD स्रोत",
    clTemp:"औसत तापमान", clRain:"वार्षिक वर्षा", clHum:"आर्द्रता", clZone:"कृषि क्षेत्र",
    chartTitle:"मासिक वर्षा (मिमी)",
    soilInfoTitle:"इस जिले में मिट्टी के प्रकार",
    recTitle:"फसल सिफारिश", recDesc:"जिला, मिट्टी और मौसम के आधार पर",
    recBadge:"अनुशंसित", yieldLabel:"अपेक्षित उपज", sowLabel:"बुवाई की तारीख",
    daysLabel:"दिन", mspLabel:"MSP 2024-25",
    soilFitLabel:"उपयुक्त मिट्टी", waterLabel:"पानी की जरूरत", tempLabel:"आदर्श तापमान",
    analysisTitle:"फसल विश्लेषण",
    allCropsTitle:"इस मौसम की सभी फसलें",
    riskTitle:"जोखिम मूल्यांकन", riskDesc:"जिलेवार जोखिम विश्लेषण",
    droughtRisk:"सूखा जोखिम", floodRisk:"बाढ़ जोखिम", pestRisk:"कीट जोखिम",
    sugTitle:"जोखिम कम करने की सिफारिशें",
    calTitle:"खेत कैलेंडर", calDesc:"आपके जिले के लिए फसल शेड्यूल",
    pestTitle:"कीट और रोग मार्गदर्शिका", pestDesc:"जिला क्षेत्र-विशिष्ट कीट जानकारी",
    pestZoneLabel:"कीट क्षेत्र", pestLatinLabel:"वैज्ञानिक नाम",
    pestStageLabel:"फसल अवस्था", pestSeasonLabel:"मौसम",
    pestSymLabel:"लक्षण", pestPesticideLabel:"अनुशंसित कीटनाशक",
    pestDoseLabel:"मात्रा", pestVolumeLabel:"प्रति एकड़ मात्रा",
    pestSprayLabel:"छिड़काव समय", pestSafetyLabel:"सुरक्षा सावधानियां", pestIPMLabel:"IPM सुझाव",
    dashTitle:"खेत डैशबोर्ड", dashDesc:"आपकी खेत योजना का पूर्ण अवलोकन",
    dashWelcome:"स्वागत है, किसान भाई",
    recCropLabel:"अनुशंसित फसल", riskOverLabel:"जोखिम अवलोकन",
    cropLabel:"फसल", yldLabel:"उपज", durLabel:"अवधि", seasonLbl:"मौसम", soilLbl:"मिट्टी",
    droughtLbl:"सूखा", floodLbl:"बाढ़", pestLbl:"कीट", zoneLbl:"कृषि क्षेत्र",
    nextTaskLabel:"अगला निर्धारित कार्य",
    low:"कम", medium:"मध्यम", high:"अधिक",
    riskLow:"कम जोखिम", riskMedium:"मध्यम जोखिम", riskHigh:"उच्च जोखिम",
    loading:"जिला डेटा विश्लेषण हो रहा है..."
  },
  mr: {
    appTitle:"कृषिमित्र", appTagline:"स्मार्ट शेती सहायक",
    heroDesc:"महाराष्ट्राच्या सर्व 36 जिल्ह्यांसाठी जिल्हावार पीक शिफारस व कृषी मार्गदर्शन.",
    btnStart:"शिफारस मिळवा", btnDash:"डॅशबोर्ड पहा",
    navHome:"मुखपृष्ठ", navInput:"शेत माहिती", navClimate:"हवामान",
    navRec:"पीक शिफारस", navRisk:"धोका", navCal:"दिनदर्शिका",
    navPest:"कीटक मार्गदर्शिका", navDash:"डॅशबोर्ड",
    inputTitle:"शेत माहिती", inputDesc:"जिल्हावार शिफारसीसाठी माहिती भरा.",
    lblDistrict:"जिल्हा", lblSoil:"मातीचा प्रकार",
    lblSeason:"हंगाम", lblIrr:"सिंचनाचा प्रकार",
    btnRec:"शिफारस मिळवा",
    soilBlack:"काळी माती", soilRed:"लाल माती", soilSandy:"वालुकामय माती",
    soilAlluvial:"गाळाची माती", soilLaterite:"लॅटेराइट माती",
    seasonKharif:"खरीप (जून-ऑक्टोबर)", seasonRabi:"रब्बी (नोव्हेंबर-मार्च)", seasonSummer:"उन्हाळी (एप्रिल-जून)",
    irrDrip:"ठिबक", irrRainfed:"पावसावर आधारित", irrFlood:"पूर सिंचन", irrSprinkler:"तुषार",
    climateTitle:"हवामान विश्लेषण", climateDesc:"जिल्हावार हवामान डेटा — IMD स्रोत",
    clTemp:"सरासरी तापमान", clRain:"वार्षिक पाऊस", clHum:"आर्द्रता", clZone:"कृषी क्षेत्र",
    chartTitle:"मासिक पाऊस (मिमी)",
    soilInfoTitle:"या जिल्ह्यातील मातीचे प्रकार",
    recTitle:"पीक शिफारस", recDesc:"जिल्हा, माती व हंगामावर आधारित",
    recBadge:"शिफारस केलेले", yieldLabel:"अपेक्षित उत्पन्न", sowLabel:"पेरणीची तारीख",
    daysLabel:"दिवस", mspLabel:"MSP 2024-25",
    soilFitLabel:"योग्य माती", waterLabel:"पाण्याची गरज", tempLabel:"आदर्श तापमान",
    analysisTitle:"पीक विश्लेषण",
    allCropsTitle:"या हंगामातील सर्व पिके",
    riskTitle:"धोका मूल्यांकन", riskDesc:"जिल्हावार धोका विश्लेषण",
    droughtRisk:"दुष्काळ धोका", floodRisk:"पूर धोका", pestRisk:"कीटक धोका",
    sugTitle:"धोका कमी करण्याच्या शिफारसी",
    calTitle:"शेत दिनदर्शिका", calDesc:"तुमच्या जिल्ह्यासाठी पीक वेळापत्रक",
    pestTitle:"कीटक व रोग मार्गदर्शिका", pestDesc:"जिल्हा क्षेत्र-विशिष्ट कीटक माहिती",
    pestZoneLabel:"कीटक क्षेत्र", pestLatinLabel:"शास्त्रीय नाव",
    pestStageLabel:"पीक अवस्था", pestSeasonLabel:"हंगाम",
    pestSymLabel:"लक्षणे", pestPesticideLabel:"शिफारस केलेले कीटकनाशक",
    pestDoseLabel:"मात्रा", pestVolumeLabel:"प्रति एकर मात्रा",
    pestSprayLabel:"फवारणी वेळ", pestSafetyLabel:"सुरक्षा खबरदारी", pestIPMLabel:"IPM सूचना",
    dashTitle:"शेत डॅशबोर्ड", dashDesc:"तुमच्या शेत योजनेचे संपूर्ण विहंगावलोकन",
    dashWelcome:"स्वागत आहे, शेतकरी बंधू",
    recCropLabel:"शिफारस केलेले पीक", riskOverLabel:"धोका अवलोकन",
    cropLabel:"पीक", yldLabel:"उत्पन्न", durLabel:"कालावधी", seasonLbl:"हंगाम", soilLbl:"माती",
    droughtLbl:"दुष्काळ", floodLbl:"पूर", pestLbl:"कीटक", zoneLbl:"कृषी क्षेत्र",
    nextTaskLabel:"पुढील नियोजित कार्य",
    low:"कमी", medium:"मध्यम", high:"जास्त",
    riskLow:"कमी धोका", riskMedium:"मध्यम धोका", riskHigh:"जास्त धोका",
    loading:"जिल्हा डेटाचे विश्लेषण होत आहे..."
  }
};
