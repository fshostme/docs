---
sidebar_position: 4
slug: pluginslist
id: cs2-pluginslist
title: "CS2 Server Plugins"
description: Complete list of addons/plugins available for CS2 servers
---

import React, { useState } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CS2 Server Addons/Plugins

This page provides a detailed overview of all plugins available for our CS2 free and pro services.

## Preinstalled Addons

The following essential addons are preinstalled on all servers and are required for plugin functionality:

| Addon               | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| **Metamod Source**  | Base modding layer that enables extensions.                                 |
| **CounterStrikeSharp** | CounterStrikeSharp is a server side modding framework                    |
| **MultiAddonManager** | Allows you to use multiple workshop addons at once and have clients download them |
| **CleanerCS2** | A simple Metamod plugin that allows you to filter out console prints with regular expressions. |

**These do not need to be installed manually and are automatically updated by FSHOST.**

## Plugin Availability

<Tabs>
  <TabItem value="comparison" label="Free vs Pro Comparison" default>
    <div className="plugin-table-container">
      <table className="plugin-table">
        <thead>
          <tr>
            <th>Plugin Name</th>
            <th>Free</th>
            <th>Pro</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="plugins/cs2-simpleadmin">CS2-SimpleAdmin</a></td>
            <td className="centered"><span className="no-icon">✕</span></td>
            <td className="centered"><span className="yes-icon">✓</span></td>
            <td>Basic admin commands and management</td>
          </tr>
          <tr>
            <td><a href="becomeadmin">FSH-AdminManager</a></td>
            <td className="centered"><span className="no-icon">✕</span></td>
            <td className="centered"><span className="yes-icon">✓</span></td>
            <td>Advanced admin management with hierarchy</td>
          </tr>
          <tr>
            <td>CS2Rcon (!rcon)</td>
            <td className="centered"><span className="no-icon">✕</span></td>
            <td className="centered"><span className="yes-icon">✓</span></td>
            <td>Remote console management interface</td>
          </tr>
          <tr className="highlight-row">
            <td><a href="#fakercon">FakeRcon</a> <code>fake_rcon</code></td>
            <td className="centered"><span className="yes-icon">✓</span></td>
            <td className="centered"><span className="yes-icon">✓</span></td>
            <td>Command-line RCON via in-game console</td>
          </tr>
          <tr>
            <td><a href="plugins/cstvdiscord">DemoURL to Discord</a></td>
            <td className="centered"><span className="no-icon">✕</span></td>
            <td className="centered"><span className="yes-icon">✓</span></td>
            <td>Automatically posts demo links to Discord (CSTV required)</td>
          </tr>
          <tr>
            <td>FixDemoVoiceChat</td>
            <td className="centered"><span className="no-icon">✕</span></td>
            <td className="centered"><span className="yes-icon">✓</span></td>
            <td>Fixes voice chat in demo recordings</td>
          </tr>
          <tr>
            <td><a href="plugins/deathmatch">Deathmatch</a></td>
            <td className="centered"><span className="no-icon">✕</span></td>
            <td className="centered"><span className="yes-icon">✓</span></td>
            <td>Full-featured deathmatch game mode</td>
          </tr>
          <tr>
            <td><a href="plugins/cs2-retakes">Retakes w/ RetakesAllocator</a></td>
            <td className="centered"><span className="no-icon">✕</span></td>
            <td className="centered"><span className="yes-icon">✓</span></td>
            <td>Customizable bomb site retake practice</td>
          </tr>
          <tr>
            <td><a href="plugins/matchzy">MatchZy w/ Practice Mode</a></td>
            <td className="centered"><span className="no-icon">✕</span></td>
            <td className="centered"><span className="yes-icon">✓</span></td>
            <td>Match management with practice features</td>
          </tr>
          <tr>
            <td><a href="plugins/openprefireprac">OpenPrefirePrac</a></td>
            <td className="centered"><span className="no-icon">✕</span></td>
            <td className="centered"><span className="yes-icon">✓</span></td>
            <td>Prefire practice for common angles</td>
          </tr>
          <tr>
            <td>CS2MapChange</td>
            <td className="centered"><span className="yes-icon">✓</span></td>
            <td className="centered"><span className="yes-icon">✓</span></td>
            <td>Easier MapChange</td>
          </tr>
          <tr>
            <td>Workshop Map</td>
            <td className="centered"><span className="no-icon">✕</span></td>
            <td className="centered"><span className="yes-icon">✓</span></td>
            <td>Loads custom maps from Steam Workshop</td>
          </tr>
          <tr>
            <td><a href="plugins/skins">WeaponPaints (Skins)</a></td>
            <td className="centered"><span className="no-icon">✕</span></td>
            <td className="centered"><span className="yes-icon">✓</span> <small className="special-note">(GSLT required)</small></td>
            <td>Custom weapon skins for players</td>
          </tr>
        </tbody>
      </table>
    </div>
  </TabItem>
  <TabItem value="free" label="Free Server Plugins">
    <div className="free-plugins">
      <div className="plugin-card">
        <h3>FakeRcon</h3>
        <div className="command-syntax">Command: <code>fake_rcon</code></div>
        <p>Command-line RCON access through the in-game console. Allows basic server management.</p>
      </div>
      
      <div className="plugin-card">
        <h3>CS2MapChange</h3>
        <div className="command-syntax">Command: <code>!map de_dust2</code></div>
        <p>Allows admins to change map on the server</p>
      </div>
    </div>
  </TabItem>
  <TabItem value="pro" label="Pro Server Plugins">
    <p>All the following plugins are enabled by default on Pro servers.</p>
    
    <div className="plugin-grid">
      {[
        {
          id: "cs2-simpleadmin",
          name: "CS2-SimpleAdmin",
          command: null,
          description: "Basic admin commands and management system."
        },
        {
          id: "../becomeadmin",
          name: "FSH-AdminManager",
          command: null,
          description: "Advanced admin management with hierarchy support."
        },
        {
          id: "cs2rcon",
          name: "CS2Rcon",
          command: null,
          description: "Remote console management interface."
        },
        {
          id: "cstvdiscord", 
          name: "CSTV DemoURL to Discord",
          command: null,
          description: "Automatically posts demo links to Discord."
        },
        {
          id: "deathmatch",
          name: "Deathmatch",
          command: null,
          description: "Full-featured deathmatch game mode."
        },
        {
          id: "cs2-retakes",
          name: "Retakes w/ RetakesAllocator",
          command: null,
          description: "Customizable bomb site retake practice."
        },
        {
          id: "matchzy",
          name: "MatchZy w/ Practice Mode and scrim",
          command: null,
          description: "Match management with practice features."
        },
        {
          id: "openprefireprac",
          name: "OpenPrefirePrac",
          command: null,
          description: "Prefire practice for common angles."
        },
        {
          id: "cs2mapchange",
          name: "CS2MapChange",
          command: "!map de_mapname",
          description: "Load default maps from the server",
          showDetails: false
        },
        {
          id: "workshop-map",
          name: "Workshop Map",
          command: "!wsmap workshop_ID",
          description: "Loads custom maps from Steam Workshop.",
          showDetails: false
        },
        {
          id: "skins",
          name: "WeaponPaints (Skins)",
          command: null,
          description: "Custom weapon skins for players (requires GSLT token)."
        }
      ].map(plugin => (
        <div className="plugin-card" key={plugin.id} id={plugin.id}>
          <h3>{plugin.name}</h3>
          {plugin.command && <div className="command-syntax">Command: <code>{plugin.command}</code></div>}
          <p>{plugin.description}</p>
          {(plugin.showDetails !== false) &&
            <a href={`/docs/cs2/plugins/${plugin.id}`} className="button button--secondary">Details</a>
          }
        </div>
      ))}
    </div>
  </TabItem>
