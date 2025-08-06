---
slug: openprefireprac
id: cs2-plugins-openprefireprac
title: "Prefire Practice Plugin"
description: Guide to using the OpenPrefirePrac plugin for CS2 servers
---

# OpenPrefirePrac Plugin

An open-source server-side practice plugin for CS2, powered by CounterStrikeSharp. It offers multiple prefire practice scenarios on competitive map pool maps and supports concurrent multiplayer practice sessions.

## Getting Started

**YOU MUST LOAD THE PLUGIN FIRST WITH `!prefireon`**

1. Send "**!prefire**" in chatbox or use command "**css_prefire**" in console.
2. This will bring up the main menu with available options.

## Command Reference

<div className="commands-grid">
  <div className="command-card" id="prefire-prac">
    <h3>!prefire prac [number]</h3>
    <div className="command-description">Start practicing on a selected route.</div>
    
    <div className="command-example">
      <span className="example-label">Example:</span>
      <code>!prefire prac 1</code>
    </div>
    
    <div className="command-args">
      <h4>Arguments:</h4>
      <ul>
        <li><strong>number</strong>: <em>Optional.</em> The route number to practice.</li>
      </ul>
    </div>
  </div>

  <div className="command-card" id="prefire-map">
    <h3>!prefire map [map name]</h3>
    <div className="command-description">Switch to another map.</div>
    
    <div className="command-example">
      <span className="example-label">Example:</span>
      <code>!prefire map de_dust2</code>
    </div>
    
    <div className="command-args">
      <h4>Arguments:</h4>
      <ul>
        <li><strong>map name</strong>: <em>Required.</em> The name of the map to switch to.</li>
      </ul>
    </div>
  </div>

  <div className="command-card" id="prefire-df">
    <h3>!prefire df [1-6]</h3>
    <div className="command-description">Set the difficulty level for the practice.</div>
    
    <div className="command-example">
      <span className="example-label">Example:</span>
      <code>!prefire df 3</code>
    </div>
    
    <div className="command-args">
      <h4>Arguments:</h4>
      <ul>
        <li><strong>1-6</strong>: <em>Required.</em> Difficulty level ranging from 1 to 6.</li>
      </ul>
    </div>
  </div>

  <div className="command-card" id="prefire-mode">
    <h3>!prefire mode [rand/full]</h3>
    <div className="command-description">Set the training mode.</div>
    
    <div className="command-example">
      <span className="example-label">Example:</span>
      <code>!prefire mode rand</code>
    </div>
    
    <div className="command-args">
      <h4>Arguments:</h4>
      <ul>
        <li><strong>rand/full</strong>: <em>Required.</em> Choose between 'rand' (random) or 'full' (entire route).</li>
      </ul>
    </div>
  </div>

  <div className="command-card" id="prefire-bw">
    <h3>!prefire bw [rand/usp/ak/sct/awp]</h3>
    <div className="command-description">Set the weapons for bots during practice.</div>
    
    <div className="command-example">
      <span className="example-label">Example:</span>
      <code>!prefire bw ak</code>
    </div>
    
    <div className="command-args">
      <h4>Arguments:</h4>
      <ul>
        <li><strong>rand/usp/ak/sct/awp</strong>: <em>Required.</em> Select a weapon for bots, or use 'rand' for random.</li>
      </ul>
    </div>
  </div>

  <div className="command-card" id="prefire-lang">
    <h3>!prefire lang [en/pt/zh]</h3>
    <div className="command-description">Set the language for practice mode messages.</div>
    
    <div className="command-example">
      <span className="example-label">Example:</span>
      <code>!prefire lang en</code>
    </div>
    
    <div className="command-args">
      <h4>Arguments:</h4>
      <ul>
        <li><strong>en/pt/zh</strong>: <em>Required.</em> Select 'en' for English, 'pt' for Portuguese, or 'zh' for Chinese.</li>
      </ul>
    </div>
  </div>

  <div className="command-card" id="prefire-exit">
    <h3>!prefire exit</h3>
    <div className="command-description">Stop practicing and exit the prefire practice mode.</div>
    
    <div className="command-example">
      <span className="example-label">Example:</span>
      <code>!prefire exit</code>
    </div>
  </div>
</div>

<div className="help-footer">
  <p>You can always use <code>!prefire help</code> to see how to use these commands.</p>
</div>

<style>
{`
  .search-container {
    margin: 20px 0;
    display: flex;
    align-items: center;
  }
  
  .command-search {
    padding: 10px;
    border-radius: 6px;
    border: 1px solid var(--ifm-color-emphasis-300);
    width: 100%;
    background-color: var(--ifm-background-color);
    color: var(--ifm-font-color-base);
  }
  
  .commands-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 16px;
    margin: 20px 0;
  }
  
  .command-card {
    background-color: var(--ifm-card-background-color);
    border-radius: 8px;
    box-shadow: var(--ifm-global-shadow-lw);
    padding: 16px;
    border-left: 4px solid var(--ifm-color-primary);
    overflow: hidden;
  }
  
  .command-card h3 {
    margin-top: 0;
    font-family: monospace;
    color: var(--ifm-color-primary);
    font-size: 1.1rem;
  }
  
  .command-description {
    margin-bottom: 12px;
    color: var(--ifm-font-color-base);
  }
  
  .command-example {
    background-color: var(--ifm-code-background);
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 12px;
    font-family: monospace;
  }
  
  .example-label {
    color: var(--ifm-color-emphasis-700);
    margin-right: 8px;
    font-size: 0.9rem;
  }
  
  .command-example code {
    color: var(--ifm-color-success);
    background: none;
    padding: 0;
  }
  
  .command-args {
    background-color: var(--ifm-background-surface-color);
    border-radius: 4px;
    padding: 12px;
    font-size: 0.9rem;
  }
  
  .command-args h4 {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 0.9rem;
    color: var(--ifm-color-emphasis-700);
  }
  
  .command-args ul {
    margin: 0;
    padding-left: 20px;
  }
  
  .command-args li {
    margin-bottom: 4px;
  }
  
  .command-args strong {
    color: var(--ifm-color-primary);
    font-family: monospace;
    font-weight: 600;
  }
  
  .help-footer {
    background-color: var(--ifm-color-emphasis-100);
    border-radius: 8px;
    padding: 12px 16px;
    margin-top: 30px;
    text-align: center;
  }
  
  .help-footer p {
    margin: 0;
  }
  
  .help-footer code {
    background-color: var(--ifm-color-emphasis-200);
  }
  
  /* Dark mode overrides */
  html[data-theme='dark'] .command-args {
    background-color: var(--ifm-background-color);
  }
  
  html[data-theme='dark'] .help-footer {
    background-color: var(--ifm-color-emphasis-200);
  }
`}
</style>
