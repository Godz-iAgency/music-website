import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "GODZ-i Agency. More progress. Less friction. Better learning. Stronger connections. Healthier meals. Clearer finances.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function SocialImage() {
  const logo = await readFile(join(process.cwd(), "public/godzi_logo_horizontal.png"));
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: "#101110", color: "#f7f7f2", padding: "64px 80px" }}>
      <div style={{ display: "flex", background: "#fff", borderRadius: 4, width: 226, padding: "8px 12px" }}>
        {/* ImageResponse uses its own renderer, so next/image is not applicable. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${logo.toString("base64")}`} width={202} height={61} alt="GODZ-i" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 64, fontSize: 76, fontWeight: 600, lineHeight: 1.08, letterSpacing: "-3px" }}>
        <span>More progress.</span><span style={{ color: "#bfc0c7" }}>Less friction.</span>
      </div>
      <div style={{ display: "flex", fontSize: 25, color: "#bfc0c7", marginTop: 32 }}>Better learning. Stronger connections. Healthier meals. Clearer finances.</div>
      <div style={{ display: "flex", position: "absolute", bottom: 54, right: 80, color: "#e8430a", fontSize: 20 }}>godz-iagency.com</div>
    </div>,
    size,
  );
}
