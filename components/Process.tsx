"use client";

import React, { memo, useCallback, useState } from "react";
import Container from "./Container";

// ── Icons ──────────────────────────────────────────────────────────────────
const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);
const ChevronUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 15-6-6-6 6"/>
  </svg>
);

const IconMessage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" {...props} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconFile = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" {...props} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const IconCode = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" {...props} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 16 4-4-4-4"/>
    <path d="m6 8-4 4 4 4"/>
    <path d="m14.5 4-5 16"/>
  </svg>
);
const IconRocket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" {...props} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const stepIcons = [IconMessage, IconFile, IconCode, IconRocket];

// ── Types ──────────────────────────────────────────────────────────────────
type Step = {
  number: string;
  title: string;
  type: string;
  description: string;
  responsibilities: string[];
  tags: string[];
};

type ProcessDict = {
  eyebrow: string;
  headline: string;
  subtext: string;
  steps: Step[];
};

type Props = {
  process: ProcessDict;
};

// ── TimelineItemContent ────────────────────────────────────────────────────
const TimelineItemContent = memo(function TimelineItemContent({ step }: { step: Step }) {
  return (
    <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {step.responsibilities.map((r, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.55)" }}>
            <span style={{
              width: "5px", height: "5px", borderRadius: "50%",
              backgroundColor: "var(--accent)", flexShrink: 0, marginTop: "0.45rem"
            }} />
            <span style={{ lineHeight: "var(--leading-loose)" }}>{r}</span>
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", paddingTop: "0.25rem" }}>
        {step.tags.map((tag, i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center",
            padding: "0.25rem 0.75rem",
            fontSize: "0.7rem",
            fontWeight: "var(--weight-semibold)",
            letterSpacing: "0.04em",
            backgroundColor: "rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.5)",
            borderRadius: "2px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
});

// ── TimelineItem ───────────────────────────────────────────────────────────
const TimelineItem = memo(function TimelineItem({
  step, index, expanded, onToggle,
}: {
  step: Step; index: number; expanded: boolean; onToggle: (id: string) => void;
}) {
  const Icon = stepIcons[index];
  const headerId = `timeline-header-${step.number}`;
  const contentId = `timeline-content-${step.number}`;

  return (
    <li style={{ position: "relative" }}>
      {/* Marker */}
      <div style={{
        position: "absolute", left: "1px", top: "1.25rem",
        width: "24px", height: "24px", borderRadius: "50%",
        backgroundColor: "rgba(255,107,44,0.12)",
        border: "1px solid rgba(255,107,44,0.35)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 1,
      }}>
        <Icon style={{ color: "var(--accent)" }} />
      </div>

      {/* Card */}
      <div style={{ marginLeft: "3.25rem", paddingBottom: "1.25rem" }}>
        <div style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          borderRadius: "4px",
          padding: "1.25rem 1.5rem",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "border-color 0.2s ease",
        }}>
          <button
            id={headerId}
            style={{
              width: "100%", textAlign: "left", cursor: "pointer",
              background: "none", border: "none", padding: 0,
            }}
            onClick={() => onToggle(step.number)}
            aria-expanded={expanded}
            aria-controls={contentId}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
              <div>
                <h3 style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--weight-bold)",
                  color: "rgba(255,255,255,0.9)",
                  letterSpacing: "-0.01em",
                  lineHeight: "var(--leading-snug)",
                }}>
                  {step.title}
                </h3>
                <div style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  marginTop: "0.25rem",
                  fontSize: "var(--text-xs)",
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.02em",
                }}>
                  <span>{step.type}</span>
                </div>
              </div>
              <div style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }}>
                {expanded ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
          </button>

          {expanded && (
            <div id={contentId} role="region" aria-labelledby={headerId}>
              <TimelineItemContent step={step} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
});

// ── Main Timeline ──────────────────────────────────────────────────────────
function ProfessionalTimeline({ steps }: { steps: Step[] }) {
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set([steps[0]?.number])
  );

  const onToggle = useCallback((id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return (
    <ol style={{ position: "relative", listStyle: "none", padding: 0, margin: 0 }}>
      {/* Vertical line */}
      <div style={{
        position: "absolute", left: "12px", top: 0, bottom: 0,
        width: "1px", backgroundColor: "rgba(255,255,255,0.08)",
      }} aria-hidden />

      {steps.map((step, i) => (
        <TimelineItem
          key={step.number}
          step={step}
          index={i}
          expanded={expanded.has(step.number)}
          onToggle={onToggle}
        />
      ))}
    </ol>
  );
}

// ── Section ────────────────────────────────────────────────────────────────
export default function Process({ process }: Props) {
  return (
    <section style={{ backgroundColor: "#0d0d12", color: "#ffffff", padding: "8rem 0" }} aria-labelledby="process-heading">
      <Container>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "4rem",
          alignItems: "start",
        }}>

          {/* Left */}
          <div style={{ position: "sticky", top: "8rem" }}>
            <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>{process.eyebrow}</p>
            <h2 id="process-heading" style={{
              fontFamily: "var(--font-body-family)",
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              fontWeight: "var(--weight-extrabold)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginBottom: "1.5rem",
            }}>
              {process.headline}
            </h2>
            <p style={{
              fontSize: "var(--text-sm)",
              lineHeight: "var(--leading-loose)",
              color: "rgba(255,255,255,0.45)",
            }}>
              {process.subtext}
            </p>
          </div>

          {/* Right — timeline */}
          <ProfessionalTimeline steps={process.steps} />

        </div>
      </Container>
    </section>
  );
}
