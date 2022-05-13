import { FaGithub, FaDev, FaLinkedin, FaQuora, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Your-Name-Here. All Rights Reserved.`,
  author: {
    name: 'Your-Name-Here',
    accounts: [
      {
        url: 'https://github.com/coding-to-music',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: 'https://twitter.com/muhammad_ahmaad',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />
      },
      {
        url: 'https://dev.to/codingtomusic',
        label: 'Dev Account',
        type: 'gray',
        icon: <FaDev />
      },
      {
        url: 'https://linkedin.com/in/thomasconnors44',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
      {
        url: 'https://www.quora.com/profile/Muhammad-Ahmad-66',
        label: 'Quora Account',
        type: 'red',
        icon: <FaQuora />
      },
      {
        url: 'mailto:example1@example.com',
        label: 'Mail ahmad',
        type: 'gray',
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