</Tabs>

### FakeRcon {#fakercon}

FakeRcon provides command-line RCON access through the in-game console. This allows server administrators to execute commands directly within the game.

**Usage:**
```
fake_rcon_password your_password_here
fake_rcon command_here
```

**Example:**
```
fake_rcon_password securepass123
fake_rcon status
fake_rcon say "Server will restart in 5 minutes"
```

### CS2MapChange {#cs2mapchange}

CS2MapChange provides a mapchange. It allows admins to change maps directly.

**Usage:**
```
!map de_mapname    // Change to specific map
```

## Frequently Asked Questions

<div className="faq-container">
  <details>
    <summary>How do I know which plugins are available on my server?</summary>
    <p>You can check the plugin availability using the command <code>fake_rcon css_plugins list</code> in your game console after authenticating with RCON.</p>
  </details>
  
  <details>
    <summary>Can I request additional plugins for my server?</summary>
    <p>Pro server customers can request additional plugins through the support panel. Free server users are limited to the plugins listed in the "Free" column above.</p>
  </details>
  
  <details>
    <summary>What does "GSLT required" mean?</summary>
    <p>GSLT (Game Server Login Token) is required for certain plugins like WeaponPaints. This token links your server to a Steam account. Pro users can set up a GSLT through the control panel.</p>
  </details>
  
  <details>
    <summary>How do I configure these plugins?</summary>
    <p>Pro server users can configure plugins through the FTP (available on request) or by using RCON commands. Configuration options vary by plugin.</p>
  </details>
