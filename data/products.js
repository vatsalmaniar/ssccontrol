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
};

export const PRODUCT_KEYS = Object.keys(PRODUCT_PAGES);
