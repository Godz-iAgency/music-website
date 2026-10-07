"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Mail, MessageCircle, X } from "lucide-react";

const recipient = "Christopher@godz-iagency.com";

export function Contact() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const emailLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading">Let&apos;s build<br />something useful.</h2>
          <a className="contact-address" href={`mailto:${recipient}`}>{recipient}</a>
        </div>
        <button type="button" className="message-button" onClick={() => dialogRef.current?.showModal()} aria-haspopup="dialog" aria-label="Message Christopher">
          <MessageCircle size={28} aria-hidden="true" />
          <span>Message me</span>
        </button>
      </div>
      <dialog ref={dialogRef} className="contact-dialog" aria-labelledby="contact-dialog-heading"
        onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current?.close(); }}>
        <div className="dialog-content">
          <button type="button" className="dialog-close" onClick={() => dialogRef.current?.close()} aria-label="Close message window"><X size={21} aria-hidden="true" /></button>
          <p className="eyebrow">To Christopher</p>
          <h2 id="contact-dialog-heading">Write your message.</h2>
          <p className="compose-recipient">{recipient}</p>
          <div className="contact-form">
            <div><label htmlFor="contact-subject">Subject</label><input id="contact-subject" value={subject} onChange={(event) => setSubject(event.target.value)} maxLength={200} autoFocus /></div>
            <div><label htmlFor="contact-message">Message</label><textarea id="contact-message" value={message} onChange={(event) => setMessage(event.target.value)} maxLength={5000} rows={5} /></div>
            <a className="button button-accent" href={gmailLink} target="_blank" rel="noopener noreferrer">Continue in Gmail <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
            <a className="compose-email" href={emailLink}><Mail size={16} aria-hidden="true" />Use my email app</a>
            <p className="compose-note">Your draft opens in your email composer. Press Send there.</p>
          </div>
        </div>
      </dialog>
    </section>
  );
}
