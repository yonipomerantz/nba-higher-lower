# NBA Higher/Lower

A fast, mobile-first streak game: you're shown an NBA player and their career stat
total, then a second player with their total hidden. Guess whether the second
player's career total is **higher** or **lower**. Get it right and the streak
continues; one wrong guess ends the run.

**Live site:** https://yonipomerantz.github.io/nba-higher-lower/

## The goal

**Can you go 82–0?**

Pick a category — Points, Assists, or Rebounds — and chain as many correct
guesses as possible. Reaching a streak of 82 (an NBA regular season's worth of
games) is the ultimate win condition.

## How it works

1. Pick a stat category.
2. See Player A's career total.
3. Guess whether Player B has more or fewer.
4. The actual number reveals, correct or wrong.
5. Correct → your streak grows and Player B becomes the new Player A for the
   next matchup. Wrong → the run ends and your final record is shown.
6. Best streak per category is saved locally so you can try to beat it.

Desktop keyboard shortcuts: Left Arrow / `L` for Lower, Right Arrow / `H` for
Higher.

This is a static demo: all ~59 players and their career point/assist/rebound
totals are a hardcoded dataset in `script.js` (compiled from general knowledge,
not a live stats API), clearly labeled as a fixed snapshot rather than live data.
Best scores, last category, and lightweight totals persist via `localStorage`.

## Tech

Plain `index.html` / `styles.css` / `script.js` — no framework, no build step,
no backend. Open `index.html` directly in a browser, or serve the folder with
any static file server, e.g.:

```bash
python3 -m http.server 4174
```

## Course context

Built for HW1 in *AI Assisted Development of Products and Services*, developed
iteratively with Claude Code.
