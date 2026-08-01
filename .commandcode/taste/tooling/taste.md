# Taste

## Build pipeline

- Prefers generated/compiled assets (e.g., Tailwind CSS output) to be written to a gitignored intermediate directory, then copied into the final output by the static site generator (11ty passthrough copy) — compiled artifacts should not be committed to git. Confidence: 0.8

- Prefers orchestrating multi-step builds (e.g., CSS compile → 11ty build) via Nx target `dependsOn` wiring rather than chaining commands inside npm scripts. Confidence: 0.7
