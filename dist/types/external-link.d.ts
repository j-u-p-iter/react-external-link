import { SFC, ReactNode } from 'react';
interface ExternalLinkProps {
    baseUrl: string;
    urlPath: string;
    children: ReactNode;
    blank?: boolean;
    queryObject: {
        [key: string]: any;
    };
}
export declare const ExternalLink: SFC<ExternalLinkProps>;
export {};
