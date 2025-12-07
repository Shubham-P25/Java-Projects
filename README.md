# Javap (NetBeans Java GUI App)

This repository contains a Java desktop application originally created with NetBeans (forms + Java classes). This README explains how to build an executable JAR and publish the project so others can view and run it.

## What I added
- A Gradle `fatJar` task in `app/build.gradle` that produces a runnable JAR bundling runtime dependencies.
- This README and a `.gitignore` (see below) to prepare the project for publishing.

## Build (Windows, using bundled Gradle wrapper)
Open a PowerShell in the repository root (where `gradlew.bat` is) and run:

```powershell
.\gradlew.bat :app:fatJar
```

After successful build the runnable JAR will be under:

```
app\build\libs\
```

The JAR will have `-all` in its name, e.g. `app-1.0-SNAPSHOT-all.jar`. Run it using:

```powershell
java -jar .\app\build\libs\<your-jar-name>-all.jar
```

## Publish to GitHub (quick steps)
1. Create a new repository on GitHub.
2. Add the remote and push your code:

```powershell
git init
git add .
git commit -m "Initial import"
git remote add origin https://github.com/your-username/your-repo.git
git branch -M main
git push -u origin main
```

3. Build locally (see above) and upload the produced `-all.jar` as a Release asset on GitHub Releases so users can download the runnable file.

Optional: add a GitHub Actions workflow to automatically build and attach the JAR to Releases on tag creation. If you want that, I can add it.

## Notes & recommendations
- Because this is a desktop GUI app (NetBeans forms), it cannot be hosted as a web site. The best way to let everyone view/run it is to publish the source to GitHub and upload the runnable JAR as a release asset.
- If you prefer platform installers (Windows EXE or MSI), consider using jpackage or third-party installer builders.
- If you want a simple project page, enable GitHub Pages and add a short project summary with screenshots.

If you'd like, I can also:
- Add a GitHub Actions workflow to build the fat JAR automatically.
- Create a basic `docs/` index page and enable GitHub Pages.
- Create a release draft and upload the JAR for you (requires repository access).
 
## Experimental: WebAssembly (WASM) POC

There is a new experimental Maven subproject at `wasm/` which attempts to compile a small copy of the game logic to WebAssembly using Bytecoder. It's a proof-of-concept and may require installing Maven and adjusting the Bytecoder plugin version.

To build the WASM module (may take a few minutes):

```powershell
mvn -f wasm/pom.xml package
```

Output will be written to `wasm/target/bytecoder/` (check the plugin output). The `web/` folder contains a placeholder `index.html` that will need the generated JS/WASM files referenced.


---
Generated on: 2025-12-07
