import React, { useEffect, useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { Container } from 'App.styled';
import {
  HeaderLink,
  HeaderSection,
  HeaderWrapper,
  SvgWrapper,
} from './Header.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { Menu } from 'Navigation/Menu';
import { Logo } from 'components/Logo/Logo';

export const Header = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(true);
    };

    const handleScrollEnd = () => {
      setIsScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scrollend', handleScrollEnd);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScrollEnd);
    };
  }, []);

  return (
    <>
      <HeaderSection className={isScrolled ? 'scroll' : ''}>
        <Container>
          <HeaderWrapper>
            <Logo />
            <button type="button" aria-label="Open menu" onClick={openModal}>
              <Svg w={36} h={36} icon="menu" />
            </button>

            <HeaderLink href="google.com">
              Get in touch
              <SvgWrapper>
                <Svg w={14} h={14} icon="arrow-top" />
              </SvgWrapper>
            </HeaderLink>
          </HeaderWrapper>
        </Container>
      </HeaderSection>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Menu close={closeModal} />
        </Modal>
      )}
    </>
  );
};
