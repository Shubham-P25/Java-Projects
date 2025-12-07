# Javap — Desktop Java Game

This is a small Java desktop game originally created with NetBeans. The repository contains source code and a runnable fat JAR that you can download from Releases.

## Quick links
- Download the runnable JAR from GitHub Releases (look for the latest tag `v*`).
- Build locally with the Gradle wrapper: `./gradlew :app:fatJar` and run `java -jar app/build/libs/app-all.jar`.

## About
This is a GUI application (NetBeans Forms). It is packaged as a self-contained JAR (includes runtime dependencies) to make distribution simple.

## How others can run it
1. Download `app-all.jar` from Releases.
2. Run on any machine with a recent JRE/JDK installed:

```
java -jar app-all.jar
```

## Screenshots
Add screenshots here (you can replace this file or add images under `docs/assets/` and reference them).

## CI / Releases
This repository includes a GitHub Actions workflow (`.github/workflows/release.yml`) that builds the fat JAR and attaches it to a GitHub Release when you push a tag that starts with `v` (for example `v1.0.0`). To create a release locally, tag and push:

```bash
git tag v1.0.0
git push origin v1.0.0
```

The workflow will run and create the Release with the built JAR available for download.

---
If you want, I can add screenshots and a short demo GIF to this page and wire GitHub Actions to automatically publish docs to GitHub Pages.
