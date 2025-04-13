---
slug: cs2-retakes
id: cs2-plugins-retakes
title: "CS2 Retakes w/ RetakesAllocator"
description: Documentation for the CS2 Retakes plugin with RetakesAllocator
---

# CS2 Retakes Plugin

A C# implementation of Retakes for CS2, built using CounterStrikeSharp and inspired by Splewis's version for CS:GO.

## Retake Allocation Configuration

<details className="config-details">
  <summary>
    <span className="summary-icon">⚙️</span>
    <span className="summary-title">Retake Allocation Config</span>
  </summary>
  <div className="config-content">
    <p>You can configure the retake allocation settings through the RetakesAllocator configuration file. This allows you to customize:</p>
    <ul>
      <li>Team balancing settings</li>
      <li>Weapon allocation rules</li>
      <li>Bombsite selection frequency</li>
      <li>Player loadouts and equipment</li>
    </ul>
    
    <p>The configuration file can be found at:</p>
    <div className="code-block">
      <code>csgo/addons/counterstrikesharp/configs/plugins/RetakesAllocator/RetakesAllocator.json</code>
    </div>
  </div>
</details>

## Commands Reference

<div className="commands-section">
  <h3>Weapon Selection Commands</h3>
  <div className="commands-grid">
    <div className="command-card">
      <h4 className="command-title">.guns / .gun</h4>
      <div className="command-description">Opens the Weapon Chat Menu.</div>
      <div className="command-example">Example: <code>.guns</code></div>
    </div>
    
    <div className="command-card">
      <h4 className="command-title">!guns / !gun</h4>
      <div className="command-description">Opens the Weapon Chat Menu.</div>
      <div className="command-example">Example: <code>!guns</code></div>
    </div>
    
    <div className="command-card">
      <h4 className="command-title">!gunsmenu / !gunmenu / .gunmenus</h4>
      <div className="command-description">Opens the Weapon Center Chat Menu.</div>
      <div className="command-example">Example: <code>!gunsmenu</code></div>
    </div>
  </div>
  
  <h3>Spawn Management Commands</h3>
  <div className="commands-grid">
    <div className="command-card">
      <h4 className="command-title">!showspawns</h4>
      <div className="command-description">Displays the spawns for the specified bombsite.</div>
      <div className="command-example">Example: <code>!showspawns A</code></div>
      <div className="command-args">
        <h5>Arguments:</h5>
        <ul>
          <li><span className="arg-name">A / B</span>: <span className="arg-required">Required.</span> Specify the bombsite (A or B).</li>
        </ul>
      </div>
    </div>
    
    <div className="command-card">
      <h4 className="command-title">!addspawn</h4>
      <div className="command-description">Adds a retake spawn point for the bombsite spawns currently shown.</div>
      <div className="command-example">Example: <code>!addspawn CT Y</code></div>
      <div className="command-args">
        <h5>Arguments:</h5>
        <ul>
          <li><span className="arg-name">CT/T</span>: <span className="arg-required">Required.</span> Specify Counter-Terrorists (CT) or Terrorists (T).</li>
          <li><span className="arg-name">Y/N</span>: <span className="arg-required">Required.</span> Indicate if the spawn point can be for a planter (Y/N).</li>
        </ul>
      </div>
    </div>
    
    <div className="command-card">
      <h4 className="command-title">!removespawn</h4>
      <div className="command-description">Removes the nearest spawn point for the bombsite currently shown.</div>
      <div className="command-example">Example: <code>!removespawn</code></div>
    </div>
    
    <div className="command-card">
      <h4 className="command-title">!nearestspawn</h4>
      <div className="command-description">Teleports the player to the nearest spawn point.</div>
      <div className="command-example">Example: <code>!nearestspawn</code></div>
    </div>
    
    <div className="command-card">
      <h4 className="command-title">!hidespawns</h4>
      <div className="command-description">Exits the spawn editing mode.</div>
      <div className="command-example">Example: <code>!hidespawns</code></div>
    </div>
  </div>
  
  <h3>Game Management Commands</h3>
  <div className="commands-grid">
    <div className="command-card">
      <h4 className="command-title">!scramble</h4>
      <div className="command-description">Scrambles the teams for the next round.</div>
      <div className="command-example">Example: <code>!scramble</code></div>
    </div>
  </div>
</div>

<style>
{`
  .plugin-info {
    background-color: var(--ifm-color-primary-darkest);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    color: white;
  }
  
  .plugin-info h3 {
    margin-top: 0;
    color: white;
    font-size: 1.2rem;
  }
  
  .code-link {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    padding: 0.2rem 0.5rem;
    font-family: monospace;
    color: var(--ifm-color-primary-lighter);
    text-decoration: none;
    transition: background-color 0.2s;
  }
  
  .code-link:hover {
    background-color: rgba(255, 255, 255, 0.2);
    text-decoration: none;
    color: white;
  }
  
  .config-details {
    border: 1px solid var(--ifm-color-emphasis-300);
    border-radius: 8px;
    margin-bottom: 2rem;
    overflow: hidden;
  }
  
  .config-details summary {
    background-color: var(--ifm-background-surface-color);
    padding: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
  }
  
  .summary-icon {
    margin-right: 0.75rem;
    font-size: 1.2rem;
  }
  
  .summary-title {
    font-weight: 600;
    font-size: 1.1rem;
  }
  
  .config-content {
    padding: 1rem;
    border-top: 1px solid var(--ifm-color-emphasis-300);
  }
  
  .code-block {
    background-color: var(--ifm-code-background);
    border-radius: 6px;
    padding: 0.75rem 1rem;
    font-family: monospace;
    overflow-x: auto;
    margin: 1rem 0;
  }
  
  .search-wrapper {
    margin-bottom: 1.5rem;
  }
  
  .commands-section h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--ifm-color-emphasis-300);
  }
  
  .commands-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .command-card {
    background-color: var(--ifm-card-background-color);
    border-radius: 8px;
    box-shadow: var(--ifm-global-shadow-lw);
    padding: 1rem;
    border-left: 4px solid var(--ifm-color-primary);
  }
  
  .command-title {
    font-family: monospace;
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--ifm-color-primary);
    font-size: 1.1rem;
  }
  
  .command-description {
    margin-bottom: 0.75rem;
    color: var(--ifm-font-color-base);
  }
  
  .command-example {
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }
  
  .command-example code {
    background-color: var(--ifm-code-background);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
  }
  
  .command-args {
    background-color: var(--ifm-color-emphasis-100);
    border-radius: 4px;
    padding: 0.75rem;
    font-size: 0.9rem;
  }
  
  .command-args h5 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
    color: var(--ifm-color-emphasis-700);
  }
  
  .command-args ul {
    margin: 0;
    padding-left: 1.25rem;
  }
  
  .arg-name {
    font-family: monospace;
    font-weight: 600;
    color: var(--ifm-color-primary);
  }
  
  .arg-required {
    font-weight: 500;
    color: var(--ifm-color-danger);
  }
  
  /* Dark mode adjustments */
  html[data-theme='dark'] .command-args {
    background-color: var(--ifm-color-emphasis-200);
  }
  
  html[data-theme='dark'] .plugin-info {
    background-color: var(--ifm-color-primary-darker);
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .commands-grid {
      grid-template-columns: 1fr;
    }
  }
`}
</style>
