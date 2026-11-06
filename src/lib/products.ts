export type PrinterTech = "flat-head" | "near-edge";
export type InkFamily = "wax" | "wax-resin" | "resin";

export type GradeSlug =
  | "tdw108"
  | "tdw136"
  | "tdm200"
  | "tdm242"
  | "tdm665"
  | "tdm680"
  | "tdm680x"
  | "tdr345"
  | "tdr540";

export type StockSize = {
  part: string;
  widthMm: number;
  lengthM: number;
  winding: "Inside" | "Outside";
  core: string;
  boxQty: number;
};

export type Grade = {
  slug: GradeSlug;
  code: string;
  family: InkFamily;
  tech: PrinterTech;
  colour: string;
  printSpeed: string;
  meltingPoint: string;
  carrier: string;
  thickness: string;
  density: string;
  storageTemp: string;
  storageHumidity: string;
  properties: string[];
  substrates: { label: string; rating: number }[];
  resistance: Record<
    "sensitivity" | "heat" | "abrasion" | "solvent" | "adaptability",
    number
  >;
  sizes?: StockSize[];
};

export const grades: Record<GradeSlug, Grade> = {
  tdw108: {
    slug: "tdw108",
    code: "TDW108",
    family: "wax",
    tech: "flat-head",
    colour: "Black",
    printSpeed: "8 IPS",
    meltingPoint: "65 ± 3°C",
    carrier: "4.5 micron polyester",
    thickness: "9.2 microns ± 0.3 micron",
    density: "2.1",
    storageTemp: "5°C – 35°C (41°F – 95°F)",
    storageHumidity: "20% to 80% relative humidity",
    properties: [
      "Ideal for coated and uncoated papers",
      "Excellent print quality at high speed (up to 8”/second)",
      "Excellent print definition for clean, durable, dense barcodes",
      "Drop-in product to competitor wax ribbons",
      "Very low printhead energy requirements",
      "ISEGA certification for contact with dry, moist and fatty foodstuffs",
      "Available from stock for all popular printers",
    ],
    substrates: [
      { label: "Uncoated paper", rating: 5 },
      { label: "Coated paper", rating: 4 },
      { label: "Film (PET/PP/PE/PVC)", rating: 2 },
    ],
    resistance: {
      sensitivity: 9,
      heat: 3,
      abrasion: 3,
      solvent: 2,
      adaptability: 6,
    },
  },
  tdw136: {
    slug: "tdw136",
    code: "TDW136",
    family: "wax",
    tech: "flat-head",
    colour: "Black",
    printSpeed: "8 IPS",
    meltingPoint: "77 ± 3°C",
    carrier: "4.5 micron polyester",
    thickness: "8.0 microns ± 0.3 micron",
    density: "2.1",
    storageTemp: "5°C – 35°C (41°F – 95°F)",
    storageHumidity: "20% to 80% relative humidity",
    properties: [
      "Prints onto a wide variety of substrates from uncoated papers to mid-range synthetic films",
      "Excellent print quality at up to 8”/second",
      "Dark, dense images for better scan rates, with crisp rotated barcodes",
      "Dissipates static — ideal for RFID labels",
      "Enhanced scratch and smudge resistance",
      "ISEGA certification; withstands freezing temperatures down to -26°C",
      "Very low printhead energy requirements",
    ],
    substrates: [
      { label: "Uncoated paper", rating: 5 },
      { label: "Coated paper", rating: 5 },
      { label: "Film (PET/PP/PE/PVC)", rating: 3 },
    ],
    resistance: {
      sensitivity: 9,
      heat: 4,
      abrasion: 5,
      solvent: 3,
      adaptability: 8,
    },
  },
  tdm200: {
    slug: "tdm200",
    code: "TDM200",
    family: "wax-resin",
    tech: "flat-head",
    colour: "Black",
    printSpeed: "8 IPS",
    meltingPoint: "73 ± 3°C",
    carrier: "4.5 micron polyester",
    thickness: "8.4 microns ± 0.3 micron",
    density: "2.1",
    storageTemp: "5°C – 35°C (41°F – 95°F)",
    storageHumidity: "20% to 80% relative humidity",
    properties: [
      "Ideal for coated paper and tag stocks",
      "Excellent print quality at up to 8”/second",
      "Excellent print definition for clean, durable, dense barcodes",
      "Drop-in product to competitor wax resin ribbons",
      "Developed for pre-printed, spot and flood coated labels",
      "ISEGA certification",
      "Meets ANSI Standard A for scratch and smudge resistance",
    ],
    substrates: [
      { label: "Coated paper", rating: 5 },
      { label: "Synthetic paper / BOPP", rating: 4 },
      { label: "Film (PET/PP/PE/PVC)", rating: 4 },
    ],
    resistance: {
      sensitivity: 8,
      heat: 6,
      abrasion: 7,
      solvent: 5,
      adaptability: 8,
    },
  },
  tdm242: {
    slug: "tdm242",
    code: "TDM242",
    family: "wax-resin",
    tech: "flat-head",
    colour: "Black",
    printSpeed: "8 IPS",
    meltingPoint: "80 ± 3°C",
    carrier: "4.5 micron polyester",
    thickness: "8.2 microns ± 0.3 micron",
    density: "2.1",
    storageTemp: "5°C – 35°C (41°F – 95°F)",
    storageHumidity: "20% to 80% relative humidity",
    properties: [
      "Ideal for a wide range of materials",
      "Excellent print quality at high speed (up to 8”/second)",
      "Highest durability from a flat-head wax resin grade",
      "Proven replacement for Ricoh B110A",
      "Prints at low energy, allowing higher print speeds",
      "ISEGA certification",
    ],
    substrates: [
      { label: "Coated paper", rating: 5 },
      { label: "Film (PET/PP/PE/PVC)", rating: 5 },
      { label: "Synthetic paper", rating: 4 },
    ],
    resistance: {
      sensitivity: 8,
      heat: 7,
      abrasion: 8,
      solvent: 6,
      adaptability: 9,
    },
  },
  tdm665: {
    slug: "tdm665",
    code: "TDM665",
    family: "wax-resin",
    tech: "near-edge",
    colour: "Black",
    printSpeed: "16 IPS",
    meltingPoint: "78 ± 3°C",
    carrier: "4.5 micron polyester",
    thickness: "6.3 microns ± 0.3 micron",
    density: "2.1",
    storageTemp: "5°C – 35°C (41°F – 95°F)",
    storageHumidity: "20% to 80% relative humidity",
    properties: [
      "Ideal for a wide range of materials, including uncoated papers",
      "Excellent print quality at high speed (up to 14–16”/second)",
      "Perfect for tray-end card applications on Toshiba TEC near-edge printers in fresh produce packing",
      "Drop-in replacement for OEM products from Toshiba TEC, Avery, Markem, Videojet and ICE",
      "ISEGA approval for food packaging applications",
      "High-performance backcoat for printhead protection",
    ],
    substrates: [
      { label: "Coated paper / tag board", rating: 5 },
      { label: "Film (PET/PE/BOPP)", rating: 5 },
      { label: "Synthetic paper", rating: 5 },
    ],
    resistance: {
      sensitivity: 8,
      heat: 6,
      abrasion: 7,
      solvent: 5,
      adaptability: 9,
    },
  },
  tdm680: {
    slug: "tdm680",
    code: "TDM680",
    family: "wax-resin",
    tech: "near-edge",
    colour: "Black",
    printSpeed: "24 IPS",
    meltingPoint: "80 ± 3°C",
    carrier: "4.0 micron polyester",
    thickness: "6.0 microns ± 1.0 micron",
    density: "1.92",
    storageTemp: "5°C – 35°C (41°F – 95°F)",
    storageHumidity: "30% to 85% relative humidity",
    properties: [
      "Ideal for in-line TTO coders and desktop printers used in food packaging",
      "Excellent print quality at very high speed (up to 24”/second)",
      "Prints at a very low temperature with bold, black images",
      "Drop-in replacement for OEM wax resin ribbons",
      "ISEGA certification",
      "Prints on packaging films, coated papers and synthetic films",
    ],
    substrates: [
      { label: "PET / BOPP packaging films", rating: 5 },
      { label: "Coated and uncoated papers", rating: 5 },
      { label: "Synthetic papers", rating: 5 },
    ],
    resistance: {
      sensitivity: 9,
      heat: 6,
      abrasion: 8,
      solvent: 6,
      adaptability: 9,
    },
  },
  tdm680x: {
    slug: "tdm680x",
    code: "TDM680X",
    family: "wax-resin",
    tech: "near-edge",
    colour: "Black",
    printSpeed: "20 IPS",
    meltingPoint: "80 ± 3°C",
    carrier: "4.0 micron ± 1.0 micron polyester",
    thickness: "6.5 microns ± 1.0 micron",
    density: "1.8",
    storageTemp: "5°C – 35°C (41°F – 95°F)",
    storageHumidity: "30% to 85% relative humidity",
    properties: [
      "Same performance as TDM680, coated on thinner film for longer ribbon lengths",
      "Excellent print quality at high speed (up to 20”/second)",
      "High resin content for durable images, including chilled storage",
      "Drop-in replacement for OEM products from Toshiba TEC, Avery, Markem, Videojet and ICE",
      "ISEGA certification",
      "Fewer ribbon changes on high-volume lines",
    ],
    substrates: [
      { label: "PET / BOPP packaging films", rating: 5 },
      { label: "Coated and uncoated papers", rating: 5 },
      { label: "Synthetic papers", rating: 5 },
    ],
    resistance: {
      sensitivity: 9,
      heat: 6,
      abrasion: 8,
      solvent: 6,
      adaptability: 9,
    },
  },
  tdr345: {
    slug: "tdr345",
    code: "TDR345",
    family: "resin",
    tech: "flat-head",
    colour: "Black",
    printSpeed: "6 IPS",
    meltingPoint: "100 ± 3°C",
    carrier: "4.5 micron polyester",
    thickness: "6.5 microns ± 0.3 micron",
    density: "2.01",
    storageTemp: "5°C – 35°C (41°F – 95°F)",
    storageHumidity: "20% to 80% relative humidity",
    properties: [
      "Low printhead energy — an extra advantage for a resin ribbon",
      "Excellent durability for chemical and industrial applications",
      "Extensive abrasion, steam and heat resistance (up to 300°C)",
      "Halogen free",
      "Resistant to a wide range of chemicals and solvents",
      "Print quality at speeds up to 152 mm/sec",
      "UL/CSA approved",
    ],
    substrates: [
      { label: "PET", rating: 5 },
      { label: "Synthetics (polyester, PP, PE, vinyl)", rating: 5 },
      { label: "Coated paper", rating: 3 },
    ],
    resistance: {
      sensitivity: 7,
      heat: 9,
      abrasion: 10,
      solvent: 9,
      adaptability: 8,
    },
    sizes: [
      { part: "TDR345-110100H-IW", widthMm: 110, lengthM: 100, winding: "Inside", core: "13mm ID card core, 2 notches each end", boxQty: 25 },
      { part: "TDR345-055360-IW", widthMm: 55, lengthM: 360, winding: "Inside", core: "25.5mm ID card core", boxQty: 30 },
      { part: "TDR345-110360-IW", widthMm: 110, lengthM: 360, winding: "Inside", core: "25.5mm ID card core", boxQty: 15 },
      { part: "TDR345-110074H-OW", widthMm: 110, lengthM: 74, winding: "Outside", core: "13mm ID card core, 2 notches each end", boxQty: 25 },
      { part: "TDR345-055300-OW", widthMm: 55, lengthM: 300, winding: "Outside", core: "25.5mm ID card core", boxQty: 30 },
      { part: "TDR345-110300-OW", widthMm: 110, lengthM: 300, winding: "Outside", core: "25.5mm ID card core", boxQty: 15 },
      { part: "TDR345-110450-OW", widthMm: 110, lengthM: 450, winding: "Outside", core: "25.5mm ID card core", boxQty: 12 },
      { part: "TDR345-220300-OW", widthMm: 220, lengthM: 300, winding: "Outside", core: "25.5mm ID card core", boxQty: 15 },
    ],
  },
  tdr540: {
    slug: "tdr540",
    code: "TDR540",
    family: "resin",
    tech: "near-edge",
    colour: "Black",
    printSpeed: "12 IPS",
    meltingPoint: "105°C",
    carrier: "4.5 micron polyester",
    thickness: "6.7 microns ± 0.2 micron",
    density: "1.9",
    storageTemp: "5°C – 35°C (41°F – 95°F)",
    storageHumidity: "10% to 85% relative humidity",
    properties: [
      "Ideal for high-speed in-line packaging lines",
      "Excellent print quality at high speed (up to 12”/second)",
      "Print withstands boiling, alcohol, chemicals and extreme storage temperatures",
      "Drop-in product to competitor resin ribbons",
      "ISEGA certification",
      "Anti-static backcoat to protect and extend printhead life",
    ],
    substrates: [
      { label: "Flexible packaging films", rating: 5 },
      { label: "PET / BOPP", rating: 5 },
      { label: "Uncoated and medical papers", rating: 4 },
    ],
    resistance: {
      sensitivity: 7,
      heat: 9,
      abrasion: 9,
      solvent: 9,
      adaptability: 8,
    },
  },
};

