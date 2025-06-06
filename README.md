This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
===================================================================================================================================
// src/component/__test__/FeatureCards.test.tsx

import React from 'react';
import { render, screen, within } from "@testing-library/react";
import '@testing-library/jest-dom';
import Counter from "../FeactureCount"; // Corrija o caminho se necessário

// Mock do react-countup para retornar um valor formatado fixo
jest.mock('react-countup', () => {
  return function MockCountUp({ end, separator, decimal }: { end: number; separator?: string; decimal?: string }) {
    const formattedEnd = end.toLocaleString('pt-BR', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });

    const finalDisplay = formattedEnd
      .replace(/\./g, separator || '.')
      .replace(/,/g, decimal || ',');

    return <span data-testid="countup-mock-value">{finalDisplay}</span>;
  };
});

describe("Counter", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it("exibe corretamente o valor e o texto: Mototaxistas registados", () => {
    const section = screen.getByText('Mototaxistas registados').closest('div');
    const value = within(section!).getByTestId('countup-mock-value');
    expect(value).toHaveTextContent('25.000,0');
  });

  it("exibe corretamente o valor e o texto: corridas Realizadas", () => {
    const section = screen.getByText('corridas Realizadas').closest('div');
    const value = within(section!).getByTestId('countup-mock-value');
    expect(value).toHaveTextContent('50.000,0');
  });

  it("exibe corretamente o valor e o texto: satisfaçºoes dos clientes", () => {
    const section = screen.getByText('satisfaçºoes dos clientes').closest('div');
    const value = within(section!).getByTestId('countup-mock-value');
    expect(value).toHaveTextContent('70,0');
  });
});






















