import { ArticleBlock, Comment } from '@/types';

import { authorsAvatars } from './images';

export const blogPhone = '020 7993 2905';
export const blogEmail = 'hello@finsweet.com';
export const blogAdress = 'Finstreet 118 2561 Fintown';

export const staticParagraph = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Non blandit massa enim nec. Scelerisque viverra mauris in aliquam 
 sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus
  et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
   leo. Neque egestas congue quisque egestas diam. 
Risus in hendrerit gravida rutrum quisque non.
`;

export const staticHeading =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.';

export const defaultSubheading =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.';

export const staticList = [
  'Lorem ipsum dolor sit amet',
  'Non blandit massa enim nec scelerisque',
  'Neque egestas congue quisque egestas',
];

export const defaultArticleContent: ArticleBlock[] = [
  {
    heading: staticHeading,
    content: [
      {
        type: 'paragraph',
        text: staticParagraph,
      },
    ],
  },
  {
    heading: staticHeading,
    content: [
      {
        type: 'paragraph',
        text: staticParagraph,
      },
      {
        type: 'paragraph',
        text: staticParagraph,
      },
      {
        type: 'list',
        options: staticList,
      },
      {
        type: 'paragraph',
        text: staticParagraph,
      },
    ],
  },
  {
    heading: staticHeading,
    content: [
      {
        type: 'paragraph',
        text: staticParagraph,
      },
    ],
  },
];

export const postText = `
Duis aute irure dolor in reprehenderit in voluptate
 velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident.`;

export const defaultReasonText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
    ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat.`;

export const defaultMissionDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing 
    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa 
    enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.`;

export const aboutStatics = {
  mainHeadingMessage: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  overview: [
    { heading: '12+', subheading: 'Blogs Published' },
    { heading: '18k+', subheading: 'Views on Finsweet' },
    { heading: '30k+', subheading: 'Total active Users' },
  ],
  missionVision: [
    {
      cap: 'our mision',
      heading: 'Creating valuable content for creatives all around the world',
      description: defaultMissionDescription,
    },
    {
      cap: 'our vision',
      heading: 'A platform that empowers individuals to improve',
      description: defaultMissionDescription,
    },
  ],
  reasons: [
    {
      heading: 'Our team of creatives',
      subheading: defaultSubheading,
      description: defaultReasonText,
    },
    {
      heading: 'Why we started this Blog',
      subheading: defaultSubheading,
      description: defaultReasonText,
    },
  ],
};

export const blogName = 'Modsen Client Blog';

const defaultComment: Comment = {
  avatar: authorsAvatars.jonathan,
  author: 'Jonathan Vallem',
  message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  city: 'New york, USA',
};

export const defaultCommentHeading = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor.`;

export const comments: Comment[] = [
  defaultComment,
  defaultComment,
  defaultComment,
  defaultComment,
  defaultComment,
];

export const defaultAuthorIntroduction = `Hey there, I’m Andrew Jonhson and welcome to my Blog`;

export const defaultAboutAuthor = `Lorem ipsum dolor sit amet, consectetur
 adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
 aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. 
 At risus viverra adipiscing at in tellus.`;

export const privacyStatics = {
  heading: 'Lorem ipsum dolor sit amet',
  description: staticParagraph + staticParagraph,

  article: {
    heading: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`,
    items: [
      {
        type: 'paragraph' as const,
        text: staticParagraph,
      },
      {
        type: 'paragraph' as const,
        text: staticParagraph,
      },
    ],
  },
};

export const blogPostStatics = {
  datePrefix: 'Posted on ',
};

export const categoryDescription =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';

export const selectedResult = 'Selected';

export const responseMessages = {
  success: 'Your message is being processed',
  error: 'Something went wrong...',
};

export const queryTopicsEn = [
  {
    key: '1',
    value: 'Safety',
  },
  {
    key: '2',
    value: 'Partnership',
  },
  {
    key: '3',
    value: 'Other',
  },
];

export const contactUsForm = [
  {
    placeholder: 'formUserName',
    type: 'text' as const,
    name: 'userName',
  },
  {
    placeholder: 'formUserEmail',
    type: 'text' as const,
    name: 'userEmail',
  },
  {
    placeholder: 'formQuery',
    type: 'select' as const,
    name: 'queryTopic',
    options: 'formQueryOptions',
  },
  {
    placeholder: 'formMessage',
    type: 'textarea' as const,
    name: 'message',
    rows: 5,
  },
];

export const altTexts = {
  homeHero: 'Home hero',
  homeSponsorPrfix: 'Sponsor ',
  aboutHero: 'Main reason',
  aboutTeam: 'Out team',
  homeReason: 'Why we started',
  leftArrowAlt: 'Left arrow',
  rightArrowAlt: 'rightArrow',
};

export const notFoundPageStatics = {
  message: '404',
  backToHomeButton: 'Back to Home',
};

export const errorPageStatics = {
  message: 'Something went wrong...',
  resetButtonText: 'Try to reset',
};

export const metaDataHome = {
  title: 'Blog',
  description: 'Modsen Client Blog',
};

export const videoTitle = 'Video about us';

export const homeCap = 'POSTED ON ';

export const recommendedPostHeading = 'Featured post';
