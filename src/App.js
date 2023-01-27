import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function App() {
  const [markDown, setMarkDown] = useState("## markdown preview");
  return (
    <main>
      <section className="markdown">
        <textarea
          class="input"
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
