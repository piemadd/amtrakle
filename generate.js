const stations = {
    "ALY": "Albany",
    "ALB": "Albany–Rensselaer",
    "ALI": "Albion",
    "ABQ": "Albuquerque",
    "AST": "Aldershot",
    "ALD": "Alderson",
    "ALX": "Alexandria",
    "CNL": "Allensworth State Park",
    "ALC": "Alliance",
    "ALP": "Alpine",
    "ALN": "Alton",
    "ALT": "Altoona",
    "AMS": "Amsterdam",
    "ANA": "Anaheim",
    "ARB": "Ann Arbor",
    "ATN": "Anniston",
    "ACA": "Antioch–Pittsburg",
    "ACD": "Arcadia Valley",
    "ADM": "Ardmore",
    "ARD": "Ardmore",
    "ARK": "Arkadelphia",
    "AKY": "Ashland",
    "ASD": "Ashland",
    "ATL": "Atlanta Peachtree",
    "ARN": "Auburn",
    "AUS": "Austin",
    "BFD": "Bakersfield",
    "BAL": "Baltimore Penn",
    "BAM": "Bangor",
    "BAR": "Barstow",
    "BTL": "Battle Creek",
    "BMT": "Beaumont",
    "BEL": "Bellingham Fairhaven",
    "BLF": "Bellows Falls",
    "BEN": "Benson",
    "BKY": "Berkeley",
    "BER": "Berlin",
    "BNG": "Bingen–White Salmon",
    "BHM": "Birmingham",
    "BNL": "Bloomington–Normal",
    "BBY": "Boston Back Bay",
    "BON": "Boston North",
    "BOS": "Boston South",
    "BRA": "Brattleboro",
    "BRP": "Bridgeport",
    "BRH": "Brookhaven",
    "BRO": "Browning",
    "BRK": "Brunswick",
    "BYN": "Bryan",
    "BUF": "Buffalo–Depew",
    "BFX": "Buffalo–Exchange Street",
    "BUR": "Burbank Airport",
    "BCV": "Burke Centre",
    "BRL": "Burlington",
    "BNC": "Burlington",
    "BWI": "BWI Thurgood Marshall Airport",
    "CML": "Camarillo",
    "CAM": "Camden",
    "CDL": "Carbondale",
    "CRV": "Carlinville",
    "CPN": "Carpinteria",
    "CYN": "Cary",
    "CNV": "Castleton",
    "CEN": "Centralia",
    "CTL": "Centralia",
    "CHM": "Champaign–Urbana",
    "CHS": "Charleston",
    "CHW": "Charleston",
    "CLT": "Charlotte",
    "CVS": "Charlottesville",
    "CWT": "Chatsworth",
    "CMO": "Chemult",
    "CHI": "Chicago Union",
    "CIC": "Chico",
    "CIN": "Cincinnati",
    "CLA": "Claremont",
    "CBR": "Cleburne",
    "CSN": "Clemson",
    "CLE": "Cleveland",
    "CLF": "Clifton Forge",
    "COT": "Coatesville",
    "COX": "Colfax",
    "CLB": "Columbia",
    "CBS": "Columbus",
    "COV": "Connellsville",
    "COI": "Connersville",
    "COC": "Corcoran",
    "CWH": "Cornwells Heights",
    "CRF": "Crawfordsville",
    "CRN": "Creston",
    "CRT": "Croton–Harmon",
    "CLP": "Culpeper",
    "CUM": "Cumberland",
    "CUT": "Cut Bank",
    "DAL": "Dallas",
    "DAN": "Danville",
    "DAV": "Davis",
    "DER": "Dearborn",
    "DFB": "Deerfield Beach",
    "DRT": "Del Rio",
    "DLD": "DeLand",
    "DLB": "Delray Beach",
    "DEM": "Deming",
    "DNK": "Denmark",
    "DEN": "Denver",
    "DET": "Detroit",
    "DLK": "Detroit Lakes",
    "DVL": "Devils Lake",
    "DIL": "Dillon",
    "DDG": "Dodge City",
    "DOV": "Dover",
    "DOA": "Dowagiac",
    "DOW": "Downingtown",
    "DQN": "Du Quoin",
    "DUN": "Dunsmuir",
    "DRD": "Durand",
    "DNC": "Durham",
    "DHM": "Durham–UNH",
    "DWT": "Dwight",
    "DYE": "Dyer",
    "GPK": "East Glacier Park",
    "LNS": "East Lansing",
    "EDM": "Edmonds",
    "EFG": "Effingham",
    "ELP": "El Paso",
    "EKH": "Elkhart",
    "ELT": "Elizabethtown",
    "ELK": "Elko",
    "ELY": "Elyria",
    "EMY": "Emeryville",
    "EPH": "Ephrata",
    "ERI": "Erie",
    "ESM": "Essex",
    "ESX": "Essex Junction",
    "EUG": "Eugene–Springfield",
    "EVR": "Everett",
    "EXR": "Exeter",
    "EXT": "Exton",
    "FFV": "Fairfield–Vacaville",
    "FAR": "Fargo",
    "FAY": "Fayetteville",
    "FLG": "Flagstaff",
    "FLN": "Flint",
    "FLO": "Florence",
    "FED": "Fort Edward",
    "FTL": "Fort Lauderdale",
    "FMD": "Fort Madison",
    "FMG": "Fort Morgan",
    "FTW": "Fort Worth",
    "FRA": "Framingham",
    "WIP": "Fraser–Winter Park",
    "FBG": "Fredericksburg",
    "FRE": "Freeport",
    "FMT": "Fremont",
    "FNO": "Fresno",
    "FUL": "Fullerton",
    "FTN": "Fulton",
    "GNS": "Gainesville",
    "GLE": "Gainesville",
    "GBB": "Galesburg",
    "GLP": "Gallup",
    "GCK": "Garden City",
    "GAS": "Gastonia",
    "GLM": "Gilman",
    "GGW": "Glasgow",
    "GDL": "Glendale",
    "GLN": "Glenview",
    "GSC": "Glenwood Springs",
    "GTA": "Goleta",
    "GRA": "Granby",
    "GFK": "Grand Forks",
    "GJT": "Grand Junction",
    "GRR": "Grand Rapids",
    "GRI": "Green River",
    "GFD": "Greenfield",
    "GRO": "Greensboro",
    "GNB": "Greensburg",
    "GRV": "Greenville",
    "GWD": "Greenwood",
    "GMS": "Grimsby",
    "GVB": "Grover Beach",
    "GUA": "Guadalupe",
    "HAM": "Hamlet",
    "HMD": "Hammond",
    "HMI": "Hammond/Whiting",
    "HNF": "Hanford",
    "HFY": "Harpers Ferry",
    "HAR": "Harrisburg",
    "HFD": "Hartford",
    "HAS": "Hastings",
    "HBG": "Hattiesburg",
    "HHL": "Haverhill",
    "HAV": "Havre",
    "HAY": "Hayward",
    "HAZ": "Hazlehurst",
    "HER": "Helper",
    "HEM": "Hermann",
    "HPT": "High Point",
    "HIN": "Hinton",
    "HLD": "Holdrege",
    "HOM": "Holland",
    "HOL": "Hollywood",
    "HLK": "Holyoke",
    "HMW": "Homewood",
    "HOP": "Hope",
    "HOS": "Houston",
    "HUD": "Hudson",
    "HGD": "Huntingdon",
    "HUN": "Huntington",
    "HUT": "Hutchinson",
    "IDP": "Independence",
    "IND": "Indianapolis",
    "IRV": "Irvine",
    "JXN": "Jackson",
    "JAN": "Jackson",
    "JAX": "Jacksonville",
    "JEF": "Jefferson City",
    "JSP": "Jesup",
    "JST": "Johnstown",
    "JOL": "Joliet",
    "KAL": "Kalamazoo",
    "KKI": "Kankakee",
    "KAN": "Kannapolis",
    "KCY": "Kansas City",
    "KEL": "Kelso",
    "KEE": "Kewanee",
    "KNG": "Kingman",
    "KIN": "Kingston",
    "KTR": "Kingstree",
    "KWD": "Kirkwood",
    "KIS": "Kissimmee",
    "KFS": "Klamath Falls",
    "LSE": "La Crosse",
    "LAG": "La Grange Road",
    "LAJ": "La Junta",
    "LAP": "La Plata",
    "LAF": "Lafayette",
    "LFT": "Lafayette",
    "LCH": "Lake Charles",
    "LAK": "Lakeland",
    "LKL": "Lakeland",
    "LMR": "Lamar",
    "LMY": "Lamy",
    "LNC": "Lancaster",
    "LPE": "Lapeer",
    "LSV": "Las Vegas",
    "LAB": "Latrobe",
    "LAU": "Laurel",
    "LRC": "Lawrence",
    "LWA": "Leavenworth",
    "LEE": "Lee's Summit",
    "LEW": "Lewistown",
    "LEX": "Lexington",
    "LIB": "Libby",
    "LCN": "Lincoln",
    "LNK": "Lincoln",
    "LRK": "Little Rock",
    "LOD": "Lodi",
    "LPS": "Lompoc–Surf",
    "LVW": "Longview",
    "LDB": "Lordsburg",
    "LOR": "Lorton",
    "LAX": "Los Angeles Union",
    "LYH": "Lynchburg–Kemper Street",
    "MAC": "Macomb",
    "MAD": "Madera",
    "MAL": "Malta",
    "MVN": "Malvern",
    "MSS": "Manassas",
    "MRC": "Maricopa",
    "MKS": "Marks",
    "MHL": "Marshall",
    "MTZ": "Martinez",
    "MRB": "Martinsburg",
    "MAT": "Mattoon",
    "MAY": "Maysville",
    "MCB": "McComb",
    "MCK": "McCook",
    "MCG": "McGregor",
    "MEM": "Memphis Central",
    "MDT": "Mendota",
    "MCD": "Merced",
    "MDN": "Meriden",
    "MEI": "Meridian",
    "MET": "Metropark",
    "MIA": "Miami",
    "MCI": "Michigan City",
    "MID": "Middletown",
    "MKE": "Milwaukee",
    "MKA": "Milwaukee Airport",
    "MIN": "Mineola",
    "MOT": "Minot",
    "MOD": "Modesto",
    "MNG": "Montgomery",
    "MPR": "Montpelier",
    "MTR": "Montreal",
    "MPK": "Moorpark",
    "MJY": "Mount Joy",
    "MTP": "Mount Pleasant",
    "MVW": "Mount Vernon",
    "MYS": "Mystic",
    "NPV": "Naperville",
    "NDL": "Needles",
    "NBK": "New Brunswick",
    "NBU": "New Buffalo",
    "NCR": "New Carrollton",
    "NHV": "New Haven Union",
    "STS": "New Haven State Street",
    "NIB": "New Iberia",
    "NLC": "New London",
    "NOL": "New Orleans",
    "NRO": "New Rochelle",
    "NYP": "New York Penn",
    "NYF": "New York State Fair",
    "NRK": "Newark",
    "EWR": "Newark Liberty International Airport",
    "NWK": "Newark Penn",
    "NBN": "Newbern–Dyersburg",
    "NPN": "Newport News",
    "NEW": "Newton",
    "NFL": "Niagara Falls",
    "NFS": "Niagara Falls",
    "NLS": "Niles",
    "NFK": "Norfolk",
    "NOR": "Norman",
    "NSF": "North Carolina State Fair",
    "NHT": "Northampton",
    "OAC": "Oakland Coliseum",
    "OKJ": "Oakland–Jack London Square",
    "OKL": "Oakville",
    "OSD": "Oceanside",
    "OKE": "Okeechobee",
    "OKC": "Oklahoma City",
    "ORB": "Old Orchard Beach",
    "OSB": "Old Saybrook",
    "OWL": "Olympia–Lacey",
    "OMA": "Omaha",
    "ONA": "Ontario",
    "ORC": "Oregon City",
    "ORL": "Orlando",
    "OSC": "Osceola",
    "OTM": "Ottumwa",
    "OXN": "Oxnard",
    "PAK": "Palatka",
    "PSN": "Palm Springs",
    "PAO": "Paoli",
    "PAR": "Parkesburg",
    "PSC": "Pasco",
    "PRB": "Paso Robles",
    "PTB": "Petersburg",
    "PVL": "Pauls Valley",
    "PHL": "Philadelphia 30th Street",
    "PHN": "Philadelphia North",
    "PIC": "Picayune",
    "PGH": "Pittsburgh",
    "PIT": "Pittsfield",
    "PLO": "Plano",
    "PLB": "Plattsburgh",
    "POS": "Pomona",
    "PON": "Pontiac",
    "PNT": "Pontiac",
    "PBF": "Poplar Bluff",
    "POH": "Port Henry",
    "PTH": "Port Huron",
    "PRK": "Port Kent",
    "POG": "Portage",
    "POR": "Portland",
    "PDX": "Portland",
    "POU": "Poughkeepsie",
    "PRC": "Prince",
    "PCT": "Princeton",
    "PJC": "Princeton Junction",
    "PVD": "Providence",
    "PRO": "Provo",
    "PUR": "Purcell",
    "QAN": "Quantico",
    "QCY": "Quincy",
    "RGH": "Raleigh Union",
    "RPH": "Randolph",
    "RTL": "Rantoul",
    "RAT": "Raton",
    "RDW": "Red Wing",
    "RDD": "Redding",
    "RNO": "Reno",
    "REN": "Rensselaer",
    "RHI": "Rhinecliff–Kingston",
    "RIC": "Richmond",
    "RVR": "Richmond Staples Mill Road",
    "RVM": "Richmond Main Street",
    "RIV": "Riverside",
    "RNK": "Roanoke",
    "ROC": "Rochester",
    "RLN": "Rocklin",
    "RMT": "Rocky Mount",
    "RKV": "Rockville",
    "ROM": "Rome",
    "RSV": "Roseville",
    "RSP": "Rouses Point",
    "ROY": "Royal Oak",
    "RUG": "Rugby",
    "RUD": "Rutland",
    "SAO": "Saco–Biddeford",
    "SAC": "Sacramento",
    "SLM": "Salem",
    "SNS": "Salinas",
    "SAL": "Salisbury",
    "SLC": "Salt Lake City",
    "SAS": "San Antonio",
    "SNB": "San Bernardino",
    "SNP": "San Clemente Pier",
    "OLT": "San Diego Old Town",
    "SAN": "San Diego Santa Fe Depot",
    "SJC": "San Jose Diridon",
    "SNC": "San Juan Capistrano",
    "SLO": "San Luis Obispo",
    "SMC": "San Marcos",
    "SND": "Sanderson",
    "SPT": "Sandpoint",
    "SKY": "Sandusky",
    "SFA": "Sanford",
    "SNA": "Santa Ana",
    "SBA": "Santa Barbara",
    "GAC": "Santa Clara – Great America",
    "SCC": "Santa Clara",
    "SAR": "Saratoga Springs",
    "SAV": "Savannah",
    "SDY": "Schenectady",
    "SCH": "Schriever",
    "SEA": "Seattle King Street",
    "SBG": "Sebring",
    "SED": "Sedalia",
    "SSM": "Selma",
    "SBY": "Shelby",
    "SIM": "Simi Valley",
    "SDL": "Slidell",
    "SOL": "Solana Beach",
    "SOB": "South Bend",
    "SPM": "South Portsmouth–South Shore",
    "SOP": "Southern Pines",
    "SPB": "Spartanburg",
    "SPK": "Spokane",
    "SPI": "Springfield",
    "SPG": "Springfield",
    "SAB": "St. Albans",
    "SCA": "St. Catharines",
    "SCD": "St. Cloud",
    "SJM": "St. Joseph–Benton Harbor",
    "SLQ": "Saint-Lambert",
    "STL": "St. Louis Gateway",
    "MSP": "St. Paul - Minneapolis Union",
    "STM": "Stamford",
    "STN": "Stanley",
    "STW": "Stanwood",
    "SPL": "Staples",
    "STA": "Staunton",
    "SKT": "Stockton Downtown",
    "SKN": "Stockton San Joaquin Street",
    "SVT": "Sturtevant",
    "SUI": "Suisun–Fairfield",
    "SMT": "Summit",
    "SYR": "Syracuse",
    "TAC": "Tacoma Dome",
    "TPA": "Tampa",
    "TAY": "Taylor",
    "TPL": "Temple",
    "TXA": "Texarkana",
    "THN": "Thurmond",
    "FTC": "Ticonderoga",
    "TCA": "Toccoa",
    "TOL": "Toledo",
    "TOH": "Tomah",
    "TOP": "Topeka",
    "TWO": "Toronto Union",
    "TRE": "Trenton",
    "TRI": "Trinidad",
    "TRM": "Troy",
    "TRU": "Truckee",
    "TUS": "Tucson",
    "TUK": "Tukwila",
    "TRK": "Turlock–Denair",
    "TCL": "Tuscaloosa",
    "TYR": "Tyrone",
    "UCA": "Utica",
    "VNC": "Van Nuys",
    "VAC": "Vancouver Pacific Central",
    "VAN": "Vancouver",
    "VEC": "Ventura",
    "VRV": "Victorville",
    "WFD": "Wallingford",
    "WNR": "Walnut Ridge",
    "WAR": "Warrensburg",
    "WAC": "Wasco",
    "WAS": "Washington Union",
    "WAH": "Washington",
    "WAB": "Waterbury–Stowe",
    "WTI": "Waterloo",
    "WEM": "Wells",
    "WEN": "Wenatchee",
    "WGL": "West Glacier",
    "WPB": "West Palm Beach",
    "WLY": "Westerly",
    "WSP": "Westport",
    "RTE": "Westwood–Route 128",
    "WRJ": "White River Junction",
    "WSS": "White Sulphur Springs",
    "WFH": "Whitefish",
    "WHL": "Whitehall",
    "WBG": "Williamsburg",
    "WTN": "Williston",
    "WIL": "Wilmington",
    "WLN": "Wilson",
    "WND": "Windsor",
    "WNM": "Windsor–Mt. Ascutney",
    "WNL": "Windsor Locks",
    "WNN": "Winnemucca",
    "WIN": "Winona",
    "WLO": "Winslow",
    "WTH": "Winter Haven",
    "WPR": "Winter Park Resort",
    "WPK": "Winter Park",
    "WDL": "Wisconsin Dells",
    "WIH": "Wishram",
    "WOB": "Woburn–Anderson",
    "WPT": "Wolf Point",
    "WDB": "Woodbridge",
    "WOR": "Worcester",
    "YAZ": "Yazoo City",
    "YEM": "Yemassee",
    "YNY": "Yonkers",
    "YUM": "Yuma",
    "ATR": "Atmore",
    "BAS": "Bay St. Louis",
    "BIX": "Biloxi",
    "CIP": "Chipley",
    "CSV": "Crestview",
    "GUF": "Gulfport",
    "LEC": "Lake City",
    "MDO": "Madison",
    "MOE": "Mobile",
    "PAG": "Pascagoula",
    "PNS": "Pensacola",
    "TLH": "Tallahassee"
}

const shuffle = ((array) => {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {

        console.log(currentIndex)

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
})

const fs = require('fs');
 
let data = JSON.stringify(shuffle(Object.keys(stations)));
fs.writeFileSync('out.json', data);