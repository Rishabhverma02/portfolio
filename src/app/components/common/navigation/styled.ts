"use client";
import Link from "next/link";
import styled from "styled-components";

export const NavLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 1080.98px) {
    display: none;
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    /* color: #eabc17; */
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: #eabc17;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: #eabc17;
  }

  &.active::after {
    width: 100%;
  }
`;