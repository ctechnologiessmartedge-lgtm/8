import { Lightbulb, Radio, Sun, Lamp, Factory } from "lucide-react";

export interface Product {
  model: string;
  name: string;
  specs: string;
}

export interface ProductCategory {
  title: string;
  slug: string;
  icon: React.ElementType;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    title: "Smart Motion Sensor Moon Light",
    slug: "smart-motion-sensor-moon-light",
    icon: Sun,
    products: [
      { model: "IHT-PML01", name: "Smart Motion Sensor Moon Light", specs: "10W – 6 inches" },
      { model: "IHT-PML02", name: "Smart Motion Sensor Moon Light", specs: "20W – 8 inches" },
    ],
  },
  {
    title: "Garden Light – with Sensor",
    slug: "garden-light-with-sensor",
    icon: Lamp,
    products: [
      { model: "IHT-PGL01", name: "Smart LED Gate Light", specs: "2\" pipe – 20W – Square" },
      { model: "IHT-PGL02", name: "Smart LED Gate Light", specs: "2\" pipe – 15W – Square" },
    ],
  },
  {
    title: "Flood Light – with Sensor",
    slug: "flood-light-with-sensor",
    icon: Lightbulb,
    products: [
      { model: "IHT-PFDL01", name: "Smart LED Flood Light", specs: "50W – Square" },
      { model: "IHT-PFDL02", name: "Smart LED Flood Light", specs: "100W – Square" },
      { model: "IHT-PFDL03", name: "Smart LED Flood Light", specs: "150W – Square" },
      { model: "IHT-PFDL04", name: "Smart LED Flood Light", specs: "200W – Square" },
    ],
  },
  {
    title: "Foot / Step Lamp – with Sensor",
    slug: "foot-step-lamp-with-sensor",
    icon: Lamp,
    products: [
      { model: "IHT-PFL01", name: "Foot / Step Light", specs: "2W – Module: 2 / 3 / 4 M" },
    ],
  },
  {
    title: "High Bay – with Sensor",
    slug: "high-bay-with-sensor",
    icon: Factory,
    products: [
      { model: "IHT-PHL01", name: "Smart High Bay", specs: "50W – Round" },
      { model: "IHT-PHL02", name: "Smart High Bay", specs: "100W – Round" },
      { model: "IHT-PHL03", name: "Smart High Bay", specs: "150W – Round" },
      { model: "IHT-PHL04", name: "Smart High Bay", specs: "200W – Round" },
    ],
  },
  {
    title: "Inzaus Motion Sensors",
    slug: "inzaus-motion-sensors",
    icon: Radio,
    products: [
      { model: "S-24", name: "Inzaus Motion Sensor Mini", specs: "PIR – 8m – Surface" },
      { model: "S-24A", name: "Inzaus Motion Sensor Tiny", specs: "PIR – 6m – Ceiling" },
      { model: "S-27 / 33", name: "Inzaus Occupancy Presence Sensor", specs: "6m – Ceiling" },
      { model: "S-29", name: "Sensor Switch", specs: "Microwave – 8m – Any" },
      { model: "S-30", name: "Microwave Sensor", specs: "12m – Surface" },
      { model: "S-31", name: "Microwave Sensor", specs: "12m – Surface" },
      { model: "LDR", name: "LDR Sensor", specs: "Surface" },
      { model: "SS-25", name: "Inzaus Smoke Sensor", specs: "Ceiling" },
    ],
  },
  {
    title: "Tube Lights – with Sensor",
    slug: "tube-lights-with-sensor",
    icon: Lightbulb,
    products: [
      { model: "IHT-PTL01", name: "Tube Light (Plastic)", specs: "2 Feet – 10W – T5 – Box: 20/50" },
      { model: "IHT-PTL02", name: "Tube Light (Plastic)", specs: "4 Feet – 20W – T5 – Box: 20/50" },
      { model: "IHT-PTL03", name: "Tube Light (Plastic)", specs: "4 Feet – 40W – T5/T8 – Box: 20/50" },
      { model: "IHT-PTL04", name: "Tube Light (Plastic)", specs: "2 Feet – 20W – T5/T8 – Box: 20/50" },
      { model: "IHT-PTL05", name: "Tube Light (Aluminum)", specs: "2 Feet – 10W – T5/T8 – Box: 20/50" },
      { model: "IHT-PTL06", name: "Tube Light (Aluminum)", specs: "2 Feet – 20W – T5/T8 – Box: 20/50" },
      { model: "IHT-PTL07", name: "Tube Light (Aluminum)", specs: "4 Feet – 20W – T5/T8 – Box: 20/50" },
      { model: "IHT-PTL08", name: "Tube Light (Aluminum)", specs: "4 Feet – 40W – T5/T8 – Box: 20/50" },
    ],
  },
  {
    title: "Concealed Panel Light – with Sensor",
    slug: "concealed-panel-light-with-sensor",
    icon: Sun,
    products: [
      { model: "IHT-PPL01", name: "Panel Light (Plastic)", specs: "12W/15W/20W – 6\" – Round/Square" },
      { model: "IHT-PPL02", name: "Panel Light (Plastic)", specs: "10W/15W/18W – 5\" – Round/Square" },
      { model: "IHT-PPL03", name: "Panel Light (Plastic)", specs: "7W/9W/12W – 4\" – Round/Square" },
      { model: "IHT-PPL04", name: "Panel Light (Metal)", specs: "12W/15W – 6\" – Round/Square" },
      { model: "IHT-PPL05", name: "Panel Light (Metal)", specs: "15W/18W – 7\" – Round/Square" },
      { model: "IHT-PPL06", name: "Panel Light (Metal)", specs: "18W/22W – 8\" – Round/Square" },
      { model: "IHT-PPL07", name: "Panel Light (Metal)", specs: "9W/12W – 5\" – Round/Square" },
      { model: "IHT-PPL08", name: "Panel Light (Metal on/off)", specs: "7W/9W – 4\" – Round/Square" },
    ],
  },
  {
    title: "Surface Panel Light – with Sensor",
    slug: "surface-panel-light-with-sensor",
    icon: Sun,
    products: [
      { model: "IHT-PSL01", name: "Surface Light (Plastic Dim)", specs: "12W/15W/20W – 6\" – Round-Dim" },
      { model: "IHT-PSL02", name: "Surface Light (Metal)", specs: "12W/15W – 6\" – Round/Square" },
      { model: "IHT-PSL03", name: "Surface Light (Metal)", specs: "9W/12W – 5\" – Round/Square" },
      { model: "IHT-PSL04", name: "Surface Light (Metal on/off)", specs: "7W/9W – 4\" – Round/Square" },
      { model: "IHT-PSL05", name: "Surface Light (Metal)", specs: "18W/22W – 8\" – Round/Square" },
    ],
  },
  {
    title: "Street Light – with Sensor",
    slug: "street-light-with-sensor",
    icon: Lamp,
    products: [
      { model: "IHT-PSTL01", name: "Street Light", specs: "24W – 4KV Protection – Pipe ID 45 – Lence" },
      { model: "IHT-PSTL02", name: "Street Light", specs: "36W – 6KV Protection – Pipe ID 45 – Lence" },
      { model: "IHT-PSTL03", name: "Street Light", specs: "50W – 6KV Protection – Pipe ID 47 – Lence" },
      { model: "IHT-PSTL04", name: "Street Light", specs: "72W – 6KV Protection – Pipe ID 47 – Lence" },
      { model: "IHT-PSTL05", name: "Street Light", specs: "100W – 6KV Protection – Pipe ID 47 – Lence" },
      { model: "IHT-PSTL06", name: "Street Light", specs: "150W – 6KV Protection – Pipe ID 65 – Lence" },
      { model: "IHT-PSTL07", name: "Street Light", specs: "200W – 6KV Protection – Pipe ID 65 – Lence" },
    ],
  },
  {
    title: "2×2 Panel Light – with Sensor",
    slug: "2x2-panel-light-with-sensor",
    icon: Sun,
    products: [
      { model: "IHT-2X2PL01", name: "Panel Light Dimming", specs: "36W – Size: 2×2 – Concealed" },
      { model: "IHT-2X2PL02", name: "Panel Light Dimming", specs: "50W – Size: 2×2 – Concealed" },
    ],
  },
  {
    title: "COB Light – with Sensor",
    slug: "cob-light-with-sensor",
    icon: Lightbulb,
    products: [
      { model: "IHT-PCL01", name: "Smart COB Light (Std on/off)", specs: "7W – Concealed" },
      { model: "IHT-PCL02", name: "Smart COB Light (Std)", specs: "9W – Concealed" },
      { model: "IHT-PCL03", name: "Smart COB Light (Std)", specs: "12W – Concealed" },
      { model: "IHT-PCL04", name: "Smart COB Light (Std)", specs: "15W – Concealed" },
      { model: "IHT-PCL05", name: "Smart COB Light (Delta)", specs: "9W – Concealed" },
      { model: "IHT-PCL06", name: "Smart COB Light (Delta)", specs: "12W – Concealed" },
    ],
  },
  {
    title: "Bulkhead Light – with Sensor",
    slug: "bulkhead-light-with-sensor",
    icon: Lightbulb,
    products: [
      { model: "IHT-PBL01", name: "Smart BulkHead Light", specs: "10W – Oblong" },
      { model: "IHT-PBL02", name: "Smart BulkHead Light", specs: "20W – Oblong" },
    ],
  },
];

export const whatsappNumber = "919876543210";

export const getWhatsAppLink = (productModel: string, productName: string) => {
  const message = encodeURIComponent(
    `Hi, I'm interested in ${productModel} – ${productName}. Please share more details and pricing.`
  );
  return `https://wa.me/${whatsappNumber}?text=${message}`;
};
