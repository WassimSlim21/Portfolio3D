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
        deskScale: isSmall ? 0.05 : isMobile ? 0.09 : 0.1,
        deskPosition: isSmall ? [1, -2, 0] : isMobile ? [-0.5, -3, 0] : [0.5, -6, 0],

        robotScale: isSmall ? 3 : isMobile ? 3 : 4,
        robotPosition: isSmall ? [-1,-4, 6.1]: isMobile ? [-1, -10, 4]  : [0, -10, 4],
        powerBIScale: isSmall ? 0.2 : isMobile ? 0.2 : 0.3,
        powerBIPosition: isSmall ? [6, 0, 0] : isMobile ? [8, 0, 0] : isTablet ? [12, 0, 0] : [16, 0, 0],

        azureLogoScale: isSmall ? 0.2 : isMobile ? 0.2 : 0.3,
        azureLogoPosition: isSmall ? [4, 0, 0] : isMobile ? [6, 0, 0] : isTablet ? [10, 0, 0] : [12, 0, 0],

        csharpLogoScale: isSmall ? 0.02 : isMobile ? 0.02 : 0.03,
        csharpLogoPosition: isSmall ? [4, 6, 0] : isMobile ? [6, 6, 0] : isTablet ? [10, 6, 0] : [14, 6, 0],

        microsoftLogoScale: isSmall ? 1.2 : isMobile ? 1.2 : 1.5,
        microsoftLogoPosition: isSmall ? [4, 6, 0] : isMobile ? [6, 6, 0] : isTablet ? [10, 6, 0] : [14, -6, 0],

        pythonScale: isSmall ? 0.3 : isMobile ? 0.3 : 0.4,
        pythonPosition: isSmall ? [-6, 3, 0] : isMobile ? [-10,4, 0] : isTablet ? [-14, 2, 0] : [-16, 3, 0],

        reactLogoScale: isSmall ? 0.3 : isMobile ? 0.3 : 0.5,
        reactLogoPosition: isSmall ? [-4, 6, 0] : isMobile ? [-8, 6, 0] : isTablet ? [-10, 6, 0] : [-12, 6, 0],

        globeLogoScale: isSmall ? 0.3 : isMobile ? 0.3 : 0.5,
        globeposition: isSmall ? [-4, 6, 0] : isMobile ? [-8, 6, 0] : isTablet ? [-10, 6, 0] : [-12, 6, 0]

        /* cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
         reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
         ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
         targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
     */
    };

};