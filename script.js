const timelineItems = [
  {
    period: "2026",
    meta: "Planaton for WOWCube",
    title: "Planaton WOWCube",
    badgeIcon: "icons/planaton_wowcube.png",
    badgeAlt: "Planaton WOWCube",
    badgeTransparent: true,
    image: "images/planaton_wowcube.png",
    imageAlt: "Planaton WOWCube",
    body: `
      <p>
        Educational <strong>Planaton</strong> application built for
        <strong>WOWCube</strong> in <strong>C++</strong> using the
        <strong>WOWCube SDK</strong>. The project presents selected facts about
        Solar System planets as an interactive cube experience.
      </p>
      <p>
        The user rotates the cube, changes planets, and combines information
        from multiple screens into one spatial whole.
      </p>
    `,
    tags: ["WOWCube", "WOWCube SDK", "C++", "Education", "Planets"],
    links: [
      { label: "Itch.io", href: "https://gregorn.itch.io/planaton-wowcube" },
      {
        label: "WOWCube Store",
        href: "https://store.wowcube.com/uploads/69caf64ac408de5a761d7719?password=8ef6620e5073906ccbe36996b774fb8a340c31deeca498dd0e35b9a46ce385bc"
      }
    ]
  },
  {
    period: "2026",
    meta: "Planaton Android",
    title: "Planaton",
    badgeIcon: "icons/planaton_android.png",
    badgeAlt: "Planaton Android",
    badgeFill: true,
    image: "images/planaton_android.png",
    imageAlt: "Planaton Android",
    body: `
      <p>
        Classic Android version of <strong>Planaton</strong>: an educational
        application about Solar System planets, prepared as a separate mobile
        variant after the XREAL version.
      </p>
      <p>
        This stage shaped the project into a regular Android application before
        it later moved to the more experimental WOWCube platform.
      </p>
    `,
    tags: ["Android", "Unity", "C#", "Education", "Planets", "Solar System"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=cloud.LoRoGaSt.Planaton" },
      { label: "YouTube", href: "https://www.youtube.com/watch?v=qrj_7Qw90lk" }
    ]
  },
  {
    period: "2025",
    meta: "Planaton XREAL",
    title: "Planaton XREAL",
    badgeIcon: "icons/planaton_xreal.png",
    badgeAlt: "Planaton XREAL",
    badgeFill: true,
    image: "images/planaton_xreal.jpg",
    imageAlt: "Planaton XREAL",
    body: `
      <p>
        Mobile educational application about Solar System planets, created in
        <strong>Unity</strong> using the <strong>XREAL SDK</strong>.
      </p>
      <p>
        The project runs on Android on selected Samsung devices and combines a
        simple presentation of knowledge with a spatial way of exploring the
        subject.
      </p>
    `,
    tags: ["XREAL", "Android", "Unity", "C#", "VR/AR", "Solar System"],
    links: [
      { label: "Itch.io", href: "https://gregorn.itch.io/planaton" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.LoRoGaSt.Planaton.XREAL" },
      { label: "YouTube", href: "https://www.youtube.com/watch?v=qrj_7Qw90lk" }
    ]
  },
  {
    period: "2025",
    meta: "Code Cracker: A Totally Silent Game",
    title: "Code Cracker",
    badgeIcon: "icons/code_cracker.png",
    badgeAlt: "Code Cracker icon",
    badgeFill: true,
    image: "images/code_cracker.jpg",
    imageAlt: "Code Cracker",
    body: `
      <p>
        A minimalist silent puzzle game where silence is part of the challenge.
        The player memorizes arrangements of horizontal and vertical lines and
        then recreates the pattern as accurately as possible.
      </p>
      <p>
        The project focuses on memory, concentration, and fast pattern reading.
      </p>
    `,
    tags: ["Puzzle", "HTML5", "Android", "Unity", "C#", "Minimalist"],
    links: [
      { label: "Itch.io", href: "https://gregorn.itch.io/code-cracker-a-totally-silent-game" },
      { label: "YouTube", href: "https://youtube.com/shorts/_weYuzsJ8s4" }
    ]
  },
  {
    period: "2025",
    meta: "Color Killer: Worm's Revenge",
    title: "Color Killer",
    badgeIcon: "icons/color_killer.png",
    badgeAlt: "Color Killer icon",
    badgeFill: true,
    image: "images/color_killer.jpg",
    imageAlt: "Color Killer",
    body: `
      <p>
        An action-puzzle game where every board tile has to be repainted to the
        target color before time runs out.
      </p>
      <p>
        The pressure is raised by an unpredictable worm moving across the screen
        and breaking up calm planning of the next moves.
      </p>
    `,
    tags: ["Action", "Puzzle", "HTML5", "Android", "Unity", "C#"],
    links: [
      { label: "Itch.io", href: "https://gregorn.itch.io/color-killer" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=cloud.lorogast.collorkiller" },
      { label: "YouTube", href: "https://youtube.com/shorts/QfaD-ETRp7c" }
    ]
  },
  {
    period: "2025",
    meta: "Laser Bot: Survive the Cosmic Chaos!",
    title: "Laser Bot",
    badge: "LB",
    image: "images/laser_bot.jpg",
    imageAlt: "Laser Bot",
    body: `
      <p>
        A dynamic space action game where you control a laser bot, destroy
        enemies, and fight for survival in a chaotic arena.
      </p>
      <p>
        Gameplay is based on reflexes, managing overheating, health, and shield
        levels, and collecting bonuses that provide time and an advantage.
      </p>
    `,
    tags: ["Action", "HTML5", "Unity", "C#", "Sci-fi", "Arcade"],
    links: [
      { label: "Itch.io", href: "https://gregorn.itch.io/laserbot" },
      { label: "YouTube", href: "https://www.youtube.com/watch?v=luuJkYXHcFA" }
    ]
  },
  {
    period: "2026",
    meta: "CodeCrafters / AI tooling",
    title: "Terminal-based AI coding agent",
    badge: "AI",
    body: `
      <p>
        Implementation of a terminal-based coding agent inspired by tools like
        Claude Code. The agent works on files, runs commands, and iterates on a
        task in a loop.
      </p>
    `,
    tags: ["JavaScript", "Agentic AI", "LLM", "JSON", "CodeCrafters"],
    links: [
      { label: "GitHub", href: "https://github.com/gre-gorn/codecrafters-claude-code-javascript" }
    ]
  },
  {
    period: "2025-2026",
    meta: "Educational application",
    title: "Kings Of Poland",
    badgeIcon: "icons/kings_of_poland.png",
    badgeAlt: "Kings Of Poland icon",
    badgeFill: true,
    body: `
      <p>
        A simple application about rulers and kings of Poland, with AI-generated
        elements and a card-based way of presenting content.
      </p>
    `,
    tags: ["Unity", "C#", "Android", "LLM", "Generative AI"]
  },
  {
    period: "2025",
    meta: "AR experiment",
    title: "Kings Of Poland AR",
    badgeIcon: "icons/kings_of_poland.png",
    badgeAlt: "Kings Of Poland AR icon",
    badgeFill: true,
    body: `
      <p>
        An AR prototype about Polish rulers. It tested AI-generated 3D models,
        image markers, and a basic scenario for placing characters in AR.
      </p>
    `,
    tags: ["Unity", "C#", "AR", "Android", "Generative AI"]
  },
  {
    period: "2025",
    meta: "CodeCrafters / system programming",
    title: "Mini shell",
    badge: "SH",
    body: `
      <p>
        CodeCrafters course task: a custom mini-shell implementation focused on
        command parsing, processes, and basic shell behavior.
      </p>
    `,
    tags: ["C", "Bash", "Linux", "System programming"],
    links: [
      { label: "GitHub", href: "https://github.com/gre-gorn/mini_shell_course_task" }
    ]
  },
  {
    period: "2024",
    meta: "Educational application",
    title: "Words Fest",
    badge: "WF",
    body: `
      <p>
        An application for learning English words with Polish translations.
        The project used AI-generated voices.
      </p>
    `,
    tags: ["Unity", "C#", "Android", "Education", "AI audio"]
  },
  {
    period: "2023-2024",
    meta: "Mobile commerce / AR",
    title: "VISULIZR 2.0",
    badge: "V2",
    body: `
      <p>
        Mobile e-commerce application for visualizing blinds and curtains in
        the user's window. The project combined Flutter, Unity, AR, GraphQL,
        and purchasing logic.
      </p>
    `,
    tags: ["Flutter", "Unity", "C#", "AR", "GraphQL", "iOS"]
  },
  {
    period: "2022-2024",
    meta: "E-commerce food delivery",
    title: "Eating Point",
    badge: "EP",
    body: `
      <p>
        Mobile application for an e-commerce food delivery company with a daily
        menu. The work covered mobile app development in a production
        environment.
      </p>
    `,
    tags: ["Flutter", "Swift", "Android", "Mobile app", "E-commerce"]
  },
  {
    period: "2022-2023",
    meta: "AR / Web3",
    title: "Nuwa AR",
    badge: "NU",
    body: `
      <p>
        Mobile AR application in a Web3 environment, created in Unity and C#.
        The project explored the connection between augmented reality and a new
        model of mobile applications.
      </p>
    `,
    tags: ["Unity", "C#", "AR", "Web3", "Mobile app"]
  },
  {
    period: "2023",
    meta: "AR prototype",
    title: "Prototype of AR app with hand tracking",
    badge: "HT",
    body: `
      <p>
        AR application prototype with hand tracking, prepared as a technical
        experiment in interaction without classic on-screen controls.
      </p>
    `,
    tags: ["Unity", "C#", "AR", "Hand tracking", "Prototype"]
  },
  {
    period: "Mar 2023 - May 2023",
    meta: "AR / Web3",
    title: "Hololoot AR",
    badge: "HL",
    body: `
      <p>
        Promotional AR mobile application in a Web3 environment, built with
        <strong>Unity</strong> and <strong>C#</strong> for iOS and Android.
      </p>
    `,
    tags: ["Unity", "C#", "AR", "iOS", "Android", "Web3", "Mobile app"]
  },
  {
    period: "2022",
    meta: "AR / Android",
    title: "DraculaR",
    badge: "DR",
    body: `
      <p>
        Basic AR demo with location services, showing the distance to places
        connected with DraculaR, including Dublin and Bran Castle in
        Transylvania.
      </p>
    `,
    tags: ["Unity", "C#", "AR", "Android", "Location"]
  },
  {
    period: "2020",
    meta: "Mobile AR / e-commerce",
    title: "VISULIZR mobile app",
    badge: "VI",
    body: `
      <p>
        Application for Terry's Fabrics that lets users try blind and window
        covering styles in their real window using a phone.
      </p>
    `,
    tags: ["iOS", "Swift", "Android", "Java", "GraphQL", "AR"]
  },
  {
    period: "2020",
    meta: "Unity game prototypes",
    title: "HOGS KILLER, Snowman Arena and AFish Killer",
    badge: "G3",
    body: `
      <p>
        A series of short action game prototypes created in Unity and C# for
        different Apple platforms and Android. The projects tested fast
        iteration on arcade mechanics and simple arenas.
      </p>
    `,
    tags: ["Unity", "C#", "iOS", "Android", "tvOS", "macOS"]
  },
  {
    period: "2019-2020",
    meta: "ARFoundation prototypes",
    title: "AR Car, AiR Port, MonstAR Shooter and Sky Fighter",
    badge: "AR",
    body: `
      <p>
        A set of AR game prototypes for iOS and Android based on Unity, C#, and
        ARFoundation: car driving, airport simulation, a shooter with enemy
        waves, and an aerial action game.
      </p>
    `,
    tags: ["Unity", "C#", "ARFoundation", "iOS", "Android", "Game prototypes"]
  },
  {
    period: "2017-2019",
    meta: "IoT / BLE startup",
    title: "Locky",
    badge: "LK",
    body: `
      <p>
        Startup project connected with embedded devices, Bluetooth Low Energy,
        microcontrollers, C++, and elements of real-time systems.
      </p>
    `,
    tags: ["C++", "BLE", "Embedded", "RTOS", "Linux", "IoT"]
  },
  {
    period: "2017-2018",
    meta: "Mobile app / maps",
    title: "BeeCB iOS",
    badge: "BC",
    body: `
      <p>
        Mobile application in Swift with Firebase, Google Maps, Google Places,
        CoreLocation, Alamofire, and speech recognition.
      </p>
    `,
    tags: ["Swift", "Firebase", "Google Maps", "CoreLocation", "iOS"]
  },
  {
    period: "2017",
    meta: "AR / automotive",
    title: "MAN TGE and MAN Insides",
    badge: "MAN",
    body: `
      <p>
        AR applications created in Unity, C#, and Vuforia for projects related
        to MAN TGE vehicles and interior/technology presentation.
      </p>
    `,
    tags: ["Unity", "C#", "Vuforia", "AR", "Automotive"]
  },
  {
    period: "2016",
    meta: "iOS / marketing automation",
    title: "SALESmanago Marketing Automation",
    badge: "SM",
    body: `
      <p>
        iOS application for a marketing automation platform: mobile access to
        CRM, contact profiles, hot leads, traffic statistics, and email
        marketing analytics.
      </p>
    `,
    tags: ["iOS", "Mobile app", "CRM", "Marketing automation", "Analytics"]
  },
  {
    period: "2016",
    meta: "iOS / BLE",
    title: "TurboEgg",
    badge: "TE",
    body: `
      <p>
        Development of an iOS application for remote control and management of
        devices over Bluetooth. The work included new features, code cleanup,
        and Core Bluetooth integration.
      </p>
    `,
    tags: ["iOS", "Objective-C", "Swift", "Core Data", "Core Bluetooth", "BLE"]
  },
  {
    period: "2016",
    meta: "Mobile / event app",
    title: "Cannes Meow",
    badge: "CM",
    body: `
      <p>
        Event application with real-time information, content, and data from
        Cannes Lions Festival 2016.
      </p>
    `,
    tags: ["Mobile app", "Realtime", "Event app", "Software development"]
  },
  {
    period: "2015-2016",
    meta: "Mobile app / startup",
    title: "Virtual Size ME B.V",
    badge: "VS",
    body: `
      <p>
        iOS application for the Virtual Size ME B.V startup. Project details
        are covered by an NDA.
      </p>
    `,
    tags: ["iOS", "NDA", "Startup", "Mobile app"]
  },
  {
    period: "2015",
    meta: "AR / Unity",
    title: "Uni Kalendarz",
    badge: "UK",
    body: `
      <p>
        Android and iOS application with augmented reality elements, prepared in
        Unity3D using the Vuforia AR plugin.
      </p>
    `,
    tags: ["Unity", "Vuforia", "AR", "Android", "iOS"]
  },
  {
    period: "2015",
    meta: "Unity mobile game",
    title: "Z-Knocker",
    badge: "ZK",
    body: `
      <p>
        Mobile game for Android and iOS created in Unity3D and C#, using Parse
        as the backend.
      </p>
    `,
    tags: ["Unity", "C#", "Android", "iOS", "Parse", "Mobile game"]
  },
  {
    period: "2011-2015",
    meta: "VoIP / web / desktop",
    title: "Voxlatino ecosystem",
    badge: "VX",
    body: `
      <p>
        A set of projects for Voxlatino: web API for third-party companies,
        website, Voixstar integration, and a desktop application for Windows
        and Mac OS X.
      </p>
      <p>
        Technologies included PHP, SQL, Node.js, JSON, HTML, CSS, jQuery,
        Bootstrap, C#, and Objective-C.
      </p>
    `,
    tags: ["PHP", "SQL", "Node.js", "JSON", "C#", "Objective-C"]
  },
  {
    period: "2012-2015",
    meta: "VoIP / iOS",
    title: "PIN FREE App Dialer",
    badge: "PF",
    body: `
      <p>
        iOS dialer application that made it easier to dial an access number and
        use contacts and calling cards.
      </p>
    `,
    tags: ["iOS", "Objective-C", "UIKit", "VoIP", "Contacts"]
  },
  {
    period: "2012-2015",
    meta: "Web projects",
    title: "NoPinLd and Go Uniform",
    badge: "WWW",
    body: `
      <p>
        Web projects based on PHP, HTML, CSS, SQL, jQuery, and Bootstrap,
        delivered as part of a broader period of work on internet applications
        and integrations.
      </p>
    `,
    tags: ["PHP", "HTML", "CSS", "SQL", "jQuery", "Bootstrap"]
  },
  {
    period: "2012-2013",
    meta: "iOS game",
    title: "A Simple Pairs",
    badge: "SP",
    body: `
      <p>
        Mobile game for iOS designed and programmed in Objective-C and UIKit,
        with a focus on simple mechanics and polished mobile UI.
      </p>
    `,
    tags: ["iOS", "Objective-C", "UIKit", "Game design", "Mobile game"]
  },
  {
    period: "2011",
    meta: "iOS / OS X game",
    title: "Fallin 2",
    badge: "F2",
    body: `
      <p>
        Game project developed in parallel for iOS and OS X. The iOS version
        used Objective-C and UIKit, while the OS X version used Objective-C and
        Cocos2d.
      </p>
    `,
    tags: ["iOS", "OS X", "Objective-C", "UIKit", "Cocos2d", "Mobile game"]
  },
  {
    period: "2010",
    meta: "iOS game",
    title: "Ancient Words",
    badge: "AW",
    body: `
      <p>
        iOS game project based on Objective-C and OpenGL ES, combining design
        with low-level mobile graphics programming.
      </p>
    `,
    tags: ["iOS", "Objective-C", "OpenGL ES", "Game design", "Mobile game"]
  },
  {
    period: "2009-2010",
    meta: "Graphics library",
    title: "2D graphics library OpenGL/ES",
    badge: "GL",
    body: `
      <p>
        Custom 2D graphics library based on OpenGL ES, developed as a
        foundation for mobile games and rendering experiments.
      </p>
    `,
    tags: ["C++", "OpenGL ES", "Linux", "2D graphics", "Game development"],
    media: "Space for a rendering sample, sprite test, or early OpenGL ES screenshot."
  },
  {
    period: "1997-1999",
    meta: "Studies at AGH",
    title: "Computer Science at AGH",
    badge: "CS",
    body: `
      <p>
        Studies in <strong>Computer Science</strong> at the AGH University of
        Krakow.
      </p>
    `,
    tags: ["AGH", "Computer Science", "Studies", "Krakow"]
  },
  {
    period: "1996-1997",
    meta: "Studies at AGH",
    title: "Nuclear Physics at AGH",
    badge: "FJ",
    body: `
      <p>
        Studies in <strong>Nuclear Physics</strong> at the AGH University of
        Krakow.
      </p>
    `,
    tags: ["AGH", "Nuclear Physics", "Studies", "Krakow"]
  },
  {
    period: "1995-1996",
    meta: "Studies at AGH",
    title: "Mechanical Engineering and Robotics at AGH",
    badge: "IM",
    body: `
      <p>
        Studies in <strong>Mechanical Engineering and Robotics</strong> at the
        AGH University of Krakow.
      </p>
      <p>
        This was also the period of a first encounter with the
        <strong>C</strong> and <strong>C++</strong> languages.
      </p>
    `,
    tags: ["AGH", "Robotics", "Mechanics", "C", "C++", "Studies", "Krakow"]
  },
  {
    period: "July-August 1998",
    meta: "DOS4GW / x86 assembly",
    title: "Tetris ver. 1.02 for DOS4GW",
    badgeIcon: "icons/tetris_x86.png",
    badgeAlt: "Tetris x86 icon",
    badgeFill: true,
    body: `
      <p>
        A <strong>Tetris clone</strong> written in <strong>x86 assembly</strong>
        for the <strong>DOS4GW</strong> DOS extender, running in flat memory
        mode and built with <strong>Watcom</strong> tools.
      </p>
      <p>
        The code was aggressively optimized for the Pentium's then-new
        <strong>U/V dual-pipeline architecture</strong>, with instruction
        pairing and low-level execution flow in mind.
      </p>
      <p>
        Preserved strings in the source identify the project as
        <strong>Imagine Graphics</strong>, with a start date of
        <strong>03 July 1998</strong> and an end date of
        <strong>03 August 1998</strong>.
      </p>
      <p>
        Unusually for a late-90s Tetris-style arcade puzzle game, it also
        supported <strong>saving and loading the full game state</strong>,
        allowing a session to be resumed later.
      </p>
      <p>
        The source code still exists, which makes this entry pleasantly
        verifiable rather than just a heroic memory from the DOS era.
      </p>
    `,
    tags: ["DOS4GW", "Assembler x86", "Watcom", "Pentium U/V pipeline", "Flat memory model", "Save/load", "Game dev", "Tetris clone"],
    links: [
      {
        label: "Source code",
        href: "https://github.com/gre-gorn/tetris_for_dos4gw"
      }
    ]
  },
  {
    period: "1993-1994",
    meta: "Atari / first publishing attempt",
    title: "Diamods: logic-action Brix clone",
    badge: "DI",
    body: `
      <p>
        Full logic-action game <strong>Diamods</strong>, inspired by
        <strong>Brix</strong>, written for Atari in
        <strong>6502 assembly</strong>.
      </p>
      <p>
        The project used <strong>Chaos Music Composer</strong> and was a first
        publishing attempt in the indie dev spirit.
      </p>
    `,
    tags: ["Atari", "Assembler 6502", "Game dev", "Brix clone", "Chaos Music Composer", "Indie dev"]
  },
  {
    period: "1992",
    meta: "Atari / Turbo BASIC XL",
    title: "Space colony management game",
    badge: "KO",
    body: `
      <p>
        Strategy game project about managing a space colony, written in
        <strong>Turbo BASIC XL</strong> for Atari.
      </p>
    `,
    tags: ["Atari", "Turbo BASIC XL", "Strategy", "Simulation", "Game design"]
  },
  {
    period: "1991",
    meta: "Atari BASIC / game project",
    title: "Trading and economy game set in a pirate world",
    badge: "PI",
    body: `
      <p>
        Trading and economy game project set in a pirate world, written in
        <strong>BASIC</strong> on Atari.
      </p>
      <p>
        It also included the first attempts to use vector graphics for drawing
        cutscenes.
      </p>
    `,
    tags: ["Atari", "BASIC", "Game design", "Economy", "Vector graphics", "Cutscenes"]
  },
  {
    period: "1991",
    meta: "Age 15",
    title: "SIGMA: interpreted language",
    badge: "Σ",
    body: `
      <p>
        At age 15, the idea appeared to develop an interpreted language called
        <strong>SIGMA</strong>. The concept combined BASIC bytecode as the
        execution base with functions and libraries written in assembly.
      </p>
      <p>
        The whole system was meant to be easily extendable with new libraries
        by attaching files, similar to the approach known from
        <strong>Quick Assembler</strong> from LK Avalon.
      </p>
    `,
    tags: ["Atari 65XE", "BASIC", "Assembler", "Interpreter", "Language"],
    media: "Space for a SIGMA diagram: BASIC bytecode -> interpreter -> ASM libraries.",
    note: "To refine: module names, syntax examples, screenshots, or scans of notes."
  },
  {
    period: "1990",
    meta: "Earlier database idea",
    title: "From a manually entered phone book to a database",
    badge: "DB",
    body: `
      <p>
        It started with manually entering addresses, first names, last names,
        and phone numbers in the form of a custom <strong>phone book</strong>.
      </p>
      <p>
        The next natural step was the need to add and delete records and search
        contacts. That moved a simple data list toward thinking about a program
        capable of managing records.
      </p>
    `,
    tags: ["Database", "Atari 65XE", "Data", "Search", "Phone book"],
    media: "Space for a sketch: record -> fields -> surname index -> fast search."
  },
  {
    period: "1988-1989",
    meta: "Age 13-14",
    title: "First Hello World program on Atari 65XE",
    badgeIcon: "icons/self_test.png",
    badgeAlt: "Atari 65XE",
    badgeFill: true,
    body: `
      <p>
        First steps in programming: a simple <strong>Hello World</strong>
        program on <strong>Atari 65XE</strong>. It is a good starting point for
        the whole story because it shows the beginning of the path: curiosity,
        experiments, and a quick move from ready-made examples to custom tools.
      </p>
    `,
    tags: ["Hello World", "Atari BASIC", "8-bit", "Beginnings"],
    media: "Space for an Atari 65XE photo, BASIC listing, or retro screenshot."
  },
  {
    period: "1976",
    meta: "Start",
    title: "Easter Sunday",
    badgeIcon: "images/lorogast.png",
    badgeAlt: "Greg Gornisiewicz portrait",
    badgePortrait: true,
    body: `
      <p>
        The timeline begins here: a first breath, a blank program, and a life
        waiting to be written one decision, detour, and project at a time.
      </p>
    `,
    tags: ["Bio", "Timeline"]
  }
];

const timelineList = document.querySelector("#timeline-list");

function getTimelineSortYear(item) {
  const years = item.period.match(/\d{4}/g);

  if (!years) return 0;

  return Math.max(...years.map((year) => Number(year)));
}

function renderTimelineItem(item) {
  const tags = item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  const note = item.note ? `<div class="note">${item.note}</div>` : "";
  const badgeClass = [
    "entry__badge",
    item.badgeFill ? "entry__badge--fill" : "",
    item.badgePortrait ? "entry__badge--portrait" : "",
    item.badgeTransparent ? "entry__badge--transparent" : ""
  ]
    .filter(Boolean)
    .join(" ");
  const badge = item.badgeIcon
    ? item.badgePortrait
      ? `<span class="entry__badge-portrait" role="img" aria-label="${item.badgeAlt || item.title}"></span>`
      : `<img class="entry__badge-icon" src="${item.badgeIcon}" alt="${item.badgeAlt || item.title}" loading="lazy" />`
    : item.badge;
  const media = item.image
    ? `<figure class="entry__media">
        <img src="${item.image}" alt="${item.imageAlt || item.title}" loading="lazy" />
      </figure>`
    : item.media
      ? `<div class="media-placeholder">${item.media}</div>`
      : "";
  const links = item.links
    ? `<div class="entry__links">${item.links
        .map((link) => `<a class="timeline-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`)
        .join("")}</div>`
    : "";

  return `
    <article class="timeline-entry" data-period="${item.period}">
      <div class="entry__left">
        <div class="${badgeClass}">${badge}</div>
        <div class="entry__year">${item.period}</div>
      </div>
      <div class="entry__dot" aria-hidden="true"></div>
      <div class="entry__right">
        <div class="entry__card">
          <p class="entry__meta">${item.meta}</p>
          <h3>${item.title}</h3>
          ${media}
          <div class="entry__body">${item.body}</div>
          <div class="entry__tags">${tags}</div>
          ${links}
          ${note}
        </div>
      </div>
    </article>
  `;
}

const sortedTimelineItems = [...timelineItems].sort(
  (current, next) => getTimelineSortYear(next) - getTimelineSortYear(current)
);

timelineList.innerHTML = sortedTimelineItems.map(renderTimelineItem).join("");

const entries = [...document.querySelectorAll(".timeline-entry")];

function updateTimelineProgress() {
  const rect = timelineList.getBoundingClientRect();
  const viewportAnchor = window.innerHeight * 0.42;
  const rawProgress = (viewportAnchor - rect.top) / rect.height;
  const progress = Math.max(0, Math.min(1, rawProgress));

  timelineList.style.setProperty("--timeline-progress", `${progress * 100}%`);
}

function setActiveEntry(activeEntry) {
  entries.forEach((entry) => {
    const isActive = entry === activeEntry;
    entry.classList.toggle("is-active", isActive);
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (observedEntries) => {
      const visibleEntries = observedEntries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      visibleEntries.forEach((entry) => entry.target.classList.add("is-visible"));

      if (visibleEntries[0]) {
        setActiveEntry(visibleEntries[0].target);
      }
    },
    {
      rootMargin: "-22% 0px -48% 0px",
      threshold: [0.16, 0.32, 0.48, 0.64]
    }
  );

  entries.forEach((entry) => observer.observe(entry));
} else {
  entries.forEach((entry) => entry.classList.add("is-visible"));
  setActiveEntry(entries[0]);
}

let progressTicking = false;

function requestProgressUpdate() {
  if (progressTicking) return;

  progressTicking = true;
  window.requestAnimationFrame(() => {
    updateTimelineProgress();
    progressTicking = false;
  });
}

window.addEventListener("scroll", requestProgressUpdate, { passive: true });
window.addEventListener("resize", requestProgressUpdate);
updateTimelineProgress();
