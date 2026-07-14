/* ============================================================
   Adventures in Photography — site behaviour
   ============================================================
   HOW TO ADD YOUR OWN PHOTOS
   1. Drop image files into the /images folder.
   2. Add an entry to the PHOTOS array below with the filename,
      a category, and a short caption.
   3. Category is just data for now (not shown on the site), kept
      in case you want to bring back filtering later.
   ============================================================ */

const PHOTOS = [
  { file: "Photo_00001.jpg", category: "Nature", caption: "Landing over beach" },
  { file: "Photo_00002.jpg", category: "Landscape", caption: "No peeing, please" },
  { file: "Photo_00003.jpg", category: "Street", caption: "Drowned" },
  { file: "Photo_00004.jpg", category: "Street", caption: "Journey complete" },
  { file: "Photo_00005.jpg", category: "Nature", caption: "Tracks in sand" },
  { file: "Photo_00006.jpg", category: "Landscape", caption: "Supping through the capital" },
  { file: "Photo_00007.jpg", category: "Detail", caption: "Icy way to work" },
  { file: "Photo_00008.jpg", category: "Landscape", caption: "Cold snap, black ice" },
  { file: "Photo_00009.jpg", category: "Street", caption: "Stickers" },
  { file: "Photo_00010.jpg", category: "Travel", caption: "Reflection" },
  { file: "Photo_00011.jpg", category: "Landscape", caption: "End of times sunset" },
  { file: "Photo_00012.jpg", category: "Street", caption: "Friendly chat" },
  { file: "Photo_00013.jpg", category: "Nature", caption: "This is my Mona Lisa of parking cones" },
  { file: "Photo_00014.jpg", category: "Travel", caption: "Left my thumbprint on the lens, still fire" },
  { file: "Photo_00015.jpg", category: "Street", caption: "Someone's forgotten umbrella, a tragic hero" },
  { file: "Photo_00016.jpg", category: "Travel", caption: "A very serious portrait of a very unserious moment" },
  { file: "Photo_00017.jpg", category: "Landscape", caption: "Street sign having main character energy" },
  { file: "Photo_00018.jpg", category: "Nature", caption: "Street musician who never asked to be in this" },
  { file: "Photo_00019.jpg", category: "Portrait", caption: "A very serious portrait of a very unserious moment" },
  { file: "Photo_00020.jpg", category: "Street", caption: "Coffee cup's final moments" },
  { file: "Photo_00021.jpg", category: "Portrait", caption: "10/10 lighting, 2/10 my hair" },
  { file: "Photo_00022.jpg", category: "Landscape", caption: "This wall has more personality than most people" },
  { file: "Photo_00023.jpg", category: "Landscape", caption: "Bench with a better view than me" },
  { file: "Photo_00024.jpg", category: "Portrait", caption: "This napkin holder is more photogenic than me" },
  { file: "Photo_00025.jpg", category: "Portrait", caption: "Evidence I left the house that day" },
  { file: "Photo_00026.jpg", category: "Nature", caption: "That one pigeon that owns the block" },
  { file: "Photo_00027.jpg", category: "Travel", caption: "This goose has seen things" },
  { file: "Photo_00028.jpg", category: "Detail", caption: "Sunset showed up, did its job, left" },
  { file: "Photo_00029.jpg", category: "Travel", caption: "This staircase has main character syndrome" },
  { file: "Photo_00030.jpg", category: "Nature", caption: "Overheard a stranger say 'nice shot,' still recovering" },
  { file: "Photo_00031.jpg", category: "Portrait", caption: "Streetlight doing its best noir impression" },
  { file: "Photo_00032.jpg", category: "Street", caption: "Stray cat that clearly runs this neighborhood" },
  { file: "Photo_00033.jpg", category: "Landscape", caption: "Evidence I left the house that day" },
  { file: "Photo_00034.jpg", category: "Nature", caption: "Traffic cone standing proud" },
  { file: "Photo_00035.jpg", category: "Portrait", caption: "Sunset showed up, did its job, left" },
  { file: "Photo_00036.jpg", category: "Street", caption: "My thumb was almost in this one" },
  { file: "Photo_00037.jpg", category: "Detail", caption: "A very serious portrait of a very unserious moment" },
  { file: "Photo_00038.jpg", category: "Detail", caption: "Took 20 minutes to get the crumbs out of frame" },
  { file: "Photo_00039.jpg", category: "Portrait", caption: "Street sign having main character energy" },
  { file: "Photo_00040.jpg", category: "Portrait", caption: "Bench with a better view than me" },
  { file: "Photo_00041.jpg", category: "Street", caption: "Genuinely can't explain why I took this" },
  { file: "Photo_00042.jpg", category: "Portrait", caption: "This is my Mona Lisa of parking cones" },
  { file: "Photo_00043.jpg", category: "Nature", caption: "My knee, accidentally, but make it moody" },
  { file: "Photo_00044.jpg", category: "Landscape", caption: "This napkin holder is more photogenic than me" },
  { file: "Photo_00045.jpg", category: "Nature", caption: "This crack in the sidewalk deserves a gallery" },
  { file: "Photo_00046.jpg", category: "Travel", caption: "Took this instead of paying attention in the meeting" },
  { file: "Photo_00047.jpg", category: "Street", caption: "Street sign having main character energy" },
  { file: "Photo_00048.jpg", category: "Detail", caption: "This wall has more personality than most people" },
  { file: "Photo_00049.jpg", category: "Portrait", caption: "Took 20 minutes to get the crumbs out of frame" },
  { file: "Photo_00050.jpg", category: "Nature", caption: "This is what main character energy looks like" },
  { file: "Photo_00051.jpg", category: "Street", caption: "A very confident houseplant" },
  { file: "Photo_00052.jpg", category: "Portrait", caption: "This puddle contains multitudes" },
  { file: "Photo_00053.jpg", category: "Street", caption: "Cloud that looked like a burrito, gone within seconds" },
  { file: "Photo_00054.jpg", category: "Portrait", caption: "The moon looking smug tonight" },
  { file: "Photo_00055.jpg", category: "Portrait", caption: "Zoomed in way too much, no regrets" },
  { file: "Photo_00056.jpg", category: "Street", caption: "A puddle with main character syndrome" },
  { file: "Photo_00057.jpg", category: "Nature", caption: "Neighbor's cat, unbothered as always" },
  { file: "Photo_00058.jpg", category: "Street", caption: "This puddle has more depth than my last relationship" },
  { file: "Photo_00059.jpg", category: "Detail", caption: "Random guy's dog, 10/10 would photograph again" },
  { file: "Photo_00060.jpg", category: "Nature", caption: "That one pigeon that owns the block" },
  { file: "Photo_00061.jpg", category: "Street", caption: "Manhole cover, underrated icon" },
  { file: "Photo_00062.jpg", category: "Street", caption: "Definitely not stalking that cat" },
  { file: "Photo_00063.jpg", category: "Nature", caption: "This is what main character energy looks like" },
  { file: "Photo_00064.jpg", category: "Travel", caption: "Manhole cover, underrated icon" },
  { file: "Photo_00065.jpg", category: "Nature", caption: "The best photo I've ever taken of a fence" },
  { file: "Photo_00066.jpg", category: "Detail", caption: "The best photo I've ever taken of a fence" },
  { file: "Photo_00067.jpg", category: "Detail", caption: "That one weird cloud everyone stopped to look at" },
  { file: "Photo_00068.jpg", category: "Street", caption: "Someone's laundry, elevated to fine art" },
  { file: "Photo_00069.jpg", category: "Travel", caption: "This tree has left me speechless" },
  { file: "Photo_00070.jpg", category: "Landscape", caption: "Parking lot, but make it art" },
  { file: "Photo_00071.jpg", category: "Landscape", caption: "Took this while pretending to check my phone" },
  { file: "Photo_00072.jpg", category: "Nature", caption: "Street sign having main character energy" },
  { file: "Photo_00073.jpg", category: "Nature", caption: "Street musician who never asked to be in this" },
  { file: "Photo_00074.jpg", category: "Travel", caption: "Zoomed in way too much, no regrets" },
  { file: "Photo_00075.jpg", category: "Detail", caption: "This wall has more personality than most people" },
  { file: "Photo_00076.jpg", category: "Travel", caption: "My reflection in a spoon, surprisingly flattering" },
  { file: "Photo_00077.jpg", category: "Travel", caption: "Peak 'why is this so satisfying' energy" },
  { file: "Photo_00078.jpg", category: "Travel", caption: "This tree really said 'main character'" },
  { file: "Photo_00079.jpg", category: "Nature", caption: "This window reflection is showing off" },
  { file: "Photo_00080.jpg", category: "Landscape", caption: "A very confident houseplant" },
  { file: "Photo_00081.jpg", category: "Travel", caption: "Grabbed this before security noticed" },
  { file: "Photo_00082.jpg", category: "Nature", caption: "Snack before it disappeared forever" },
  { file: "Photo_00083.jpg", category: "Landscape", caption: "This staircase has main character syndrome" },
  { file: "Photo_00084.jpg", category: "Detail", caption: "Street sign having main character energy" },
  { file: "Photo_00085.jpg", category: "Detail", caption: "Pigeon judged me and I judged back" },
  { file: "Photo_00086.jpg", category: "Nature", caption: "This window reflection is showing off" },
  { file: "Photo_00087.jpg", category: "Portrait", caption: "Took 3 seconds, felt like a professional" },
  { file: "Photo_00088.jpg", category: "Street", caption: "Took 3 seconds, felt like a professional" },
  { file: "Photo_00089.jpg", category: "Landscape", caption: "This stop sign is giving fashion editorial" },
  { file: "Photo_00090.jpg", category: "Portrait", caption: "Took 20 minutes to get the crumbs out of frame" },
  { file: "Photo_00091.jpg", category: "Travel", caption: "This napkin holder is more photogenic than me" },
  { file: "Photo_00092.jpg", category: "Street", caption: "Took this while pretending to check my phone" },
  { file: "Photo_00093.jpg", category: "Portrait", caption: "Street sign having main character energy" },
  { file: "Photo_00094.jpg", category: "Travel", caption: "Definitely staged, don't ask how long it took" },
  { file: "Photo_00095.jpg", category: "Landscape", caption: "Random hallway, surprisingly cinematic" },
  { file: "Photo_00096.jpg", category: "Portrait", caption: "Escalator handrail, an underrated subject" },
  { file: "Photo_00097.jpg", category: "Landscape", caption: "Found Wally. Just kidding, it's a fire hydrant" },
  { file: "Photo_00098.jpg", category: "Portrait", caption: "Sky flexing for no reason" },
  { file: "Photo_00099.jpg", category: "Street", caption: "This puddle contains multitudes" },
  { file: "Photo_00100.jpg", category: "Street", caption: "A puddle with main character syndrome" },
  { file: "Photo_00101.jpg", category: "Landscape", caption: "Sunset showed up, did its job, left" },
  { file: "Photo_00102.jpg", category: "Nature", caption: "Escalator handrail, an underrated subject" },
  { file: "Photo_00103.jpg", category: "Landscape", caption: "This bus stop deserves an award" },
  { file: "Photo_00104.jpg", category: "Street", caption: "Captured mid-sneeze, still a banger" },
  { file: "Photo_00105.jpg", category: "Nature", caption: "This is either art or I need new glasses" },
  { file: "Photo_00106.jpg", category: "Travel", caption: "This crack in the sidewalk deserves a gallery" },
  { file: "Photo_00107.jpg", category: "Portrait", caption: "Definitely staged, don't ask how long it took" },
  { file: "Photo_00108.jpg", category: "Travel", caption: "Street musician who never asked to be in this" },
  { file: "Photo_00109.jpg", category: "Street", caption: "My own foot, unintentionally" },
  { file: "Photo_00110.jpg", category: "Nature", caption: "The lighting did all the work here, not me" },
  { file: "Photo_00111.jpg", category: "Street", caption: "The last fry, a still life" },
  { file: "Photo_00112.jpg", category: "Portrait", caption: "The moon looking smug tonight" },
  { file: "Photo_00113.jpg", category: "Nature", caption: "This puddle has more depth than my last relationship" },
  { file: "Photo_00114.jpg", category: "Portrait", caption: "Parking garage lighting, unreasonably good" },
  { file: "Photo_00115.jpg", category: "Travel", caption: "Someone's forgotten umbrella, a tragic hero" },
  { file: "Photo_00116.jpg", category: "Landscape", caption: "Definitely not stalking that cat" },
  { file: "Photo_00117.jpg", category: "Street", caption: "Zoomed in way too much, no regrets" },
  { file: "Photo_00118.jpg", category: "Portrait", caption: "Took 14 photos, this was the least blurry" },
  { file: "Photo_00119.jpg", category: "Travel", caption: "Ice cream truck, a moving masterpiece" },
  { file: "Photo_00120.jpg", category: "Street", caption: "Grabbed this shot mid-sprint to catch the bus" },
  { file: "Photo_00121.jpg", category: "Street", caption: "Pigeon judged me and I judged back" },
  { file: "Photo_00122.jpg", category: "Landscape", caption: "Stray cat that clearly runs this neighborhood" },
  { file: "Photo_00123.jpg", category: "Nature", caption: "This puddle contains multitudes" },
  { file: "Photo_00124.jpg", category: "Street", caption: "Zoomed in way too much, no regrets" },
  { file: "Photo_00125.jpg", category: "Landscape", caption: "This puddle reflection is doing more than I am" },
  { file: "Photo_00126.jpg", category: "Landscape", caption: "A very dramatic shadow for a very ordinary day" },
  { file: "Photo_00127.jpg", category: "Street", caption: "A very serious portrait of a very unserious moment" },
  { file: "Photo_00128.jpg", category: "Nature", caption: "Escalator handrail, an underrated subject" },
  { file: "Photo_00129.jpg", category: "Street", caption: "My own foot, unintentionally" },
  { file: "Photo_00130.jpg", category: "Street", caption: "This window reflection is showing off" },
  { file: "Photo_00131.jpg", category: "Travel", caption: "Streetlight doing its best noir impression" },
  { file: "Photo_00132.jpg", category: "Detail", caption: "Definitely not stalking that cat" },
  { file: "Photo_00133.jpg", category: "Detail", caption: "This fire escape has main character lighting" },
  { file: "Photo_00134.jpg", category: "Street", caption: "My thumb was almost in this one" },
  { file: "Photo_00135.jpg", category: "Landscape", caption: "The vending machine and I had a moment" },
  { file: "Photo_00136.jpg", category: "Detail", caption: "Bench with a better view than me" },
  { file: "Photo_00137.jpg", category: "Detail", caption: "This fire escape has main character lighting" },
  { file: "Photo_00138.jpg", category: "Detail", caption: "Took this instead of paying attention in the meeting" },
  { file: "Photo_00139.jpg", category: "Landscape", caption: "This bug held very still, unlike me" },
  { file: "Photo_00140.jpg", category: "Nature", caption: "My knee, accidentally, but make it moody" },
  { file: "Photo_00141.jpg", category: "Landscape", caption: "This puddle contains multitudes" },
  { file: "Photo_00142.jpg", category: "Detail", caption: "Took this instead of paying attention in the meeting" },
  { file: "Photo_00143.jpg", category: "Portrait", caption: "10/10 lighting, 2/10 my hair" },
  { file: "Photo_00144.jpg", category: "Street", caption: "Chair left outside, now a philosophical statement" },
  { file: "Photo_00145.jpg", category: "Street", caption: "This bus stop deserves an award" },
  { file: "Photo_00146.jpg", category: "Detail", caption: "Someone's laundry, elevated to fine art" },
  { file: "Photo_00147.jpg", category: "Detail", caption: "Fog rolling in like it's got somewhere to be" },
  { file: "Photo_00148.jpg", category: "Portrait", caption: "My reflection in a spoon, surprisingly flattering" },
  { file: "Photo_00149.jpg", category: "Street", caption: "A rock. An honest, hardworking rock" },
  { file: "Photo_00150.jpg", category: "Detail", caption: "Ice cream truck, a moving masterpiece" },
  { file: "Photo_00151.jpg", category: "Landscape", caption: "Parking lot, but make it art" },
  { file: "Photo_00152.jpg", category: "Nature", caption: "My own foot, unintentionally" },
  { file: "Photo_00153.jpg", category: "Landscape", caption: "Accidentally artistic blur" },
  { file: "Photo_00154.jpg", category: "Street", caption: "This crack in the sidewalk deserves a gallery" },
  { file: "Photo_00155.jpg", category: "Detail", caption: "Escalator handrail, an underrated subject" },
  { file: "Photo_00156.jpg", category: "Detail", caption: "Coffee cup's final moments" },
  { file: "Photo_00157.jpg", category: "Detail", caption: "This puddle contains multitudes" },
  { file: "Photo_00158.jpg", category: "Street", caption: "This wall has more personality than most people" },
  { file: "Photo_00159.jpg", category: "Landscape", caption: "Airport gate B12, a moody masterpiece" },
  { file: "Photo_00160.jpg", category: "Portrait", caption: "That one pigeon that owns the block" },
  { file: "Photo_00161.jpg", category: "Portrait", caption: "Street musician who never asked to be in this" },
  { file: "Photo_00162.jpg", category: "Nature", caption: "Took this instead of paying attention in the meeting" },
  { file: "Photo_00163.jpg", category: "Travel", caption: "The vending machine and I had a moment" },
  { file: "Photo_00164.jpg", category: "Nature", caption: "Escalator handrail, an underrated subject" },
  { file: "Photo_00165.jpg", category: "Street", caption: "Chair left outside, now a philosophical statement" },
  { file: "Photo_00166.jpg", category: "Portrait", caption: "Coffee cup's final moments" },
  { file: "Photo_00167.jpg", category: "Landscape", caption: "The best photo I've ever taken of a fence" },
  { file: "Photo_00168.jpg", category: "Nature", caption: "My own foot, unintentionally" },
  { file: "Photo_00169.jpg", category: "Landscape", caption: "Neighbor's cat, unbothered as always" },
  { file: "Photo_00170.jpg", category: "Landscape", caption: "Parking lot, but make it art" },
  { file: "Photo_00171.jpg", category: "Travel", caption: "Sunset trying too hard today" },
  { file: "Photo_00172.jpg", category: "Travel", caption: "Definitely staged, don't ask how long it took" },
  { file: "Photo_00173.jpg", category: "Street", caption: "This puddle contains multitudes" },
  { file: "Photo_00174.jpg", category: "Travel", caption: "Sunset showed up, did its job, left" },
  { file: "Photo_00175.jpg", category: "Street", caption: "Zoomed in way too much, no regrets" },
  { file: "Photo_00176.jpg", category: "Travel", caption: "Zoomed in way too much, no regrets" },
  { file: "Photo_00177.jpg", category: "Nature", caption: "This ceiling tile changed my life" },
  { file: "Photo_00178.jpg", category: "Detail", caption: "This goose has seen things" },
  { file: "Photo_00179.jpg", category: "Travel", caption: "Definitely not stalking that cat" },
  { file: "Photo_00180.jpg", category: "Travel", caption: "Random hallway, surprisingly cinematic" },
  { file: "Photo_00181.jpg", category: "Landscape", caption: "Overheard a stranger say 'nice shot,' still recovering" },
  { file: "Photo_00182.jpg", category: "Landscape", caption: "Left my thumbprint on the lens, still fire" },
  { file: "Photo_00183.jpg", category: "Nature", caption: "The best photo I've ever taken of a fence" },
  { file: "Photo_00184.jpg", category: "Travel", caption: "That crack of light through the blinds, chef's kiss" },
  { file: "Photo_00185.jpg", category: "Portrait", caption: "Manhole cover, underrated icon" },
  { file: "Photo_00186.jpg", category: "Street", caption: "Genuinely can't explain why I took this" },
  { file: "Photo_00187.jpg", category: "Nature", caption: "Neighbor's cat, unbothered as always" },
  { file: "Photo_00188.jpg", category: "Street", caption: "Manhole cover, underrated icon" },
  { file: "Photo_00189.jpg", category: "Detail", caption: "Captured mid-sneeze, still a banger" },
  { file: "Photo_00190.jpg", category: "Nature", caption: "My knee, accidentally, but make it moody" },
  { file: "Photo_00191.jpg", category: "Portrait", caption: "That one pigeon that owns the block" },
  { file: "Photo_00192.jpg", category: "Portrait", caption: "A rock. An honest, hardworking rock" },
  { file: "Photo_00193.jpg", category: "Landscape", caption: "That one pigeon that owns the block" },
  { file: "Photo_00194.jpg", category: "Travel", caption: "A puddle with main character syndrome" },
  { file: "Photo_00195.jpg", category: "Landscape", caption: "A rock. An honest, hardworking rock" },
  { file: "Photo_00196.jpg", category: "Travel", caption: "Coffee cup's final moments" },
  { file: "Photo_00197.jpg", category: "Travel", caption: "Manhole cover, underrated icon" },
  { file: "Photo_00198.jpg", category: "Street", caption: "My reflection in a toaster, very artistic" },
  { file: "Photo_00199.jpg", category: "Landscape", caption: "Definitely not stalking that cat" },
  { file: "Photo_00200.jpg", category: "Portrait", caption: "Leaf doing its best impression of art" },
  { file: "Photo_00201.jpg", category: "Street", caption: "Parking garage lighting, unreasonably good" },
  { file: "Photo_00202.jpg", category: "Travel", caption: "Stray cat that clearly runs this neighborhood" },
  { file: "Photo_00203.jpg", category: "Portrait", caption: "A seagull that clearly wanted royalties" },
  { file: "Photo_00204.jpg", category: "Nature", caption: "Definitely staged, don't ask how long it took" },
  { file: "Photo_00205.jpg", category: "Landscape", caption: "Genuinely can't explain why I took this" },
  { file: "Photo_00206.jpg", category: "Travel", caption: "Vending machine, but make it moody" },
  { file: "Photo_00207.jpg", category: "Nature", caption: "10/10 lighting, 2/10 my hair" },
  { file: "Photo_00208.jpg", category: "Street", caption: "Manhole cover, underrated icon" },
  { file: "Photo_00209.jpg", category: "Landscape", caption: "10/10 lighting, 2/10 my hair" },
  { file: "Photo_00210.jpg", category: "Nature", caption: "Ice cream truck, a moving masterpiece" },
  { file: "Photo_00211.jpg", category: "Street", caption: "Grabbed this before security noticed" },
  { file: "Photo_00212.jpg", category: "Portrait", caption: "This napkin holder is more photogenic than me" },
  { file: "Photo_00213.jpg", category: "Street", caption: "The last fry, a still life" },
  { file: "Photo_00214.jpg", category: "Portrait", caption: "Reflection better looking than the original" },
  { file: "Photo_00215.jpg", category: "Nature", caption: "Took 20 minutes to get the crumbs out of frame" },
  { file: "Photo_00216.jpg", category: "Portrait", caption: "Took 3 seconds, felt like a professional" },
  { file: "Photo_00217.jpg", category: "Detail", caption: "Peak 'why is this so satisfying' energy" },
  { file: "Photo_00218.jpg", category: "Landscape", caption: "Accidentally artistic blur" },
  { file: "Photo_00219.jpg", category: "Nature", caption: "Street musician who never asked to be in this" },
  { file: "Photo_00220.jpg", category: "Portrait", caption: "Evidence I left the house that day" },
  { file: "Photo_00221.jpg", category: "Landscape", caption: "This puddle reflection is doing more than I am" },
  { file: "Photo_00222.jpg", category: "Street", caption: "Took 20 minutes to get the crumbs out of frame" },
  { file: "Photo_00223.jpg", category: "Portrait", caption: "Street sign having main character energy" },
  { file: "Photo_00224.jpg", category: "Nature", caption: "Parking garage lighting, unreasonably good" },
  { file: "Photo_00225.jpg", category: "Travel", caption: "Stray cat that clearly runs this neighborhood" },
  { file: "Photo_00226.jpg", category: "Detail", caption: "This is what main character energy looks like" },
  { file: "Photo_00227.jpg", category: "Landscape", caption: "Found Wally. Just kidding, it's a fire hydrant" },
  { file: "Photo_00228.jpg", category: "Landscape", caption: "The lighting did all the work here, not me" },
  { file: "Photo_00229.jpg", category: "Street", caption: "My own foot, unintentionally" },
  { file: "Photo_00230.jpg", category: "Landscape", caption: "Grocery store lighting, surprisingly cinematic" },
  { file: "Photo_00231.jpg", category: "Travel", caption: "Ice cream truck, a moving masterpiece" },
  { file: "Photo_00232.jpg", category: "Street", caption: "This orange is doing a lot of emotional work" },
  { file: "Photo_00233.jpg", category: "Street", caption: "Evidence I left the house that day" },
  { file: "Photo_00234.jpg", category: "Portrait", caption: "That one weird cloud everyone stopped to look at" },
  { file: "Photo_00235.jpg", category: "Landscape", caption: "Bench with a better view than me" },
  { file: "Photo_00236.jpg", category: "Street", caption: "A very confident houseplant" },
  { file: "Photo_00237.jpg", category: "Street", caption: "Genuinely can't explain why I took this" },
  { file: "Photo_00238.jpg", category: "Landscape", caption: "Bench with a better view than me" },
  { file: "Photo_00239.jpg", category: "Travel", caption: "This fire escape has main character lighting" },
  { file: "Photo_00240.jpg", category: "Travel", caption: "Took this while pretending to check my phone" },
  { file: "Photo_00241.jpg", category: "Street", caption: "Street sign having main character energy" },
  { file: "Photo_00242.jpg", category: "Street", caption: "This fire escape has main character lighting" },
  { file: "Photo_00243.jpg", category: "Landscape", caption: "My lunch, immortalized" },
  { file: "Photo_00244.jpg", category: "Nature", caption: "This puddle reflection is doing more than I am" },
  { file: "Photo_00245.jpg", category: "Detail", caption: "Genuinely can't explain why I took this" },
  { file: "Photo_00246.jpg", category: "Nature", caption: "Definitely not stalking that cat" },
  { file: "Photo_00247.jpg", category: "Portrait", caption: "Street sign having main character energy" },
];

