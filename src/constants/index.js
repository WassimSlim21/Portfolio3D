export const navLinks = [
    {
        id: 1,
        name: 'About',
        href: '#about',
    },
    {
        id: 2,
        name: 'Skills',
        href: '#skills',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
    {
        id: 6,
        name: 'Hobbies',
        href: '#hobbies'
    }
];

export const socialLinks = [
    {
        id: 1,
        name: 'Github',
        href: 'https://github.com/WassimSlim21',
        icon: 'github',
    },
    {
        id: 2,
        name: 'Instagram',
        href: 'https://github.com/WassimSlim21',
        icon: 'instagram'
    }
]

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.07 : 0.12,
        deskPosition: isSmall ? [-0.5, 2, 0] : isMobile ? [-0.5, -1, 0] : [-0.5, -8.5, 0],
        powerBIScale: isSmall ? 0.2 : isMobile ? 0.4 : 0.5,
        powerBIPosition: isSmall ? [4, 4, 0] : isMobile ? [6, 4, 0] : isTablet ? [10, 4, 0] : [12, 3, 2],
        pythonScale: isSmall ? 0.2 : isMobile ? 0.4 : 0.5,
        pythonPosition: isSmall ? [-5, 7, 0] : isMobile ? [-8, 10, 0] : isTablet ? [-14, 10, 0] : [-16, 3, 0],
        azureSynapseScale: isSmall ? 0.5 : isMobile ? 0.8 : 1,
        azureSynapsePosition: isSmall ? [-5, 7, 0] : isMobile ? [-8, 10, 0] : isTablet ? [-14, 10, 0] : [-16, 3, 0],
        reactLogoPosition: isSmall ? [10, -4, 0] : isMobile ? [10, -4, 0] : isTablet ? [10, -4, 0] : [10, -5, 0],
        reactLogoScale: isSmall ? 0.3 : isMobile ? 0.3 : 0.5,
        robotScale: isSmall ? 0.04 : isMobile ? 0.05 : 0.7,
        robotPosition: isSmall ? [-0.5, 2, 0] : isMobile ? [-0.5, -1, 0] : [-6, -2.5, 7],
        azureLogoScale: isSmall ? 0.2 : isMobile ? 0.3 : 0.5,
        azureLogoPosition: isSmall ? [-5, 7, 0] : isMobile ? [-8, 10, 0] : isTablet ? [-14, 10, 0] : [-16, 8, 0],
        csharpLogoScale: isSmall ? 0.02 : isMobile ? 0.03 : 0.05,
        csharpLogoPosition: isSmall ? [-5, 7, 0] : isMobile ? [-8, 10, 0] : isTablet ? [-14, 10, 0] : [-16, -5, 0]

        /* cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
         reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
         ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
         targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
     */
    };

};