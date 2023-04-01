import { checkMyWriting } from 'modules/gptCore';
import { useEffect } from 'react';

function AiPage() {
  /** TODO: 테스트용 코드, 릴리즈 전 삭제되어야 함. */
  useEffect(() => {
    checkMyWriting({ text: sampleText })
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

const sampleText = `Once upon a time, there was a monster living deep in the forest. Its name was Grimbok, and it was feared by all who knew of its existence.

Grimbok was a massive creature with razor-sharp teeth and eyes that glowed in the dark. Its fur was matted and tangled, and it had a long, pointed tail that it used to swipe at anything that came too close.

Despite its fearsome appearance, Grimbok was a lonely creature. It had been shunned by the other animals in the forest because of its monstrous appearance and was forced to live a solitary life.

One day, a group of travelers stumbled upon Grimbok's lair while they were lost in the forest. They were terrified at the sight of the monster and tried to run away, but Grimbok caught them.

To their surprise, Grimbok didn't attack them. Instead, it simply looked at them with its glowing eyes and let out a low growl.

The travelers soon realized that Grimbok wasn't trying to hurt them, but was merely trying to communicate. They decided to take a chance and try to befriend the monster.

Over time, the travelers visited Grimbok regularly, bringing it food and gifts. Slowly but surely, Grimbok began to trust them and even allowed them to touch its matted fur.

Thanks to the kindness of the travelers, Grimbok was no longer alone. It had found friends in the most unlikely of places and finally had a sense of belonging.

From that day forward, Grimbok was no longer feared by the animals in the forest. It had become a legend, a monster that was tamed by the kindness of strangers.`;
