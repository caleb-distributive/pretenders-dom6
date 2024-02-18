# Pretenders Calculator for Dominions 6

Deployed application: https://caleb-distributive.github.io/pretenders-dom6/

## Description

A calculator for [Dominions 6](http://www.illwinter.com/dom6/). It allows to pick magic, dominion scale etc. first and then it shows what chassis for Pretenders are the cheapest.﻿

It is writen in [React](https://reactjs.org/) framework.

## Installation

```
npm install
npm run build
```

## Changelog
- Version 2.02.0: Added the Bless Point optimizer. This feature, given the current number of remaining design points and selected magic paths, returns a list of the best magic paths for each possible chassis, sorted by number of bless points.
- Version 2.01.0: Added a filtering search feature to the nation dropdown box
- Version 2.00.0: Update for Dominions 6, data is not generated by a script from [dom6 inspector data](https://github.com/larzm42/dom6inspector/tree/gh-pages/gamedata) and accounts for the new ways pretenders work.
- Version 1.15.0: Mobile friendly buttons for scale pickers. They appear when screen width is low. 
- Version 1.14.1: Fix Lemuria default growth scale.
- Version 1.14.0: Add EA Ubar.filter. Move chassis filter next to imprisonment box.
- Version 1.13.0: Add chassis filter. Add report links to footer.
- Version 1.12.0: Update to 5.42: add LA Vaettiheim nation, add new chassis, update chassis costs.
- Version 1.11.4: Fix many nations that have many inappropriate pretenders (unavailable for those nations).
- Version 1.11.3: Fix Sauromatian pretenders bug.
- Version 1.11.1: Fix new path costs for rainbow pretenders. Remove unused pretenders (Mother of Tuathas etc.).
- Version 1.11.0: Update to Dominions 5.39. Most data are now generated by a script from [dom5inspector data](https://github.com/larzm42/dom5inspector/tree/gh-pages/gamedata).
- Version 1.10.1: Fix some typos. Update many bless effects. Update many Pretendent costs. Fix paths for Dragon (id 216).
- Version 1.10.0: Move bless effects section below all input firms. Add buttons for resetting all points, resetting magic points and resetting scale points. Copy info about nation bless bonus and favorite temperature to appropriate sections. Fix text color and cursor shape of the "Show all bless list" button.
- Version 1.9.4: Upgrade node modules.
- Version 1.9.3: Fix missing paths for: Raksharani, Sapa Inca, Ayar.
- Version 1.9.2: Fix missing paths for: Divine Glyph, Statue of War, Statue of War, Idol of Sorcery.
- Version 1.9.1: Fix missing paths for: Great Sorceress, Phoenix, Smoking Mirror, Bouda Father, Vampire Queen, King of Frozen Bones, Baphomet, Celestial Lion, Solar Eagle, Virtue, Dog of the Underworld, Hound of Hades, Bog Mummy, Scorpion King, Myrmecoleon, Hieracosphinx, Golden Lion, Moloch, Sphinx, Risen Oracle, Ahura of the Oath, Daeva of Wrath, Immortal Coya, Bolon-ti-ku, Hun Balam, Demon Macaw, Carrion Dragon, Devourer of Souls.
- Version 1.9.0: Add LA Phlegra nation.
- Version 1.8.2: Fix MA Mictlan bless bunus points. Fix missing paths for some pretenders (mostly F and D paths for titans).
- Version 1.8.0: Remove Smoking Mirror from Xibalba. New Pretenders: Bone Mother, Enkidu Great Sage for Ur, Great Camazotz for Xibalba,  Titan of the Spring, Titan of Growth, Titan of the Hunt, Titan of the Crossroads, Grey Ones for Mediterranean realm.
- Version 1.7.0: Stable two columns layout on wide screens.
- Version 1.6.0: Footer with some informations.
- Version 1.5.0: Two columns layout for wide screens.
- Version 1.4.0: Selectable path letters in the pretenders table.
- Version 1.3.0: Smaller font size for pretenders id.
- Version 1.2.0: Less info in the debug bar.
- Version 1.1.0: New favicon.
- Version 1.0.0: Title for the page.
- Version 0.9.8: Finished short descriptions for bless effects.
- Version 0.9.7: The first published version.
