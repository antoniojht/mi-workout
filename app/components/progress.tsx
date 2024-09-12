"use client";

import { useEffect, useState } from "react";
import { Progress } from "@nextui-org/react";

interface ProgressBarWrapperProps {
  progress: number;
}

export default function ProgressBarWrapper({
  progress,
}: ProgressBarWrapperProps) {
  const [value, setValue] = useState(progress);

  useEffect(() => {
    setValue(progress);
  }, [progress]);

  return (
    <Progress
      aria-label="Downloading..."
      size="md"
      value={value}
      color="success"
      showValueLabel={true}
      className="max-w-md"
    />
  );
}
