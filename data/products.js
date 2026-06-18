// Detailed product pages, keyed by `${brandSlug}/${productSlug}`.
// Rendered at /partners/<brand>/<product> by components/ProductDetail.jsx.

const PLC_IMG = 'https://www.mitsubishielectric.com/fa/products/cnt/plc/img';

export const PRODUCT_PAGES = {
  'mitsubishi/plc': {
    brandSlug: 'mitsubishi',
    slug: 'plc',
    category: 'Programmable Logic Controllers',
    label: 'PLCs, MELSEC Series',
    title: 'MELSEC Programmable',
    titleEm: 'Logic Controllers',
    tagline: 'The MELSEC Series takes control to the next level.',
    intro:
      "Mitsubishi Electric's MELSEC Series offers one of the industry's widest lineups of programmable logic controllers and network systems, engineered for every scale of automation, from compact standalone machines to large, plant-wide control systems. As an authorised channel partner, SSC Control supplies the complete MELSEC PLC range with genuine products, full manufacturer warranty, competitive pricing and expert pre-sales and after-sales technical support.",
    heroImage: `${PLC_IMG}/thumbnail-iqr.jpg`,
    seriesLabel: 'MELSEC Lineup',
    seriesTitle: 'A PLC for Every Scale of Automation',
    series: [
      {
        name: 'MELSEC iQ-R Series',
        tag: 'Flagship / Large-Scale',
        desc: 'The next-generation flagship platform, bringing sequence, motion, safety, process and information control together on a single high-performance base for large and complex systems.',
        features: ['High-speed multi-CPU base', 'Built-in security & CC-Link IE TSN', 'Motion, safety & process integrated'],
        image: `${PLC_IMG}/thumbnail-iqr.jpg`,
      },
      {
        name: 'MELSEC iQ-F Series',
        tag: 'Compact / Next-Gen',
        desc: 'A next-generation compact controller (FX5) packed with built-in functions, positioning, analog, high-speed counters, Ethernet and security, in a small, scalable footprint.',
        features: ['Built-in positioning & analog I/O', 'Integrated Ethernet & security', 'Compact and scalable'],
        image: `${PLC_IMG}/thumbnail-iqf.jpg`,
      },
      {
        name: 'MELSEC-Q Series',
        tag: 'High-Speed Modular',
        desc: 'A high-speed, high-accuracy modular PLC with all-round data processing, proven across demanding mid-to-large applications with an extensive module lineup.',
        features: ['High-speed processing', 'Multi-CPU configuration', 'Rich module ecosystem'],
        image: `${PLC_IMG}/thumbnail-q.jpg`,
      },
      {
        name: 'MELSEC-L Series',
        tag: 'Standard / Rackless',
        desc: 'A useful, handy rackless standard model that realises diverse control in a flexible, space-saving build, with a built-in display and CC-Link.',
        features: ['Rackless, space-saving', 'Built-in display & CC-Link', 'Flexible I/O expansion'],
        image: `${PLC_IMG}/thumbnail-l.jpg`,
      },
      {
        name: 'MELSEC-F (FX) Series',
        tag: 'Micro / Cost-Effective',
        desc: 'A cost-effective compact micro-PLC for machine and standalone control, proven, reliable and quick to deploy across a wide range of I/O.',
        features: ['Compact micro-PLC', 'Wide I/O range', 'Cost-effective & reliable'],
        image: `${PLC_IMG}/thumbnail-f.jpg`,
      },
      {
        name: 'MELSEC-QS / WS Series',
        tag: 'Safety PLC',
        desc: 'Dedicated safety controllers that ensure shop-floor safety with certified functional safety up to SIL3 / PLe and CC-Link IE Safety connectivity.',
        features: ['Certified functional safety', 'SIL3 / PLe', 'CC-Link IE Safety'],
        image: `${PLC_IMG}/thumbnail-qsws.jpg`,
      },
    ],
    highlights: [
      { title: 'Genuine & Warranted', text: 'Authentic Mitsubishi Electric PLCs with full manufacturer warranty.' },
      { title: 'Engineering Support', text: 'Selection, programming guidance and commissioning support from our FA team.' },
      { title: 'Stock & Fast Delivery', text: 'Ready availability from our Ahmedabad and Baroda warehouses across Gujarat.' },
      { title: 'Full Ecosystem', text: 'PLCs, HMIs, servos, inverters and networking, sourced from a single partner.' },
    ],
    ctaTitle: 'Need help selecting the right MELSEC PLC?',
    ctaText: 'Our engineers can help you choose the right series, modules and configuration for your application.',
  },
  'mitsubishi/hmi': {
    brandSlug: 'mitsubishi',
    slug: 'hmi',
    category: 'Human Machine Interfaces',
    label: 'HMIs, GOT Series',
    title: 'GOT Human Machine',
    titleEm: 'Interfaces (HMI)',
    tagline: 'The art of design and manufacturing, brought to your operators.',
    intro:
      "Mitsubishi Electric's GOT (Graphic Operation Terminal) series delivers a comprehensive HMI lineup for every production-floor requirement, from simple, cost-effective panels to high-performance multi-touch terminals with seamless connectivity to PLCs, drives, motion and IT systems. SSC Control supplies the full GOT range with genuine products, full manufacturer warranty, competitive pricing and expert technical support.",
    heroImage: 'https://www.mitsubishielectric.com/fa/products/hmi/got/img/products_thumbnail_got_got2000.jpg',
    seriesLabel: 'GOT Lineup',
    seriesTitle: 'A GOT for Every Application',
    series: [
      {
        name: 'GOT2000 Series',
        tag: 'Flagship HMI',
        desc: 'The flagship GOT family, high-performance graphic operation terminals (GT27, GT25, GT23 and GT21 models) with vivid multi-touch displays, fast response and broad connectivity to PLCs, drives and networks.',
        features: ['GT27 / GT25 / GT23 / GT21 models', 'Multi-touch, high-resolution displays', 'Direct PLC, drive & network connectivity'],
        image: 'https://www.mitsubishielectric.com/fa/products/hmi/got/img/products_thumbnail_got_got2000.jpg',
      },
      {
        name: 'GOT3000 Series',
        tag: 'Established',
        desc: 'The established GOT3000 generation, connecting people, systems and IT infrastructure with refined, proven technology across a wide range of screen sizes.',
        features: ['Wide range of screen sizes', 'Proven, reliable platform', 'Broad device compatibility'],
        image: 'https://www.mitsubishielectric.com/fa/products/hmi/got/img/products_thumbnail_got_got3000.jpg',
      },
      {
        name: 'GOT SIMPLE (GS) Series',
        tag: 'Entry / Simple',
        desc: 'Simple, dependable HMIs that are easy to use yet powerful, ideal for compact machines and cost-sensitive applications without compromising on reliability.',
        features: ['Simple operation, easy setup', 'Powerful performance', 'High reliability, compact body'],
        image: 'https://www.mitsubishielectric.com/fa/products/hmi/got/img/products_thumbnail_got_gotsimple.jpg',
      },
    ],
    highlights: [
      { title: 'Genuine & Warranted', text: 'Authentic Mitsubishi Electric GOT HMIs with full manufacturer warranty.' },
      { title: 'Engineering Support', text: 'Screen design (GT Works3), integration and commissioning support from our FA team.' },
      { title: 'Stock & Fast Delivery', text: 'Ready availability from our Ahmedabad and Baroda warehouses across Gujarat.' },
      { title: 'Full Ecosystem', text: 'HMIs, PLCs, servos, inverters and networking, sourced from a single partner.' },
    ],
    ctaTitle: 'Need help selecting the right GOT HMI?',
    ctaText: 'Our engineers can help you choose the right GOT model, size and configuration for your application.',
  },
  "mitsubishi/servo": {
    "brandSlug": "mitsubishi",
    "slug": "servo",
    "category": "Servo Systems",
    "label": "Servo, MELSERVO Series",
    "title": "MELSERVO",
    "titleEm": "Servo Systems",
    "tagline": "Precision motion, from a single axis to fully synchronised systems.",
    "intro": "Mitsubishi Electric's MELSERVO range delivers high-speed, high-precision servo amplifiers and motors for positioning and synchronised motion across every machine type. SSC Control supplies the full MR lineup with genuine products, full warranty and expert commissioning support.",
    "heroImage": "https://us.mitsubishielectric.com/fa/en/-/media/images/webredesign/products/drv/servo/items/assets/img/mr-j5-main-banner.ashx?h=496&w=880&la=en&hash=380B871D2C4F046C6ED22F53B37AEE36",
    "seriesLabel": "MELSERVO Lineup",
    "seriesTitle": "Servo Amplifiers & Motors",
    "series": [
      {
        "name": "MR-J5 Series",
        "tag": "Latest / Flagship",
        "desc": "The latest MELSERVO generation, with the industry-leading response, vibration suppression and one-touch tuning for the most demanding motion.",
        "features": [
          "Highest-response loop",
          "Advanced vibration control",
          "CC-Link IE TSN ready"
        ],
        "image": "https://us.mitsubishielectric.com/fa/en/-/media/images/webredesign/products/drv/servo/items/assets/img/mr-j5-main-banner.ashx?h=496&w=880&la=en&hash=380B871D2C4F046C6ED22F53B37AEE36"
      },
      {
        "name": "MR-J4 Series",
        "tag": "Established",
        "desc": "The proven, widely deployed servo platform with high performance and a broad amplifier and motor lineup.",
        "features": [
          "Proven, reliable platform",
          "Broad motor range",
          "SSCNET III/H"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/drv/servo/items/assets/img/04lp3j4_s001.jpg"
      },
      {
        "name": "MR-JET Series",
        "tag": "Compact / Economy",
        "desc": "A compact, cost-effective servo for space-saving machines, with quick setup and essential performance.",
        "features": [
          "Compact footprint",
          "Quick setup",
          "Cost-effective"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/drv/servo/items/assets/img/mr_jet_lineup_1.png"
      },
      {
        "name": "MR-JE Series",
        "tag": "General-Purpose",
        "desc": "A general-purpose servo offering dependable performance and easy use for standard positioning applications.",
        "features": [
          "Easy to use",
          "Dependable performance",
          "General-purpose"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/drv/servo/items/assets/img/04lp3je_s001.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine & Warranted",
        "text": "Authentic Mitsubishi Electric products with full manufacturer warranty."
      },
      {
        "title": "Engineering Support",
        "text": "Selection, configuration and commissioning support from our FA team."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Full Ecosystem",
        "text": "PLCs, HMIs, servos, inverters, switchgear and more from a single partner."
      }
    ],
    "ctaTitle": "Need help selecting the right MELSERVO?",
    "ctaText": "Our engineers can size the amplifier, motor and configuration for your motion application."
  },
  "mitsubishi/inverter": {
    "brandSlug": "mitsubishi",
    "slug": "inverter",
    "category": "Inverters",
    "label": "Inverters, FR Series",
    "title": "FREQROL",
    "titleEm": "Inverters (VFD)",
    "tagline": "Energy-saving motor control for fans, pumps and demanding drives.",
    "intro": "Mitsubishi Electric's FREQROL FR series inverters (variable frequency drives) deliver precise motor speed control, energy savings and process control from fractional to high horsepower. SSC Control supplies the complete FR range with genuine products, full warranty and application support.",
    "heroImage": "https://www.mitsubishielectric.com/fa/products/drv/inv/items/fr_a/img/img_mv-1.png",
    "seriesLabel": "FREQROL Lineup",
    "seriesTitle": "An Inverter for Every Application",
    "series": [
      {
        "name": "FR-A800 Series",
        "tag": "High-Performance",
        "desc": "The flagship high-performance vector inverter for the most demanding drive, positioning and torque-control applications.",
        "features": [
          "Real sensorless vector",
          "Position & torque control",
          "Up to high horsepower"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/drv/inv/items/fr_a/img/img_mv-1.png"
      },
      {
        "name": "FR-F800 Series",
        "tag": "Fan & Pump",
        "desc": "Optimised for fans, pumps and HVAC, with advanced energy-saving control and PID functions.",
        "features": [
          "Energy-saving optimised",
          "Built-in PID",
          "Fan / pump focused"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/drv/inv/items/fr_f/img/img_mv-1.png"
      },
      {
        "name": "FR-E800 Series",
        "tag": "Compact High-Function",
        "desc": "A compact inverter packed with functions, including built-in safety, networking and predictive maintenance.",
        "features": [
          "Built-in safety & networking",
          "Predictive maintenance",
          "Compact, high-function"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/drv/inv/items/fr_e/img/img_mv-1.png"
      },
      {
        "name": "FR-D800 Series",
        "tag": "Compact Standard",
        "desc": "A compact, easy-to-use standard inverter for general machine and conveyor control.",
        "features": [
          "Easy setup",
          "Compact standard",
          "Wide capacity range"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/drv/inv/items/fr_d/img/img_mv-1.png"
      },
      {
        "name": "FR-CS80 Series",
        "tag": "Micro / Cost-Effective",
        "desc": "A micro inverter delivering essential speed control at the lowest cost for simple applications.",
        "features": [
          "Micro footprint",
          "Essential control",
          "Most cost-effective"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/drv/inv/items/fr_cs/img/img_mv-1.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine & Warranted",
        "text": "Authentic Mitsubishi Electric products with full manufacturer warranty."
      },
      {
        "title": "Engineering Support",
        "text": "Selection, configuration and commissioning support from our FA team."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Full Ecosystem",
        "text": "PLCs, HMIs, servos, inverters, switchgear and more from a single partner."
      }
    ],
    "ctaTitle": "Need help selecting the right FR inverter?",
    "ctaText": "Our engineers can size the drive, options and braking for your motor and load."
  },
  "mitsubishi/robots": {
    "brandSlug": "mitsubishi",
    "slug": "robots",
    "category": "Industrial Robots",
    "label": "Robots, MELFA Series",
    "title": "MELFA",
    "titleEm": "Industrial Robots",
    "tagline": "Fast, precise robots for assembly, handling and welding.",
    "intro": "Mitsubishi Electric's MELFA industrial robots bring high speed and high precision to assembly, handling, palletising and welding, with tight integration into MELSEC PLCs and the iQ Platform. SSC Control supplies the full MELFA range with genuine products and application support.",
    "heroImage": "https://us.mitsubishielectric.com/fa/en/-/media/images/webredesign/products/rbt/robot/items/vertical/img/vertical-main-banner.ashx?h=496&w=880&la=en&hash=3D68B069CF9C8B0964661F1CF3C1317F",
    "seriesLabel": "MELFA Lineup",
    "seriesTitle": "Robots for Every Cell",
    "series": [
      {
        "name": "RV Series",
        "tag": "Vertical Articulated",
        "desc": "High-speed 6-axis vertical articulated robots for assembly, handling and machine tending across a wide reach and payload range.",
        "features": [
          "6-axis flexibility",
          "High speed & precision",
          "Wide payload range"
        ],
        "image": "https://us.mitsubishielectric.com/fa/en/-/media/images/webredesign/products/rbt/robot/items/vertical/img/vertical-main-banner.ashx?h=496&w=880&la=en&hash=3D68B069CF9C8B0964661F1CF3C1317F"
      },
      {
        "name": "RH Series",
        "tag": "SCARA",
        "desc": "Fast horizontal articulated (SCARA) robots for high-throughput pick-and-place and assembly.",
        "features": [
          "High-throughput SCARA",
          "Fast cycle times",
          "Compact footprint"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/rbt/robot/items/horizontal/img/lp3_rhfr.png"
      },
      {
        "name": "MELFA ASSISTA",
        "tag": "Collaborative",
        "desc": "A collaborative robot (cobot) that works safely alongside people, with easy, code-free setup.",
        "features": [
          "Safe human collaboration",
          "Code-free setup",
          "Flexible redeployment"
        ],
        "image": "https://us.mitsubishielectric.com/fa/en/-/media/images/webredesign/products/rbt/assista/assets/img/assista-collaborative-robot-thumbnail.ashx"
      },
      {
        "name": "CR800 Controller",
        "tag": "Robot Controller",
        "desc": "The high-performance CR800 robot controller, with MELFA Smart Plus intelligence and direct iQ Platform integration.",
        "features": [
          "MELFA Smart Plus",
          "iQ Platform integration",
          "Advanced safety"
        ],
        "image": "https://www.mitsubishielectric.com/fa/specimg/prodimg/ROBOT/MDA501100006/s_cr800d.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine & Warranted",
        "text": "Authentic Mitsubishi Electric products with full manufacturer warranty."
      },
      {
        "title": "Engineering Support",
        "text": "Selection, configuration and commissioning support from our FA team."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Full Ecosystem",
        "text": "PLCs, HMIs, servos, inverters, switchgear and more from a single partner."
      }
    ],
    "ctaTitle": "Looking for the right MELFA robot?",
    "ctaText": "Our engineers can help select the robot, reach, payload and controller for your cell."
  },
  "mitsubishi/motion": {
    "brandSlug": "mitsubishi",
    "slug": "motion",
    "category": "Motion Controllers",
    "label": "Motion, MELSEC Series",
    "title": "Motion",
    "titleEm": "Controllers",
    "tagline": "Synchronised multi-axis motion, integrated with your PLC.",
    "intro": "Mitsubishi Electric's motion controllers deliver synchronised multi-axis control, cam profiles and advanced motion, tightly integrated with MELSEC PLCs and MR servos. SSC Control supplies the full motion lineup with genuine products and engineering support.",
    "heroImage": "https://us.mitsubishielectric.com/fa/en/-/media/images/webredesign/products/cnt/ssc/pmerit/assets/iq-r-motion-controller.ashx?h=372&w=660&la=en&hash=967FA61DE51CE5032D3426510DC080B8",
    "seriesLabel": "Motion Lineup",
    "seriesTitle": "Motion for Every Architecture",
    "series": [
      {
        "name": "MELSEC iQ-R Motion",
        "tag": "Modular Motion",
        "desc": "High-performance motion modules on the iQ-R base, for advanced synchronised and cam control alongside sequence control.",
        "features": [
          "On the iQ-R base",
          "Advanced synchronised motion",
          "High axis count"
        ],
        "image": "https://us.mitsubishielectric.com/fa/en/-/media/images/webredesign/products/cnt/ssc/pmerit/assets/iq-r-motion-module.ashx?h=372&w=660&la=en&hash=AB4BD121795F9790B24CD3BD7E41BD84"
      },
      {
        "name": "Simple Motion",
        "tag": "Positioning",
        "desc": "Simple Motion modules that bring positioning, synchronous and cam control to MELSEC PLCs without a separate controller.",
        "features": [
          "Easy positioning",
          "Synchronous & cam control",
          "PLC-integrated"
        ],
        "image": "https://us.mitsubishielectric.com/fa/en/-/media/images/webredesign/products/cnt/ssc/pmerit/assets/iq-r-simple-motion.ashx?h=372&w=660&la=en&hash=BD4CC1092D14150D9693653C0FA4D2F3"
      },
      {
        "name": "Standalone Motion",
        "tag": "Standalone CPU",
        "desc": "A standalone motion CPU for dedicated, high-performance multi-axis motion control.",
        "features": [
          "Dedicated motion CPU",
          "High-performance",
          "Multi-axis synchronised"
        ],
        "image": "https://us.mitsubishielectric.com/fa/en/-/media/images/webredesign/products/cnt/ssc/pmerit/assets/iq-r-motion-controller.ashx?h=372&w=660&la=en&hash=967FA61DE51CE5032D3426510DC080B8"
      }
    ],
    "highlights": [
      {
        "title": "Genuine & Warranted",
        "text": "Authentic Mitsubishi Electric products with full manufacturer warranty."
      },
      {
        "title": "Engineering Support",
        "text": "Selection, configuration and commissioning support from our FA team."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Full Ecosystem",
        "text": "PLCs, HMIs, servos, inverters, switchgear and more from a single partner."
      }
    ],
    "ctaTitle": "Need help with motion control?",
    "ctaText": "Our engineers can architect the right motion controller and servo combination for your machine."
  },
  "mitsubishi/modular-io": {
    "brandSlug": "mitsubishi",
    "slug": "modular-io",
    "category": "Modular I/O Modules",
    "label": "Modular I/O, MELSEC Series",
    "title": "MELSEC",
    "titleEm": "Modular I/O",
    "tagline": "Flexible, high-density I/O for any control architecture.",
    "intro": "Mitsubishi Electric's MELSEC modular I/O extends iQ-R and iQ-F PLCs with a comprehensive range of digital, analog, temperature, counter and network modules. SSC Control supplies the full I/O lineup with genuine products and support.",
    "heroImage": "https://www.mitsubishielectric.com/fa/products/cnt/plcr/pmerit/io/img/pho_io01.jpg",
    "seriesLabel": "MELSEC I/O Lineup",
    "seriesTitle": "Modules for Every Signal",
    "series": [
      {
        "name": "Digital I/O",
        "tag": "Input / Output",
        "desc": "Digital input and output modules (sink/source, relay and transistor) in a wide range of points and densities.",
        "features": [
          "Sink / source / relay",
          "High-density options",
          "iQ-R & iQ-F"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/cnt/plcr/pmerit/io/img/pho_io01.jpg"
      },
      {
        "name": "Analog I/O",
        "tag": "A/D & D/A",
        "desc": "Analog input and output modules for voltage and current signals, with high resolution and fast conversion.",
        "features": [
          "Voltage & current",
          "High resolution",
          "Fast conversion"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/cnt/plcr/pmerit/analog/img/pho_analog01.jpg"
      },
      {
        "name": "Temperature Control",
        "tag": "RTD / Thermocouple",
        "desc": "Temperature input and control modules for RTD and thermocouple sensors, with built-in PID control.",
        "features": [
          "RTD & thermocouple",
          "Built-in PID",
          "Multi-channel"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/cnt/plcr/pmerit/temp/img/pho_temp01.jpg"
      },
      {
        "name": "Network Modules",
        "tag": "CC-Link IE / Ethernet",
        "desc": "Network and communication modules for CC-Link IE TSN, Ethernet and serial connectivity across the plant.",
        "features": [
          "CC-Link IE TSN",
          "Ethernet & serial",
          "Open connectivity"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/cnt/plcr/pmerit/network/img/pho_tsn01.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine & Warranted",
        "text": "Authentic Mitsubishi Electric products with full manufacturer warranty."
      },
      {
        "title": "Engineering Support",
        "text": "Selection, configuration and commissioning support from our FA team."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Full Ecosystem",
        "text": "PLCs, HMIs, servos, inverters, switchgear and more from a single partner."
      }
    ],
    "ctaTitle": "Need the right MELSEC I/O?",
    "ctaText": "Our engineers can specify the I/O modules and configuration for your control system."
  },
  "mitsubishi/goc": {
    "brandSlug": "mitsubishi",
    "slug": "goc",
    "category": "GOC Controller",
    "label": "HMI-PLC Combo, GOC Series",
    "title": "GOC Controller",
    "titleEm": "HMI + PLC",
    "tagline": "Display and logic in one compact, all-in-one unit.",
    "intro": "Mitsubishi Electric's GOC series combines an HMI display and PLC logic in a single compact controller, ideal for cost-sensitive machines that need both visualisation and control. SSC Control supplies the GOC range with genuine products and support.",
    "heroImage": "https://mitsubishielectric.in/fa/img/goc.png",
    "seriesLabel": "GOC Lineup",
    "seriesTitle": "All-in-One Controllers",
    "series": [
      {
        "name": "GOC35",
        "tag": "Monochrome / Compact",
        "desc": "An all-in-one controller with a monochrome graphic display, function keys and built-in I/O, for compact machine control.",
        "features": [
          "Display + logic + I/O",
          "Function keypad",
          "Compact & economical"
        ],
        "image": "https://mitsubishielectric.in/fa/img/goc.png"
      },
      {
        "name": "GOC43",
        "tag": "Colour Touch",
        "desc": "An all-in-one controller with a 4.3\" colour touchscreen and hardware keys, for richer operator interfaces in a single unit.",
        "features": [
          "4.3\" colour touch",
          "Hardware function keys",
          "HMI + PLC in one"
        ],
        "image": "https://in.mitsubishielectric.com/en/feature/partneringindia/images/stories/goc-content4.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine & Warranted",
        "text": "Authentic Mitsubishi Electric products with full manufacturer warranty."
      },
      {
        "title": "Engineering Support",
        "text": "Selection, configuration and commissioning support from our FA team."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Full Ecosystem",
        "text": "PLCs, HMIs, servos, inverters, switchgear and more from a single partner."
      }
    ],
    "ctaTitle": "Need an all-in-one GOC controller?",
    "ctaText": "Our engineers can help choose the right GOC model for your machine."
  },
  "mitsubishi/acb": {
    "brandSlug": "mitsubishi",
    "slug": "acb",
    "category": "Air Circuit Breakers (ACB)",
    "label": "ACB, AE-SW Series",
    "title": "Air Circuit",
    "titleEm": "Breakers (ACB)",
    "tagline": "Main incomer and distribution protection up to 6300 A.",
    "intro": "Mitsubishi Electric's AE-SW (Super AE) air circuit breakers provide reliable main-incomer and distribution protection up to 6300 A, with advanced electronic trip and metering. SSC Control supplies the full ACB range with genuine products and support.",
    "heroImage": "https://www.mitsubishielectric.com/fa/products/lvd/lvcb/img/acb.jpg",
    "seriesLabel": "ACB Lineup",
    "seriesTitle": "Air Circuit Breakers",
    "series": [
      {
        "name": "AE-SW (Super AE) Series",
        "tag": "Up to 6300 A",
        "desc": "Air circuit breakers with electronic trip units, accurate metering and communication for main and distribution protection.",
        "features": [
          "Electronic trip & metering",
          "Up to 6300 A",
          "Draw-out & fixed types"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/lvd/lvcb/img/acb.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine & Warranted",
        "text": "Authentic Mitsubishi Electric products with full manufacturer warranty."
      },
      {
        "title": "Engineering Support",
        "text": "Selection, configuration and commissioning support from our FA team."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Full Ecosystem",
        "text": "PLCs, HMIs, servos, inverters, switchgear and more from a single partner."
      }
    ],
    "ctaTitle": "Need an ACB for your panel?",
    "ctaText": "Our engineers can specify the right AE-SW frame, rating and trip for your switchboard."
  },
  "mitsubishi/mccb": {
    "brandSlug": "mitsubishi",
    "slug": "mccb",
    "category": "Moulded Case Circuit Breakers (MCCB)",
    "label": "MCCB, NF Series",
    "title": "Moulded Case",
    "titleEm": "Breakers (MCCB)",
    "tagline": "Feeder and motor protection with high breaking capacity.",
    "intro": "Mitsubishi Electric's NF series no-fuse / moulded case circuit breakers (MCCB) deliver feeder and motor-circuit protection across a wide current range, in both fixed thermal-magnetic and adjustable electronic trip types. SSC Control supplies the full NF range with genuine products and support.",
    "heroImage": "https://www.mitsubishielectric.com/fa/products/lvd/lvcb/img/mccb.jpg",
    "seriesLabel": "NF Lineup",
    "seriesTitle": "Fixed & Adjustable MCCBs",
    "series": [
      {
        "name": "NF-CV Series",
        "tag": "Fixed / Economy",
        "desc": "Economical fixed thermal-magnetic MCCBs for general feeder and circuit protection.",
        "features": [
          "Fixed thermal-magnetic",
          "Economical",
          "General feeder protection"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/lvd/lvcb/img/mccb.jpg"
      },
      {
        "name": "NF-SV Series",
        "tag": "Fixed / Standard",
        "desc": "Standard fixed-type MCCBs with higher breaking capacity for demanding distribution circuits.",
        "features": [
          "Higher breaking capacity",
          "Fixed type",
          "Wide current range"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/lvd/lvcb/img/mccb.jpg"
      },
      {
        "name": "NF-SEW Series",
        "tag": "Adjustable / Electronic",
        "desc": "Electronic-trip MCCBs with adjustable settings and metering for precise, flexible protection.",
        "features": [
          "Adjustable electronic trip",
          "Metering & communication",
          "Precise coordination"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/lvd/lvcb/img/mccb.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine & Warranted",
        "text": "Authentic Mitsubishi Electric products with full manufacturer warranty."
      },
      {
        "title": "Engineering Support",
        "text": "Selection, configuration and commissioning support from our FA team."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Full Ecosystem",
        "text": "PLCs, HMIs, servos, inverters, switchgear and more from a single partner."
      }
    ],
    "ctaTitle": "Need the right NF MCCB?",
    "ctaText": "Our engineers can select the fixed or adjustable NF breaker, rating and breaking capacity for your panel."
  },
  "mitsubishi/mcb": {
    "brandSlug": "mitsubishi",
    "slug": "mcb",
    "category": "Miniature Circuit Breakers (MCB)",
    "label": "MCB, BH-D Series",
    "title": "Miniature Circuit",
    "titleEm": "Breakers (MCB)",
    "tagline": "Final-circuit protection in compact DIN-rail devices.",
    "intro": "Mitsubishi Electric's BH-D series miniature circuit breakers (MCB) protect final distribution and control circuits, available across B, C and D tripping characteristics to suit different load types. SSC Control supplies the full MCB range with genuine products and support.",
    "heroImage": "https://www.mitsubishielectric.com/fa/products/lvd/lvcb/img/mcb.jpg",
    "seriesLabel": "BH-D Lineup",
    "seriesTitle": "MCBs by Tripping Curve",
    "series": [
      {
        "name": "B Type",
        "tag": "B Curve",
        "desc": "B-curve MCBs (3,5x In) for resistive and long cable-run circuits such as lighting and heating.",
        "features": [
          "B curve (3,5x In)",
          "Lighting & heating",
          "DIN-rail mount"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/lvd/lvcb/img/mcb.jpg"
      },
      {
        "name": "C Type",
        "tag": "C Curve",
        "desc": "C-curve MCBs (5,10x In) for general-purpose circuits with moderate inrush, the most common choice.",
        "features": [
          "C curve (5,10x In)",
          "General-purpose",
          "Most common"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/lvd/lvcb/img/mcb.jpg"
      },
      {
        "name": "D Type",
        "tag": "D Curve",
        "desc": "D-curve MCBs (10,20x In) for high-inrush loads such as motors and transformers.",
        "features": [
          "D curve (10,20x In)",
          "High-inrush loads",
          "Motors & transformers"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/lvd/lvcb/img/mcb.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine & Warranted",
        "text": "Authentic Mitsubishi Electric products with full manufacturer warranty."
      },
      {
        "title": "Engineering Support",
        "text": "Selection, configuration and commissioning support from our FA team."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Full Ecosystem",
        "text": "PLCs, HMIs, servos, inverters, switchgear and more from a single partner."
      }
    ],
    "ctaTitle": "Need the right MCB?",
    "ctaText": "Our engineers can select the B, C or D curve and rating for your final circuits."
  },
  "mitsubishi/rccb": {
    "brandSlug": "mitsubishi",
    "slug": "rccb",
    "category": "Residual Current Circuit Breakers",
    "label": "RCCB / ELCB, NV Series",
    "title": "Residual Current",
    "titleEm": "Breakers (RCCB)",
    "tagline": "Earth-leakage protection for people and equipment.",
    "intro": "Mitsubishi Electric's NV series earth-leakage circuit breakers (RCCB / ELCB) protect personnel and equipment against earth faults and leakage currents, with selectable sensitivity. SSC Control supplies the full NV range with genuine products and support.",
    "heroImage": "https://www.mitsubishielectric.com/fa/products/lvd/lvcb/img/elcb.jpg",
    "seriesLabel": "NV Lineup",
    "seriesTitle": "Earth-Leakage Breakers",
    "series": [
      {
        "name": "NV-C / NV-S Series",
        "tag": "Earth Leakage",
        "desc": "NV series ELCB / RCCB with combined overcurrent and earth-leakage protection and selectable trip sensitivity.",
        "features": [
          "Overcurrent + earth leakage",
          "30 / 100 / 500 mA",
          "Test button"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/lvd/lvcb/img/elcb.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine & Warranted",
        "text": "Authentic Mitsubishi Electric products with full manufacturer warranty."
      },
      {
        "title": "Engineering Support",
        "text": "Selection, configuration and commissioning support from our FA team."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Full Ecosystem",
        "text": "PLCs, HMIs, servos, inverters, switchgear and more from a single partner."
      }
    ],
    "ctaTitle": "Need earth-leakage protection?",
    "ctaText": "Our engineers can specify the right NV breaker, rating and sensitivity for your installation."
  },
  "mitsubishi/contactors": {
    "brandSlug": "mitsubishi",
    "slug": "contactors",
    "category": "Magnetic Contactors & Starters",
    "label": "Contactors, S Series",
    "title": "Magnetic Contactors",
    "titleEm": "& Starters",
    "tagline": "Reliable motor switching and starting.",
    "intro": "Mitsubishi Electric's S-T and S-N series magnetic contactors and starters provide reliable switching and control for motors and loads across a wide current range. SSC Control supplies the full contactor and starter range with genuine products and support.",
    "heroImage": "https://www.mitsubishielectric.com/fa/products/lvd/lvsw/img/3_Contactors.jpg",
    "seriesLabel": "Contactor Lineup",
    "seriesTitle": "Contactors & Starters",
    "series": [
      {
        "name": "S-T Series",
        "tag": "Compact",
        "desc": "Compact magnetic contactors for general motor and load switching, with a wide accessory range.",
        "features": [
          "Compact design",
          "Wide accessory range",
          "General switching"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/lvd/lvsw/img/3_Contactors.jpg"
      },
      {
        "name": "S-N Series",
        "tag": "Standard / Larger",
        "desc": "Standard S-N series contactors for higher currents and heavy-duty motor switching.",
        "features": [
          "Higher current ratings",
          "Heavy-duty switching",
          "Proven reliability"
        ],
        "image": "https://cdn.kyklo.co/assets/W1siZiIsIjIwMjYvMDUvMjgvMDkvNTAvMTUvMTM4OWRmYmQtYjVmMS00Y2Y2LWI2ZTMtMzA3MGQ3NDZlNGNiL1NOMTUwLmpwZyJdXQ?sha=acfcd0ea18b512bc"
      }
    ],
    "highlights": [
      {
        "title": "Genuine & Warranted",
        "text": "Authentic Mitsubishi Electric products with full manufacturer warranty."
      },
      {
        "title": "Engineering Support",
        "text": "Selection, configuration and commissioning support from our FA team."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Full Ecosystem",
        "text": "PLCs, HMIs, servos, inverters, switchgear and more from a single partner."
      }
    ],
    "ctaTitle": "Need the right contactor or starter?",
    "ctaText": "Our engineers can select the S-T or S-N contactor and overload for your motor."
  },
  "mitsubishi/overload-relay": {
    "brandSlug": "mitsubishi",
    "slug": "overload-relay",
    "category": "Overload Relays",
    "label": "Overload Relays, TH-T Series",
    "title": "Thermal Overload",
    "titleEm": "Relays",
    "tagline": "Dependable motor overload protection.",
    "intro": "Mitsubishi Electric's TH-T series thermal overload relays provide reliable motor overload protection and combine directly with S-T and S-N magnetic contactors to form complete starters. SSC Control supplies the full overload-relay range with genuine products and support.",
    "heroImage": "https://www.mitsubishielectric.com/fa/products/lvd/lvsw/items/thr/img/th-t25kp.png",
    "seriesLabel": "TH-T Lineup",
    "seriesTitle": "Thermal Overload Relays",
    "series": [
      {
        "name": "TH-T Series",
        "tag": "Motor Protection",
        "desc": "Thermal overload relays with adjustable trip current, mounting directly to matching S-T and S-N contactors.",
        "features": [
          "Adjustable trip current",
          "Direct contactor mount",
          "Reliable motor protection"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/lvd/lvsw/items/thr/img/th-t25kp.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine & Warranted",
        "text": "Authentic Mitsubishi Electric products with full manufacturer warranty."
      },
      {
        "title": "Engineering Support",
        "text": "Selection, configuration and commissioning support from our FA team."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Full Ecosystem",
        "text": "PLCs, HMIs, servos, inverters, switchgear and more from a single partner."
      }
    ],
    "ctaTitle": "Need motor overload protection?",
    "ctaText": "Our engineers can match the right TH-T relay to your contactor and motor."
  },
  "mitsubishi/energy-meters": {
    "brandSlug": "mitsubishi",
    "slug": "energy-meters",
    "category": "Energy Meters & Measuring Units",
    "label": "Energy Measuring, EcoMonitor",
    "title": "Energy Meters",
    "titleEm": "& Measuring Units",
    "tagline": "Power, energy and demand visibility for smarter operations.",
    "intro": "Mitsubishi Electric's EcoMonitor (EMU4) energy measuring units deliver accurate power, energy and demand monitoring to enable energy management and ISO 50001 visibility. SSC Control supplies the full EcoMonitor range with genuine products and support.",
    "heroImage": "https://www.mitsubishielectric.com/fa/products/pmng/ems/items/ecomonitor/img/ecomonitor01.jpg",
    "seriesLabel": "EcoMonitor Lineup",
    "seriesTitle": "Energy Measuring Units",
    "series": [
      {
        "name": "EcoMonitorPlus",
        "tag": "Advanced",
        "desc": "Advanced multi-circuit energy measuring units for detailed power, energy, demand and power-quality monitoring.",
        "features": [
          "Multi-circuit measurement",
          "Power quality",
          "Communication ready"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/pmng/ems/items/ecomonitor/img/ecomonitor01.jpg"
      },
      {
        "name": "EcoMonitorLight",
        "tag": "Compact",
        "desc": "Compact, cost-effective energy measuring units for essential power and energy monitoring per circuit.",
        "features": [
          "Compact & economical",
          "Essential measurement",
          "DIN-rail mount"
        ],
        "image": "https://www.mitsubishielectric.com/fa/products/pmng/ems/items/ecomonitor/img/ecomonitor02.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine & Warranted",
        "text": "Authentic Mitsubishi Electric products with full manufacturer warranty."
      },
      {
        "title": "Engineering Support",
        "text": "Selection, configuration and commissioning support from our FA team."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Full Ecosystem",
        "text": "PLCs, HMIs, servos, inverters, switchgear and more from a single partner."
      }
    ],
    "ctaTitle": "Need energy monitoring?",
    "ctaText": "Our engineers can specify the right EcoMonitor units and metering for your facility."
  },
  "hicool/compact-fans": {
    "brandSlug": "hicool",
    "slug": "compact-fans",
    "category": "Compact Axial Fans",
    "label": "Compact AC Axial Fans",
    "title": "Compact AC",
    "titleEm": "Axial Fans",
    "tagline": "Tight-space cooling for panels, electronics and instrumentation.",
    "intro": "Hicool's compact AC axial fans deliver reliable airflow in the smallest enclosures across the 8A, 9A, 12A, 17A and 22A frames, with plastic or metal blades and ball or sleeve bearings, certified to UL, CE, RoHS, CSA and IEC. As Hicool's No.1 channel partner since 2005, SSC Control supplies the full range with genuine products, ready stock and airflow sizing support.",
    "heroImage": "https://www.hicoolfans.com/images/pic-compact-fans-ac.png",
    "seriesLabel": "Compact Lineup",
    "seriesTitle": "Compact Fans by Series",
    "series": [
      {
        "name": "8A Series",
        "tag": "80 x 80 x 25 mm",
        "desc": "80mm AC axial fan for the tightest instrumentation and electronics enclosures.",
        "features": [
          "Voltage: 115 / 230V AC",
          "Frequency: 50 / 60 Hz",
          "Airflow: 21-25 CFM",
          "Speed: 2300-2800 RPM",
          "Power: 12-14 W",
          "Noise: 29-34 dBA",
          "Ball / Sleeve bearing"
        ],
        "image": "https://www.hicoolfans.com/products/images/pic-compact-fans-12a-ac.png"
      },
      {
        "name": "9A Series",
        "tag": "92 x 92 x 25 mm",
        "desc": "92mm AC axial fan balancing airflow and footprint for control cabinets.",
        "features": [
          "Voltage: 115 / 230V AC",
          "Frequency: 50 / 60 Hz",
          "Airflow: 36-42 CFM",
          "Speed: 2300-2800 RPM",
          "Power: 12-14 W",
          "Noise: 36-38 dBA",
          "Ball / Sleeve bearing"
        ],
        "image": "https://www.hicoolfans.com/products/images/pic-compact-fans-12a-ac.png"
      },
      {
        "name": "12A Series",
        "tag": "120 x 120 x 38 mm",
        "desc": "120mm AC axial fan for control panels and electronics enclosures.",
        "features": [
          "Voltage: 24 / 115 / 230 / 415V AC",
          "Frequency: 50 / 60 Hz",
          "Airflow: 95-102 CFM (up to 243)",
          "Speed: 2600-2800 RPM",
          "Power: 17-20 W",
          "Noise: 43-46 dBA",
          "Ball / Sleeve bearing"
        ],
        "image": "https://www.hicoolfans.com/products/images/pic-compact-fans-12a-ac.png"
      },
      {
        "name": "17A Series",
        "tag": "172 x 172 x 150 mm",
        "desc": "172mm AC axial fan delivering high airflow for densely packed cabinets.",
        "features": [
          "Voltage: 115 / 230 / 415V AC",
          "Frequency: 50 / 60 Hz",
          "Airflow: 190-235 CFM",
          "Speed: 2600-2750 RPM",
          "Power: 37-41 W",
          "Noise: 52-55 dBA",
          "Ball / Sleeve bearing"
        ],
        "image": "https://www.hicoolfans.com/images/pic-compact-fans-ac.png"
      },
      {
        "name": "22A Series",
        "tag": "220 x 220 x 60 mm",
        "desc": "220mm AC axial fan, maximum airflow in the compact range for larger enclosures.",
        "features": [
          "Voltage: 115 / 230 / 415V AC",
          "Frequency: 50 Hz",
          "Airflow: 360 CFM",
          "Speed: 2300 RPM",
          "Power: 50 W",
          "Noise: 56 dBA",
          "Ball / Sleeve bearing"
        ],
        "image": "https://www.hicoolfans.com/products/images/pic-22a-series.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine Hicool",
        "text": "Authentic Hicool fans with full manufacturer warranty."
      },
      {
        "title": "No.1 Hicool Partner",
        "text": "SSC Control has been Hicool's No.1 channel partner since 2005."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Airflow Sizing",
        "text": "Thermal and airflow sizing support from our engineering team."
      }
    ],
    "ctaTitle": "Need the right compact fan?",
    "ctaText": "Our team can help you size the fan frame, airflow and voltage for your enclosure."
  },
  "hicool/all-metal-fans": {
    "brandSlug": "hicool",
    "slug": "all-metal-fans",
    "category": "All Metal Compact Fans",
    "label": "All Metal Fans",
    "title": "All Metal",
    "titleEm": "Compact Fans",
    "tagline": "Rugged all-metal fans for heat and harsh environments.",
    "intro": "Hicool's all-metal compact AC axial fans use a full metal body and metal blades for high-temperature, corrosion-resistant cooling across the 17A, 225A and 280A frames, with ball bearings and 115 / 230 / 415V AC options. SSC Control, Hicool's No.1 channel partner since 2005, supplies the full all-metal range with genuine products and support.",
    "heroImage": "https://www.hicoolfans.com/images/pic-compact-fans-all-metal.png",
    "seriesLabel": "All Metal Lineup",
    "seriesTitle": "All Metal Fans by Series",
    "series": [
      {
        "name": "17A Series",
        "tag": "172 x 150 x 55 mm",
        "desc": "172mm all-metal axial fan for high-temperature and demanding environments.",
        "features": [
          "Voltage: 115 / 230 / 415V AC",
          "Frequency: 50 / 60 Hz",
          "Airflow: 195-230 CFM",
          "Speed: 2800-3250 RPM",
          "Power: 42 W",
          "Noise: 49-53 dBA",
          "Ball bearing, metal blade"
        ],
        "image": "https://www.hicoolfans.com/images/pic-compact-fans-all-metal.png"
      },
      {
        "name": "225A Series",
        "tag": "225 x 225 x 80 mm",
        "desc": "225mm all-metal axial fan for larger enclosures in demanding conditions.",
        "features": [
          "Voltage: 115 / 230 / 415V AC",
          "Frequency: 50 / 60 Hz",
          "Airflow: 530-600 CFM",
          "Speed: 2500-2800 RPM",
          "Power: 80-85 W",
          "Noise: 59-61 dBA",
          "Ball bearing, metal blade"
        ],
        "image": "https://www.hicoolfans.com/images/pic-compact-fans-all-metal.png"
      },
      {
        "name": "280A Series",
        "tag": "280 x 280 x 80 mm",
        "desc": "280mm all-metal axial fan, the largest frame for maximum rugged airflow.",
        "features": [
          "Voltage: 115 / 230 / 415V AC",
          "Frequency: 50 / 60 Hz",
          "Airflow: 1090-1130 CFM",
          "Speed: 2500-2700 RPM",
          "Power: 119-130 W",
          "Noise: 68-70 dBA",
          "Ball bearing, metal blade"
        ],
        "image": "https://www.hicoolfans.com/images/pic-compact-fans-all-metal.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine Hicool",
        "text": "Authentic Hicool fans with full manufacturer warranty."
      },
      {
        "title": "No.1 Hicool Partner",
        "text": "SSC Control has been Hicool's No.1 channel partner since 2005."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Airflow Sizing",
        "text": "Thermal and airflow sizing support from our engineering team."
      }
    ],
    "ctaTitle": "Need a rugged all-metal fan?",
    "ctaText": "Our team can help you select the right all-metal fan for your temperature and environment."
  },
  "hicool/dc-compact-fans": {
    "brandSlug": "hicool",
    "slug": "dc-compact-fans",
    "category": "DC Compact Fans",
    "label": "DC Brushless Compact Fans",
    "title": "DC Brushless",
    "titleEm": "Compact Fans",
    "tagline": "Quiet, efficient brushless cooling on 12V, 24V and 48V DC.",
    "intro": "Hicool's DC brushless compact axial fans deliver efficient, long-life cooling on 12V, 24V and 48V DC across 60mm to 172mm frames, ideal for battery, telecom, electronics and instrumentation cooling. SSC Control, Hicool's No.1 channel partner since 2005, supplies the full DC fan range with genuine products and support.",
    "heroImage": "https://www.hicoolfans.com/images/pic-compact-fans-dc.png",
    "seriesLabel": "DC Lineup",
    "seriesTitle": "DC Brushless Fans by Size",
    "series": [
      {
        "name": "6P Series",
        "tag": "60 x 60 x 20 mm",
        "desc": "Compact 60mm DC brushless fan for the smallest electronics and instrumentation.",
        "features": [
          "Voltage: 12 / 24V DC",
          "Airflow: 18 CFM",
          "Speed: 4300 RPM",
          "Static pressure: 3.8 mm H2O",
          "Noise: 30 dBA",
          "Sleeve bearing"
        ],
        "image": "https://www.hicoolfans.com/images/pic-compact-fans-dc.png"
      },
      {
        "name": "8P Series",
        "tag": "80 x 80 x 25 mm",
        "desc": "80mm DC brushless fan with ball bearing for reliable, quiet cooling.",
        "features": [
          "Voltage: 12 / 24 / 48V DC",
          "Airflow: 38 CFM",
          "Speed: 3000 RPM",
          "Static pressure: 4.5 mm H2O",
          "Noise: 34 dBA",
          "Ball bearing"
        ],
        "image": "https://www.hicoolfans.com/images/pic-compact-fans-dc.png"
      },
      {
        "name": "9P Series",
        "tag": "92 x 92 x 25 mm",
        "desc": "92mm DC brushless fan balancing airflow and footprint.",
        "features": [
          "Voltage: 12 / 24 / 48V DC",
          "Airflow: 55 CFM",
          "Speed: 2500-3000 RPM",
          "Static pressure: 5 mm H2O",
          "Noise: 40 dBA",
          "Ball bearing"
        ],
        "image": "https://www.hicoolfans.com/images/pic-compact-fans-dc.png"
      },
      {
        "name": "12P Series",
        "tag": "120 x 120 x 38 mm",
        "desc": "120mm DC brushless fan with high-performance variants for demanding cooling.",
        "features": [
          "Voltage: 12 / 24 / 48V DC",
          "Airflow: 105-285 CFM",
          "Speed: 3000-5500 RPM",
          "Static pressure: 8-47 mm H2O",
          "Noise: 48-70 dBA",
          "Ball bearing"
        ],
        "image": "https://www.hicoolfans.com/images/pic-compact-fans-dc.png"
      },
      {
        "name": "17A Series",
        "tag": "172 x 150 x 51 mm",
        "desc": "172mm DC brushless fan for high-airflow cooling of larger enclosures.",
        "features": [
          "Voltage: 12 / 24 / 48V DC",
          "Airflow: 210 CFM",
          "Speed: 3000 RPM",
          "Static pressure: 13 mm H2O",
          "Noise: 58 dBA",
          "Ball bearing"
        ],
        "image": "https://www.hicoolfans.com/images/pic-compact-fans-dc.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine Hicool",
        "text": "Authentic Hicool fans with full manufacturer warranty."
      },
      {
        "title": "No.1 Hicool Partner",
        "text": "SSC Control has been Hicool's No.1 channel partner since 2005."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Airflow Sizing",
        "text": "Thermal and airflow sizing support from our engineering team."
      }
    ],
    "ctaTitle": "Need a DC brushless fan?",
    "ctaText": "Our team can help you select the right DC fan, voltage and airflow for your application."
  },
  "hicool/axial-fans": {
    "brandSlug": "hicool",
    "slug": "axial-fans",
    "category": "AC Axial Fans",
    "label": "AC Axial Fan Series",
    "title": "AC Axial",
    "titleEm": "Fans (Metal Blade)",
    "tagline": "High-volume industrial air movement, 200mm to 800mm.",
    "intro": "Hicool's metal-blade AC axial fans move large volumes of air across 200mm to 800mm frames for industrial ventilation, panel and equipment cooling, on 230V single-phase and 415V three-phase supplies. SSC Control, Hicool's No.1 channel partner since 2005, supplies the full axial range with genuine products and support.",
    "heroImage": "https://www.hicoolfans.com/images/pic-axial-fans-metal-blades.png",
    "seriesLabel": "Axial Lineup",
    "seriesTitle": "AC Axial Fans by Frame Size",
    "series": [
      {
        "name": "200 mm",
        "tag": "200 x 220 x 60 mm",
        "desc": "Metal-blade AC axial fan for cabinet and equipment cooling.",
        "features": [
          "Voltage: 230 / 415V AC",
          "Frequency: 50 Hz",
          "Airflow: 265-500 CFM",
          "Speed: 1450-2400 RPM",
          "Power: 35-80 W",
          "Noise: 46-55 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axial-fans-metal-blades.png"
      },
      {
        "name": "250 mm",
        "tag": "250 x 275 x 60 mm",
        "desc": "Metal-blade AC axial fan for medium enclosures.",
        "features": [
          "Voltage: 230 / 415V AC",
          "Frequency: 50 Hz",
          "Airflow: 559-1018 CFM",
          "Speed: 1400-2400 RPM",
          "Power: 60-115 W",
          "Noise: 53-65 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axial-fans-metal-blades.png"
      },
      {
        "name": "300 mm",
        "tag": "300 x 320 x 60 mm",
        "desc": "Metal-blade AC axial fan for industrial ventilation and panel cooling.",
        "features": [
          "Voltage: 230 / 415V AC",
          "Frequency: 50 Hz",
          "Airflow: 1089-1354 CFM",
          "Speed: 1380-2300 RPM",
          "Power: 75-145 W",
          "Noise: 54-65 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axial-fans-metal-blades.png"
      },
      {
        "name": "350 mm",
        "tag": "350 x 370 x 60 mm",
        "desc": "Metal-blade AC axial fan for high-volume air movement.",
        "features": [
          "Voltage: 230 / 415V AC",
          "Frequency: 50 Hz",
          "Airflow: 1530 CFM",
          "Speed: 1380 RPM",
          "Power: 140 W",
          "Noise: 58 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axial-fans-metal-blades.png"
      },
      {
        "name": "400 mm",
        "tag": "400 x 420 x 60 mm",
        "desc": "Metal-blade AC axial fan for industrial cooling.",
        "features": [
          "Voltage: 230 / 415V AC",
          "Frequency: 50 Hz",
          "Airflow: 2354 CFM",
          "Speed: 1380 RPM",
          "Power: 180 W",
          "Noise: 65 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axial-fans-metal-blades.png"
      },
      {
        "name": "450 mm",
        "tag": "450 x 470 x 60 mm",
        "desc": "Metal-blade AC axial fan for heavy-duty ventilation.",
        "features": [
          "Voltage: 230 / 415V AC",
          "Frequency: 50 Hz",
          "Airflow: 3237 CFM",
          "Speed: 1380 RPM",
          "Power: 250 W",
          "Noise: 66 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axial-fans-metal-blades.png"
      },
      {
        "name": "500 mm",
        "tag": "500 x 520 x 60 mm",
        "desc": "Metal-blade AC axial fan for large-scale air handling.",
        "features": [
          "Voltage: 230 / 415V AC",
          "Frequency: 50 Hz",
          "Airflow: 4211-4353 CFM",
          "Speed: 1320-1410 RPM",
          "Power: 350-380 W",
          "Noise: 71 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axial-fans-metal-blades.png"
      },
      {
        "name": "550 mm",
        "tag": "550 x 570 x 60 mm",
        "desc": "Metal-blade AC axial fan for high-capacity ventilation.",
        "features": [
          "Voltage: 230 / 415V AC",
          "Frequency: 50 Hz",
          "Airflow: 5009-5250 CFM",
          "Speed: 1300-1395 RPM",
          "Power: 470-550 W",
          "Noise: 72 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axial-fans-metal-blades.png"
      },
      {
        "name": "600 mm",
        "tag": "600 x 620 x 60 mm",
        "desc": "Metal-blade AC axial fan, 4-pole and 6-pole variants.",
        "features": [
          "Voltage: 230 / 415V AC",
          "Frequency: 50 Hz",
          "Airflow: 5909-6478 CFM",
          "Speed: 950-1370 RPM",
          "Power: 520-765 W",
          "Noise: 70-74 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axial-fans-metal-blades.png"
      },
      {
        "name": "630 mm",
        "tag": "630 x 650 x 60 mm",
        "desc": "Metal-blade AC axial fan for large industrial air movement.",
        "features": [
          "Voltage: 415V AC",
          "Frequency: 50 Hz",
          "Airflow: 6936-7310 CFM",
          "Speed: 900-1320 RPM",
          "Power: 550-815 W",
          "Noise: 71-75 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axial-fans-metal-blades.png"
      },
      {
        "name": "710 mm",
        "tag": "703 x 770 x 60 mm",
        "desc": "Large metal-blade AC axial fan, Delta/Wye options.",
        "features": [
          "Voltage: 415V AC",
          "Frequency: 50 Hz",
          "Airflow: 7681-8899 CFM",
          "Speed: 730-900 RPM",
          "Power: 650-900 W",
          "Noise: 72-73 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axial-fans-metal-blades.png"
      },
      {
        "name": "800 mm",
        "tag": "784 x 857 x 60 mm",
        "desc": "Largest metal-blade AC axial fan, Delta/Wye options.",
        "features": [
          "Voltage: 415V AC",
          "Frequency: 50 Hz",
          "Airflow: 10380-12181 CFM",
          "Speed: 770-920 RPM",
          "Power: 930-1200 W",
          "Noise: 74-75 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axial-fans-metal-blades.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine Hicool",
        "text": "Authentic Hicool products with full manufacturer warranty."
      },
      {
        "title": "No.1 Hicool Partner",
        "text": "SSC Control has been Hicool's No.1 channel partner since 2005."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Airflow Sizing",
        "text": "Thermal and airflow sizing support from our engineering team."
      }
    ],
    "ctaTitle": "Need a large axial fan?",
    "ctaText": "Our team can size the frame, airflow and voltage for your ventilation duty."
  },
  "hicool/centrifugal-blowers": {
    "brandSlug": "hicool",
    "slug": "centrifugal-blowers",
    "category": "Centrifugal Blowers",
    "label": "Radial Centrifugal Blowers",
    "title": "Centrifugal",
    "titleEm": "Blowers",
    "tagline": "High static pressure for ducted and pressurised cooling.",
    "intro": "Hicool's single- and dual-inlet centrifugal blowers with external rotor motors deliver high static pressure for UPS, control panel, railway and ducted cooling. SSC Control, Hicool's No.1 channel partner since 2005, supplies the full blower range with genuine products and support.",
    "heroImage": "https://www.hicoolfans.com/images/pic-centrifugal-blowers.png",
    "seriesLabel": "Blower Lineup",
    "seriesTitle": "Centrifugal Blowers by Model",
    "series": [
      {
        "name": "CFB2E-120S",
        "tag": "Ф120 x 50",
        "desc": "Single inlet centrifugal blower with external rotor motor for UPS, panel and railway cooling.",
        "features": [
          "Voltage: 230V AC, 50 Hz",
          "Airflow: 280 m3/hr",
          "Speed: 2180 RPM",
          "Power: 81 W",
          "Noise: 73 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-centrifugal-blowers.png"
      },
      {
        "name": "CFB2E-140S",
        "tag": "Ф140 x 65",
        "desc": "Single inlet centrifugal blower with external rotor motor for UPS, panel and railway cooling.",
        "features": [
          "Voltage: 230V AC, 50 Hz",
          "Airflow: 480 m3/hr",
          "Speed: 2350 RPM",
          "Power: 220 W",
          "Noise: 73 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-centrifugal-blowers.png"
      },
      {
        "name": "CFB2E-150S",
        "tag": "Ф150 x 65",
        "desc": "Single inlet centrifugal blower with external rotor motor for UPS, panel and railway cooling.",
        "features": [
          "Voltage: 230V AC, 50 Hz",
          "Airflow: 475 m3/hr",
          "Speed: 2300 RPM",
          "Power: 220 W",
          "Noise: 60 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-centrifugal-blowers.png"
      },
      {
        "name": "CFB2E-160S",
        "tag": "Ф160 x 65",
        "desc": "Single inlet centrifugal blower with external rotor motor for UPS, panel and railway cooling.",
        "features": [
          "Voltage: 230V AC, 50 Hz",
          "Airflow: 600 m3/hr",
          "Speed: 2100 RPM",
          "Power: 280 W",
          "Noise: 73 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-centrifugal-blowers.png"
      },
      {
        "name": "CFB2E-180S",
        "tag": "Ф180 x 55",
        "desc": "Single inlet centrifugal blower with external rotor motor for UPS, panel and railway cooling.",
        "features": [
          "Voltage: 230V AC, 50 Hz",
          "Airflow: 750 m3/hr",
          "Speed: 2000 RPM",
          "Power: 420 W",
          "Noise: 74 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-centrifugal-blowers.png"
      },
      {
        "name": "CFB4E-180S",
        "tag": "Ф180 x 95",
        "desc": "Single inlet centrifugal blower with external rotor motor for UPS, panel and railway cooling.",
        "features": [
          "Voltage: 230V AC, 50 Hz",
          "Airflow: 1130 m3/hr",
          "Speed: 1350 RPM",
          "Power: 230 W",
          "Noise: 66 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-centrifugal-blowers.png"
      },
      {
        "name": "CFB4E-200S",
        "tag": "Ф200 x 105",
        "desc": "Single inlet centrifugal blower with external rotor motor for UPS, panel and railway cooling.",
        "features": [
          "Voltage: 230V AC, 50 Hz",
          "Airflow: 1365 m3/hr",
          "Speed: 1330 RPM",
          "Power: 360 W",
          "Noise: 70 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-centrifugal-blowers.png"
      },
      {
        "name": "CFB4E-225S",
        "tag": "Ф225 x 105",
        "desc": "Single inlet centrifugal blower with external rotor motor for UPS, panel and railway cooling.",
        "features": [
          "Voltage: 230V AC, 50 Hz",
          "Airflow: 1800 m3/hr",
          "Speed: 1330 RPM",
          "Power: 520 W",
          "Noise: 74 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-centrifugal-blowers.png"
      },
      {
        "name": "CFB4D-225S",
        "tag": "Ф225 x 105",
        "desc": "Single inlet centrifugal blower with external rotor motor for UPS, panel and railway cooling.",
        "features": [
          "Voltage: 415V AC, 50 Hz",
          "Airflow: 1800 m3/hr",
          "Speed: 1310 RPM",
          "Power: 460 W",
          "Noise: 74 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-centrifugal-blowers.png"
      },
      {
        "name": "CFB2E-133D",
        "tag": "Ф133 x 180",
        "desc": "Dual inlet centrifugal blower with external rotor motor for UPS, panel and railway cooling.",
        "features": [
          "Voltage: 230V AC, 50 Hz",
          "Airflow: 680 m3/hr",
          "Speed: 1500 RPM",
          "Power: 170 W",
          "Noise: 60 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-centrifugal-blowers.png"
      },
      {
        "name": "CFB2E-146D",
        "tag": "Ф146 x 180",
        "desc": "Dual inlet centrifugal blower with external rotor motor for UPS, panel and railway cooling.",
        "features": [
          "Voltage: 230V AC, 50 Hz",
          "Airflow: 950 m3/hr",
          "Speed: 1660 RPM",
          "Power: 420 W",
          "Noise: 61 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-centrifugal-blowers.png"
      },
      {
        "name": "CFB4E-160D",
        "tag": "Ф160 x 210",
        "desc": "Dual inlet centrifugal blower with external rotor motor for UPS, panel and railway cooling.",
        "features": [
          "Voltage: 230V AC, 50 Hz",
          "Airflow: 1240 m3/hr",
          "Speed: 1380 RPM",
          "Power: 200 W",
          "Noise: 64 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-centrifugal-blowers.png"
      },
      {
        "name": "CFB4D-180D",
        "tag": "Ф180 x 195",
        "desc": "Dual inlet centrifugal blower with external rotor motor for UPS, panel and railway cooling.",
        "features": [
          "Voltage: 415V AC, 50 Hz",
          "Airflow: 1900 m3/hr",
          "Speed: 1350 RPM",
          "Power: 350 W",
          "Noise: 63 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-centrifugal-blowers.png"
      },
      {
        "name": "CFB4D-200D",
        "tag": "Ф200 x 210",
        "desc": "Dual inlet centrifugal blower with external rotor motor for UPS, panel and railway cooling.",
        "features": [
          "Voltage: 415V AC, 50 Hz",
          "Airflow: 2500 m3/hr",
          "Speed: 1100 RPM",
          "Power: 480 W",
          "Noise: 64 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-centrifugal-blowers.png"
      },
      {
        "name": "CFB4D-225D",
        "tag": "Ф225 x 210",
        "desc": "Dual inlet centrifugal blower with external rotor motor for UPS, panel and railway cooling.",
        "features": [
          "Voltage: 415V AC, 50 Hz",
          "Airflow: 2950 m3/hr",
          "Speed: 1050 RPM",
          "Power: 690 W",
          "Noise: 65 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-centrifugal-blowers.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine Hicool",
        "text": "Authentic Hicool products with full manufacturer warranty."
      },
      {
        "title": "No.1 Hicool Partner",
        "text": "SSC Control has been Hicool's No.1 channel partner since 2005."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Airflow Sizing",
        "text": "Thermal and airflow sizing support from our engineering team."
      }
    ],
    "ctaTitle": "Need a centrifugal blower?",
    "ctaText": "Our team can select the right single or dual inlet blower for your pressure and airflow."
  },
  "hicool/backward-curved-fans": {
    "brandSlug": "hicool",
    "slug": "backward-curved-fans",
    "category": "Backward Curved Fans",
    "label": "Backward Curved Impeller",
    "title": "Backward",
    "titleEm": "Curved Fans",
    "tagline": "High efficiency, non-overloading radial airflow.",
    "intro": "Hicool's backward-curved centrifugal radial fans deliver high hydraulic efficiency and non-overloading characteristics for enclosures, filtration and high-pressure cooling. SSC Control, Hicool's No.1 channel partner since 2005, supplies the full range with genuine products and support.",
    "heroImage": "https://www.hicoolfans.com/images/pic-backward-curved-fans.png",
    "seriesLabel": "Backward Curved Lineup",
    "seriesTitle": "Backward Curved Fans by Model",
    "series": [
      {
        "name": "BCF-133",
        "tag": "Ф130 x 54",
        "desc": "Backward-curved centrifugal radial fan with high efficiency and non-overloading characteristics.",
        "features": [
          "Voltage: 230V AC, 50/60 Hz",
          "Airflow: 220 m3/h",
          "Speed: 2550 RPM",
          "Power: 26 W",
          "Noise: 60/62 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-backward-curved-fans.png"
      },
      {
        "name": "BCF-180",
        "tag": "Ф180 x 49",
        "desc": "Backward-curved centrifugal radial fan with high efficiency and non-overloading characteristics.",
        "features": [
          "Voltage: 230V AC, 50/60 Hz",
          "Airflow: 440/470 m3/h",
          "Speed: 2500/2700 RPM",
          "Power: 61/66 W",
          "Noise: 59/62 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-backward-curved-fans.png"
      },
      {
        "name": "BCF-190",
        "tag": "Ф192 x 60",
        "desc": "Backward-curved centrifugal radial fan with high efficiency and non-overloading characteristics.",
        "features": [
          "Voltage: 230V AC, 50/60 Hz",
          "Airflow: 570/630 m3/h",
          "Speed: 2400/2600 RPM",
          "Power: 80/90 W",
          "Noise: 62/65 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-backward-curved-fans.png"
      },
      {
        "name": "BCF-220",
        "tag": "Ф220 x 63",
        "desc": "Backward-curved centrifugal radial fan with high efficiency and non-overloading characteristics.",
        "features": [
          "Voltage: 230V AC, 50/60 Hz",
          "Airflow: 800/865 m3/h",
          "Speed: 2400/2600 RPM",
          "Power: 95/120 W",
          "Noise: 65/68 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-backward-curved-fans.png"
      },
      {
        "name": "BCF-225BB",
        "tag": "Ф225 x 90",
        "desc": "Backward-curved centrifugal radial fan with high efficiency and non-overloading characteristics.",
        "features": [
          "Voltage: 230V AC, 50/60 Hz",
          "Airflow: 1220/1350 m3/h",
          "Speed: 2500/2650 RPM",
          "Power: 147/195 W",
          "Noise: 68/72 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-backward-curved-fans.png"
      },
      {
        "name": "BCF-250",
        "tag": "Ф250 x 82",
        "desc": "Backward-curved centrifugal radial fan with high efficiency and non-overloading characteristics.",
        "features": [
          "Voltage: 230V AC, 50/60 Hz",
          "Airflow: 1540/1660 m3/h",
          "Speed: 2700/3030 RPM",
          "Power: 190/250 W",
          "Noise: 74/76 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-backward-curved-fans.png"
      },
      {
        "name": "BCF-355",
        "tag": "Ф355 x 174",
        "desc": "Backward-curved centrifugal radial fan with high efficiency and non-overloading characteristics.",
        "features": [
          "Voltage: 230V AC, 50/60 Hz",
          "Airflow: 2800 m3/h",
          "Speed: 1400 RPM",
          "Power: 245 W",
          "Noise: 74 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-backward-curved-fans.png"
      },
      {
        "name": "BCF-400",
        "tag": "Ф400 x 185",
        "desc": "Backward-curved centrifugal radial fan with high efficiency and non-overloading characteristics.",
        "features": [
          "Voltage: 230V AC, 50/60 Hz",
          "Airflow: 3663 m3/h",
          "Speed: 1370 RPM",
          "Power: 370 W",
          "Noise: 77 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-backward-curved-fans.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine Hicool",
        "text": "Authentic Hicool products with full manufacturer warranty."
      },
      {
        "title": "No.1 Hicool Partner",
        "text": "SSC Control has been Hicool's No.1 channel partner since 2005."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Airflow Sizing",
        "text": "Thermal and airflow sizing support from our engineering team."
      }
    ],
    "ctaTitle": "Need a backward-curved fan?",
    "ctaText": "Our team can help select the right impeller size and airflow for your duty."
  },
  "hicool/ec-axial-fans": {
    "brandSlug": "hicool",
    "slug": "ec-axial-fans",
    "category": "EC Axial Fans",
    "label": "EC Axial Energy Efficient",
    "title": "AxiEC",
    "titleEm": "EC Axial Fans",
    "tagline": "Up to 50% energy saving with EC technology and speed control.",
    "intro": "Hicool's AxiEC EC axial fans combine electronically commutated motors with 0-10V and Modbus speed control for up to 50% energy saving across 250mm to 910mm frames. SSC Control, Hicool's No.1 channel partner since 2005, supplies the full EC axial range with genuine products and support.",
    "heroImage": "https://www.hicoolfans.com/images/pic-axiec-fans.png",
    "seriesLabel": "AxiEC Lineup",
    "seriesTitle": "EC Axial Fans by Frame Size",
    "series": [
      {
        "name": "250 mm frame",
        "tag": "250 mm",
        "desc": "250 mm EC axial fan with speed control and high energy efficiency.",
        "features": [
          "Voltage: 230V AC (1ph)",
          "Airflow: 1118-1148 CFM",
          "Speed: 2720-3050 RPM",
          "Power: 160-190 W",
          "Control: 0-10V / RS485 (Modbus)",
          "Noise: 70-79 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axiec-fans.png"
      },
      {
        "name": "300 mm frame",
        "tag": "300 mm",
        "desc": "300 mm EC axial fan with speed control and high energy efficiency.",
        "features": [
          "Voltage: 230V AC (1ph)",
          "Airflow: 1383-1824 CFM",
          "Speed: 1750-2100 RPM",
          "Power: 115-180 W",
          "Control: 0-10V / RS485 (Modbus)",
          "Noise: 64-70 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axiec-fans.png"
      },
      {
        "name": "330 mm frame",
        "tag": "330 mm",
        "desc": "330 mm EC axial fan with speed control and high energy efficiency.",
        "features": [
          "Voltage: 230V AC (1ph)",
          "Airflow: 1383 CFM",
          "Speed: 1660 RPM",
          "Power: 140 W",
          "Control: 0-10V / RS485 (Modbus)",
          "Noise: 68 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axiec-fans.png"
      },
      {
        "name": "350 mm frame",
        "tag": "350 mm",
        "desc": "350 mm EC axial fan with speed control and high energy efficiency.",
        "features": [
          "Voltage: 230V AC (1ph)",
          "Airflow: 1530-2001 CFM",
          "Speed: 1200-1550 RPM",
          "Power: 100-170 W",
          "Control: 0-10V / RS485 (Modbus)",
          "Noise: 63-67 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axiec-fans.png"
      },
      {
        "name": "400 mm frame",
        "tag": "400 mm",
        "desc": "400 mm EC axial fan with speed control and high energy efficiency.",
        "features": [
          "Voltage: 230V AC (1ph)",
          "Airflow: 2237-3414 CFM",
          "Speed: 1100-1700 RPM",
          "Power: 145-500 W",
          "Control: 0-10V / RS485 (Modbus)",
          "Noise: 68-73 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axiec-fans.png"
      },
      {
        "name": "450 mm frame",
        "tag": "450 mm",
        "desc": "450 mm EC axial fan with speed control and high energy efficiency.",
        "features": [
          "Voltage: 230V AC (1ph)",
          "Airflow: 3178-3826 CFM",
          "Speed: 980-1550 RPM",
          "Power: 170-410 W",
          "Control: 0-10V / RS485 (Modbus)",
          "Noise: 65-71 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axiec-fans.png"
      },
      {
        "name": "500 mm frame",
        "tag": "500 mm",
        "desc": "500 mm EC axial fan with speed control and high energy efficiency.",
        "features": [
          "Voltage: 230V / 400V AC",
          "Airflow: 3532-5651 CFM",
          "Speed: 1010-1600 RPM",
          "Power: 290-940 W",
          "Control: 0-10V / RS485 (Modbus)",
          "Noise: 70-74 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axiec-fans.png"
      },
      {
        "name": "550 mm frame",
        "tag": "550 mm",
        "desc": "550 mm EC axial fan with speed control and high energy efficiency.",
        "features": [
          "Voltage: 230V / 400V AC",
          "Airflow: 4709-5945 CFM",
          "Speed: 1000-1350 RPM",
          "Power: 400-900 W",
          "Control: 0-10V / RS485 (Modbus)",
          "Noise: 67-75 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axiec-fans.png"
      },
      {
        "name": "630 mm frame",
        "tag": "630 mm",
        "desc": "630 mm EC axial fan with speed control and high energy efficiency.",
        "features": [
          "Voltage: 230V / 400V AC",
          "Airflow: 4709-12655 CFM",
          "Speed: 800-1520 RPM",
          "Power: 250-3500 W",
          "Control: 0-10V / RS485 (Modbus)",
          "Noise: 62-85 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axiec-fans.png"
      },
      {
        "name": "710 mm frame",
        "tag": "710 mm",
        "desc": "710 mm EC axial fan with speed control and high energy efficiency.",
        "features": [
          "Voltage: 400V AC (3ph)",
          "Airflow: 10065-12655 CFM",
          "Speed: 1010-1250 RPM",
          "Power: 1200-2450 W",
          "Control: 0-10V / RS485 (Modbus)",
          "Noise: 73-85 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axiec-fans.png"
      },
      {
        "name": "800 mm frame",
        "tag": "800 mm",
        "desc": "800 mm EC axial fan with speed control and high energy efficiency.",
        "features": [
          "Voltage: 400V AC (3ph)",
          "Airflow: 14421-15009 CFM",
          "Speed: 1020-1100 RPM",
          "Power: 1850-2630 W",
          "Control: 0-10V / RS485 (Modbus)",
          "Noise: 82 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axiec-fans.png"
      },
      {
        "name": "910 mm frame",
        "tag": "910 mm",
        "desc": "910 mm EC axial fan with speed control and high energy efficiency.",
        "features": [
          "Voltage: 400V AC (3ph)",
          "Airflow: 17658-19424 CFM",
          "Speed: 880-1020 RPM",
          "Power: 1990-2220 W",
          "Control: 0-10V / RS485 (Modbus)",
          "Noise: 79-84 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-axiec-fans.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine Hicool",
        "text": "Authentic Hicool products with full manufacturer warranty."
      },
      {
        "title": "No.1 Hicool Partner",
        "text": "SSC Control has been Hicool's No.1 channel partner since 2005."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Airflow Sizing",
        "text": "Thermal and airflow sizing support from our engineering team."
      }
    ],
    "ctaTitle": "Need an EC axial fan?",
    "ctaText": "Our team can size the EC fan, airflow and control for your energy-efficient ventilation."
  },
  "hicool/ec-compact-fans": {
    "brandSlug": "hicool",
    "slug": "ec-compact-fans",
    "category": "EC Compact Fans",
    "label": "EC Compact Energy Efficient",
    "title": "BLDC",
    "titleEm": "Compact Fans & Blowers",
    "tagline": "Energy-efficient BLDC compact fans and blowers with speed control.",
    "intro": "Hicool's BLDC compact fans and blowers deliver energy-efficient cooling with 0-10VDC linear speed control for electronics, telecom and equipment cooling. SSC Control, Hicool's No.1 channel partner since 2005, supplies the full BLDC range with genuine products and support.",
    "heroImage": "https://www.hicoolfans.com/images/pic-bldc-fans-and-blowers.png",
    "seriesLabel": "BLDC Lineup",
    "seriesTitle": "BLDC Fans & Blowers",
    "series": [
      {
        "name": "G3HD300",
        "tag": "DC Axial Fan",
        "desc": "High-output BLDC axial fan with 0-10VDC speed control for industrial cooling.",
        "features": [
          "Voltage: 26V DC",
          "Airflow: 2700 m3/hr (~1588 CFM)",
          "Speed: 2800 RPM",
          "Power: 170 W (6.5A)",
          "Control: 0-10VDC speed",
          "Noise: 72 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-bldc-fans-and-blowers.png"
      },
      {
        "name": "G3HD385",
        "tag": "DC Axial Fan",
        "desc": "Higher-airflow BLDC axial fan with 0-10VDC speed control.",
        "features": [
          "Voltage: 26V DC",
          "Airflow: 3300 m3/hr (~1939 CFM)",
          "Speed: 2550 RPM",
          "Power: 185 W (7.1A)",
          "Control: 0-10VDC speed",
          "Noise: 78 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-bldc-fans-and-blowers.png"
      },
      {
        "name": "E3HD097",
        "tag": "DC Centrifugal Fan",
        "desc": "BLDC centrifugal fan with high static pressure and 0-10VDC speed control.",
        "features": [
          "Voltage: 24V DC",
          "Airflow: 1050 m3/hr (~617 CFM)",
          "Speed: 3200 RPM",
          "Power: 265 W (11A)",
          "Control: 0-10VDC speed",
          "Noise: 65 dBA"
        ],
        "image": "https://www.hicoolfans.com/images/pic-bldc-fans-and-blowers.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine Hicool",
        "text": "Authentic Hicool products with full manufacturer warranty."
      },
      {
        "title": "No.1 Hicool Partner",
        "text": "SSC Control has been Hicool's No.1 channel partner since 2005."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Airflow Sizing",
        "text": "Thermal and airflow sizing support from our engineering team."
      }
    ],
    "ctaTitle": "Need an EC compact fan?",
    "ctaText": "Our team can select the right BLDC fan or blower and control for your application."
  },
  "hicool/q-motors": {
    "brandSlug": "hicool",
    "slug": "q-motors",
    "category": "Q Motors",
    "label": "Q Motor Series",
    "title": "Q Type",
    "titleEm": "Motors",
    "tagline": "Shaded-pole external rotor motors for fans and impellers.",
    "intro": "Hicool's Q-type shaded-pole external rotor motors drive axial fans and impellers from 5W to 34W output on 230V AC, in a compact 83A frame. SSC Control, Hicool's No.1 channel partner since 2005, supplies the full Q motor range with genuine products and support.",
    "heroImage": "https://www.hicoolfans.com/images/pic-shaded-pole-motors-q-type.png",
    "seriesLabel": "Q Motor Lineup",
    "seriesTitle": "Q Motors by Output",
    "series": [
      {
        "name": "5 Watt",
        "tag": "83A frame",
        "desc": "4-pole shaded-pole external rotor Q motor for impellers up to 200mm.",
        "features": [
          "Voltage: 230V AC",
          "Frequency: 50 Hz",
          "Power: 5W output / 30W input",
          "Speed: 1300 RPM",
          "4-pole shaded-pole"
        ],
        "image": "https://www.hicoolfans.com/images/pic-shaded-pole-motors-q-type.png"
      },
      {
        "name": "7 Watt",
        "tag": "83A frame",
        "desc": "4-pole shaded-pole external rotor Q motor for impellers up to 230mm.",
        "features": [
          "Voltage: 230V AC",
          "Frequency: 50 Hz",
          "Power: 7W output / 35W input",
          "Speed: 1300 RPM",
          "4-pole shaded-pole"
        ],
        "image": "https://www.hicoolfans.com/images/pic-shaded-pole-motors-q-type.png"
      },
      {
        "name": "10 Watt",
        "tag": "83A frame",
        "desc": "4-pole shaded-pole external rotor Q motor for impellers up to 230mm.",
        "features": [
          "Voltage: 230V AC",
          "Frequency: 50 Hz",
          "Power: 10W output / 45W input",
          "Speed: 1300 RPM",
          "4-pole shaded-pole"
        ],
        "image": "https://www.hicoolfans.com/images/pic-shaded-pole-motors-q-type.png"
      },
      {
        "name": "16 Watt",
        "tag": "83A frame",
        "desc": "4-pole shaded-pole external rotor Q motor for impellers up to 254mm.",
        "features": [
          "Voltage: 230V AC",
          "Frequency: 50 Hz",
          "Power: 16W output / 50W input",
          "Speed: 1300 RPM",
          "4-pole shaded-pole"
        ],
        "image": "https://www.hicoolfans.com/images/pic-shaded-pole-motors-q-type.png"
      },
      {
        "name": "18 Watt",
        "tag": "83A frame",
        "desc": "4-pole shaded-pole external rotor Q motor for impellers up to 254mm.",
        "features": [
          "Voltage: 230V AC",
          "Frequency: 50 Hz",
          "Power: 18W output / 70W input",
          "Speed: 1300 RPM",
          "4-pole shaded-pole"
        ],
        "image": "https://www.hicoolfans.com/images/pic-shaded-pole-motors-q-type.png"
      },
      {
        "name": "25 Watt",
        "tag": "83A frame",
        "desc": "4-pole shaded-pole external rotor Q motor for impellers up to 300mm.",
        "features": [
          "Voltage: 230V AC",
          "Frequency: 50 Hz",
          "Power: 25W output / 90W input",
          "Speed: 1300 RPM",
          "4-pole shaded-pole"
        ],
        "image": "https://www.hicoolfans.com/images/pic-shaded-pole-motors-q-type.png"
      },
      {
        "name": "34 Watt",
        "tag": "83A frame",
        "desc": "4-pole shaded-pole external rotor Q motor for impellers up to 300mm.",
        "features": [
          "Voltage: 230V AC",
          "Frequency: 50 Hz",
          "Power: 34W output / 100W input",
          "Speed: 1300 RPM",
          "4-pole shaded-pole"
        ],
        "image": "https://www.hicoolfans.com/images/pic-shaded-pole-motors-q-type.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine Hicool",
        "text": "Authentic Hicool products with full manufacturer warranty."
      },
      {
        "title": "No.1 Hicool Partner",
        "text": "SSC Control has been Hicool's No.1 channel partner since 2005."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Airflow Sizing",
        "text": "Thermal and airflow sizing support from our engineering team."
      }
    ],
    "ctaTitle": "Need a Q motor?",
    "ctaText": "Our team can match the right Q motor wattage to your fan or impeller."
  },
  "hicool/ec-q-motors": {
    "brandSlug": "hicool",
    "slug": "ec-q-motors",
    "category": "EC Q Motors",
    "label": "EC Q Motor Series",
    "title": "EC External",
    "titleEm": "Rotor Motors",
    "tagline": "Variable-speed external rotor motors for maximum efficiency.",
    "intro": "Hicool's external rotor EC Q motors (K92, K102 and J92/D92 series) drive fans and blowers with variable speed and high efficiency across a wide power range. SSC Control, Hicool's No.1 channel partner since 2005, supplies the full EC motor range with genuine products and support.",
    "heroImage": "https://www.hicoolfans.com/images/pic-externalrotor-motors.png",
    "seriesLabel": "EC Motor Lineup",
    "seriesTitle": "EC External Rotor Motors",
    "series": [
      {
        "name": "K92-E-15",
        "tag": "Frame 15 / 66 mm",
        "desc": "Compact external rotor motor for small air-moving applications.",
        "features": [
          "Voltage: 220V / 120V (50/60Hz)",
          "Power: 40-75 W",
          "Speed: 1400-2500 RPM",
          "Weight: 1.0 kg"
        ],
        "image": "https://www.hicoolfans.com/products/images/external-rotor-motors1.jpg"
      },
      {
        "name": "K92-E-25",
        "tag": "Frame 25 / 75 mm",
        "desc": "External rotor motor with mid-range output for ventilation fans.",
        "features": [
          "Voltage: 220V / 120V (50/60Hz)",
          "Power: 50-120 W",
          "Speed: 1380-2850 RPM",
          "Weight: 1.5 kg"
        ],
        "image": "https://www.hicoolfans.com/products/images/external-rotor-motors1.jpg"
      },
      {
        "name": "K92-E-35",
        "tag": "Frame 35 / 85 mm",
        "desc": "External rotor motor for axial and centrifugal fans.",
        "features": [
          "Voltage: 220V / 120V (50/60Hz)",
          "Power: 85-210 W",
          "Speed: 1350-2500 RPM",
          "Weight: 2.0 kg"
        ],
        "image": "https://www.hicoolfans.com/products/images/external-rotor-motors1.jpg"
      },
      {
        "name": "K92-E-42",
        "tag": "Frame 42 / 92 mm",
        "desc": "Largest K92 external rotor motor for high-power fan duties.",
        "features": [
          "Voltage: 220V / 120V (50/60Hz)",
          "Power: 130-235 W",
          "Speed: 1350-2600 RPM",
          "Weight: 2.2 kg"
        ],
        "image": "https://www.hicoolfans.com/products/images/external-rotor-motors1.jpg"
      },
      {
        "name": "K102-E-34",
        "tag": "Frame 34 / 104 mm",
        "desc": "K102 external rotor motor for larger-diameter fans.",
        "features": [
          "Voltage: 220V / 120V (50/60Hz)",
          "Power: 80-180 W",
          "Speed: 920-1600 RPM",
          "Weight: 2.5 kg"
        ],
        "image": "https://www.hicoolfans.com/products/images/pic-k102-external-rotor-motors.png"
      },
      {
        "name": "K102-E-47",
        "tag": "Frame 47 / 117 mm",
        "desc": "Mid-range K102 external rotor motor for HVAC fans.",
        "features": [
          "Voltage: 220V / 120V (50/60Hz)",
          "Power: 108-250 W",
          "Speed: 920-1600 RPM",
          "Weight: 3.5 kg"
        ],
        "image": "https://www.hicoolfans.com/products/images/pic-k102-external-rotor-motors.png"
      },
      {
        "name": "K102-E-60",
        "tag": "Frame 60 / 129 mm",
        "desc": "Highest-power K102 external rotor motor for large fans.",
        "features": [
          "Voltage: 220V / 120V (50/60Hz)",
          "Power: 150-300 W",
          "Speed: 920-1600 RPM",
          "Weight: 4.5 kg"
        ],
        "image": "https://www.hicoolfans.com/products/images/pic-k102-external-rotor-motors.png"
      },
      {
        "name": "J92 / D92",
        "tag": "Frame 15-95 mm",
        "desc": "J92/D92 external rotor motors in 2E and 4E configurations.",
        "features": [
          "Voltage: 220V / 120V (50/60Hz)",
          "Power: 40-160 W",
          "Speed: 1300-2600 RPM",
          "Noise: 48-58 dBA"
        ],
        "image": "https://www.hicoolfans.com/products/images/pic-j-d92-external-rotor-motors.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine Hicool",
        "text": "Authentic Hicool products with full manufacturer warranty."
      },
      {
        "title": "No.1 Hicool Partner",
        "text": "SSC Control has been Hicool's No.1 channel partner since 2005."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda warehouses across Gujarat."
      },
      {
        "title": "Airflow Sizing",
        "text": "Thermal and airflow sizing support from our engineering team."
      }
    ],
    "ctaTitle": "Need an EC external rotor motor?",
    "ctaText": "Our team can select the right EC motor frame and power for your fan."
  },
  "nvent/ms-wall-mount": {
    "brandSlug": "nvent",
    "slug": "ms-wall-mount",
    "category": "Mild Steel Wall Mount Enclosures",
    "label": "MS Wall Mount",
    "title": "Mild Steel",
    "titleEm": "Wall Mount Enclosures",
    "tagline": "Single and double door steel enclosures up to IP66.",
    "intro": "nVent Hoffman is a global leader in enclosures and protection for electrical infrastructure. SSC Control, nVent Hoffman's No.1 channel partner since 2006, supplies the full range with genuine products, warranty and complete project support across Gujarat and India.",
    "heroImage": "https://rspsupply.com/images/product/medium/Hoffman-MAS1006040R5.jpg",
    "seriesLabel": "Wall Mount Lineup",
    "seriesTitle": "Mild Steel Wall Mount Series",
    "series": [
      {
        "name": "MAS Single Door",
        "tag": "Mild steel, IP66",
        "desc": "Mild steel single door wall-mounted enclosure across a wide size range with high IP66 protection.",
        "features": [
          "Material: Mild steel, body 1.2 to 1.5 mm",
          "Finish: RAL 7035 structured powder coat",
          "Rating: IP66 / Type 4, 12 / IK10",
          "Door: single, concealed hinges, 130 degree opening",
          "Sizes: 300x250x155 up to 1000x600x400 mm"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-MAS1006040R5.jpg"
      },
      {
        "name": "MAD Double Door",
        "tag": "Mild steel, IP55",
        "desc": "Mild steel double door wall-mounted enclosure for confined spaces, splitting the load over two narrower doors.",
        "features": [
          "Material: Mild steel, body 1.5 mm, door 2 mm",
          "Finish: RAL 7035 structured powder coat",
          "Rating: IP55 / Type 12 / IK10",
          "Door: double",
          "Sizes: 800x1000x210 up to 1200x1200x400 mm"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-MAD1201240R5.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine nVent Hoffman",
        "text": "Authentic nVent Hoffman products with full manufacturer warranty."
      },
      {
        "title": "No.1 Channel Partner",
        "text": "SSC Control has been nVent Hoffman's No.1 channel partner since 2006."
      },
      {
        "title": "Stock & Project Support",
        "text": "Ready availability and project support from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Enclosure Sizing",
        "text": "Selection, sizing and accessory support from our engineering team."
      }
    ],
    "ctaTitle": "Looking for a nVent Hoffman enclosure?",
    "ctaText": "Our team can size the enclosure, material and protection rating for your panel build."
  },
  "nvent/ms-floor-standing": {
    "brandSlug": "nvent",
    "slug": "ms-floor-standing",
    "category": "Mild Steel Floor Standing Enclosures",
    "label": "MS Floor Standing",
    "title": "Mild Steel",
    "titleEm": "Floor Standing Enclosures",
    "tagline": "Modular combinable floor-standing steel enclosures.",
    "intro": "nVent Hoffman is a global leader in enclosures and protection for electrical infrastructure. SSC Control, nVent Hoffman's No.1 channel partner since 2006, supplies the full range with genuine products, warranty and complete project support across Gujarat and India.",
    "heroImage": "https://rspsupply.com/images/product/medium/Hoffman-MCS20086R5.jpg",
    "seriesLabel": "Floor Standing Lineup",
    "seriesTitle": "Mild Steel Floor Standing Series",
    "series": [
      {
        "name": "MCS Single Door",
        "tag": "Mild steel, IP55",
        "desc": "Modular single door combinable floor-standing steel enclosure for combined or stand-alone installation.",
        "features": [
          "Material: 1.5 mm steel frame and panels, 2 mm door",
          "Finish: RAL 7035",
          "Rating: IP55 / Type 12",
          "Type: single door, combinable and bayable",
          "Sizes: 1800 to 2200 mm H, 600 to 1000 mm W, 400 to 800 mm D"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-MCS20086R5.jpg"
      },
      {
        "name": "MCD Double Door",
        "tag": "Mild steel, IP55",
        "desc": "Modular double door combinable floor-standing steel enclosure for full-width front access in tight spaces.",
        "features": [
          "Material: 1.5 mm steel frame and panels, 2 mm doors",
          "Finish: RAL 7035",
          "Rating: IP55 / Type 12",
          "Type: double door, combinable and bayable",
          "Sizes: 1800 to 2200 mm H, 1000 to 1200 mm W"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-MCD18105R5.jpg"
      },
      {
        "name": "NCS Single Door",
        "tag": "Mild steel, IP55",
        "desc": "Modular single door combinable floor-standing steel enclosure supplied ready for bayed installation.",
        "features": [
          "Material: steel frame 1.5 mm, door 2 mm, galvanised mounting plate 2.5 mm",
          "Finish: RAL 7035",
          "Rating: IP55 / Type 12",
          "Type: single door, modular and combinable",
          "Sizes: 1800 to 2000 mm H, 400 to 1200 mm W, 400 to 800 mm D"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-MCS20086R5.jpg"
      },
      {
        "name": "NCD Double Door",
        "tag": "Mild steel, IP55",
        "desc": "Modular double door combinable floor-standing steel enclosure for reduced front swing clearance.",
        "features": [
          "Material: steel frame 1.5 mm, doors 2 mm, galvanised mounting plate 2.5 mm",
          "Finish: RAL 7035",
          "Rating: IP55 / Type 12",
          "Type: double door, modular and combinable",
          "Sizes: 1800 to 2000 mm H, 1000 to 1200 mm W, 400 to 800 mm D"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-MCD18105R5.jpg"
      },
      {
        "name": "NCS HT Single Door",
        "tag": "Mild steel, IP55",
        "desc": "Current generation NCS HT single door combinable floor-standing enclosure with four-hinge reversible door.",
        "features": [
          "Material: steel frame 1.5 mm, door 2 mm, galvanised mounting plate 2.5 mm",
          "Finish: RAL 7035",
          "Rating: IP55 / Type 12",
          "Type: single door, four hinges, modular and combinable",
          "Sizes: 1800 to 2000 mm H, 400 to 1200 mm W, 400 to 800 mm D"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-MCS20086R5.jpg"
      },
      {
        "name": "NCD HT Double Door",
        "tag": "Mild steel, IP55",
        "desc": "Current generation NCD HT double door combinable floor-standing enclosure for confined spaces.",
        "features": [
          "Material: steel frame 1.5 mm, doors 2 mm, galvanised mounting plate 2.5 mm",
          "Finish: RAL 7035",
          "Rating: IP55 / Type 12",
          "Type: double door, three hinges, modular and combinable",
          "Sizes: 1800 to 2000 mm H, 1000 to 1200 mm W, 400 to 800 mm D"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-MCD18105R5.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine nVent Hoffman",
        "text": "Authentic nVent Hoffman products with full manufacturer warranty."
      },
      {
        "title": "No.1 Channel Partner",
        "text": "SSC Control has been nVent Hoffman's No.1 channel partner since 2006."
      },
      {
        "title": "Stock & Project Support",
        "text": "Ready availability and project support from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Enclosure Sizing",
        "text": "Selection, sizing and accessory support from our engineering team."
      }
    ],
    "ctaTitle": "Looking for a nVent Hoffman enclosure?",
    "ctaText": "Our team can size the enclosure, material and protection rating for your panel build."
  },
  "nvent/ss-wall-mount": {
    "brandSlug": "nvent",
    "slug": "ss-wall-mount",
    "category": "Stainless Steel Wall Mount",
    "label": "SS Wall Mount",
    "title": "Stainless Steel",
    "titleEm": "Wall Mount Enclosures",
    "tagline": "304 and 316L stainless wall enclosures for harsh environments.",
    "intro": "nVent Hoffman is a global leader in enclosures and protection for electrical infrastructure. SSC Control, nVent Hoffman's No.1 channel partner since 2006, supplies the full range with genuine products, warranty and complete project support across Gujarat and India.",
    "heroImage": "https://rspsupply.com/images/product/medium/Hoffman-ASR0404021.jpg",
    "seriesLabel": "Wall Mount Lineup",
    "seriesTitle": "Stainless Steel Wall Mount Series",
    "series": [
      {
        "name": "ASR Single Door",
        "tag": "304 / 316L SS, IP66",
        "desc": "Single door stainless steel wall-mounted enclosure with brushed finish for washdown and corrosive environments.",
        "features": [
          "Grade: AISI 304L or 316L stainless steel",
          "Rating: IP66 / Type 4X / IK10",
          "Door: single, 130 degree opening, concealed SS hinges",
          "Mount: wall",
          "Sizes: 300x300 up to 1200x1000 mm, depth 150 to 300 mm"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-ASR0606030.jpg"
      },
      {
        "name": "ADR Double Door",
        "tag": "304 / 316L SS, IP55",
        "desc": "Double door stainless steel wall-mounted enclosure for large installations with limited front access.",
        "features": [
          "Grade: AISI 304L or 316L stainless steel",
          "Rating: IP55 / Type 12 / IK10",
          "Door: double, three-point espagnolette locking, concealed SS hinges",
          "Mount: wall",
          "Sizes: 1000x800 up to 1200x1200 mm, depth 300 to 400 mm"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-ADR1001030.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine nVent Hoffman",
        "text": "Authentic nVent Hoffman products with full manufacturer warranty."
      },
      {
        "title": "No.1 Channel Partner",
        "text": "SSC Control has been nVent Hoffman's No.1 channel partner since 2006."
      },
      {
        "title": "Stock & Project Support",
        "text": "Ready availability and project support from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Enclosure Sizing",
        "text": "Selection, sizing and accessory support from our engineering team."
      }
    ],
    "ctaTitle": "Looking for a nVent Hoffman enclosure?",
    "ctaText": "Our team can size the enclosure, material and protection rating for your panel build."
  },
  "nvent/ss-floor-standing": {
    "brandSlug": "nvent",
    "slug": "ss-floor-standing",
    "category": "Stainless Steel Floor Standing",
    "label": "SS Floor Standing",
    "title": "Stainless Steel",
    "titleEm": "Floor Standing Enclosures",
    "tagline": "Compact and modular stainless floor-standing enclosures.",
    "intro": "nVent Hoffman is a global leader in enclosures and protection for electrical infrastructure. SSC Control, nVent Hoffman's No.1 channel partner since 2006, supplies the full range with genuine products, warranty and complete project support across Gujarat and India.",
    "heroImage": "https://rspsupply.com/images/product/medium/Hoffman-A62H4812SSLP3PT.jpg",
    "seriesLabel": "Floor Standing Lineup",
    "seriesTitle": "Stainless Steel Floor Standing Series",
    "series": [
      {
        "name": "EKSS Single Door",
        "tag": "304 / 316L SS, IP66",
        "desc": "Compact one-piece single door stainless steel floor-standing enclosure with internal mounting plate.",
        "features": [
          "Grade: AISI 304L or 316L stainless steel",
          "Rating: IP66 / Type 4X / IK10",
          "Door: single, concealed SS hinges, multi-point locking",
          "Mount: floor, compact one-piece",
          "Sizes: 1400x600 up to 2000x800 mm, depth 300 to 500 mm"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-EKSS18084.jpg"
      },
      {
        "name": "EKDS Double Door",
        "tag": "304 / 316L SS, IP55",
        "desc": "Compact double door stainless steel floor-standing enclosure for confined spaces.",
        "features": [
          "Grade: AISI 304L or 316L stainless steel",
          "Rating: IP55 / Type 12 / IK10",
          "Door: double, three-point espagnolette locking",
          "Mount: floor, compact one-piece",
          "Sizes: 1400x1000 up to 2000x1200 mm, depth 400 to 500 mm"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-EKDS16124.jpg"
      },
      {
        "name": "MCSS Single Door",
        "tag": "304 / 316L SS, IP55",
        "desc": "Modular combinable single door stainless steel floor-standing enclosure, bayable for multi-bay lineups.",
        "features": [
          "Grade: AISI 304L or 316L stainless steel",
          "Rating: IP55 / Type 12 / IK10",
          "Door: single, modular and bayable frame",
          "Mount: floor, combinable",
          "Sizes: 1800x600 up to 2200x800 mm, depth 400 to 800 mm"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-A62H4812SSLP3PT.jpg"
      },
      {
        "name": "MCDS Double Door",
        "tag": "304 / 316L SS, IP55",
        "desc": "Modular combinable double door stainless steel floor-standing enclosure for multi-bay lineups.",
        "features": [
          "Grade: AISI 304L or 316L stainless steel",
          "Rating: IP55 / Type 12 / IK10",
          "Door: double, modular and bayable frame",
          "Mount: floor, combinable",
          "Sizes: 1800x1000 up to 2200x1200 mm, depth 400 to 800 mm"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-A62H4812SSLP3PT.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine nVent Hoffman",
        "text": "Authentic nVent Hoffman products with full manufacturer warranty."
      },
      {
        "title": "No.1 Channel Partner",
        "text": "SSC Control has been nVent Hoffman's No.1 channel partner since 2006."
      },
      {
        "title": "Stock & Project Support",
        "text": "Ready availability and project support from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Enclosure Sizing",
        "text": "Selection, sizing and accessory support from our engineering team."
      }
    ],
    "ctaTitle": "Looking for a nVent Hoffman enclosure?",
    "ctaText": "Our team can size the enclosure, material and protection rating for your panel build."
  },
  "nvent/junction-boxes": {
    "brandSlug": "nvent",
    "slug": "junction-boxes",
    "category": "Junction Boxes",
    "label": "Field Junction Boxes",
    "title": "Terminal &",
    "titleEm": "Junction Boxes",
    "tagline": "Steel and stainless terminal boxes up to IP66.",
    "intro": "nVent Hoffman is a global leader in enclosures and protection for electrical infrastructure. SSC Control, nVent Hoffman's No.1 channel partner since 2006, supplies the full range with genuine products, warranty and complete project support across Gujarat and India.",
    "heroImage": "https://rspsupply.com/images/product/medium/Hoffman-Q402013PCICC.jpg",
    "seriesLabel": "Junction Box Lineup",
    "seriesTitle": "Terminal Box Series",
    "series": [
      {
        "name": "STB Steel Terminal Box",
        "tag": "Mild steel, IP66",
        "desc": "Folded and seam-welded mild steel terminal and junction box rated IP66 with a one-piece polyurethane gasket.",
        "features": [
          "Material: 1.2 mm mild steel, light gray powder coat",
          "Rating: IP66 / Type 4, 12 / IK08, cUL Listed",
          "Mounting: wall, plain sides for glands and knockouts",
          "Sizes: 150x150x80 up to 400x400x120 mm and above"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-STB204012.jpg"
      },
      {
        "name": "SSTB Stainless Terminal Box",
        "tag": "Stainless, IP66 / 4X",
        "desc": "Folded and seam-welded stainless steel terminal and junction box for corrosion-prone indoor and outdoor use.",
        "features": [
          "Material: AISI 304L (1 mm body, 1.5 mm cover), 316L on request",
          "Rating: IP66 / Type 4X, 12 / IK08",
          "Mounting: wall, brushed finish, M8 earth studs",
          "Sizes: 150x150x80 up to 400x400x120 mm and above"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-SSTB202008.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine nVent Hoffman",
        "text": "Authentic nVent Hoffman products with full manufacturer warranty."
      },
      {
        "title": "No.1 Channel Partner",
        "text": "SSC Control has been nVent Hoffman's No.1 channel partner since 2006."
      },
      {
        "title": "Stock & Project Support",
        "text": "Ready availability and project support from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Enclosure Sizing",
        "text": "Selection, sizing and accessory support from our engineering team."
      }
    ],
    "ctaTitle": "Looking for a nVent Hoffman enclosure?",
    "ctaText": "Our team can size the enclosure, material and protection rating for your panel build."
  },
  "nvent/desk-panels": {
    "brandSlug": "nvent",
    "slug": "desk-panels",
    "category": "Desk Panels & Control Consoles",
    "label": "Operator Desk Panels",
    "title": "Operator",
    "titleEm": "Desks & Consoles",
    "tagline": "One-piece and combinable operator consoles for HMI.",
    "intro": "nVent Hoffman is a global leader in enclosures and protection for electrical infrastructure. SSC Control, nVent Hoffman's No.1 channel partner since 2006, supplies the full range with genuine products, warranty and complete project support across Gujarat and India.",
    "heroImage": "https://rspsupply.com/images/product/medium/Hoffman-PGLD12135DC.jpg",
    "seriesLabel": "Console Lineup",
    "seriesTitle": "Desk & Console Series",
    "series": [
      {
        "name": "MPG",
        "tag": "One-piece desk console",
        "desc": "Off-the-shelf one-piece operator desk console in mild steel with a hinged desk panel for ergonomic HMI access.",
        "features": [
          "Type: one-piece desk console",
          "Material: 1.5 mm mild steel body, 2.5 mm galvanised mounting plate",
          "Finish: RAL 7035",
          "Rating: IP66 single door, IP55 double door",
          "Sizes: 985 mm high, 400 mm deep, widths 800 to 1600 mm"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-MPG12R5.jpg"
      },
      {
        "name": "MPC",
        "tag": "Combinable console system",
        "desc": "Combinable modular console system with interchangeable top, desk and base sections that bay together.",
        "features": [
          "Type: combinable modular console, bayable",
          "Material: 1.5 mm mild steel body and door",
          "Finish: RAL 7035",
          "Rating: IP66 single door, IP55 double door, IK10",
          "Sections: top, desk and base with integrated plinth"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-MPC081R5.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine nVent Hoffman",
        "text": "Authentic nVent Hoffman products with full manufacturer warranty."
      },
      {
        "title": "No.1 Channel Partner",
        "text": "SSC Control has been nVent Hoffman's No.1 channel partner since 2006."
      },
      {
        "title": "Stock & Project Support",
        "text": "Ready availability and project support from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Enclosure Sizing",
        "text": "Selection, sizing and accessory support from our engineering team."
      }
    ],
    "ctaTitle": "Need an operator console?",
    "ctaText": "Our team can configure the desk, console and HMI layout for your workstation."
  },
  "nvent/hazardous-area": {
    "brandSlug": "nvent",
    "slug": "hazardous-area",
    "category": "Hazardous Area Enclosures, ZoneX",
    "label": "Ex Zone Enclosures",
    "title": "ZonEx",
    "titleEm": "Hazardous Area Enclosures",
    "tagline": "ATEX and IECEx enclosures for Zone 1, 2, 21 and 22.",
    "intro": "nVent Hoffman is a global leader in enclosures and protection for electrical infrastructure. SSC Control, nVent Hoffman's No.1 channel partner since 2006, supplies the full range with genuine products, warranty and complete project support across Gujarat and India.",
    "heroImage": "https://rspsupply.com/images/product/medium/Hoffman-ATEX262616SS61.jpg",
    "seriesLabel": "ZonEx Lineup",
    "seriesTitle": "Hazardous Area Series",
    "series": [
      {
        "name": "ZonEx EXE Stainless",
        "tag": "316 SS, ATEX Zone 1/2",
        "desc": "Type 316 stainless steel ZonEx wall-mount enclosure with single gland plate for hazardous-area terminations.",
        "features": [
          "Material: Type 316 stainless steel",
          "Certification: ATEX / IECEx",
          "Zones: 1 / 2",
          "Protection: Ex e increased safety",
          "Rating: IP66 / Type 4X"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-EXE20208SS61.jpg"
      },
      {
        "name": "ZonEx ATEX Stainless",
        "tag": "316 SS, ATEX Zone 1/2",
        "desc": "Type 316 stainless steel ZonEx enclosure with one or three gland plates and lift-off hinged covers.",
        "features": [
          "Material: Type 316 stainless steel",
          "Certification: ATEX / IECEx",
          "Zones: 1 / 2",
          "Protection: Ex e increased safety",
          "Rating: IP66 / Type 4, 4X, 12"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-ATEX262616SS61.jpg"
      },
      {
        "name": "ZonEx GRP Non-Metallic",
        "tag": "GRP, ATEX Zone 1/2",
        "desc": "Compression-moulded fibreglass-reinforced polyester terminal enclosure resisting corrosive contaminants.",
        "features": [
          "Material: GRP, fibreglass-reinforced polyester",
          "Certification: ATEX / IECEx",
          "Zones: 1 / 2",
          "Protection: Ex e increased safety",
          "Rating: IP66"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-EXE12212090.jpg"
      },
      {
        "name": "ZonEx SA Aluminium",
        "tag": "Aluminium, Zone 1/2/21/22",
        "desc": "Low-copper aluminium alloy ZonEx enclosure with epoxy coating, rated for both gas and dust zones.",
        "features": [
          "Material: low-copper aluminium alloy, epoxy coated",
          "Certification: ATEX / IECEx",
          "Zones: 1 / 2 / 21 / 22",
          "Protection: Ex e increased safety",
          "Rating: IP66"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-SA202012.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine nVent Hoffman",
        "text": "Authentic nVent Hoffman products with full manufacturer warranty."
      },
      {
        "title": "No.1 Channel Partner",
        "text": "SSC Control has been nVent Hoffman's No.1 channel partner since 2006."
      },
      {
        "title": "Stock & Project Support",
        "text": "Ready availability and project support from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Enclosure Sizing",
        "text": "Selection, sizing and accessory support from our engineering team."
      }
    ],
    "ctaTitle": "Need a hazardous-area enclosure?",
    "ctaText": "Our team can match material, certification and zone rating to your Ex application."
  },
  "nvent/industrial-pc": {
    "brandSlug": "nvent",
    "slug": "industrial-pc",
    "category": "Industrial Computer Enclosures",
    "label": "MS Industrial PC Enclosures",
    "title": "Industrial",
    "titleEm": "Computer Enclosures",
    "tagline": "Mild steel enclosures for industrial PCs and HMI.",
    "intro": "nVent Hoffman is a global leader in enclosures and protection for electrical infrastructure. SSC Control, nVent Hoffman's No.1 channel partner since 2006, supplies the full range with genuine products, warranty and complete project support across Gujarat and India.",
    "heroImage": "https://rspsupply.com/images/product/medium/Hoffman-PPC1666.jpg",
    "seriesLabel": "Computer Enclosure Lineup",
    "seriesTitle": "Industrial PC Series",
    "series": [
      {
        "name": "MCM Computer Workstation",
        "tag": "Mild steel, IP44",
        "desc": "Mild steel floor-standing industrial computer enclosure with integrated accessories and a glazed monitor viewing door.",
        "features": [
          "Type: industrial computer / workstation enclosure",
          "Material: mild steel, RAL 7035 structured powder coat",
          "Rating: IP44, safety-glass viewing door",
          "Features: PC, keyboard and monitor provisions, glazed top door for 14 to 21 inch monitors",
          "Mount: floor-standing single bay"
        ],
        "image": "https://rspsupply.com/images/product/medium/Hoffman-PPC1666.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine nVent Hoffman",
        "text": "Authentic nVent Hoffman products with full manufacturer warranty."
      },
      {
        "title": "No.1 Channel Partner",
        "text": "SSC Control has been nVent Hoffman's No.1 channel partner since 2006."
      },
      {
        "title": "Stock & Project Support",
        "text": "Ready availability and project support from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Enclosure Sizing",
        "text": "Selection, sizing and accessory support from our engineering team."
      }
    ],
    "ctaTitle": "Need an industrial PC enclosure?",
    "ctaText": "Our team can specify the computer enclosure, monitor window and cooling for your setup."
  },
  "nvent/panel-accessories": {
    "brandSlug": "nvent",
    "slug": "panel-accessories",
    "category": "Panel Accessories",
    "label": "Panel Accessories",
    "title": "Panel",
    "titleEm": "Accessories & Hardware",
    "tagline": "Climate, lighting, locks, hinges and panel hardware.",
    "intro": "nVent Hoffman is a global leader in enclosures and protection for electrical infrastructure. SSC Control, nVent Hoffman's No.1 channel partner since 2006, supplies the full range with genuine products, warranty and complete project support across Gujarat and India.",
    "heroImage": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/e997af57-bc4e-42bb-852d-4d6eb6f880c0/d724d76c-6d93-45e6-b2f1-d17fb0b821b3.png.webp?itok=fugJcTsS",
    "seriesLabel": "Accessory Range",
    "seriesTitle": "Panel Accessories & Hardware",
    "series": [
      {"name": "Enclosure Handles", "tag": "Door handles", "desc": "Door handles and locking swing handles for enclosure doors, including padlockable and comfort grip designs.", "features": ["Swing and lever handles", "Locking and padlockable options", "Comfort grip designs"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/e997af57-bc4e-42bb-852d-4d6eb6f880c0/d724d76c-6d93-45e6-b2f1-d17fb0b821b3.png.webp?itok=fugJcTsS"},
      {"name": "Enclosure Lighting", "tag": "LED lights", "desc": "LED enclosure lights that illuminate panels, with switch and motion sensor options and tool free mounting.", "features": ["LED interior lights", "Switch or motion sensor", "Tool free mounting"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/22b391f2-13d0-498a-9820-b8371989a30b/a648cb17-da08-45ba-9393-eba89d6a5aec.png.webp?itok=M5OUkpRA"},
      {"name": "Enclosure Climate Control Accessories", "tag": "Thermal management", "desc": "Climate control accessories including filter fans, heaters, thermostats and heat exchangers for enclosure cooling and heating.", "features": ["Filter fans and heaters", "Thermostats and hygrostats", "Heat exchangers and filters"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/47e8bf2a-0d58-427a-a66f-971029ccca2d/fd104b95-cb0b-425f-b6c5-bca20213491d.png.webp?itok=LozHBAkX"},
      {"name": "Filter Fans", "tag": "Forced ventilation", "desc": "Filter fans and exhaust filters that push filtered air through the enclosure to remove internal heat.", "features": ["Forced air ventilation", "Exhaust filters and filter mats", "IP54 and IP55 options"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/6b07d97a-ca69-4978-b634-c86f5fffd4ac/82339ce7-2d7f-44f3-a0de-0ffe4f435781.png.webp?itok=qlhnqMzu"},
      {"name": "Thermostats & Hygrostats", "tag": "Climate control", "desc": "Thermostats and hygrostats such as the ETF300 that switch heaters and fans to manage enclosure temperature and humidity.", "features": ["Electronic thermostat and hygrostat", "Switches fans, heaters or alarms", "DIN rail mounting"], "image": ""},
      {"name": "Enclosure Mounting", "tag": "Mounting kits", "desc": "Mounting accessories for wall, pole and floor installation of enclosures, including brackets, feet and stands.", "features": ["Wall and pole mounting", "Brackets and feet", "Floor stands"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/4a2709aa-e6a7-4d6d-9796-b994ef7b2c8b/536eace5-246d-47b9-a82b-de4e671d4f14.png.webp?itok=Ky7AMb5W"},
      {"name": "Enclosure Plates", "tag": "Mounting plates", "desc": "Mounting and gland plates for component mounting and cable entry, in steel and stainless steel.", "features": ["Mounting and gland plates", "Pre punched options", "Steel and stainless"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/fa6b2583-1025-4ac8-bb37-a5482c22a7b0/c27f832d-ca07-42b4-9c95-20588a19df26.png.webp?itok=zFZGJuNA"},
      {"name": "Cover Plates", "tag": "Sealing plates", "desc": "Blank and gland cover plates that seal unused openings and finish the enclosure.", "features": ["Blank and gland covers", "Seal unused openings", "Steel and stainless options"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/6df9ed1f-89ad-461b-aa70-a193473b372d/2584956f-81d7-45b0-93d4-b27d00248a08.png.webp?itok=Vhmy5GkJ"},
      {"name": "Enclosure Electrical Hardware", "tag": "Earthing & fixings", "desc": "Electrical hardware for earthing, bonding and internal wiring fixings inside the enclosure.", "features": ["Earthing and bonding parts", "Electrical fixings", "Internal wiring hardware"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/88c69e2a-82bf-4c3b-976b-59ebc6364195/cbaa806b-7e23-4734-9957-c06f03a86308.png.webp?itok=1WEYFatz"},
      {"name": "Enclosure Fixing Hardware", "tag": "Fasteners", "desc": "Fixing hardware including screws, nuts, fasteners and assembly components for enclosures.", "features": ["Screws, nuts and fasteners", "Mounting hardware", "Assembly components"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/95ccef9c-ad55-425a-afc5-9491541d3613/99feec22-2258-44d8-9e1a-93063596cdea.png.webp?itok=bvLBGLuJ"},
      {"name": "Grid Straps", "tag": "Component fixing", "desc": "Grid straps for fixing cables and components and for flexible internal routing.", "features": ["Component grid straps", "Cable and part fixing", "Flexible routing"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/ba00735e-e277-4eea-8cec-7631de2a2f5c/31366cd1-6a53-4ada-aa72-58c3dadedc49.png.webp?itok=lQ5q6-tr"},
      {"name": "Inserts", "tag": "Inserts", "desc": "Threaded, snap and cable inserts with sealing options for enclosure walls and plates.", "features": ["Threaded and snap inserts", "Cable and gland inserts", "Sealing options"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/76441a04-4e82-4fb3-b3e9-b89a3f106e74/141752b3-1713-444b-b15e-633d0ee2c8fd.png.webp?itok=4bkzUw2M"},
      {"name": "Enclosure Accessories", "tag": "General parts", "desc": "General enclosure accessories and internal fittings across a wide range of options.", "features": ["General enclosure parts", "Internal fittings", "Wide range of options"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/2d5129ef-08ff-4612-9df0-52450ff84f31/b18c050d-2fbd-4666-859c-46a691a18a80.png.webp?itok=zxEOPVlR"},
      {"name": "Enclosure Drawers", "tag": "Storage", "desc": "Pull out drawers for documents and tools that mount inside the enclosure.", "features": ["Pull out storage drawers", "For documents and tools", "Mounts inside enclosures"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/4fea90f0-b511-48af-b716-dade10dde879/5f2fff46-866e-414f-a4ae-2dd40c3198d9.png.webp?itok=NnwXYBTY"},
      {"name": "Enclosure Lifting Devices", "tag": "Lifting", "desc": "Eyebolts and lifting brackets for safe handling and installation of enclosures.", "features": ["Eyebolts and lifting brackets", "Safe enclosure handling", "High load rated"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/5b171790-6837-457d-a683-3abc31ebe91b/e91e4164-2d3d-4c3b-b7d4-369ee574a486.png.webp?itok=UqJPaTp-"},
      {"name": "Caster Kits", "tag": "Mobility", "desc": "Caster kits that add swivel and fixed wheels for moving enclosures, with load rated wheels.", "features": ["Swivel and fixed casters", "Mobility for enclosures", "Load rated wheels"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/ee960387-d698-44bf-bf08-54bcf7da996f/05a84684-a6ff-4c94-9ee3-b3edd886a4ce.png.webp?itok=wzE5Zij2"},
      {"name": "Plinth Bases", "tag": "Plinth bases", "desc": "Plinth bases that raise floor standing enclosures and provide cable entry access at the base.", "features": ["Enclosure plinth bases", "Raise floor standing units", "Cable entry access"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/359adb32-ebd4-496b-8e03-4573d05a949a/d3cba266-3374-489b-9c50-c5414549a197.png.webp?itok=CZHUvcpD"},
      {"name": "Enclosure Paint", "tag": "Touch up paint", "desc": "Touch up paint in RAL matched finishes for corrosion protection and repair of enclosures.", "features": ["Touch up paint", "RAL matched finishes", "Corrosion protection"], "image": "https://www.nvent.com/sites/default/files/styles/convert_only/public/acquia_dam_thumbnails/32efdc18-7154-4085-b27c-94fc91be5fa7/7410fd05-2fc0-4df2-9cb3-00efac70cb09.png.webp?itok=RHEoRS-X"}
    ],
    "highlights": [
      {
        "title": "Genuine nVent Hoffman",
        "text": "Authentic nVent Hoffman products with full manufacturer warranty."
      },
      {
        "title": "No.1 Channel Partner",
        "text": "SSC Control has been nVent Hoffman's No.1 channel partner since 2006."
      },
      {
        "title": "Stock & Project Support",
        "text": "Ready availability and project support from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Enclosure Sizing",
        "text": "Selection, sizing and accessory support from our engineering team."
      }
    ],
    "ctaTitle": "Need panel accessories?",
    "ctaText": "Our team can specify climate control, lighting, locks, hinges and hardware to match your enclosure build."
  },
  "unison/single-phase-ssr": {
    "brandSlug": "unison",
    "slug": "single-phase-ssr",
    "category": "Single Phase Solid State Relays",
    "label": "1-Phase SSR",
    "title": "Single Phase",
    "titleEm": "Solid State Relays",
    "tagline": "Zero cross SSRs from 25A to 200A for single phase loads.",
    "intro": "Unison is an Indian manufacturer of solid state relays and thyristor power controllers for industrial heating and process control, with no moving parts. SSC Control is an authorised Unison partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "",
    "seriesLabel": "SSR Lineup",
    "seriesTitle": "Single Phase SSR Models",
    "series": [
      {
        "name": "Model 101",
        "tag": "25A, 45mm",
        "desc": "45mm single phase zero cross solid state relay rated 25A for panel or DIN rail mounting.",
        "features": [
          "Load: 25 A",
          "Output: 24 to 480 V AC",
          "Input: 4 to 32 V DC",
          "Switching: zero cross",
          "Width: 45 mm",
          "Mount: panel / DIN rail"
        ],
        "image": ""
      },
      {
        "name": "Model 102",
        "tag": "40A, 45mm",
        "desc": "45mm single phase zero cross solid state relay rated up to 40A.",
        "features": [
          "Load: 40 A",
          "Output: 24 to 480 V AC",
          "Input: 4 to 32 V DC",
          "Switching: zero cross",
          "Width: 45 mm",
          "Mount: panel / DIN rail"
        ],
        "image": ""
      },
      {
        "name": "Model 803",
        "tag": "Up to 200A, 22.5mm",
        "desc": "Slim 22.5mm DIN rail single phase zero cross solid state relay available up to 200A.",
        "features": [
          "Load: 25 to 200 A",
          "Output: 24 to 580 V AC",
          "Input: 4 to 32 V DC",
          "Switching: zero cross",
          "Width: 22.5 mm",
          "Isolation: 8 kV input to output"
        ],
        "image": ""
      }
    ],
    "highlights": [
      {
        "title": "Genuine Unison",
        "text": "Authentic Unison products with full manufacturer warranty."
      },
      {
        "title": "Authorised Unison Partner",
        "text": "SSC Control is an authorised channel partner for Unison."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Application Sizing",
        "text": "SSR and thyristor sizing support from our engineering team."
      }
    ],
    "ctaTitle": "Need a single phase SSR?",
    "ctaText": "Our team can size the relay current, voltage and control for your heating load."
  },
  "unison/three-phase-ssr": {
    "brandSlug": "unison",
    "slug": "three-phase-ssr",
    "category": "Three Phase Solid State Relays",
    "label": "3-Phase SSR",
    "title": "Three Phase",
    "titleEm": "Solid State Relays",
    "tagline": "Three phase SSR modules and solid state starters.",
    "intro": "Unison is an Indian manufacturer of solid state relays and thyristor power controllers for industrial heating and process control, with no moving parts. SSC Control is an authorised Unison partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "",
    "seriesLabel": "SSR Lineup",
    "seriesTitle": "Three Phase SSR Models",
    "series": [
      {
        "name": "Model 901",
        "tag": "200A, 45mm",
        "desc": "Three phase 45mm zero cross solid state relay, up to 200A per phase for industrial AC switching.",
        "features": [
          "Load: up to 200 A per phase",
          "Output: 24 to 600 V AC",
          "Input: 4 to 32 V DC, AC control option",
          "Switching: zero cross, random variant",
          "Width: 45 mm",
          "Mount: panel with heat sink"
        ],
        "image": ""
      },
      {
        "name": "Model 905",
        "tag": "Current detection, DOL",
        "desc": "Three phase zero cross SSR with built in current detection, acting as a solid state DOL starter with overload and single phasing protection.",
        "features": [
          "Built in voltage and current detection",
          "Overload protection set by potentiometer",
          "Single phasing, unbalance and short circuit protection",
          "Fault feedback via LED and relay NO / NC",
          "Output: 24 to 480 V AC",
          "Switching: zero cross"
        ],
        "image": ""
      }
    ],
    "highlights": [
      {
        "title": "Genuine Unison",
        "text": "Authentic Unison products with full manufacturer warranty."
      },
      {
        "title": "Authorised Unison Partner",
        "text": "SSC Control is an authorised channel partner for Unison."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Application Sizing",
        "text": "SSR and thyristor sizing support from our engineering team."
      }
    ],
    "ctaTitle": "Need a three phase SSR?",
    "ctaText": "Our team can size the relay and protection for your three phase load or motor."
  },
  "unison/thyristor-controllers": {
    "brandSlug": "unison",
    "slug": "thyristor-controllers",
    "category": "Thyristor Power Controllers",
    "label": "SCR Power Controllers",
    "title": "Thyristor",
    "titleEm": "Power Controllers",
    "tagline": "Phase angle SCR controllers and temperature controllers.",
    "intro": "Unison is an Indian manufacturer of solid state relays and thyristor power controllers for industrial heating and process control, with no moving parts. SSC Control is an authorised Unison partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "",
    "seriesLabel": "Controller Lineup",
    "seriesTitle": "Power & Temperature Controllers",
    "series": [
      {
        "name": "Model 901 Thyristor Controller",
        "tag": "SCR Power Controller",
        "desc": "Microcontroller based single phase thyristor power controller with 4 to 20mA or 0 to 10V input and phase angle firing, from 25A to 200A.",
        "features": [
          "Firing: phase angle control",
          "Load: 25 / 40 / 50 / 90 / 150 / 200 A",
          "Output: 90 to 480 V AC auto detect",
          "Input: 4 to 20 mA or 0 to 10 V DC",
          "Isolation: 6 kV input to output",
          "45mm body, DIN rail / panel with heat sink"
        ],
        "image": ""
      },
      {
        "name": "Model 901 Temperature Controller",
        "tag": "Modbus SSR Controller",
        "desc": "Zero cross SSR with inbuilt PID temperature controller and RS485 Modbus communication, networking directly to HMI or PLC.",
        "features": [
          "Inbuilt PID control, heat or heat and cool",
          "Input: J / K thermocouple, RTD optional, with CJC",
          "Communication: RS485 Modbus RTU",
          "Output: 24 to 600 V AC at 90 A, zero cross",
          "External CT for current and load failure indication",
          "45mm body, DIN rail / panel"
        ],
        "image": ""
      }
    ],
    "highlights": [
      {
        "title": "Genuine Unison",
        "text": "Authentic Unison products with full manufacturer warranty."
      },
      {
        "title": "Authorised Unison Partner",
        "text": "SSC Control is an authorised channel partner for Unison."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Application Sizing",
        "text": "SSR and thyristor sizing support from our engineering team."
      }
    ],
    "ctaTitle": "Need a power controller?",
    "ctaText": "Our team can match the thyristor or temperature controller to your process."
  },
  "unison/din-rail-ssr": {
    "brandSlug": "unison",
    "slug": "din-rail-ssr",
    "category": "DIN Rail SSR Modules",
    "label": "DIN Rail SSR",
    "title": "DIN Rail",
    "titleEm": "SSR Modules",
    "tagline": "DIN rail DC to DC SSR cards with short circuit protection.",
    "intro": "Unison is an Indian manufacturer of solid state relays and thyristor power controllers for industrial heating and process control, with no moving parts. SSC Control is an authorised Unison partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "",
    "seriesLabel": "Module Lineup",
    "seriesTitle": "DIN Rail SSR Modules",
    "series": [
      {
        "name": "Model 909 DC to DC SSR Card",
        "tag": "Short Circuit Protect",
        "desc": "DIN rail MOSFET DC to DC solid state relay card with built in short circuit protection that switches DC loads while detecting open load, overcurrent and fault conditions.",
        "features": [
          "Input: 3 to 32 V DC with green control LED",
          "Output: 5 to 55 V DC at 2 A per channel",
          "Red fault LED plus remote PLC indication",
          "Short circuit protection with back EMF diode",
          "Available in 2, 4 and 8 channel versions",
          "DIN rail mountable plug in card"
        ],
        "image": ""
      }
    ],
    "highlights": [
      {
        "title": "Genuine Unison",
        "text": "Authentic Unison products with full manufacturer warranty."
      },
      {
        "title": "Authorised Unison Partner",
        "text": "SSC Control is an authorised channel partner for Unison."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Application Sizing",
        "text": "SSR and thyristor sizing support from our engineering team."
      }
    ],
    "ctaTitle": "Need a DIN rail SSR card?",
    "ctaText": "Our team can specify the channel count and ratings for your PLC outputs."
  },
  "unison/heatsinks": {
    "brandSlug": "unison",
    "slug": "heatsinks",
    "category": "Heatsinks and Accessories",
    "label": "Thermal Accessories",
    "title": "Heatsinks",
    "titleEm": "and Accessories",
    "tagline": "Aluminium heatsinks and thermal accessories for SSRs.",
    "intro": "Unison is an Indian manufacturer of solid state relays and thyristor power controllers for industrial heating and process control, with no moving parts. SSC Control is an authorised Unison partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "",
    "seriesLabel": "Heatsink Lineup",
    "seriesTitle": "Heatsinks & Accessories",
    "series": [
      {
        "name": "Heat Sink G-68",
        "tag": "44mm, DIN rail",
        "desc": "Aluminium SSR heatsink with DIN rail mounting for standard single phase solid state relays.",
        "features": [
          "Extruded aluminium, natural convection",
          "Size: 44 mm W x 68 mm L x 32 mm H",
          "35 mm DIN rail mounting, fan less",
          "Larger fan cooled options for higher current SSRs"
        ],
        "image": ""
      },
      {
        "name": "Heat Sink V-87",
        "tag": "24mm, DIN rail",
        "desc": "Slim aluminium SSR heatsink with DIN rail mounting for narrow single phase relays.",
        "features": [
          "Extruded aluminium construction",
          "Size: 24 mm W x 87 mm L x 30 mm H",
          "35 mm DIN rail mounting, no fan",
          "Matches slim Unison SSR modules"
        ],
        "image": ""
      }
    ],
    "highlights": [
      {
        "title": "Genuine Unison",
        "text": "Authentic Unison products with full manufacturer warranty."
      },
      {
        "title": "Authorised Unison Partner",
        "text": "SSC Control is an authorised channel partner for Unison."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Application Sizing",
        "text": "SSR and thyristor sizing support from our engineering team."
      }
    ],
    "ctaTitle": "Need an SSR heatsink?",
    "ctaText": "Our team can match the heatsink size and cooling to your SSR current."
  },
  "unison/interface-cards": {
    "brandSlug": "unison",
    "slug": "interface-cards",
    "category": "Interface Cards",
    "label": "Interface & Starter Cards",
    "title": "Interface",
    "titleEm": "& Starter Cards",
    "tagline": "Forward reverse, DOL and plug in relay replacement cards.",
    "intro": "Unison is an Indian manufacturer of solid state relays and thyristor power controllers for industrial heating and process control, with no moving parts. SSC Control is an authorised Unison partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "",
    "seriesLabel": "Card Lineup",
    "seriesTitle": "Interface & Starter Cards",
    "series": [
      {
        "name": "Forward Reverse Card",
        "tag": "Motor reversing",
        "desc": "Three phase forward reverse solid state motor starter that switches motor direction with electrical interlock and built in overload and short circuit protection.",
        "features": [
          "Function: 3 phase forward reverse semiconductor starter, two interlocked SSR pairs",
          "Load: up to 5 A, up to 3 HP",
          "Input: DC control, zero cross switching",
          "Output: 24 to 480 V AC, 47 to 63 Hz",
          "Protection: direction interlock, overload, single phasing, short circuit, fault LED with relay contacts",
          "Mount: panel mounting"
        ],
        "image": ""
      },
      {
        "name": "DOL Starter Card",
        "tag": "Direct on line",
        "desc": "Single direction direct on line solid state motor starter giving one direction motor control with adjustable overload protection.",
        "features": [
          "Function: direct on line semiconductor starter, one direction",
          "Load: up to 5 A, up to 3 HP",
          "Input: DC control, zero cross 3 phase SSR",
          "Output: 24 to 480 V AC, 47 to 63 Hz",
          "Protection: overload set by potentiometer, single phasing, short circuit, auto or manual reset, fault LED with NO and NC contacts",
          "Mount: panel mounting"
        ],
        "image": ""
      },
      {
        "name": "DC to AC Interface Card",
        "tag": "Relay card",
        "desc": "Plug in DC to AC SSR interface relay card that replaces mechanical relays with zero cross solid state switching across 2 to 8 channels.",
        "features": [
          "Function: DC to AC interface relay card, 2, 4, 6 or 8 channel, zero cross",
          "Load: 5 A per channel",
          "Input: 4 to 32 V DC, polarity free, green input LED",
          "Output: 24 to 480 V AC, 47 to 63 Hz",
          "Protection: 3 A replaceable fuse per channel with red fail LED",
          "Mount: plug in terminal card"
        ],
        "image": ""
      },
      {
        "name": "DC to DC Interface Card",
        "tag": "MOSFET relay card",
        "desc": "Plug in DC to DC MOSFET interface relay card for fast solid state DC switching across 2 to 8 channels.",
        "features": [
          "Function: DC to DC interface relay card, MOSFET output, 2, 4, 6 or 8 channel, back EMF diode",
          "Load: 5 A per channel",
          "Input: 4 to 32 V DC, green input LED",
          "Output: 5 to 100 V DC, turn on 2.5 ms, turn off 40 us",
          "Protection: 3 A replaceable fuse per channel with red fail LED",
          "Mount: plug in terminal card"
        ],
        "image": ""
      }
    ],
    "highlights": [
      {
        "title": "Genuine Unison",
        "text": "Authentic Unison products with full manufacturer warranty."
      },
      {
        "title": "Authorised Unison Partner",
        "text": "SSC Control is an authorised channel partner for Unison."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Application Sizing",
        "text": "SSR and starter card sizing support from our engineering team."
      }
    ],
    "ctaTitle": "Need an interface or starter card?",
    "ctaText": "Our team can match the forward reverse, DOL or relay replacement card to your control scheme."
  },
  "connectwell/terminal-blocks": {
    "brandSlug": "connectwell",
    "slug": "terminal-blocks",
    "category": "Terminal Blocks",
    "label": "Screw, Spring & Push-in",
    "title": "Terminal",
    "titleEm": "Blocks",
    "tagline": "Feed through, multi level, ground, fuse, disconnect and high current blocks.",
    "intro": "Connectwell is one of India's leading manufacturers of terminal blocks, relays, interface modules, installation accessories and power supplies for control panels. SSC Control is an authorised Connectwell partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CTS_25_UN_1e9543aad2.png",
    "seriesLabel": "Terminal Block Range",
    "seriesTitle": "Terminal Block Types",
    "series": [
      {
        "name": "Feed-through",
        "tag": "CTS / CX / CP",
        "desc": "Feed through terminal blocks in screw clamp (CTS, CY), spring clamp (CX) and push in (CP) styles, 0.2 to 240 sq mm.",
        "features": [
          "0.2 to 240 sq mm",
          "Screw / Spring / Push-in",
          "DIN Rail"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CTS_25_UN_1e9543aad2.png"
      },
      {
        "name": "Multi-connection",
        "tag": "CTC / CMC / CP",
        "desc": "Three and four wire feed through blocks that distribute one potential to several conductors.",
        "features": [
          "3 / 4 Conductor",
          "One Potential",
          "Screw / Push-in"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CMC_2_2_6459cd4f7c.png"
      },
      {
        "name": "Multi-level",
        "tag": "CDL / CYDL / CPDL",
        "desc": "Double and triple level blocks for high density wiring up to 1000V.",
        "features": [
          "2 / 3 Level",
          "High Density",
          "Up to 1000V"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CYDL_2_5_3381ff2904.png"
      },
      {
        "name": "Ground",
        "tag": "CGT / CYG / CTSG",
        "desc": "Yellow green earth blocks with direct DIN rail grounding foot, 0.2 to 10 sq mm.",
        "features": [
          "Earth / Ground",
          "Rail Contact",
          "Yellow Green"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CGT_4_U_c7e9589184.png"
      },
      {
        "name": "Fuse",
        "tag": "CF / CYF / CAFL",
        "desc": "Fuse carrier blocks for 5x20 and 5x25 mm cartridge fuses, with optional blown fuse LED.",
        "features": [
          "Fuse Carrier",
          "5x20 / 5x25 mm",
          "Blown Fuse LED"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/cf4u_2cbeff2a13.png"
      },
      {
        "name": "Disconnect & Test",
        "tag": "CBDT / CYDLK",
        "desc": "Knife disconnect and test blocks for isolating and testing circuits without removing wires.",
        "features": [
          "Knife Disconnect",
          "Test Sockets",
          "Isolation"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CBDT_4_UNSBU_bb25c1fdf0.png"
      },
      {
        "name": "Distribution",
        "tag": "CMDB / CPDB",
        "desc": "Power distribution blocks splitting one incoming feed into many outgoing ways.",
        "features": [
          "Power Distribution",
          "1 In, Many Out",
          "Modular / Push-in"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CDB_6_2_8e9b66eb9a.png"
      },
      {
        "name": "Sensor & Actuator",
        "tag": "CPPT / CP",
        "desc": "Slim push in sensor and actuator blocks for two, three and four wire sensor cabling.",
        "features": [
          "Sensor Wiring",
          "2 / 3 / 4 Wire",
          "Push-in"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CPPT_2_5_4_95ce43a466.png"
      },
      {
        "name": "Marshalling",
        "tag": "CP4L / CP8L",
        "desc": "Multi level push in marshalling blocks connecting many wires per block for signal marshalling.",
        "features": [
          "Marshalling",
          "Multi Level",
          "High Density"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/cp8l32_dadb6d1649.png"
      },
      {
        "name": "High Current",
        "tag": "CBB",
        "desc": "Stud and bolt busbar blocks for ring and fork lug connection up to 185 sq mm, 1000V.",
        "features": [
          "Stud / Bolt",
          "Up to 185 sq mm",
          "Lug Connection"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CBB_120_da2f777d9f.png"
      },
      {
        "name": "Miniature",
        "tag": "CMT / CGMT",
        "desc": "Micro terminal blocks for DIN 15 rail in junction boxes and tight spaces.",
        "features": [
          "Miniature",
          "DIN 15 Rail",
          "Junction Box"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CMT_4_c46b8db575.png"
      },
      {
        "name": "Panel Mount",
        "tag": "CMB / CM4S",
        "desc": "Surface and panel mount blocks that screw directly to the panel, in screw or spring clamp.",
        "features": [
          "Panel Mount",
          "Screw / Spring",
          "Stackable"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CMB_4_58b72a97f1.png"
      },
      {
        "name": "Thermocouple",
        "tag": "CTT",
        "desc": "Thermocouple blocks with matched alloy elements per DIN 43713 for J, K and T types.",
        "features": [
          "Thermocouple",
          "Matched Alloy",
          "J / K / T Type"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CTT_2_5_U_fafd4c1d8b.png"
      },
      {
        "name": "Electronic / Component Carriers",
        "tag": "CDL ELD / CYDL ED",
        "desc": "Double level blocks with built in LED or diode components for supply on indication.",
        "features": [
          "Built-in LED / Diode",
          "Supply Indication",
          "Double Level"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CYDL_4_E_D2_0a35b63169.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine Connectwell",
        "text": "Authentic Connectwell products with full manufacturer warranty."
      },
      {
        "title": "Authorised Partner",
        "text": "SSC Control is an authorised Connectwell channel partner."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Panel Build Support",
        "text": "Terminal and panel selection support from our engineering team."
      }
    ],
    "ctaTitle": "Need a terminal block?",
    "ctaText": "Our team can size the terminal type, wire range and accessories for your panel."
  },
  "connectwell/interfacing-solutions": {
    "brandSlug": "connectwell",
    "slug": "interfacing-solutions",
    "category": "Interfacing Solutions",
    "label": "Relays & Interface",
    "title": "Interfacing",
    "titleEm": "Solutions",
    "tagline": "Modular and slim relays, relay interface boards and connector modules.",
    "intro": "Connectwell is one of India's leading manufacturers of terminal blocks, relays, interface modules, installation accessories and power supplies for control panels. SSC Control is an authorised Connectwell partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CIMRE_2_SS_8_0fd0bcf805.png",
    "seriesLabel": "Interfacing Range",
    "seriesTitle": "Interfacing Solutions",
    "series": [
      {
        "name": "Modular Relays",
        "tag": "IMMR / IMRE / IMERS",
        "desc": "DIN rail electromechanical and solid state modular relay modules, 1 to 16 channels.",
        "features": [
          "EMR / SSR",
          "1 to 16 Channel",
          "DIN Rail"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/IMRE_1_F_1_ce550c7c2a.png"
      },
      {
        "name": "Slim Relays",
        "tag": "CSR / CSER / IMSR",
        "desc": "6 mm slim relays with push in or screw connection, 1CO and 2CO.",
        "features": [
          "6 mm Slim",
          "1CO / 2CO",
          "Push-in / Screw"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/slimrelay1_6e1f39d5ed.png"
      },
      {"name": "Glass Relays", "tag": "CRLA / CRMA", "desc": "Glass encapsulated PCB relays with transparent housing for visual coil status, in single and double pole versions.", "features": ["Glass encapsulated, transparent body", "Type: SPDT / DPDT", "Mount: PCB or socket", "Coil: 6 to 230V"], "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CRLA_2_S230_A_51d340b2fa.png"},
      {
        "name": "Relay Interface Boards",
        "tag": "CIMRE / IMRE / IMERF",
        "desc": "Relay interface boards with PLC ready wiring and optional fuse protection.",
        "features": [
          "PLC Interface",
          "Multi Channel",
          "Optional Fuse"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CIMRE_2_SS_8_0fd0bcf805.png"
      },
      {
        "name": "Connector to Connector Modules",
        "tag": "IDC / FRC",
        "desc": "IDC and FRC ribbon cable connector modules linking PLC connectors to field wiring.",
        "features": [
          "IDC / FRC",
          "Ribbon Cable",
          "PLC Link"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/IMIDC_db9c5cce14.png"
      },
      {
        "name": "Passive & Protection Modules",
        "tag": "RC / IMCC",
        "desc": "Passive and protection modules such as RC snubbers and component carriers for surge and signal conditioning.",
        "features": [
          "RC Snubber",
          "Protection",
          "Signal Conditioning"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/rcmodules_16x9_25a241cfcd.png"
      },
      {
        "name": "Custom Interface Modules",
        "tag": "Built to Order",
        "desc": "Built to order interface modules configured to the customer wiring and control requirement.",
        "features": [
          "Built to Order",
          "Custom Wiring",
          "OEM"
        ],
        "image": ""
      }
    ],
    "highlights": [
      {
        "title": "Genuine Connectwell",
        "text": "Authentic Connectwell products with full manufacturer warranty."
      },
      {
        "title": "Authorised Partner",
        "text": "SSC Control is an authorised Connectwell channel partner."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Panel Build Support",
        "text": "Terminal and panel selection support from our engineering team."
      }
    ],
    "ctaTitle": "Need a relay or interface module?",
    "ctaText": "Our team can match the relay, interface board or connector module to your control scheme."
  },
  "connectwell/installation-products": {
    "brandSlug": "connectwell",
    "slug": "installation-products",
    "category": "Installation Products",
    "label": "Rails, Clamps & Tools",
    "title": "Installation",
    "titleEm": "Products",
    "tagline": "DIN rails, end clamps, markers, covers, sockets and assembly tools.",
    "intro": "Connectwell is one of India's leading manufacturers of terminal blocks, relays, interface modules, installation accessories and power supplies for control panels. SSC Control is an authorised Connectwell partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/MC_12_3934afeda7.png",
    "seriesLabel": "Installation Range",
    "seriesTitle": "Installation Products",
    "series": [
      {
        "name": "DIN Rails & Supports",
        "tag": "CSP / CPS",
        "desc": "DIN 15, 32 and 35 rails with support and holding plates.",
        "features": [
          "DIN 15 / 32 / 35",
          "Rails",
          "Supports"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/DIN_35_slotted_39db44b1ac.png"
      },
      {
        "name": "End Clamps",
        "tag": "CA",
        "desc": "Screw and snap on end clamps that lock terminal assemblies on the rail.",
        "features": [
          "End Clamp",
          "Screw / Snap-on",
          "DIN Rail"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CA_502_3bc90e8914.png"
      },
      {
        "name": "Lightetch Laser Marking System",
        "tag": "Lightetch",
        "desc": "Lightetch laser marking system that prints terminal and cable markers with no consumables.",
        "features": [
          "Laser Marking",
          "Zero Consumable",
          "Markers"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/lightetch_printing_e2b51171c1.jpg"
      },
      {
        "name": "Group Carriers & Markers",
        "tag": "Markers",
        "desc": "Group marker carriers and marker tags for labelling terminal groups on the rail.",
        "features": [
          "Group Marker",
          "Carriers",
          "Labelling"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/MC_12_3934afeda7.png"
      },
      {
        "name": "Professional Tools",
        "tag": "Tools",
        "desc": "Screwdrivers, marking and wiring tools for terminal block assembly and maintenance.",
        "features": [
          "Screwdrivers",
          "Marking Tools",
          "Wiring"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/sca_assembly_5feedaf047.png"
      },
      {
        "name": "Protective Covers & Supports",
        "tag": "CTSPC / CDTPC",
        "desc": "End covers, partition plates and protective covers for terminal assemblies.",
        "features": [
          "End Covers",
          "Partitions",
          "Protection"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/CTSPC_760mm_2369fd96c2.png"
      },
      {
        "name": "DIN Rail Sockets",
        "tag": "CDS Series",
        "desc": "Connectwell CDS series DIN rail mounted utility power outlets for control panels, in India, Schuko and UK socket versions with built in switch.",
        "features": [
        "Series: CDS, CDSIN India, CDSSH Schuko, CDSUK UK",
        "Built in switch for on or off disconnection",
        "UK version 13A at 220 to 240V, Schuko earth first contact",
        "LED indication and fuse terminal options"
      ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/Din_Socket_1_1c1f7c1fff.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine Connectwell",
        "text": "Authentic Connectwell products with full manufacturer warranty."
      },
      {
        "title": "Authorised Partner",
        "text": "SSC Control is an authorised Connectwell channel partner."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Panel Build Support",
        "text": "Terminal and panel selection support from our engineering team."
      }
    ],
    "ctaTitle": "Need installation accessories?",
    "ctaText": "Our team can specify rails, clamps, markers and tools for your assembly."
  },
  "connectwell/power-control": {
    "brandSlug": "connectwell",
    "slug": "power-control",
    "category": "Power & Control Solutions",
    "label": "SMPS & Fan Control",
    "title": "Power &",
    "titleEm": "Control Solutions",
    "tagline": "DIN rail SMPS power supplies and fan monitoring and control devices.",
    "intro": "Connectwell is one of India's leading manufacturers of terminal blocks, relays, interface modules, installation accessories and power supplies for control panels. SSC Control is an authorised Connectwell partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/css240_274840e307.png",
    "seriesLabel": "Power & Control Range",
    "seriesTitle": "Power & Control Solutions",
    "series": [
      {
        "name": "Switch Mode Power Supply (SMPS)",
        "tag": "CPSS / CSS / PSS",
        "desc": "DIN rail SMPS and redundancy modules, 24V DC output, 2.5 to 40A.",
        "features": [
          "24V DC",
          "2.5 to 40A",
          "Redundancy"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/css240_274840e307.png"
      },
      {
        "name": "Fan Monitoring & Control Devices",
        "tag": "CFMCD / CFTDPR4",
        "desc": "Microprocessor fan monitoring and control devices with temperature and airflow sensing and alarm.",
        "features": [
          "Fan Monitor",
          "Temp / Airflow",
          "Alarm Output"
        ],
        "image": "https://cw-strapi-prod.s3.ap-south-1.amazonaws.com/cfdtpr4_f652730ae0.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine Connectwell",
        "text": "Authentic Connectwell products with full manufacturer warranty."
      },
      {
        "title": "Authorised Partner",
        "text": "SSC Control is an authorised Connectwell channel partner."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Panel Build Support",
        "text": "Terminal and panel selection support from our engineering team."
      }
    ],
    "ctaTitle": "Need power or fan control?",
    "ctaText": "Our team can size the SMPS and fan monitoring devices for your panel."
  },
  "abb/contactors": {
    "brandSlug": "abb",
    "slug": "contactors",
    "category": "Contactors, A, AX & AF Series",
    "label": "Motor Contactors",
    "title": "ABB",
    "titleEm": "Contactors",
    "tagline": "AF electronic and AX classic contactors, 9A to 2650A.",
    "intro": "ABB is a global leader in electrification and automation, supplying contactors, circuit breakers, switches, metering and control products for industrial and building installations. SSC Control is an authorised ABB partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "https://cdn.productimages.abb.com/1SBC101011V0000_master.png",
    "seriesLabel": "Contactor Lineup",
    "seriesTitle": "ABB Contactor Series",
    "series": [
      {
        "name": "AF09 to AF96 Series",
        "tag": "9 to 96A, electronic coil",
        "desc": "Block contactors with an electronic coil interface that accepts a wide control voltage range, with built in surge suppression for direct motor control.",
        "features": [
          "Rating: 9 to 96 A AC-3, up to 45 kW at 400V",
          "Poles: 3 / 4",
          "Coil: electronic wide band, 24 to 250V AC or DC",
          "Use: motor starting and power switching"
        ],
        "image": "https://cdn.productimages.abb.com/1SBC101011V0000_master.png"
      },
      {
        "name": "AF116 to AF370 Series",
        "tag": "116 to 370A, electronic coil",
        "desc": "Large frame AF contactors with pre mounted auxiliary contacts and double clamp terminals for high power motor and distribution duty.",
        "features": [
          "Rating: 116 to 370 A AC-3, up to 200 kW at 400V",
          "Poles: 3",
          "Coil: electronic wide band, low holding consumption",
          "Use: high power motor control and switching"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000125069_master.jpg"
      },
      {
        "name": "AX Series",
        "tag": "9 to 370A, AC coil",
        "desc": "Classic AC operated block contactors with conventional coils, a cost effective choice for standard three phase motor and power line control.",
        "features": [
          "Rating: 9 to 370 A AC-3, 4 to 200 kW",
          "Poles: 3",
          "Coil: AC operated, single voltage 24 to 400V AC",
          "Use: three phase motor and power circuits up to 690V"
        ],
        "image": "https://cdn.productimages.abb.com/1SBC101031V0014_master.jpg"
      },
      {
        "name": "B6 / B7 Mini Contactors",
        "tag": "9 to 12A, compact",
        "desc": "Miniature 3 pole contactors with low coil consumption and one built in auxiliary contact for compact panels.",
        "features": [
          "Rating: B6 9A, B7 12A AC-3, 4 to 5.5 kW",
          "Poles: 3",
          "Coil: AC or DC operated, 12 to 240V",
          "Use: small motor and resistive load switching"
        ],
        "image": "https://cdn.productimages.abb.com/2CDC211014S0011_master.jpg"
      },
      {"name": "A Series", "tag": "9 to 300A, AC coil", "desc": "Classic AC operated block contactors for switching three phase motors and power circuits across a wide rating span.", "features": ["Rating: 9 to 300 A AC-3, 4 to 160 kW at 400V", "Poles: 3", "Coil: AC operated", "Use: motor control, DOL and star delta starters up to 690V"], "image": "https://cdn.productimages.abb.com/1SBC101492F0014_master.jpg"},
      {"name": "AFS Safety Contactors", "tag": "9 to 96A, mirror contacts", "desc": "AF contactors with mirror and mechanically linked auxiliary contacts dedicated to machine safety applications.", "features": ["Rating: 9 to 96 A AC-3, 4 to 45 kW at 400V", "Poles: 3", "Coil: electronic, 24 to 250V AC or DC", "Feature: mirror and mechanically linked contacts for safety", "Use: machine safety circuits and monitoring"], "image": "https://cdn.productimages.abb.com/9PAA00000154092_master.jpg"},
      {"name": "UA / UA-RA Capacitor Contactors", "tag": "Capacitor duty", "desc": "Three pole contactors for switching capacitor banks, with UA-RA versions adding a damping resistor block to limit inrush current.", "features": ["Rating: capacitor banks 12.5 to 60 kVAr at 400V, UA16 to UA110", "Poles: 3", "Type: capacitor switching with damping resistors", "Use: power factor correction panels and capacitor bank switching"], "image": "https://cdn.productimages.abb.com/1SBC587794F0301_master.jpg"}
    ],
    "highlights": [
      {
        "title": "Genuine ABB",
        "text": "Authentic ABB products with full manufacturer warranty."
      },
      {
        "title": "Authorised Partner",
        "text": "SSC Control is an authorised ABB channel partner."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Selection Support",
        "text": "Switchgear and control selection support from our engineering team."
      }
    ],
    "ctaTitle": "Need a contactor?",
    "ctaText": "Our team can size the contactor rating and coil for your motor or load."
  },
  "abb/manual-motor-starters": {
    "brandSlug": "abb",
    "slug": "manual-motor-starters",
    "category": "Manual Motor Starters",
    "label": "MS132 / MS165 MMS",
    "title": "Manual Motor",
    "titleEm": "Starters",
    "tagline": "MS and MO manual motor starters and protectors, up to 100A.",
    "intro": "ABB is a global leader in electrification and automation, supplying contactors, circuit breakers, switches, metering and control products for industrial and building installations. SSC Control is an authorised ABB partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "https://cdn.productimages.abb.com/9PAA00000366765_master.png",
    "seriesLabel": "MMS Lineup",
    "seriesTitle": "Manual Motor Starter Series",
    "series": [
      {
        "name": "MS116",
        "tag": "0.1 to 32A",
        "desc": "Compact and economic manual motor starter for motor protection up to 32A.",
        "features": [
          "Setting: 0.1 to 32 A",
          "Breaking: 50 kA at 400V",
          "Poles: 3",
          "Terminal: screw",
          "Use: motor protection with built in disconnect"
        ],
        "image": "https://cdn.productimages.abb.com/2CDC241004V0017_master.jpg"
      },
      {
        "name": "MS132",
        "tag": "0.1 to 32A",
        "desc": "Powerful manual motor starter offering very high breaking capacity in a 45mm width.",
        "features": [
          "Setting: 0.1 to 32 A",
          "Breaking: 100 kA at 400V",
          "Poles: 3",
          "Terminal: screw",
          "Use: motor protection and fuseless short circuit protection"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000045483_master.png"
      },
      {
        "name": "MS165",
        "tag": "10 to 80A",
        "desc": "Compact and powerful manual motor starter for currents up to 80A.",
        "features": [
          "Setting: 10 to 80 A",
          "Breaking: 50 kA at 400V",
          "Poles: 3",
          "Terminal: screw",
          "Use: motor protection up to 45 kW with disconnect"
        ],
        "image": "https://cdn.productimages.abb.com/1SFC132208F0002_master.jpg"
      },
      {
        "name": "MO165",
        "tag": "0.16 to 80A",
        "desc": "Magnetic only manual motor starter providing short circuit protection and switching.",
        "features": [
          "Frame: 0.16 to 80 A magnetic",
          "Breaking: up to 100 kA at 400V",
          "Poles: 3",
          "Terminal: screw",
          "Use: short circuit protection and disconnect for feeders"
        ],
        "image": "https://cdn.productimages.abb.com/1SBC101184F0014_master.jpg"
      },
      {
        "name": "MS496",
        "tag": "28 to 100A",
        "desc": "High power manual motor starter with trip class 20 for heavy duty motors.",
        "features": [
          "Setting: 28 to 100 A",
          "Breaking: 50 kA Ics at 400V",
          "Poles: 3",
          "Terminal: screw",
          "Use: motor protection for large motors up to 45 kW"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000366765_master.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine ABB",
        "text": "Authentic ABB products with full manufacturer warranty."
      },
      {
        "title": "Authorised Partner",
        "text": "SSC Control is an authorised ABB channel partner."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Selection Support",
        "text": "Switchgear and control selection support from our engineering team."
      }
    ],
    "ctaTitle": "Need a manual motor starter?",
    "ctaText": "Our team can size the MMS rating and trip class for your motor."
  },
  "abb/mccb": {
    "brandSlug": "abb",
    "slug": "mccb",
    "category": "MCCBs, Tmax XT Series",
    "label": "Moulded Case Circuit Breakers",
    "title": "ABB",
    "titleEm": "MCCBs",
    "tagline": "Tmax XT moulded case breakers, 160A to 630A.",
    "intro": "ABB is a global leader in electrification and automation, supplying contactors, circuit breakers, switches, metering and control products for industrial and building installations. SSC Control is an authorised ABB partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "https://cdn.productimages.abb.com/9IBA255010_master.png",
    "seriesLabel": "MCCB Lineup",
    "seriesTitle": "Tmax XT MCCB Series",
    "series": [
      {
        "name": "Tmax XT1",
        "tag": "Up to 160A",
        "desc": "Compact entry level moulded case breaker for residential and light commercial distribution.",
        "features": [
          "Frame: 160 A",
          "Breaking: 18 to 70 kA at 415V",
          "Poles: 3 / 4",
          "Trip: thermomagnetic",
          "Use: feeder and cable protection in small panels"
        ],
        "image": "https://cdn.productimages.abb.com/9IBA255044_master.png"
      },
      {
        "name": "Tmax XT2",
        "tag": "Up to 160A",
        "desc": "High performance 160A frame supporting thermomagnetic and Ekip electronic releases.",
        "features": [
          "Frame: 160 A",
          "Breaking: 36 to 120 kA at 415V",
          "Poles: 3 / 4",
          "Trip: thermomagnetic or Ekip electronic",
          "Use: motor and feeder protection with metering"
        ],
        "image": "https://cdn.productimages.abb.com/9IBA255010_master.png"
      },
      {
        "name": "Tmax XT3",
        "tag": "Up to 250A",
        "desc": "250A frame breaker for distribution boards needing higher continuous current.",
        "features": [
          "Frame: 250 A",
          "Breaking: 25 to 50 kA at 415V",
          "Poles: 3 / 4",
          "Trip: thermomagnetic",
          "Use: sub distribution and feeder protection"
        ],
        "image": "https://cdn.productimages.abb.com/9IBA255289_master.png"
      },
      {
        "name": "Tmax XT4",
        "tag": "Up to 250A",
        "desc": "Premium 250A frame with full Ekip Touch electronic protection and precision metering.",
        "features": [
          "Frame: 250 A",
          "Breaking: 36 to 200 kA at 415V",
          "Poles: 3 / 4",
          "Trip: thermomagnetic or Ekip electronic",
          "Use: critical feeders, generators and motor circuits"
        ],
        "image": "https://cdn.productimages.abb.com/9IBA191998_master.jpg"
      },
      {
        "name": "Tmax XT5",
        "tag": "Up to 630A",
        "desc": "Larger frame breaker covering 400 to 630A mains and feeder duties with Ekip releases.",
        "features": [
          "Frame: 400 to 630 A",
          "Breaking: 36 to 200 kA at 415V",
          "Poles: 3 / 4",
          "Trip: thermomagnetic or Ekip electronic",
          "Use: main incomers and large feeder protection"
        ],
        "image": "https://cdn.productimages.abb.com/9IBA261444_master.png"
      },
      {"name": "DSP", "tag": "160 to 630A", "desc": "ABB SACE Formula DSP thermomagnetic moulded case range on P1, P2 and P3 frames for distribution and motor protection.", "features": ["Frame: 160 to 630 A", "Breaking: 18 / 25 / 36 / 50 kA", "Poles: 3 / 4", "Trip: thermomagnetic, fixed or adjustable", "Use: industrial and commercial power distribution"], "image": "https://cdn.productimages.abb.com/9PAA00000049087_master.png"},
      {"name": "DSA", "tag": "125 to 630A", "desc": "ABB SACE Formula DSA spanning A1, A2 and A3 frames with thermomagnetic or electronic releases for feeders and distribution boards.", "features": ["Frame: 125 to 630 A", "Breaking: 4.5 to 50 kA", "Poles: 3 / 4", "Trip: thermomagnetic or electronic", "Use: distribution boards, feeders and panel protection"], "image": "https://cdn.productimages.abb.com/9PAA00000229049_master.jpg"}
    ],
    "highlights": [
      {
        "title": "Genuine ABB",
        "text": "Authentic ABB products with full manufacturer warranty."
      },
      {
        "title": "Authorised Partner",
        "text": "SSC Control is an authorised ABB channel partner."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Selection Support",
        "text": "Switchgear and control selection support from our engineering team."
      }
    ],
    "ctaTitle": "Need an MCCB?",
    "ctaText": "Our team can size the frame, breaking capacity and trip unit for your installation."
  },
  "abb/acb": {
    "brandSlug": "abb",
    "slug": "acb",
    "category": "ACBs, Emax 2 Series",
    "label": "Air Circuit Breakers",
    "title": "ABB",
    "titleEm": "Air Circuit Breakers",
    "tagline": "SACE Emax 2 air circuit breakers, 630A to 6300A.",
    "intro": "ABB is a global leader in electrification and automation, supplying contactors, circuit breakers, switches, metering and control products for industrial and building installations. SSC Control is an authorised ABB partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "https://cdn.productimages.abb.com/9PAA00000042922_master.jpg",
    "seriesLabel": "ACB Lineup",
    "seriesTitle": "Emax 2 ACB Series",
    "series": [
      {
        "name": "Emax 2 E1.2",
        "tag": "Up to 1600A",
        "desc": "The most compact frame in the SACE Emax 2 air circuit breaker range for low voltage power distribution.",
        "features": [
          "Rating: 630 to 1600 A",
          "Breaking: up to 66 kA",
          "Poles: 3 / 4",
          "Type: fixed / withdrawable",
          "Trip: Ekip Dip / Touch / Hi-Touch"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000042854_master.jpg"
      },
      {
        "name": "Emax 2 E2.2",
        "tag": "Up to 2500A",
        "desc": "Versatile mid range air circuit breaker delivering high breaking capacity in a space saving frame.",
        "features": [
          "Rating: 250 to 2500 A",
          "Breaking: up to 100 kA",
          "Poles: 3 / 4",
          "Type: fixed / withdrawable",
          "Trip: Ekip Dip / Touch / Hi-Touch"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000042932_master.jpg"
      },
      {
        "name": "Emax 2 E4.2",
        "tag": "Up to 4000A",
        "desc": "High performance frame engineered for demanding installations needing strong short circuit withstand.",
        "features": [
          "Rating: 1600 to 4000 A",
          "Breaking: up to 100 kA",
          "Poles: 3 / 4",
          "Type: fixed / withdrawable",
          "Trip: Ekip Dip / Touch / Hi-Touch"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000043360_master.jpg"
      },
      {
        "name": "Emax 2 E6.2",
        "tag": "Up to 6300A",
        "desc": "Top of the range air circuit breaker for the highest current and power management applications.",
        "features": [
          "Rating: 4000 to 6300 A",
          "Breaking: up to 100 kA",
          "Poles: 3 / 4",
          "Type: fixed / withdrawable",
          "Trip: Ekip Dip / Touch / Hi-Touch"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000042922_master.jpg"
      },
      {"name": "Formula A1 / A2 / A3", "tag": "Up to 630A", "desc": "ABB SACE Formula compact moulded case air break range with A1, A2 and A3 frames for low voltage circuit protection.", "features": ["Frame: A1 125 A, A2 250 A, A3 630 A", "Breaking: 36 to 50 kA at 415V", "Poles: 3 / 4", "Trip: thermomagnetic or electronic", "Use: compact distribution and general circuit protection"], "image": "https://cdn.productimages.abb.com/9PAA00000045321_master.jpg"}
    ],
    "highlights": [
      {
        "title": "Genuine ABB",
        "text": "Authentic ABB products with full manufacturer warranty."
      },
      {
        "title": "Authorised Partner",
        "text": "SSC Control is an authorised ABB channel partner."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Selection Support",
        "text": "Switchgear and control selection support from our engineering team."
      }
    ],
    "ctaTitle": "Need an ACB?",
    "ctaText": "Our team can size the Emax 2 frame and Ekip trip unit for your switchboard."
  },
  "abb/mcb": {
    "brandSlug": "abb",
    "slug": "mcb",
    "category": "MCBs, System pro M compact",
    "label": "Miniature Circuit Breakers",
    "title": "ABB",
    "titleEm": "MCBs & RCDs",
    "tagline": "System pro M compact MCBs, RCCBs and RCBOs.",
    "intro": "ABB is a global leader in electrification and automation, supplying contactors, circuit breakers, switches, metering and control products for industrial and building installations. SSC Control is an authorised ABB partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "https://cdn.productimages.abb.com/9PAA00000002966_master.png",
    "seriesLabel": "MCB Lineup",
    "seriesTitle": "System pro M compact Series",
    "series": [
      {
        "name": "S200 MCB",
        "tag": "0.5 to 63A, B/C/D",
        "desc": "General purpose miniature circuit breaker for overload and short circuit protection in distribution boards.",
        "features": [
          "Rating: 0.5 to 63 A",
          "Poles: 1 / 2 / 3 / 4",
          "Breaking: 6 to 25 kA",
          "Curve: B / C / D",
          "Use: final circuit and feeder protection"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000002927_master.png"
      },
      {
        "name": "S800 High Performance MCB",
        "tag": "10 to 125A",
        "desc": "High performance current limiting MCB for heavy duty industrial and renewable systems.",
        "features": [
          "Rating: 10 to 125 A",
          "Poles: 1 / 2 / 3 / 4",
          "Breaking: up to 50 kA",
          "Curve: B / C / D / K",
          "Use: industrial heavy duty and back up protection"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000078044_master.png"
      },
      {
        "name": "F200 RCCB",
        "tag": "25 to 125A, 30mA",
        "desc": "Residual current circuit breaker that protects against earth fault currents and indirect contact.",
        "features": [
          "Rating: 25 to 125 A",
          "Poles: 2 / 4",
          "Sensitivity: 30 / 100 / 300 mA",
          "Breaking: 10 kA",
          "Use: earth fault and shock protection"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000398083_master.png"
      },
      {
        "name": "DS201 RCBO",
        "tag": "6 to 40A, B/C",
        "desc": "Single module device combining overload, short circuit and earth fault protection for single phase circuits.",
        "features": [
          "Rating: 6 to 40 A",
          "Poles: 1P + N",
          "Breaking: 6 to 10 kA",
          "Curve: B / C",
          "Use: combined overcurrent and residual current protection"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000036233_master.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine ABB",
        "text": "Authentic ABB products with full manufacturer warranty."
      },
      {
        "title": "Authorised Partner",
        "text": "SSC Control is an authorised ABB channel partner."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Selection Support",
        "text": "Switchgear and control selection support from our engineering team."
      }
    ],
    "ctaTitle": "Need an MCB or RCD?",
    "ctaText": "Our team can specify the MCB, RCCB or RCBO rating and curve for your board."
  },
  "abb/ats-switches": {
    "brandSlug": "abb",
    "slug": "ats-switches",
    "category": "ATS & OT Switches",
    "label": "Automatic Transfer & OT Switches",
    "title": "Switches &",
    "titleEm": "Transfer",
    "tagline": "OT switch disconnectors and automatic transfer switches.",
    "intro": "ABB is a global leader in electrification and automation, supplying contactors, circuit breakers, switches, metering and control products for industrial and building installations. SSC Control is an authorised ABB partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "https://cdn.productimages.abb.com/9IBA246891_master.png",
    "seriesLabel": "Switch Lineup",
    "seriesTitle": "Switches & Transfer Equipment",
    "series": [
      {
        "name": "OT Switch Disconnectors",
        "tag": "16 to 3150A",
        "desc": "Manual front operated switch disconnectors for safe load break isolation in distribution boards and panels.",
        "features": [
          "Rating: 16 to 3150 A",
          "Poles: 3 / 4",
          "Type: switch disconnector",
          "Use: distribution boards, panels and machine isolation"
        ],
        "image": "https://cdn.productimages.abb.com/9IBA040694_master.jpg"
      },
      {
        "name": "OS Fusible Switch Disconnectors",
        "tag": "16 to 1250A",
        "desc": "Switch fuse units combining a load break disconnector with fuse links for switching plus short circuit protection.",
        "features": [
          "Rating: 16 to 1250 A",
          "Poles: 1 / 2 / 3 / 4",
          "Type: fusible switch disconnector",
          "Use: combined isolation and fuse protection"
        ],
        "image": "https://cdn.productimages.abb.com/9IBA039702_master.jpg"
      },
      {
        "name": "OTM Transfer Switch Equipment",
        "tag": "32 to 3200A",
        "desc": "Motorized changeover and transfer switch equipment that switches loads between a main supply and a backup generator.",
        "features": [
          "Rating: 32 to 3200 A",
          "Poles: 2 / 3 / 4",
          "Type: automatic transfer switch",
          "Use: source changeover between mains and standby generator"
        ],
        "image": "https://cdn.productimages.abb.com/1SCC301292V0015_master.jpg"
      },
      {
        "name": "TruONE ATS",
        "tag": "30 to 1600A",
        "desc": "All in one automatic transfer switch integrating switch and controller in a single device for fast reliable source transfer.",
        "features": [
          "Rating: 30 to 1600 A",
          "Poles: 2 / 3 / 4",
          "Type: automatic transfer switch",
          "Use: critical power backup for data centres, hospitals and industry"
        ],
        "image": "https://cdn.productimages.abb.com/9IBA246891_master.png"
      }
    ],
    "highlights": [
      {
        "title": "Genuine ABB",
        "text": "Authentic ABB products with full manufacturer warranty."
      },
      {
        "title": "Authorised Partner",
        "text": "SSC Control is an authorised ABB channel partner."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Selection Support",
        "text": "Switchgear and control selection support from our engineering team."
      }
    ],
    "ctaTitle": "Need a switch or ATS?",
    "ctaText": "Our team can size the switch disconnector or transfer switch for your supply."
  },
  "abb/energy-meters": {
    "brandSlug": "abb",
    "slug": "energy-meters",
    "category": "Energy Meters",
    "label": "M2M & EQmatic Energy Meters",
    "title": "ABB",
    "titleEm": "Energy Meters",
    "tagline": "Network analysers and DIN rail energy meters with Modbus.",
    "intro": "ABB is a global leader in electrification and automation, supplying contactors, circuit breakers, switches, metering and control products for industrial and building installations. SSC Control is an authorised ABB partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "https://cdn.productimages.abb.com/9PAA00000040852_master.png",
    "seriesLabel": "Meter Lineup",
    "seriesTitle": "ABB Energy Meters",
    "series": [
      {
        "name": "M4M Network Analyser",
        "tag": "Power quality",
        "desc": "Fully connected network analyser for accurate energy monitoring and complete power quality analysis.",
        "features": [
          "Phase: 3 phase",
          "Measures: kWh, power, power factor, THD",
          "Comms: Modbus RS485, Modbus TCP, BACnet",
          "Mount: DIN rail or panel",
          "Use: energy efficiency and power quality monitoring"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000050184_master.jpg"
      },
      {
        "name": "M2M Network Analyser",
        "tag": "Switchboard metering",
        "desc": "Panel mounted network analyser with LCD display for bidirectional energy metering and remote monitoring.",
        "features": [
          "Phase: 1 and 3 phase",
          "Measures: kWh bidirectional, A, V, frequency, THD",
          "Comms: Modbus RS485, Ethernet, digital and relay outputs",
          "Mount: panel 96 x 96 mm",
          "Use: remote switchboard and generation monitoring"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000040852_master.png"
      },
      {
        "name": "EQmatic Energy Analyzer QA/S",
        "tag": "Web data logger",
        "desc": "Compact web based energy analyser that logs, stores and visualises consumption data from connected meters.",
        "features": [
          "Inputs: electricity, gas, water, heat meters",
          "Storage: up to 3 years of logged data",
          "Comms: M-Bus master or Modbus RTU plus Ethernet web interface",
          "Mount: DIN rail",
          "Use: visualisation and cost analysis of up to 64 meters"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000040839_master.png"
      },
      {
        "name": "B23 / B24 Energy Meter",
        "tag": "MID billing",
        "desc": "Compact three phase DIN rail energy meter with backlit display for billing grade consumption metering.",
        "features": [
          "Phase: 3 phase",
          "Measures: kWh import and export, multi tariff",
          "Comms: Modbus RS485, M-Bus, pulse output",
          "Mount: DIN rail, MID approved",
          "Use: sub metering, B23 direct 65 A, B24 via CT"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000095912_master.jpg"
      },
      {
        "name": "A43 / A44 Energy Meter",
        "tag": "Advanced metering",
        "desc": "Three phase DIN rail meter with instrumentation, alarms and event logging for demanding installations.",
        "features": [
          "Phase: 3 phase, 3 or 4 wire",
          "Measures: kWh import and export, multi tariff, min max, THD",
          "Comms: Modbus RS485, M-Bus, pulse I/O",
          "Mount: DIN rail, class 0.5S options",
          "Use: advanced sub metering, A43 direct 80 A, A44 via CT"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000276803_master.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine ABB",
        "text": "Authentic ABB products with full manufacturer warranty."
      },
      {
        "title": "Authorised Partner",
        "text": "SSC Control is an authorised ABB channel partner."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Selection Support",
        "text": "Switchgear and control selection support from our engineering team."
      }
    ],
    "ctaTitle": "Need an energy meter?",
    "ctaText": "Our team can match the meter, accuracy class and communication to your monitoring need."
  },
  "abb/soft-starters": {
    "brandSlug": "abb",
    "slug": "soft-starters",
    "category": "Soft Starters",
    "label": "PSR / PSE / PSTX Series",
    "title": "ABB",
    "titleEm": "Soft Starters",
    "tagline": "PSR, PSE and PSTX softstarters, 3A to 1250A.",
    "intro": "ABB is a global leader in electrification and automation, supplying contactors, circuit breakers, switches, metering and control products for industrial and building installations. SSC Control is an authorised ABB partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "https://cdn.productimages.abb.com/9PAA00000054672_master.jpg",
    "seriesLabel": "Soft Starter Lineup",
    "seriesTitle": "ABB Softstarter Series",
    "series": [
      {
        "name": "PSR Compact",
        "tag": "3 to 105A",
        "desc": "Compact softstarter for soft start and soft stop of small to medium motors where space saving matters.",
        "features": [
          "Current: 3 to 105 A",
          "Power: 1.5 to 55 kW at 400V",
          "Bypass: built in",
          "Control: 24V DC or 100 to 250V AC",
          "Use: pumps, fans, conveyors and small machinery"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000054646_master.jpg"
      },
      {
        "name": "PSE Efficient",
        "tag": "18 to 370A",
        "desc": "General purpose softstarter with built in electronic motor overload protection and torque control.",
        "features": [
          "Current: 18 to 370 A",
          "Power: 7.5 to 200 kW at 400V",
          "Bypass: built in",
          "Control: 100 to 250V AC",
          "Use: pumps, fans, compressors and general industry"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000076490_master.jpg"
      },
      {
        "name": "PSTX Advanced",
        "tag": "30 to 1250A",
        "desc": "Advanced softstarter with built in bypass and full torque control to protect demanding motor loads.",
        "features": [
          "Current: 30 to 1250 A",
          "Power: 15 to 710 kW at 400V",
          "Bypass: built in",
          "Control: 100 to 250V AC",
          "Use: heavy pumps, fans, crushers and high power processes"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000076831_master.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine ABB",
        "text": "Authentic ABB products with full manufacturer warranty."
      },
      {
        "title": "Authorised Partner",
        "text": "SSC Control is an authorised ABB channel partner."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Selection Support",
        "text": "Switchgear and control selection support from our engineering team."
      }
    ],
    "ctaTitle": "Need a soft starter?",
    "ctaText": "Our team can size the softstarter current and bypass for your motor."
  },
  "abb/push-buttons": {
    "brandSlug": "abb",
    "slug": "push-buttons",
    "category": "Push Buttons & Signalling",
    "label": "Compact & Modular 22mm",
    "title": "Push Buttons",
    "titleEm": "& Signalling",
    "tagline": "22mm pushbuttons, pilot lights, selectors and emergency stops.",
    "intro": "ABB is a global leader in electrification and automation, supplying contactors, circuit breakers, switches, metering and control products for industrial and building installations. SSC Control is an authorised ABB partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "https://cdn.productimages.abb.com/9PAA00000014507_master.jpg",
    "seriesLabel": "Pilot Device Lineup",
    "seriesTitle": "22mm Pilot Devices",
    "series": [
      {
        "name": "Compact Pilot Devices",
        "tag": "22mm modular",
        "desc": "All in one pushbuttons and pilot lights with the operator and contact block combined for fast panel mounting.",
        "features": [
          "Type: pushbutton, momentary or maintained",
          "Size: 22 mm",
          "Illumination: LED",
          "Contacts: 1 NO / 1 NC integrated",
          "Use: machine control panels"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000241726_master.jpg"
      },
      {
        "name": "CE4 Compact Emergency Stop",
        "tag": "22mm mount",
        "desc": "Mushroom emergency stop with twist to release latching action for safe machine shutdown.",
        "features": [
          "Type: emergency stop",
          "Size: 22 mm, 40 mm mushroom",
          "Contacts: 1 NC positive opening",
          "Use: safety stop circuits on machinery"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000287826_master.jpg"
      },
      {
        "name": "CL2 Compact Pilot Lights",
        "tag": "22mm modular",
        "desc": "Integrated LED indicator lamps in a single piece housing for clear panel status signalling.",
        "features": [
          "Type: pilot light",
          "Size: 22 mm",
          "Illumination: built in LED",
          "Use: status and signalling on control panels"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000242378_master.jpg"
      },
      {
        "name": "Modular Pilot Devices",
        "tag": "22mm modular",
        "desc": "Flexible operator range where heads, fixing collars and contact blocks are ordered separately.",
        "features": [
          "Type: pushbutton, flush or extended",
          "Size: 22 mm",
          "Illumination: optional LED versions",
          "Contacts: snap on 1 NO or 1 NC, stackable",
          "Use: custom built control and signalling stations"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000090392_master.jpg"
      },
      {
        "name": "Compact Selector Switches",
        "tag": "22mm modular",
        "desc": "Two and three position selector switches with short or long handle for mode and function selection.",
        "features": [
          "Type: selector",
          "Size: 22 mm",
          "Illumination: illuminated and non illuminated",
          "Contacts: maintained positions",
          "Use: manual mode selection on operator panels"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000242092_master.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine ABB",
        "text": "Authentic ABB products with full manufacturer warranty."
      },
      {
        "title": "Authorised Partner",
        "text": "SSC Control is an authorised ABB channel partner."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Selection Support",
        "text": "Switchgear and control selection support from our engineering team."
      }
    ],
    "ctaTitle": "Need pilot devices?",
    "ctaText": "Our team can specify pushbuttons, pilot lights and emergency stops for your panel."
  },
  "abb/overload-relays": {
    "brandSlug": "abb",
    "slug": "overload-relays",
    "category": "Overload Relays",
    "label": "Thermal & Electronic OLR",
    "title": "Overload",
    "titleEm": "Relays",
    "tagline": "TF thermal and EF electronic overload relays.",
    "intro": "ABB is a global leader in electrification and automation, supplying contactors, circuit breakers, switches, metering and control products for industrial and building installations. SSC Control is an authorised ABB partner, supplying the full range with genuine products, warranty and technical support across Gujarat and India.",
    "heroImage": "https://cdn.productimages.abb.com/9PAA00000366714_master.jpg",
    "seriesLabel": "OLR Lineup",
    "seriesTitle": "ABB Overload Relays",
    "series": [
      {
        "name": "TF42 Thermal Overload Relay",
        "tag": "0.1 to 38A",
        "desc": "Compact bimetallic overload relay for AF09 to AF38 contactors, protecting motors against overload and phase failure.",
        "features": [
          "Setting: 0.1 to 38 A",
          "Poles: 3",
          "Type: thermal bimetal",
          "Reset: manual or auto selectable",
          "Use: motor overload and phase loss protection"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000366714_master.jpg"
      },
      {
        "name": "TF65 Thermal Overload Relay",
        "tag": "13 to 67A",
        "desc": "Bimetallic overload relay for AF40 to AF65 contactors with trip class 10A and temperature compensation.",
        "features": [
          "Setting: 13 to 67 A",
          "Poles: 3",
          "Type: thermal bimetal",
          "Reset: manual or auto selectable",
          "Use: motor protection on AF40 to AF65 contactors"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000366716_master.png"
      },
      {
        "name": "TF96 Thermal Overload Relay",
        "tag": "28 to 96A",
        "desc": "Bimetallic overload relay for AF80 to AF96 contactors offering reliable overload and phase failure protection.",
        "features": [
          "Setting: 28 to 96 A",
          "Poles: 3",
          "Type: thermal bimetal",
          "Reset: manual or auto selectable",
          "Use: motor protection on AF80 to AF96 contactors"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000366717_master.png"
      },
      {
        "name": "TF140DU Thermal Overload Relay",
        "tag": "100 to 135A",
        "desc": "Electromechanical overload relay for AF116 to AF146 contactors with fast trip class 10A protection.",
        "features": [
          "Setting: 100 to 135 A",
          "Poles: 3",
          "Type: thermal bimetal",
          "Reset: manual or auto selectable",
          "Use: motor protection on AF116 to AF146 contactors"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000366762_master.jpg"
      },
      {
        "name": "EF19 / EF45 Electronic Overload Relay",
        "tag": "0.1 to 45A",
        "desc": "Self supplied electronic overload relay with wide setting range and selectable trip class for AF09 to AF38 contactors.",
        "features": [
          "Setting: 0.1 to 45 A",
          "Poles: 3",
          "Type: electronic",
          "Reset: manual, auto or remote",
          "Use: accurate motor protection, trip class 10E to 30E"
        ],
        "image": "https://cdn.productimages.abb.com/9PAA00000074260_master.jpg"
      }
    ],
    "highlights": [
      {
        "title": "Genuine ABB",
        "text": "Authentic ABB products with full manufacturer warranty."
      },
      {
        "title": "Authorised Partner",
        "text": "SSC Control is an authorised ABB channel partner."
      },
      {
        "title": "Stock & Fast Delivery",
        "text": "Ready availability from our Ahmedabad and Baroda bases across Gujarat."
      },
      {
        "title": "Selection Support",
        "text": "Switchgear and control selection support from our engineering team."
      }
    ],
    "ctaTitle": "Need an overload relay?",
    "ctaText": "Our team can match the TF or EF overload relay to your contactor and motor rating."
  },
};

export const PRODUCT_KEYS = Object.keys(PRODUCT_PAGES);