</div>

<style>
{`
  .plugin-table-container {
    overflow-x: auto;
    margin-bottom: 2rem;
  }
  
  .plugin-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .plugin-table th {
    background-color: #2a2a2a;
    color: white;
    padding: 12px;
    text-align: left;
  }
  
  .plugin-table td {
    padding: 10px 12px;
    border-bottom: 1px solid #3a3a3a;
  }
  
  .centered {
    text-align: center;
  }
  
  .yes-icon {
    color: #4CAF50;
    font-weight: bold;
  }
  
  .no-icon {
    color: #f44336;
    font-weight: bold;
  }
  
  .highlight-row {
    background-color: rgba(77, 208, 225, 0.08);
  }
  
  .special-note {
    color: #ff9800;
    font-style: italic;
  }
  
  .plugin-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .plugin-card {
    background-color: #2a2a2a;
    border-radius: 8px;
    padding: 16px;
    border: 1px solid #3a3a3a;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .plugin-card h3 {
    margin-top: 0;
    border-bottom: 1px solid #3a3a3a;
    padding-bottom: 10px;
  }
  
  .plugin-card p {
    flex-grow: 1;
    margin-bottom: 15px;
  }
  
  .command-syntax {
    font-family: monospace;
    background-color: #333;
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .free-plugins {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .faq-container details {
    background-color: #2a2a2a;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    padding: 0;
    margin-bottom: 10px;
    --docusaurus-details-summary-arrow-size: 0;
    --docusaurus-details-summary-arrow: none;
  }
  
  .faq-container summary {
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    list-style: none;
  }
  
  .faq-container details p {
    padding: 0 15px 15px;
    margin: 0;
  }

  /* Light mode overrides */
  html[data-theme='light'] .plugin-table th {
    background-color: #f0f0f0;
    color: #333;
  }
  
  html[data-theme='light'] .plugin-table td {
    border-bottom: 1px solid #ddd;
  }
  
  html[data-theme='light'] .highlight-row {
    background-color: rgba(0, 120, 215, 0.05);
  }
  
  html[data-theme='light'] .plugin-card {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
  }
  
  html[data-theme='light'] .plugin-card h3 {
    border-bottom: 1px solid #ddd;
  }
  
  html[data-theme='light'] .command-syntax {
    background-color: #f0f0f0;
  }
  
  html[data-theme='light'] .faq-container details {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
  }
`}
</style>
