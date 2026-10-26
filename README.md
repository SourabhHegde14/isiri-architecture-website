# iSiri Architecture + Design — Website

The website for **iSiri Architecture + Design**, a multidisciplinary design practice in Bengaluru founded by **Ar Soumya HR** in 2004. The studio works across architecture, interiors, landscape and product design.

The site is a single static page with no build step and no framework: plain HTML, CSS and JavaScript, deployed on Netlify.

---

## What's on the site

| Section | What it does |
|---|---|
| **Hero slider** | Full-width slides for each category of work. Auto-plays, with arrows, tabs and swipe on phones. |
| **Layered menu** | Full-screen menu with sub-menus for Services and Portfolio and a photo preview that changes on hover. |
| **Studio** | Introduction, key numbers (founded 2004, 350+ designs, 250+ executed) and studio photos. |
| **Services** | Architecture, project management, interiors, landscape and product design. |
| **Process** | The four-step way the studio works, from brief to handover. |
| **Featured Projects** | Six project profiles, each opening as its own full-screen page (see below). |
| **Portfolio** | About 75 images that can be filtered by category, with a full-screen viewer (keyboard and swipe). |
| **Principal Architect** | Profile of Ar Soumya HR. |
| **Team** | The 13 people in the studio. |
| **Client Words** | Eight testimonials that rotate automatically, plus a link to all Google reviews. |
| **Products** | A small shelf of bespoke furniture and hardware. |
| **Contact** | Address, phone, email and an enquiry form that sends through Netlify Forms. |

The site adapts to phones, tablets and desktops, and follows the visitor's light or dark mode setting.

### Project profiles

Each featured project opens as a full-screen page with a sticky chapter index and a scroll progress bar. There are three layouts, chosen to suit the project:

| Layout | Used for | What it shows |
|---|---|---|
| **Chapters** (default) | Brick Bloom, Brindavanam, Streaked House, Venkatagiri | Cover and facts, then Architecture, Drawings (tabbed, click to zoom) and Interiors (swipeable photo strip) |
| **Rooms** (`mode:'rooms'`) | GR Lavender | A room-by-room tour. A key plan follows the reader and highlights the current room, and each room shows its colour palette. |
| **Stack** (`mode:'stack'`) | Elevate | An interactive cut-through of the building. Click a floor to see its plan and rooms. |

You can link straight to a project by adding its id to the site address, for example `https://your-site.netlify.app/#brick-bloom`.

---

## Files

```
.
├── index.html        # The whole site: markup, styles, scripts and content
├── netlify.toml      # Netlify settings (publish folder, image caching)
├── README.md
└── img/
    ├── logo.png
    ├── principal.jpg         # Principal architect portrait
    ├── p_<name>.jpg          # Team portraits (p_deepthi.jpg, p_sai_darshan.jpg …)
    ├── res01.jpg … lan05.jpg # Portfolio images, named by category
    ├── studio01-03.jpg, team01-02.jpg
    ├── products/             # One image per product
    ├── brick-bloom/          # One folder per featured project
    ├── brindavanam/
    ├── streaked-house/
    ├── gr-lavender/
    ├── elevate/
    └── venkatagiri/
```

Portfolio images are named by category prefix: `res` residential, `com` commercial, `cam` campus, `int` interiors, `cor` corporate, `lan` landscape.

---

## Editing content

All the content lives in plain lists near the top of the `<script>` block in `index.html`. Search the file for the names below.

| To change… | Search for |
|---|---|
| Hero slides and portfolio categories | `const CATS=` |
| Portfolio images per category | `add('res','res',16)` |
| Services | `const SERVICES=` |
| Team members | `const TEAM=` |
| Testimonials | `const QUOTES=` |
| Products | `const PRODUCTS=` |
| Featured projects | `const PROJECTS=` |
| "Coming soon" placeholder rows | `const UPCOMING=` |

### Add a featured project

1. Create a folder `img/<project-id>/` (lowercase with hyphens, e.g. `img/lake-view-villa/`) and put the project's photos and drawings in it.
2. In `index.html`, find `const PROJECTS=[` and copy an existing project that uses the layout you want:
   - **Chapters** → copy `brick-bloom` or `venkatagiri`
   - **Rooms** → copy `gr-lavender`
   - **Stack** → copy `elevate`
