export interface Product {
  model: string;
  name: string;
  specs: string;
  image?: string;
}

export interface ProductCategory {
  title: string;
  slug: string;
  iconName: "Sun" | "Lamp" | "Lightbulb" | "Factory" | "Radio" | "Camera" | "Fingerprint" | "Video" | "Home" | "DoorOpen" | "Bell" | "Monitor" | "Code" | "Speaker" | "Network" | "Wrench";
  products: Product[];
}

// Helper function to get product image based on name and specs
const getProductImage = (name: string, specs: string): string => {
  // Smart Motion Sensor Moon Light
  if (name === "Smart Motion Sensor Moon Light") {
    if (specs.includes("10W")) {
      return "/products/Firefly_Gemini Flash_Smart Motion Sensor Moon Light 415356.png";
    }
    return "/products/Firefly_Gemini Flash_Smart Motion Sensor Moon Light 744032.png";
  }
  
  // Smart LED Gate Light
  if (name === "Smart LED Gate Light") {
    if (specs.includes("20W")) {
      return "/products/Firefly_Gemini Flash_Smart LED Gate Light 392200.png";
    }
    return "/products/Firefly_Gemini Flash_Smart LED Gate Light 415356.png";
  }
  
  // Smart LED Flood Light
  if (name === "Smart LED Flood Light") {
    if (specs.includes("50W")) {
      return "/products/Firefly_Gemini Flash_Smart LED Flood Light 392200.png";
    }
    if (specs.includes("100W")) {
      return "/products/Firefly_Gemini Flash_Smart LED Flood Light 715976.png";
    }
    if (specs.includes("150W")) {
      return "/products/Firefly_Gemini Flash_Smart LED Flood Light 793088.png";
    }
    return "/products/Firefly_Gemini Flash_Smart LED Flood Light 827906.png";
  }
  
  // Foot / Step Light
  if (name === "Foot / Step Light") {
    return "/products/Firefly_Gemini Flash_Foot - Step Light 715976.png";
  }
  
  // Smart High Bay
  if (name === "Smart High Bay") {
    if (specs.includes("50W")) {
      return "/products/Firefly_Gemini Flash_High Bay – with Sensor 498427.png";
    }
    if (specs.includes("100W")) {
      return "/products/Firefly_Gemini Flash_High Bay – with Sensor 715976.png";
    }
    if (specs.includes("150W")) {
      return "/products/Firefly_Gemini Flash_High Bay – with Sensor generate another iimages not same 282517.png";
    }
    return "/products/Firefly_Gemini Flash_High Bay – with Sensor generate another iimages not same 729350.png";
  }
  
  if (name === "Sensor Switch") {
    return "/products/Firefly_Gemini Flash_Sensor Switch 282517.png";
  }
  if (name === "Microwave Sensor") {
    return "/products/Firefly_Gemini Flash_Microwave Sensor 282517.png";
  }
  if (name === "LDR Sensor") {
    return "/products/Firefly_Gemini Flash_LDR Sensor 661646.png";
  }
  
  // Tube Light (Plastic)
  if (name === "Tube Light (Plastic)") {
    if (specs.includes("2 Feet") && specs.includes("10W")) {
      return "/products/Firefly_Gemini Flash_Tube Light (Plastic)_2 Feet – 10W – T5 – Box- 20-50 661646.png";
    }
    if (specs.includes("2 Feet") && specs.includes("20W")) {
      return "/products/Firefly_Gemini Flash_Tube Light (Plastic)_2 Feet – 20W – T5-T8 – Box- 20-50 643047.png";
    }
    if (specs.includes("4 Feet") && specs.includes("20W")) {
      return "/products/Firefly_Gemini Flash_Tube Light (Plastic)_4 Feet – 20W – T5 – Box- 20-50 643047.png";
    }
    return "/products/Firefly_Gemini Flash_Tube Light (Plastic)_4 Feet – 40W – T5-T8 – Box- 20-50 643047.png";
  }
  
  // Tube Light (Aluminum)
  if (name === "Tube Light (Aluminum)") {
    if (specs.includes("2 Feet") && specs.includes("10W")) {
      return "/products/Firefly_Gemini Flash_Tube Light (Aluminum)_2 Feet – 10W – T5-T8 – Box- 20-50 643047.png";
    }
    if (specs.includes("2 Feet") && specs.includes("20W")) {
      return "/products/Firefly_Gemini Flash_Tube Light (Aluminum)_2 Feet – 20W – T5-T8 – Box- 20-50 643047.png";
    }
    if (specs.includes("4 Feet") && specs.includes("20W")) {
      return "/products/Firefly_Tube Light (Aluminum)_4 Feet – 20W – T5-T8 – Box- 20-50 643047.png";
    }
    return "/products/Firefly_Gemini Flash_Tube Light (Aluminum)_4 Feet – 40W – T5-T8 – Box- 20-50 643047.png";
  }
  
  // Panel Light (Plastic)
  if (name === "Panel Light (Plastic)") {
    if (specs.includes("12W/15W/20W") || specs.includes("6")) {
      return "/products/Firefly_Gemini Flash_Panel Light (Plastic)_12W-15W-20W – 6- – Round-Square 643047.png";
    }
    if (specs.includes("10W/15W/18W") || specs.includes("5")) {
      return "/products/Firefly_Gemini Flash_Panel Light (Plastic)_10W-15W-18W – 5- – Round-Square 643047.png";
    }
    return "/products/Firefly_Gemini Flash_Panel Light (Plastic)_7W-9W-12W – 4- – Round-Square 643047.png";
  }
  
  // Panel Light (Metal)
  if (name === "Panel Light (Metal)") {
    if (specs.includes("18W/22W") || specs.includes("8")) {
      return "/products/Firefly_Gemini Flash_Panel Light (Metal)_18W-22W – 8- – Round-Square 643047.png";
    }
    if (specs.includes("15W/18W") || specs.includes("7")) {
      return "/products/Firefly_Gemini Flash_Panel Light (Metal)_15W-18W – 7- – Round-Square 643047.png";
    }
    if (specs.includes("12W/15W") || specs.includes("6")) {
      return "/products/Firefly_Gemini Flash_Panel Light (Metal)_12W-15W – 6- – Round-Square 643047.png";
    }
    return "/products/Firefly_Gemini Flash_Panel Light (Metal)_9W-12W – 5- – Round-Square 643047.png";
  }
  
  // Panel Light (Metal on/off)
  if (name === "Panel Light (Metal on/off)") {
    return "/products/Firefly_Gemini Flash_Panel Light (Metal on-off)_7W-9W – 4- – Round-Square 643047.png";
  }
  
  // Panel Light Dimming
  if (name === "Panel Light Dimming") {
    if (specs.includes("36W")) {
      return "/products/Firefly_Gemini Flash_Panel Light Dimming_36W – Size- 2×2 – Concealed 643047.png";
    }
    return "/products/Firefly_Gemini Flash_Panel Light Dimming_50W – Size- 2×2 – Concealed 643047.png";
  }
  
  // Surface Light (Plastic Dim)
  if (name === "Surface Light (Plastic Dim)") {
    return "/products/Firefly_Gemini Flash_Surface Light (Plastic Dim)_12W-15W-20W – 6- – Round-Dim 643047.png";
  }
  
  // Surface Light (Metal)
  if (name === "Surface Light (Metal)") {
    if (specs.includes("18W/22W") || specs.includes("8")) {
      return "/products/Firefly_Gemini Flash_Surface Light (Metal)_18W-22W – 8- – Round-Square 643047.png";
    }
    if (specs.includes("12W/15W") || specs.includes("6")) {
      return "/products/Firefly_Gemini Flash_Surface Light (Metal)_12W-15W – 6- – Round-Square 643047.png";
    }
    return "/products/Firefly_Gemini Flash_Surface Light (Metal)_9W-12W – 5- – Round-Square 643047.png";
  }
  
  // Surface Light (Metal on/off)
  if (name === "Surface Light (Metal on/off)") {
    return "/products/Firefly_Gemini Flash_Surface Light (Metal on-off)_7W-9W – 4- – Round-Square 643047.png";
  }
  
  // Street Light
  if (name === "Street Light") {
    if (specs.includes("24W")) {
      return "/products/Firefly_Gemini Flash_Street Light_24W – 4KV Protection – Pipe ID 45 – Lence 643047.png";
    }
    if (specs.includes("36W")) {
      return "/products/Firefly_Gemini Flash_Street Light_36W – 6KV Protection – Pipe ID 45 – Lence 643047.png";
    }
    if (specs.includes("50W")) {
      return "/products/Firefly_Gemini Flash_Street Light_50W – 6KV Protection – Pipe ID 47 – Lence 643047.png";
    }
    if (specs.includes("72W")) {
      return "/products/Firefly_Gemini Flash_Street Light_72W – 6KV Protection – Pipe ID 47 – Lence 643047.png";
    }
    if (specs.includes("100W")) {
      return "/products/Firefly_Gemini Flash_Street Light_100W – 6KV Protection – Pipe ID 47 – Lence 643047.png";
    }
    if (specs.includes("150W")) {
      return "/products/Firefly_Street Light_150W – 6KV Protection – Pipe ID 65 – Lence 643047.png";
    }
    return "/products/Firefly_Gemini Flash_Street Light_200W – 6KV Protection – Pipe ID 65 – Lence 643047.png";
  }
  
  // Smart COB Light (Std on/off)
  if (name === "Smart COB Light (Std on/off)") {
    return "/products/Firefly_Gemini Flash_Smart COB Light (Std on-off)_7W – Concealed 643047.png";
  }
  
  // Smart COB Light (Std)
  if (name === "Smart COB Light (Std)") {
    if (specs.includes("15W")) {
      return "/products/Firefly_Gemini Flash_Smart COB Light (Std)_15W – Concealed 643047.png";
    }
    if (specs.includes("12W")) {
      return "/products/Firefly_Gemini Flash_Smart COB Light (Std)_12W – Concealed 643047.png";
    }
    return "/products/Firefly_Gemini Flash_Smart COB Light (Std)_9W – Concealed 643047.png";
  }
  
  // Smart COB Light (Delta)
  if (name === "Smart COB Light (Delta)") {
    if (specs.includes("12W")) {
      return "/products/Firefly_Gemini Flash_Smart COB Light (Delta)_12W – Concealed 643047.png";
    }
    return "/products/Firefly_Gemini Flash_Smart COB Light (Delta)_9W – Concealed 643047.png";
  }
  
  // Smart BulkHead Light
  if (name === "Smart BulkHead Light") {
    if (specs.includes("10W")) {
      return "/products/Firefly_Gemini Flash_Smart BulkHead Light_10W – Oblong 643047.png";
    }
    return "/products/Firefly_Gemini Flash_Smart BulkHead Light_20W – Oblong 501634.png";
  }
  
  return "/placeholder.svg";
};

