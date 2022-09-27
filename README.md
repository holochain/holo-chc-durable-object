# CHC implementation for Holo-hosted source chains.

This is just an early work-in-progress proof of concept, just getting a sense of Durable Objects. 

Based on the 👷 Durable Objects Counter template. README from that template follows:

- - -

## Note: You must use [wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update) 1.19.3 or newer to use this template.

## Please read the [Durable Object documentation](https://developers.cloudflare.com/workers/learning/using-durable-objects) before using this template.

A template for kick starting a Cloudflare Workers project using:

- Durable Objects
- Modules (ES Modules to be specific)
- Rollup
- Wrangler

Worker code is in `src/`. The Durable Object `Counter` class is in `src/counter.mjs`, and the eyeball script is in `index.mjs`.

Rollup is configured to output a bundled ES Module to `dist/index.mjs`.
