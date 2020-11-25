import React from "react";

export type SpacerSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

const pxForSpacerSize: { [key in SpacerSize]: number } = {
  xsmall: 2,
  small: 4,
  medium: 16,
  large: 32,
  xlarge: 64,
};

export const Spacer: React.FC<{
  size: SpacerSize;
  hfill?: boolean;
}> = ({ size, hfill }) => {
  return (
    <div
      style={{
        minHeight: pxForSpacerSize[size],
        width: hfill ? "100%" : pxForSpacerSize[size],
      }}
    />
  );
};
