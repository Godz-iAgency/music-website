"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight, Mail, MessageCircleMore, X } from "lucide-react";
import { callUrl, contactEmail as recipient } from "@/lib/site";

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
          <p className="eyebrow">Contact Us</p>
          <h2 id="contact-heading">Get a free plan<br />for your AI app.</h2>
          <p className="contact-offer">A 30 minute video call. No cost, no obligation. You leave with a plan, hire us or not.</p>
          <ol className="contact-steps"><li>Pick a time</li><li>Share your idea</li><li>Get your plan</li></ol>
          <p className="contact-guarantee">Every custom app includes 30 days of free maintenance. Not happy with the final delivery? We keep working for 30 days until it&apos;s right.</p>
          <a className="contact-call" href={callUrl} target="_blank" rel="noopener noreferrer">Pick a Time <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          <Link className="contact-address" href="/build">How we build and maintain your app</Link>
          <a className="contact-address" href={`mailto:${recipient}`}>{recipient}</a>
        </div>
        <button type="button" className="message-button" onClick={() => dialogRef.current?.showModal()} aria-haspopup="dialog" aria-label="Message Us">
          <MessageCircleMore size={28} strokeWidth={1.6} aria-hidden="true" />
          <span>Message Us</span>
        </button>
      </div>
      <dialog ref={dialogRef} className="contact-dialog" aria-labelledby="contact-dialog-heading"
        onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current?.close(); }}>
        <div className="dialog-content">
          <button type="button" className="dialog-close" onClick={() => dialogRef.current?.close()} aria-label="Close message window"><X size={21} aria-hidden="true" /></button>
          <p className="eyebrow">Message GODZ-i</p>
          <h2 id="contact-dialog-heading">What do you want to build?</h2>
          <p className="compose-recipient">{recipient}</p>
          <div className="contact-form">
            <div><label htmlFor="contact-subject">Subject</label><input id="contact-subject" value={subject} onChange={(event) => setSubject(event.target.value)} maxLength={200} autoFocus /></div>
            <div><label htmlFor="contact-message">Message</label><textarea id="contact-message" value={message} onChange={(event) => setMessage(event.target.value)} maxLength={5000} rows={5} /></div>
            <a className="button button-accent" href={gmailLink} target="_blank" rel="noopener noreferrer">Continue in Gmail <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
            <a className="compose-email" href={emailLink}><Mail size={18} strokeWidth={1.75} aria-hidden="true" />Use your email app</a>
            <p className="compose-note">Your draft opens in your email composer. Press Send there.</p>
          </div>
        </div>
      </dialog>
    </section>
  );
}
