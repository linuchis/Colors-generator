

# 🎨 ColorSense AI!

This project is a **web application under active development** aimed at generating **color palettes from images**, combining clustering techniques and future AI-based approaches guided by visual styles.

As of **December 2025**, the project is still in its early development stage and does not yet include finalized model results.

<img width="1484" height="877" alt="image" src="https://github.com/user-attachments/assets/d70838b2-34dd-4b5f-8712-2132cb6a1721" />



---

## 🧠 Project Motivation

This is a personal project inspired by the idea that **color selection is often driven by visual references**.

Historically, artists, designers, and creators have taken inspiration from specific sets of visual data (such as landscapes, photographs, or materials) to define color palettes for clothing, artwork, or design pieces. This project follows the same principle.

While tools like Adobe Color are powerful, manually selecting colors can feel tedious. This application aims to **automate and guide that process**, allowing users to extract and reinterpret colors from images that genuinely represent their creative vision.

---

## ✨ Project Goal

- Extract the main colors present in an image.
- Preserve the original color relationships and patterns.
- Allow users to generate **enhanced palettes** guided by a chosen visual style  
  (e.g. vintage, pastel, cinematic, minimal).

---

## ⚙️ Current Implementation

- **Frontend:** React (Vite)
- **Models:**
  - K-means clustering (planned, not yet producing final results)
  - AI-based model (to be defined)
- **Status:** Development phase (no production-ready models yet)
<img width="1280" height="525" alt="process" src="https://github.com/user-attachments/assets/0e71dc8f-3136-4f9f-aafc-af302d0a9a30" />

---

## 🚧 Project Status

- No model outputs available yet.
- Initial focus is on frontend structure and user flow.
- Models and backend will be implemented in a later stage.

---

## 🧪 Methodology (Conceptual)

The intended workflow of the project is as follows:

1. **Image Input**
   - User uploads an image as the main visual reference.

2. **Color Analysis**
   - Extract raw color data from the image.
   - Identify dominant colors using clustering techniques (e.g. K-means).

3. **Pattern Preservation**
   - Maintain the original color relationships and distribution patterns.

4. **Style Guidance**
   - Apply transformations guided by a selected style (vintage, pastel, etc.).
   - Enhance the palette while keeping its visual coherence.

5. **Palette Output**
   - Generate a refined color palette ready for creative use.

*(This methodology is subject to change as the project evolves.)*

---

## 🖥️ Running the Project Locally

```bash
npm install
npm run dev
