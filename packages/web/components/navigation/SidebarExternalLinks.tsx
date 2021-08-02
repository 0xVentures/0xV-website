import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarExternalLinks = () => {
  return (
    <div className="flex flex-row justify-center items-end space-x-8 bg-gray-800 py-4 h-2/4">
      <a href="https://discord.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'discord']} size="2x" inverse />
      </a>

      <a href="https://twitter.com/0x_Ventures" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" inverse />
      </a>

      <a href="https://medium.com/@0xventures" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'medium']} size="2x" inverse />
      </a>

      <a href="https://github.com/0xVentures" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'github']} size="2x" inverse />
      </a>
    </div>
  );
};

export default SidebarExternalLinks;
