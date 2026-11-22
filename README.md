# Front Page — 22 November 2026

A dense newspaper front page summing up the world's news of **Sunday, 22 November 2026** in one image — built for [make.fun](https://make.fun/bounty/news-image-20261122?ref=c24scye7)'s **"Sum up 22 November's world news in one image"** bounty ($100 in USDC).

## The image

`entry.png` (1024×1024, drawn with PIL) is "THE WORLD TODAY", a one-page front page with:

- A masthead naming the day: **Sunday, 22 November 2026**
- **3 top stories** — COP31 collapses with no deal in Antalya; a Russian drone flattens a Kyiv-region flat, 14 missing; an Iran strike on a Bahrain plant wounds two
- **A world map** with the three top-story locations pinned
- **8 medium cards** — Hegseth's Canada memo, ICE training, Nepal PM in India, India–China talks, India 720/9 vs New Zealand, Bolsonaro in hospital, Verstappen's Las Vegas GP win, England beating the All Blacks
- **Briefs 12–30** — from Chahal joining the BJP to Kansas City Current's first NWSL title

Every story was first reported on 22 November 2026 — nothing from an earlier day.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`. Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
