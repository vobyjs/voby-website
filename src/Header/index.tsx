import './header.scss';

export const Header = () => (
  <header class='header'>
    <div class='header__icon icon--voby' />
    Voby
    <a
      class='header__icon header__icon--right icon--discord'
      href='https://discord.gg/E6pK7VpnjC'
      target='_blank'
      rel='noreferrer noopener'
    />
    <a
      class='header__icon icon--github'
      href='https://github.com/vobyjs/voby'
      target='_blank'
      rel='noreferrer noopener'
    />
  </header>
);
