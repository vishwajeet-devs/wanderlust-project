const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400&auto=format&fit=crop&q=60" },
        price: 1500,
        location: "Malibu",
        country: "United States",
        category: "room",
        geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
    },
    {
        title: "Modern Loft in Downtown",
        description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&auto=format&fit=crop&q=60" },
        price: 1200,
        location: "New York City",
        country: "United States",
        category: "iconicCities",
        geometry: { type: "Point", coordinates: [-74.0060, 40.7128] }
    },
    {
        title: "Mountain Retreat",
        description: "Unplug and unwind in this peaceful mountain cabin surrounded by nature.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&auto=format&fit=crop&q=60" },
        price: 1000,
        location: "Aspen",
        country: "United States",
        category: "mountains",
        geometry: { type: "Point", coordinates: [-106.8370, 39.1911] }
    },
    {
        title: "Historic Villa in Tuscany",
        description: "Experience the charm of Tuscany in this beautifully restored villa.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&auto=format&fit=crop&q=60" },
        price: 2500,
        location: "Florence",
        country: "Italy",
        category: "iconicCities",
        geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
    },
    {
        title: "Secluded Treehouse Getaway",
        description: "Live among the treetops in this unique treehouse retreat.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&auto=format&fit=crop&q=60" },
        price: 800,
        location: "Portland",
        country: "United States",
        category: "camping",
        geometry: { type: "Point", coordinates: [-122.6765, 45.5152] }
    },
    {
        title: "Beachfront Paradise",
        description: "Step out of your door onto the sandy beach.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&auto=format&fit=crop&q=60" },
        price: 2000,
        location: "Cancun",
        country: "Mexico",
        category: "amazingpools",
        geometry: { type: "Point", coordinates: [-86.8515, 21.1619] }
    },
    {
        title: "Rustic Cabin by the Lake",
        description: "Perfect place for fishing and kayaking.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=60" },
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
        category: "camping",
        geometry: { type: "Point", coordinates: [-120.0324, 39.0968] }
    },
    {
        title: "Luxury Penthouse with City Views",
        description: "Indulge in luxury living with panoramic views.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?w=400&auto=format&fit=crop&q=60" },
        price: 3500,
        location: "Los Angeles",
        country: "United States",
        category: "iconicCities",
        geometry: { type: "Point", coordinates: [-118.2437, 34.0522] }
    },
    {
        title: "Ski-In/Ski-Out Chalet",
        description: "Hit the slopes right from your doorstep.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=400&auto=format&fit=crop&q=60" },
        price: 3000,
        location: "Verbier",
        country: "Switzerland",
        category: "mountains",
        geometry: { type: "Point", coordinates: [7.2283, 46.0960] }
    },
    {
        title: "Safari Lodge in the Serengeti",
        description: "Experience the thrill of the wild in comfort.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&auto=format&fit=crop&q=60" },
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
        category: "farms",
        geometry: { type: "Point", coordinates: [34.6857, -2.3333] }
    },
    {
        title: "Historic Canal House",
        description: "Stay in a beautiful canal house in Amsterdam.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&auto=format&fit=crop&q=60" },
        price: 1800,
        location: "Amsterdam",
        country: "Netherlands",
        category: "iconicCities",
        geometry: { type: "Point", coordinates: [4.9041, 52.3676] }
    },
    {
        title: "Private Island Retreat",
        description: "Have an entire island to yourself.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?w=400&auto=format&fit=crop&q=60" },
        price: 10000,
        location: "Fiji",
        country: "Fiji",
        category: "boats",
        geometry: { type: "Point", coordinates: [178.0650, -17.7134] }
    },
    {
        title: "Charming Cottage in the Cotswolds",
        description: "A picturesque countryside cottage.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=400&auto=format&fit=crop&q=60" },
        price: 1200,
        location: "Cotswolds",
        country: "United Kingdom",
        category: "farms",
        geometry: { type: "Point", coordinates: [-1.8433, 51.8330] }
    },
    {
        title: "Historic Brownstone in Boston",
        description: "Elegant historic brownstone in Boston.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?w=400&auto=format&fit=crop&q=60" },
        price: 2200,
        location: "Boston",
        country: "United States",
        category: "iconicCities",
        geometry: { type: "Point", coordinates: [-71.0589, 42.3601] }
    },
    {
        title: "Beachfront Bungalow in Bali",
        description: "Relax on the sandy shores of Bali.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602391833977-358a52198938?w=400&auto=format&fit=crop&q=60" },
        price: 1800,
        location: "Bali",
        country: "Indonesia",
        category: "amazingpools",
        geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
    },
    {
        title: "Mountain View Cabin in Banff",
        description: "Enjoy breathtaking mountain views.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?w=400&auto=format&fit=crop&q=60" },
        price: 1500,
        location: "Banff",
        country: "Canada",
        category: "mountains",
        geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }
    },
    {
        title: "Art Deco Apartment in Miami",
        description: "Step into the glamour of the 1920s.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1670963964797-942df1804579?w=400&auto=format&fit=crop&q=60" },
        price: 1600,
        location: "Miami",
        country: "United States",
        category: "iconicCities",
        geometry: { type: "Point", coordinates: [-80.1918, 25.7617] }
    },
    {
        title: "Tropical Villa in Phuket",
        description: "Luxurious villa with infinity pool.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?w=400&auto=format&fit=crop&q=60" },
        price: 3000,
        location: "Phuket",
        country: "Thailand",
        category: "amazingpools",
        geometry: { type: "Point", coordinates: [98.3381, 7.8804] }
    },
    {
        title: "Historic Castle in Scotland",
        description: "Live like royalty in a castle.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?w=400&auto=format&fit=crop&q=60" },
        price: 4000,
        location: "Scottish Highlands",
        country: "United Kingdom",
        category: "castles",
        geometry: { type: "Point", coordinates: [-4.2026, 57.1200] }
    },
    {
        title: "Desert Oasis in Dubai",
        description: "Luxury in the middle of the desert.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&auto=format&fit=crop&q=60" },
        price: 5000,
        location: "Dubai",
        country: "United Arab Emirates",
        category: "domes",
        geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
    },
    {
        title: "Rustic Log Cabin in Montana",
        description: "Cozy log cabin surrounded by nature.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=400&auto=format&fit=crop&q=60" },
        price: 1100,
        location: "Montana",
        country: "United States",
        category: "camping",
        geometry: { type: "Point", coordinates: [-110.3626, 46.8797] }
    },
    {
        title: "Beachfront Villa in Greece",
        description: "Crystal-clear Mediterranean waters.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=400&auto=format&fit=crop&q=60" },
        price: 2500,
        location: "Mykonos",
        country: "Greece",
        category: "amazingpools",
        geometry: { type: "Point", coordinates: [25.3289, 37.4467] }
    },
    {
        title: "Eco-Friendly Treehouse Retreat",
        description: "Stay in an eco-friendly treehouse.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?w=400&auto=format&fit=crop&q=60" },
        price: 750,
        location: "Costa Rica",
        country: "Costa Rica",
        category: "camping",
        geometry: { type: "Point", coordinates: [-83.7534, 9.7489] }
    },
    {
        title: "Historic Cottage in Charleston",
        description: "Charming historic cottage.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=400&auto=format&fit=crop&q=60" },
        price: 1600,
        location: "Charleston",
        country: "United States",
        category: "room",
        geometry: { type: "Point", coordinates: [-79.9311, 32.7765] }
    },
    {
        title: "Modern Apartment in Tokyo",
        description: "Explore vibrant Tokyo.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400&auto=format&fit=crop&q=60" },
        price: 2000,
        location: "Tokyo",
        country: "Japan",
        category: "iconicCities",
        geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
    },
    {
        title: "Lakefront Cabin in New Hampshire",
        description: "Cozy cabin in the White Mountains.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?w=400&auto=format&fit=crop&q=60" },
        price: 1200,
        location: "New Hampshire",
        country: "United States",
        category: "mountains",
        geometry: { type: "Point", coordinates: [-71.5724, 43.1939] }
    },
    {
        title: "Luxury Villa in the Maldives",
        description: "Overwater villa with ocean views.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&auto=format&fit=crop&q=60" },
        price: 6000,
        location: "Maldives",
        country: "Maldives",
        category: "boats",
        geometry: { type: "Point", coordinates: [73.2207, 3.2028] }
    },
    {
        title: "Ski Chalet in Aspen",
        description: "Luxurious ski chalet in Aspen.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&auto=format&fit=crop&q=60" },
        price: 4000,
        location: "Aspen",
        country: "United States",
        category: "mountains",
        geometry: { type: "Point", coordinates: [-106.8370, 39.1911] }
    },
    {
        title: "Secluded Beach House in Costa Rica",
        description: "Surf and relax on the Pacific coast.",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&auto=format&fit=crop&q=60" },
        price: 1800,
        location: "Costa Rica",
        country: "Costa Rica",
        category: "camping",
        geometry: { type: "Point", coordinates: [-83.7534, 9.7489] }
    },
    {
        title: "win",
        description: "ajsg aisygiasyg sahha  ha8hsh  we can yeiuia yahvhvusdfi aygs akyhbsbi aysgiugui",
        image: {
            url: "https://res.cloudinary.com/dsqvadv9c/image/upload/v1774963779/wanderlust-DEV/bhl0qzzedyb2x7h8ai6b.png"
        },
        price: 123456,
        location: "rhtfjygbh",
        country: "hghh",
        category: "room",
        reviews: [],
        owner: "69c924b8eb03dabef49282fc",
        geometry: { type: "Point", coordinates: [0, 0] }
    },
    {
        title: "Miami Beach",
        description: "Is a vibrant coastal city known for its sandy beaches, nightlife, and colorful Art Deco vibe 🌴🌊",
        image: {
            url: "https://res.cloudinary.com/dsqvadv9c/image/upload/v1774964419/wanderlust-DEV/oelog6i0ekmd2uy8amlk.bmp"
        },
        price: 123456789,
        location: "Vice city",
        country: "United States",
        category: "iconicCities",
        reviews: [],
        owner: "69cbcdbd8a950bb6b6906add",
        geometry: { type: "Point", coordinates: [-80.1918, 25.7617] }
    },
    {
        title: "Rustic Cabin by the Lake",
        description: "i3ouoh qowhxoi xqwoi qpiwp q eqpqiji q q aeaeoiiieae aoi dia d oa wddq pdq qpijpandn wpdjj oaiueaenda aod aoijhai ia pd oah iaw 9 a aw donsndskm",
        image: {
            url: "https://res.cloudinary.com/dsqvadv9c/image/upload/v1774966466/wanderlust-DEV/jfhzyudikgggslwzvkoo.jpg"
        },
        price: 12345,
        location: "terhjthm",
        country: "ikyg",
        category: "camping",
        reviews: [],
        owner: "69c928d53ace3d6ffd5553c7",
        geometry: { type: "Point", coordinates: [0, 0] }
    },
    {
        title: "Animville",
        description: "Oggy's house from Oggy and the Cockroaches is a colorful, cozy blue house filled with cartoon chaos. It has a simple layout with a living room, kitchen, bedroom, and bathroom but everything inside is constantly getting destroyed and rebuilt thanks to Oggy and the cockroaches.",
        image: {
            url: "https://res.cloudinary.com/dsqvadv9c/image/upload/v1774968438/wanderlust-DEV/eozss8litowbk84my603.jpg"
        },
        price: 10123432,
        location: "In the centre of his street in this fictional city",
        country: "India",
        category: "room",
        reviews: [],
        owner: "69c51e90948ab9b69d484718",
        geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
    },
    {
        title: "ohul,hj",
        description: "kul,jg",
        image: {
            url: "https://res.cloudinary.com/dsqvadv9c/image/upload/v1775060187/wanderlust-DEV/veizptbwkbyavvar6pu2.jpg"
        },
        price: 234,
        location: "nanded naka udgir",
        country: "56yuj",
        category: "room",
        reviews: [],
        owner: "69c924b8eb03dabef49282fc",
        geometry: { type: "Point", coordinates: [77.32576, 18.453909] }
    },
    {
        title: "Glass Igloo in Lapland",
        description: "Sleep under the Northern Lights in a stunning heated glass igloo. Watch the aurora borealis dance across the sky from the comfort of your warm bed deep in the Finnish wilderness.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1531906401853-9e56ebad4da2?w=400&auto=format&fit=crop&q=60"
        },
        price: 3800,
        location: "Rovaniemi",
        country: "Finland",
        category: "arctic",
        reviews: [],
        owner: "69c51e90948ab9b69d484718",
        geometry: { type: "Point", coordinates: [25.7294, 66.5039] }
    },
 
    // 2. domes
    {
        title: "Geodesic Dome in the Sahara",
        description: "A luxury geodesic dome sitting in the heart of the Sahara Desert. Stargaze through your transparent ceiling, enjoy camel rides at sunrise, and experience the silence of the dunes.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=400&auto=format&fit=crop&q=60"
        },
        price: 2800,
        location: "Merzouga",
        country: "Morocco",
        category: "domes",
        reviews: [],
        owner: "69c924b8eb03dabef49282fc",
        geometry: { type: "Point", coordinates: [-4.0122, 31.1000] }
    },
 
    // 3. boats
    {
        title: "Houseboat on Dal Lake",
        description: "A traditional wooden houseboat floating on the serene Dal Lake, adorned with intricate Kashmiri carvings. Wake up to mist-covered mountains and enjoy breakfast served by a shikara boat.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400&auto=format&fit=crop&q=60"
        },
        price: 950,
        location: "Srinagar",
        country: "India",
        category: "boats",
        reviews: [],
        owner: "69c928d53ace3d6ffd5553c7",
        geometry: { type: "Point", coordinates: [74.7973, 34.0837] }
    },
 
    // 4. castles
    {
        title: "Medieval Castle in Loire Valley",
        description: "Stay inside a fully restored 13th-century castle surrounded by vineyards and moats. Feast in the grand banquet hall, explore secret passages, and sip on local wine as the sun sets over the valley.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1548625149-720f6e240e17?w=400&auto=format&fit=crop&q=60"
        },
        price: 5500,
        location: "Loire Valley",
        country: "France",
        category: "castles",
        reviews: [],
        owner: "69cbcdbd8a950bb6b6906add",
        geometry: { type: "Point", coordinates: [0.6848, 47.3941] }
    },
 
    // 5. amazingpools
    {
        title: "Clifftop Villa with Infinity Pool in Santorini",
        description: "A dazzling white-washed villa perched on the caldera cliffs of Santorini. Dive into your private infinity pool that seems to merge with the Aegean Sea, and watch the world-famous Oia sunset.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=400&auto=format&fit=crop&q=60"
        },
        price: 4500,
        location: "Santorini",
        country: "Greece",
        category: "amazingpools",
        reviews: [],
        owner: "69c51e90948ab9b69d484718",
        geometry: { type: "Point", coordinates: [25.4615, 36.3932] }
    },
 
    // 6. farms
    {
        title: "Lavender Farm Stay in Provence",
        description: "Wake up surrounded by rolling fields of purple lavender on this working farm in the heart of Provence. Enjoy farm-fresh breakfast, guided nature walks, and peaceful evenings under a canopy of stars.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&auto=format&fit=crop&q=60"
        },
        price: 1300,
        location: "Provence",
        country: "France",
        category: "farms",
        reviews: [],
        owner: "69c928d53ace3d6ffd5553c7",
        geometry: { type: "Point", coordinates: [5.3698, 43.8367] }
    },
 
    // 7. camping
    {
        title: "Luxury Glamping Pod in New Zealand",
        description: "A cozy pod nestled in the misty forests of Fiordland, just minutes from Milford Sound. Fall asleep to the sound of waterfalls and wake up to kiwi birds calling in the ancient rainforest.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&auto=format&fit=crop&q=60"
        },
        price: 1100,
        location: "Fiordland",
        country: "New Zealand",
        category: "camping",
        reviews: [],
        owner: "69c924b8eb03dabef49282fc",
        geometry: { type: "Point", coordinates: [167.9290, -45.4142] }
    },
 
    // 8. mountains
    {
        title: "Himalayan Stone Cottage in Manali",
        description: "A rustic stone cottage tucked in the snow-dusted peaks of the Himalayas. Perfect for trekkers and nature lovers — enjoy roaring fireplaces, apple orchards, and breathtaking views of Rohtang Pass.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop&q=60"
        },
        price: 700,
        location: "Manali",
        country: "India",
        category: "mountains",
        reviews: [],
        owner: "69c51e90948ab9b69d484718",
        geometry: { type: "Point", coordinates: [77.1887, 32.2396] }
    },
 
    // 9. iconicCities
    {
        title: "Parisian Apartment Near the Eiffel Tower",
        description: "A chic Haussmann-style apartment just two blocks from the Eiffel Tower. Sip your morning coffee on the iron balcony, stroll to the Champ de Mars, and live like a true Parisian.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&auto=format&fit=crop&q=60"
        },
        price: 2700,
        location: "Paris",
        country: "France",
        category: "iconicCities",
        reviews: [],
        owner: "69cbcdbd8a950bb6b6906add",
        geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
    },
 
    // 10. room
    {
        title: "Cozy Studio in Kyoto's Gion District",
        description: "A minimalist Japanese studio in the heart of Gion, Kyoto's most atmospheric geisha district. Tatami mats, paper screens, and a bamboo garden make this the ultimate serene urban escape.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&auto=format&fit=crop&q=60"
        },
        price: 1400,
        location: "Kyoto",
        country: "Japan",
        category: "room",
        reviews: [],
        owner: "69c928d53ace3d6ffd5553c7",
        geometry: { type: "Point", coordinates: [135.7681, 35.0116] }
    },
 
    // 11. arctic
    {
        title: "Arctic Wilderness Cabin in Tromsø",
        description: "An off-grid cabin on the edge of a frozen fjord in Northern Norway. Dog-sledding, snowshoeing, and whale-watching tours depart right from your doorstep. Northern Lights almost guaranteed.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=400&auto=format&fit=crop&q=60"
        },
        price: 3200,
        location: "Tromsø",
        country: "Norway",
        category: "arctic",
        reviews: [],
        owner: "69c924b8eb03dabef49282fc",
        geometry: { type: "Point", coordinates: [18.9553, 69.6492] }
    },
 
    // 12. boats
    {
        title: "Luxury Sailing Yacht in the Aegean",
        description: "Charter a private luxury sailing yacht and island-hop across the Greek Aegean. Snorkel in hidden coves, dine on fresh seafood, and anchor under the stars at Paros, Naxos, and beyond.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=400&auto=format&fit=crop&q=60"
        },
        price: 7500,
        location: "Athens",
        country: "Greece",
        category: "boats",
        reviews: [],
        owner: "69cbcdbd8a950bb6b6906add",
        geometry: { type: "Point", coordinates: [23.7275, 37.9838] }
    },
 
    // 13. domes
    {
        title: "Transparent Bubble Dome in Patagonia",
        description: "Sleep inside a transparent bubble dome surrounded by the raw wilderness of Chilean Patagonia. Torres del Paine's jagged peaks frame every wall — nature is your wallpaper, 360 degrees around.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=400&auto=format&fit=crop&q=60"
        },
        price: 4200,
        location: "Torres del Paine",
        country: "Chile",
        category: "domes",
        reviews: [],
        owner: "69c51e90948ab9b69d484718",
        geometry: { type: "Point", coordinates: [-72.9300, -51.0000] }
    },
 
    // 14. farms
    {
        title: "Tea Estate Bungalow in Munnar",
        description: "A colonial-era planter's bungalow sitting atop rolling tea gardens in Kerala's misty highlands. Watch tea pickers at work, take a factory tour, and sip freshly brewed tea on your wraparound veranda.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=60"
        },
        price: 850,
        location: "Munnar",
        country: "India",
        category: "farms",
        reviews: [],
        owner: "69c928d53ace3d6ffd5553c7",
        geometry: { type: "Point", coordinates: [77.0595, 10.0889] }
    },
 
    // 15. castles
    {
        title: "Moorish Castle Riad in Marrakech",
        description: "A lavish 400-year-old riad palace hidden behind ornate cedar doors in Marrakech's ancient medina. Mosaic courtyards, a hammam, rooftop terraces, and handcrafted rooms transport you to a golden era.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&auto=format&fit=crop&q=60"
        },
        price: 3100,
        location: "Marrakech",
        country: "Morocco",
        category: "castles",
        reviews: [],
        owner: "69c924b8eb03dabef49282fc",
        geometry: { type: "Point", coordinates: [-7.9811, 31.6295] }
    }
];

module.exports = { data: sampleListings };