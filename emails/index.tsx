import { Html, Head, Body, Section } from '@react-email/components';
import * as React from 'react';

type EmailProps = {
  payloadBody: string,
}

const Email = (props: EmailProps) => {
  const {
    payloadBody = JSON.stringify(props.payloadBody, null, 2)
  } = props

  return (

    <Html lang="en" dir="ltr">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Email Notification on changes made to Game reviews</title>
      </Head>
      <Body className="bg-gray-700 my-auto mx-auto font-sans">
        <Section className='mt-8 text-white'>


          {payloadBody}

        </Section>
      </Body>
    </Html>

  )
}

export default Email