'use client';

import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';

const Mermaid = ({ chart }: { chart: string }) => {
  const [svg, setSvg] = useState<string>();

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false,  'theme': 'base',
    'themeVariables': {
      'primaryColor': '#00E16D',
      'secondaryColor': '#9BCCB4',
      'tertiaryColor': '#EBFAF2',
      'edgeLabelBackground': '#fff',
    }});
    mermaid.render('mermaidChart', chart).then((result) => setSvg(result.svg));
  }, [chart]);

  return (
    <svg
      className="min-w-full"
      dangerouslySetInnerHTML={{ __html: svg ?? '' }}
    />
  );
};

export default Mermaid;
