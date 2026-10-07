import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <a href="#hero" className="footer-brand">GODZ-i</a>
        <p>© GODZ-i 2026</p>
        <a href="#hero" className="back-to-top">Back to top <ArrowUp size={15} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
