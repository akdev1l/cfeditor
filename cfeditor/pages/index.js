import { useState } from 'react';

import Head from 'next/head'
import CFEditor from '../src/cfeditor'

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>CFEditor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="content">
          <CFEditor />
        </div>
      </main>
    </div>
  )
}
