import { memo, useMemo } from 'react';
import { barShape, computeLayout, fileCap, findPauses } from './model';
import type { TraceCommit } from './model';

interface ProjectTraceProps {
  commits: readonly TraceCommit[];
  /** viewBox size: the svg stretches to fill its box, so only the proportions matter */
  width: number;
  height: number;
}

/** The trace of one project, drawn like the commit trace: one bar per commit, taller when the commit
 *  touches more files. Decorative: the caption next to it gives the dates and the count. */
export const ProjectTrace = memo(function ProjectTrace({ commits, width, height }: ProjectTraceProps) {
  const path = useMemo(() => {
    const layout = computeLayout(findPauses(commits), width, height);
    const cap = fileCap(commits);
    return commits
      .map((commit, i) => {
        const shape = barShape(commit.files, cap, height);
        const bar = layout.bar.toFixed(2);
        return `M${layout.xs[i].toFixed(1)} ${shape.y.toFixed(1)}h${bar}v${shape.height.toFixed(1)}h-${bar}z`;
      })
      .join('');
  }, [commits, width, height]);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d={path} fill="currentColor" />
    </svg>
  );
});