3. Change the `id`, `name`, facts (`year`, `location`, `area`, `floors`, `scope`), `dir`, the image file names and the text.
4. Projects appear in the order they are listed, and the "Next project" link at the bottom of each profile follows that order.

A chapters-layout project looks like this (shortened):

```js
{id:'lake-view-villa', name:'Lake View Villa', type:'Residential',
 scope:'Architecture & Interior Design', year:'2024', location:'Whitefield, Bengaluru',
 area:'4,200 sq ft', floors:'G + 2',
 dir:'img/lake-view-villa/', cover:'exterior.jpg', thumb:'exterior.jpg',
 lede:'One sentence that sums up the project.',
 overview:['Paragraph one.','Paragraph two.'],
 architecture:{
   blocks:[{img:'street.jpg', cap:'Street view, built', text:['…','…']}],
   details:{items:[{img:'d1.jpg',cap:'…'},{img:'d2.jpg',cap:'…'},{img:'d3.jpg',cap:'…'}], text:['…']}, // optional, 3 or 4 items
   extra:[{img:'stair.jpg', cap:'…', flip:true, text:['…']}],                                      // optional
   pull:'A short pull quote.'
 },
 drawings:[{img:'plan-ground.jpg', label:'Ground floor', note:'What is on this floor'}],
 interiors:{
   intro:['…'],
   feature:{img:'living.jpg', cap:'Living room', text:['…']},
   pull:'…',
   strip:[{img:'kitchen.jpg', cap:'Kitchen'}, {img:'wardrobe.jpg', cap:'Dressing', tall:true}],
   notes:[['Materials','…'],['Lighting','…']]
 }
},
```

Optional fields:
- `coverRatio:'4/3'` changes the shape of the cover image.
- `tall:true` on a strip image gives it a narrower, portrait frame.
- `flip:true` puts the photo on the right instead of the left.

When you add a real project, remove the matching placeholder from `const UPCOMING=[...]`. Set it to `[]` to hide all "coming soon" rows.

### Add a portfolio image

Save it as the next number in its category (e.g. `img/res17.jpg`), then raise the count in the matching `add(...)` line (e.g. `add('res','res',17)`).

### Add a testimonial

Add a line to `const QUOTES=[...]` in the form `['Name','Role, Company','The review text.']`, then update the counter text `01 / 08` in the Client Words section to the new total.

### Add a product

Save a photo as `img/products/<id>.jpg`, then add a line to `const PRODUCTS=[...]`:

```js
['<id>','Product Name','One-line description.',['#HEX1','#HEX2']],
```

The hex codes are the colour dots shown under the card.

### Add a team member

Save a square portrait as `img/p_<firstname>.jpg` (lowercase, spaces as underscores) and add the name to `const TEAM=[...]`.

---

## Image guidelines

- **Format:** JPG for photos and drawings, around 80–88% quality.
- **Size:** about 1600–2000 px on the long side for covers and feature photos, 1200 px for everything else. Many current images were cut from the PDF portfolio and are only about 500 px wide, so swapping in original photos will make them noticeably sharper.
- **File names:** lowercase with hyphens and no spaces, e.g. `plan-ground.jpg`.

---

## Enquiry form

The contact form uses **Netlify Forms**. Submissions appear in the Netlify dashboard under **Forms → enquiry**. A hidden honeypot field filters out spam bots.

To get each enquiry by email, go to **Site configuration → Notifications → Emails and webhooks → Form submission notifications** and add the studio's email address.

---

## Run it locally

No install is needed. Open `index.html` in a browser, or serve the folder so links behave exactly as they will online:

```bash
npx serve .
# or
python -m http.server 8000
```

The enquiry form only sends once the site is deployed on Netlify.

## Deploy

Netlify deploys automatically every time you push to the main branch:

```bash
git add -A
git commit -m "Describe your change"
git push
```

There is no build command, and the publish directory is the repository root, as set in `netlify.toml`.

---

## Contact

**iSiri Architecture + Design**
G-14, Oasis Residency, 5th Phase, J P Nagar, Bengaluru, Karnataka 560078
+91 98452 63497 · 080-4865 2683 · soumyabhat.isiri@gmail.com

© iSiri Architecture + Design. All photographs, drawings and designs are the property of the studio.
