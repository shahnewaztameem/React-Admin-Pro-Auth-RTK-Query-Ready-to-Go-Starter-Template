/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { theme } from 'antd';
import syntaxTheme from './HLTheme';
import CardToolBar from './CardToolbar';
import { codeBoxHighlightCss } from './DemoCard.style';

const { useToken } = theme;

function CodeBox({ language, children }) {
  const [codeExpand, setCodeExpand] = useState(false);

  const { token } = useToken();

  const handleExpand = () => {
    setCodeExpand(!codeExpand);
  };

  return (
    <>
      <CardToolBar
        code={children}
        expand={handleExpand}
        isExpand={codeExpand}
      />
      <div css={codeBoxHighlightCss(token, codeExpand)}>
        <SyntaxHighlighter language={language} style={syntaxTheme}>
          {children}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export default CodeBox;
