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
};

export const PRODUCT_KEYS = Object.keys(PRODUCT_PAGES);
