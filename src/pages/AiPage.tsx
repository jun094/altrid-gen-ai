import { checkMyWriting } from 'modules/gptCore';
import { useEffect } from 'react';

function AiPage() {
  /** TODO: 테스트용 코드, 릴리즈 전 삭제되어야 함. */
  useEffect(() => {
    checkMyWriting({ text: '' })
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <h1
        style={{
          fontSize: '32px',
          fontWeight: 700,
        }}
      >
        GenAI 해커톤 🎉
      </h1>
    </div>
  );
}

export default AiPage;
