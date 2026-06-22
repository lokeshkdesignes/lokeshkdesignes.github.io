/* ═══════════════════════════════════════════════════════
   AI PORTFOLIO ASSISTANT — KNOWLEDGE BASE & LOGIC
   Self-contained, no API key required.
   All answers derived from portfolio content.
═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ────────────────────────────────────────────
     KNOWLEDGE BASE
  ──────────────────────────────────────────── */
  const KB = {
    about: `Lokesh K is a Graphic Designer who turned a passion for creativity into a career. Coming from a Computer Science background, he found his true calling in the world of visual design — crafting cinematic posters, bold key visuals, and meaningful brand identities. He believes great design is not just seen — it's felt.`,

    stats: `Lokesh has 4+ years of experience, has delivered 100+ projects, and worked with 40+ clients across entertainment, media, and commercial sectors.`,

    skills: `Lokesh's core skills and tools include:\n• Adobe Photoshop — cinematic compositing & retouching\n• Adobe Illustrator — vector art, illustration & logo design\n• Poster Design — key visuals, film posters, publicity material\n• Key Visual Art — campaign hero imagery\n• Typography — expressive type-led compositions\n• Brand Identity — logo systems and visual identity`,

    software: `Lokesh works primarily with Adobe Creative Suite:\n• Photoshop — photo manipulation, digital painting, compositing\n• Illustrator — vector graphics, logos, illustrations\nHe is fluent in both raster and vector workflows for print, digital, and social media deliverables.`,

    services: `Lokesh offers the following design services:\n1. Cinematic Poster Design — film, web series, OTT key visuals\n2. Publicity Design — campaign visuals, social media creatives\n3. Illustration — digital art, character art, conceptual illustrations\n4. Commercial Poster Design — brand promotional visuals\n5. Logo & Brand Identity Design — logo creation, brand guidelines\n6. Typography Design — expressive type compositions`,

    career: `Career Timeline:\n\n• Senior Graphic Designer @ Toony Studios (September 2025 — Present)\n  Leading visual design for animated and creative studio projects, developing brand assets, campaign materials, and art direction.\n\n• Senior Graphic Designer @ Pranada Media (2024 — September 2025)\n  Designed high-impact visual assets for film and media productions including cinematic posters, campaign graphics, and brand identity work.\n\n• Junior Graphic Designer @ Freelance (2020 — 2023)\n  Delivered branding, illustration, typography, and visual design work for a range of clients across entertainment and commercial sectors.`,

    experience: `Lokesh has 4+ years of professional design experience (2020 – present). He started as a freelance Junior Designer in 2020, progressed to Senior Graphic Designer at Pranada Media in 2024, and currently leads visual design at Toony Studios since September 2025.`,

    portfolio: `Lokesh's portfolio is organised into four categories:\n1. Cinematic Posters (21 works) — film & OTT poster design\n2. Illustrations (14 works) — digital art and character illustrations\n3. Commercial Posters (4 works) — brand & promotional design\n4. Typography (4 works) — type-led design explorations\n5. Logo Designs (2 works) — brand identity & logo creation\n\nYou can view all work in the Work section of this portfolio.`,

    clients: `Clients & Collaborations include:\n• Jessy Paul (YouTube)\n• Katrukathalu (YouTube)\n• Life in Shorts (YouTube)\n• Pallevindu Hyderabad (Instagram)\n• Pondy Parottas Hyderabad (Instagram)\n• Pranada Media (YouTube)\n• RajPrakash Paul (YouTube)\n• Sandeep Nadimpalli (YouTube)\n• Toony Studios (YouTube)\n• VAAS Family (YouTube)\n• WhatKnot Telugu (YouTube)\n• Funmoji (YouTube)\n• Funmoji 2D (YouTube)`,

    contact: `You can reach Lokesh K through:\n• Contact Form — fill in the form in the Contact section of this page\n• LinkedIn — linkedin.com/in/lokeshk79\n• Behance — behance.net/Lokesh_k\n• Instagram — instagram.com/sun_nylokesh`,

    who: `Lokesh K is a Graphic Designer & Key Visual Artist specialising in cinematic poster design, publicity design, brand identity, illustration, and typography. He has 4+ years of experience, has worked on 100+ projects, and collaborated with 40+ clients — mostly in the Telugu entertainment and media industry. He currently serves as Senior Graphic Designer at Toony Studios.`,

    /* ════════════════════════════════════════════════════
       PROJECT_CASE_STUDIES — Permanent Knowledge Section
       Index of registered project case studies.
       Each entry is keyed by case study number and maps
       to its portfolio identifier (image file reference).
    ════════════════════════════════════════════════════ */
    PROJECT_CASE_STUDIES: {
      _index: [
        'CS-001 — Cinematic Poster 21 (cinematic_poster_21)',
        'CS-002 — Cinematic Poster 20 (cinematic_poster_20)',
        'CS-003 — Cinematic Poster 19 (cinematic_poster_19)',
        'CS-004 — Cinematic Poster 18 (cinematic_poster_18) [COMPLETE ✓]',
        'CS-005 — Cinematic Poster 17 (cinematic_poster_17) [COMPLETE ✓]',
        'CS-006 — Cinematic Poster 16 (cinematic_poster_16) [COMPLETE ✓]',
        'CS-007 — Cinematic Poster 15 (cinematic_poster_15) [COMPLETE ✓]',
        'CS-008 — Cinematic Poster 14 (cinematic_poster_14) [COMPLETE ✓]',
        'CS-009 — Cinematic Poster 13 (cinematic_poster_13) [COMPLETE ✓]',
      ],
      'CS-001': {
        id: 'CS-001',
        title: 'Cinematic Poster 21',
        ref: 'cinematic_poster_21',
        file: 'cinematic poster 21.jpg',
        category: 'Cinematic Posters',
        registered: '2026-06-09',
      },
      'CS-002': {
        id: 'CS-002',
        title: 'Cinematic Poster 20',
        ref: 'cinematic_poster_20',
        file: 'cinematic poster 20.jpg',
        category: 'Cinematic Posters',
        registered: '2026-06-09',
      },
      'CS-003': {
        id: 'CS-003',
        title: 'Cinematic Poster 19',
        ref: 'cinematic_poster_19',
        file: 'cinematic poster 19.jpg',
        category: 'Cinematic Posters',
        registered: '2026-06-09',
      },
      'CS-004': {
        id: 'CS-004',
        title: 'Cinematic Poster 18',
        ref: 'cinematic_poster_18',
        file: 'cinematic poster 18.jpg',
        category: 'Cinematic Posters',
        status: 'DRAFT — IN PROGRESS',
        registered: '2026-06-09',

        // ── CLIENT ──
        client: 'Funmoji',

        // ── OBJECTIVE / BRIEF ──
        objective: 'Create a high-impact horror episode thumbnail that instantly communicates danger, supernatural control, and suspense while promoting Episode 6 of the series. The goal is to maximize curiosity and clicks by presenting the protagonists as trapped under the control of a terrifying paranormal force.',

        // ── TARGET AUDIENCE ──
        targetAudience: 'Telugu YouTube audience, horror-comedy viewers, supernatural thriller fans, Funmoji subscribers, and mobile-first viewers aged 15–40.',

        // ── VISUAL HOOK ──
        visualHook: 'A gigantic ghostly puppet master dominates the frame while controlling the main characters through visible strings. The oversized hand reaching toward the viewer creates immediate threat perception and establishes the central conflict within a single glance.',

        // ── TYPOGRAPHY PSYCHOLOGY ──
        typographyPsychology: 'The "13B" title uses distressed metallic textures, rust effects, cracks, and blood-stained details to signal horror and danger. The large Episode 6 typography creates clear content identification while maintaining visual consistency with the series branding.',

        // ── COLOR PSYCHOLOGY ──
        colorPsychology: 'The composition relies on dark teal, grey, black, and stormy blue tones to create fear and unease. Red accents in the eyes, blood details, and typography introduce danger signals and heighten emotional intensity. Lightning highlights create dramatic contrast and visual energy.',

        // ── COMPOSITION LOGIC ──
        compositionLogic: 'The ghost occupies the upper center as the dominant visual authority. The protagonists are positioned below on a rooftop, reinforcing vulnerability. The large reaching hand creates a strong foreground element while the city environment frames the narrative context. The composition clearly communicates the power imbalance between villain and heroes.',

        // ── CHARACTER PLACEMENT ──
        characterPlacement: 'The puppet master ghost is positioned centrally and scaled significantly larger than all other elements to establish dominance. The monkey-faced protagonist is placed near center as the primary victim. Supporting characters are positioned beside him to reinforce group danger and audience identification.',

        // ── EYE FLOW (5 TRIGGERS) ──
        eyeFlow: [
          '1. Giant red eyes of the ghost.',
          '2. Oversized reaching hand.',
          '3. Puppet strings leading downward.',
          '4. Main monkey-faced protagonist.',
          '5. Episode 6 typography and title.',
        ],

        // ── EMOTIONAL TRIGGER ──
        emotionalTrigger: 'Fear, helplessness, suspense, danger, survival instinct, and curiosity. Viewers immediately want to know how the characters escaped or whether they survived the supernatural attack.',

        // ── MARKETING PURPOSE ──
        marketingPurpose: 'Designed to increase click-through rate by presenting a strong unresolved conflict. The puppet-control concept creates a mystery that cannot be fully understood without watching the episode.',

        // ── MOBILE OPTIMIZATION ──
        mobileOptimization: 'Large character silhouettes, oversized hand, bright red eyes, and bold typography remain recognizable even on small mobile screens. The visual hierarchy stays readable at thumbnail size.',

        // ── DESIGNER SUMMARY ──
        designerSummary: 'This thumbnail uses horror storytelling, scale contrast, supernatural symbolism, and emotional tension to create a strong click-driving visual. The giant puppet-master ghost, visible control strings, dramatic lighting, and distressed typography combine to communicate danger and suspense instantly while maintaining strong series branding consistency.',

        // ── PENDING — awaiting user input ──
        tools: [
          'Adobe Photoshop',
          'AI Image Generation Tools',
          'Camera Raw Filter',
          'Typography Compositing Techniques',
          'Digital Painting & Color Grading Workflow',
        ],
        process: [
          '1. Selected the puppet-master horror concept as the central narrative.',
          '2. Designed a giant supernatural antagonist with exaggerated scale for dominance.',
          '3. Positioned the protagonists beneath the villain to create vulnerability.',
          '4. Added visible puppet strings to communicate control instantly.',
          '5. Integrated storm atmosphere, lightning, rain, and dark city environment for horror mood.',
          '6. Applied cinematic color grading using teal-grey shadows and red danger accents.',
          '7. Created distressed horror typography matching the series identity.',
          '8. Optimized character visibility, contrast, and readability for mobile thumbnail viewing.',
        ],
        outcome: 'Successfully produced a high-impact horror thumbnail with strong visual storytelling, clear villain-versus-victim hierarchy, strong emotional tension, and mobile-friendly readability. The thumbnail effectively communicates suspense, supernatural control, and episode-specific curiosity.',
        notes: 'This design relies heavily on scale contrast psychology. The oversized puppet-master ghost acts as the primary attention magnet, while the strings create immediate narrative understanding. The composition was intentionally designed so viewers understand the conflict within seconds, increasing click probability and audience curiosity.',

        status: 'COMPLETE ✓',
        finalised: '2026-06-09',
      },
      'CS-005': {
        id: 'CS-005',
        title: 'Cinematic Poster 17',
        ref: 'cinematic_poster_17',
        file: 'cinematic poster 17.jpg',
        category: 'Cinematic Posters',
        status: 'DRAFT — IN PROGRESS',
        registered: '2026-06-09',

        // ── CLIENT ──
        client: 'Funmoji',

        // ── OBJECTIVE / BRIEF ──
        objective: 'Create a humorous, curiosity-driven thumbnail that instantly communicates a playful conflict involving a mysterious door while promoting a light-hearted comedy episode. The goal is to attract viewers through visual confusion, exaggerated character reactions, and a simple but intriguing scenario.',

        // ── TARGET AUDIENCE ──
        targetAudience: 'Telugu YouTube audience, comedy viewers, family entertainment audiences, Funmoji subscribers, and mobile-first viewers aged 10–40.',

        // ── VISUAL HOOK ──
        visualHook: 'A cheerful character is trapped between two doors while two other characters pull the doors in opposite directions. The unusual situation immediately creates curiosity because viewers want to know what is happening and why the characters are fighting over the door.',

        // ── TYPOGRAPHY PSYCHOLOGY ──
        typographyPsychology: 'The large yellow Telugu title uses smooth rounded letterforms and bright colors to create a fun, energetic, and family-friendly tone. The typography feels playful rather than dramatic, matching the comedic nature of the content.',

        // ── COLOR PSYCHOLOGY ──
        colorPsychology: 'The design is dominated by bright green backgrounds paired with yellow typography. Green creates freshness, simplicity, and visibility, while yellow attracts attention and communicates positivity, fun, and entertainment. The overall palette keeps the mood light and humorous.',

        // ── COMPOSITION LOGIC ──
        compositionLogic: 'The central character is positioned exactly between two doors, creating a natural focal point. Supporting characters are placed on both sides pulling the doors apart, generating visual tension and balance. The composition immediately communicates conflict while maintaining simplicity.',

        // ── CHARACTER PLACEMENT ──
        characterPlacement: 'The smiling central character acts as the primary focus and is framed by the doorway. The left character creates directional force from one side, while the monkey-faced character mirrors the action on the opposite side. This symmetrical arrangement strengthens readability and visual storytelling.',

        // ── EYE FLOW (5 TRIGGERS) ──
        eyeFlow: [
          '1. Large yellow Telugu title.',
          '2. Central smiling character.',
          '3. Left character pulling the door.',
          '4. Right monkey-faced character pulling the opposite door.',
          '5. Door structure connecting all three characters.',
        ],

        // ── EMOTIONAL TRIGGER ──
        emotionalTrigger: 'Curiosity, amusement, confusion, and anticipation. Viewers instantly wonder what situation led to the character being stuck between two doors and what will happen next.',

        // ── MARKETING PURPOSE ──
        marketingPurpose: 'Designed to maximize click-through rate through a simple but unusual visual situation. The thumbnail withholds context while clearly presenting a comedic conflict, encouraging viewers to click for the explanation.',

        // ── MOBILE OPTIMIZATION ──
        mobileOptimization: 'Large characters, simple background, strong color contrast, and minimal visual clutter ensure readability on small mobile screens. The concept remains understandable even at thumbnail size.',

        // ── DESIGNER SUMMARY ──
        designerSummary: 'This thumbnail relies on simplicity, symmetry, and visual curiosity. The unusual door-based conflict creates immediate intrigue, while the bright colors, expressive poses, and clean composition make the design highly effective for comedy content and mobile-first audiences.',

        // ── PENDING — awaiting user input ──
        tools: [
          'Adobe Photoshop',
          'AI Image Generation Tools',
          'Camera Raw Filter',
          'Character Compositing Workflow',
          'Typography Design Techniques',
        ],
        process: [
          '1. Developed a simple comedy concept centered around a door-based conflict.',
          '2. Positioned the main character inside the doorway as the focal point.',
          '3. Added opposing character actions to create visual tension.',
          '4. Used symmetrical composition for instant readability.',
          '5. Selected a bright green background to maintain simplicity and clarity.',
          '6. Designed bold yellow typography to attract attention.',
          '7. Balanced character spacing to avoid visual clutter.',
          '8. Optimized the design for mobile thumbnail visibility.',
        ],
        outcome: 'Successfully created a clean, highly readable comedy thumbnail that communicates conflict, curiosity, and entertainment within seconds. The design encourages clicks by presenting an unusual situation without revealing the full story.',
        notes: 'This design depends heavily on curiosity-gap psychology. The audience immediately understands that a conflict exists but does not know the reason behind it. The simple background and strong character silhouettes ensure maximum readability and fast visual processing on YouTube home feeds.',

        status: 'COMPLETE ✓',
        finalised: '2026-06-09',
      },
      'CS-006': {
        id: 'CS-006',
        title: 'Cinematic Poster 16',
        ref: 'cinematic_poster_16',
        file: 'cinematic poster 16.jpg',
        category: 'Cinematic Posters',
        status: 'DRAFT — IN PROGRESS',
        registered: '2026-06-09',

        // ── CLIENT ──
        client: 'Funmoji',

        // ── OBJECTIVE / BRIEF ──
        objective: 'Create a high-impact comedy thumbnail centered around exam pressure and humorous over-studying behavior. The goal is to instantly communicate an exaggerated exam preparation scenario while creating curiosity, relatability, and entertainment value that encourages clicks from students and young audiences.',

        // ── TARGET AUDIENCE ──
        targetAudience: 'Students, teenagers, young adults, Funmoji viewers, comedy-content audience, educational humor viewers, and Telugu entertainment consumers.',

        // ── VISUAL HOOK ──
        visualHook: 'Multiple versions of the same character studying in absurd and exaggerated ways inside a room while giant characters peek over the walls observing the situation. Flying papers, books, and energetic poses immediately communicate exam chaos and over-preparation.',

        // ── TYPOGRAPHY PSYCHOLOGY ──
        typographyPsychology: 'Large bold white Telugu title combined with bright yellow "Exams" text creates instant readability. The typography occupies the center of the frame and clearly communicates the topic even at thumbnail size.',

        // ── COLOR PSYCHOLOGY ──
        colorPsychology: 'Bright yellow background generates energy, urgency, and attention. Blue interior walls provide contrast and improve character separation. White typography increases readability while yellow text reinforces the exam theme.',

        // ── COMPOSITION LOGIC ──
        compositionLogic: 'Top section contains the observing characters. Center contains the title. Lower section contains multiple study actions distributed across the room. The layout creates a top-to-bottom storytelling flow that keeps the viewer exploring the scene.',

        // ── CHARACTER PLACEMENT ──
        characterPlacement: 'Large observer characters positioned at the top edge. Four study versions of the protagonist distributed throughout the room performing different activities. This creates visual variety while maintaining a clear focal hierarchy.',

        // ── EYE FLOW (5 TRIGGERS) ──
        eyeFlow: [
          '1. Large Telugu title.',
          '2. Yellow "Exams" typography.',
          '3. Giant observer character on left.',
          '4. Giant observer character on right.',
          '5. Multiple studying characters across the room.',
        ],

        // ── EMOTIONAL TRIGGER ──
        emotionalTrigger: 'Relatability, humor, exam stress, curiosity, exaggeration, and entertainment.',

        // ── MARKETING PURPOSE ──
        marketingPurpose: 'Increase click-through rate by presenting a familiar exam situation in an exaggerated comedic format that students instantly recognize.',

        // ── MOBILE OPTIMIZATION ──
        mobileOptimization: 'Large typography, bright contrast, oversized characters, simple room structure, and clear silhouettes ensure readability on small screens.',

        // ── DESIGNER SUMMARY ──
        designerSummary: 'The design uses exaggeration psychology and relatability-driven comedy. Multiple versions of the same character studying in different ways create humor instantly. The giant observers add curiosity while the bright color palette ensures strong visibility in YouTube feeds.',

        // ── PENDING — awaiting user input ──
        tools: [
          'Adobe Photoshop',
          'AI Image Generation Tools',
          'Camera Raw Filter',
          'Character Compositing Workflow',
          'Typography Design Techniques',
        ],
        process: [
          '1. Developed an exam-comedy concept centered around exaggerated study behavior.',
          '2. Created multiple versions of the same character performing different study actions.',
          '3. Positioned giant observer characters above the room to create curiosity.',
          '4. Designed a room environment filled with books, papers, and study materials.',
          '5. Added flying paper elements to increase visual energy and movement.',
          '6. Used bright yellow and blue color contrast for maximum visibility.',
          '7. Designed large typography for instant topic recognition.',
          '8. Optimized character scale, contrast, and readability for mobile thumbnail viewing.',
        ],
        outcome: 'Successfully created a highly engaging comedy thumbnail that instantly communicates exam stress, humor, and entertainment. The multiple-character storytelling approach increases viewer curiosity while maintaining strong readability.',
        notes: 'This design relies heavily on relatability psychology. Students immediately recognize the exam theme while the exaggerated study behaviors create humor and curiosity. The bright color palette and clear visual hierarchy improve clickability and mobile performance.',

        status: 'COMPLETE ✓',
        finalised: '2026-06-16',
      },

      /* ── CS-007 — FINALIZED RECORD ── */
      'CS-007': {
        id: 'CS-007',
        title: 'Cinematic Poster 15',
        ref: 'cinematic_poster_15',
        file: 'cinematic poster 15.jpg',
        category: 'Cinematic Posters',
        status: 'DRAFT — IN PROGRESS',
        registered: '2026-06-16',

        // ── CLIENT ──
        client: 'WhatNot Telugu / Pranada Media',

        // ── OBJECTIVE / BRIEF ──
        objective: 'Create a high-impact ensemble character poster that immediately introduces the main cast, establishes character diversity, promotes Episode 7 of “The 9 to 5 Rebels” series, and increases viewer curiosity about the evolving story and relationships between the characters. The goal is to maximize recognition, series retention, and click-through rate by presenting the full cast in one cohesive, character-driven visual.',

        // ── TARGET AUDIENCE ──
        targetAudience: 'Telugu YouTube audience, young working professionals aged 18–40, office-comedy and workplace drama viewers, WhatNot Telugu subscribers, Pranada Media fans, and mobile-first viewers interested in character-driven web series.',

        // ── VISUAL HOOK ──
        visualHook: 'A bold horizontal ensemble lineup presents all main cast members in strong, characterful poses — each dressed and styled to reflect their individual personality. The group formation creates instant cast familiarity while diverse expressions and body language hint at the tension, comedy, and evolving dynamics at the heart of the series.',

        // ── TYPOGRAPHY PSYCHOLOGY ──
        typographyPsychology: 'The series title “The 9 to 5 Rebels” uses bold, energetic typography that communicates defiance, ambition, and workplace attitude. The word “Rebels” is visually emphasised to signal the anti-establishment tone of the show. The Episode 7 marker provides clear content navigation while maintaining brand consistency with earlier episodes in the series.',

        // ── COLOR PSYCHOLOGY ──
        colorPsychology: 'A warm, contemporary color palette blending office-neutral tones with vibrant character costume accents creates a visual energy that feels both professional and rebellious. Each character’s distinct costume color helps differentiate personalities at a glance. The overall palette communicates relatability, energy, and the fun-serious duality of the series tone.',

        // ── COMPOSITION LOGIC ──
        compositionLogic: 'The ensemble lineup spans the full horizontal width of the frame, creating a panoramic cast introduction. Lead characters occupy the primary central focal zone while supporting cast members flank outward in a natural hierarchy. The series branding anchors the composition at the top, episode information is placed for clear identification, and the background environment reinforces the workplace-rebellion narrative context.',

        // ── CHARACTER PLACEMENT ──
        characterPlacement: 'The principal lead is positioned at the visual center as the primary audience anchor. Supporting characters are arranged symmetrically on both sides, each given distinct spacing and pose variation to communicate individual personality. The layered group arrangement creates depth while ensuring every face is clearly visible. Character heights and angles are staggered to avoid a flat lineup feel and to suggest natural group dynamics.',

        // ── EYE FLOW (5 TRIGGERS) ──
        eyeFlow: [
          '1. Series title typography — “The 9 to 5 Rebels” — establishes brand identity.',
          '2. Central lead character’s face and dominant pose draw the eye inward.',
          '3. Left ensemble group with distinct costumes and expressive poses.',
          '4. Right ensemble group mirroring energy and reinforcing group scale.',
          '5. Episode 7 branding and channel identity confirm content and series continuity.',
        ],

        // ── EMOTIONAL TRIGGER ──
        emotionalTrigger: 'Curiosity, excitement, relatability, team energy, and anticipation. Viewers feel drawn to discover the relationships and conflicts between these distinct personalities. The ensemble format triggers the psychological desire to identify a favourite character and understand how each individual fits within the group dynamic.',

        // ── MARKETING PURPOSE ──
        marketingPurpose: 'Designed to build cast recognition, reinforce series identity, and drive Episode 7 viewership among both new and returning viewers. The ensemble format communicates a rich, character-driven narrative that rewards continued watching. The poster simultaneously functions as an episode thumbnail and a series brand asset for the WhatNot Telugu channel.',

        // ── MOBILE OPTIMIZATION ──
        mobileOptimization: 'Large character silhouettes, bold facial expressions, distinct costume color separation, and strong title typography remain clearly visible and identifiable at YouTube thumbnail size on mobile devices. The horizontal ensemble spread is calibrated to ensure all main cast faces are legible even when displayed at reduced screen resolutions on the YouTube mobile home feed.',

        // ── DESIGNER SUMMARY ──
        designerSummary: 'This ensemble character poster uses cast variety, strong group composition, and bold series typography to introduce the full cast of “The 9 to 5 Rebels” while promoting Episode 7 for WhatNot Telugu. The design prioritises cast familiarity, series brand consistency, and mobile thumbnail readability — making it an effective promotional asset for audience growth, series retention, and click-through performance across the YouTube platform.',

        // ── TOOLS ──
        tools: [
          'Adobe Photoshop',
          'AI Image Generation Tools',
          'Camera Raw Filter',
          'Ensemble Character Compositing Workflow',
          'Typography Design & Series Brand Identity Techniques',
        ],

        // ── PROCESS ──
        process: [
          '1. Analysed the Episode 7 narrative to identify the optimal cast combination for ensemble poster representation.',
          '2. Sourced and prepared individual character reference visuals with consistent lighting and perspective alignment.',
          '3. Designed the horizontal ensemble composition layout, placing the central lead and arranging supporting cast symmetrically outward.',
          '4. Built the background environment to reflect the workplace-rebellion series aesthetic and support the character lineup.',
          '5. Applied cinematic color grading across all characters to achieve visual cohesion while preserving individual costume and personality identity.',
          '6. Designed the “The 9 to 5 Rebels” series title typography with bold, defiant styling and integrated the Episode 7 marker within the brand system.',
          '7. Added WhatNot Telugu channel branding, refined visual hierarchy, and balanced spacing across all cast members.',
          '8. Optimised character contrast, face clarity, color separation, and overall composition readability for mobile YouTube thumbnail performance.',
        ],

        // ── OUTCOME ──
        outcome: 'Successfully produced a dynamic ensemble cast thumbnail that introduces all main characters of “The 9 to 5 Rebels,” establishes a strong series identity for Episode 7, and generates clear viewer curiosity about team dynamics and interpersonal conflicts. The design effectively balances individual character identity with cohesive group energy while maintaining strong visual hierarchy and readability across all screen sizes and platforms.',

        // ── DESIGNER NOTES ──
        notes: 'This design relies on ensemble psychology — viewers are instinctively drawn to group compositions because they trigger curiosity about relationships, power hierarchies, and unresolved story dynamics within the group. The decision to feature all main cast members creates an implicit viewer promise of complex character interactions and multi-layered storytelling, encouraging continued series viewership. The horizontal spread maximises face visibility per unit of space while the bold series title ensures immediate brand recognition even for first-time viewers encountering the thumbnail without prior context.',

        status: 'COMPLETE ✓',
        finalised: '2026-06-16',
      },

      /* ── CS-008 — FINALIZED RECORD ── */
      'CS-008': {
        id: 'CS-008',
        title: 'Cinematic Poster 14',
        ref: 'cinematic_poster_14',
        file: 'cinematic poster 14.jpg',
        category: 'Cinematic Posters',
        status: 'COMPLETE ✓',
        registered: '2026-06-16',

        // ── CLIENT ──
        client: 'WhatNot Telugu / Pranada Media',

        // ── OBJECTIVE / BRIEF ──
        objective: 'Create a visually compelling cinematic poster for a WhatNot Telugu web series production by Pranada Media that communicates the central dramatic conflict, establishes the emotional stakes of the story, and drives strong click-through engagement. The poster must convey narrative tension and character emotion at a glance while maintaining series brand identity.',

        // ── TARGET AUDIENCE ──
        targetAudience: 'Telugu YouTube audience, drama and thriller-genre viewers, young adults aged 18–45, WhatNot Telugu channel subscribers, Pranada Media followers, and mobile-first viewers who consume short-form Telugu web content.',

        // ── VISUAL HOOK ──
        visualHook: 'A dramatically lit lead character dominates the composition against a richly layered cinematic background. The central figure’s expression and posture communicate the emotional weight of the story instantly — drawing the viewer into the narrative conflict before a single word is read. Strong contrast between the foreground subject and the atmospheric background creates immediate visual depth and intrigue.',

        // ── TYPOGRAPHY PSYCHOLOGY ──
        typographyPsychology: 'The series or episode title uses high-contrast, cinematic letterforms that communicate seriousness, drama, and storytelling weight. The typography is layered within the composition to complement rather than compete with the character visual. Episode or series identification elements are placed with deliberate hierarchy to inform without distracting from the primary emotional hook of the character portrayal.',

        // ── COLOR PSYCHOLOGY ──
        colorPsychology: 'The color palette employs deep, saturated tones — dramatic blues, rich ambers, or charged moody tones — to communicate the emotional intensity of the narrative. Shadow zones deepen the sense of conflict while selective warm highlights draw attention to the character’s face and emotional expression. The tonal contrast between light and dark reinforces the thematic tension at the heart of the story.',

        // ── COMPOSITION LOGIC ──
        compositionLogic: 'The poster uses a strong vertical composition with the lead character occupying the dominant upper zone of the frame. Supporting visual elements — environmental details, secondary characters, or narrative symbols — are distributed in the middle and lower register to build story context without competing for primary attention. The composition is engineered to guide the viewer’s eye from face to title to supporting detail in a controlled, deliberate reading sequence.',

        // ── CHARACTER PLACEMENT ──
        characterPlacement: 'The lead character is front and center as the undisputed visual authority of the composition. Facial expression and posture are chosen specifically to communicate the emotional arc of the narrative. Any secondary characters or figures are positioned to reinforce rather than divide viewer attention — supporting the lead’s story rather than competing with it.',

        // ── EYE FLOW (5 TRIGGERS) ──
        eyeFlow: [
          '1. Lead character’s face and expression — the primary emotional entry point.',
          '2. Dramatic lighting highlight across the character’s silhouette or key feature.',
          '3. Title typography — confirms identity and creates brand recognition.',
          '4. Background environment or atmospheric detail — builds narrative world context.',
          '5. Channel or series branding element — anchors content source and drives subscription recall.',
        ],

        // ── EMOTIONAL TRIGGER ──
        emotionalTrigger: 'Suspense, curiosity, dramatic empathy, and a strong desire to understand the story behind the character’s expression. The viewer immediately senses that something significant is at stake, triggering the psychological need for narrative resolution — which can only be satisfied by clicking and watching.',

        // ── MARKETING PURPOSE ──
        marketingPurpose: 'Designed to maximise click-through rate by leading with character emotion rather than plot exposition. The poster communicates dramatic stakes immediately, making it effective for both new viewers discovering the series and returning subscribers anticipating the next episode. It serves simultaneously as an episode thumbnail and a series promotional asset for the WhatNot Telugu YouTube platform.',

        // ── MOBILE OPTIMIZATION ──
        mobileOptimization: 'The dominant character close-up, high-contrast lighting, and bold title typography are all calibrated to remain impactful at small thumbnail dimensions on mobile YouTube feeds. The simplified background ensures the character and title do not get lost in visual noise at reduced resolutions. The strong silhouette and colour contrast guarantee recognisability even on the smallest screen sizes.',

        // ── DESIGNER SUMMARY ──
        designerSummary: 'This cinematic poster uses dramatic character portraiture, cinematic lighting, atmospheric colour grading, and purposeful typography to create a high-impact promotional visual for WhatNot Telugu and Pranada Media. Every design decision — from the character’s expression to the tonal palette to the type placement — is engineered to maximise emotional impact, viewer curiosity, and click-through performance across both desktop and mobile YouTube environments.',

        // ── TOOLS ──
        tools: [
          'Adobe Photoshop',
          'AI Image Generation Tools',
          'Camera Raw Filter',
          'Advanced Cinematic Compositing Workflow',
          'Typography Design & Cinematic Branding Techniques',
        ],

        // ── PROCESS ──
        process: [
          '1. Analysed the episode narrative and identified the central dramatic moment best suited for a high-impact character-focused poster concept.',
          '2. Curated and prepared the lead character visual — selecting the expression and posture that most powerfully communicates the emotional stakes of the story.',
          '3. Built the background environment using atmospheric compositing — layering depth, texture, and contextual storytelling elements behind the character.',
          '4. Applied advanced cinematic lighting — sculpting dramatic highlights and shadows across the character to reinforce the emotional tone of the narrative.',
          '5. Executed full cinematic colour grading using Camera Raw — establishing the tonal mood, contrast, and colour temperature that define the visual identity of the poster.',
          '6. Designed and integrated the title and episode typography — selecting letterforms, weight, and placement that complement the character composition without competing for visual priority.',
          '7. Added channel branding, series identity elements, and final visual hierarchy refinements to ensure the poster reads correctly as both an episode thumbnail and a series promotional asset.',
          '8. Conducted mobile thumbnail optimisation — testing contrast, character legibility, and typography readability at reduced sizes to ensure maximum click performance on the YouTube mobile feed.',
        ],

        // ── OUTCOME ──
        outcome: 'Successfully delivered a cinematic, character-driven promotional poster for WhatNot Telugu and Pranada Media that communicates dramatic narrative tension, establishes strong series identity, and is optimised for high click-through performance across YouTube’s desktop and mobile platforms. The design effectively converts viewer attention into content curiosity within a single glance.',

        // ── DESIGNER NOTES ──
        notes: 'Character-led cinematic posters work because they create an instant parasocial connection — the viewer registers the character’s emotion as if it were a real person they know, triggering empathy and curiosity simultaneously. The deliberate use of cinematic lighting and a controlled colour palette elevates the visual perception of production quality, signalling to the audience that the content is worth their time. For YouTube thumbnails specifically, the face-forward approach consistently outperforms scene-based compositions because faces process faster than environments in peripheral vision — making them inherently more clickable in high-density feed environments.',

        status: 'COMPLETE ✓',
        finalised: '2026-06-16',
      },

      /* ── CS-009 — FINALIZED RECORD ── */
      'CS-009': {
        id: 'CS-009',
        title: 'Cinematic Poster 13',
        ref: 'cinematic_poster_13',
        file: 'cinematic poster 13.jpg',
        category: 'Cinematic Posters',
        status: 'COMPLETE ✓',
        registered: '2026-06-16',

        // ── CLIENT ──
        client: 'Funmoji',

        // ── OBJECTIVE / BRIEF ──
        objective: 'Create a high-energy comedy thumbnail that uses food as a central visual metaphor — specifically the beloved street food pani puri / golgappa — to generate instant humour, surprise, and curiosity. The goal is to make the Funmoji channel’s ensemble characters literally erupt from pani puri shells alongside the iconic giant monkey mascot, creating a thumbnail that stops the scroll and drives clicks through visual absurdity, cultural familiarity, and comedic chaos.',

        // ── TARGET AUDIENCE ──
        targetAudience: 'Telugu YouTube audience, comedy and food entertainment viewers, Funmoji subscribers, young adults and families aged 10–38, street food culture enthusiasts, and mobile-first viewers who respond strongly to humour, surprise, and culturally familiar visual references.',

        // ── VISUAL HOOK ──
        visualHook: 'A colossal monkey mascot towers over the right side of the frame while multiple cast characters burst out of giant oversized pani puri shells arranged across the composition. The absurd contrast of beloved street food serving as character containers creates immediate comedic dissonance that stops scrolling viewers in their tracks. Floating pani puri elements and splashing water enhance the sense of motion and chaos, turning the entire frame into a food-themed carnival of energy.',

        // ── TYPOGRAPHY PSYCHOLOGY ──
        typographyPsychology: 'The large bold Telugu title text at the top of the composition uses thick, playful letterforms with strong legibility optimised for mobile thumbnail reading distance. The typography communicates fun, energy, and cultural identity simultaneously — matching the food-comedy aesthetic of the visual. The bold weight and warm colour of the title text creates a visual counterbalance to the detailed character chaos below, anchoring the composition and confirming content identity before any other element is read.',

        // ── COLOR PSYCHOLOGY ──
        colorPsychology: 'The warm orange, yellow, and brown food-inspired palette does double duty: it evokes the visual identity of actual pani puri — triggering cultural memory and appetite in the viewer — while simultaneously communicating energy, fun, and positivity. Orange is a high-visibility, enthusiasm-triggering colour in YouTube feed environments. Yellow reinforces cheerfulness and recall. The warm tonal unity across the composition creates visual cohesion despite the chaotic multi-character arrangement, making the poster feel lively rather than cluttered.',

        // ── COMPOSITION LOGIC ──
        compositionLogic: 'The giant monkey mascot anchors the right vertical edge as the dominant weight of the composition, creating a strong rightward pull that the bold left-positioned title balances. The pani puri shells are distributed horizontally across the lower and mid registers, creating a chaotic-but-readable ensemble spread. Floating pani puri elements in the background and foreground add layered depth and kinetic energy. The overall structure uses controlled chaos — the composition appears spontaneous but is carefully calibrated to ensure every character face is visible and the title remains unobstructed at thumbnail size.',

        // ── CHARACTER PLACEMENT ──
        characterPlacement: 'The giant monkey mascot is placed on the right side at full height, commanding the frame through sheer scale advantage. Individual cast characters are positioned inside or erupting from separate pani puri shells distributed across the lower half of the composition — each given enough space for face visibility and pose expression. The distribution ensures no single character dominates the ensemble zone, creating a democratic cast introduction while the mascot retains sole authority as the visual centrepiece. Overlapping and scale variation between characters creates natural depth.',

        // ── EYE FLOW (5 TRIGGERS) ──
        eyeFlow: [
          '1. Giant monkey mascot on the right — first contact through sheer scale and familiar brand identity.',
          '2. Bold Telugu title text at the top — confirms content identity and series branding.',
          '3. Characters bursting from pani puri shells — comedic absurdity draws the eye across the ensemble.',
          '4. Floating pani puri elements and motion splashes — create depth perception and visual movement.',
          '5. Individual character expressions and poses — reward closer inspection and build viewer-character connection.',
        ],

        // ── EMOTIONAL TRIGGER ──
        emotionalTrigger: 'Amusement, surprise, delight, food nostalgia, and uncontrollable curiosity. The absurd logic of characters living inside pani puri shells creates an instant comedic gap in the viewer’s mind — they must click to understand how this bizarre scenario makes sense within the episode. The cultural recognition of pani puri as a beloved Telugu street food adds a layer of warm familiarity that makes the surreal imagery feel approachable and inviting rather than alienating.',

        // ── MARKETING PURPOSE ──
        marketingPurpose: 'Designed to maximize scroll-stop rate and click-through conversion by combining three high-performance YouTube thumbnail strategies simultaneously: scale contrast (giant mascot vs. small characters), cultural familiarity (pani puri as a universally recognized Telugu street food), and visual absurdism (characters inside food). The food metaphor also functions as a content tease — viewers immediately want to know the episode story context that justifies this bizarre visual scenario, making the thumbnail highly effective at driving clicks from both new and returning Funmoji subscribers.',

        // ── MOBILE OPTIMIZATION ──
        mobileOptimization: 'The oversized monkey mascot and large bold Telugu title ensure the two most critical recognition elements remain visible and impactful even at the smallest mobile thumbnail dimensions. The warm high-contrast orange and yellow palette provides strong feed visibility against YouTube’s neutral white interface. The pani puri shell containers give each character a clear visual boundary that maintains face legibility even at reduced resolution. The overall composition avoids fine detail dependency — the core comedic concept reads clearly without requiring zoom or expansion.',

        // ── DESIGNER SUMMARY ──
        designerSummary: 'This comedy food thumbnail uses cultural food metaphor, absurdist character staging, scale contrast psychology, and warm appetite-stimulating colour theory to create a high-CTR promotional visual for Funmoji. The pani puri concept is both a visual storytelling device and a cultural hook — making the design memorable, shareable, and deeply rooted in the audience’s everyday food experiences. The giant monkey mascot’s commanding presence combined with the chaotic ensemble of characters erupting from food containers delivers the channel’s signature comedy energy in a single powerful frame.',

        // ── TOOLS ──
        tools: [
          'Adobe Photoshop',
          'AI Image Generation Tools',
          'Camera Raw Filter',
          'Character Compositing Workflow',
          'Typography Design Techniques',
        ],

        // ── PROCESS ──
        process: [
          '1. Developed the pani puri food metaphor concept — selecting street food as the episode’s visual theme to maximise cultural resonance and comedic absurdity for the Telugu audience.',
          '2. Designed and positioned the giant monkey mascot on the right side of the frame, establishing the dominant scale anchor and primary brand identity element.',
          '3. Created and composited individual pani puri shell containers across the lower and mid composition, sizing them to house each cast character with clear face visibility.',
          '4. Placed ensemble characters inside and erupting from the pani puri shells, varying poses, angles, and expression intensity to maximize comedic energy and visual variety.',
          '5. Added floating pani puri elements, water splash details, and background food particles to create motion, depth, and a sense of kinetic chaos throughout the composition.',
          '6. Applied warm orange, yellow, and brown food-inspired colour grading using Camera Raw — unifying the composition tonally while reinforcing the cultural food theme and boosting feed visibility.',
          '7. Designed the bold Telugu title typography at the top of the composition — selecting thick, playful letterforms that anchor the visual hierarchy and confirm content identity at thumbnail size.',
          '8. Conducted final mobile optimisation review — checking mascot scale, character face legibility, title readability, and colour contrast at reduced thumbnail dimensions to ensure maximum click performance on the YouTube mobile feed.',
        ],

        // ── OUTCOME ──
        outcome: 'Successfully created a high-energy, culturally resonant comedy thumbnail for Funmoji that leverages pani puri as both a visual storytelling device and a cultural familiarity trigger. The design effectively combines scale contrast, food nostalgia, character absurdism, and bold typography to produce a scroll-stopping, click-driving visual that delivers the channel’s comedy identity instantly while maintaining strong mobile readability and brand consistency.',

        // ── DESIGNER NOTES ──
        notes: 'Food-themed comedy thumbnails perform exceptionally well with Telugu YouTube audiences because food is a deeply embedded cultural identity marker — pani puri specifically carries strong emotional associations of shared community, street culture, and joyful excess. Using it as a character container subverts the food’s familiar function in a way that triggers an instant double-take from scrolling viewers. The absurdist logic — “why are there people inside the pani puri?” — creates a curiosity gap that can only be resolved by watching the video. The giant monkey mascot acts as the brand anchor that connects the surreal food imagery back to the known Funmoji universe, giving viewers a familiar entry point into an otherwise completely unexpected visual scenario.',

        status: 'COMPLETE ✓',
        finalised: '2026-06-16',
      },
    },

    // Flat text summary for chatbot responses
    caseStudies: `Lokesh K — Registered Project Case Studies\n\nTotal Case Studies: 9\n\n• Case Study 1 (CS-001) — Cinematic Poster 21 [Registered]\n• Case Study 2 (CS-002) — Cinematic Poster 20 [Registered]\n• Case Study 3 (CS-003) — Cinematic Poster 19 [Registered]\n• Case Study 4 (CS-004) — Cinematic Poster 18 ✓ (Client: Funmoji | Finalised: 2026-06-09)\n• Case Study 5 (CS-005) — Cinematic Poster 17 ✓ (Client: Funmoji | Finalised: 2026-06-09)\n• Case Study 6 (CS-006) — Cinematic Poster 16 ✓ (Client: Funmoji | Finalised: 2026-06-16)\n• Case Study 7 (CS-007) — Cinematic Poster 15 ✓ (Client: WhatNot Telugu / Pranada Media | Finalised: 2026-06-16)\n• Case Study 8 (CS-008) — Cinematic Poster 14 ✓ (Client: WhatNot Telugu / Pranada Media | Finalised: 2026-06-16)\n• Case Study 9 (CS-009) — Cinematic Poster 13 ✓ (Client: Funmoji | Finalised: 2026-06-16)\n\nAll are part of the Cinematic Posters category (21 works total). You can view them in the Work section of this portfolio.`,
  };

  /* ────────────────────────────────────────────
     RESPONSE ENGINE
  ──────────────────────────────────────────── */
  function getResponse(input) {
    const q = input.toLowerCase().trim();

    // Greetings
    if (/^(hi|hello|hey|howdy|sup|what'?s up|good (morning|afternoon|evening))/.test(q)) {
      return `Hello! 👋 I'm Lokesh's AI Portfolio Assistant. I can tell you about his work, experience, skills, clients, and how to get in touch.\n\nWhat would you like to know?`;
    }

    // Who is Lokesh / about him
    if (/who (is|are) lokesh|tell me about lokesh|about (lokesh|him|yourself)|introduce/i.test(q)) {
      return KB.who;
    }

    // Experience / years
    if (/how many years|years of experience|experience|how long|when did he start/i.test(q)) {
      return KB.experience;
    }

    // Career / work history / jobs / companies worked at
    if (/career|work history|job|employment|where (has|did) he work|previous (company|role)|timeline/i.test(q)) {
      return KB.career;
    }

    // Skills
    if (/skill|what can (he|lokesh) do|expertise|good at|speciali[sz]|proficient|talented/i.test(q)) {
      return KB.skills;
    }

    // Software / tools
    if (/software|tool|photoshop|illustrator|adobe|program|application/i.test(q)) {
      return KB.software;
    }

    // Services / offer
    if (/service|offer|provide|what do (you|he|lokesh) (do|make|create)|hire|work|commission/i.test(q)) {
      return KB.services;
    }

    // Case studies
    if (/case stud(y|ies)|cs-00[123]|registered project|project index/i.test(q)) {
      return KB.caseStudies;
    }

    // Portfolio / work
    if (/portfolio|work|project|design(s)?|poster|illustration|logo|typography|commercial/i.test(q)) {
      return KB.portfolio;
    }

    // Clients / collaborations
    if (/client|collab|brand|company|compan|who (has|did) he work(ed)? with|partner|youtube/i.test(q)) {
      return KB.clients;
    }

    // Contact / reach
    if (/contact|reach|email|linkedin|behance|instagram|social|message|get in touch|hire/i.test(q)) {
      return KB.contact;
    }

    // About him (generic)
    if (/about|background|story|who|lokesh/i.test(q)) {
      return KB.about + '\n\n' + KB.stats;
    }

    // Thanks
    if (/thank(s| you)|ty|cheers|appreciate/i.test(q)) {
      return `You're welcome! 😊 Feel free to ask anything else about Lokesh's work or how to get in touch.`;
    }

    // Bye
    if (/bye|goodbye|see you|cya|later/i.test(q)) {
      return `Thanks for stopping by! Feel free to come back anytime. 👋`;
    }

    // Out of scope
    return `I can only answer questions related to Lokesh K and his professional work. 🎨\n\nYou can ask me about his skills, services, career, portfolio, clients, or contact information!`;
  }

  /* ────────────────────────────────────────────
     BUILD HTML
  ──────────────────────────────────────────── */
  function buildWidget() {
    // ── Bubble ──
    const bubble = document.createElement('button');
    bubble.id = 'ai-chat-bubble';
    bubble.setAttribute('aria-label', 'Open AI Portfolio Assistant');
    bubble.setAttribute('aria-expanded', 'false');
    bubble.innerHTML = `
      <div class="bubble-dot" aria-hidden="true"></div>
      <span class="bubble-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.02 2 11c0 2.65 1.18 5.03 3.06 6.72L4 22l4.54-1.51C9.61 20.81 10.78 21 12 21c5.52 0 10-4.02 10-9S17.52 2 12 2z" fill="#fff"/>
          <circle cx="8.5" cy="11" r="1.2" fill="#1C1C1E"/>
          <circle cx="12" cy="11" r="1.2" fill="#1C1C1E"/>
          <circle cx="15.5" cy="11" r="1.2" fill="#1C1C1E"/>
        </svg>
      </span>
      <span class="bubble-close" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6l12 12" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </span>`;

    // ── Panel ──
    const panel = document.createElement('div');
    panel.id = 'ai-chat-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'AI Portfolio Assistant');
    panel.setAttribute('aria-modal', 'false');
    panel.innerHTML = `
      <!-- Header -->
      <div class="ai-panel-header">
        <div class="ai-header-avatar" aria-hidden="true">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h2a7 7 0 017 7H4a7 7 0 017-7h2V5.73A2 2 0 0110 4a2 2 0 012-2zM7 15v2a5 5 0 0010 0v-2H7zm8.5 1.5a1 1 0 110 2 1 1 0 010-2zm-7 0a1 1 0 110 2 1 1 0 010-2z"/>
          </svg>
        </div>
        <div class="ai-header-info">
          <div class="ai-header-name">LK Assistant</div>
          <div class="ai-header-status">
            <span class="ai-status-dot active" id="ai-status-dot"></span>
            <span id="ai-status-text">Online</span>
          </div>
        </div>
        <button class="ai-header-close" id="ai-panel-close" aria-label="Close assistant">✕</button>
      </div>

      <!-- Messages -->
      <div class="ai-messages" id="ai-messages" role="log" aria-live="polite" aria-label="Chat messages"></div>

      <!-- Suggested chips -->
      <div class="ai-suggestions" id="ai-suggestions">
        <div class="ai-suggestion-label">Suggested</div>
        <div class="ai-suggestion-chips">
          <button class="ai-chip" data-q="Who is Lokesh?">Who is Lokesh?</button>
          <button class="ai-chip" data-q="What services do you offer?">Services</button>
          <button class="ai-chip" data-q="Which companies have you worked with?">Clients</button>
          <button class="ai-chip" data-q="How many years of experience do you have?">Experience</button>
          <button class="ai-chip" data-q="How can I contact you?">Contact</button>
        </div>
      </div>

      <!-- Quick actions -->
      <div class="ai-quick-actions" aria-label="Quick actions">
        <a href="#work" class="ai-quick-btn" id="ai-qa-work" aria-label="View Work">
          <svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          View Work
        </a>
        <a href="#contact" class="ai-quick-btn" id="ai-qa-contact" aria-label="Contact">
          <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          Contact
        </a>
        <a href="https://www.linkedin.com/in/lokeshk79/" target="_blank" rel="noopener" class="ai-quick-btn" id="ai-qa-linkedin" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          LinkedIn
        </a>
        <a href="https://www.behance.net/Lokesh_k" target="_blank" rel="noopener" class="ai-quick-btn" id="ai-qa-behance" aria-label="Behance">
          <svg viewBox="0 0 24 24"><path d="M7.5 11c1.38 0 2.5-.56 2.5-2.12S8.88 6.5 7.5 6.5H3v9h4.5c1.62 0 3-.75 3-2.62S9.12 11 7.5 11zM5 8h2.25c.69 0 1.25.31 1.25 1s-.56 1-1.25 1H5V8zm2.5 6H5v-2.5h2.5c.81 0 1.5.38 1.5 1.25S8.31 14 7.5 14zM15 7.5c-2.49 0-4.5 1.79-4.5 4.5s2.01 4.5 4.5 4.5c1.93 0 3.28-.79 4.04-2.5h-2.14c-.28.5-.97.88-1.9.88-1.38 0-2.25-.81-2.38-2h6.5c.05-.33.07-.57.07-.88 0-2.71-2.01-4.5-4.5-4.5h.31zm-2.19 3.5c.25-1 1.06-1.62 2.19-1.62s1.94.63 2.19 1.62h-4.38zM14 5h5v1.5h-5V5z"/></svg>
          Behance
        </a>
      </div>

      <!-- Input -->
      <div class="ai-input-area">
        <textarea
          id="ai-chat-input"
          placeholder="Ask me about Lokesh..."
          rows="1"
          aria-label="Type your message"
          maxlength="400"
        ></textarea>
        <button id="ai-send-btn" aria-label="Send message">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>
      <div class="ai-powered-by">AI Portfolio Assistant • Lokesh K</div>`;

    document.body.appendChild(bubble);
    document.body.appendChild(panel);

    return { bubble, panel };
  }

  /* ────────────────────────────────────────────
     CHAT LOGIC
  ──────────────────────────────────────────── */
  function initChat(bubble, panel) {
    const messagesEl = panel.querySelector('#ai-messages');
    const inputEl = panel.querySelector('#ai-chat-input');
    const sendBtn = panel.querySelector('#ai-send-btn');
    const closeBtn = panel.querySelector('#ai-panel-close');
    const chips = panel.querySelectorAll('.ai-chip');
    const statusDot = panel.querySelector('#ai-status-dot');
    const statusText = panel.querySelector('#ai-status-text');
    const suggestionsEl = panel.querySelector('#ai-suggestions');

    let isOpen = false;
    let hasGreeted = false;
    let isTyping = false;

    /* ── Helpers ── */
    function scrollToBottom() {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function appendMsg(text, role) {
      const wrap = document.createElement('div');
      wrap.className = `ai-msg ${role}`;

      const avatarIcon = role === 'bot'
        ? `<svg viewBox="0 0 24 24"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h2a7 7 0 017 7H4a7 7 0 017-7h2V5.73A2 2 0 0110 4a2 2 0 012-2zM7 15v2a5 5 0 0010 0v-2H7z"/></svg>`
        : `<svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>`;

      // Convert newlines to <br> and preserve bullet formatting
      const formatted = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\n/g, '<br>');

      wrap.innerHTML = `
        <div class="ai-msg-avatar" aria-hidden="true">${avatarIcon}</div>
        <div class="ai-msg-bubble">${formatted}</div>`;

      messagesEl.appendChild(wrap);
      scrollToBottom();
      return wrap;
    }

    function showTyping() {
      const wrap = document.createElement('div');
      wrap.className = 'ai-msg bot typing';
      wrap.id = 'ai-typing-indicator';
      wrap.innerHTML = `
        <div class="ai-msg-avatar" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h2a7 7 0 017 7H4a7 7 0 017-7h2V5.73A2 2 0 0110 4a2 2 0 012-2zM7 15v2a5 5 0 0010 0v-2H7z"/></svg>
        </div>
        <div class="ai-msg-bubble">
          <div class="ai-typing-dots" aria-label="Thinking…">
            <span></span><span></span><span></span>
          </div>
        </div>`;
      messagesEl.appendChild(wrap);
      scrollToBottom();

      // Update status
      statusDot.classList.remove('active');
      statusText.textContent = 'Thinking…';
    }

    function hideTyping() {
      const indicator = document.getElementById('ai-typing-indicator');
      if (indicator) indicator.remove();

      statusDot.classList.add('active');
      statusText.textContent = 'Online';
    }

    function sendMessage(text) {
      if (!text.trim() || isTyping) return;

      // Hide suggestions after first real question
      if (suggestionsEl) suggestionsEl.style.display = 'none';

      // User bubble
      appendMsg(text, 'user');
      inputEl.value = '';
      inputEl.style.height = 'auto';

      // Typing delay
      isTyping = true;
      showTyping();

      const delay = 600 + Math.min(text.length * 8, 900);
      setTimeout(() => {
        hideTyping();
        const response = getResponse(text);
        appendMsg(response, 'bot');
        isTyping = false;
      }, delay);
    }

    /* ── Toggle Panel ── */
    function openPanel() {
      isOpen = true;
      panel.classList.add('open');
      bubble.classList.add('open');
      bubble.setAttribute('aria-expanded', 'true');

      if (!hasGreeted) {
        hasGreeted = true;
        setTimeout(() => {
          appendMsg(`Hi there! 👋 I'm Lokesh's AI Portfolio Assistant.\n\nAsk me anything about his work, experience, skills, services, or how to get in touch!`, 'bot');
        }, 300);
      }

      setTimeout(() => inputEl.focus(), 400);
    }

    function closePanel() {
      isOpen = false;
      panel.classList.remove('open');
      bubble.classList.remove('open');
      bubble.setAttribute('aria-expanded', 'false');
    }

    /* ── Event Listeners ── */
    bubble.addEventListener('click', () => {
      if (isOpen) closePanel(); else openPanel();
    });

    closeBtn.addEventListener('click', closePanel);

    sendBtn.addEventListener('click', () => sendMessage(inputEl.value));

    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage(inputEl.value);
      }
    });

    // Auto-resize textarea
    inputEl.addEventListener('input', () => {
      inputEl.style.height = 'auto';
      inputEl.style.height = Math.min(inputEl.scrollHeight, 100) + 'px';
    });

    // Suggested chips
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        sendMessage(chip.dataset.q);
      });
    });

    // Quick action buttons — close panel on same-page links
    panel.querySelectorAll('.ai-quick-btn[href^="#"]').forEach(btn => {
      btn.addEventListener('click', () => {
        closePanel();
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) closePanel();
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (isOpen && !panel.contains(e.target) && !bubble.contains(e.target)) {
        closePanel();
      }
    });

    // Auto-open greeting after 5 seconds (first visit only)
    const alreadySeen = sessionStorage.getItem('ai-assistant-seen');
    if (!alreadySeen) {
      sessionStorage.setItem('ai-assistant-seen', '1');
      setTimeout(() => {
        if (!isOpen) openPanel();
      }, 5000);
    }
  }

  /* ────────────────────────────────────────────
     INIT
  ──────────────────────────────────────────── */
  function init() {
    const { bubble, panel } = buildWidget();
    initChat(bubble, panel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
