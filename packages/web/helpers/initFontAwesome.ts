import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faTwitter, faDiscord, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

const initFontAwesome = () => {
  library.add(fab, faTwitter, faDiscord, faGithub, faMedium);
};

export default initFontAwesome;
