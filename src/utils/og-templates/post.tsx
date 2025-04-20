import satori from "satori";
import type { CollectionEntry } from "astro:content";
import { SITE } from "@config";
import loadGoogleFonts, { type FontOptions } from "../loadGoogleFont";

export default async (post: CollectionEntry<"blog">) => {
  // Define the desired serif font
  const serifFont = "'EB Garamond', serif";
  // Define scroll-like colors
  const scrollBgColor = "#faf0e6"; // Linen
  const shadowBgColor = "#e0d8c0"; // Slightly darker beige/tan
  const borderColor = "#8B4513"; // SaddleBrown

  return satori(
    <div
      style={{
        background: scrollBgColor, // Use scroll background
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: serifFont, // Apply serif font globally
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-1px",
          right: "-1px",
          border: `4px solid ${borderColor}`, // Use brown border
          background: shadowBgColor, // Use shadow background
          opacity: "0.9",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          margin: "2.5rem",
          width: "88%",
          height: "80%",
        }}
      />

      <div
        style={{
          border: `4px solid ${borderColor}`, // Use brown border
          background: scrollBgColor, // Use scroll background
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          margin: "2rem",
          width: "88%",
          height: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "20px",
            width: "90%",
            height: "90%",
          }}
        >
          <p
            style={{
              fontSize: 72,
              fontWeight: "bold", // Keep bold for title maybe? Or set to 400 for regular?
              maxHeight: "84%",
              overflow: "hidden",
              fontFamily: serifFont, // Ensure font is applied
            }}
          >
            {post.data.title}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "8px",
              fontSize: 28,
              fontFamily: serifFont, // Ensure font is applied
            }}
          >
            <span>
              by{" "}
              <span
                style={{
                  // Keep this for spacing potentially?
                  color: "transparent",
                }}
              >
                "
              </span>
              <span style={{ overflow: "hidden", fontWeight: "bold", fontSize: 36 }}>
                {post.data.author}
              </span>
            </span>

            <span style={{ overflow: "hidden", fontWeight: "bold", fontSize: 36 }}>
              {SITE.title}
            </span>
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      embedFont: true,
      // Font loading now handled by config in loadGoogleFont.ts
      fonts: (await loadGoogleFonts(
        post.data.title + post.data.author + SITE.title + "by"
      )) as FontOptions[],
    }
  );
};
