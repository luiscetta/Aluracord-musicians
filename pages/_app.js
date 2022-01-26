
function GlobalStyles() {
    return (
        <style global jsx>{`
       * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }

      body {
        font-family:  Ubunto, sans-serif;
      }

      html, body, #__next {
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex: 1;
      }

      #__next {
        flex: 1;
      }

      #__next > * {
        flex: 1;
      }

        `}
        </style>
    );
}

export default function MyApp({ Component, pageProps }) {
    console.log('Roda em todas as páginas.')

    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}