---
slug: ingamecommands
id: cs2-plugins-ingamecommands
title: "Server Commands [Pro]"
description: Complete list of available commands for CS2 Pro servers
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🧩 CS2 Pro Server Commands

Here's a full overview of commands available on your CS2 Pro server.

:::tip 🛡️ ADMIN PRIVILEGES REQUIRED
These commands require admin privileges. If you're unsure how to become an admin, [check our admin guide](/docs/cs2/becomeadmin).
:::

<div className="command-info-box">
  <span className="command-info-icon">ℹ️</span> 
  <span>Commands with a <code>/</code> or <code>!</code> prefix must be used in the say/say_team chat (not in the in-game console).</span>
</div>

<Tabs>
  <TabItem value="game" label="🎮 Game Mode Commands" default>
    <div className="command-section">
      <h2>🎮 Game Mode Commands</h2>

      <div className="command-item" id="casual">
        <h3>!casual</h3>
        <div className="command-description">Switch to Casual Mode for a more relaxed gameplay experience.</div>
        <div className="command-syntax">Syntax: <code>!casual</code></div>
        <div className="command-example">Example: <code>!casual</code></div>
      </div>

      <div className="command-item" id="comp">
        <h3>!comp</h3>
        <div className="command-description">Activate Competitive Game Mode.</div>
        <div className="command-syntax">Syntax: <code>!comp</code></div>
        <div className="command-example">Example: <code>!comp</code></div>
      </div>

      <div className="command-item" id="dmon">
        <h3>!dmon</h3>
        <div className="command-description">Enable Multi-CFG Deathmatch Mode.</div>
        <div className="command-syntax">Syntax: <code>!dmon</code></div>
        <div className="command-example">Example: <code>!dmon</code></div>
      </div>

      <div className="command-item" id="prac">
        <h3>!pracc</h3>
        <div className="command-description">Revert to Practice Mode if another mode was used previously.</div>
        <div className="command-syntax">Syntax: <code>!pracc</code></div>
        <div className="command-example">Example: <code>!pracc</code></div>
      </div>

      <div className="command-item" id="prefireon">
        <h3>!prefireon</h3>
        <div className="command-description">Enable OpenPreFirePrac Mode for prefire training.</div>
        <div className="command-syntax">Syntax: <code>!prefireon</code></div>
        <div className="command-example">Example: <code>!prefireon</code></div>
      </div>

      <div className="command-item" id="retake">
        <h3>!retake</h3>
        <div className="command-description">Activate Retake Mode for scenario-based retake training.</div>
        <div className="command-syntax">Syntax: <code>!retake</code></div>
        <div className="command-example">Example: <code>!retake</code></div>
      </div>

      <div className="command-item" id="wingman">
        <h3>!wingman</h3>
        <div className="command-description">Switch to Wingman Mode, ideal for 2v2 matches.</div>
        <div className="command-syntax">Syntax: <code>!wingman</code></div>
        <div className="command-example">Example: <code>!wingman</code></div>
      </div>
    </div>
  </TabItem>

  <TabItem value="map" label="🗺️ Map Commands">
    <div className="command-section">
      <h2>🗺️ Map Commands</h2>

      <div className="command-item" id="ancient">
        <h3>!ancient</h3>
        <div className="command-description">Load the Ancient map, featuring jungle ruins and narrow corridors.</div>
        <div className="command-syntax">Syntax: <code>!ancient</code></div>
        <div className="command-example">Example: <code>!ancient</code></div>
      </div>

      <div className="command-item" id="anubis">
        <h3>!anubis</h3>
        <div className="command-description">Set Anubis as the next map, styled with ancient Egyptian aesthetics.</div>
        <div className="command-syntax">Syntax: <code>!anubis</code></div>
        <div className="command-example">Example: <code>!anubis</code></div>
      </div>

      <div className="command-item" id="dust2">
        <h3>!dust2</h3>
        <div className="command-description">Jump to Dust2 — the most iconic CS map of all time.</div>
        <div className="command-syntax">Syntax: <code>!dust2</code></div>
        <div className="command-example">Example: <code>!dust2</code></div>
      </div>

      <div className="command-item" id="inferno">
        <h3>!inferno</h3>
        <div className="command-description">Switch to Inferno — known for alleyways and tight bombsites.</div>
        <div className="command-syntax">Syntax: <code>!inferno</code></div>
        <div className="command-example">Example: <code>!inferno</code></div>
      </div>

      <div className="command-item" id="mirage">
        <h3>!mirage</h3>
        <div className="command-description">Change the map to Mirage — a timeless competitive classic.</div>
        <div className="command-syntax">Syntax: <code>!mirage</code></div>
        <div className="command-example">Example: <code>!mirage</code></div>
      </div>

      <div className="command-item" id="nuke">
        <h3>!nuke</h3>
        <div className="command-description">Play on Nuke — an iconic map with complex vertical layout.</div>
        <div className="command-syntax">Syntax: <code>!nuke</code></div>
        <div className="command-example">Example: <code>!nuke</code></div>
      </div>

      <div className="command-item" id="overpass">
        <h3>!overpass</h3>
        <div className="command-description">Load Overpass — known for its high ground and flanking options.</div>
        <div className="command-syntax">Syntax: <code>!overpass</code></div>
        <div className="command-example">Example: <code>!overpass</code></div>
      </div>

      <div className="command-item" id="train">
        <h3>!train</h3>
        <div className="command-description">Switch to Train — built for strategic, long-range combat.</div>
        <div className="command-syntax">Syntax: <code>!train</code></div>
        <div className="command-example">Example: <code>!train</code></div>
      </div>

      <div className="command-item" id="vertigo">
        <h3>!vertigo</h3>
        <div className="command-description">Go to Vertigo — a construction site in the sky.</div>
        <div className="command-syntax">Syntax: <code>!vertigo</code></div>
        <div className="command-example">Example: <code>!vertigo</code></div>
      </div>

      <div className="command-item" id="map">
        <h3>!map</h3>
        <div className="command-description">Switch to a specific map using its internal name.</div>
        <div className="command-syntax">Syntax: <code>!map mapname</code></div>
        <div className="command-example">Example: <code>!map de_dust2</code></div>
        <div className="command-arguments">
          <strong>Arguments:</strong>
          <ul>
            <li><code>mapname</code> (Required): The map identifier.</li>
          </ul>
        </div>
      </div>

      <div className="command-item" id="wsmap">
        <h3>!wsmap</h3>
        <div className="command-description">Load a Workshop map using its name or Workshop ID.</div>
        <div className="command-syntax">Syntax: <code>!wsmap workshop_id</code></div>
        <div className="command-example">Example: <code>!wsmap 1511919777</code></div>
      </div>
    </div>
  </TabItem>

  <TabItem value="utility" label="🛠️ Utility Commands">
    <div className="command-section">
      <h2>🛠️ Utility Commands</h2>

      <div className="command-item" id="help">
        <h3>!help</h3>
        <div className="command-description">List all available commands in chat.</div>
        <div className="command-syntax">Syntax: <code>!help</code></div>
        <div className="command-example">Example: <code>!help</code></div>
      </div>

      <div className="command-item" id="maps">
        <h3>!maps</h3>
        <div className="command-description">Show a list of map-related commands.</div>
        <div className="command-syntax">Syntax: <code>!maps</code></div>
        <div className="command-example">Example: <code>!maps</code></div>
      </div>

      <div className="command-item" id="rcon">
        <h3>!rcon</h3>
        <div className="command-description">Execute RCON commands for server control.</div>
        <div className="command-syntax">Syntax: <code>!rcon</code></div>
        <div className="command-example">Example: <code>!rcon mp_restartgame 1</code></div>
      </div>
    </div>
  </TabItem>
