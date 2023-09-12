"use client";
import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-inline: auto;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1120px;
  }
  @media (min-width: 1536px) {
    max-width: 1120px;
  }
`;

interface PropsRow {
  grid?: number;
  gap?: string;
}

export const Row = styled.div<PropsRow>`
  ${(p) =>
    p.grid
      ? `
        display: grid;
        grid-template-columns: repeat(${p.grid}, minmax(0, 1fr));
        `
      : `
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        max-width: 100%;`}
  ${(p) => p.gap && `gap: ${p.gap}`}
`;

export const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
export const Separator = styled.span`
  width: 100%;
  height: 2px;
  flex-shrink: 0;
  display: flex;
  background-color: #dce2e6;
`;
