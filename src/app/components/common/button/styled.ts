"use client";

import { COLOR } from "@/app/theme/Color";
import Link from "next/link";
import styled, { css } from "styled-components";

const BaseButtonStyles = css`
  width: fit-content;
  background-color: ${COLOR.SECONDARY};
  color: ${COLOR.OFFWHITE};
  text-decoration: none;
  border: none;
  border-radius: 50px;
  padding: 16px 50px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.3s ease,
    transform 0.15s ease;

  &:hover {
    background-color: ${COLOR.PRIMARY};
  }
`;

export const ButtonWrapper = styled(Link)`
  ${BaseButtonStyles}
`;

export const OnClickButtonWrapper = styled.button`
  ${BaseButtonStyles}
`;

export const ButtonText = styled.p`
  color: inherit;
`;
