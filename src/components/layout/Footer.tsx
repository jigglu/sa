import React, { FC } from 'react'
import styled from 'styled-components'

import Discord from '../../images/discord.svg'
import Medium from '../../images/medium.svg'
import Twitter from '../../images/twitter.svg'
import Github from '../../images/github.svg'
import Email from '../../images/email.svg'
import Telegram from '../../images/telegram.svg'

import { ExternalLink } from '../ExternalLink'
import { Grid } from './Grid'
import { FullBleed } from './FullBleed'
import Signup from '../Signup'

const Header = styled.h4`
  margin: 8px 0;
  font-weight: normal;
`

const Links = styled.div`
  > * {
    display: block;
    margin-bottom: 8px;
  }
  a {
    font-weight: normal;
  }
`

const EasterEgg = styled.div`
  font-size: 10px;
  opacity: 0.1;
`

const Social = styled.div`
  margin: 4px 0 8px 0;

  ${Links} {
    display: flex;
    align-items: center;
    gap: 16px;
    > * {
      display: block;
    }
    img {
      height: 28px;
    }
  }

  @media (min-width: 600px) {
    grid-column: 4 / 7;
    text-align: right;

    ${Links} {
      justify-content: flex-end;
    }
  }
`

const Top = styled(Grid)`
  margin-bottom: 64px;
  padding: 0 24px;
`

const Bottom = styled(Grid)`
  padding: 0 24px;

  > :first-child {
    grid-column: left;
  }

  > :last-child {
    grid-column: right;
    text-align: right;
  }
`

const Container = styled.footer``

const StyledFullBleed = styled(FullBleed)`
  padding-top: 16px;
  padding-bottom: 32px;
  background-image: none;
`

export const Footer: FC = () => {
  return (
    <StyledFullBleed>
      <Container>
        <Top>
          <div>
            <Header>Protocol</Header>
            <Links>
              <ExternalLink href="https://app.scristr.org">App</ExternalLink>
              <ExternalLink href="https://docs.scristr.org">Documentation</ExternalLink>
              <ExternalLink href="https://github.com/scristr">Developers</ExternalLink>
            </Links>
          </div>
          <div>
            <Header>Governance</Header>
            <Links>
              <ExternalLink href="https://governance.scristr.org">Governance App</ExternalLink>
              <ExternalLink href="https://forum.scristr.org">Forum</ExternalLink>
              <ExternalLink href="https://snapshot.page/#/scristr">Vote</ExternalLink>
            </Links>
          </div>
          <Social>
            <Header>Keep up to date and join the community</Header>
            <Links>
              <ExternalLink href="https://discord.gg/pgCVG7e">
                <img src={Discord} alt="Discord" />
              </ExternalLink>
              <ExternalLink href="mailto:info@scristr.org">
                <img src={Email} alt="Email" />
              </ExternalLink>
              <ExternalLink href="https://github.com/scristr">
                <img src={Github} alt="Github" />
              </ExternalLink>
              <ExternalLink href="https://medium.com/scristr">
                <img src={Medium} alt="Medium" />
              </ExternalLink>
              <ExternalLink href="https://twitter.com/scristr_">
                <img src={Twitter} alt="Twitter" />
              </ExternalLink>
              <ExternalLink href="https://t.me/scristrofficial">
                <img src={Telegram} alt="Telegram" />
              </ExternalLink>
              
                          </Links>
            <Signup />
          </Social>
        </Top>
        <Bottom>
                  </Bottom>
      </Container>
    </StyledFullBleed>
  )
}
