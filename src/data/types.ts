import type { LucideIcon } from 'lucide-react';

/**
 * Strict TypeScript interfaces for all data objects.
 * Applied across projects.ts, services.ts, radar.ts, and translations.
 */

// ── Projects ──────────────────────────────────────────────────────────

export interface Project {
      id: string;
      title: string;
      description: string;
      type: string;
      status: 'Production' | 'Completed' | 'Live' | 'Concept' | 'Development';
      stack: string[];
      accessLevel: 'Public' | 'Restricted' | 'Confidential';
      link?: string;
}

// ── Services / Expertise ──────────────────────────────────────────────

export interface Service {
      id: string;
      title: string;
      description: string;
      icon: LucideIcon;
      riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
}

export interface HistoryEntry {
      year: string;
      event: string;
      description: string;
}

// ── Tech Radar ────────────────────────────────────────────────────────

export type RadarQuadrant = 'adopt' | 'trial' | 'assess' | 'hold';

export interface TechItem {
      id: string;
      name: string;
      quadrant: RadarQuadrant;
      description: string;
}

// ── Intel Briefings ───────────────────────────────────────────────────

export type IntelSeverity = 'info' | 'warning' | 'critical';

export interface IntelBriefing {
      id: string;
      title: string;
      content: string;
      severity: IntelSeverity;
      date: string;
}

// ── CV / Professional Data ────────────────────────────────────────────

export interface ExperienceEntry {
      title: string;
      company: string;
      description: string;
}

export interface ProfileData {
      name: string;
      role: string;
      bio: string;
      experience: ExperienceEntry[];
      skills: string[];
      education: {
            degree: string;
            focus: string;
      };
      languages: {
            name: string;
            level: string;
      }[];
      linkedin: string;
}

// ── Translation Shape (partial — for data function typing) ────────────

export interface TranslationProjectItem {
      title: string;
      description: string;
      type: string;
      stack: string[];
}

export interface TranslationProjects {
      list: {
            vote_guard: TranslationProjectItem;
            sector_watch: TranslationProjectItem;
            core_sync: TranslationProjectItem;
            media_ops: TranslationProjectItem;
            meeting_manager: TranslationProjectItem;
            the_talk_fashion: TranslationProjectItem;
            satisystem: TranslationProjectItem;
      };
}
