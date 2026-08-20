import type { Project } from "../types/project";

/**
 * Portfolio projects.
 *
 * Source of truth: the current portfolio and "Portfolio Info.pdf". Informal
 * notes from the PDF have been professionalized without inventing details.
 *
 * To add a project: copy an object, change the fields, add it to the
 * array. The UI picks it up automatically. Set `featured: true` on at
 * most one project to feature it in the large card slot.
 *
 * Image paths point at /public and are left unset until a real image
 * exists. The card renders an on-brand placeholder when no image is set.
 */
export const projects: Project[] = [
  {
    id: "monkey-jump",
    title: "Monkey Jump!",
    shortDescription:
      "A 2D vertical platformer built around upward progression, environmental hazards, and the risk of falling back through earlier sections.",
    tagline: "Published mobile game · vertical progression",
    category: "Game Development",
    categories: ["Game Development", "Level Design", "Gameplay"],
    status: "Published",
    detailLevel: "featured",
    engine: "Unity",
    language: "C#",
    platform: "Mobile",
    date: "June 2025",
    role: "Level design, UI & gameplay systems",
    featured: true,
    description:
      "A 2D platformer about climbing through a vertically stacked world. Falling sends the player back through lower sections, so platform placement and hazards shape both movement and risk.",
    contributions: [
      "Designed and placed the platforms across the game's vertical levels.",
      "Implemented an asteroid level and a snow level with distinct traversal behavior.",
      "Created the falling animation, story, menus, controls, and gameplay UI.",
      "Set up Cinemachine cinematics and prepared the project for mobile publishing.",
    ],
    systems: [
      "Levels are stacked vertically in one scene, making a fall return the player to lower sections.",
      "Snow platforms slow movement; sloped platforms and asteroid patterns change how each section is traversed.",
      "The hold-to-jump-higher mechanic was implemented by a teammate.",
    ],
    designDecisions: [
      "Built progression around upward movement while making a fall meaningful rather than a simple reset.",
      "Used level-specific hazards to make later sections feel mechanically distinct.",
    ],
    technicalChallenges: [
      "Resolved Unity export issues while the team was still learning the engine.",
    ],
    whatILearned: [
      "How to structure and iterate on multi-level platforming spaces.",
      "How to program level-specific mechanics and prepare a mobile build.",
    ],
    result: "Completed and published on Google Play.",
    technologies: ["Unity", "C#", "Cinemachine", "Mobile"],
    links: [
      {
        kind: "store",
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.SevenForgeStudios.MonkeyJump&hl=en_IN",
      },
    ],
  },
  {
    id: "full-throttle",
    title: "Full Throttle",
    shortDescription:
      "A first-person mobile runner where the player dodges traffic anywhere across the road instead of switching between fixed lanes.",
    tagline: "Published mobile game · non-lane-based movement",
    category: "Game Development",
    categories: ["Game Development", "Level Design", "Endless Runner"],
    status: "Published",
    detailLevel: "supporting",
    engine: "Unity",
    language: "C#",
    platform: "Mobile",
    date: "July–August 2025",
    role: "Level design, spawning & UI",
    description:
      "A first-person mobile runner set on a highway. The player can move across the full road while level segments move toward them to create the illusion of continuous forward travel.",
    contributions: [
      "Designed the highway sections with buildings and roadside props.",
      "Implemented the level spawning and deletion loop.",
      "Designed and implemented the gameplay UI.",
    ],
    systems: [
      "Moved level prefabs toward the player instead of building one enormous traversable road.",
      "Used a non-lane-based road layout so traffic could be avoided across the full road width.",
      "Tilt-to-move and tap-to-move controls were implemented by a teammate.",
    ],
    designDecisions: [
      "Designed the road as an open space rather than a three-lane track, changing how players read and avoid traffic.",
    ],
    technicalChallenges: [
      "Corrected unreliable level placement by iterating on the segment spawn positions.",
    ],
    whatILearned: [
      "How level spawning and deletion can support a continuous runner environment.",
      "How to design spaces and UI around an endless movement loop.",
    ],
    result:
      "Completed and previously published; the current store listing is unavailable after the original build was removed.",
    technologies: ["Unity", "C#", "Mobile"],
    // Note: removed from the Play Store due to a vulnerable Unity Android
    // SDK in the build; will be re-uploaded on a new build.
  },
  {
    id: "brick-breaker",
    title: "Brick Breaker",
    shortDescription:
      "A one-level brick breaker built as coursework, focused on paddle movement, ball physics, collisions, and a win state.",
    tagline: "Coursework · fundamentals",
    category: "Coursework",
    categories: ["Coursework", "Game Development"],
    status: "Completed",
    detailLevel: "fundamentals",
    engine: "Unity",
    language: "C#",
    platform: "PC",
    date: "August–September 2025",
    role: "Gameplay developer",
    description:
      "A single-level brick breaker built as college coursework. The round ends when the player clears the brick formation.",
    contributions: [
      "Implemented paddle movement, screen bounds, ball physics, and brick destruction.",
      "Placed the brick formation and built the win/end screen.",
      "Added cleanup when the ball leaves the play area.",
    ],
    technicalChallenges: [
      "Resolved an out-of-bounds ball lifecycle bug during debugging; the original fix was not documented.",
    ],
    whatILearned: ["Unity fundamentals and basic gameplay programming."],
    result: "Completed coursework project; not published.",
    technologies: ["Unity", "C#"],
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird",
    shortDescription:
      "A coursework flying game with a butterfly, moving plant obstacles, jump timing, collision detection, and off-screen cleanup.",
    tagline: "Coursework · fundamentals",
    category: "Coursework",
    categories: ["Coursework", "Game Development"],
    status: "Completed",
    detailLevel: "fundamentals",
    engine: "Unity",
    language: "C#",
    platform: "PC",
    date: "September–October 2025",
    role: "Gameplay developer",
    description:
      "A coursework flying game in which a butterfly moves between carnivorous plant obstacles. The obstacles spawn ahead, move toward the player, and are removed after leaving the play area.",
    contributions: [
      "Implemented obstacle generation, movement, and off-screen cleanup.",
      "Set up the butterfly animation from sprite frames.",
      "Implemented jumping, death, and collision behavior.",
    ],
    whatILearned: [
      "Jump forces, collision detection, and basic Unity gameplay flow.",
    ],
    result: "Completed coursework project; not published.",
    technologies: ["Unity", "C#"],
  },
  {
    id: "terrain-character-controller",
    title: "Terrain Creation & Character Controller",
    shortDescription:
      "A coursework scene combining Unity Terrain design, imported character animation, and a basic drivable car interaction.",
    tagline: "Coursework · environment and character fundamentals",
    category: "Coursework",
    categories: ["Coursework", "Technical / Systems", "Level Design"],
    status: "Completed",
    detailLevel: "supporting",
    engine: "Unity",
    language: "C#",
    platform: "PC",
    date: "October 2025",
    role: "Environment design & gameplay setup",
    description:
      "A 3D coursework scene built around a designed terrain and town. It combines imported character animations with a basic car interaction that hides the player while driving.",
    contributions: [
      "Designed the terrain, town, pond, paths, and foliage using Unity Terrain tools.",
      "Imported the character model and animations from Mixamo.",
      "Configured animation states and triggers for idle, running, jumping, and related states.",
      "Implemented the basic enter, drive, and exit flow with AI assistance.",
    ],
    systems: [
      "A character animation state machine with multiple movement states.",
      "A basic car interaction that hides the character while driving; it does not include enter/exit animations.",
    ],
    technicalChallenges: [
      "Debugged asset import problems, terrain fall-through, and issues in the car interaction.",
    ],
    whatILearned: [
      "Terrain composition, asset integration, and animation state setup.",
    ],
    result: "Completed coursework project; not published.",
    technologies: ["Unity", "C#", "Mixamo", "Unity Terrain"],
  },
  {
    id: "infinite-runner-2",
    title: "Infinite Runner 2",
    shortDescription:
      "A coursework three-lane runner focused on lane changes, obstacle spawning, scoring, and a simple level-completion flow.",
    tagline: "Coursework · three-lane runner",
    category: "Coursework",
    categories: ["Coursework", "Game Development", "Level Design"],
    status: "Completed",
    detailLevel: "fundamentals",
    engine: "Unity",
    language: "C#",
    platform: "PC",
    date: "November 2025",
    role: "Gameplay developer",
    description:
      "A three-lane runner built as college coursework. The player changes lanes to avoid randomly spawning hyena obstacles while a terrain-designed environment frames the route.",
    contributions: [
      "Implemented platform and enemy spawning, lane changing, scoring, and the level-end condition.",
      "Configured running and dying animation control.",
      "Designed the side areas of the route with Unity Terrain tools.",
    ],
    systems: [
      "Three-lane movement with randomly spawned obstacles.",
      "A basic score and level-completion flow.",
    ],
    whatILearned: ["Runner fundamentals, spawning, and basic gameplay flow."],
    result: "Completed coursework project; not published.",
    technologies: ["Unity", "C#", "Unity Terrain"],
  },
  {
    id: "project-mauve",
    title: "Project Mauve",
    shortDescription:
      "An incomplete 2D top-down puzzle concept built around room-to-room exploration, environmental interaction, and personalized narrative clues.",
    tagline: "Personal concept · incomplete",
    category: "Concept",
    categories: ["Concept", "Game Design", "Level Design"],
    status: "Incomplete",
    detailLevel: "concept",
    engine: "Unity",
    platform: "Undecided",
    date: "December 2025",
    role: "Concept and level design",
    description:
      "An incomplete 2D top-down puzzle concept structured around rooms, environmental interactions, and personalized narrative clues. The levels were planned with sprites, but the mechanics were not implemented.",
    contributions: [
      "Created the character sprite and animation from a pixel-art template.",
      "Designed the room layouts and puzzle structure with 2D sprites.",
    ],
    systems: [
      "Planned object interactions that reveal short narrative messages.",
      "Planned room-specific puzzles tied to the game's narrative.",
    ],
    designDecisions: [
      "Designed a small puzzle experience where room layout and interactable props carry the narrative.",
    ],
    whatILearned: ["Aseprite and 2D level design."],
    result: "Incomplete concept; no mechanics or build were completed.",
    technologies: ["Unity", "Aseprite"],
  },
];