export const productCategories: ProductCategory[] = [
  {
    title: "CCTV & Surveillance Systems (Installation & Maintenance)",
    slug: "cctv-surveillance-systems",
    iconName: "Camera",
    products: [
      { model: "CCTV-001", name: "CCTV Installation Service", specs: "Professional installation & maintenance", image: "/products/CCTV Installation Service.webp" },
      { model: "CCTV-002", name: "HD & 4K IP Cameras", specs: "High-definition surveillance cameras", image: "/products/HD & 4K IP Cameras.webp" },
      { model: "CCTV-003", name: "Night Vision & IR Cameras", specs: "24/7 monitoring capabilities", image: "/products/Night Vision & IR Cameras.webp" },
      { model: "CCTV-004", name: "Cloud & Local Storage", specs: "Secure video storage solutions", image: "/products/Cloud & Local Storage.jpg" },
      { model: "CCTV-005", name: "Mobile App Monitoring", specs: "Remote access & monitoring", image: "/products/Mobile App Monitoring.avif" },
    ],
  },
  {
    title: "Biometric & Access Control Systems",
    slug: "biometric-access-control",
    iconName: "Fingerprint",
    products: [
      { model: "BIO-001", name: "Fingerprint Recognition System", specs: "Advanced biometric access control", image: "/products/Fingerprint Recognition System.avif" },
      { model: "BIO-002", name: "Face Recognition System", specs: "AI-powered face recognition", image: "/products/Face Recognition System.webp" },
      { model: "BIO-003", name: "RFID Card Access", specs: "Card-based access control", image: "/products/RFID Card Access.webp" },
      { model: "BIO-004", name: "Time & Attendance System", specs: "Employee attendance tracking", image: "/products/Time & Attendance System.webp" },
      { model: "BIO-005", name: "Visitor Management System", specs: "Complete visitor tracking", image: "/products/Visitor Management System.avif" },
    ],
  },
  {
    title: "Video Door Phones & Intercom Solutions",
    slug: "video-door-phones-intercom",
    iconName: "Video",
    products: [
      { model: "VDP-001", name: "HD Video Door Phone", specs: "High-definition video display", image: "/products/HD Video Door Phone.jpg" },
      { model: "VDP-002", name: "Two-Way Audio Intercom", specs: "Clear audio communication", image: "/products/Two-Way Audio Intercom.jpg" },
      { model: "VDP-003", name: "Remote Unlock System", specs: "Mobile app controlled access", image: "/products/Remote Unlock System.webp" },
      { model: "VDP-004", name: "Multi-Unit Intercom", specs: "Apartment complex solutions", image: "/products/Multi-Unit Intercom.jpg" },
      { model: "VDP-005", name: "Mobile Integration", specs: "Smartphone app integration", image: "/products/Mobile Integration.jpg" },
    ],
  },
  {
    title: "Smart Home & Office Automation",
    slug: "smart-home-office-automation",
    iconName: "Home",
    products: [
      { model: "AUTO-001", name: "Smart Lighting Control", specs: "Automated lighting systems", image: "/products/Smart Lighting Control.webp" },
      { model: "AUTO-002", name: "AC & Fan Automation", specs: "Climate control automation", image: "/products/AC & Fan Automation.webp" },
      { model: "AUTO-003", name: "Motorized Curtains", specs: "Automated window treatments", image: "/products/Motorized Curtains.jpg" },
      { model: "AUTO-004", name: "Voice Control (Alexa/Google)", specs: "Voice-activated automation", image: "/products/Voice Control (Alexa,Google).avif" },
      { model: "AUTO-005", name: "Scene & Schedule Settings", specs: "Custom automation scenes", image: "/products/Scene & Schedule Settings.avif" },
    ],
  },
  {
    title: "Automatic Sliding & Swing Gates",
    slug: "automatic-sliding-swing-gates",
    iconName: "DoorOpen",
    products: [
      { model: "GATE-001", name: "Sliding Gate System", specs: "Motorized sliding gates", image: "/products/Sliding Gate System.webp" },
      { model: "GATE-002", name: "Swing Gate System", specs: "Automated swing gates", image: "/placeholder.svg" },
      { model: "GATE-003", name: "Remote Control Operation", specs: "Wireless remote control", image: "/placeholder.svg" },
      { model: "GATE-004", name: "Safety Sensors", specs: "Obstacle detection sensors", image: "/placeholder.svg" },
      { model: "GATE-005", name: "Solar Power Options", specs: "Eco-friendly solar gates", image: "/placeholder.svg" },
    ],
  },
  {
    title: "Intrusion Alarm & Security Systems",
    slug: "intrusion-alarm-security",
    iconName: "Bell",
    products: [
      { model: "ALARM-001", name: "Motion Sensors (PIR)", specs: "Passive infrared sensors", image: "/placeholder.svg" },
      { model: "ALARM-002", name: "Door/Window Contacts", specs: "Magnetic contact sensors", image: "/placeholder.svg" },
      { model: "ALARM-003", name: "Glass Break Detectors", specs: "Acoustic glass break sensors", image: "/placeholder.svg" },
      { model: "ALARM-004", name: "Siren & Strobe Alerts", specs: "Audio-visual alarm systems", image: "/placeholder.svg" },
      { model: "ALARM-005", name: "Mobile Notifications", specs: "Real-time alert system", image: "/placeholder.svg" },
    ],
  },
  {
    title: "Computer Hardware Sales & Support",
    slug: "computer-hardware-sales-support",
    iconName: "Monitor",
    products: [
      { model: "HW-001", name: "Desktop Computers", specs: "Business & home desktops", image: "/placeholder.svg" },
      { model: "HW-002", name: "Laptop Computers", specs: "Portable computing solutions", image: "/placeholder.svg" },
      { model: "HW-003", name: "Hardware Repair", specs: "Professional repair services", image: "/placeholder.svg" },
      { model: "HW-004", name: "Component Upgrades", specs: "RAM, SSD, GPU upgrades", image: "/placeholder.svg" },
      { model: "HW-005", name: "IT Support Services", specs: "Technical support & maintenance", image: "/placeholder.svg" },
    ],
  },
  {
    title: "Software Installation & Troubleshooting",
    slug: "software-installation-troubleshooting",
    iconName: "Code",
    products: [
      { model: "SW-001", name: "OS Installation & Setup", specs: "Windows, Linux, macOS", image: "/products/OS Installation & Setup.webp" },
      { model: "SW-002", name: "Application Installation", specs: "Business & productivity software", image: "/products/Application Installation.webp" },
      { model: "SW-003", name: "Software Troubleshooting", specs: "Fix software issues", image: "/products/Software Troubleshooting.jpg" },
      { model: "SW-004", name: "System Optimization", specs: "Performance enhancement", image: "/products/System Optimization.avif" },
      { model: "SW-005", name: "Data Recovery Services", specs: "Recover lost data", image: "/products/Data Recovery Services.webp" },
    ],
  },
  {
    title: "Projectors & Professional Sound Systems",
    slug: "projectors-professional-sound",
    iconName: "Speaker",
    products: [
      { model: "AV-001", name: "HD/4K Projectors", specs: "High-resolution projectors", image: "/products/HD,4K Projectors.jpg" },
      { model: "AV-002", name: "Conference Room Solutions", specs: "Complete AV setup", image: "/products/Conference Room Solutions.webp" },
      { model: "AV-003", name: "PA & Sound Systems", specs: "Professional audio systems", image: "/products/PA & Sound Systems.jpg" },
      { model: "AV-004", name: "Interactive Displays", specs: "Touch-enabled displays", image: "/products/Interactive Displays.avif" },
      { model: "AV-005", name: "Video Conferencing Setup", specs: "Remote meeting solutions", image: "/products/Video Conferencing Setup.avif" },
    ],
  },
  {
    title: "Networking & Structured Cabling",
    slug: "networking-structured-cabling",
    iconName: "Network",
    products: [
      { model: "NET-001", name: "LAN/WAN Setup", specs: "Local & wide area networks", image: "/products/LAN,WAN Setup.avif" },
      { model: "NET-002", name: "Structured Cabling", specs: "Professional cable installation", image: "/products/Structured Cabling.avif" },
      { model: "NET-003", name: "Network Infrastructure Design", specs: "Custom network planning", image: "/products/Network Infrastructure Design.avif" },
      { model: "NET-004", name: "Network Troubleshooting", specs: "Network issue resolution", image: "/products/Network Troubleshooting.avif" },
      { model: "NET-005", name: "Wireless Network Setup", specs: "WiFi & wireless solutions", image: "/products/Wireless Network Setup.jpg" },
    ],
  },
  {
    title: "Annual Maintenance Contracts (AMC)",
    slug: "annual-maintenance-contracts",
    iconName: "Wrench",
    products: [
      { model: "AMC-001", name: "CCTV AMC", specs: "Annual maintenance for CCTV systems", image: "/products/CCTV AMC.jpg" },
      { model: "AMC-002", name: "Access Control AMC", specs: "Biometric system maintenance", image: "/products/Access Control AMC.webp" },
      { model: "AMC-003", name: "Automation AMC", specs: "Smart home/office maintenance", image: "/products/Automation AMC.png" },
      { model: "AMC-004", name: "IT Infrastructure AMC", specs: "Computer & network maintenance", image: "/products/IT Infrastructure AMC.jpg" },
      { model: "AMC-005", name: "Complete System AMC", specs: "All-in-one maintenance package", image: "/products/Complete System AMC.webp" },
    ],
  },
  {
    title: "Smart Motion Sensor Moon Light",
    slug: "smart-motion-sensor-moon-light",
    iconName: "Sun",
    products: [
      { model: "IHT-PML01", name: "Smart Motion Sensor Moon Light", specs: "10W – 6 inches", image: getProductImage("Smart Motion Sensor Moon Light", "10W – 6 inches") },
      { model: "IHT-PML02", name: "Smart Motion Sensor Moon Light", specs: "20W – 8 inches", image: getProductImage("Smart Motion Sensor Moon Light", "20W – 8 inches") },
    ],
  },
  {
    title: "Garden Light – with Sensor",
    slug: "garden-light-with-sensor",
    iconName: "Lamp",
    products: [
      { model: "IHT-PGL01", name: "Smart LED Gate Light", specs: "2\" pipe – 20W – Square", image: getProductImage("Smart LED Gate Light", "2\" pipe – 20W – Square") },
      { model: "IHT-PGL02", name: "Smart LED Gate Light", specs: "2\" pipe – 15W – Square", image: getProductImage("Smart LED Gate Light", "2\" pipe – 15W – Square") },
    ],
  },
  {
    title: "Flood Light – with Sensor",
    slug: "flood-light-with-sensor",
    iconName: "Lightbulb",
    products: [
      { model: "IHT-PFDL01", name: "Smart LED Flood Light", specs: "50W – Square", image: getProductImage("Smart LED Flood Light", "50W – Square") },
      { model: "IHT-PFDL02", name: "Smart LED Flood Light", specs: "100W – Square", image: getProductImage("Smart LED Flood Light", "100W – Square") },
      { model: "IHT-PFDL03", name: "Smart LED Flood Light", specs: "150W – Square", image: getProductImage("Smart LED Flood Light", "150W – Square") },
      { model: "IHT-PFDL04", name: "Smart LED Flood Light", specs: "200W – Square", image: getProductImage("Smart LED Flood Light", "200W – Square") },
    ],
  },
  {
    title: "Foot / Step Lamp – with Sensor",
    slug: "foot-step-lamp-with-sensor",
    iconName: "Lamp",
    products: [
      { model: "IHT-PFL01", name: "Foot / Step Light", specs: "2W – Module: 2 / 3 / 4 M", image: getProductImage("Foot / Step Light", "2W – Module: 2 / 3 / 4 M") },
    ],
  },
  {
    title: "High Bay – with Sensor",
    slug: "high-bay-with-sensor",
    iconName: "Factory",
    products: [
      { model: "IHT-PHL01", name: "Smart High Bay", specs: "50W – Round", image: getProductImage("Smart High Bay", "50W – Round") },
      { model: "IHT-PHL02", name: "Smart High Bay", specs: "100W – Round", image: getProductImage("Smart High Bay", "100W – Round") },
      { model: "IHT-PHL03", name: "Smart High Bay", specs: "150W – Round", image: getProductImage("Smart High Bay", "150W – Round") },
      { model: "IHT-PHL04", name: "Smart High Bay", specs: "200W – Round", image: getProductImage("Smart High Bay", "200W – Round") },
    ],
  },
  {
    title: "Tube Lights – with Sensor",
    slug: "tube-lights-with-sensor",
    iconName: "Lightbulb",
    products: [
      { model: "IHT-PTL01", name: "Tube Light (Plastic)", specs: "2 Feet – 10W – T5 – Box: 20/50", image: getProductImage("Tube Light (Plastic)", "2 Feet – 10W – T5 – Box: 20/50") },
      { model: "IHT-PTL02", name: "Tube Light (Plastic)", specs: "4 Feet – 20W – T5 – Box: 20/50", image: getProductImage("Tube Light (Plastic)", "4 Feet – 20W – T5 – Box: 20/50") },
      { model: "IHT-PTL03", name: "Tube Light (Plastic)", specs: "4 Feet – 40W – T5/T8 – Box: 20/50", image: getProductImage("Tube Light (Plastic)", "4 Feet – 40W – T5/T8 – Box: 20/50") },
      { model: "IHT-PTL04", name: "Tube Light (Plastic)", specs: "2 Feet – 20W – T5/T8 – Box: 20/50", image: getProductImage("Tube Light (Plastic)", "2 Feet – 20W – T5/T8 – Box: 20/50") },
      { model: "IHT-PTL05", name: "Tube Light (Aluminum)", specs: "2 Feet – 10W – T5/T8 – Box: 20/50", image: getProductImage("Tube Light (Aluminum)", "2 Feet – 10W – T5/T8 – Box: 20/50") },
      { model: "IHT-PTL06", name: "Tube Light (Aluminum)", specs: "2 Feet – 20W – T5/T8 – Box: 20/50", image: getProductImage("Tube Light (Aluminum)", "2 Feet – 20W – T5/T8 – Box: 20/50") },
      { model: "IHT-PTL07", name: "Tube Light (Aluminum)", specs: "4 Feet – 20W – T5/T8 – Box: 20/50", image: getProductImage("Tube Light (Aluminum)", "4 Feet – 20W – T5/T8 – Box: 20/50") },
      { model: "IHT-PTL08", name: "Tube Light (Aluminum)", specs: "4 Feet – 40W – T5/T8 – Box: 20/50", image: getProductImage("Tube Light (Aluminum)", "4 Feet – 40W – T5/T8 – Box: 20/50") },
    ],
  },
  {
    title: "Concealed Panel Light – with Sensor",
    slug: "concealed-panel-light-with-sensor",
    iconName: "Sun",
    products: [
      { model: "IHT-PPL01", name: "Panel Light (Plastic)", specs: "12W/15W/20W – 6\" – Round/Square", image: getProductImage("Panel Light (Plastic)", "12W/15W/20W – 6\" – Round/Square") },
      { model: "IHT-PPL02", name: "Panel Light (Plastic)", specs: "10W/15W/18W – 5\" – Round/Square", image: getProductImage("Panel Light (Plastic)", "10W/15W/18W – 5\" – Round/Square") },
      { model: "IHT-PPL03", name: "Panel Light (Plastic)", specs: "7W/9W/12W – 4\" – Round/Square", image: getProductImage("Panel Light (Plastic)", "7W/9W/12W – 4\" – Round/Square") },
      { model: "IHT-PPL04", name: "Panel Light (Metal)", specs: "12W/15W – 6\" – Round/Square", image: getProductImage("Panel Light (Metal)", "12W/15W – 6\" – Round/Square") },
      { model: "IHT-PPL05", name: "Panel Light (Metal)", specs: "15W/18W – 7\" – Round/Square", image: getProductImage("Panel Light (Metal)", "15W/18W – 7\" – Round/Square") },
      { model: "IHT-PPL06", name: "Panel Light (Metal)", specs: "18W/22W – 8\" – Round/Square", image: getProductImage("Panel Light (Metal)", "18W/22W – 8\" – Round/Square") },
      { model: "IHT-PPL07", name: "Panel Light (Metal)", specs: "9W/12W – 5\" – Round/Square", image: getProductImage("Panel Light (Metal)", "9W/12W – 5\" – Round/Square") },
      { model: "IHT-PPL08", name: "Panel Light (Metal on/off)", specs: "7W/9W – 4\" – Round/Square", image: getProductImage("Panel Light (Metal on/off)", "7W/9W – 4\" – Round/Square") },
    ],
  },
  {
    title: "Surface Panel Light – with Sensor",
    slug: "surface-panel-light-with-sensor",
    iconName: "Sun",
    products: [
      { model: "IHT-PSL01", name: "Surface Light (Plastic Dim)", specs: "12W/15W/20W – 6\" – Round-Dim", image: getProductImage("Surface Light (Plastic Dim)", "12W/15W/20W – 6\" – Round-Dim") },
      { model: "IHT-PSL02", name: "Surface Light (Metal)", specs: "12W/15W – 6\" – Round/Square", image: getProductImage("Surface Light (Metal)", "12W/15W – 6\" – Round/Square") },
      { model: "IHT-PSL03", name: "Surface Light (Metal)", specs: "9W/12W – 5\" – Round/Square", image: getProductImage("Surface Light (Metal)", "9W/12W – 5\" – Round/Square") },
      { model: "IHT-PSL04", name: "Surface Light (Metal on/off)", specs: "7W/9W – 4\" – Round/Square", image: getProductImage("Surface Light (Metal on/off)", "7W/9W – 4\" – Round/Square") },
      { model: "IHT-PSL05", name: "Surface Light (Metal)", specs: "18W/22W – 8\" – Round/Square", image: getProductImage("Surface Light (Metal)", "18W/22W – 8\" – Round/Square") },
    ],
  },
  {
    title: "Street Light – with Sensor",
    slug: "street-light-with-sensor",
    iconName: "Lamp",
    products: [
      { model: "IHT-PSTL01", name: "Street Light", specs: "24W – 4KV Protection – Pipe ID 45 – Lence", image: getProductImage("Street Light", "24W – 4KV Protection – Pipe ID 45 – Lence") },
      { model: "IHT-PSTL02", name: "Street Light", specs: "36W – 6KV Protection – Pipe ID 45 – Lence", image: getProductImage("Street Light", "36W – 6KV Protection – Pipe ID 45 – Lence") },
      { model: "IHT-PSTL03", name: "Street Light", specs: "50W – 6KV Protection – Pipe ID 47 – Lence", image: getProductImage("Street Light", "50W – 6KV Protection – Pipe ID 47 – Lence") },
      { model: "IHT-PSTL04", name: "Street Light", specs: "72W – 6KV Protection – Pipe ID 47 – Lence", image: getProductImage("Street Light", "72W – 6KV Protection – Pipe ID 47 – Lence") },
      { model: "IHT-PSTL05", name: "Street Light", specs: "100W – 6KV Protection – Pipe ID 47 – Lence", image: getProductImage("Street Light", "100W – 6KV Protection – Pipe ID 47 – Lence") },
      { model: "IHT-PSTL06", name: "Street Light", specs: "150W – 6KV Protection – Pipe ID 65 – Lence", image: getProductImage("Street Light", "150W – 6KV Protection – Pipe ID 65 – Lence") },
      { model: "IHT-PSTL07", name: "Street Light", specs: "200W – 6KV Protection – Pipe ID 65 – Lence", image: getProductImage("Street Light", "200W – 6KV Protection – Pipe ID 65 – Lence") },
    ],
  },
  {
    title: "2×2 Panel Light – with Sensor",
    slug: "2x2-panel-light-with-sensor",
    iconName: "Sun",
    products: [
      { model: "IHT-2X2PL01", name: "Panel Light Dimming", specs: "36W – Size: 2×2 – Concealed", image: getProductImage("Panel Light Dimming", "36W – Size: 2×2 – Concealed") },
      { model: "IHT-2X2PL02", name: "Panel Light Dimming", specs: "50W – Size: 2×2 – Concealed", image: getProductImage("Panel Light Dimming", "50W – Size: 2×2 – Concealed") },
    ],
  },
  {
    title: "COB Light – with Sensor",
    slug: "cob-light-with-sensor",
    iconName: "Lightbulb",
    products: [
      { model: "IHT-PCL01", name: "Smart COB Light (Std on/off)", specs: "7W – Concealed", image: getProductImage("Smart COB Light (Std on/off)", "7W – Concealed") },
      { model: "IHT-PCL02", name: "Smart COB Light (Std)", specs: "9W – Concealed", image: getProductImage("Smart COB Light (Std)", "9W – Concealed") },
      { model: "IHT-PCL03", name: "Smart COB Light (Std)", specs: "12W – Concealed", image: getProductImage("Smart COB Light (Std)", "12W – Concealed") },
      { model: "IHT-PCL04", name: "Smart COB Light (Std)", specs: "15W – Concealed", image: getProductImage("Smart COB Light (Std)", "15W – Concealed") },
      { model: "IHT-PCL05", name: "Smart COB Light (Delta)", specs: "9W – Concealed", image: getProductImage("Smart COB Light (Delta)", "9W – Concealed") },
      { model: "IHT-PCL06", name: "Smart COB Light (Delta)", specs: "12W – Concealed", image: getProductImage("Smart COB Light (Delta)", "12W – Concealed") },
    ],
  },
  {
    title: "Bulkhead Light – with Sensor",
    slug: "bulkhead-light-with-sensor",
    iconName: "Lightbulb",
    products: [
      { model: "IHT-PBL01", name: "Smart BulkHead Light", specs: "10W – Oblong", image: getProductImage("Smart BulkHead Light", "10W – Oblong") },
      { model: "IHT-PBL02", name: "Smart BulkHead Light", specs: "20W – Oblong", image: getProductImage("Smart BulkHead Light", "20W – Oblong") },
    ],
  },
];

export const whatsappNumber = "919010700204";

export const getWhatsAppLink = (productModel: string, productName: string) => {
  const message = encodeURIComponent(
    `Hi, I'm interested in ${productModel} – ${productName}. Please share more details and pricing.`
  );
  return `https://wa.me/${whatsappNumber}?text=${message}`;
};
