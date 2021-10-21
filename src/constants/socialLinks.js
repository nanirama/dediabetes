import React from 'react'
import { ICONS } from '../constants/icons'
import { IconBlock } from '../components/Icons'

const SocialLinks = () => {
  return (
    <ul className="flex justify-center list-none">
      <li>
        <a
          href="https://www.facebook.com/cuidadodiabetes"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Enlace pagina facebook"
        >
          <IconBlock
            icon={ICONS.FACEBOOK}
            color="rgb(33,151,241)"
            viewBox="0 0 490 490"
            size={40}
            position="relative"
          ></IconBlock>
        </a>
      </li>

      <li>
        <a
          href="https://twitter.com/dediabetescom"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Enlace pagina twitter"
        >
          <IconBlock
            icon={ICONS.TWITTER}
            color="rgb(42,163,239)"
            viewBox="0 0 490 490"
            size={40}
            position="relative"
          ></IconBlock>
        </a>
      </li>
    </ul>
  )
}

export default SocialLinks
