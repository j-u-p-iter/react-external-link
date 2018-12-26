import React, { SFC, ReactNode, ReactElement } from 'react';

interface ExternalLinkProps {
  baseUrl: string;
  urlPath: string;
  children: ReactNode;
  blank?: boolean;
  queryObject: { [key: string]: any };
}

type CreateHref = (...args: any[]) => string;
const createHref: CreateHref = () => 'href';

export const ExternalLink: SFC<ExternalLinkProps> = ({
  baseUrl,
  urlPath,
  queryObject,
  children,
  blank = true,
}) => (
  <a
    href={createHref(baseUrl, urlPath, queryObject)}
    target={blank ? '_blank' : undefined}
  >
    {children}
  </a>
) as ReactElement<any>;
