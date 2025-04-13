---
slug: skins
id: cs2-plugins-skins
title: "WeaponPaints (Skins)"
description: "Change weapon skins, floats, seeds, gloves, and agent models in CS2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# WeaponPaints Plugin

Unfinished, unoptimized, and partially functional WeaponPaints plugin.

## Features

- Change paint, seed, and wear on weapons, knives, gloves, and agents (Web version)
- Data syncs automatically when players connect
- Customizable pins and music kits

<Admonition type="tip">
  <p><a href="https://example.com/weaponpaints">Change your skin/float or seed on this link</a></p>
</Admonition>

## Command Reference

<Tabs>
  <TabItem value="general" label="General Commands" default>
    ### General Commands
    
    | Command | Description | Example |
    |---------|-------------|---------|
    | `!wp` | Refresh skins if you have selected other skins by the website. | `!wp` |
    | `!ws` | Shows which commands are available in-game for weapon paints. | `!ws` |
  </TabItem>
  
  <TabItem value="cosmetics" label="Cosmetic Commands">
    ### Cosmetic Commands
    
    | Command | Description | Example |
    |---------|-------------|---------|
    | `!knife` | Displays a menu with knife skins, allowing you to select a different knife skin. | `!knife` |
    | `!gloves` | Displays a menu with glove skins, allowing you to select different gloves. | `!gloves` |
    | `!agents` | Displays a menu with agent skins, allowing you to select a different agent skin. | `!agents` |
    | `!pins` | Displays a menu with collectible pins, allowing you to select different pins. | `!pins` |
    | `!music` | Displays a menu with music kits, allowing you to select a different music kit. | `!music` |
  </TabItem>
</Tabs>

## MVP Kits

<Admonition type="warning">
  <p>Before you can use the <code>!music</code> MVP, make sure to select the default CS2 Music Kit from your in-game inventory before it can function!</p>
</Admonition>