export const gradeOrder: GradeSlug[] = [
  "tdw108",
  "tdw136",
  "tdm200",
  "tdm242",
  "tdr345",
  "tdm665",
  "tdm680",
  "tdm680x",
  "tdr540",
];

export const flatHeadGrades: GradeSlug[] = [
  "tdw108",
  "tdw136",
  "tdm200",
  "tdm242",
  "tdr345",
];

export const nearEdgeGrades: GradeSlug[] = [
  "tdm665",
  "tdm680",
  "tdm680x",
  "tdr540",
];

export type ColourRibbon = {
  colour: string;
  ref: string;
  widthMm: number;
  lengthM: number;
};

export const colourTables: Record<string, ColourRibbon[]> = {
  flatHeadWax: [
    { colour: "RED 192C", ref: "T170", widthMm: 110, lengthM: 300 },
    { colour: "BLUE 286C", ref: "T259", widthMm: 110, lengthM: 300 },
    { colour: "GREEN 3405C", ref: "T171", widthMm: 110, lengthM: 300 },
    { colour: "BROWN 4695C", ref: "T172", widthMm: 110, lengthM: 300 },
    { colour: "COOL GREY 9C", ref: "T201", widthMm: 110, lengthM: 300 },
    { colour: "WARM RED C", ref: "T222", widthMm: 110, lengthM: 300 },
    { colour: "WHITE", ref: "T200", widthMm: 110, lengthM: 300 },
  ],
  flatHeadWaxResin: [
    { colour: "RED 199C", ref: "T438", widthMm: 110, lengthM: 300 },
    { colour: "REFLEX BLUE C", ref: "T463", widthMm: 110, lengthM: 300 },
    { colour: "GREEN 356C", ref: "T444", widthMm: 110, lengthM: 300 },
    { colour: "YELLOW 109C", ref: "T432", widthMm: 110, lengthM: 300 },
    { colour: "ORANGE 021", ref: "T373", widthMm: 110, lengthM: 300 },
    { colour: "BORDEAUX 208C", ref: "T371", widthMm: 110, lengthM: 300 },
    { colour: "BROWN 1545C", ref: "T431", widthMm: 110, lengthM: 300 },
    { colour: "VIOLET 2685C", ref: "T465", widthMm: 110, lengthM: 300 },
    { colour: "GOLD 872C", ref: "T426", widthMm: 110, lengthM: 300 },
    { colour: "WHITE", ref: "T372", widthMm: 110, lengthM: 300 },
    { colour: "Metallic Silver", ref: "T481", widthMm: 110, lengthM: 300 },
    { colour: "Metallic Gold", ref: "T482", widthMm: 110, lengthM: 300 },
  ],
  flatHeadResin: [
    { colour: "RED 032C", ref: "T571", widthMm: 110, lengthM: 300 },
    { colour: "BLUE C", ref: "T570", widthMm: 110, lengthM: 300 },
    { colour: "GREEN C", ref: "T572", widthMm: 110, lengthM: 300 },
    { colour: "GREY 423C", ref: "T172", widthMm: 110, lengthM: 300 },
    { colour: "Metallic Silver", ref: "T514", widthMm: 110, lengthM: 300 },
    { colour: "Metallic Gold", ref: "T510", widthMm: 110, lengthM: 300 },
  ],
  flatHeadOutdoorResin: [
    { colour: "RED 032C", ref: "T720", widthMm: 110, lengthM: 300 },
    { colour: "BLUE 286C", ref: "T760", widthMm: 110, lengthM: 300 },
    { colour: "GREEN 356C", ref: "T740", widthMm: 110, lengthM: 300 },
    { colour: "YELLOW 116C", ref: "T722", widthMm: 110, lengthM: 300 },
  ],
  nearEdgeWaxResin: [
    { colour: "RED 185C", ref: "N910", widthMm: 55, lengthM: 700 },
    { colour: "REFLEX BLUE C", ref: "N900", widthMm: 55, lengthM: 700 },
    { colour: "YELLOW 86C", ref: "N904", widthMm: 55, lengthM: 700 },
    { colour: "ORANGE 158C", ref: "N911", widthMm: 55, lengthM: 700 },
    { colour: "BORDEAUX 220C", ref: "N912", widthMm: 55, lengthM: 700 },
    { colour: "VIOLET 259C", ref: "N902", widthMm: 55, lengthM: 700 },
    { colour: "BROWN 1405C", ref: "N916", widthMm: 110, lengthM: 300 },
    { colour: "WHITE", ref: "N930", widthMm: 55, lengthM: 700 },
    { colour: "GOLD 872C", ref: "N427", widthMm: 55, lengthM: 700 },
    { colour: "Metallic Silver", ref: "N415", widthMm: 55, lengthM: 700 },
    { colour: "Metallic Gold", ref: "N416", widthMm: 55, lengthM: 700 },
  ],
  nearEdgeResin: [
    { colour: "RED 032C", ref: "N952", widthMm: 55, lengthM: 700 },
    { colour: "BLUE C", ref: "N951", widthMm: 55, lengthM: 700 },
    { colour: "GREEN C", ref: "N953", widthMm: 55, lengthM: 700 },
    { colour: "COOL GREY", ref: "N956", widthMm: 55, lengthM: 700 },
    { colour: "GOLD 872C", ref: "N950", widthMm: 55, lengthM: 700 },
  ],
};