/* ---------------- nav toggle (mobile) ---------------- */
function initNav(){
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if(!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.textContent = open ? "Close" : "Menu";
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.textContent = "Menu";
  }));
}

/* ---------------- scroll reveal ---------------- */
function initReveal(){
  const items = document.querySelectorAll(".reveal");
  if(!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
}

/* ---------------- build a single frame element ---------------- */
function buildFrame(photo, number){
  const frame = document.createElement("div");
  frame.className = "frame reveal";
  frame.dataset.category = photo.category;
  frame.dataset.index = number;

  frame.innerHTML = `
    <img src="images/${photo.file}" alt="${photo.caption}" loading="lazy">
    <div class="frame-marks">
      <span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span>
    </div>
    <div class="frame-info">
      <span class="no">No. ${String(number).padStart(3,"0")}</span>
    </div>
  `;

  const img = frame.querySelector("img");
  img.addEventListener("load", () => img.classList.add("loaded"));
  if(img.complete) img.classList.add("loaded");

  return frame;
}

/* ---------------- gallery page: full grid + lightbox ---------------- */
function renderGallery(){
  const grid = document.querySelector("[data-gallery-grid]");
  if(!grid) return;

  PHOTOS.forEach((photo, i) => grid.appendChild(buildFrame(photo, i + 1)));

  initReveal();
  initLightbox(grid);
}

/* ---------------- lightbox ---------------- */
function initLightbox(grid){
  const lightbox = document.querySelector(".lightbox");
  if(!lightbox) return;

  const img = lightbox.querySelector("img");
  const noEl = lightbox.querySelector(".lightbox-no");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const prevBtn = lightbox.querySelector(".lightbox-prev");
  const nextBtn = lightbox.querySelector(".lightbox-next");

  let currentIndex = 0;

  function openAt(index){
    const visibleFrames = Array.from(grid.querySelectorAll(".frame:not(.is-hidden)"));
    if(!visibleFrames.length) return;
    currentIndex = ((index % visibleFrames.length) + visibleFrames.length) % visibleFrames.length;
    const frame = visibleFrames[currentIndex];
    const frameImg = frame.querySelector("img");
    img.src = frameImg.src;
    img.alt = frameImg.alt;
    noEl.textContent = "No. " + String(frame.dataset.index).padStart(3, "0");
    lightbox.classList.add("open");
    lightbox.dataset.list = "visible";
  }

  grid.addEventListener("click", (e) => {
    const frame = e.target.closest(".frame");
    if(!frame) return;
    const visibleFrames = Array.from(grid.querySelectorAll(".frame:not(.is-hidden)"));
    const idx = visibleFrames.indexOf(frame);
    openAt(idx);
  });

  function close(){ lightbox.classList.remove("open"); }
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => { if(e.target === lightbox) close(); });
  prevBtn.addEventListener("click", () => openAt(currentIndex - 1));
  nextBtn.addEventListener("click", () => openAt(currentIndex + 1));

  document.addEventListener("keydown", (e) => {
    if(!lightbox.classList.contains("open")) return;
    if(e.key === "Escape") close();
    if(e.key === "ArrowLeft") openAt(currentIndex - 1);
    if(e.key === "ArrowRight") openAt(currentIndex + 1);
  });
}

/* ---------------- nav shadow / solid on scroll ---------------- */
function initNavScroll(){
  const nav = document.querySelector(".site-nav");
  if(!nav) return;
  const onScroll = () => {
    nav.style.padding = window.scrollY > 40 ? "14px var(--gutter)" : "22px var(--gutter)";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initNavScroll();
  renderGallery();
  initReveal();
});