</Tabs>

<style>
{`
  .command-section {
    margin-bottom: 30px;
  }
  
  .command-item {
    background-color: var(--ifm-card-background-color);
    border-radius: 8px;
    margin-bottom: 15px;
    padding: 16px;
    box-shadow: var(--ifm-global-shadow-lw);
    border-left: 4px solid var(--ifm-color-primary);
  }
  
  .command-item h3 {
    margin-top: 0;
    color: var(--ifm-color-primary);
    font-family: monospace;
    font-size: 1.2rem;
  }
  
  .command-description {
    margin-bottom: 10px;
    color: var(--ifm-font-color-base);
  }
  
  .command-syntax, 
  .command-example {
    font-family: monospace;
    background-color: var(--ifm-code-background);
    padding: 8px 12px;
    border-radius: 4px;
    margin-bottom: 8px;
    font-size: 0.9rem;
  }
  
  .command-example {
    color: var(--ifm-color-success);
  }
  
  .command-syntax {
    color: var(--ifm-color-primary);
  }
  
  .command-arguments {
    background-color: var(--ifm-background-color);
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    font-size: 0.9rem;
  }
  
  .command-arguments ul {
    margin-bottom: 0;
    margin-top: 5px;
    padding-left: 20px;
  }
  
  .command-arguments li {
    margin-bottom: 5px;
  }
  
  .command-info-box {
    display: flex;
    align-items: center;
    background-color: var(--ifm-color-info-contrast-background);
    padding: 12px 15px;
    border-radius: 6px;
    margin: 20px 0;
  }
  
  .command-info-icon {
    font-size: 1.2rem;
    margin-right: 10px;
  }
  
  .search-container {
    display: flex;
    align-items: center;
    background-color: var(--ifm-background-color);
    border: 1px solid var(--ifm-color-emphasis-300);
    border-radius: 8px;
    padding: 8px 12px;
    margin: 20px 0;
  }
  
  .search-icon {
    margin-right: 8px;
    font-size: 1.2rem;
  }
  
  .command-search {
    flex: 1;
    border: none;
    background: none;
    font-size: 1rem;
    color: var(--ifm-font-color-base);
    outline: none;
    width: 100%;
  }
  
  /* Dark mode specific styles */
  html[data-theme='dark'] .command-item {
    border-left-color: var(--ifm-color-primary-darker);
  }
  
  html[data-theme='dark'] .command-item h3 {
    color: var(--ifm-color-primary-lighter);
  }
`}
</style>
