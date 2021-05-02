import React, { FC } from 'react'
import styled from 'styled-components'

import { Section } from '../layout/Section'
import { TwoColumns } from '../layout/Grid'
import { FullBleed } from '../layout/FullBleed'
import { CTA } from '../CTA'

const Header = styled.div`
  margin-bottom: 32px;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  padding: 16px;
  border-radius: 3px;
  border: 1px rgba(0, 0, 0, 0.2) solid;
`

const Quote = styled.blockquote`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  img {
    flex-shrink: 0;
  }
`

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-transform: uppercase;
`

export const Security: FC = () => {
  return (
    <FullBleed>
      <Section h1="Secure, non-custodial contracts">
        <TwoColumns>
          <Header>
            <p>Smart contract security is sCristr’s top priority.</p>
            <p>The sCristr protocol is fully audited  and no critical bugs were found.</p>
          </Header>
          <div />
        </TwoColumns>
        <TwoColumns>
                    <div>
              <h3>Bug Bounty Program</h3>
              <p>
                An open reward pool for discovering and reporting vulnerabilities in mStable is ongoing, with rewards of up to US$10,000.
              </p>
            </div>
            <Links>
              <CTA arrow href="https://scristr.org/">
                Learn More
              </CTA>
            </Links>
          </Box>
        </TwoColumns>
      </Section>
    </FullBleed>
  )
}
